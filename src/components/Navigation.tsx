"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "/work" },
  { label: "Experiences", href: "/experiences" },
  { label: "Talent", href: "/talent" },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setCompact(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className={`mt-3 flex w-full items-center justify-between rounded-full border border-black/10 bg-off-white/80 backdrop-blur-md transition-all duration-500 ${
          compact ? "max-w-3xl px-5 py-2" : "max-w-6xl px-6 py-3"
        }`}
      >
        <Link
          href="/"
          className="font-bold text-sm tracking-tight uppercase whitespace-nowrap pr-4"
        >
          Mayank Shukla
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-xs tracking-[0.18em] uppercase font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative py-1 transition-colors hover:text-royal"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1 text-xs tracking-[0.18em] uppercase font-medium text-royal hover:gap-2 transition-all"
        >
          Contact <span aria-hidden>→</span>
        </Link>

        <button
          className="md:hidden text-xs tracking-[0.18em] uppercase font-medium"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-4 right-4 rounded-3xl border border-black/10 bg-off-white p-6 flex flex-col gap-4"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] uppercase font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-sm tracking-[0.18em] uppercase font-medium text-royal"
          >
            Contact →
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
