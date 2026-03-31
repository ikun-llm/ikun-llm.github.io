"use client";

import { motion } from "framer-motion";
import { ikunValues, ikunSeries, funRepos } from "@/data/models";

export default function ModelCards() {
  return (
    <>
      {/* ═══ About IKUN ═══ */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display font-700 text-[11px] uppercase tracking-[0.3em] text-accent mb-4"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-5"
        >
          什么是 <span className="text-accent">IKUN</span>？
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary max-w-lg mb-16 leading-relaxed"
        >
          我们是一群热爱 AI、热爱开源、热爱篮球的 ikun。
          <br />
          用代码练习，用开源传承。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ikunValues.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="gradient-border p-8 hover:bg-bg-card-hover transition-colors duration-500 group"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300 origin-left">
                {item.icon}
              </span>
              <h3 className="font-display font-700 text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ Court line divider ═══ */}
      <div className="max-w-6xl mx-auto px-8"><div className="court-line" /></div>

      {/* ═══ ikun 全家桶 ═══ */}
      <section id="projects" className="max-w-6xl mx-auto px-8 py-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display font-700 text-[11px] uppercase tracking-[0.3em] text-accent mb-4"
        >
          全家桶
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-5"
        >
          练习生的技能树 <span className="inline-block animate-bounce-ball">🏀</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-secondary max-w-lg mb-16 leading-relaxed"
        >
          从分词器到部署，完整的 LLM 全链路学习路径，每个环节都是独立仓库。
        </motion.p>

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
              transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.4 }}
              className="group gradient-border p-5 hover:bg-bg-card-hover transition-all duration-400 block"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                  {repo.emoji}
                </span>
                <h3 className="font-display font-700 text-[15px] group-hover:text-accent transition-colors duration-300">
                  {repo.name}
                </h3>
                <span className="ml-auto text-text-muted text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed pl-9">
                {repo.description}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ═══ Court line divider ═══ */}
      <div className="max-w-6xl mx-auto px-8"><div className="court-line" /></div>

      {/* ═══ 整活专区 ═══ */}
      <section id="fun" className="max-w-6xl mx-auto px-8 py-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display font-700 text-[11px] uppercase tracking-[0.3em] text-accent mb-4"
        >
          整活专区
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-5"
        >
          ikun 不只会训模型 <span className="text-accent">😂</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-secondary max-w-lg mb-16 leading-relaxed"
        >
          表情包、鸡乐盒、桌面宠物……ikun 的快乐你想象不到。
        </motion.p>

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
              className="group gradient-border p-6 text-center hover:bg-bg-card-hover transition-all duration-400 block"
            >
              <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-300">
                {repo.emoji}
              </span>
              <h3 className="font-display font-700 text-sm mb-1 group-hover:text-accent transition-colors duration-300">
                {repo.name}
              </h3>
              <p className="text-[11px] text-text-muted leading-relaxed">
                {repo.description}
              </p>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
