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

export default function DownloadAppSection() {
  return (
    <section className="px-0 py-0 sm:px-0">
      {/* white space above, sharp top edge into the olive-green field,
          rounded bottom corners, generous bottom padding so the corners
          are visible past the phone mockup */}
      <div className="relative overflow-hidden rounded-b-[3rem] bg-[#487611] pb-14 pt-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Tap into seamless home repairs.
            <br />
            Download the app.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Say goodbye to endless searching and unbacked quotes. Get the
            HandyNaija app now to connect with trusted masters, track your
            bookings in real-time, and manage your home maintenance from
            anywhere.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/coming-soon"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              Get It on Google Play
              <PlayStoreIcon />
            </Link>
            <Link
              href="/coming-soon"
              className="inline-flex items-center gap-2 rounded-full bg-[#79AE3B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6a9a30]"
            >
              Download on App Store
              <AppleIcon />
            </Link>
          </div>
        </div>

        {/* tilted phone mockup — kept narrower than the section so the
            rounded corners peek out on either side, with room below it
            before the card's bottom edge, matching the Figma spacing */}
        <div className="relative mx-auto mt-12 w-[85%] max-w-xl sm:w-full">
          <Image
            src="/phone.png"
            alt="HandyNaija home screen tilted in perspective, showing top-rated artisans and search results"
            width={1400}
            height={1100}
            className="mx-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}