"use client";

import { footerLinks, communityLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="t-container">
        <div className="t-divider" />

        {/* Footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🐔</span>
              <span
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                IKUN
              </span>
            </div>
            <p className="text-xs text-text-3 leading-relaxed max-w-[200px]">
              练习时长两年半的 AI 开源社区，从零手写 LLM 训练全链路。
            </p>
          </div>

          {/* Projects */}
          <div>
            <h4
              className="text-sm font-semibold text-text-2 mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              项目
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.projects.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-3 hover:text-text-1 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="text-sm font-semibold text-text-2 mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              资源
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-3 hover:text-text-1 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h4
              className="text-sm font-semibold text-text-2 mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              社区
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.community.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-3 hover:text-text-1 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="t-divider" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-text-3">
            © 2025 IKUN-LLM. All rights reserved.
          </span>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {communityLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-3 hover:text-text-1 transition-colors duration-200"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="text-xs text-text-3 hover:text-text-1 transition-colors duration-200"
          >
            Back to top ↑
          </a>
        </div>
      </div>

      {/* Giant brand watermark */}
      <div className="relative overflow-hidden bg-accent">
        <div className="t-container">
          <div
            className="text-[120px] md:text-[200px] lg:text-[280px] font-extrabold text-void leading-[0.85] tracking-tighter select-none py-4 md:py-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            IKUN
          </div>
        </div>
      </div>
    </footer>
  );
}
