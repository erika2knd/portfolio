"use client";

import { useEffect, useRef } from "react";

/**
 * Small Perlin-like noise implementation (classic noise).
 */
class ClassicalNoise {
  private perm: number[] = [];

  constructor() {
    const p: number[] = [];
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const n = Math.floor(Math.random() * (i + 1));
      [p[i], p[n]] = [p[n], p[i]];
    }
    this.perm = new Array(512);
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  private fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(t: number, a: number, b: number) {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number, z: number) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  noise(x: number, y: number, z: number) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    const A = this.perm[X] + Y;
    const AA = this.perm[A] + Z;
    const AB = this.perm[A + 1] + Z;
    const B = this.perm[X + 1] + Y;
    const BA = this.perm[B] + Z;
    const BB = this.perm[B + 1] + Z;

    return this.lerp(
      w,
      this.lerp(
        v,
        this.lerp(
          u,
          this.grad(this.perm[AA], x, y, z),
          this.grad(this.perm[BA], x - 1, y, z)
        ),
        this.lerp(
          u,
          this.grad(this.perm[AB], x, y - 1, z),
          this.grad(this.perm[BB], x - 1, y - 1, z)
        )
      ),
      this.lerp(
        v,
        this.lerp(
          u,
          this.grad(this.perm[AA + 1], x, y, z - 1),
          this.grad(this.perm[BA + 1], x - 1, y, z - 1)
        ),
        this.lerp(
          u,
          this.grad(this.perm[AB + 1], x, y - 1, z - 1),
          this.grad(this.perm[BB + 1], x - 1, y - 1, z - 1)
        )
      )
    );
  }
}

type Props = {
  className?: string;
  opacity?: number; // 0..1
};

export default function WaveCanvas({ className = "", opacity = 0.95 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const perlin = new ClassicalNoise();

    let raf = 0;
    let w = 0;
    let h = 0;

    // Tune for performance / look
    const variation = 0.0025;
    const ampBase = 260;
    const maxLinesDesktop = 40;
    const maxLinesMobile = 18;

    // Frame limiting 
    const FPS = 30;
    const frameInterval = 1000 / FPS;
    let lastTime = 0;

    let variators: number[] = [];
    let startY = 0;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR
      w = Math.floor(window.innerWidth);
      h = Math.floor(window.innerHeight);

      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      startY = h / 2;

      const isMobile = w < 768;
      const maxLines = isMobile ? maxLinesMobile : maxLinesDesktop;

      variators = Array.from({ length: maxLines + 1 }, (_, i) => i * 0.02);
    };

    const draw = (time = 0) => {
      // stop drawing when tab is hidden
      if (document.hidden) {
        raf = window.requestAnimationFrame(draw);
        return;
      }

      // limit FPS
      if (time - lastTime < frameInterval) {
        raf = window.requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, w, h);

      const isMobile = w < 768;
      const amp = isMobile ? ampBase * 0.7 : ampBase;

      // subtle glow (desktop only)
      ctx.shadowColor = "rgba(255,255,255,0.35)";
      ctx.shadowBlur = isMobile ? 0 : 18;

      // draw fewer points across the width (huge perf win)
      const step = isMobile ? 3 : 2;

      for (let i = 0; i < variators.length; i++) {
        ctx.beginPath();
        ctx.moveTo(0, startY);

        let yVal = 0;

        for (let x = 0; x <= w; x += step) {
          yVal = perlin.noise(x * variation + variators[i], x * variation, 0);
          ctx.lineTo(x, startY + amp * yVal);
        }

        const alpha = Math.min(Math.abs(yVal) + 0.12, 0.28);
        ctx.lineWidth = isMobile ? 1.4 : 2.0;
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;

        ctx.stroke();

        variators[i] += 0.005;
      }

      raf = window.requestAnimationFrame(draw);
    };

    setup();
    raf = window.requestAnimationFrame(draw);

    const onResize = () => {
      window.cancelAnimationFrame(raf);
      lastTime = 0;
      setup();
      raf = window.requestAnimationFrame(draw);
    };

    const onVisibilityChange = () => {
      lastTime = 0;
      if (!document.hidden) {
        window.cancelAnimationFrame(raf);
        raf = window.requestAnimationFrame(draw);
      }
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
      style={{ opacity }}
    />
  );
}
