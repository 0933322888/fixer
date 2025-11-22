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
  title: "Oven Repair Barrhaven – Fast, Reliable Electric Oven Service | Fixer",
  description: "Fixer Appliance Repair provides trusted oven repair in Barrhaven. From uneven baking and faulty elements to display errors and broken doors, we service Whirlpool, Samsung, LG, GE & more. Same-day appointments, clear pricing, 90-day warranty.",
  keywords: "oven repair Barrhaven, electric oven repair, oven not heating Barrhaven, oven repair service",
};

const benefits = [
  "Local Barrhaven oven repair and installation team",
  "Same-day and next-day scheduling available",
  "Work covered by our 90-day service warranty",
  "Dependable service with clear communication",
];

const commonIssues = [
  {
    title: "Oven won't start",
    description: "In Barrhaven townhomes, this can be a bad switch, fuse, or control panel. We'll fix it fast.",
  },
  {
    title: "Food cooks unevenly",
    description: "If dishes don't bake evenly, the fan or heating element may need replacement.",
  },
  {
    title: "Door won't stay shut",
    description: "Loose hinges or worn gaskets often let heat escape. We'll repair both.",
  },
  {
    title: "Beeping or flashing codes",
    description: "Modern ovens show errors when sensors fail. We'll decode and fix them.",
  },
  {
    title: "No heat in broil mode",
    description: "A broken relay or top element is usually the culprit. We'll replace it.",
  },
  {
    title: "Numbers flickering on display",
    description: "Control board or wiring issues cause this. We'll stabilize it.",
  },
];

const serviceAreas = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const faqs = [
  {
    question: "Can I get same-day oven repair in Barrhaven?",
    answer: "Yes — depending on schedule.",
  },
  {
    question: "Why does my oven smell when turned on?",
    answer: "Burned wiring, spills, or first-use residue.",
  },
  {
    question: "Do you install ovens in Barrhaven?",
    answer: "Yes — with current hookups.",
  },
  {
    question: "Do you service nearby communities?",
    answer: "Yes — Stonebridge, Half Moon Bay, Chapman Mills.",
  },
  {
    question: "Do you provide warranty?",
    answer: "Yes — every oven repair is backed by 90 days.",
  },
];

export default function OvenRepairBarrhavenPage() {
  return (
    <>
      <ServiceHero
        title="Barrhaven Oven Repair Experts"
        description="Oven not heating properly or baking unevenly? Our Barrhaven oven repair specialists bring fast, dependable service to townhomes and family kitchens across the area. We service all major electric oven brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Oven Issues We Fix in Barrhaven" />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      {/* Oven Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Oven Installation in Barrhaven</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Replacing your oven in Barrhaven? Before you decide, review our repair vs. replace guide 
                — it outlines costs, repair frequency, and replacement timing.
              </p>
              <p className="text-center">
                For new purchases, we provide oven installation in Barrhaven. Our team installs and tests 
                the unit using existing power hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't add new wiring or gas lines.
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
              We provide appliance repair services across the entire Barrhaven area, including:
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
              For full coverage, see our{" "}
              <Link href="/oven-repair" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Ottawa
              </Link>{" "}
              page. We also service customers in{" "}
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
              <Link href="/oven-repair/vanier" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Vanier
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

      {/* Things to Do in Barrhaven */}
      <ThingsToDoSection
        attractions={[
          { name: "Walter Baker Centre", description: "indoor activities" },
          { name: "Chapman Mills", description: "trails and fresh air" },
          { name: "Marketplace Barrhaven", description: "stores and cafés" },
        ]}
        heading="Enjoy Your Time in Barrhaven While We Fix the Oven"
        description="Use the time to explore:"
        linkText="Find local happenings in Barrhaven"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Schedule Your Oven Repair in Barrhaven"
        description="We're ready when you are — book your oven repair with Fixer Appliance Repair today:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Barrhaven", href: "/washer-repair/barrhaven" },
          { name: "Dryer Repair Barrhaven", href: "/dryer-repair/barrhaven" },
          { name: "Dishwasher Repair Barrhaven", href: "/dishwasher-repair/barrhaven" },
          { name: "Fridge Repair Barrhaven", href: "/fridge-repair/barrhaven" },
          { name: "Freezer Repair Barrhaven", href: "/freezer-repair/barrhaven" },
          { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
          { name: "Oven Installation Barrhaven", href: "/appliance-installation/oven" },
        ]}
        heading="Also Need Help With…"
        description="Beyond oven repair, we also provide these services in Barrhaven:"
        applianceName="Oven"
      />
    </>
  );
}
