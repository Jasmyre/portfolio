"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Choice = {
  text: string;
  nextSlideId: string;
};

type Slide = {
  id: string;
  message: string;
  imageKey: string;
  choices: Choice[];
  clearThenRestart?: boolean;
  restartDelayMs?: number;
};

const FLOW_ERROR_SLIDE_ID = "flow_error";
const INTRO_SLIDE_ID = "intro_1";
const FALLBACK_SLIDE: Slide = {
  id: FLOW_ERROR_SLIDE_ID,
  message: "Flow error: missing slide.",
  imageKey: FLOW_ERROR_SLIDE_ID,
  choices: [{ text: "Restart", nextSlideId: INTRO_SLIDE_ID }],
};

const IMAGE_PATHS: Record<string, string> = {
  intro_1: "/assets/goobers.jpg",
  intro_2: "/assets/cat_1.jpg",
  intro_3: "/assets/shy.jpg",
  ask_main: "/assets/blush.jpg",
  no_1: "/assets/sad.jpg",
  no_2: "/assets/;((.jpg",
  no_3: "/assets/bananana.jpg",
  no_4: "/assets/disappointed.jpg",
  no_5: "/assets/sus.jpg",
  no_6: "/assets/pls.jpg",
  no_7: "/assets/wala_na.jpg",
  no_8: "/assets/cat_1.jpg",
  no_9: "/assets/chill_cat.jpg",
  accepted_intro: "/assets/blushing_love_cat.jpg",
  plans: "/assets/plan.jpg",
  ending: "/assets/genuine.jpg",
  love_u: "/assets/2_flowers.jpg",
  exit_clear: "/assets/cuteness.jpg",
};

const SLIDES: Record<string, Slide> = {
  intro_1: {
    id: "intro_1",
    message: "Hi Darlene!",
    imageKey: "intro_1",
    choices: [{ text: "TAP ME", nextSlideId: "intro_2" }],
  },
  intro_2: {
    id: "intro_2",
    message: "Alam mo naman na i really really really like u right?",
    imageKey: "intro_2",
    choices: [{ text: "RIGHT?!", nextSlideId: "intro_3" }],
  },
  intro_3: {
    id: "intro_3",
    message: "Soooooooo.....",
    imageKey: "intro_3",
    choices: [{ text: "SO WHAT!", nextSlideId: "ask_main" }],
  },
  ask_main: {
    id: "ask_main",
    message: "Will you be my Girl?",
    imageKey: "ask_main",
    choices: [
      { text: "YES!", nextSlideId: "accepted_intro" },
      { text: "NO", nextSlideId: "no_1" },
    ],
  },
  no_1: {
    id: "no_1",
    message: "WILL YOU PLEASE BE MY GIRL????",
    imageKey: "no_1",
    choices: [
      { text: "YES!", nextSlideId: "accepted_intro" },
      { text: "NO", nextSlideId: "no_2" },
    ],
  },
  no_2: {
    id: "no_2",
    message: "SIGE NA PLS",
    imageKey: "no_2",
    choices: [
      { text: "OO NA!", nextSlideId: "accepted_intro" },
      { text: "AYOKO", nextSlideId: "no_3" },
    ],
  },
  no_3: {
    id: "no_3",
    message: "AYAW MO PA RIN BA",
    imageKey: "no_3",
    choices: [
      { text: "GUSTO NA", nextSlideId: "accepted_intro" },
      { text: "AYOKO", nextSlideId: "no_4" },
    ],
  },
  no_4: {
    id: "no_4",
    message: "Ah ayaw mo",
    imageKey: "no_4",
    choices: [
      { text: "GUSTO NA", nextSlideId: "accepted_intro" },
      { text: "TALAGA", nextSlideId: "no_5" },
    ],
  },
  no_5: {
    id: "no_5",
    message: "ayaw mo parin ah",
    imageKey: "no_5",
    choices: [
      { text: "GUSTO NA", nextSlideId: "accepted_intro" },
      { text: "TALAGA", nextSlideId: "no_6" },
    ],
  },
  no_6: {
    id: "no_6",
    message: "Ah tamo talaga oh",
    imageKey: "no_6",
    choices: [
      { text: "GUSTO NA", nextSlideId: "accepted_intro" },
      { text: "TALAGA", nextSlideId: "no_7" },
    ],
  },
  no_7: {
    id: "no_7",
    message: "Wala na tinanggal ko na",
    imageKey: "no_7",
    choices: [{ text: "WOW", nextSlideId: "no_8" }],
  },
  no_8: {
    id: "no_8",
    message: "Tanungin kita ulit ah hehehhehe",
    imageKey: "no_8",
    choices: [{ text: "E ANO PA BA", nextSlideId: "no_9" }],
  },
  no_9: {
    id: "no_9",
    message: "Darlene, will you be my girl?",
    imageKey: "no_9",
    choices: [{ text: "YES", nextSlideId: "accepted_intro" }],
  },
  accepted_intro: {
    id: "accepted_intro",
    message: "YAY SO ANG PLANS SO FAR AYYYYYY",
    imageKey: "accepted_intro",
    choices: [{ text: "ANO", nextSlideId: "plans" }],
  },
  plans: {
    id: "plans",
    message:
      "1. Unli kwentuhan hanggang madaling araw.\n" +
      "2. Random food trips.\n" +
      "3. Study dates\n" +
      "4. Good morning & good night messages everyday.\n" +
      "5. Supporting each other sa goals.\n" +
      "6. Making memories na pwede nating balikan balang araw.\n\n" +
      "And pinaka important:\n" +
      "I'll always choose you. 🫶",
    imageKey: "plans",
    choices: [{ text: "hmmm", nextSlideId: "ending" }],
  },
  ending: {
    id: "ending",
    message:
      "THAT'S ALL Darlene!!! THANK YOU SO MUCHIE!!!!!! HOPE YOU'RE HAPPY MWAAAAA",
    imageKey: "ending",
    choices: [{ text: "MWAAAAA", nextSlideId: "love_u" }],
  },
  love_u: {
    id: "love_u",
    message: "LOVE U",
    imageKey: "love_u",
    choices: [{ text: "I LOVE YOU SO MUCHIE", nextSlideId: "exit_clear" }],
  },
  exit_clear: {
    id: "exit_clear",
    message: "THE END. Do you want to restart from the beginning?",
    imageKey: "exit_clear",
    choices: [
      { text: "YES, RESTART", nextSlideId: INTRO_SLIDE_ID },
      { text: "STAY HERE", nextSlideId: "exit_clear" },
    ],
  },
  flow_error: {
    id: "flow_error",
    message: "Flow error: missing slide.",
    imageKey: "flow_error",
    choices: [{ text: "Restart", nextSlideId: INTRO_SLIDE_ID }],
  },
};

function ImageFallbackCard({
  slideId,
  imageKey,
}: {
  slideId: string;
  imageKey: string;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl border border-rose-300/70 bg-rose-100/80 p-6 text-center shadow-inner">
      <p className="font-bold text-2xl text-rose-700">Placeholder</p>
      <p className="mt-4 text-rose-700 text-sm">Slide: {slideId}</p>
      <p className="text-rose-700 text-sm">Image Key: {imageKey}</p>
    </div>
  );
}

function SlideImage({ slide }: { slide: Slide }) {
  const [failed, setFailed] = useState(false);

  const imagePath = IMAGE_PATHS[slide.imageKey];

  if (!imagePath || failed) {
    return <ImageFallbackCard imageKey={slide.imageKey} slideId={slide.id} />;
  }

  return (
    <Image
      alt={`Slide ${slide.id}`}
      className="h-full w-full rounded-3xl object-cover"
      height={250}
      onError={() => setFailed(true)}
      src={imagePath}
      width={250}
    />
  );
}

function ChoiceButtons({
  choices,
  onChoose,
}: {
  choices: Choice[];
  onChoose: (choice: Choice) => void;
}) {
  const safeChoices = choices.length
    ? choices
    : [{ text: "Restart", nextSlideId: INTRO_SLIDE_ID }];

  return (
    <div
      className={`grid w-full max-w-xl gap-3 ${
        safeChoices.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {safeChoices.map((choice) => (
        <button
          className="cursor-pointer hover:-translate-y-0.5 rounded-xl border border-rose-300 bg-white/90 px-5 py-3 font-semibold text-rose-700 text-sm shadow-sm transition hover:bg-rose-50 hover:shadow-md"
          key={`${choice.text}-${choice.nextSlideId}`}
          onClick={() => onChoose(choice)}
          type="button"
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}

export default function MuhehehehePage() {
  const [currentSlideId, setCurrentSlideId] = useState<string>(INTRO_SLIDE_ID);
  const [isClearing, setIsClearing] = useState<boolean>(false);

  const slide = useMemo(
    () =>
      SLIDES[currentSlideId] ??
      SLIDES[FLOW_ERROR_SLIDE_ID] ??
      FALLBACK_SLIDE,
    [currentSlideId]
  );

  useEffect(() => {
    if (!slide.clearThenRestart) {
      setIsClearing(false);
      return;
    }

    setIsClearing(true);
    const delay = slide.restartDelayMs ?? 2000;
    const timer = window.setTimeout(() => {
      setCurrentSlideId(INTRO_SLIDE_ID);
      setIsClearing(false);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [slide]);

  const handleChoice = (choice: Choice) => {
    const nextExists = Boolean(SLIDES[choice.nextSlideId]);
    setCurrentSlideId(nextExists ? choice.nextSlideId : FLOW_ERROR_SLIDE_ID);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-rose-100 via-pink-100 to-orange-100 p-4">
      <div className="-left-10 -top-10 pointer-events-none absolute h-40 w-40 rounded-full bg-rose-300/40 blur-2xl" />
      <div className="-bottom-10 -right-10 pointer-events-none absolute h-56 w-56 rounded-full bg-orange-300/40 blur-2xl" />

      <section
        className={`w-full max-w-4xl rounded-3xl border border-white/60 bg-white/70 p-5 shadow-xl backdrop-blur-md transition-opacity duration-500 sm:p-8 ${
          isClearing ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="mx-auto h-[320px] w-full max-w-[450px] overflow-hidden rounded-3xl border border-rose-200 bg-white shadow-md sm:h-[450px]">
          <SlideImage key={slide.id} slide={slide} />
        </div>

        <p className="mx-auto mt-6 max-w-3xl whitespace-pre-line text-center text-base text-rose-900 leading-relaxed sm:text-lg">
          {slide.message || " "}
        </p>

        {slide.clearThenRestart ? null : (
          <div className="mt-7 flex justify-center">
            <ChoiceButtons choices={slide.choices} onChoose={handleChoice} />
          </div>
        )}
      </section>
    </main>
  );
}
