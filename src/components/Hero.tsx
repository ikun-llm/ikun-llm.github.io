"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const letters = ["I", "K", "U", "N"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 100]);
  const mascotY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={ref} className="relative h-[120vh]">
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6"
      >
        {/* Mascot with parallax */}
        <motion.div
          style={{ y: mascotY }}
          initial={{ opacity: 0, scale: 0, filter: "blur(30px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-4"
        >
          <div className="absolute inset-0 scale-[2] bg-[radial-gradient(circle,rgba(255,106,0,0.15),transparent_55%)] animate-glow-breathe pointer-events-none" />
          <span className="relative text-[130px] md:text-[170px] leading-none select-none">
            🐔
          </span>
        </motion.div>

        {/* Character-by-character IKUN title */}
        <div className="flex items-center justify-center gap-1 md:gap-3 mb-5">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.3 + i * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display font-900 text-[80px] md:text-[140px] lg:text-[180px] leading-[0.8] tracking-[-0.05em] bg-gradient-to-b from-text-1 via-accent to-amber bg-clip-text text-transparent inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle with line accents */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center gap-5 mb-6 overflow-hidden"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
          <p className="font-display font-600 text-sm md:text-base text-text-2 tracking-[0.4em] uppercase whitespace-nowrap">
            练习时长两年半
            <span className="inline-block ml-2 animate-bounce-ball">🏀</span>
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-sm text-text-3 max-w-xs mb-12 leading-loose"
        >
          唱、跳、Rap、篮球……和训练大语言模型
          <br />
          <span className="text-text-2">全网最有梗的 AI 开源社区</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex gap-4"
        >
          <a
            href="https://huggingface.co/IKUN-LLM"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-2xl text-sm font-display font-700 bg-accent text-void overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,106,0,0.3)]"
          >
            <span className="relative z-10">🤗 加入 IKUN</span>
            <div className="absolute inset-0 bg-amber translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </a>
          <a
            href="https://github.com/ikun-llm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl text-sm font-display font-700 text-text-1 border border-line hover:border-accent/30 hover:text-accent transition-all duration-500"
          >
            GitHub →
          </a>
        </motion.div>

        {/* Scroll mouse indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12"
        >
          <div className="w-6 h-10 rounded-full border-2 border-line flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
