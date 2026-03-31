"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Animated mesh gradient bg */}
      <div className="mesh-bg" />

      {/* Floating ambient orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.07),transparent_65%)] top-[10%] right-[-15%] animate-float-a pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,184,0,0.05),transparent_65%)] bottom-[5%] left-[-10%] animate-float-b pointer-events-none" />

      {/* Mascot with glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.2, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(255,107,0,0.25),transparent_60%)] scale-150 animate-glow-breathe" />
        <span className="relative text-[140px] md:text-[180px] leading-none select-none drop-shadow-[0_0_80px_rgba(255,107,0,0.2)]">
          🐔
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-800 text-[80px] md:text-[140px] lg:text-[180px] tracking-[-0.06em] leading-[0.8] mb-4"
      >
        <span className="bg-gradient-to-br from-text-1 via-accent to-accent-warm bg-clip-text text-transparent">
          IKUN
        </span>
      </motion.h1>

      {/* Subtitle line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/40" />
        <p className="font-display font-600 text-base md:text-lg text-text-2 tracking-[0.3em] uppercase">
          练习时长两年半
          <span className="inline-block ml-2 animate-bounce-ball">🏀</span>
        </p>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/40" />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-sm text-text-3 max-w-sm mb-12 leading-relaxed tracking-wide"
      >
        唱、跳、Rap、篮球……和训练大语言模型
        <br />
        <span className="text-text-2">全网最有梗的 AI 开源社区</span>
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="flex gap-4"
      >
        <a
          href="https://huggingface.co/IKUN-LLM"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-4 rounded-2xl text-sm font-display font-700 bg-accent text-black overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,107,0,0.3)]"
        >
          <span className="relative z-10">🤗 加入 IKUN</span>
          <div className="absolute inset-0 bg-accent-warm translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </a>
        <a
          href="https://github.com/ikun-llm"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-2xl text-sm font-display font-700 text-text-1 border border-line hover:border-accent/40 hover:text-accent transition-all duration-500"
        >
          GitHub →
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-line flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
