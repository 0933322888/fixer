import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  FaBolt,
  FaMapMarkerAlt,
  FaTools,
  FaUtensils,
  FaTree,
  FaBook,
} from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Carleton Place – Fast, Trusted Help | Fixer",
  description:
    "Reliable microwave repair in Carleton Place, from Riverside Park to Mississippi Quays. We fix heating, power, and control issues — with upfront pricing and a 90-day warranty.",
  keywords:
    "microwave repair Carleton Place, microwave service Carleton Place, microwave not heating Carleton Place, Fixer Appliance Repair Carleton Place",
};

const commonIssues = [
  {
    title: "Microwave not powering on",
    description:
      "We check fuses, switches, and power supply issues common in Carleton Place homes.",
  },
  {
    title: "Heats food unevenly",
    description:
      "If one side stays cold, airflow or sensor issues may be to blame. We’ll restore even heating.",
  },
  {
    title: "Touch panel not responding",
    description:
      "A failed control pad or board often blocks input. We’ll replace what’s needed.",
  },
  {
    title: "Microwave smells burnt",
    description:
      "Spilled food or wiring faults cause odors. We’ll clean and repair it safely.",
  },
  {
    title: "Random codes flashing on screen",
    description:
      "LG, Whirlpool, and Panasonic models often display error codes. We’ll interpret and repair.",
  },
  {
    title: "Microwave won’t stop running",
    description:
      "A stuck relay or faulty control can keep the unit powered. We’ll fix it quickly.",
  },
];

const highlights = [
  {
    title: "Riverside Park",
    description: "Relaxing views along the Mississippi River.",
  },
  {
    title: "Downtown Carleton Place",
    description: "Browse unique shops and cafés while we work.",
  },
  {
    title: "Carleton Place and Beckwith Heritage Museum",
    description: "Step into local history and exhibits.",
  },
];

const whyChooseUs = [
  "Local Carleton Place microwave technicians with brand expertise",
  "Same-day and next-day appointments offered",
  "Transparent pricing — no hidden extras",
  "Every service covered by a 90-day guarantee",
];

const serviceAreas = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
];

const faqs = [
  {
    question: "Do you offer same-day microwave service in Carleton Place?",
    answer: "When possible, yes.",
  },
  {
    question: "Why does my microwave run but not heat?",
    answer: "Likely a magnetron or high-voltage component issue.",
  },
  {
    question: "Do you install microwaves?",
    answer: "Yes — using current hookups.",
  },
  {
    question: "Do you cover nearby areas?",
    answer: "Yes — Beckwith, Franktown, and more.",
  },
  {
    question: "Do you offer warranty coverage?",
    answer: "Yes — 90-day labour warranty.",
  },
];

const services = [
  { label: "Washer Repair Carleton Place", href: "/washer-repair/carleton-place" },
  { label: "Dryer Repair Carleton Place", href: "/dryer-repair/carleton-place" },
  { label: "Dishwasher Repair Carleton Place", href: "/dishwasher-repair/carleton-place" },
  { label: "Fridge Repair Carleton Place", href: "/fridge-repair/carleton-place" },
  { label: "Freezer Repair Carleton Place", href: "/freezer-repair/carleton-place" },
  { label: "Oven Repair Carleton Place", href: "/oven-repair/carleton-place" },
  { label: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
  { label: "Microwave Installation Carleton Place", href: "/microwave-installation" },
];

export default function MicrowaveRepairCarletonPlacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Reliable Microwave Repair in Carleton Place</h1>
            <p className="text-xl text-gray-100 mb-4">
              Microwave won’t heat, keeps running, or flashes codes? Our Carleton Place team provides expert repairs with honest pricing and fast response.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves. Same-day bookings when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Explore local insights on our{" "}
              <Link href="/carleton-place" className="font-semibold text-white underline hover:text-gray-200">
                Local Carleton Place page
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

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Carleton Place" />

      {/* Installation Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Microwave Installation in Carleton Place</h2>
            <p className="text-lg text-gray-700 mb-4">
              Need microwave installation in Carleton Place? Check our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it explains typical failures, lifespan, and replacement costs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Already purchased one? We’ll install your microwave in Carleton Place. Our techs connect and test it with your existing hookups.
            </p>
            <p className="text-gray-700 mb-6">
              👉 We don’t add new wiring or structural modifications.
            </p>
            <Link href="/microwave-installation" className="btn-primary inline-flex items-center justify-center">
              Learn more about Installation
            </Link>
          </div>
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
              We provide appliance repair services across the entire Carleton Place area, including:
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
              Our Carleton Place team covers more than the town itself — we also serve{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              👉 For complete service info, visit our{" "}
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
            <h2 className="heading-md mb-4">Discover Carleton Place While We Work on Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6">Here are a few nearby spots worth visiting:</p>
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
        heading="Schedule Your Microwave Repair in Carleton Place"
        description="Don't wait with a broken microwave — text or call Fixer Appliance Repair to arrange service."
        buttonText="Book Online Now"
      />

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Also Need Help With…</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Microwave issues aren’t the only thing we fix — here are more services in Carleton Place:
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
              Need another appliance serviced? We’re ready in Carleton Place. 
            </p>
            <p className="text-center text-gray-800 font-semibold mt-8">
              Fixer Appliance Repair — your microwave repair pros in Carleton Place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
