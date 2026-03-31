"use client";

import { motion } from "framer-motion";
import { ikunValues, ikunSeries, funRepos } from "@/data/models";

function pad(n: number) {
  return `[${String(n).padStart(2, "0")}]`;
}

export default function ModelCards() {
  return (
    <>
      {/* ═══ About — TRAE-style numbered features ═══ */}
      <section id="about" className="section-gap">
        <div className="max-w-[1400px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="font-display font-500 text-text-2 text-lg mb-3">
              什么是 IKUN
            </p>
            <h2 className="font-display font-800 text-5xl md:text-7xl tracking-[-0.03em] text-text-1">
              <span className="text-accent">大道至简</span>
              <br />从零构建 AI
            </h2>
          </motion.div>

          {/* Numbered grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ikunValues.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="trae-card p-8 md:p-10 group cursor-default"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="font-mono text-xs text-text-3 mt-1">
                    {pad(i)}
                  </span>
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h3 className="font-display font-700 text-xl mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-2 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-10"><div className="divider" /></div>

      {/* ═══ 全家桶 ═══ */}
      <section id="projects" className="section-gap">
        <div className="max-w-[1400px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="font-display font-500 text-text-2 text-lg mb-3">
              ikun 系列全家桶
            </p>
            <h2 className="font-display font-800 text-5xl md:text-7xl tracking-[-0.03em] text-text-1">
              练习生的
              <span className="text-accent">技能树</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ikunSeries.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.35) }}
                className="trae-card p-6 group block"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{repo.emoji}</span>
                    <h3 className="font-display font-700 text-[15px] group-hover:text-accent transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-text-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
                <p className="text-xs text-text-3 leading-relaxed">
                  {repo.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-10"><div className="divider" /></div>

      {/* ═══ 整活 ═══ */}
      <section id="fun" className="section-gap">
        <div className="max-w-[1400px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="font-display font-500 text-text-2 text-lg mb-3">
              整活专区
            </p>
            <h2 className="font-display font-800 text-5xl md:text-7xl tracking-[-0.03em] text-text-1">
              不只会训模型
              <span className="text-accent"> 😂</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {funRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="trae-card p-6 text-center group block"
              >
                <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">
                  {repo.emoji}
                </span>
                <h3 className="font-display font-700 text-sm mb-1 group-hover:text-accent transition-colors">
                  {repo.name}
                </h3>
                <p className="text-[11px] text-text-3 leading-relaxed">
                  {repo.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
