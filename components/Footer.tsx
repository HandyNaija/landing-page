import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

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

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
      <path d="M13.9 10.4 20.6 3h-2l-5.8 6.4L8.2 3H2.8l6.9 9.7L2.8 20h2l6-6.7 5 6.7h5.4l-7.3-9.6zm-2.1 2.4-.7-1L5.6 4.4h2.4l4.5 6.1.7 1 5.8 8h-2.4l-4.8-6.7z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
      <path d="M16.6 5.1c-.9-.9-1.4-2.1-1.4-3.4h-3v13.6c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1V9.7c-.3 0-.5-.1-.8-.1-3.1 0-5.6 2.5-5.6 5.6S6.5 21 9.7 21s5.6-2.5 5.6-5.6V8.6c1.2.9 2.6 1.4 4.1 1.4V7c-1 0-1.9-.4-2.8-1.3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
      <path d="M6.9 8.4H3.6V20h3.3V8.4zM5.3 3.6c-1.1 0-1.9.8-1.9 1.9 0 1 .8 1.9 1.9 1.9 1.1 0 1.9-.8 1.9-1.9 0-1.1-.8-1.9-1.9-1.9zM20.4 20h-3.3v-6.1c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20h-3.3s0-10.7 0-11.6h3.3v1.6c.4-.7 1.2-1.7 3-1.7 2.2 0 3.9 1.4 3.9 4.5l.3 7.2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
    </svg>
  );
}

function LogoMark() {
  return (
    <Image
      src="/logo.png"
      alt="HandyNaija"
      width={160}
      height={48}
      className="h-8 w-auto"
    />
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#5B9A2C]">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-neutral-700 transition hover:text-neutral-900">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ children, href, label }: { children: ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5B9A2C] transition hover:bg-[#4d8322]"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-16 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <LogoMark />
          <p className="font-montserrat mt-6 text-sm leading-relaxed text-neutral-600">
            Say goodbye to endless searching and unbacked quotes. Get the
            HandyNaija app now to connect with trusted masters, track your
            bookings in real-time, and manage your home maintenance from
            anywhere.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/coming-soon"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-300"
            >
              Get It on Google Play
              <PlayStoreIcon />
            </Link>
            <Link
              href="/coming-soon"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6FA828] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5f9021]"
            >
              Download on App Store
              <AppleIcon />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 md:gap-x-16">
          <FooterColumn title="Navigation" links={["Home", "About", "Contact Us"]} />
          <FooterColumn title="Legal" links={["Privacy policy", "Terms of Service"]} />

          <div>
            <h3 className="text-sm font-semibold text-[#5B9A2C]">Contact Us</h3>
            <p className="font-montserrat mt-4 text-sm leading-relaxed text-neutral-700">
              3 Chuidi Ajabor 
              <br />
              St. Asaba 106104. Nigeria
            </p>
            <a
              href="mailto:Support@handynaija.com"
              className="mt-4 block text-sm text-neutral-700 transition hover:text-neutral-900"
            >
              Support@handynaija.com
            </a>
            <div className="mt-4 flex gap-2">
              <SocialIcon href="#" label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon href="#" label="X">
                <XIcon />
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="#" label="TikTok">
                <TikTokIcon />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-green-200 pt-6">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} HandyNaija. All rights reserved
        </p>
      </div>
    </footer>
  );
}