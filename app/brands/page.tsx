import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Brands We Repair – Appliance Repair Experts in Ottawa | Fixer",
  description: "Fixer Appliance Repair Inc. services all major brands in Ottawa, from LG and Samsung to Bosch and Whirlpool. Explore our brand repair hub and book today.",
  keywords: "appliance brands, LG repair, Samsung repair, Whirlpool repair, GE repair, Ottawa appliance repair",
};

const brands = [
  { name: "LG Appliance Repair", href: "/brands/lg", logo: "LG", color: "bg-red-600" },
  { name: "Samsung Appliance Repair", href: "/brands/samsung", logo: "SAMSUNG", color: "bg-blue-600" },
  { name: "Whirlpool Appliance Repair", href: "/brands/whirlpool", logo: "Whirlpool", color: "bg-red-500" },
  { name: "GE Appliance Repair", href: "/brands/ge", logo: "GE", color: "bg-blue-700" },
  { name: "Frigidaire Appliance Repair", href: "/brands/frigidaire", logo: "frigidaire", color: "bg-red-700" },
  { name: "Maytag Appliance Repair", href: "/brands/maytag", logo: "Maytag", color: "bg-blue-800" },
  { name: "Bosch Appliance Repair", href: "/brands/bosch", logo: "BOSCH", color: "bg-red-600" },
  { name: "Kenmore Appliance Repair", href: "/brands/kenmore", logo: "Kenmore", color: "bg-blue-600" },
  { name: "Panasonic Appliance Repair", href: "/brands/panasonic", logo: "Panasonic", color: "bg-blue-700" },
  { name: "KitchenAid Appliance Repair", href: null, logo: "KitchenAid", color: "bg-red-700" },
  { name: "Electrolux Appliance Repair", href: null, logo: "electrolux", color: "bg-gray-700" },
  { name: "Amana Appliance Repair", href: null, logo: "AMANA", color: "bg-orange-600" },
  { name: "Hotpoint Appliance Repair", href: null, logo: "Hotpoint", color: "bg-red-600" },
  { name: "JennAir Appliance Repair", href: null, logo: "JennAir", color: "bg-gray-800" },
  { name: "Sub-Zero Appliance Repair", href: null, logo: "SUB-ZERO", color: "bg-gray-900" },
  { name: "Wolf Appliance Repair", href: null, logo: "WOLF", color: "bg-red-800" },
  { name: "Viking Appliance Repair", href: null, logo: "VIKING", color: "bg-blue-900" },
  { name: "Miele Appliance Repair", href: null, logo: "Miele", color: "bg-red-600" },
  { name: "Haier Appliance Repair", href: null, logo: "Haier", color: "bg-blue-600" },
  { name: "Magic Chef Appliance Repair", href: null, logo: "Magic Chef", color: "bg-purple-600" },
  { name: "Inglis Appliance Repair", href: null, logo: "INGLIS", color: "bg-blue-700" },
  { name: "Admiral Appliance Repair", href: null, logo: "Admiral", color: "bg-blue-800" },
  { name: "Roper Appliance Repair", href: null, logo: "ROPER", color: "bg-green-700" },
  { name: "Blomberg Appliance Repair", href: null, logo: "blomberg", color: "bg-teal-600" },
  { name: "Danby Appliance Repair", href: null, logo: "Danby", color: "bg-blue-600" },
];

const benefits = [
  "Experienced local techs, trained across all major brands",
  "90-day repair warranty on every job",
  "Same-day appointments available in many Ottawa areas",
  "Genuine replacement parts whenever possible",
  "Friendly, transparent service — no hidden fees",
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="heading-xl text-white mb-6">Brands We Repair</h1>
              <p className="text-xl text-gray-100 mb-4">
                Not all appliances are built the same — but they all need a Fixer sometimes. From smart fridges
                to classic washers, our technicians repair the top appliance brands you know and trust.
              </p>
              <p className="text-lg text-gray-100 mb-8">
                👉 Select your brand below to learn more about our repair services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="bg-white text-accent-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Book Online
                </Link>
                <a href="tel:613-413-6969" className="btn-outline border-white text-white hover:bg-white hover:text-accent-600">
                  Call us
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-sm">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Kitchen 3.png"
                  alt="We repair all major kitchen appliance brands in Ottawa"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 384px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-md text-center mb-12">All Major Brands</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                brand.href ? (
                  <Link
                    key={index}
                    href={brand.href}
                    className="group bg-white hover:bg-primary-50 p-6 rounded-lg text-center transition-all hover:shadow-lg border-2 border-gray-200 hover:border-primary-400 flex flex-col items-center gap-4"
                  >
                    <div className={`${brand.color} text-white w-32 h-20 rounded-xl flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform px-3`}>
                      {brand.logo.toUpperCase()}
                    </div>
                  </Link>) : (
                  <div key={index} className="group bg-white p-6 rounded-lg text-center transition-all border-2 border-gray-200 flex flex-col items-center gap-4">
                    <div className={`${brand.color} text-white w-32 h-20 rounded-xl flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform px-3`}>
                      {brand.logo.toUpperCase()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <BenefitsSection heading="Why Choose Fixer for Brand Repairs" benefits={benefits} />

      {/* CTA Section */}
      <CTASection
        heading="Ready to Get Your Appliance Fixed?"
        description="Whether it's LG, Samsung, Whirlpool, or any brand in your kitchen or laundry room — Fixer has you covered."
        buttonText="Book Your Repair"
      />
    </>
  );
}

