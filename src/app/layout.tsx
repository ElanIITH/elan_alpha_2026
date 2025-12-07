import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bemore = localFont({
  src: "./fonts/bemore_serif.otf",
  variable: "--font-bemore",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elan&nVision",
  description:
    "Elan & nVision is the annual techno-cultural fest of IIT Hyderabad. It is a celebration of the stories, the melodies, and the memories that bring us together.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bemore.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
