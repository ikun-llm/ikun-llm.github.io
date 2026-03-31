"use client";

import { motion } from "framer-motion";
import { ikunValues, ikunSeries, funRepos } from "@/data/models";

export default function ModelCards() {
  return (
    <>
      {/* ═══ About — Bento Grid ═══ */}
      <section id="about" className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Header — spans full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 mb-8"
          >
            <p className="font-display font-700 text-[11px] uppercase tracking-[0.3em] text-accent mb-3">
              About
            </p>
            <h2 className="font-display font-800 text-5xl md:text-6xl tracking-[-0.03em]">
              什么是 <span className="text-accent">IKUN</span>？
            </h2>
          </motion.div>

          {/* Bento cards — asymmetric grid */}
          {ikunValues.map((item, i) => {
            const spans = [
              "md:col-span-7",
              "md:col-span-5",
              "md:col-span-5",
              "md:col-span-7",
            ];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${spans[i]} spin-border`}
              >
                <div className="glass p-8 md:p-10 h-full">
                  <span className="text-5xl mb-5 block">{item.icon}</span>
                  <h3 className="font-display font-700 text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-2 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══ Court line ═══ */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="court-line" />
      </div>

      {/* ═══ ikun 全家桶 ═══ */}
      <section id="projects" className="max-w-7xl mx-auto px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-display font-700 text-[11px] uppercase tracking-[0.3em] text-accent mb-3">
            全家桶
          </p>
          <h2 className="font-display font-800 text-5xl md:text-6xl tracking-[-0.03em] mb-4">
            练习生的技能树{" "}
            <span className="inline-block animate-bounce-ball">🏀</span>
          </h2>
          <p className="text-text-2 max-w-lg leading-relaxed">
            从分词器到部署，完整的 LLM 全链路学习路径。每个环节独立成库，想学哪里点哪里。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {ikunSeries.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: Math.min(i * 0.04, 0.35),
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group glass !rounded-2xl p-6 block"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-500 ease-out">
                  {repo.emoji}
                </span>
                <h3 className="font-display font-700 text-[15px] group-hover:text-accent transition-colors duration-300">
                  {repo.name}
                </h3>
                <span className="ml-auto font-mono text-text-3 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
              <p className="text-xs text-text-3 leading-relaxed pl-10">
                {repo.description}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ═══ Court line ═══ */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="court-line" />
      </div>

      {/* ═══ 整活专区 ═══ */}
      <section id="fun" className="max-w-7xl mx-auto px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-display font-700 text-[11px] uppercase tracking-[0.3em] text-accent mb-3">
            整活专区
          </p>
          <h2 className="font-display font-800 text-5xl md:text-6xl tracking-[-0.03em]">
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
              className="group glass !rounded-2xl p-6 text-center block"
            >
              <span className="text-4xl block mb-3 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500 ease-out">
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
