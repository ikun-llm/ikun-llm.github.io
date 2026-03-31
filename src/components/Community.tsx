"use client";

import { motion } from "framer-motion";
import { communityLinks } from "@/data/models";

export default function Community() {
  return (
    <section id="community" className="section-gap">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="divider mb-36" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-display font-500 text-text-2 text-lg mb-3">
            Community
          </p>
          <h2 className="font-display font-800 text-5xl md:text-7xl tracking-[-0.03em] text-text-1">
            加入 <span className="text-accent">IKUN</span>
          </h2>
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
              transition={{ delay: i * 0.08 }}
              className="trae-card p-8 group block"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{link.icon}</span>
                  <h3 className="font-display font-700 text-lg group-hover:text-accent transition-colors">
                    {link.name}
                  </h3>
                </div>
                <span className="font-mono text-sm text-text-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
              <p className="text-sm text-text-2 leading-relaxed pl-9">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
