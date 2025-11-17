import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Cooktop Repair Carp - Reliable Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair provides expert cooktop repair in Carp. From cracked glass and faulty switches to wiring issues and error codes, we service Whirlpool, Samsung, LG, GE & more. Clear pricing, rural-friendly service, 90-day warranty.",
};

const commonIssues = [
  {
    title: "Burner works intermittently",
    description: "Loose wiring or failing connection — we secure and test.",
  },
  {
    title: "One burner is much hotter",
    description: "Miscalibrated or stuck infinite switch — we replace it.",
  },
  {
    title: "Scratches on cooktop surface",
    description: "We assess damage and recommend refinishing or replacement.",
  },
  {
    title: "Cooktop dead after power surge",
    description: "Control board or fuse likely damaged — we replace parts.",
  },
  {
    title: "Burner stays on high only",
    description: "Failed power switch — we install a new one.",
  },
  {
    title: "Touchpad flickers or fails",
    description: "Moisture or heat damage — we repair or replace.",
  },
  {
    title: "Cooktop overheating surrounding counter",
    description: "Ventilation or insulation issue — we correct installation.",
  },
  {
    title: "Electric shock from knob",
    description: "Loose ground or bad wiring — we fix for safety.",
  },
  {
    title: "Cooktop uneven or tilting",
    description: "Mounting hardware may need adjustment.",
  },
  {
    title: "Error code on digital panel",
    description: "We reset and fix any underlying faults.",
  },
];

const whyChooseUs = [
  "Skilled with both modern and classic cooktops",
  "Prompt arrival with everything needed to repair",
  "Honest recommendations without upselling",
  "Respectful of your home and time",
  "Clean service, even in tricky rural kitchens",
];

const serviceAreas = ["Village of Carp", "Huntley", "Corkery", "Upper Dwyer Hill"];

const nearbyAreas = [
  { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Carp Farmers' Market", description: "One of the best in Ontario." },
  { title: "Diefenbunker Cold War Museum", description: "Unique and fascinating." },
  { title: "Rural Art Studios & seasonal markets", description: "Local art and crafts." },
  { title: "Carp Ridge EcoWellness Centre", description: "Nature walks, spa, and more." },
];

const faqs = [
  {
    question: "Can you fix cooktops in Carp Village and Kinburn?",
    answer: "Yes — we serve those areas and more.",
  },
  {
    question: "Do you repair ceramic and coil cooktops?",
    answer: "Yes — including dual element types.",
  },
  {
    question: "My cooktop works partially — can you fix one burner?",
    answer: "Yes — often it's a switch or element issue.",
  },
  {
    question: "Do you provide quotes before repair?",
    answer: "Always — we explain the cost before starting.",
  },
  {
    question: "Do you help install replacements?",
    answer: "Yes — full installation is available.",
  },
];

const otherServices = [
  { name: "Washer Repair Carp", href: "/washer-repair/carp" },
  { name: "Dryer Repair Carp", href: "/dryer-repair/carp" },
  { name: "Dishwasher Repair Carp", href: "/dishwasher-repair/carp" },
  { name: "Fridge Repair Carp", href: "/fridge-repair/carp" },
  { name: "Freezer Repair Carp", href: "/freezer-repair/carp" },
  { name: "Oven Repair Carp", href: "/oven-repair/carp" },
  { name: "Microwave Repair Carp", href: "/microwave-repair/carp" },
  { name: "Cooktop Installation Carp", href: "/cooktop-installation" },
];

export default function CooktopRepairCarpPage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaFire className="mx-auto mb-6 text-6xl" />
            <h1 className="heading-lg mb-4 text-white">Quick Cooktop Fixes for Carp Homes</h1>
            <p className="text-xl leading-relaxed text-gray-100">
              Whether it's an older model or a newer glass top unit, Fixer Appliance Repair delivers expert
              electric cooktop repair to Carp homes — rural and residential alike. We service LG, Samsung,
              Whirlpool, GE, Maytag, and more.
            </p>
            <p className="mt-6 text-lg text-gray-100">
              👉 Discover more about the area on our{" "}
              <Link href="/carp" className="font-semibold text-white underline-offset-4 hover:underline">
                Local Carp page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Installation Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center">Need a new cooktop in Carp?</p>
              <p className="text-center">
                Read our repair vs. replace guide first — it helps you weigh repair value vs. new purchase.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  {"Repair or replace? ->"}
                </Link>
              </p>
              <p className="text-center">
                If you already have one, we provide cooktop installation in Carp. Our team will connect and
                test it with your current power supply.
              </p>
              <p className="text-center text-sm text-gray-600">
                👉 We don't provide new electrical circuits or gas hookups.
              </p>
              <p className="text-center">
                <Link href="/cooktop-installation" className="btn-primary inline-block">
                  {"Learn more ->"}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Why choose us</h2>
            <ul className="mx-auto max-w-2xl space-y-4 text-lg text-gray-700">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-6 w-6 text-xl" aria-hidden="true">
                    ✅
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Service Area: Carp and Nearby</h2>
            <p className="text-lg text-gray-700">
              We provide appliance repair services across the entire Carp area, including:
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-800 shadow-sm"
                >
                  {area}
                </div>
              ))}
              <div className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-800 shadow-sm">
                and surrounding rural neighbourhoods
              </div>
            </div>
            <p className="mt-8 text-lg text-gray-700">
              👉 For full coverage of the Ottawa region, visit our{" "}
              <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Ottawa
              </Link>{" "}
              page. We also help nearby residents in{" "}
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">
              Take a Break in Carp While We Repair Your Cooktop
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Instead of waiting around, explore some of Carp's best spots:
            </p>
            <ul className="space-y-4 text-gray-700">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start">
                  <span className="mr-3 text-primary-600">•</span>
                  <span>
                    <strong>{item.title}</strong> - {item.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700">
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Events in Carp
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary-700">{faq.question}</h3>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Book Your Cooktop Repair in Carp</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Rural repairs, fast results — schedule your visit today.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-xl sm:flex-row">
            <a href="tel:6135550199" className="font-semibold text-white hover:underline">
              Call or text: (613) 555-0199
            </a>
            <span className="hidden text-white sm:inline">|</span>
            <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold text-white hover:underline">
              service@fixerappliancerepair.ca
            </a>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Service Now
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Also Need Help With...</h2>
            <p className="text-center text-lg text-gray-700">
              Cooktop repair is just one part of what we do — here are more services in Carp:
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="rounded-lg bg-gray-50 p-4 text-center font-semibold text-primary-600 transition-colors hover:bg-primary-50"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-700">Need something else fixed? We're here for you in Carp.</p>
            <p className="mt-4 text-center text-gray-800 font-semibold">
              Fixer Appliance Repair — your trusted cooktop repair team in Carp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

