import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Cooktop Repair in Barrhaven – Fast, Trusted Service | Fixer",
  description:
    "Expert cooktop repair in Barrhaven, serving Chapman Mills, Stonebridge, and Half Moon Bay. Same or next-day service, upfront pricing, and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Cooktop won't heat up",
    description:
      "In Barrhaven townhomes, this usually points to a bad element or switch. We'll identify and replace it.",
  },
  {
    title: "Burners too hot or too weak",
    description:
      "Faulty sensors or regulators can make cooking unpredictable. We'll restore the right temperature.",
  },
  {
    title: "Cooktop keeps sparking",
    description: "Loose connections or failed relays often cause sparks. We'll fix the wiring.",
  },
  {
    title: "Hot surface light never turns off",
    description:
      "A sensor stuck in the \"on\" position needs recalibration. We'll handle it.",
  },
  {
    title: "Cooktop glass broken",
    description: "Dropped pots often crack the glass. We'll safely replace the surface.",
  },
  {
    title: "Cooktop gives off burning smell",
    description:
      "Usually from wiring insulation or food trapped underneath. We'll check and repair it.",
  },
];

const whyChooseUs = [
  "Local Barrhaven cooktop repair and installation experts",
  "Same-day and next-day scheduling available",
  "All work comes with a 90-day labour warranty",
  "Dependable service and clear communication",
];

const serviceAreas = ["Chapman Mills", "Stonebridge", "Longfields", "Half Moon Bay", "Knollsbrook"];

const nearbyAreas = [
  { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Walter Baker Sports Centre", description: "Recreation and fitness." },
  { title: "Chapman Mills", description: "River trails with wildlife." },
  { title: "Marketplace Barrhaven", description: "Food and shopping options." },
];

const faqs = [
  {
    question: "Can I book a same-day cooktop repair in Barrhaven?",
    answer: "Yes — subject to scheduling.",
  },
  {
    question: "Why does my cooktop keep tripping the breaker?",
    answer: "Likely a shorted element or overloaded wiring.",
  },
  {
    question: "Do you provide cooktop installation?",
    answer: "Yes — using existing hookups.",
  },
  {
    question: "Do you service nearby communities?",
    answer: "Yes — Stonebridge, Half Moon Bay, Chapman Mills.",
  },
  {
    question: "Do you offer clear pricing?",
    answer: "Yes — upfront estimates, no surprises.",
  },
];

const otherServices = [
  { name: "Washer Repair Barrhaven", href: "/washer-repair/barrhaven" },
  { name: "Dryer Repair Barrhaven", href: "/dryer-repair/barrhaven" },
  { name: "Dishwasher Repair Barrhaven", href: "/dishwasher-repair/barrhaven" },
  { name: "Fridge Repair Barrhaven", href: "/fridge-repair/barrhaven" },
  { name: "Freezer Repair Barrhaven", href: "/freezer-repair/barrhaven" },
  { name: "Oven Repair Barrhaven", href: "/oven-repair/barrhaven" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Cooktop Installation Barrhaven", href: "/appliance-installation/cooktop" },
];

export default function CooktopRepairBarrhavenPage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-4 text-white"><FaFire className="text-[30px] mb-2 inline-block" /> Cooktop Repair Specialists in Barrhaven</h1>
            <p className="text-xl leading-relaxed mb-6 text-gray-100">
              Fixer Appliance Repair brings fast and reliable cooktop repair to Barrhaven homes — from
              townhouses to single-family kitchens. We service LG, Samsung, Whirlpool, GE, Maytag, and more.
            </p>
            <p className="text-lg text-gray-100">
              👉 Discover more about the community on our{" "}
              <Link href="/barrhaven" className="font-semibold text-white underline-offset-4 hover:underline">
                Local Barrhaven page
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
              Common Cooktop Issues We Fix in Barrhaven
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
            <h2 className="heading-md mb-6 text-center">Cooktop Installation in Barrhaven</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center">Planning a kitchen upgrade in Barrhaven?</p>
              <p className="text-center">
                Before replacing your cooktop, review our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  repair vs. replace guide
                </Link>{" "}
                — it explains costs and when to replace.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  Repair or replace? →
                </Link>
              </p>
              <p className="text-center">
                For new units, we provide cooktop installation in Barrhaven. We'll connect and test it with
                your existing electrical setup.
              </p>
              <p className="text-center text-sm text-gray-600">👉 We don't provide new wiring or gas hookups.</p>
              <p className="text-center">
                <Link href="/appliance-installation/cooktop" className="btn-primary inline-block">
                  Learn more →
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
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-primary-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Barrhaven area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Cooktop Repair ", ""),
          slug: area.href.replace("/cooktop-repair/", "")
        }))}
        applianceType="cooktop"
        nearbyAreasLabel="We also repair cooktops in:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 For complete coverage, see our{" "}
            <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Cooktop Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Take a Break in Barrhaven While We Repair Your Cooktop"
        description="Here are a few local highlights:"
        linkText="Check events in Barrhaven"
      />

      <FAQSection applianceName="Cooktop" faqs={faqs} />

      <CTASection 
        heading="Schedule Your Cooktop Repair in Barrhaven"
        description="We're here to help — schedule your cooktop repair with Fixer Appliance Repair today:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={otherServices}
        heading="Also Need Help With…"
        description="Beyond cooktop repair, we also provide these services in Barrhaven:"
        applianceName="Cooktop"
      />
    </>
  );
}
