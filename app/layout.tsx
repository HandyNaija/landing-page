import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://myhandynaija.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "HandyNaija | Trusted Artisans Near You",
    template: "%s | HandyNaija",
  },

  description:
    "HandyNaija is a trusted platform connecting customers with reliable artisans and service providers near them.",

  keywords: [
    "Handy Naija",
    "HandyNaija",
    "artisans in Nigeria",
    "service providers in Nigeria",
    "hire artisans",
    "plumbers in Nigeria",
    "electricians in Nigeria",
    "AC technicians in Nigeria",
    "trusted artisans",
    "home services Nigeria",
  ],

  authors: [{ name: "HandyNaija" }],
  creator: "HandyNaija",
  publisher: "HandyNaija",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      style={
        {
          "--font-syne": "Syne, Arial, sans-serif",
          "--font-geist-mono":
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          "--font-montserrat": "Montserrat, Arial, sans-serif",
        } as React.CSSProperties
      }
    >
      <body className="min-h-full flex flex-col bg-[#F8F7EF]">
        {children}
      </body>
    </html>
  );
}