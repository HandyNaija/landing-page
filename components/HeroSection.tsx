"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Transition } from "framer-motion";

function PlayStoreIcon() {
  return (
    <Image
      src="/google-play.svg"
      alt=""
      width={16}
      height={16}
      className="h-4 w-4"
      aria-hidden="true"
    />
  );
}

function AppleIcon() {
  return (
    <Image
      src="/apple-icon.svg"
      alt=""
      width={16}
      height={16}
      className="h-4 w-4"
      aria-hidden="true"
    />
  );
}

const slideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const slideUpTransition: Transition = {
  duration: 0.4,
  ease: "easeOut",
  repeat: Infinity,
  repeatDelay: 1.5,
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] px-6 pt-20 text-center sm:pt-28">
      <div className="mx-auto max-w-3xl">
        <motion.h1
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={slideUpTransition}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl md:text-[3.4rem]"
        >
          Home repairs shouldn&apos;t feel like a gamble.
        </motion.h1>

        <motion.p
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={slideUpTransition}
          className="font-montserrat mx-auto mt-6 max-w-2xl text-sm text-base leading-relaxed text-neutral-500 sm:text-lg"
        >
          No more ghosting artisans, unbacked quotes, or vanished deposits.
          HandyNaija connects you to vetted masters, secures your funds
          safely in escrow, and guarantees the workmanship.
        </motion.p>

        <div className="font-montserrat mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/coming-soon"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-[#F1F9E8] px-6 py-3.5 text-sm font-semibold text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50"
          >
            Get It on Google Play
            <PlayStoreIcon />
          </Link>
          <Link
            href="/coming-soon"
            className="inline-flex items-center gap-2 rounded-full bg-[#78C51C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5f9021]"
          >
            Download on App Store
            <AppleIcon />
          </Link>
        </div>
      </div>

      {/* phone mockups (single combined asset) */}
      <div className="relative mx-auto mt-16 max-w-4xl sm:mt-20">
        <Image
          src="/Hero-phone.png"
          alt="HandyNaija app screens: searching for a plumber, the home screen with service categories, and an electrical service detail page"
          width={1200}
          height={760}
          className="h-auto w-full"
          priority
        />
      </div>

      {/* fade the bottom of the phones into the page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAFBF1] to-transparent" />
    </section>
  );
}