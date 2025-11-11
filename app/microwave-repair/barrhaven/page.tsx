import { Metadata } from "next";
import Link from "next/link";
import {
  FaBolt,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaTools,
} from "react-icons/fa";

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
  { label: "Electric Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { label: "Microwave Installation Barrhaven", href: "/microwave-installation" },
];

export default function MicrowaveRepairBarrhavenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Barrhaven Microwave Repair You Can Trust</h1>
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

      {/* Common Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Microwave Issues We Fix in Barrhaven</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonIssues.map((issue) => (
                <div
                  key={issue.title}
                  className="bg-gray-50 border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-accent-500 text-2xl mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{issue.title}</h3>
                      <p className="text-gray-600 mt-2">{issue.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Microwave Installation in Barrhaven</h2>
            <p className="text-lg text-gray-700 mb-4">
              Upgrading your microwave in Barrhaven? Check our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              before replacing — it outlines repair costs, lifespan, and upgrade timing.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Once you have a new unit, we’ll provide microwave installation in Barrhaven. We connect and test it using your existing hookups.
            </p>
            <p className="text-gray-700 mb-6">
              👉 We don’t add new circuits or adjust cabinets.
            </p>
            <Link href="/microwave-installation" className="btn-primary inline-flex items-center justify-center">
              Learn more about Installation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-10">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <FaCheckCircle className="text-accent-500 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Discover Barrhaven While We Work on Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">Make the wait enjoyable:</p>
            <ul className="space-y-3 text-gray-700 mb-6">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>
                    <strong>{item.title}</strong> – {item.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              👉{" "}
              <a
                href="https://barrhavenbia.ca/events/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Explore what’s happening in Barrhaven
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FaQuestionCircle className="text-accent-500 text-3xl" />
              <h2 className="heading-md mb-0">FAQ – Microwave Repair in Barrhaven</h2>
            </div>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary-800">{faq.question}</h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Schedule Your Microwave Repair in Barrhaven</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            We’re ready to assist — book your microwave repair with Fixer Appliance Repair today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:+16134136969" className="btn-primary bg-white text-accent-600 hover:bg-gray-100">
              Call/Text: 613-413-6969
            </a>
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="btn-outline border-white text-white hover:bg-white hover:text-accent-600"
            >
              Email Us
            </a>
          </div>
          <Link href="/contact" className="underline text-white hover:text-gray-100 font-semibold">
            Prefer to book online? Send a request now.
          </Link>
        </div>
      </section>

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
