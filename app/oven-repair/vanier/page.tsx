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
  title: "Oven Repair Vanier – Fast, Reliable Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Vanier. From no-heat issues and faulty elements to flickering displays and jammed doors, we service Whirlpool, Samsung, LG, GE & more. Same-day service, upfront pricing, 90-day warranty.",
  keywords: "oven repair Vanier, electric oven repair, oven not heating Vanier, oven repair service",
};

const benefits = [
  "Skilled Vanier oven service technicians with local experience",
  "Straightforward pricing before work begins",
  "Same-day and next-day availability",
  "Every job backed by a 90-day labour warranty",
];

const commonIssues = [
  {
    title: "Oven not powering on",
    description: "In older Vanier homes, tripped breakers or failed boards are frequent causes. We'll repair or replace what's needed.",
  },
  {
    title: "Takes forever to preheat",
    description: "Weak elements or faulty sensors slow things down. We'll restore fast preheating.",
  },
  {
    title: "Oven door jammed shut",
    description: "Self-clean cycles sometimes trap the lock. We'll release it and repair the latch.",
  },
  {
    title: "Display flickering or blank",
    description: "Worn wiring or bad boards often cause this. We'll fix it.",
  },
  {
    title: "Oven light won't turn off",
    description: "A door switch out of alignment usually causes this. We'll replace it.",
  },
  {
    title: "Strange smells during use",
    description: "Burning wires or old spills are common. We'll clean and repair for safe cooking.",
  },
];

const serviceAreas = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const faqs = [
  {
    question: "Do you repair ovens in Vanier homes and apartments?",
    answer: "Yes — all housing types.",
  },
  {
    question: "Why won't my oven start at all?",
    answer: "Could be a bad fuse, switch, or control board.",
  },
  {
    question: "Do you install ovens in Vanier?",
    answer: "Yes — using current electrical lines.",
  },
  {
    question: "Do you repair all oven brands?",
    answer: "Yes — Whirlpool, LG, Samsung, GE, and more.",
  },
  {
    question: "Do you offer warranty?",
    answer: "Yes — 90-day labour warranty.",
  },
];

export default function OvenRepairVanierPage() {
  return (
    <>
      <ServiceHero
        title="Reliable Oven Repair in Vanier"
        description="Cooking troubles in Vanier? Whether your oven won't start or shuts off mid-bake, our local team provides quick and professional oven repair you can count on. We repair all major electric oven brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Oven Issues We Fix in Vanier" />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      {/* Oven Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Oven Installation in Vanier</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Looking for oven installation in Vanier? Before making the switch, read our repair vs.
                replace guide — it compares repair costs and replacement value.
              </p>
              <p className="text-center">
                Already bought one? We provide oven installation in Vanier. We'll connect, level, and
                test it using your existing electrical setup.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't provide new high-voltage wiring or gas hookups.
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
            <h2 className="heading-md mb-8 text-center">Service Area</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Vanier area, including:
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
              For nearby towns, check our main{" "}
              <Link href="/oven-repair" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Ottawa
              </Link>{" "}
              page — we also cover{" "}
              <Link href="/oven-repair/kanata" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Kanata
              </Link>
              ,{" "}
              <Link href="/oven-repair/stittsville" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Stittsville
              </Link>
              ,{" "}
              <Link href="/oven-repair/nepean" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Nepean
              </Link>
              ,{" "}
              <Link href="/oven-repair/orleans" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Orleans
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
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Things to Do in Vanier */}
      <ThingsToDoSection
        attractions={[
          { name: "Richelieu Park", description: "tranquil forest walks" },
          { name: "Vanier Museopark", description: "stories and exhibits" },
          { name: "Beechwood Avenue", description: "enjoy coffee or shopping" },
        ]}
        heading="Enjoy Your Time in Vanier While We Repair the Oven"
        description="Step outside and explore:"
        linkText="Explore Vanier's events calendar"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Schedule Your Oven Repair in Vanier"
        description="Don't let a broken oven spoil your meal — reach out now to schedule repair:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Vanier", href: "/washer-repair/vanier" },
          { name: "Dryer Repair Vanier", href: "/dryer-repair/vanier" },
          { name: "Dishwasher Repair Vanier", href: "/dishwasher-repair/vanier" },
          { name: "Fridge Repair Vanier", href: "/fridge-repair/vanier" },
          { name: "Freezer Repair Vanier", href: "/freezer-repair/vanier" },
          { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
          { name: "Oven Installation Vanier", href: "/appliance-installation/oven" },
        ]}
        heading="Also Need Help With…"
        description="Ovens aren't all we repair — here are our other services in Vanier:"
        applianceName="Oven"
      />
    </>
  );
}
