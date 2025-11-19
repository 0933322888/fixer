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
  { label: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { label: "Microwave Installation Stittsville", href: "/appliance-installation/microvawe" },
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

      <CommonIssuesSection issues={commonIssues} />

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
            <Link href="/appliance-installation/microvawe" className="btn-primary inline-flex items-center justify-center">
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
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Take a Break in Stittsville While We Repair Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6">Even a short wait can be pleasant if you step outside:</p>
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
        heading="Book Your Microwave Repair in Stittsville"
        description="Local help, friendly service — schedule today."
        buttonText="Book Online Now"
      />

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
