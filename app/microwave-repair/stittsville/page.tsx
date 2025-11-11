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
  title: "Microwave Repair in Stittsville – Local, Fast Service | Fixer",
  description:
    "Dependable microwave repair in Stittsville, from Fairwinds to Timbermere. We fix heating, sparking, and touchpad issues on all brands — backed by a 90-day warranty.",
  keywords:
    "microwave repair Stittsville, microwave service Stittsville, microwave not heating Stittsville, Fixer Appliance Repair Stittsville",
};

const commonIssues = [
  {
    title: "Microwave powers on but won’t heat",
    description: "High-voltage components may have failed.",
  },
  {
    title: "Door won’t latch properly",
    description: "We fix latch hooks and switches.",
  },
  {
    title: "Flashing display or error message",
    description: "We interpret and reset diagnostic codes.",
  },
  {
    title: "Microwave makes rattling sound",
    description: "Could be fan, motor, or loose internal part.",
  },
  {
    title: "Doesn’t recognize button presses",
    description: "Keypad or control circuit board may be at fault.",
  },
  {
    title: "Interior light not working",
    description: "We replace with manufacturer-approved parts.",
  },
  {
    title: "Stuck in child lock mode",
    description: "We reset or replace the control board.",
  },
  {
    title: "Paint peeling inside",
    description: "We clean and repaint using microwave-safe coating.",
  },
  {
    title: "Burning smell when running",
    description: "Spill residue or shorted wiring — we resolve it.",
  },
  {
    title: "Microwave won’t stop running",
    description: "Faulty relay or control system.",
  },
];

const highlights = [
  {
    title: "Amberwood Village Trails",
    description: "Unwind with a walk through quiet neighbourhood paths.",
  },
  {
    title: "Quitters Coffee",
    description: "Sip and relax on the patio while we repair.",
  },
  {
    title: "Village Square Park",
    description: "A small but charming park right in Stittsville.",
  },
];

const whyChooseUs = [
  "Experience with all major microwave brands",
  "Timely, respectful, and efficient repairs",
  "Affordable rates without sacrificing quality",
  "We’re happy to answer all your questions",
  "No mess left behind",
];

const serviceAreas = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
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
    question: "Do you repair microwaves in Fairwinds and Timbermere?",
    answer: "Yes — we serve all Stittsville neighborhoods.",
  },
  {
    question: "My microwave sparks — is that dangerous?",
    answer: "It can be — unplug and contact us immediately.",
  },
  {
    question: "Do you repair touchpad issues?",
    answer: "Yes — we handle both hardware and control failures.",
  },
  {
    question: "Can you service built-in microwave drawers?",
    answer: "Yes — including premium models.",
  },
  {
    question: "Do you offer repair guarantees?",
    answer: "Yes — 90 days for parts and labor.",
  },
];

const services = [
  { label: "Washer Repair Stittsville", href: "/washer-repair/stittsville" },
  { label: "Dryer Repair Stittsville", href: "/dryer-repair/stittsville" },
  { label: "Dishwasher Repair Stittsville", href: "/dishwasher-repair/stittsville" },
  { label: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
  { label: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
  { label: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
  { label: "Electric Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { label: "Microwave Installation Stittsville", href: "/microwave-installation" },
];

export default function MicrowaveRepairStittsvillePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Stittsville Microwave Repair – We Get It Working Again</h1>
            <p className="text-xl text-gray-100 mb-4">
              Microwave won’t start or smells like burning? If you’re in Stittsville, our local techs can bring it back to life in no time. Fixer Appliance Repair handles all brands and models with care.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              We handle LG, Samsung, Whirlpool, GE, and Maytag — same-day or next-day visits when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Check more details on our{" "}
              <Link href="/stittsville" className="font-semibold text-white underline hover:text-gray-200">
                Microwave Repair Stittsville page
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
              Upgrading your microwave in Stittsville? First, review our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it explains when repair is cost-effective and when replacement makes sense.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Once you’ve got a new unit, we’ll handle microwave installation in Stittsville. We’ll set it up and test it using your existing electrical hookups.
            </p>
            <p className="text-gray-700 mb-6">
              👉 No new wiring or cabinetry work included.
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
              <h2 className="heading-md mb-0">Service Area: Stittsville and Nearby</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We provide appliance repair services across the entire Stittsville area, including:
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
              For full coverage across Ottawa, visit our{" "}
              <Link href="/microwave-repair" className="text-primary-600 hover:text-primary-700 underline">
                Microwave Repair Ottawa
              </Link>{" "}
              page. We also repair microwaves for customers in{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Take a Break in Stittsville While We Repair Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">Even a short wait can be pleasant if you step outside:</p>
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
              Discover local activities:{" "}
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Events in Stittsville
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
          <h2 className="heading-md mb-4 text-white">Book Your Microwave Repair in Stittsville</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Local help, friendly service — schedule today.
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
            Prefer to book online? Send a request.
          </Link>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Also Need Help With…</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Need more than microwave repair? Here’s what else we service in Stittsville:
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
              Fixer Appliance Repair — your local microwave repair experts in Stittsville.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
