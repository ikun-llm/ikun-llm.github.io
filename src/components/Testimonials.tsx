"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/site";

function TestimonialCard({
  quote,
  author,
  avatar,
}: {
  quote: string;
  author: string;
  avatar: string;
}) {
  return (
    <div className="t-card shrink-0 w-[320px] p-6 flex flex-col gap-4">
      <p className="text-sm text-text-2 leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <span className="text-xl">{avatar}</span>
        <span className="text-xs text-text-3">{author}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 7);
  const row2 = testimonials.slice(7);

  return (
    <section id="community" className="t-section overflow-hidden">
      {/* Header */}
      <motion.div
        className="t-container text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2
          className="text-3xl md:text-5xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ikun 们都在说
        </h2>
        <p className="text-text-2 mt-3 text-lg">
          来自全球 ikun 的真实评价
        </p>
      </motion.div>

      {/* Row 1 - scroll left */}
      <div className="relative mb-5">
        <div className="marquee-left">
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 - scroll right */}
      <div className="relative">
        <div className="marquee-right">
          {[...row2, ...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
