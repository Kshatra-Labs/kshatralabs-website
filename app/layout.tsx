import type { Metadata } from "next";
import { Space_Grotesk, Rajdhani, Inter } from "next/font/google"; // Removed Geist as per new design
import { SmoothScroll } from "@/components/smooth-scroll";
import { InitialLoader } from "@/components/initial-loader";
import "./globals.css";

export const revalidate = 0; // Disable static caching globally

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kshatra Labs | Autonomous Systems",
  description: "Engineering AI-native robotic systems for national security.",
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${rajdhani.variable} ${inter.variable} antialiased font-sans bg-black text-white`}
      >
        <InitialLoader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
