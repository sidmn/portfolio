import type { Metadata } from "next";
import "./globals.css";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const Zen = Zen_Kaku_Gothic_New({weight:['300','400','500','700']})

export const metadata: Metadata = {
  title: "Sid's device",
  description: "Portfolio of Siddharth Mantri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={Zen.className}
      >
        {children}
      </body>
    </html>
  );
}
