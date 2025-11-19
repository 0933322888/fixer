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
  { label: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { label: "Microwave Installation Arnprior", href: "/appliance-installation/microvawe" },
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
            <h1 className="heading-xl text-white mb-6"><FaWaveSquare className="text-[30px] mb-2 inline-block" /> Expert Microwave Repair in Arnprior</h1>
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

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Arnprior" />

      {/* Microwave Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Microwave? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new microwave? We also provide microwave installation in Arnprior with same-day service available in most areas.
          </p>
          <Link href="/appliance-installation/microvawe" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
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
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Discover Arnprior While We Work on Your Microwave</h2>
            <p className="text-lg text-gray-700 mb-6">Here are a few ideas:</p>
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
        heading="Schedule Your Microwave Repair in Arnprior"
        description="Microwave issues? Contact Fixer Appliance Repair today for reliable local help."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With...</h2>
            <p className="text-center text-gray-700 mb-8">
              We do more than just microwave repair — check out our other Ottawa services:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-semibold"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
