import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Oven Repair Nepean – Fast, Reliable Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Nepean. From heating failures and uneven baking to control board faults, we fix Whirlpool, LG, Samsung, GE & more. Same-day service with clear pricing and a 90-day warranty.",
  keywords: "oven repair Nepean, electric oven repair, oven not heating Nepean, oven repair service",
};

const benefits = [
  "Local expertise with attention to detail",
  "Convenient appointment times, even weekends",
  "We don't leave a mess behind",
  "Trusted by homeowners across Nepean",
  "No surprises — just reliable help",
];

const commonIssues = [
  {
    title: "Oven won't heat past 200°F",
    description: "Failed sensor or broken lower element — we fix both.",
  },
  {
    title: "Turns on, then shuts off",
    description: "Control board, relay, or thermal issue.",
  },
  {
    title: "Digital display flickers",
    description: "We test power supply and panel.",
  },
  {
    title: "Burns everything on one rack",
    description: "Uneven element heat — we calibrate or replace.",
  },
  {
    title: "Smells metallic",
    description: "Can signal electrical overheating — we inspect wiring.",
  },
  {
    title: "Fan won't turn off",
    description: "Stuck relay or damaged thermostat.",
  },
  {
    title: "Oven cycles on/off rapidly",
    description: "Bad temperature control or faulty wiring.",
  },
  {
    title: "Oven won't unlock after cleaning",
    description: "We reset lock mechanism and clear codes.",
  },
  {
    title: "Light keeps burning out",
    description: "We replace with correct voltage and fix socket.",
  },
  {
    title: "Control knob turns but doesn't adjust",
    description: "We replace stripped or faulty knobs or switches.",
  },
];

const serviceAreas = [
  "Barrhaven East",
  "Centrepointe",
  "Merivale Gardens",
  "Manordale",
  "Tanglewood",
  "Fallowfield",
];

const faqs = [
  {
    question: "Do you fix ovens in Bells Corners and Parkwood Hills?",
    answer: "Yes — we frequently service ovens across Nepean.",
  },
  {
    question: "Do you fix broken heating elements?",
    answer: "Yes — both top and bottom elements.",
  },
  {
    question: "Can I get same-day oven repair?",
    answer: "Sometimes — availability depends on location and time.",
  },
  {
    question: "Do you work with LG and Samsung ovens?",
    answer: "Yes — those are common brands we repair.",
  },
  {
    question: "Do you handle oven installations in condos?",
    answer: "Yes — provided it's an electric model.",
  },
];

export default function OvenRepairNepeanPage() {
  return (
    <>
      <ServiceHero
        title="Nepean Oven Repair Specialists You Can Count On"
        description="If your electric oven is unreliable, we'll get it back on track. Fixer Appliance Repair brings experience and clear pricing to every Nepean home. Brands we repair include LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      {/* Oven Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Installation Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Thinking of replacing your oven in Nepean? Check our repair vs. replace guide — it may 
                show that repair is still an option.
              </p>
              <p className="text-center">
                If replacement is the choice, we provide oven installation in Nepean. We'll set it up and 
                run a test using the current electrical hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't create new circuits or gas lines.
              </p>
              <div className="text-center mt-8">
                <Link href="/appliance-installation/oven" className="btn-primary">
                  Learn More About Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Service Area: Nepean and Nearby</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Nepean area, including:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                  {area}
                </div>
              ))}
              <div className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                and surrounding neighbourhoods
              </div>
            </div>
            <p className="text-center text-gray-700 mb-6">
              We also service nearby communities:{" "}
              <Link href="/oven-repair/kanata" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Kanata
              </Link>
              ,{" "}
              <Link href="/oven-repair/stittsville" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Stittsville
              </Link>
              ,{" "}
              <Link href="/oven-repair/orleans" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Orleans
              </Link>
              ,{" "}
              <Link href="/oven-repair/vanier" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Vanier
              </Link>
              ,{" "}
              <Link href="/oven-repair/barrhaven" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Barrhaven
              </Link>
              ,{" "}
              <Link href="/oven-repair/mississippi-mills" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Mississippi Mills
              </Link>
              ,{" "}
              <Link href="/oven-repair/arnprior" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Arnprior
              </Link>
              , and{" "}
              <Link href="/oven-repair/carleton-place" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Carleton Place
              </Link>
              . For full coverage, see our{" "}
              <Link href="/oven-repair" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Ottawa
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Things to Do in Nepean */}
      <ThingsToDoSection
        attractions={[
          { name: "Andrew Haydon Park", description: "stroll by the water's edge" },
          { name: "Bruce Pit", description: "open space for walks and dogs to run free" },
          { name: "Merivale Mall", description: "convenient for errands and meals" },
          { name: "Art Is In Bakery", description: "artisan food worth tasting" },
        ]}
        heading="Relax in Nepean While We Repair Your Oven"
        description="Step outside and make the most of your time:"
        
        linkText="Events in Nepean"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Book Your Oven Repair in Nepean"
        description="Fixer offers expert oven repair throughout Nepean. Let's get started!"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Nepean", href: "/washer-repair/nepean" },
          { name: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
          { name: "Dishwasher Repair Nepean", href: "/dishwasher-repair/nepean" },
          { name: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
          { name: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
          { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
          { name: "Oven Installation Nepean", href: "/appliance-installation/oven" },
        ]}
        heading="Also Need Help With…"
        description="We handle more than ovens — here are our other services in Nepean:"
        applianceName="Oven"
      />
    </>
  );
}
