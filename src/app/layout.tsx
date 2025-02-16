import type { Metadata } from "next";
import { Geist, Geist_Mono , Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});





export const metadata: Metadata = {
  title: "Nandhakrishnan Portfolio",
  description: "Portfolio of Nandhakrishnan || Software Developer || skcet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-black ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
