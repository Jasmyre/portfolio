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

  /**
   * Optional ref which, when true during cleanup, prevents the hook from calling history.back()
   * (useful when you intentionally close the UI before navigating).
   */
  skipHistoryOnCloseRef?: React.RefObject<boolean | null>;
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
  const openedHrefRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isOpen) return;

    const myId = ++globalStackId;
    stateIdRef.current = myId;

    // capture the href at the time we opened the UI
    openedHrefRef.current = window.location.href;

    // push a history entry we can detect later
    try {
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
      if (ignoreNextPop.current) {
        ignoreNextPop.current = false;
        return;
      }

      const st = (e.state as HistoryState) ?? null;
      const poppedId = st && typeof st === "object" ? st.uiStackId : undefined;

      // when the popped state belongs to us (or is null in some browsers) -> close UI
      if (poppedId === myId || poppedId === undefined) {
        closedByPopRef.current = true;
        onClose();
      }
    };

    window.addEventListener("popstate", onPop);

    return () => {
      window.removeEventListener("popstate", onPop);

      // If the UI was closed by a popstate event, our pushed history entry was consumed.
      // Otherwise (we closed programmatically), we should try to remove our pushed entry *only*
      // if it's still present and it is safe to do so (i.e., href didn't change and caller didn't request skipping).
      if (!closedByPopRef.current) {
        try {
          const curState = window.history.state as HistoryState;
          const curId =
            curState && typeof curState === "object"
              ? curState.uiStackId
              : undefined;

          // decide whether to skip removal (consumer requested it)
          const skipRequested = !!options?.skipHistoryOnCloseRef?.current;

          // consider URL unchanged if the href is identical (if you want to ignore hash only, compare pathname+search)
          const hrefUnchanged = openedHrefRef.current === window.location.href;

          if (curId === myId && !skipRequested && hrefUnchanged) {
            // prevent the pop handler from interpreting this back as a user action
            ignoreNextPop.current = true;
            window.history.back();
          } else {
            // we won't call history.back(). In most cases that's OK:
            // - if navigation happened while the UI was open, the stack still contains our uiStack entry,
            //   which will behave reasonably for a back-to-close flow on the new page.
            // - if caller requested skipping, they handle history themselves.
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
    // include options.skipHistoryOnCloseRef in deps to react to its changes (ref object identity won't change normally)
  }, [
    isOpen,
    onClose,
    options?.restoreFocusRef,
    options?.skipHistoryOnCloseRef,
  ]);
}
