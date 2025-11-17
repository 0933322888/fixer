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
  title: "Microwave Repair in Mississippi Mills – Local, Reliable Service | Fixer",
  description:
    "Professional microwave repair in Mississippi Mills, including Almonte, Appleton, and Pakenham. We fix heating, power, and control issues — with clear pricing and a 90-day warranty.",
  keywords:
    "microwave repair Mississippi Mills, microwave service Almonte, microwave not heating Mississippi Mills, Fixer Appliance Repair",
};

const commonIssues = [
  {
    title: "Microwave won’t turn on",
    description:
      "In rural Mississippi Mills homes, wiring or voltage issues sometimes damage fuses. We’ll restore the connection.",
  },
  {
    title: "No heat but fan still runs",
    description:
      "A bad magnetron or capacitor usually causes this. We’ll replace it so food heats again.",
  },
  {
    title: "Microwave makes grinding noise",
    description:
      "Often a turntable motor or fan blade obstruction. We’ll fix the noise source.",
  },
  {
    title: "Exterior gets too hot",
    description:
      "Blocked vents or bad shielding may be the cause. We’ll inspect and repair for safety.",
  },
  {
    title: "Interior light flickers",
    description:
      "Loose bulbs or wiring shorts are common. We’ll repair them quickly.",
  },
  {
    title: "Uneven heating",
    description:
      "Sensors or stirrer fans can fail over time. We’ll balance the heating.",
  },
];

const highlights = [
  {
    title: "Almonte Riverwalk",
    description: "Enjoy a scenic stroll along the Mississippi River falls.",
  },
  {
    title: "Mill of Kintail",
    description: "Explore outdoor trails and heritage exhibits.",
  },
  {
    title: "Downtown Almonte",
    description: "Shop and dine in charming local cafés and boutiques.",
  },
];

const whyChooseUs = [
  "Trusted microwave specialists serving Mississippi Mills homes",
  "Clear cost estimates before we start",
  "Fast response times — often same or next day",
  "Backed by a 90-day warranty",
];

const serviceAreas = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
  "Surrounding rural neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you service microwaves in Mississippi Mills?",
    answer: "Yes — in Almonte, Appleton, Pakenham, and nearby rural areas.",
  },
  {
    question: "Why does my microwave make grinding noises?",
    answer: "Often the turntable motor or fan blade. We’ll diagnose and repair it.",
  },
  {
    question: "Do you provide microwave installation?",
    answer: "Yes — we install using your existing power supply.",
  },
  {
    question: "Do you repair countertop and built-in microwaves?",
    answer: "Yes — we handle all major models and configurations.",
  },
  {
    question: "Do you provide clear estimates?",
    answer: "Yes — all pricing is upfront before work begins.",
  },
];

const services = [
  { label: "Washer Repair Mississippi Mills", href: "/washer-repair/mississippi-mills" },
  { label: "Dryer Repair Mississippi Mills", href: "/dryer-repair/mississippi-mills" },
  { label: "Dishwasher Repair Mississippi Mills", href: "/dishwasher-repair/mississippi-mills" },
  { label: "Fridge Repair Mississippi Mills", href: "/fridge-repair/mississippi-mills" },
  { label: "Freezer Repair Mississippi Mills", href: "/freezer-repair/mississippi-mills" },
  { label: "Oven Repair Mississippi Mills", href: "/oven-repair/mississippi-mills" },
  { label: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { label: "Microwave Installation Mississippi Mills", href: "/microwave-installation" },
];

export default function MicrowaveRepairMississippiMillsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Trusted Microwave Repair in Mississippi Mills</h1>
            <p className="text-xl text-gray-100 mb-4">
              Living in Almonte, Appleton, or Pakenham and dealing with a broken microwave? Fixer provides safe, dependable repair service across all of Mississippi Mills.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves — same-day or next-day appointments when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Check out what we do in your neighbourhood on our{" "}
              <Link href="/mississippi-mills" className="font-semibold text-white underline hover:text-gray-200">
                Local Mississippi Mills page
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

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Mississippi Mills" />

      {/* Installation Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Microwave Installation in Mississippi Mills</h2>
            <p className="text-lg text-gray-700 mb-4">
              Is your microwave beyond repair in Mississippi Mills? Before replacing, read our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it shows when repair is still an option.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              If you’ve bought a new one, we provide microwave installation in Mississippi Mills. We’ll set it up and run it using your current power supply.
            </p>
            <p className="text-gray-700 mb-6">
              👉 We don’t install new wiring or modify cabinets.
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
              We provide appliance repair services across the entire Mississippi Mills area, including:
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
              Alongside Mississippi Mills, we provide microwave service throughout{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              👉 For a full list of areas, see our{" "}
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
            <h2 className="heading-md mb-4">Discover Mississippi Mills While We Work on Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6">
              Make the most of your time with these spots:
            </p>
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
        heading="Schedule Your Microwave Repair in Mississippi Mills"
        description="Serving Almonte, Appleton, and surrounding areas — schedule your microwave repair now."
        buttonText="Book Online Now"
      />

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Also Need Help With…</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Microwaves are just the beginning — here are our other services in Mississippi Mills:
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
              Fixer Appliance Repair — your trusted microwave repair team in Mississippi Mills.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
