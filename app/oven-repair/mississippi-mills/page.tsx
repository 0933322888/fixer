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
  title: "Oven Repair Mississippi Mills – Reliable Appliance Service | Fixer",
  description: "Fixer Appliance Repair provides expert oven repair in Mississippi Mills, including Almonte, Appleton & Pakenham. We fix heating issues, error codes, faulty fans & more. Same-day service, clear pricing, 90-day warranty.",
  keywords: "oven repair Mississippi Mills, oven repair Almonte, electric oven repair, oven not heating",
};

const benefits = [
  "Trusted oven service pros serving Mississippi Mills homes",
  "Clear estimates given upfront",
  "Fast response time — often same or next day",
  "Backed by a 90-day warranty",
];

const commonIssues = [
  {
    title: "Oven not heating enough",
    description: "In rural homes, worn elements or miscalibrated thermostats often leave food undercooked. We'll restore the right temperature.",
  },
  {
    title: "Self-clean cycle stuck",
    description: "When the door won't unlock, the latch or control board is usually to blame. We'll release it safely.",
  },
  {
    title: "Oven bakes unevenly",
    description: "A weak convection fan often causes hot and cold spots. We'll replace it.",
  },
  {
    title: "Strange burning smell",
    description: "Wiring issues or food spills can cause odors. We'll check and clean it.",
  },
  {
    title: "Oven light won't turn off",
    description: "This usually means a jammed or faulty door switch. We'll repair it.",
  },
  {
    title: "Random beeping or error codes",
    description: "We'll reset sensors, interpret codes, and repair the source.",
  },
];

const serviceAreas = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
];

const faqs = [
  {
    question: "Do you repair ovens in Mississippi Mills homes?",
    answer: "Yes — Almonte, Appleton, and surrounding areas.",
  },
  {
    question: "Why does my oven take too long to preheat?",
    answer: "Often a weak element or faulty thermostat.",
  },
  {
    question: "Do you install new ovens?",
    answer: "Yes — using existing electrical supply.",
  },
  {
    question: "Do you repair all oven brands?",
    answer: "Yes — Whirlpool, Samsung, LG, GE, Maytag.",
  },
  {
    question: "Do you provide upfront estimates?",
    answer: "Yes — always before work starts.",
  },
];

export default function OvenRepairMississippiMillsPage() {
  return (
    <>
      <ServiceHero
        title="Trusted Oven Repair in Mississippi Mills"
        description="From Almonte to Pakenham, our oven repair experts are ready to help when your oven stops baking evenly or won't start at all. Fixer offers reliable repairs tailored for rural homes. We service all major electric oven brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Oven Issues We Fix in Mississippi Mills" />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      {/* Oven Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Oven Installation in Mississippi Mills</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Is your oven failing in Mississippi Mills? Before replacing, check our repair vs. replace 
                guide — it helps weigh repair value against replacement.
              </p>
              <p className="text-center">
                For new units, we provide oven installation in Mississippi Mills. We'll hook it up and test 
                it using your current hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't run new wiring or gas lines.
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
              We provide appliance repair services across the entire Mississippi Mills area, including:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                  {area}
                </div>
              ))}
              <div className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                and surrounding rural neighbourhoods
              </div>
            </div>
            <p className="text-center text-gray-700 mb-6">
              For nearby service, check our{" "}
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
              <Link href="/oven-repair/barrhaven" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Barrhaven
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

      {/* Things to Do in Mississippi Mills */}
      <ThingsToDoSection
        attractions={[
          { name: "The Almonte Riverwalk", description: "a peaceful riverside trail" },
          { name: "Mill of Kintail", description: "history and outdoor fun in one place" },
          { name: "Downtown Almonte", description: "cozy cafés and unique shops" },
        ]}
        heading="Enjoy Your Time in Mississippi Mills While We Repair the Oven"
        description="Take advantage of the break with some local highlights:"
        linkText="Explore upcoming events in Mississippi Mills"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Schedule Your Oven Repair in Mississippi Mills"
        description="Serving Almonte, Appleton, and nearby areas — schedule your oven repair now:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Mississippi Mills", href: "/washer-repair/mississippi-mills" },
          { name: "Dryer Repair Mississippi Mills", href: "/dryer-repair/mississippi-mills" },
          { name: "Dishwasher Repair Mississippi Mills", href: "/dishwasher-repair/mississippi-mills" },
          { name: "Fridge Repair Mississippi Mills", href: "/fridge-repair/mississippi-mills" },
          { name: "Freezer Repair Mississippi Mills", href: "/freezer-repair/mississippi-mills" },
          { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
          { name: "Oven Installation Mississippi Mills", href: "/appliance-installation/oven" },
        ]}
        heading="Also Need Help With…"
        description="Ovens are just the beginning — here are our other services in Mississippi Mills:"
        applianceName="Oven"
      />
    </>
  );
}
