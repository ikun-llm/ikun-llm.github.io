"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { featureCards } from "@/data/site";

export default function FeatureCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="t-section">
      <div className="t-container">
        {/* Header row */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              探索 ikun 开源项目
            </h2>
            <p className="text-text-2 mt-3 text-lg">
              每个项目都从零手写，完整可复现
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-lg border border-line flex items-center justify-center text-text-2 hover:text-text-1 hover:border-text-3 transition-all duration-200"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-lg border border-line flex items-center justify-center text-text-2 hover:text-text-1 hover:border-text-3 transition-all duration-200"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll container - full bleed */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-10 pb-4 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Left spacer for centering */}
        <div
          className="shrink-0"
          style={{ width: "max(0px, calc((100vw - 1400px) / 2))" }}
        />

        {featureCards.map((card, i) => (
          <motion.a
            key={card.name}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="t-card group shrink-0 snap-start flex flex-col p-6 w-[300px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: Math.min(i * 0.05, 0.3),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img src={card.icon} alt="" className="w-8 h-8 rounded mb-4" />
            <h3
              className="text-base font-semibold mb-2 group-hover:text-accent transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {card.name}
            </h3>
            <p className="text-sm text-text-3 leading-relaxed flex-1">
              {card.description}
            </p>
            <span className="mt-4 text-sm text-text-3 group-hover:text-accent transition-colors duration-200">
              →
            </span>
          </motion.a>
        ))}

        {/* Right spacer */}
        <div
          className="shrink-0"
          style={{ width: "max(40px, calc((100vw - 1400px) / 2))" }}
        />
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
