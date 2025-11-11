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
  title: "Microwave Repair in Nepean – Quick, Reliable Service | Fixer",
  description:
    "Trusted microwave repair in Nepean, from Barrhaven East to Centrepointe. We fix heating, sparking, and control issues on all brands — with clear pricing and a 90-day warranty.",
  keywords:
    "microwave repair Nepean, microwave service Nepean, microwave not heating Nepean, Fixer Appliance Repair Nepean",
};

const commonIssues = [
  {
    title: "Microwave beeps but won’t start",
    description: "We inspect door switches and fuses.",
  },
  {
    title: "Microwave turns off instantly",
    description: "Likely capacitor or thermal cut-out failure.",
  },
  {
    title: "Microwave heats slowly",
    description: "Weak magnetron or sensor error — we test both.",
  },
  {
    title: "Door opens mid-cycle",
    description: "Latch issues or loose fit — we realign and secure.",
  },
  {
    title: "Microwave fan not working",
    description: "Fan motor or control relay could be broken.",
  },
  {
    title: "Turns on by itself",
    description: "Serious board malfunction — we repair or replace.",
  },
  {
    title: "Cracks in turntable ring",
    description: "We replace with compatible parts.",
  },
  {
    title: "Clock keeps resetting",
    description: "Control panel or power supply issue.",
  },
  {
    title: "Unusual vibration during use",
    description: "Misaligned motor or unbalanced fan — we adjust and fix.",
  },
  {
    title: "Unit shuts down during reheating",
    description: "Overheating protection or control failure.",
  },
];

const highlights = [
  {
    title: "Andrew Haydon Park",
    description: "Enjoy nature and water views while we handle the repair.",
  },
  {
    title: "Bruce Pit",
    description: "Stretch your legs or walk the dog on nearby trails.",
  },
  {
    title: "Merivale Mall",
    description: "Pick up essentials or grab a bite just minutes away.",
  },
  {
    title: "Art Is In Bakery",
    description: "Treat yourself to creative pastries and coffee.",
  },
];

const whyChooseUs = [
  "Fast service that fits your schedule",
  "Reliable help from experienced technicians",
  "Clear rates and helpful guidance",
  "We solve common and uncommon microwave problems",
  "Trusted by families across Nepean",
];

const serviceAreas = [
  "Barrhaven East",
  "Centrepointe",
  "Merivale Gardens",
  "Manordale",
  "Tanglewood",
  "Fallowfield",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you fix microwaves in Bells Corners and Centrepointe?",
    answer: "Yes — we work across Nepean.",
  },
  {
    question: "Do you repair models over stoves?",
    answer: "Yes — over-the-range models are common.",
  },
  {
    question: "Can you help with display or keypad issues?",
    answer: "Absolutely — we repair non-responsive controls.",
  },
  {
    question: "What if the microwave doesn’t turn on at all?",
    answer: "We’ll check the fuse, door switch, and wiring.",
  },
  {
    question: "Do you install new microwaves?",
    answer: "Yes — we handle full installation and removal.",
  },
];

const services = [
  { label: "Washer Repair Nepean", href: "/washer-repair/nepean" },
  { label: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
  { label: "Dishwasher Repair Nepean", href: "/dishwasher-repair/nepean" },
  { label: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
  { label: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
  { label: "Oven Repair Nepean", href: "/oven-repair/nepean" },
  { label: "Electric Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { label: "Microwave Installation Nepean", href: "/microwave-installation" },
];

export default function MicrowaveRepairNepeanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Nepean’s Trusted Microwave Repair Technicians</h1>
            <p className="text-xl text-gray-100 mb-4">
              Nepean residents, don’t let a broken microwave ruin your routine. Whether it’s not heating or sparking inside, Fixer is just a call away with quick, professional service.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              We work on LG, Samsung, Whirlpool, GE, Maytag, and more — same-day or next-day visits when available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Learn more about local support on our{" "}
              <Link href="/microwave-repair" className="font-semibold text-white underline hover:text-gray-200">
                Microwave Repair Nepean page
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
              Thinking about microwave replacement in Nepean? Read our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it covers repair costs, reliability, and lifespan.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Already purchased one? We provide microwave installation in Nepean. Our team connects and tests it with the current power setup.
            </p>
            <p className="text-gray-700 mb-6">
              👉 We don’t run new wiring or modify cabinetry.
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
              <h2 className="heading-md mb-0">Service Area: Nepean and Nearby</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We provide appliance repair services across the entire Nepean area, including:
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
              For full coverage across the city, visit our{" "}
              <Link href="/microwave-repair" className="text-primary-600 hover:text-primary-700 underline">
                Microwave Repair Ottawa
              </Link>{" "}
              page. From Nepean to nearby areas like{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              our microwave repair experts are ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Explore Nepean While We Work on Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">Turn repair time into discovery time:</p>
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
              🔍 See the latest community events:{" "}
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Events in Nepean
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
          <h2 className="heading-md mb-4 text-white">Book Your Microwave Repair in Nepean</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            No need to wait — call now and we’ll be on our way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="tel:+16135550199" className="btn-primary bg-white text-accent-600 hover:bg-gray-100">
              Call or Text: (613) 555-0199
            </a>
            <a
              href="mailto:service@fixerappliancerepair.ca"
              className="btn-outline border-white text-white hover:bg-white hover:text-accent-600"
            >
              Email Us
            </a>
          </div>
          <Link href="/contact" className="underline text-white hover:text-gray-100 font-semibold">
            Prefer to book online? Send us a request.
          </Link>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Also Need Help With…</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We handle more than microwaves — here are our other services in Nepean:
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
              Fixer Appliance Repair — your reliable microwave repair team in Nepean.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
