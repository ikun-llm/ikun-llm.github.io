"use client";

import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="t-section">
      <div className="t-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            加入 IKUN 开始练习
          </h2>
          <p
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent tracking-tight leading-[1.1] mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            一起鸡你太美
          </p>

          <a
            href="https://huggingface.co/IKUN-LLM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-12 px-8 py-4 text-base font-semibold text-void bg-accent rounded-xl hover:bg-accent-hover transition-colors duration-200"
          >
            HuggingFace
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
