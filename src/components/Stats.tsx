"use client";

import { motion } from "framer-motion";
import { orgHighlights } from "@/data/models";

export default function Stats() {
  return (
    <div className="flex justify-center gap-16 md:gap-20 py-12 px-6">
      {orgHighlights.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-light to-accent-lighter bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
