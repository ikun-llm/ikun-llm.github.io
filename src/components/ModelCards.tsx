"use client";

import { motion } from "framer-motion";
import { ikunValues, ikunSeries, funRepos } from "@/data/models";

export default function ModelCards() {
  return (
    <>
      {/* Ikun Values */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-light font-semibold mb-3">
          About IKUN
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">
          什么是 IKUN？
        </h2>
        <p className="text-base text-slate-400 max-w-xl mb-12">
          我们是一群热爱 AI、热爱开源、热爱篮球的 ikun 🏀
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ikunValues.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-card border border-accent/15 rounded-2xl p-7 transition-all duration-300 hover:border-accent hover:-translate-y-1"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ikun 系列全家桶 */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-light font-semibold mb-3">
          ikun 系列全家桶
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">
          练习生的技能树 🏀
        </h2>
        <p className="text-base text-slate-400 max-w-xl mb-12">
          从分词器到部署，完整的 LLM 全链路学习路径
        </p>

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
              transition={{ delay: i * 0.05 }}
              className="group bg-bg-card border border-accent/15 rounded-xl p-5 transition-all duration-300 hover:border-accent hover:-translate-y-0.5 block"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{repo.emoji}</span>
                <h3 className="text-base font-bold group-hover:text-accent-light transition-colors">
                  {repo.name}
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {repo.description}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 整活区 */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-light font-semibold mb-3">
          整活专区
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">
          ikun 不只会训练模型 😂
        </h2>
        <p className="text-base text-slate-400 max-w-xl mb-12">
          表情包、鸡乐盒、桌面宠物……ikun 的快乐你想象不到
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {funRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-bg-card border border-accent/15 rounded-xl p-5 text-center transition-all duration-300 hover:border-accent hover:-translate-y-1 block"
            >
              <span className="text-3xl block mb-2">{repo.emoji}</span>
              <h3 className="text-sm font-bold mb-1 group-hover:text-accent-light transition-colors">
                {repo.name}
              </h3>
              <p className="text-[11px] text-slate-500">{repo.description}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
