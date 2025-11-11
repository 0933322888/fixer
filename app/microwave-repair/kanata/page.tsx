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
  title: "Microwave Repair in Kanata – Fast, Affordable Service | Fixer",
  description:
    "Trusted microwave repair in Kanata, from Bridlewood to Kanata Lakes. We fix heating, sparking, and display issues on all major brands — with clear pricing and 90-day warranty.",
  keywords:
    "microwave repair Kanata, microwave service Kanata, microwave not heating Kanata, Fixer Appliance Repair Kanata",
};

const commonIssues = [
  {
    title: "Microwave won’t turn on",
    description: "Check fuse, door switch, or power supply — we test and restore.",
  },
  {
    title: "No heat but lights and fan work",
    description: "Usually a magnetron or high-voltage issue.",
  },
  {
    title: "Touchpad unresponsive",
    description: "We repair or replace faulty panels.",
  },
  {
    title: "Strange smell when heating",
    description: "Food residue or burned parts — we clean and inspect.",
  },
  {
    title: "Microwave makes grinding noise",
    description: "Could be turntable motor or fan blade obstruction.",
  },
  {
    title: "Display flashes random codes",
    description: "We reset and diagnose control board errors.",
  },
  {
    title: "Oven gets too hot outside",
    description: "We check vents and interior shielding.",
  },
  {
    title: "Interior light flickers",
    description: "Could be a loose bulb or electrical short.",
  },
  {
    title: "Microwave won’t stop beeping",
    description: "Control error — we recalibrate or replace logic board.",
  },
  {
    title: "Heats unevenly",
    description: "Stirrer fan or sensor may be failing.",
  },
];

const highlights = [
  {
    title: "South March Highlands",
    description: "Scenic forest trails for walking or biking.",
  },
  {
    title: "Walter Baker Park",
    description: "Peaceful green space for the whole family.",
  },
  {
    title: "Kanata Centrum",
    description: "Plenty of shopping and casual dining.",
  },
  {
    title: "Canadian Tire Centre",
    description: "Catch hockey, concerts, or live events.",
  },
];

const whyChooseUs = [
  "Skilled with microwave sensors, fans, and door switches",
  "We show up ready to solve your issue",
  "Transparent pricing every time",
  "Trusted team with a professional approach",
  "We explain everything before we begin",
];

const serviceAreas = [
  "Morgan’s Grant",
  "Beaverbrook",
  "Katimavik-Hazeldean",
  "Glen Cairn",
  "Bridlewood",
  "Kanata Lakes",
  "Emerald Meadows",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair microwaves in Glen Cairn and Morgan’s Grant?",
    answer: "Yes — we provide repair service across Kanata.",
  },
  {
    question: "My microwave isn’t heating — can that be fixed?",
    answer: "Yes — usually a magnetron, fuse, or door switch issue.",
  },
  {
    question: "Do you repair built-in microwaves?",
    answer: "Yes — including drawer and over-the-range models.",
  },
  {
    question: "Can you replace a broken turntable motor?",
    answer: "Absolutely — we carry those parts.",
  },
  {
    question: "Do you offer installation service?",
    answer: "Yes — for over-the-range and built-in models.",
  },
];

const services = [
  { label: "Washer Repair Kanata", href: "/washer-repair/kanata" },
  { label: "Dryer Repair Kanata", href: "/dryer-repair/kanata" },
  { label: "Dishwasher Repair Kanata", href: "/dishwasher-repair/kanata" },
  { label: "Fridge Repair Kanata", href: "/fridge-repair/kanata" },
  { label: "Freezer Repair Kanata", href: "/freezer-repair/kanata" },
  { label: "Oven Repair Kanata", href: "/oven-repair/kanata" },
  { label: "Electric Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { label: "Microwave Installation Kanata", href: "/microwave-installation" },
];

export default function MicrowaveRepairKanataPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Reliable Microwave Repair in Kanata</h1>
            <p className="text-xl text-gray-100 mb-4">
              When your microwave stops heating or sparks inside, it’s time to call the experts. We provide trusted microwave repair services throughout Kanata — fast, safe, and affordable.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Get more local info on our{" "}
              <Link href="/kanata" className="font-semibold text-white underline hover:text-gray-200">
                Local Kanata page
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent-500 hover:bg-accent-600">
                Book Online
              </Link>
              <a
                href="tel:+16135550199"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-900"
              >
                Call/Text (613) 555-0199
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Problems We Fix</h2>
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
            <h2 className="heading-md mb-6">Installation Services</h2>
            <p className="text-lg text-gray-700 mb-4">
              Replacing your microwave in Kanata? Before buying, check our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it explains common issues, costs, and lifespan.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Already purchased a new one? We provide microwave installation in Kanata. We’ll mount and test it with your existing electrical hookups.
            </p>
            <p className="text-gray-700 mb-6">
              👉 We don’t provide new wiring or custom cabinetry modifications.
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
              <h2 className="heading-md mb-0">Service Area: Kanata and Nearby</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We provide appliance repair services across the entire Kanata area, including:
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
              Our Kanata microwave repair services also extend to{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              👉 For all locations we cover, check our{" "}
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
            <h2 className="heading-md mb-6 text-center">Explore Kanata While We Fix Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              A broken microwave doesn’t have to ruin your day — while we repair it, you can check out:
            </p>
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
              See what’s happening this week in Kanata:{" "}
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Local events calendar
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
              <h2 className="heading-md mb-0">FAQs</h2>
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
          <h2 className="heading-md mb-4 text-white">Book Your Microwave Repair in Kanata</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Need your microwave up and running again? Let’s book your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:+16135550199" className="btn-primary bg-white text-accent-600 hover:bg-gray-100">
              Call: (613) 555-0199
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
              We fix more than microwaves — here are our other services in Kanata:
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
              Fixer Appliance Repair — your friendly microwave repair team in Kanata.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
