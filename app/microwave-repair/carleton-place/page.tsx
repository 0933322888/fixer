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
  { label: "Electric Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
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

      {/* Common Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Microwave Issues We Fix in Carleton Place</h2>
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Discover Carleton Place While We Work on Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">Here are a few nearby spots worth visiting:</p>
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
                href="https://www.carletonplace.ca/en/explore-and-play/events-calendar.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See what’s happening locally in Carleton Place
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
              <h2 className="heading-md mb-0">FAQ – Microwave Repair in Carleton Place</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Microwave Repair in Carleton Place</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Don’t wait with a broken microwave — text or call Fixer Appliance Repair to arrange service.
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
            Prefer to book online? Send a service request.
          </Link>
        </div>
      </section>

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
