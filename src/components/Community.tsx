"use client";

import { motion } from "framer-motion";
import { communityLinks } from "@/data/models";

export default function Community() {
  return (
    <section id="community" className="max-w-7xl mx-auto px-8 py-32">
      <div className="court-line mb-32" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-display font-700 text-[11px] uppercase tracking-[0.3em] text-accent mb-3">
          Community
        </p>
        <h2 className="font-display font-800 text-5xl md:text-6xl tracking-[-0.03em] mb-4">
          加入 <span className="text-accent">IKUN</span> 大家庭
        </h2>
        <p className="text-text-2 max-w-lg leading-relaxed">
          和全球 ikun 一起练习，探索 AI 的无限可能。
        </p>
      </motion.div>

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
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group spin-border block"
          >
            <div className="glass p-8 h-full">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-500">
                  {link.icon}
                </span>
                <h3 className="font-display font-700 text-lg group-hover:text-accent transition-colors duration-300">
                  {link.name}
                </h3>
                <span className="ml-auto font-mono text-text-3 text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
              <p className="text-sm text-text-2 leading-relaxed pl-13">
                {link.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
