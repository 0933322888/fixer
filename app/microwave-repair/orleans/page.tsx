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
  title: "Microwave Repair in Orleans – Fast, Local Service | Fixer",
  description:
    "Expert microwave repair in Orleans, serving Fallingbrook, Avalon, and Chapel Hill. We fix heating, control, and power issues on all brands — with upfront pricing and a 90-day warranty.",
  keywords:
    "microwave repair Orleans, microwave service Orleans, microwave not heating Orleans, Fixer Appliance Repair Orleans",
};

const commonIssues = [
  {
    title: "Microwave won’t power on",
    description:
      "In Orleans homes, this is often a blown fuse or faulty door switch. We’ll test and restore power safely.",
  },
  {
    title: "Heats unevenly",
    description:
      "If your leftovers come out hot on one side and cold on the other, the stirrer fan or sensor may be failing.",
  },
  {
    title: "Touchpad unresponsive",
    description:
      "Moisture or worn panels often stop buttons from working. We’ll repair or replace the controls.",
  },
  {
    title: "Strange smell while cooking",
    description:
      "Food residue or burned wiring can create odors. We’ll inspect and clean it properly.",
  },
  {
    title: "Microwave keeps beeping",
    description:
      "Control errors often trigger endless beeping. We’ll recalibrate or replace the logic board.",
  },
  {
    title: "Display flashing codes",
    description:
      "Samsung and LG models sometimes show random codes. We’ll decode and repair them.",
  },
];

const highlights = [
  {
    title: "Petrie Island",
    description: "Relax on riverside trails and beaches while we repair your microwave.",
  },
  {
    title: "Shenkman Arts Centre",
    description: "Catch a performance or browse local art just minutes away.",
  },
  {
    title: "Place d’Orleans",
    description: "Visit for food, shopping, or to cross errands off your list.",
  },
];

const whyChooseUs = [
  "Local Orleans microwave repair and installation experts",
  "Same-day and next-day service available",
  "Upfront, honest pricing every time",
  "90-day labour warranty on all jobs",
];

const serviceAreas = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day microwave repair in Orleans?",
    answer: "Often yes — depending on our schedule.",
  },
  {
    question: "Why is my microwave not heating food?",
    answer: "Usually a magnetron, capacitor, or diode issue.",
  },
  {
    question: "Do you install over-the-range microwaves?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you cover nearby Orleans communities?",
    answer: "Yes — Fallingbrook, Avalon, Chapel Hill, and more.",
  },
  {
    question: "Do you provide warranty coverage?",
    answer: "Yes — 90-day labour warranty.",
  },
];

const services = [
  { label: "Washer Repair Orleans", href: "/washer-repair/orleans" },
  { label: "Dryer Repair Orleans", href: "/dryer-repair/orleans" },
  { label: "Dishwasher Repair Orleans", href: "/dishwasher-repair/orleans" },
  { label: "Fridge Repair Orleans", href: "/fridge-repair/orleans" },
  { label: "Freezer Repair Orleans", href: "/freezer-repair/orleans" },
  { label: "Oven Repair Orleans", href: "/oven-repair/orleans" },
  { label: "Electric Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { label: "Microwave Installation Orleans", href: "/microwave-installation" },
];

export default function MicrowaveRepairOrleansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Dependable Microwave Repair in Orleans</h1>
            <p className="text-xl text-gray-100 mb-4">
              From Fallingbrook to Chapel Hill, our Orleans technicians repair microwaves that won’t heat, spark inside, or display error codes. Affordable and local service, done right.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves with same-day or next-day appointments when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Discover more about the community on our{" "}
              <Link href="/orleans" className="font-semibold text-white underline hover:text-gray-200">
                Local Orleans page
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
            <h2 className="heading-md text-center mb-12">Common Microwave Issues We Fix in Orleans</h2>
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
            <h2 className="heading-md mb-6">Microwave Installation in Orleans</h2>
            <p className="text-lg text-gray-700 mb-4">
              Looking for microwave installation in Orleans? Before replacing your unit, check our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it helps you make the right choice.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              For new purchases, we handle microwave installation in Orleans. We’ll connect and test it using your existing hookups.
            </p>
            <p className="text-gray-700 mb-6">
              👉 No new electrical circuits or cabinetry modifications are included.
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
              We provide appliance repair services across the entire Orleans area, including:
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
              Microwave repairs in Orleans are just the beginning — we also serve{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              👉 For complete coverage, visit our{" "}
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
            <h2 className="heading-md mb-6 text-center">Discover Orleans While We Work on Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">Turn repair time into a mini outing:</p>
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
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See what’s happening locally in Orleans this month
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
              <h2 className="heading-md mb-0">FAQ – Microwave Repair in Orleans</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Microwave Repair in Orleans</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Microwave not heating? Call Fixer Appliance Repair today to book quick service.
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
              Our expertise goes beyond microwaves — here’s what else we do in Orleans:
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
              Fixer Appliance Repair — your friendly microwave repair team in Orleans.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
