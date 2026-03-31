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
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="font-display font-700 text-[11px] uppercase tracking-[0.35em] text-accent mb-3">
          Community
        </p>
        <h2 className="font-display font-900 text-5xl md:text-7xl tracking-[-0.04em] leading-[0.9]">
          加入
          <br />
          <span className="text-accent">IKUN</span> 大家庭
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {communityLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group glass p-8 block"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-500">
                {link.icon}
              </span>
              <h3 className="font-display font-800 text-lg group-hover:text-accent transition-colors duration-300">
                {link.name}
              </h3>
              <span className="ml-auto font-mono text-sm text-text-3 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
                →
              </span>
            </div>
            <p className="text-sm text-text-2 leading-relaxed pl-13">
              {link.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
