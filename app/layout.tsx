import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const agrandir = localFont({
  variable: "--font-agrandir",
  display: "swap",
  src: [
    {
      path: "./fonts/agrandir/Agrandir-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/agrandir/Agrandir-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const graphik = localFont({
  variable: "--font-graphik",
  display: "swap",
  src: [
    {
      path: "./fonts/graphik/GraphikRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/graphik/GraphikBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Matrix — Light, data, TV. Sorted in seconds.",
  description:
    "Pay electricity, airtime, data, cable TV, and exam pins from one Nigerian wallet. Your number is your account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${agrandir.className} ${graphik.className} antialiased`}
      >
        <Navbar />
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
