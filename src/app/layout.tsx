import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DeltaSim | Engineering Simulation & Talent Solutions",
  description:
    "Advanced Engineering Simulation & Talent Solutions. CAE | FEA | CFD | Design Engineering | Optimization | Expert Talent Deployment",
  keywords: [
    "engineering simulation",
    "CAE",
    "FEA",
    "CFD",
    "engineering talent",
    "simulation services",
  ],
  openGraph: {
    title: "DeltaSim | Engineering Simulation & Talent Solutions",
    description:
      "Advanced Engineering Simulation & Talent Solutions. CAE | FEA | CFD | Design Engineering | Optimization | Expert Talent Deployment",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
