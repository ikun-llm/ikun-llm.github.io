"use client";

import { motion } from "framer-motion";
import PixelGrid from "./PixelGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Pixel canvas background */}
      <PixelGrid />

      {/* Gradient fade at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--color-void), transparent)",
        }}
      />

      {/* Content */}
      <div className="t-container relative z-10 w-full pb-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          {/* Left: Titles */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-3xl md:text-4xl text-text-2 font-light mb-4 tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              练习时长两年半 🏀
            </p>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-accent leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              鸡你太美
            </h1>
          </motion.div>

          {/* Right: Description + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col gap-6"
          >
            <p
              className="text-lg md:text-xl text-text-2 font-medium"
              style={{ fontFamily: "var(--font-display)" }}
            >
              大道至简
            </p>
            <p className="text-text-3 leading-relaxed max-w-md">
              IKUN-LLM
              是一个从零手写大语言模型训练全链路的开源社区。20+
              仓库覆盖分词器、预训练、SFT、DPO、GRPO、MoE、蒸馏、推理、多模态到部署，每一行代码都用
              PyTorch 原生实现，拒绝黑盒。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-2">
              <a
                href="https://huggingface.co/IKUN-LLM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-void bg-accent rounded-xl hover:bg-accent-hover transition-colors duration-200"
              >
                🤗 加入 IKUN
              </a>
              <a
                href="https://github.com/ikun-llm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-2 hover:text-accent transition-colors duration-200 py-3"
              >
                GitHub
                <span className="text-accent">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
