import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Appliance Repair Services in Ottawa, ON | Same Day Service",
  description: "Expert appliance repair services in Ottawa and surrounding areas. We repair fridges, dishwashers, washers, dryers, stoves, and ovens. Fast, reliable, and affordable service. Call now!",
  keywords: "appliance repair Ottawa, fridge repair, dishwasher repair, washer repair, dryer repair, stove repair, oven repair, Ottawa ON",
  openGraph: {
    title: "Professional Appliance Repair Services in Ottawa, ON",
    description: "Expert appliance repair services for all major brands. Same day service available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

