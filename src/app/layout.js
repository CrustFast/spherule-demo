import { Geist } from "next/font/google";
import "./globals.css";

import SmoothScrolling from "@/components/layout/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spherule",
  description: "For Portfolio Website @Naufal Milzam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {/* Bungkus children dengan SmoothScrolling */}
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}