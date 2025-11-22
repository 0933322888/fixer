import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
export const metadata: Metadata = {
  title: "Cooktop Repair Orleans - Fast & Reliable Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair provides expert cooktop repair in Orleans. From cracked glass and faulty burners to wiring issues and touch panel failures, we service Whirlpool, Samsung, LG, GE & more. Same-day service, upfront pricing, 90-day warranty.",
};

const commonIssues = [
  {
    title: "Cooktop not heating at all",
    description:
      "In Orleans homes, this usually points to a dead element or faulty switch. We'll test and replace the bad part.",
  },
  {
    title: "Uneven cooking",
    description:
      "If one burner runs hotter than another, a failing sensor or coil may be the cause. We'll restore balanced heating.",
  },
  {
    title: "Cooktop trips the breaker",
    description: "Shorted wiring or overloaded circuits often cause this. We'll trace the fault and fix it safely.",
  },
  {
    title: "Touch panel won't respond",
    description:
      "Moisture or failed control boards are common. We'll repair or replace the interface so you can adjust settings again.",
  },
  {
    title: "Glass surface cracked",
    description: "We'll safely remove and install a new top so your cooktop looks and works like new.",
  },
  {
    title: "Burning smell while cooking",
    description: "Damaged wiring or element insulation may be to blame. We'll make sure it's safe to use.",
  },
];

const whyChooseUs = [
  "Local Orleans cooktop repair and installation pros",
  "Same-day and next-day appointments available",
  "Clear, upfront pricing — no hidden charges",
  "Every job backed by a 90-day labour warranty",
];

const serviceAreas = ["Fallingbrook", "Avalon", "Queenswood Heights", "Chapel Hill", "Convent Glen"];

const nearbyAreas = [
  { name: "Kanata", href: "/cooktop-repair/kanata" },
  { name: "Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Nepean", href: "/cooktop-repair/nepean" },
  { name: "Vanier", href: "/cooktop-repair/vanier" },
  { name: "Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Petrie Island", description: "Sandy beaches and peaceful walks." },
  { title: "Shenkman Arts Centre", description: "Enjoy a performance or exhibit." },
  { title: "Place d'Orleans", description: "Plenty of stores and restaurants." },
];

const faqs = [
  {
    question: "Can I get same-day cooktop repair in Orleans?",
    answer: "Often yes — depending on parts and schedule.",
  },
  {
    question: "Why is my cooktop not heating properly?",
    answer: "Could be a faulty element or control switch.",
  },
  {
    question: "Do you install new cooktops?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you service nearby areas?",
    answer: "Yes — Fallingbrook, Chapel Hill, Avalon.",
  },
  {
    question: "Do you provide warranty?",
    answer: "Yes — 90-day labour warranty on repairs.",
  },
];

const otherServices = [
  { name: "Washer Repair Orleans", href: "/washer-repair/orleans" },
  { name: "Dryer Repair Orleans", href: "/dryer-repair/orleans" },
  { name: "Dishwasher Repair Orleans", href: "/dishwasher-repair/orleans" },
  { name: "Fridge Repair Orleans", href: "/fridge-repair/orleans" },
  { name: "Freezer Repair Orleans", href: "/freezer-repair/orleans" },
  { name: "Oven Repair Orleans", href: "/oven-repair/orleans" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Cooktop Installation Orleans", href: "/appliance-installation/cooktop" },
];

export default function CooktopRepairOrleansPage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-4 text-white"><FaFire className="text-[30px] mb-2 inline-block" /> Orleans Cooktop Repair You Can Count On</h1>
            <p className="text-xl leading-relaxed text-gray-100">
              From glass tops to coil burners, Fixer Appliance Repair provides expert cooktop repair in
              Orleans homes and apartments. Fast, local, and reliable service is just a call away. We service
              LG, Samsung, Whirlpool, GE, Maytag, and more.
            </p>
            <p className="mt-6 text-lg text-gray-100">
              👉 Find more about the neighbourhood on our{" "}
              <Link href="/orleans" className="font-semibold text-white underline-offset-4 hover:underline">
                Local Orleans page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-12 text-center">Common Cooktop Issues We Fix in Orleans</h2>
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
            <h2 className="heading-md mb-6 text-center">Cooktop Installation in Orleans</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center">Looking for cooktop installation in Orleans?</p>
              <p className="text-center">
                Before replacing your old unit, review our repair vs. replace guide — it covers common repairs,
                costs, and lifespan.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  {"Repair or replace? ->"}
                </Link>
              </p>
              <p className="text-center">
                Already have a new one? We provide cooktop installation in Orleans. We'll set it up and test it
                using your existing hookups.
              </p>
              <p className="text-center text-sm text-gray-600">👉 We don't run new wiring or install gas connections.</p>
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
        description="We provide appliance repair services across the entire Orleans area, including:"
        neighborhoods={serviceAreas}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Cooktop Repair ", ""),
          slug: area.href.replace("/cooktop-repair/", "")
        }))}
        applianceType="cooktop"
        nearbyAreasLabel="We also support customers in:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 For full coverage of the region, check our{" "}
            <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Cooktop Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Take a Break in Orleans While We Repair Your Cooktop"
        description="Use the time to explore local highlights:"
        linkText="Explore Orleans events this month"
      />

      <FAQSection applianceName="Cooktop" faqs={faqs} />

      <CTASection 
        heading="Schedule Your Cooktop Repair in Orleans"
        description="Cooktop not heating evenly? Call Fixer Appliance Repair today to schedule service:"
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={otherServices}
        heading="Also Need Help With..."
        description="Our expertise goes beyond cooktops — here's what else we do in Orleans:"
        applianceName="Cooktop"
      />
    </>
  );
}
