"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
      {/* Big mascot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="text-[120px] md:text-[160px] leading-none mb-4 select-none"
      >
        🐔
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-2"
      >
        <span className="bg-gradient-to-r from-accent-light via-accent-lighter to-purple-400 bg-clip-text text-transparent">
          IKUN
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-bold text-slate-300 mb-4"
      >
        练习时长两年半 🏀
      </motion.p>

      {/* Slogan */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-slate-400 font-light tracking-[0.25em] mb-3"
      >
        大 道 至 简
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-base text-slate-500 max-w-md mb-10"
      >
        唱、跳、Rap、篮球……和训练大语言模型
        <br />
        全网最有梗的 AI 开源社区
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4"
      >
        <a
          href="https://huggingface.co/IKUN-LLM"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-lg text-base font-medium bg-gradient-to-br from-accent to-accent-lighter text-white hover:opacity-90 transition-opacity"
        >
          🤗 加入 IKUN
        </a>
        <a
          href="https://github.com/ikun-llm"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-lg text-base font-medium text-slate-100 border border-accent/15 hover:border-accent-light/40 transition-colors"
        >
          💻 GitHub →
        </a>
      </motion.div>
    </section>
  );
}
