// app/page.tsx
import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-[#F8F7EF] flex flex-col">
      {/* Header */}
      <header className="w-full px-6 sm:px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="HandyNaija Logo"
            width={150}
            height={60}
            priority
            className="w-[150px] h-auto object-contain"
          />
        </div>

        <a
          href="mailto:support@handynaija.com"
          className="hidden sm:inline-flex text-sm font-medium text-[#8E9297] hover:text-[#65B91F] transition"
        >
          Contact Us
        </a>
      </header>

      {/* Main Content */}
      <section className="flex-1 flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center -mt-16">
          <Image
            src="/logo.png"
            alt="HandyNaija Logo"
            width={230}
            height={100}
            priority
            className="w-[230px] h-auto object-contain"
          />

          <h1 className="mt-8 text-3xl sm:text-5xl font-bold text-[#65B91F] tracking-tight">
            Coming Soon
          </h1>

          <p className="mt-4 max-w-md text-sm sm:text-base leading-7 text-[#8E9297]">
            HandyNaija is building a trusted platform to connect customers with
            reliable artisans near them.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:support@handynaija.com"
              className="rounded-full bg-[#65B91F] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Contact Us
            </a>

            <a
              href="#footer"
              className="rounded-full border border-[#65B91F] px-6 py-3 text-sm font-semibold text-[#65B91F] hover:bg-[#65B91F]/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="w-full px-6 sm:px-10 py-6 border-t border-[#8E9297]/20"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-xs sm:text-sm text-[#8E9297]">
            © {new Date().getFullYear()} HandyNaija. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm text-[#8E9297]">
            Connecting people with trusted local artisans.
          </p>
        </div>
      </footer>
    </main>
  );
}