"use client";

import { motion } from "framer-motion";
import { trustItems } from "@/data/site";

export default function Trust() {
  return (
    <section className="t-section">
      <div className="t-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            为什么选择 IKUN
          </h2>
          <p className="text-text-2 mt-3 text-lg max-w-xl mx-auto">
            大道至简，从零出发，和全球 ikun 一起练习
          </p>
        </motion.div>

        {/* 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="t-card p-8 md:p-10 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img src={item.icon} alt="" className="w-10 h-10 rounded mb-6" />
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-text-3 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
