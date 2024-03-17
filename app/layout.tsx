import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
 
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elaman Imashov",
  description: "Elaman Imashov homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-TXY64FPCRK" />
    </html>
  );
}
