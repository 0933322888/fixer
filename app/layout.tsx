import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resolveStaticSiteOrigin } from "@/lib/canonical-site";

const inter = Inter({ subsets: ["latin"] });

const siteOrigin = resolveStaticSiteOrigin();

export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin) } : {}),
  title: "Professional Appliance Repair Services in Ottawa | Same Day Service",
  description: "Expert appliance repair services in Ottawa and surrounding areas. We repair fridges, dishwashers, washers, dryers, stoves, and ovens. Fast, reliable, and affordable service. Call now!",
  keywords: "appliance repair Ottawa, fridge repair, dishwasher repair, washer repair, dryer repair, stove repair, oven repair, Ottawa ON",
  icons: {
    icon: ["/favicon.ico", "/gallery/BRAND1.png"],
    shortcut: "/favicon.ico",
    apple: "/gallery/BRAND1.png",
  },
  openGraph: {
    title: "Professional Appliance Repair Services in Ottawa",
    description: "Expert appliance repair services for all major brands. Same day service available.",
    type: "website",
    ...(siteOrigin ? { url: siteOrigin } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MHD6WJDM');
            `,
          }}
        />

      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-MHD6WJDM`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <Navbar />
        <main className="min-h-screen pb-24 sm:pb-0">
          {children}
        </main>
        <a
          href="tel:613-413-6969"
          className="fixed bottom-6 right-4 sm:right-6 z-50 bg-primary-500 text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors duration-300"
          aria-label="Call now at 613-413-6969"
        >
          CALL NOW
        </a>
        <Footer />
      </body>
    </html>
  );
}

