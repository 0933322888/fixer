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
  title: "Microwave Repair in Carp – Trusted Rural Service | Fixer",
  description:
    "Reliable microwave repair in Carp, including Huntley, Corkery, and Upper Dwyer Hill. We fix heating, sparking, and control issues with a 90-day warranty.",
  keywords:
    "microwave repair Carp, microwave service Carp, rural microwave repair, Fixer Appliance Repair Carp",
};

const commonIssues = [
  {
    title: "Microwave won’t start",
    description: "Likely a door sensor or fuse issue — we fix both.",
  },
  {
    title: "Loud buzzing noise",
    description: "Common with failing capacitors or magnetrons.",
  },
  {
    title: "Microwave door misaligned",
    description: "We adjust hinges and fix latch mechanisms.",
  },
  {
    title: "Microwave stops after few seconds",
    description: "Faulty switches or internal wiring can interrupt cycles.",
  },
  {
    title: "Buttons worn or stuck",
    description: "We clean or replace keypads and controls.",
  },
  {
    title: "Timer won’t set properly",
    description: "We recalibrate or install a new control unit.",
  },
  {
    title: "Microwave overheating quickly",
    description: "Blocked vents or a faulty fan — we test airflow.",
  },
  {
    title: "Sparks even when empty",
    description: "Damaged waveguide or insulation — we replace parts.",
  },
  {
    title: "Internal surface cracked",
    description: "We patch or replace the interior liner.",
  },
  {
    title: "Microwave resets clock randomly",
    description: "Likely power supply board or capacitor issue.",
  },
];

const highlights = [
  {
    title: "Carp Farmers’ Market",
    description: "Browse local produce and artisan goods while we repair.",
  },
  {
    title: "Diefenbunker Cold War Museum",
    description: "Explore one of Canada’s most unique museums.",
  },
  {
    title: "Carp Ridge EcoWellness Centre",
    description: "Enjoy nature walks, spa services, and wellness classes.",
  },
];

const whyChooseUs = [
  "We know how to fix modern and older microwaves alike",
  "Clean, careful work with attention to safety",
  "Upfront pricing without surprises",
  "We treat your appliances with care",
  "Local service you can rely on",
];

const serviceAreas = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
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
    question: "Do you repair microwaves in Kinburn and Huntley?",
    answer: "Yes — we visit homes throughout Carp.",
  },
  {
    question: "Do you service compact countertop models?",
    answer: "Yes — if repairable, we’ll assess and quote.",
  },
  {
    question: "Do you fix microwaves with broken buttons?",
    answer: "Yes — control panel repairs are common.",
  },
  {
    question: "How long do microwave repairs take?",
    answer: "Usually under an hour.",
  },
  {
    question: "Can you install a new unit if mine is unrepairable?",
    answer: "Yes — we offer removal and installation.",
  },
];

const services = [
  { label: "Washer Repair Carp", href: "/washer-repair/carp" },
  { label: "Dryer Repair Carp", href: "/dryer-repair/carp" },
  { label: "Dishwasher Repair Carp", href: "/dishwasher-repair/carp" },
  { label: "Fridge Repair Carp", href: "/fridge-repair/carp" },
  { label: "Freezer Repair Carp", href: "/freezer-repair/carp" },
  { label: "Oven Repair Carp", href: "/oven-repair/carp" },
  { label: "Cooktop Repair Carp", href: "/cooktop-repair/carp" },
  { label: "Microwave Installation Carp", href: "/microwave-installation" },
];

export default function MicrowaveRepairCarpPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaBolt className="text-5xl text-white" />
            </div>
            <h1 className="heading-xl text-white mb-6">Microwave on the Fritz? Carp Repair Pros Are Here</h1>
            <p className="text-xl text-gray-100 mb-4">
              Living in Carp and stuck with a broken microwave? We’ll get it back in action quickly. Fixer Appliance Repair is known for dependable service in rural areas — no job is too far!
            </p>
            <p className="text-lg text-gray-200 mb-6">
              Brands we service include LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Learn more about the community on our{" "}
              <Link href="/carp" className="font-semibold text-white underline hover:text-gray-200">
                Local Carp page
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
              Need a new microwave in Carp? Check our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it helps compare costs and long-term value.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              If you’ve bought one, we offer microwave installation in Carp. We’ll connect and test it with your current power supply.
            </p>
            <p className="text-gray-700 mb-6">
              👉 We don’t add new wiring or structural changes.
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
              <h2 className="heading-md mb-0">Service Area: Carp and Nearby</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We provide appliance repair services across the entire Carp area, including:
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
              Homeowners in Carp, as well as those in{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              trust us with their microwave repairs. 👉 For complete coverage across the city, see our{" "}
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
            <h2 className="heading-md mb-4">Explore Carp While We Fix Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6">
              Your microwave repair is underway — why not enjoy Carp in the meantime?
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
        heading="Book Your Microwave Repair in Carp"
        description="Quick and reliable microwave repair for rural Carp is just a call away."
        buttonText="Book Online Now"
      />

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Also Need Help With…</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Microwave repair is only one part of what we do — here are other services in Carp:
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
              Fixer Appliance Repair — your trusted microwave repair team in Carp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
