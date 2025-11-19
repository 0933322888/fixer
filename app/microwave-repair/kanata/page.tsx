import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  FaWaveSquare,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTools,
  FaUtensils,
  FaTree,
  FaBook,
} from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

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
  { label: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { label: "Microwave Installation Kanata", href: "/microwave-installation" },
];

export default function MicrowaveRepairKanataPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaWaveSquare className="text-[30px] mb-2 inline-block" /> Reliable Microwave Repair in Kanata</h1>
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

      <CommonIssuesSection issues={commonIssues} />

      {/* Microwave Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Microwave? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new microwave? We also provide microwave installation in Kanata with same-day service available in most areas.
          </p>
          <Link href="/microwave-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Microwave Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

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
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Explore Kanata While We Fix Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6">
              A broken microwave doesn't have to ruin your day — while we repair it, you can check out:
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
        heading="Book Your Microwave Repair in Kanata"
        description="Need your microwave up and running again? Let's book your service."
        buttonText="Book Online Now"
      />

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
