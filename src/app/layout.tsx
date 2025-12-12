import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kshatra Labs | Autonomous Systems for National Security",
  description: "Kshatra Labs engineers AI-native robotic systems that sense, reason, and act in real time across air, land, sea, and space — starting with autonomous aerial defense.",
  openGraph: {
    title: "Kshatra Labs | Autonomous Systems for National Security",
    description: "Building the Future of Autonomous Security",
    url: "https://kshatralabs.in",
    siteName: "Kshatra Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kshatra Labs",
    description: "Autonomous Systems for the Next Era of National Security",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
