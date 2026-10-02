"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaRegCalendarCheck,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { SiFastapi, SiLangchain, SiNodedotjs, SiN8N } from "react-icons/si";
import { profile, roles } from "@/data/portfolio";
import { openCalendly } from "@/lib/calendly";

const particles = [
  { top: "12%", left: "8%", size: 5, dur: 7, delay: 0 },
  { top: "22%", left: "82%", size: 7, dur: 9, delay: 1.2 },
  { top: "68%", left: "14%", size: 4, dur: 8, delay: 0.6 },
  { top: "78%", left: "74%", size: 6, dur: 10, delay: 2 },
  { top: "40%", left: "92%", size: 4, dur: 7.5, delay: 1.6 },
  { top: "85%", left: "42%", size: 5, dur: 9.5, delay: 0.3 },
  { top: "8%", left: "55%", size: 4, dur: 8.5, delay: 2.4 },
  { top: "55%", left: "4%", size: 6, dur: 11, delay: 1 },
  { top: "33%", left: "68%", size: 3, dur: 6.5, delay: 3 },
  { top: "90%", left: "88%", size: 5, dur: 8, delay: 1.8 },
  { top: "18%", left: "35%", size: 3, dur: 7.2, delay: 0.9 },
  { top: "62%", left: "58%", size: 4, dur: 9.8, delay: 2.7 },
];

const floatChips = [
  {
    label: "LangChain",
    icon: <SiLangchain className="text-[#1fc9b2]" />,
    cls: "top-0 left-2 sm:left-4",
    dur: 5.4,
    delay: 0,
  },
  {
    label: "RAG",
    icon: <SiN8N className="text-[#ea4b71]" />,
    cls: "top-[14%] right-2 sm:right-4 max-lg:hidden",
    dur: 6.2,
    delay: 0.7,
  },
  {
    label: "FastAPI",
    icon: <SiFastapi className="text-[#35f0a8]" />,
    cls: "bottom-[30%] left-2 sm:left-4 max-lg:hidden",
    dur: 5.8,
    delay: 1.3,
  },
  {
    label: "Next.js / React",
    icon: <FaReact className="text-[#39e0ff]" />,
    cls: "bottom-0 right-2 sm:right-4",
    dur: 6.6,
    delay: 0.4,
  },
  {
    label: "Python",
    icon: <FaPython className="text-[#ffd04f]" />,
    cls: "top-[46%] left-2 hidden xl:flex",
    dur: 7,
    delay: 1.9,
  },
  {
    label: "Node.js",
    icon: <SiNodedotjs className="text-[#6fcf5a]" />,
    cls: "top-1 right-[22%] hidden xl:flex",
    dur: 6,
    delay: 2.2,
  },
];

const codeLines: { nodes: { t: string; c?: string }[]; indent?: number }[] = [
  {
    nodes: [
      { t: "const ", c: "text-[#c792ff]" },
      { t: "engineer", c: "text-[#39e0ff]" },
      { t: ": AIProfile = {", c: "text-slate-300" },
    ],
  },
  {
    indent: 1,
    nodes: [
      { t: "name", c: "text-[#7dd3fc]" },
      { t: ": ", c: "text-slate-400" },
      { t: "'Manthan Rajani'", c: "text-[#35f0a8]" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    nodes: [
      { t: "role", c: "text-[#7dd3fc]" },
      { t: ": ", c: "text-slate-400" },
      { t: "'AI Full Stack Engineer'", c: "text-[#35f0a8]" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    nodes: [
      { t: "base", c: "text-[#7dd3fc]" },
      { t: ": ", c: "text-slate-400" },
      { t: "'Surat, Gujarat, IN'", c: "text-[#35f0a8]" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    nodes: [
      { t: "builds", c: "text-[#7dd3fc]" },
      { t: ": [", c: "text-slate-400" },
      { t: "'agents'", c: "text-[#35f0a8]" },
      { t: ", ", c: "text-slate-400" },
      { t: "'RAG'", c: "text-[#35f0a8]" },
      { t: ", ", c: "text-slate-400" },
      { t: "'SaaS'", c: "text-[#35f0a8]" },
      { t: "],", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    nodes: [
      { t: "impact", c: "text-[#7dd3fc]" },
      { t: ": { hoursSaved:", c: "text-slate-300" },
      { t: "20+", c: "text-[#ff9d5c]" },
      { t: ", manualCut:", c: "text-slate-300" },
      { t: "'80%'", c: "text-[#ff9d5c]" },
      { t: " },", c: "text-slate-300" },
    ],
  },
  {
    indent: 1,
    nodes: [
      { t: "voiceAI", c: "text-[#7dd3fc]" },
      { t: ": ", c: "text-slate-400" },
      { t: "'1000+ queries/mo'", c: "text-[#35f0a8]" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    nodes: [
      { t: "shipping", c: "text-[#7dd3fc]" },
      { t: ": ", c: "text-slate-400" },
      { t: "true", c: "text-[#ff9d5c]" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    nodes: [
      { t: "available", c: "text-[#7dd3fc]" },
      { t: ": ", c: "text-slate-400" },
      { t: "true", c: "text-[#35f0a8]" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  { nodes: [{ t: "};", c: "text-slate-300" }] },
];

const mobileSnapshotRows: { key: string; value: string; valueClass?: string }[] = [
  { key: "name", value: profile.name },
  { key: "role", value: profile.role },
  { key: "base", value: "Surat, Gujarat, IN" },
  { key: "builds", value: "agents · RAG · SaaS" },
  { key: "impact", value: "20+ hrs/wk · 80% manual cut", valueClass: "text-[#ff9d5c]" },
  { key: "voice", value: "1k+ queries/mo", valueClass: "text-[#ff9d5c]" },
  { key: "status", value: "shipping · available", valueClass: "text-mint" },
];

const mobileStackChips = [
  { label: "LangChain", icon: <SiLangchain className="text-[#1fc9b2]" /> },
  { label: "FastAPI", icon: <SiFastapi className="text-[#35f0a8]" /> },
  { label: "RAG", icon: <SiN8N className="text-[#ea4b71]" /> },
  { label: "Next.js", icon: <FaReact className="text-[#39e0ff]" /> },
  { label: "Python", icon: <FaPython className="text-[#ffd04f]" /> },
  { label: "Node", icon: <SiNodedotjs className="text-[#6fcf5a]" /> },
];

/** Compact profile card for viewports under 425px (replaces terminal + floating chips). */
function HeroMobileSnapshot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <div className="absolute -inset-3 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,43,0.18),transparent_65%)] blur-xl" />

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a1020]/95 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <div className="flex items-center gap-2.5 border-b border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-code text-[10px] text-slate-400 truncate">profile.brief</span>
          <span className="ml-auto shrink-0 font-code text-[9px] text-mint/90">ready</span>
        </div>

        <div className="px-3.5 py-3 font-code">
          <p className="mb-3 text-[10px] leading-snug text-slate-500">
            <span className="text-mint">➜</span> whoami --json
          </p>

          <dl className="space-y-2">
            {mobileSnapshotRows.map((row) => (
              <div key={row.key} className="flex items-start justify-between gap-3 text-[11px] leading-tight">
                <dt className="shrink-0 text-[#7dd3fc]">{row.key}</dt>
                <dd className={`min-w-0 text-right ${row.valueClass ?? "text-[#35f0a8]"}`}>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="border-t border-white/[0.07] bg-white/[0.02] px-3 py-2.5">
          <p className="mb-2 font-code text-[9px] uppercase tracking-wider text-slate-500">stack</p>
          <div className="flex flex-wrap gap-1.5">
            {mobileStackChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0d1424]/90 px-2 py-1 text-[10px] font-medium text-slate-200"
              >
                <span className="text-[11px] leading-none">{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CodeTerminal() {
  const [visible, setVisible] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      onViewportEnter={() => {
        if (started) return;
        setStarted(true);
        codeLines.forEach((_, i) => {
          setTimeout(() => setVisible(i + 1), 260 * (i + 1));
        });
      }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 44, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto hidden w-full max-w-[560px] overflow-visible px-4 py-8 min-[425px]:block sm:px-6 sm:py-10"
      style={{ perspective: "1200px" }}
    >
      {/* glow under card */}
      <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,106,43,0.22),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(57,224,255,0.16),transparent_55%)] blur-2xl" />

      <div className="relative rounded-2xl border border-white/10 bg-[#0a1020]/90 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden">
        {/* title bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.07] bg-white/[0.03] px-5 py-3.5">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-code text-xs text-slate-400 ml-2">manthan.profile.ts</span>
          <span className="ml-auto font-code text-[10px] text-mint/80 border border-mint/25 bg-mint/10 rounded-full px-2 py-0.5">
            compiling success
          </span>
        </div>

        {/* code */}
        <div className="p-5 sm:p-6 font-code text-[12.5px] sm:text-[13.5px] leading-[1.95] min-h-[330px]">
          <div className="mb-2 text-slate-500">
            <span className="text-mint">➜</span> portfolio <span className="text-[#39e0ff]">git:(main)</span> cat profile.ts
          </div>
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={i < visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.22 }}
              className="flex"
              style={{ paddingLeft: `${(line.indent ?? 0) * 1.4}rem` }}
            >
              <span className="w-6 shrink-0 select-none text-slate-600 text-right mr-3">{i + 1}</span>
              <span className="whitespace-pre-wrap break-words">
                {line.nodes.map((n, j) => (
                  <span key={j} className={n.c ?? "text-slate-300"}>
                    {n.t}
                  </span>
                ))}
              </span>
            </motion.div>
          ))}
          {visible >= codeLines.length && (
            <div className="flex items-center mt-1 text-slate-500">
              <span className="w-6 shrink-0 mr-3" />
              <span className="text-mint">➜</span>
              <span className="ml-2 inline-block h-4 w-[8px] bg-accent animate-blink" />
            </div>
          )}
        </div>
      </div>

      {/* floating chips */}
      {floatChips.map((chip, i) => (
        <motion.div
          key={chip.label}
          className={`absolute ${chip.cls} z-10`}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: chip.dur, delay: chip.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-[#0d1424]/90 px-3.5 py-2 text-xs font-medium text-slate-200 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <span className="text-sm">{chip.icon}</span>
            {chip.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const sx = useSpring(mx, { stiffness: 70, damping: 20 });
  const sy = useSpring(my, { stiffness: 70, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${sx}% ${sy}%, rgba(255,106,43,0.13), transparent 65%)`;

  const [roleIdx, setRoleIdx] = useState(0);

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={(e) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set(((e.clientX - rect.left) / rect.width) * 100);
        my.set(((e.clientY - rect.top) / rect.height) * 100);
      }}
      className="relative flex min-h-screen items-center pt-24 pb-16 min-[425px]:pt-28 min-[425px]:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-grid bg-grid-mask" />
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />

        <motion.div
          className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,106,43,0.28), transparent 65%)", filter: "blur(30px)" }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(57,224,255,0.18), transparent 65%)", filter: "blur(40px)" }}
          animate={{ x: [0, -70, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-12rem] left-1/3 h-[28rem] w-[28rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(53,240,168,0.12), transparent 65%)", filter: "blur(40px)" }}
          animate={{ x: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 min-[425px]:gap-16 min-[425px]:px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 sm:px-8">
        {/* LEFT */}
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-mint/25 bg-mint/[0.07] px-3 py-1.5 text-[11px] font-medium text-mint min-[425px]:gap-2.5 min-[425px]:px-4 min-[425px]:py-2 min-[425px]:text-xs sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-mint animate-pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            {profile.available}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 font-code text-sm text-fog min-[425px]:mt-7 sm:text-base"
          >
            <span className="text-accent">$</span> whoami, hi, I&apos;m
          </motion.p>

          <h1 className="mt-2 font-display font-bold tracking-tight leading-[0.95]">
            <motion.span
              className="block text-[clamp(2rem,8.5vw,5.6rem)] text-white min-[425px]:text-[clamp(2.35rem,8.5vw,5.6rem)]"
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              MANTHAN
            </motion.span>
            <motion.span
              className="block text-[clamp(2rem,8.5vw,5.6rem)] text-gradient min-[425px]:text-[clamp(2.35rem,8.5vw,5.6rem)]"
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              RAJANI
            </motion.span>
          </h1>

          <div className="mt-4 flex min-h-8 items-center gap-2 font-code text-sm min-[425px]:mt-5 min-[425px]:text-base sm:text-xl">
            <span className="text-fog">{">"}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                transition={{ duration: 0.45 }}
                onAnimationComplete={() => {
                  setTimeout(() => setRoleIdx((i) => (i + 1) % roles.length), 2200);
                }}
                className="text-gradient-cool font-semibold"
              >
                {roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-4 max-w-xl text-[14px] leading-relaxed text-fog min-[425px]:mt-5 min-[425px]:text-[15px] sm:text-base"
          >
            I design and ship production <span className="text-slate-200 font-medium">AI-powered web applications</span> end-to-end,
            from LLM-backed backends and agentic workflows to RAG pipelines and responsive React/Next.js frontends that drive measurable business impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-7 flex flex-col items-stretch gap-3 min-[425px]:mt-9 min-[425px]:flex-row min-[425px]:flex-wrap min-[425px]:items-center min-[425px]:gap-4"
          >
            <button onClick={openCalendly} className="btn-primary w-full justify-center min-[425px]:w-auto">
              <FaRegCalendarCheck className="text-sm" />
              Book a 30-min call
            </button>
            <a href="#work" className="btn-ghost w-full justify-center min-[425px]:w-auto">
              View my work
              <FaArrowRight className="text-xs" />
            </a>
            <div className="flex items-center justify-center gap-3 min-[425px]:ml-1 min-[425px]:justify-start">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
                <FaGithub className="text-lg" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
                <FaLinkedinIn className="text-base" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn">
                <FaEnvelope className="text-base" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT - terminal (425px+) or compact snapshot (<425px) */}
        <div className="relative min-w-0 overflow-visible">
          <div className="min-[425px]:hidden">
            <HeroMobileSnapshot />
          </div>
          <CodeTerminal />
        </div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-fog transition-colors hover:text-accent lg:flex"
        aria-label="Scroll down"
      >
        <span className="font-code text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-current p-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-scroll-dot" />
        </span>
      </motion.a>
    </section>
  );
}
