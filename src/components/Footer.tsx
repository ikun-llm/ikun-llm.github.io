"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer ref={ref} className="relative pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="court-line mb-20" />

        {/* Scroll-reveal giant text */}
        <motion.div style={{ scale, opacity }} className="relative flex justify-center mb-14">
          <span className="font-display font-900 text-[100px] md:text-[180px] lg:text-[240px] leading-none tracking-[-0.06em] text-line select-none">
            IKUN
          </span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
            🐔🏀
          </span>
        </motion.div>

        <div className="text-center">
          <p className="font-display font-600 text-sm text-text-2 tracking-[0.3em] mb-3">
            鸡 你 太 美 · 大 道 至 简
          </p>
          <p className="text-xs text-text-3">
            © 2025 IKUN-LLM · 练习时长两年半 · 唱跳 Rap 篮球 · 还有训练大模型
          </p>
        </div>
      </div>
    </footer>
  );
}
