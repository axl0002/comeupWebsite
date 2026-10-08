"use client";

import { useEffect, useState } from "react";

/* One quote at a time, fading out and the next rising in, as the app's
   landing and loading screens do. Starts on a random line. */
export function QuoteRotator({
  quotes,
  every = 6000,
}: {
  quotes: string[];
  every?: number;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * quotes.length));
  }, [quotes.length]);

  useEffect(() => {
    if (quotes.length < 2) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % quotes.length);
        setVisible(true);
      }, 450);
    }, every);
    return () => clearInterval(timer);
  }, [quotes.length, every]);

  return (
    <p
      aria-live="polite"
      className="mx-auto min-h-[3.3em] max-w-3xl text-balance text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground transition-all duration-500 ease-out sm:text-5xl"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
      }}
    >
      &ldquo;{quotes[index]}&rdquo;
    </p>
  );
}
