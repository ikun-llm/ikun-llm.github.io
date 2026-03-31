"use client";

import { useEffect, useRef } from "react";

export default function PixelGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const pixels: { x: number; y: number; size: number; alpha: number; speed: number; delay: number }[] = [];
    const PIXEL = 6;
    const GAP = 4;
    const STEP = PIXEL + GAP;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initPixels();
    };

    const initPixels = () => {
      pixels.length = 0;
      const cols = Math.ceil(canvas.offsetWidth / STEP);
      const rows = Math.ceil(canvas.offsetHeight / STEP);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() > 0.15) continue;
          pixels.push({
            x: c * STEP,
            y: r * STEP,
            size: PIXEL,
            alpha: Math.random() * 0.3 + 0.05,
            speed: Math.random() * 0.005 + 0.002,
            delay: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    let time = 0;
    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const p of pixels) {
        const pulse = Math.sin(time * p.speed + p.delay) * 0.5 + 0.5;
        const a = p.alpha * (0.3 + pulse * 0.7);
        ctx.fillStyle = `rgba(255, 106, 0, ${a})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
