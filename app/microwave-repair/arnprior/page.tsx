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
  title: "Microwave Repair in Arnprior – Local, Experienced Service | Fixer",
  description:
    "Expert microwave repair in Arnprior, serving Braeside, McNab, and White Lake. We fix heating, power, and control issues on all brands — with upfront pricing and a 90-day warranty.",
  keywords:
    "microwave repair Arnprior, microwave service Arnprior, microwave not heating Arnprior, Fixer Appliance Repair Arnprior",
};

const commonIssues = [
  {
    title: "Microwave won’t start",
    description:
      "In Arnprior kitchens, blown fuses or bad door latches are common. We’ll test and repair them.",
  },
  {
    title: "No heat though lights work",
    description:
      "A failed magnetron or capacitor usually causes this. We’ll restore heating.",
  },
  {
    title: "Grinding or rattling noises",
    description:
      "Turntable motors or fan blades often wear out. We’ll replace the noisy parts.",
  },
  {
    title: "Microwave shuts off mid-cycle",
    description:
      "Overheating sensors sometimes cut power. We’ll correct the fault.",
  },
  {
    title: "Display not lighting up",
    description:
      "Wiring or board failures can darken the screen. We’ll restore function.",
  },
  {
    title: "Light inside flickers",
    description:
      "Loose sockets or bulbs are common culprits. We’ll repair them.",
  },
];

const highlights = [
  {
    title: "Robert Simpson Park",
    description: "Enjoy a river walk along the Ottawa River shoreline.",
  },
  {
    title: "Gillies Grove",
    description: "Hike beneath towering pines in this old-growth forest.",
  },
  {
    title: "Downtown Arnprior",
    description: "Grab a bite or browse local shops while we handle the repair.",
  },
];

const whyChooseUs = [
  "Friendly Arnprior microwave service pros with 15+ years of experience",
  "Clear pricing explained upfront",
  "Professional service you can rely on",
  "90-day warranty on repairs and installs",
];

const serviceAreas = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
  "Surrounding rural neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair microwaves in Arnprior homes?",
    answer: "Yes — also in Braeside and White Lake.",
  },
  {
    question: "Why is my microwave light flickering?",
    answer: "Could be a loose bulb, socket, or wiring.",
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes — with existing electrical supply.",
  },
  {
    question: "Do you handle all major brands?",
    answer: "Yes — Samsung, LG, Panasonic, Whirlpool, GE.",
  },
  {
    question: "Do you guarantee repairs?",
    answer: "Yes — 90-day warranty on all jobs.",
  },
];

const services = [
  { label: "Washer Repair Arnprior", href: "/washer-repair/arnprior" },
  { label: "Dryer Repair Arnprior", href: "/dryer-repair/arnprior" },
  { label: "Dishwasher Repair Arnprior", href: "/dishwasher-repair/arnprior" },
  { label: "Fridge Repair Arnprior", href: "/fridge-repair/arnprior" },
  { label: "Freezer Repair Arnprior", href: "/freezer-repair/arnprior" },
  { label: "Oven Repair Arnprior", href: "/oven-repair/arnprior" },
  { label: "Electric Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { label: "Microwave Installation Arnprior", href: "/microwave-installation" },
];

export default function MicrowaveRepairArnpriorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Expert Microwave Repair in Arnprior</h1>
            <p className="text-xl text-gray-100 mb-4">
              From downtown Arnprior to White Lake and Braeside, our technicians fix microwaves that won’t heat, spark, or shut off mid-cycle. Local help is just a call away.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves with honest pricing and a 90-day warranty.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Find more about our coverage on the{" "}
              <Link href="/arnprior" className="font-semibold text-white underline hover:text-gray-200">
                Local Arnprior page
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
            <h2 className="heading-md text-center mb-12">Common Microwave Issues We Fix in Arnprior</h2>
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
            <h2 className="heading-md mb-6">Microwave Installation in Arnprior</h2>
            <p className="text-lg text-gray-700 mb-4">
              Replacing your microwave in Arnprior? Before buying, see our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it compares repair vs. replacement value.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              If you’ve bought a new unit, we provide microwave installation in Arnprior. We’ll connect and test it using your current power setup.
            </p>
            <p className="text-gray-700 mb-6">
              👉 We don’t create new electrical lines or cabinetry modifications.
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
              We provide appliance repair services across the entire Arnprior area, including:
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
              Microwave repair in Arnprior plus surrounding areas such as{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              👉 For full coverage, check our{" "}
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
            <h2 className="heading-md mb-6 text-center">Discover Arnprior While We Work on Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">Here are a few ideas:</p>
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
                href="https://arnprior.ca/en/explore-and-play/events-calendar.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See events in Arnprior
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
              <h2 className="heading-md mb-0">FAQ – Microwave Repair in Arnprior</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Microwave Repair in Arnprior</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Microwave issues? Contact Fixer Appliance Repair today for reliable local help.
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
              We service more than just microwaves — here are our other options in Arnprior:
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
              Fixer Appliance Repair — your microwave repair experts in Arnprior.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
