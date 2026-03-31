"use client";

import { motion } from "framer-motion";
import { ikunValues, ikunSeries, funRepos } from "@/data/models";

export default function ModelCards() {
  return (
    <>
      {/* ═══ About — Bento ═══ */}
      <section id="about" className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-display font-700 text-[11px] uppercase tracking-[0.35em] text-accent mb-3">
            About
          </p>
          <h2 className="font-display font-900 text-5xl md:text-7xl tracking-[-0.04em] leading-[0.9]">
            什么是
            <br />
            <span className="text-accent">IKUN</span>？
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {ikunValues.map((item, i) => {
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];
            const heights = ["min-h-[220px]", "min-h-[220px]", "min-h-[220px]", "min-h-[220px]"];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`${spans[i]} ${heights[i]} glass p-8 md:p-10 group cursor-default`}
              >
                <span className="text-5xl block mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 origin-left">
                  {item.icon}
                </span>
                <h3 className="font-display font-800 text-xl mb-2 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-text-2 leading-relaxed max-w-md">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══ Divider ═══ */}
      <div className="max-w-7xl mx-auto px-8"><div className="court-line" /></div>

      {/* ═══ 全家桶 — Horizontal scroll ═══ */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <p className="font-display font-700 text-[11px] uppercase tracking-[0.35em] text-accent mb-3">
              全家桶
            </p>
            <h2 className="font-display font-900 text-5xl md:text-7xl tracking-[-0.04em] leading-[0.9] mb-4">
              技能树 <span className="inline-block animate-bounce-ball">🏀</span>
            </h2>
            <p className="text-text-2 max-w-md leading-relaxed text-sm">
              左右滑动探索 · 每个环节独立成库
            </p>
          </motion.div>
        </div>

        {/* Horizontal scroll area */}
        <div className="h-scroll-container pl-8 md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {ikunSeries.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.5 }}
              className="h-scroll-item group glass !rounded-3xl w-[280px] md:w-[320px] p-7 flex flex-col justify-between block"
            >
              <div>
                <span className="text-4xl block mb-4 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">
                  {repo.emoji}
                </span>
                <h3 className="font-display font-800 text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                  {repo.name}
                </h3>
                <p className="text-xs text-text-3 leading-relaxed">
                  {repo.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-text-3 group-hover:text-accent transition-colors duration-300">
                <span className="font-mono text-xs">github.com</span>
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
              </div>
            </motion.a>
          ))}
          {/* Spacer */}
          <div className="h-scroll-item w-8 flex-shrink-0" />
        </div>
      </section>

      {/* ═══ Divider ═══ */}
      <div className="max-w-7xl mx-auto px-8"><div className="court-line" /></div>

      {/* ═══ 整活 ═══ */}
      <section id="fun" className="max-w-7xl mx-auto px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-display font-700 text-[11px] uppercase tracking-[0.35em] text-accent mb-3">
            整活专区
          </p>
          <h2 className="font-display font-900 text-5xl md:text-7xl tracking-[-0.04em]">
            不只会训模型 <span className="text-accent">😂</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {funRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group glass !rounded-3xl p-6 text-center block"
            >
              <span className="text-4xl block mb-3 group-hover:scale-150 group-hover:-rotate-12 transition-transform duration-500 ease-out">
                {repo.emoji}
              </span>
              <h3 className="font-display font-700 text-sm mb-1 group-hover:text-accent transition-colors duration-300">
                {repo.name}
              </h3>
              <p className="text-[11px] text-text-3 leading-relaxed">
                {repo.description}
              </p>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
