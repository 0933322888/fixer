import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  FaWaveSquare,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTools,
  FaUtensils,
  FaTree,
  FaBook,
} from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Barrhaven – Fast, Local Experts | Fixer",
  description:
    "Reliable microwave repair in Barrhaven, serving Chapman Mills, Stonebridge, and Half Moon Bay. We fix heating, power, and control issues — with upfront pricing and a 90-day warranty.",
  keywords:
    "microwave repair Barrhaven, microwave service Barrhaven, microwave not heating Barrhaven, Fixer Appliance Repair Barrhaven",
};

const commonIssues = [
  {
    title: "Microwave won’t power up",
    description:
      "In Barrhaven’s newer townhomes, tripped breakers or wiring faults often stop the unit. We’ll fix it.",
  },
  {
    title: "Food heats unevenly",
    description:
      "A failing stirrer fan or sensor usually causes this. We’ll restore balanced cooking.",
  },
  {
    title: "Touch controls frozen",
    description:
      "Moisture inside the panel or a bad control board can disable inputs. We’ll repair it.",
  },
  {
    title: "Microwave smells electrical",
    description:
      "Burned wiring or overheated parts often give off odors. We’ll inspect and repair safely.",
  },
  {
    title: "Microwave won’t stop beeping",
    description:
      "Faulty control logic often triggers constant alerts. We’ll reset or replace the board.",
  },
  {
    title: "Exterior hot to the touch",
    description:
      "Poor ventilation can make the outside surface hot. We’ll check vents and fix the issue.",
  },
];

const highlights = [
  {
    title: "Walter Baker Centre",
    description: "Swim, skate, or work out while we handle your repair.",
  },
  {
    title: "Chapman Mills Conservation Area",
    description: "Walk the riverside boardwalk for fresh air.",
  },
  {
    title: "Marketplace Barrhaven",
    description: "Grab a bite or run errands nearby.",
  },
];

const whyChooseUs = [
  "Local Barrhaven microwave repair and installation team",
  "Same-day and next-day bookings available",
  "All work protected by a 90-day labour warranty",
  "Dependable service and honest communication",
];

const serviceAreas = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day microwave repair in Barrhaven?",
    answer: "Yes — depending on availability.",
  },
  {
    question: "Why does my microwave smell like burning?",
    answer: "Food residue or wiring issues — we’ll inspect it.",
  },
  {
    question: "Do you install over-the-range microwaves?",
    answer: "Yes — using your existing hookups.",
  },
  {
    question: "Do you service nearby communities?",
    answer: "Yes — Stonebridge, Half Moon Bay, Chapman Mills, and beyond.",
  },
  {
    question: "Do you provide warranty?",
    answer: "Yes — 90-day warranty included.",
  },
];

const services = [
  { label: "Washer Repair Barrhaven", href: "/washer-repair/barrhaven" },
  { label: "Dryer Repair Barrhaven", href: "/dryer-repair/barrhaven" },
  { label: "Dishwasher Repair Barrhaven", href: "/dishwasher-repair/barrhaven" },
  { label: "Fridge Repair Barrhaven", href: "/fridge-repair/barrhaven" },
  { label: "Freezer Repair Barrhaven", href: "/freezer-repair/barrhaven" },
  { label: "Oven Repair Barrhaven", href: "/oven-repair/barrhaven" },
  { label: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { label: "Microwave Installation Barrhaven", href: "/microwave-installation" },
];

export default function MicrowaveRepairBarrhavenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaWaveSquare className="text-[30px] mb-2 inline-block" /> Barrhaven Microwave Repair You Can Trust</h1>
            <p className="text-xl text-gray-100 mb-4">
              Microwave not heating or giving off a burning smell? Our Barrhaven specialists provide quick, reliable repair across all neighbourhoods.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves. Upfront pricing, 90-day warranty.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 See more about our service area on the{" "}
              <Link href="/barrhaven" className="font-semibold text-white underline hover:text-gray-200">
                Local Barrhaven page
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent-500 hover:bg-accent-600">
                Book Online
              </Link>
              <a
                href="tel:+16134136969"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-900"
              >
                Call/Text (613) 413-6969
              </a>
            </div>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Barrhaven" />

      {/* Microwave Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Microwave? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new microwave? We also provide microwave installation in Barrhaven with same-day service available in most areas.
          </p>
          <Link href="/microwave-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Microwave Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      {/* Service Area */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FaMapMarkerAlt className="text-accent-500 text-3xl" />
              <h2 className="heading-md mb-0">Service Area</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We provide appliance repair services across the entire Barrhaven area, including:
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-800 shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-6">
              Barrhaven residents can rely on us — and so can households in{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              👉 For a city-wide view, visit our{" "}
              <Link href="/microwave-repair" className="text-primary-600 hover:text-primary-700 underline">
                Microwave Repair Ottawa
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Discover Barrhaven While We Work on Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6">Make the wait enjoyable:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const icons = [FaMapMarkerAlt, FaTree, FaUtensils, FaBook];
                const Icon = icons[index % icons.length];
                return (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-accent-500 flex items-start gap-4">
                    <Icon className="text-accent-500 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-200 rounded-lg p-6 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Want to catch a live event or exhibit?
              </p>
              <p className="text-gray-700 mb-3">
                Check what's happening this week:
              </p>
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 hover:underline transition-colors"
              >
                Ottawa Tourism Events
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Schedule Your Microwave Repair in Barrhaven"
        description="We're ready to assist — book your microwave repair with Fixer Appliance Repair today."
        buttonText="Book Online Now"
      />

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Also Need Help With…</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Beyond microwave repair, we also provide these services in Barrhaven:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-700 hover:border-accent-500 hover:text-accent-600 transition"
                >
                  <FaTools className="text-accent-500" />
                  <span>{service.label}</span>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-800 font-semibold mt-8">
              Fixer Appliance Repair — your local microwave repair team in Barrhaven.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
