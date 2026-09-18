"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type CollageImage = {
  src: string;
  alt: string;
};

type CollageColumn = {
  offset: string; // Tailwind margin-top class, creates the staggered rhythm
  images: CollageImage[];
};

const collageColumns: CollageColumn[] = [
  {
    offset: "mt-[15px]",
    images: [
      { src: "/collage-01.png", alt: "Father lifting his laughing baby into the air at home" },
      { src: "/collage-02.png", alt: "Woman in a robe at her bathroom mirror" },
    ],
  },
  {
    offset: "mt-0",
    images: [
      { src: "/collage-03.png", alt: "Woman sleeping peacefully under a duvet" },
      { src: "/collage-04.png", alt: "Couple embracing in their living room" },
      { src: "/collage-05.png", alt: "Woman working with colorful fabric at a sewing desk" },
    ],
  },
  {
    offset: "mt-16",
    images: [{ src: "/collage-06.png", alt: "Family gathered for dinner around a set table" }],
  },
  {
    offset: "mt-0",
    images: [{ src: "/collage-07.png", alt: "Electrician working on a ladder near an AC unit" }],
  },
  {
    offset: "mt-0",
    images: [{ src: "/collage-08.png", alt: "Carpenter sanding a wooden table in his workshop" }],
  },
  {
    offset: "mt-16",
    images: [{ src: "/collage-09.png", alt: "Painter taping a window frame before painting" }],
  },
  {
    offset: "mt-2",
    images: [
      { src: "/collage-10.png", alt: "Woman relaxing in a hanging chair on her balcony" },
      { src: "/collage-11.png", alt: "Movers carrying a TV into a living room" },
      { src: "/collage-12.png", alt: "Technician mounting a TV bracket on the wall" },
    ],
  },
  {
    offset: "mt-[15px]",
    images: [
      { src: "/collage-13.png", alt: "Homeowner handing over keys to an artisan at the front door" },
      { src: "/collage-14.png", alt: "Technician setting up a home theater system" },
    ],
  },
];

// Single-image columns read as tall "phone screenshot" shapes (~3:8),
// 2-image columns are ~9:16 portrait, and 3-image columns are ~4:5.
// Measured directly off the reference layout.
function getAspectClass(imageCount: number) {
  if (imageCount === 1) return "aspect-[3/8]";
  if (imageCount === 3) return "aspect-[4/5]";
  return "aspect-[9/16]";
}

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I used to dread calling plumbers, but HandyNaija changed that. The artisan arrived on time, fixed my leaking pipes perfectly, and the escrow feature gave me complete peace of mind.",
    name: "Olivia Onyeka",
    role: "Home owner",
    avatar: "/avatar (3).svg",
  },
  {
    quote:
      "No more 'bring money for parts' scams! The electrician was professional, and I only released payment when my home's wiring was completely sorted. Highly recommend.",
    name: "Oluwatomi Bukola",
    role: "Fashion Blogger",
    avatar: "/avatar (1).svg",
  },
  {
    quote:
      "The carpenter I hired through HandyNaija built my kitchen cabinets exactly how I wanted them. The vetting process really works because the quality of work was outstanding.",
    name: "Felicia Bakare",
    role: "Real Estate Agent",
    avatar: "/avatar.svg",
  },
  {
    quote:
      "My AC packed up during the hottest week of the year, and HandyNaija sent a technician within hours. Fast, reliable, and no hidden charges. This platform is an absolute lifesaver.",
    name: "Nneka Azubuike",
    role: "Fashion Blogger",
    avatar: "/avatar (2).svg",
  },
];

function BrandMark() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
      <Image
        src="/mini-logo.svg"
        alt="HandyNaija"
        width={24}
        height={24}
        className="h-6 w-6 object-contain"
      />
    </span>
  );
}

const cardContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-white py-24">
      {/* photo collage */}
      <div className="mx-auto flex max-w-6xl justify-center gap-[10px] px-6">
        {collageColumns.map((column, i) => (
          <div key={i} className={`flex w-[9%] min-w-[90px] flex-col gap-2 ${column.offset}`}>
            {column.images.map((image) => (
              <div
                key={image.src}
                className={`relative w-full overflow-hidden rounded-2xl ${getAspectClass(column.images.length)}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="140px"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* heading */}
      <div className="mx-auto mt-16 max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl">
          Crafted With Care
          <br />
          Loved Everywhere
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          See why Naija loves us. We could tell you about our reliable
          artisans and secure payments, but we&apos;d rather let our users do
          the talking. Read real stories from people who have said goodbye to
          unbacked quotes and vanished deposits.
        </p>
      </div>

      {/* testimonials */}
      <motion.div
        className="mt-16 flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-[calc((100vw-72rem)/2+1.5rem)]"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={cardVariants}
            className="flex w-[320px] shrink-0 flex-col rounded-3xl bg-neutral-100 p-8"
          >
            <div className="flex items-center gap-2">
              <BrandMark />
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F5B324] text-[#F5B324]" />
                ))}
              </div>
              <span className="text-sm font-medium text-neutral-700">5.0</span>
            </div>

            <p className="mt-16 text-[15px] leading-relaxed text-neutral-700">
              &quot;{t.quote}&quot;
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="36px" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                <p className="text-sm text-neutral-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}