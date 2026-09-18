import Image from "next/image";
import { CheckCircle2, Lock, Clock, ClipboardList, Zap } from "lucide-react";
import type { ReactNode } from "react";

type Badge = {
  icon: ReactNode;
  iconBg: string;
  label: string;
};

const badges: Badge[] = [
  {
    icon: <CheckCircle2 className="h-4 w-4 text-white" />,
    iconBg: "bg-[#5B9A2C]",
    label: "Vetted & Verified Artisans",
  },
  {
    icon: <Lock className="h-4 w-4 text-white" />,
    iconBg: "bg-[#2F6FE0]",
    label: "Secure Escrow Payments",
  },
  {
    icon: <Clock className="h-4 w-4 text-white" />,
    iconBg: "bg-[#C6379B]",
    label: "Real-Time Job Updates",
  },
  {
    icon: <ClipboardList className="h-4 w-4 text-white" />,
    iconBg: "bg-[#E8971E]",
    label: "Transparent Upfront Quotes",
  },
  {
    icon: <Zap className="h-4 w-4 text-white" />,
    iconBg: "bg-[#5B9A2C]",
    label: "Instant Alerts",
  },
];

const photos = [
  {
    src: "/customer-on-phone.png",
    alt: "Customer relaxing on her sofa while messaging an artisan through the HandyNaija app",
  },
  {
    src: "/plumber-at-work.png",
    alt: "Plumber repairing pipework under a bathroom sink",
  },
  {
    src: "/customer-home-office.png",
    alt: "Customer drinking coffee at his desk after booking a repair",
  },
  {
    src: "/customer-kitchen.png",
    alt: "Customer smiling in her kitchen",
  },
  {
    src: "/man-and-woman.png",
    alt: "Electrician installing a ceiling light fixture",
  }
];

/** Duplicates its children so a track can loop with a single -50% translate. */
function Marquee({
  children,
  duration = "30s",
  gapClassName = "gap-4",
}: {
  children: ReactNode;
  duration?: string;
  gapClassName?: string;
}) {
  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className={`flex w-max ${gapClassName} animate-marquee group-hover:[animation-play-state:paused]`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        <div className={`flex shrink-0 ${gapClassName}`}>{children}</div>
        <div className={`flex shrink-0 ${gapClassName}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function CareSection() {
  return (
    <section className="bg-[#487611] py-20">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee var(--marquee-duration, 30s) linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation-play-state: paused; }
        }
      `}</style>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2 md:gap-16">
        <h2 className="text-4xl font-bold leading-[1.15] text-white sm:text-5xl">
          Give your home the care it deserves
        </h2>
        <p className="text-base leading-relaxed text-white/85 sm:text-lg">
          What&apos;s the emergency? A burst pipe flooding the kitchen? AC
          blowing hot air during a heatwave? Or just upgrading your living
          room lighting? Download HandyNaija and let vetted professionals
          restore your peace of mind in hours.
        </p>
      </div>

      <div className="mt-12">
        <Marquee duration="28s">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="flex shrink-0 items-center gap-3 rounded-md border border-white/15 bg-white px-5 py-3 text-sm font-medium text-black ring-1 ring-white/20"
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${badge.iconBg}`}
              >
                {badge.icon}
              </span>
              {badge.label}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mt-6">
        <Marquee duration="40s" gapClassName="gap-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative h-64 w-80 shrink-0 overflow-hidden sm:h-80 sm:w-96"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 384px, 320px"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}