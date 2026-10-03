import { useEffect, useRef } from "react";

const COLOR = [240, 90, 78]; // coral. Use [215, 25, 33] to match --red

const RIBBONS = [
  { y: 0.02, amp: 0.10, f: 2.2, ph: 0.0, spread: 0.30, w: 0.38 },
  { y: 0.20, amp: 0.14, f: 1.6, ph: 1.7, spread: 0.18, w: 0.22 },
  { y: 0.45, amp: 0.10, f: 2.8, ph: 3.1, spread: 0.22, w: 0.20 },
  { y: 1.06, amp: 0.05, f: 1.2, ph: 0.6, spread: 0.06, w: 0.10 },
  { y: 0.70, amp: 0.12, f: 2.0, ph: 4.4, spread: 0.30, w: 0.10 },
];
const ALPHAS = [0.35, 0.65, 1];

export default function ParticleBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const COUNT = window.innerWidth < 760 ? 4500 : 11000;

    let W, H, dpr, raf;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = cv.width = window.innerWidth * dpr;
      H = cv.height = window.innerHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const rnd = Math.random;
    const parts = Array.from({ length: COUNT }, () => {
      let r = rnd(), k = 0;
      while (k < RIBBONS.length - 1 && (r -= RIBBONS[k].w) > 0) k++;
      return {
        k,
        u: rnd(),
        d: (rnd() < 0.5 ? -1 : 1) * Math.pow(rnd(), 3) * RIBBONS[k].spread,
        z: 0.4 + rnd() * 0.9,
        s: rnd() < 0.12 ? 2 : 1,
        a: rnd() < 0.35 ? 0 : rnd() < 0.6 ? 1 : 2,
      };
    });

    let cur = window.scrollY, vel = 0, t = 0;

    const draw = () => {
      const target = window.scrollY;
      vel += ((target - cur) - vel) * 0.1;
      cur += (target - cur) * 0.08;
      if (!reduce) t += 0.0006;

      ctx.clearRect(0, 0, W, H);
      const buckets = [[], [], []];

      for (const p of parts) {
        const rb = RIBBONS[p.k];
        const phase = rb.ph + t * 6 + cur * 0.0016 * p.z;
        const x = (p.u * 1.4 - 0.2) * W + vel * 0.6 * p.z * dpr;
        const wave = Math.sin(p.u * rb.f * Math.PI + phase) * rb.amp;
        const tilt = (p.u - 0.5) * 0.18;
        const y = (rb.y + wave + tilt + p.d) * H - cur * 0.05 * p.z * dpr;
        if (x < 0 || x > W || y < 0 || y > H) continue;
        buckets[p.a].push(x, y, p.s * dpr);
      }

      for (let b = 0; b < 3; b++) {
        ctx.fillStyle = `rgba(${COLOR[0]},${COLOR[1]},${COLOR[2]},${ALPHAS[b]})`;
        const arr = buckets[b];
        for (let i = 0; i < arr.length; i += 3) {
          ctx.fillRect(arr[i], arr[i + 1], arr[i + 2], arr[i + 2]);
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();

    const onScroll = () => {
      if (reduce) requestAnimationFrame(draw);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // zIndex -1 keeps it behind the page content (the .app wrapper creates its own stacking context)
  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}