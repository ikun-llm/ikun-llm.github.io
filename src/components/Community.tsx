"use client";

import { motion } from "framer-motion";
import { communityLinks } from "@/data/models";

export default function Community() {
  return (
    <section id="community" className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-accent-light font-semibold mb-3">
        Community
      </p>
      <h2 className="text-4xl font-extrabold tracking-tight mb-4">
        加入 IKUN 大家庭
      </h2>
      <p className="text-base text-slate-400 max-w-xl mb-12">
        和全球 ikun 一起练习，探索 AI 的无限可能 🏀
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {communityLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-bg-card border border-accent/15 rounded-2xl p-8 transition-all duration-300 hover:border-accent hover:-translate-y-0.5 block"
          >
            <h3 className="text-lg font-bold flex items-center gap-2.5 mb-2">
              <span className="text-2xl">{link.icon}</span>
              {link.name}
            </h3>
            <p className="text-sm text-slate-400">{link.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
