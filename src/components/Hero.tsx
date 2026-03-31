"use client";

import { motion } from "framer-motion";
import PixelGrid from "@/components/PixelGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
      {/* Pixel particle background */}
      <PixelGrid />

      {/* Content — split layout like TRAE */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          {/* Left: massive title */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-400 text-3xl md:text-5xl text-text-2 leading-tight mb-2"
            >
              练习时长两年半 🏀
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-display font-800 text-6xl md:text-8xl lg:text-[96px] text-accent leading-[0.9] tracking-[-0.03em]"
            >
              鸡你太美
            </motion.h1>
          </div>

          {/* Right: description + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="font-display font-500 text-base text-text-2 mb-2">
              大道至简
            </p>
            <p className="text-sm text-text-3 mb-8 max-w-sm leading-relaxed">
              IKUN-LLM 是全网最有梗的 AI 开源社区。唱、跳、Rap、篮球……和从零训练大语言模型。20+ 开源仓库，完整的 LLM 全链路实现。
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://huggingface.co/IKUN-LLM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-[14px] font-display font-700 bg-accent text-void hover:bg-accent-hover transition-colors w-fit"
              >
                🤗 加入 IKUN
              </a>
              <a
                href="https://github.com/ikun-llm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-display font-500 text-text-2 hover:text-text-1 transition-colors w-fit"
              >
                GitHub →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
