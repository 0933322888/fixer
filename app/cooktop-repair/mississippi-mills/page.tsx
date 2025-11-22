import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Cooktop Repair Services in Mississippi Mills - Fast, Reliable | Fixer",
  description:
    "Cooktop repair in Mississippi Mills, including Almonte, Appleton, and Pakenham. Same or next-day service, clear estimates, and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Element not heating properly",
    description:
      "In rural Mississippi Mills, voltage fluctuations can burn out elements. We'll test and replace them.",
  },
  {
    title: "Cooktop keeps turning off mid-use",
    description: "Overheating sensors or faulty relays can cut power. We'll restore steady cooking.",
  },
  {
    title: "Hot surface light stuck on",
    description: "A failed sensor keeps the light glowing even when cool. We'll recalibrate or replace it.",
  },
  {
    title: "Cooktop won't power up",
    description: "Blown fuses or broken wiring are common causes. We'll restore the connection.",
  },
  {
    title: "Strange buzzing or clicking",
    description: "This often comes from loose relays or failing switches. We'll quiet it down.",
  },
  {
    title: "Spills causing control problems",
    description: "Moisture inside the panel can block touch commands. We'll clean and repair it properly.",
  },
];

const whyChooseUs = [
  "Trusted cooktop technicians serving Mississippi Mills homes",
  "Detailed estimates before work begins",
  "Fast response times — often same or next day",
  "90-day service warranty for peace of mind",
];

const serviceAreas = ["Almonte", "Appleton", "Blakeney", "Pakenham", "Ramsay"];

const nearbyAreas = [
  { name: "Kanata", href: "/cooktop-repair/kanata" },
  { name: "Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Nepean", href: "/cooktop-repair/nepean" },
  { name: "Orleans", href: "/cooktop-repair/orleans" },
  { name: "Vanier", href: "/cooktop-repair/vanier" },
  { name: "Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Almonte Riverwalk", description: "Wander along the water." },
  { title: "Mill of Kintail", description: "Culture and trails in one visit." },
  { title: "Downtown Almonte", description: "Enjoy shopping and coffee." },
];

const faqs = [
  {
    question: "Do you repair cooktops in Mississippi Mills homes?",
    answer: "Yes — Almonte, Appleton, and rural areas.",
  },
  {
    question: "Why does my cooktop cycle on and off?",
    answer: "Likely a failing infinite switch.",
  },
  {
    question: "Do you provide installation?",
    answer: "Yes — with current electrical lines.",
  },
  {
    question: "Do you repair all major brands?",
    answer: "Yes — Whirlpool, Samsung, LG, GE.",
  },
  {
    question: "Do you offer upfront estimates?",
    answer: "Always before work begins.",
  },
];

const otherServices = [
  { name: "Washer Repair Mississippi Mills", href: "/washer-repair/mississippi-mills" },
  { name: "Dryer Repair Mississippi Mills", href: "/dryer-repair/mississippi-mills" },
  { name: "Dishwasher Repair Mississippi Mills", href: "/dishwasher-repair/mississippi-mills" },
  { name: "Fridge Repair Mississippi Mills", href: "/fridge-repair/mississippi-mills" },
  { name: "Freezer Repair Mississippi Mills", href: "/freezer-repair/mississippi-mills" },
  { name: "Oven Repair Mississippi Mills", href: "/oven-repair/mississippi-mills" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Cooktop Installation Mississippi Mills", href: "/appliance-installation/cooktop" },
];

export default function CooktopRepairMississippiMillsPage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-4 text-white"><FaFire className="text-[30px] mb-2 inline-block" /> Trusted Cooktop Repair in Mississippi Mills</h1>
            <p className="text-xl leading-relaxed text-gray-100">
              Whether in Almonte, Appleton, or rural areas, Fixer delivers dependable electric cooktop repair
              for homes across Mississippi Mills. We handle both older models and modern glass tops. We
              service LG, Samsung, Whirlpool, GE, Maytag, and more.
            </p>
            <p className="mt-6 text-lg text-gray-100">
              Read more about the community on our{" "}
              <Link
                href="/mississippi-mills"
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                Local Mississippi Mills page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-12 text-center">
              Common Cooktop Issues We Fix in Mississippi Mills
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {commonIssues.map((issue) => (
                <div
                  key={issue.title}
                  className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-primary-500"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{issue.title}</h3>
                  <p className="text-sm text-gray-600">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Cooktop Installation in Mississippi Mills</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center">Replacing a cooktop in Mississippi Mills?</p>
              <p className="text-center">
                Read our repair vs. replace guide — it explains when a repair might be the better choice.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  {"Repair or replace? ->"}
                </Link>
              </p>
              <p className="text-center">
                If you've bought a new unit, we provide cooktop installation in Mississippi Mills. We'll
                connect and test it with your current power supply.
              </p>
              <p className="text-center text-sm text-gray-600">👉 No new circuits or gas hookups are provided.</p>
              <p className="text-center">
                <Link href="/appliance-installation/cooktop" className="btn-primary inline-block">
                  {"Learn more ->"}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Why Choose Us</h2>
            <ul className="mx-auto max-w-2xl space-y-4 text-lg text-gray-700">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-6 w-6 text-xl" aria-hidden="true">
                    ✅
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Mississippi Mills area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Cooktop Repair ", ""),
          slug: area.href.replace("/cooktop-repair/", "")
        }))}
        applianceType="cooktop"
        nearbyAreasLabel="We also serve:"
        surroundingLabel="and surrounding rural neighbourhoods"
        footerText={
          <p className="text-lg text-gray-700">
            👉 For wider coverage, visit our{" "}
            <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Cooktop Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Take a Break in Mississippi Mills While We Fix Your Cooktop"
        description="Why not explore while we handle the repair?"
        linkText="See the local events calendar for Mississippi Mills"
      />

      <FAQSection applianceName="Cooktop" faqs={faqs} />

      <CTASection 
        heading="Schedule Your Cooktop Repair in Mississippi Mills"
        description="Serving Almonte, Appleton, and beyond — book your cooktop repair appointment now:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={otherServices}
        heading="Also Need Help With..."
        description="Cooktops are just the beginning — here are our other services in Mississippi Mills:"
        applianceName="Cooktop"
      />
    </>
  );
}
