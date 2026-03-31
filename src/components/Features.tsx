"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "@/data/site";

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="t-section">
      <div className="t-container">
        {/* Heading */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ikun 全家桶
          </h2>
          <p
            className="text-2xl md:text-4xl font-light text-text-3 mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            完整链路
          </p>
        </motion.div>

        {/* Tabs + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Tab list */}
          <div className="flex flex-col gap-2">
            {features.map((feature, index) => {
              const isActive = index === active;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActive(index)}
                  className={`group text-left px-6 py-5 rounded-xl transition-all duration-300 border ${
                    isActive
                      ? "bg-card border-accent/20"
                      : "bg-transparent border-transparent hover:bg-card/50 hover:border-line"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-sm font-medium font-mono shrink-0 mt-0.5 transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-text-3"
                      }`}
                    >
                      [{feature.id}]
                    </span>
                    <div>
                      <h3
                        className={`text-base font-semibold transition-colors duration-300 ${
                          isActive ? "text-text-1" : "text-text-2"
                        }`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {feature.title}
                      </h3>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-text-3 mt-2 leading-relaxed"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Visual */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="t-card overflow-hidden h-full"
              >
                {/* Fake window bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-4 text-xs text-text-3 font-mono">
                    {features[active].title}.py
                  </span>
                </div>
                <pre className="p-6 overflow-x-auto text-sm leading-relaxed text-text-2 font-mono whitespace-pre-wrap">
                  <code>{features[active].visual}</code>
                </pre>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
