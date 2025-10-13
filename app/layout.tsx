import type { Metadata } from "next";
import { Jost, Rosarivo } from "next/font/google";
import "./globals.css";

const jostSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const rosarivo = Rosarivo({
  variable: "--font-rosarivo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morrissey Songs Tour 2025 - 2026",
  description: "Morrissey live setlist and song statistics by tour and year.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Morrissey Songs Tour 2025 - 2026",
    description: "Discover Morrissey's most played songs live during his 2025–2026 tour.",
    url: "https://your-domain.com",
    siteName: "Morrissey Stats",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jostSans.variable} ${rosarivo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
