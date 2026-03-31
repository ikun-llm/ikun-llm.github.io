"use client";

import { motion } from "framer-motion";
import { communityLinks } from "@/data/models";

export default function Community() {
  return (
    <section id="community" className="max-w-6xl mx-auto px-8 py-28">
      {/* Court line top */}
      <div className="court-line mb-28" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display font-700 text-[11px] uppercase tracking-[0.3em] text-accent mb-4"
      >
        Community
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-800 text-4xl md:text-5xl tracking-tight mb-5"
      >
        加入 <span className="text-accent">IKUN</span> 大家庭
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-text-secondary max-w-lg mb-16 leading-relaxed"
      >
        和全球 ikun 一起练习，探索 AI 的无限可能。
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {communityLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group gradient-border p-8 hover:bg-bg-card-hover transition-all duration-500 block"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </span>
              <h3 className="font-display font-700 text-lg group-hover:text-accent transition-colors duration-300">
                {link.name}
              </h3>
              <span className="ml-auto font-mono text-text-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                →
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed pl-12">
              {link.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
