// hooks/use-close-on-back.ts
import { useEffect, useRef } from "react";

let globalStackId = 0;

type HistoryState = {
  uiStackId?: number;
  [key: string]: unknown;
} | null;

interface UseCloseOnBackOptions {
  /**
   * Optional ref to the element that opened the UI.
   * When the UI closes (via back gesture or programmatic close) focus will be restored there.
   */
  restoreFocusRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Hook: close on browser back/popstate instead of navigating away.
 *
 * @param isOpen - whether the UI (drawer/dialog/sheet) is currently open
 * @param onClose - callback to close the UI
 * @param options - optional settings (e.g. restoreFocusRef)
 */
export function useCloseOnBack(
  isOpen: boolean,
  onClose: () => void,
  options?: UseCloseOnBackOptions,
) {
  const ignoreNextPop = useRef(false);
  const stateIdRef = useRef<number | null>(null);
  const closedByPopRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!isOpen) return;

    // assign a unique id for this open instance
    const myId = ++globalStackId;
    stateIdRef.current = myId;

    // push a history entry that we can detect later
    try {
      // keep whatever existing state but annotate with our uiStackId
      const currentState = window.history.state as HistoryState;
      const nextState =
        typeof currentState === "object" && currentState !== null
          ? { ...(currentState as object), uiStackId: myId }
          : { uiStackId: myId };
      window.history.pushState(nextState, "");
    } catch {
      // ignore pushState errors in strict/capped environments
    }

    const onPop = (e: PopStateEvent) => {
      // If we are ignoring the next pop (because we called history.back programmatically), clear the flag and skip.
      if (ignoreNextPop.current) {
        ignoreNextPop.current = false;
        return;
      }

      // Read state safely
      const st = (e.state as HistoryState) ?? null;
      const poppedId = st && typeof st === "object" ? st.uiStackId : undefined;

      // If the popped state belongs to us, or if popped state is null (some browsers),
      // treat it as a signal to close the UI.
      if (poppedId === myId || poppedId === undefined) {
        closedByPopRef.current = true;
        onClose();
      }
    };

    window.addEventListener("popstate", onPop);

    return () => {
      window.removeEventListener("popstate", onPop);

      // If the UI was closed by a popstate event, the history entry was already consumed.
      // If we are cleaning up because the UI closed programmatically, remove our pushed entry.
      if (!closedByPopRef.current) {
        try {
          // If the current history state still references our id, go back one step to remove it.
          const curState = window.history.state as HistoryState;
          const curId =
            curState && typeof curState === "object"
              ? curState.uiStackId
              : undefined;

          if (curId === myId) {
            // prevent the pop handler from interpreting this back as a user action
            ignoreNextPop.current = true;
            window.history.back();
          }
        } catch {
          // ignore errors from history manipulation
        }
      } else {
        // reset the flag for future opens
        closedByPopRef.current = false;
      }

      // restore focus to opener if provided
      if (options?.restoreFocusRef?.current) {
        try {
          options.restoreFocusRef.current.focus();
        } catch {
          // ignore focus errors
        }
      }
    };
    // onClose is stable if you memoize it in parent; include it here to be safe
  }, [isOpen, onClose, options?.restoreFocusRef]);
}
