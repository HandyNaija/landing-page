"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

type Card = {
  step: string;
  variant: "panel" | "overlay";
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    step: "Step 1",
    variant: "panel",
    image: "/images/artisans/step-1-bookings.png",
    imageAlt:
      "Booking request notification for an AC maintenance job in the HandyNaija app",
    title: "Receive Bookings",
    description:
      "Customers find your profile and book a session with you. You review the preliminary job details and accept the request to get started.",
  },
  {
    step: "Step 2",
    variant: "overlay",
    image: "/images/artisans/step-2-inspection.jpg",
    imageAlt: "Artisan inspecting an air conditioning unit at a customer's home",
    title: "On-Site Inspection",
    description:
      "Visit the customer's location to inspect the job firsthand. This allows you to accurately evaluate the problem, the scope of work, and any materials needed.",
  },
  {
    step: "Step 3",
    variant: "panel",
    image: "/images/artisans/step-3-quote.png",
    imageAlt: "Decorative wave pattern",
    title: "Send Your Quote",
    description:
      "Submit a final, detailed quote directly through the app based on your inspection. Once the customer approves, their money is locked safely in the HandyNaija escrow vault.",
  },
  {
    step: "Step 4",
    variant: "panel",
    image: "/images/artisans/step-4-earnings.png",
    imageAlt:
      "Earnings dashboard in the HandyNaija app showing weekly income and a withdrawal button",
    title: "Work & Get Paid",
    description:
      "Execute the task with your usual mastery. Once you are done, the customer confirms the job is complete, and the secured funds are instantly released into your wallet.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ArtisanCard({ card }: { card: Card }) {
  if (card.variant === "overlay") {
    return (
      <motion.div
        variants={cardVariants}
        className="relative h-[560px] overflow-hidden rounded-3xl sm:h-[600px]"
      >
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        <span className="absolute left-6 top-6 text-lg font-medium text-white/90">
          {card.step}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white sm:text-2xl">{card.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
            {card.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div variants={cardVariants} className="overflow-hidden rounded-3xl bg-neutral-100">
      <div className="relative h-[420px] sm:h-[450px]">
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <span className="absolute left-6 top-6 text-lg font-medium text-white/90">
          {card.step}
        </span>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">{card.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ForArtisansSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-sm border border-green-300 px-4 py-1.5 text-xs font-semibold tracking-wide text-neutral-700">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5B9A2C]" />
          FOR ARTISANS
        </span>
        <h2 className="mt-6 text-3xl font-bold text-neutral-900 sm:text-4xl">
          Earn Money with HandyNaija
        </h2>
        <p className="font-montserrat mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          Join thousands of vetted professionals across Nigeria earning steady
          income. For electricians, plumbers, carpenters, and technicians
          looking for consistent jobs and guaranteed payments.
        </p>
      </div>

      <motion.div
        className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card) => (
          <ArtisanCard key={card.step} card={card} />
        ))}
      </motion.div>
    </section>
  );
}