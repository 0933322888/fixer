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
  FaWaveSquare,
} from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Vanier – Local, Reliable Experts | Fixer",
  description:
    "Professional microwave repair in Vanier, including Overbrook and Beechwood Village. We fix heating, power, and control issues — with clear pricing and a 90-day warranty.",
  keywords:
    "microwave repair Vanier, microwave service Vanier, microwave not heating Vanier, Fixer Appliance Repair Vanier",
};

const commonIssues = [
  {
    title: "Microwave not turning on",
    description:
      "In older Vanier homes, worn wiring or bad outlets often cause this. We’ll restore safe power.",
  },
  {
    title: "No heat but lights and fan work",
    description:
      "Usually a magnetron or high-voltage issue. We’ll test and replace the part.",
  },
  {
    title: "Microwave makes buzzing or humming",
    description:
      "Loose transformers or worn capacitors often cause unusual noises. We’ll track and repair them.",
  },
  {
    title: "Touchpad not working",
    description:
      "Aged control panels often fail. We’ll repair or swap the faulty board.",
  },
  {
    title: "Interior light flickering",
    description:
      "Loose sockets or failing bulbs are frequent. We’ll handle it.",
  },
  {
    title: "Microwave shuts off randomly",
    description:
      "Sensors or control boards sometimes cut power mid-cycle. We’ll fix it fast.",
  },
];

const highlights = [
  {
    title: "Richelieu Park",
    description: "Enjoy a peaceful stroll through the mature forest trails.",
  },
  {
    title: "Vanier Museopark",
    description: "Explore local heritage and maple syrup traditions.",
  },
  {
    title: "Beechwood Avenue",
    description: "Relax at neighbourhood cafés and independent shops.",
  },
];

const whyChooseUs = [
  "Skilled Vanier microwave technicians with local expertise",
  "Straightforward pricing before we begin",
  "Same-day and next-day service availability",
  "90-day warranty for peace of mind",
];

const serviceAreas = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair microwaves in Vanier apartments and homes?",
    answer: "Yes — all housing types.",
  },
  {
    question: "Why does my microwave keep shutting off?",
    answer: "Often overheating sensors or control board issues.",
  },
  {
    question: "Do you install microwaves?",
    answer: "Yes — with current electrical hookups.",
  },
  {
    question: "Do you work on all brands?",
    answer: "Yes — Whirlpool, LG, Samsung, GE, Panasonic.",
  },
  {
    question: "Do you provide warranty coverage?",
    answer: "Yes — every job comes with a 90-day labour warranty.",
  },
];

const services = [
  { label: "Washer Repair Vanier", href: "/washer-repair/vanier" },
  { label: "Dryer Repair Vanier", href: "/dryer-repair/vanier" },
  { label: "Dishwasher Repair Vanier", href: "/dishwasher-repair/vanier" },
  { label: "Fridge Repair Vanier", href: "/fridge-repair/vanier" },
  { label: "Freezer Repair Vanier", href: "/freezer-repair/vanier" },
  { label: "Oven Repair Vanier", href: "/oven-repair/vanier" },
  { label: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { label: "Microwave Installation Vanier", href: "/microwave-installation" },
];

export default function MicrowaveRepairVanierPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6"><FaWaveSquare className="text-[30px] mb-2 inline-block" /> Reliable Microwave Repair in Vanier</h1>
            <p className="text-xl text-gray-100 mb-4">
              From Beechwood Village to Overbrook, our Vanier microwave repair team handles all issues — from heating failures to control board problems.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves. Same-day and next-day appointments available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Learn more about the community on our{" "}
              <Link href="/vanier" className="font-semibold text-white underline hover:text-gray-200">
                Local Vanier page
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

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Vanier" />

      {/* Installation Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Microwave Installation in Vanier</h2>
            <p className="text-lg text-gray-700 mb-4">
              Looking at microwave replacement in Vanier? Before you decide, review our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it helps you make the best choice.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              For new units, we provide microwave installation in Vanier. We’ll install and test it using the current electrical supply.
            </p>
            <p className="text-gray-700 mb-6">
              👉 We don’t run new wiring or make cabinetry changes.
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
              We provide appliance repair services across the entire Vanier area, including:
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
              We repair microwaves in Vanier and throughout{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              👉 For full details, see our{" "}
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
            <h2 className="heading-md mb-4">Discover Vanier While We Work on Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6">
              Use the time to explore:
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
        heading="Schedule Your Microwave Repair in Vanier"
        description="Need your microwave fixed fast? Reach out now to schedule service with Fixer Appliance Repair."
        buttonText="Book Online Now"
      />

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Also Need Help With…</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Microwaves aren’t all we repair — here are our other services in Vanier:
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
              Fixer Appliance Repair — your friendly microwave repair team in Vanier.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
