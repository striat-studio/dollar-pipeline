import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Striat — Software Infrastructure Studio",
    template: "%s — Striat",
  },
  description:
    "Striat is a small, senior engineering studio. We build production systems for founders and operators who need software that holds up under real load.",
  metadataBase: new URL("https://striat.dev"),
  openGraph: {
    siteName: "Striat",
    locale: "en_US",
    type: "website",
    title: "Striat — Software Infrastructure Studio",
    description:
      "Senior engineering studio. Production systems that survive growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Striat — Software Infrastructure Studio",
    description:
      "Senior engineering studio. Production systems that survive growth.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0A0A0B] text-[#F4F4F5]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
