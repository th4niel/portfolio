"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const prevTextsRef = useRef(texts);

  // Typing and Deleting Logic
  useEffect(() => {
    // texts changed (e.g. language switch) — restart the current word instead of
    // carrying over a subIndex that no longer matches the new text's length,
    // which would otherwise get the animation permanently stuck.
    if (prevTextsRef.current !== texts) {
      prevTextsRef.current = texts;
      setSubIndex(0);
      setDeleting(false);
      return;
    }

    if (index >= texts.length) return;

    const currentText = texts[index];

    // Pause after typing
    if (!deleting && subIndex === currentText.length) {
      const timeout = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    // Pause after deleting
    if (deleting && subIndex === 0) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 500);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  return (
    <div className="relative flex justify-center items-center min-h-[50px]">
      {/* Glowing Ring */}
      <motion.div
        className="absolute w-[160px] h-[160px] rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 opacity-30 blur-2xl z-[-1]"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {/* Typewriter Animation for the Full Word */}
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-400 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words hyphens-auto text-center max-w-[280px] sm:max-w-none">
          {texts[index].substring(0, subIndex)}
        </motion.span>
      </AnimatePresence>

      {/* Pulsing Gradient Dot */}
      <motion.span
        className="ml-2 w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      />
    </div>
  );
}
