"use client";

import { motion } from "framer-motion";
import { orgHighlights } from "@/data/models";

export default function Stats() {
  return (
    <div className="relative py-6">
      {/* Court lines */}
      <div className="court-line" />
      <div className="flex justify-center gap-0 divide-x divide-border">
        {orgHighlights.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center px-10 md:px-16 py-8"
          >
            <div className="font-display font-800 text-3xl md:text-4xl text-accent mb-1">
              {stat.value}
            </div>
            <div className="text-[11px] font-display font-500 text-text-muted uppercase tracking-[0.15em]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="court-line" />
    </div>
  );
}
