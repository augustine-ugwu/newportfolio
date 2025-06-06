import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Augustine Ugwu | Portfolio",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "A front-end developer who blends clean and efficient code with creative problem-solving to build sleek, responsive interfaces using React, TypeScript, and Tailwind CSS.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Augustine Ugwu",
  ],
  authors: [{ name: "Augustine Ugwu", url: "https://augustineugwu.com" }],
  metadataBase: new URL("https://augustineugwu.com"),
  openGraph: {
    title: "Augustine Ugwu | Portfolio",
    description:
      "I specialise in transforming concepts into fast, functional websites using modern tools such as React, TypeScript, and Tailwind CSS.",
    url: "https://augustineugwu.com",
    siteName: "Augustine Ugwu Portfolio",
    images: [
      {
        url: "https://augustineugwu.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Augustine Ugwu Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Augustine Ugwu | Portfolio",
    description:
      "Transforming concepts into fast, modern websites using React and Tailwind CSS.",
    images: ["https://augustineugwu.com/og-image.png"],
    creator: "@mallamhillz",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
