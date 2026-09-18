"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Search & Pick an Artisan",
    description:
      "Find verified local experts for any job from leaky pipes to electrical work and choose the right artisan for you.",
    image: "/step-1-search.png",
    imageAlt: "Search results for a plumber in the HandyNaija app",
  },
  {
    number: "02",
    title: "Book & Pay Inspection Fee",
    description:
      "Schedule a convenient date and time for the artisan to visit your location. Pay a small, secure inspection fee to lock in your appointment.",
    image: "/step-2-booking.png",
    imageAlt: "Booking details screen showing the inspection fee",
  },
  {
    number: "03",
    title: "Get an On-Site Quote",
    description:
      "The artisan will assess the task in person and send a detailed, final price directly to your app. No hidden charges, just transparent pricing.",
    image: "/step-3-quote.png",
    imageAlt: "Artisan and customer shaking hands after agreeing on a quote",
  },
  {
    number: "04",
    title: "Approve & Release Funds",
    description:
      "Approve the quote to hold your money safely in our escrow vault. You only release the final payment when the job is completed to your satisfaction.",
    image: "/step-4-review.png",
    imageAlt: "Booking summary screen asking the customer to rate the job",
  },
];

function StepText({
  step,
  index,
  onActivate,
}: {
  step: Step;
  index: number;
  onActivate: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Treats the vertical center of the viewport as the trigger line, so each
  // block "activates" as it crosses the middle of the screen.
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (inView) onActivate(index);
  }, [inView, index, onActivate]);

  return (
    <div ref={ref} className="flex min-h-[70vh] flex-col justify-center md:min-h-[80vh]">
      {/* image shown inline on mobile, since there's no sticky column there */}
      <div className="mb-8 overflow-hidden rounded-[2rem] md:hidden">
        <Image
          src={step.image}
          alt={step.imageAlt}
          width={400}
          height={710}
          className="h-auto w-full"
        />
      </div>

      <span className="text-sm font-semibold text-[#5B9A2C]">{step.number}</span>
      <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight text-[#5B9A2C] sm:text-3xl">
        {step.title}
      </h3>
      <p className="mt-4 max-w-md text-neutral-600">{step.description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#FAFBF1] px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2  border border-green-300 px-4 py-1.5 text-xs font-semibold tracking-wide text-neutral-700">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5B9A2C]" />
          FEATURES
        </span>
        <h2 className="mt-6 text-3xl font-bold text-neutral-900 sm:text-4xl">
          What Makes HandyNaija Different
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* pinned media column — desktop only */}
        <div className="hidden md:block">
          <div className="sticky top-0 flex h-screen items-center justify-center">
            <div className="relative h-[800px] w-[540px] overflow-hidden rounded-[2.5rem]">
              {steps.map((step, i) => (
                <motion.div
                  key={step.image}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: activeIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="400px"
                    priority={i === 0}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* scrolling text column */}
        <div>
          {steps.map((step, i) => (
            <StepText key={step.title} step={step} index={i} onActivate={setActiveIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}