import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Arnprior Dryer Service – Local, Prompt Repairs | Fixer",
  description: "Reliable dryer repair in Arnprior. Same-day service in many neighbourhoods, transparent pricing, and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Dryer won't run",
    description: "Older Arnprior homes often have blown fuses or worn power cords. We'll test and repair the problem.",
  },
  {
    title: "Clothes not drying",
    description: "A failed heating element or clogged vent cuts efficiency. We'll restore proper drying.",
  },
  {
    title: "Grinding or banging noises",
    description: "Damaged bearings or loose rollers are common. We'll repair the noise source.",
  },
  {
    title: "Drum won't turn",
    description: "A snapped belt or bad motor can be the reason. We'll handle both.",
  },
  {
    title: "Takes forever to finish",
    description: "Blocked ducts or bad sensors waste energy. We'll clean and adjust for better airflow.",
  },
  {
    title: "Dryer overheats and shuts off",
    description: "Faulty thermostats or lint buildup often cause overheating. We'll correct both.",
  },
  {
    title: "Buttons unresponsive",
    description: "Control board or panel wear can cause this. We'll repair or replace as needed.",
  },
];

const whyChooseUs = [
  "Trusted local technicians with years of repair expertise",
  "Same-day appointments possible in Arnprior and nearby towns",
  "Honest service with no hidden fees",
  "Fully equipped for most repairs on the first visit",
  "90-day warranty on all labour provided",
];

const neighborhoods = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const arnpriorAttractions = [
  "Walk the shoreline at Robert Simpson Park.",
  "Explore Gillies Grove trails and nature.",
  "Browse stores and grab a coffee downtown.",
];

const faqs = [
  {
    question: "Do you serve homes outside Arnprior town limits?",
    answer: "Yes — including White Lake, Braeside, and surrounding areas.",
  },
  {
    question: "Why does my dryer shut off mid-cycle?",
    answer: "It could be overheating sensors, blocked vents, or a failing motor.",
  },
  {
    question: "Do you handle dryer installations?",
    answer: "Yes — we provide installation in Arnprior using your existing power lines.",
  },
  {
    question: "What payment options do you accept?",
    answer: "We accept credit cards, debit, and e-transfer.",
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer: "Yes — all dryer work comes with a 90-day labour warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Arnprior", href: "/washer-repair/arnprior" },
  { name: "Dishwasher Repair Arnprior", href: "/dishwasher-repair/arnprior" },
  { name: "Fridge Repair Arnprior", href: "/fridge-repair/arnprior" },
  { name: "Freezer Repair Arnprior", href: "/freezer-repair/arnprior" },
  { name: "Oven Repair Arnprior", href: "/oven-repair/arnprior" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { name: "Dryer Installation Arnprior", href: "/dryer-installation" },
];

export default function DryerRepairArnpriorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Reliable Dryer Repair in Arnprior</h1>
            <p className="text-xl leading-relaxed mb-8">
              A dryer that won't spin or leaves clothes damp is more than a hassle. Fixer Appliance Repair brings Arnprior residents quick solutions with local technicians who know the area. Many jobs can be completed in a single visit. We work on most major brands, including Frigidaire, Whirlpool, Samsung, GE, and LG.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/arnprior" className="font-semibold hover:underline">
                Arnprior appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Dryer Problems */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dryer Problems We Fix</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonIssues.map((issue, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{issue.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dryer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Dryer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new dryer? We also provide dryer installation in Arnprior with same-day service available in most areas.
          </p>
          <Link href="/dryer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Dryer Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Service Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Arnprior area, including:
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {neighborhoods.map((neighborhood, index) => (
                  <span key={index} className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                    {neighborhood}
                  </span>
                ))}
                <span className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                  and surrounding rural neighbourhoods
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
              We also offer dryer repairs for nearby areas including:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {nearbyAreas.map((area, index) => (
                <Link 
                  key={index} 
                  href={`/dryer-repair/${area.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors shadow-sm"
                >
                  <FaMapMarkerAlt className="text-primary-600 text-lg flex-shrink-0" />
                  <p className="text-gray-700 hover:text-primary-700 font-medium">{area.name}</p>
                </Link>
              ))}
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">
                👉 Need dryer help across Ottawa? Learn more about our{" "}
                <Link href="/dryer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dryer Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enjoy Arnprior While We Service Your Dryer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Enjoy Arnprior While We Service Your Dryer</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Waiting doesn't have to be boring:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {arnpriorAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                👉 Find events in Arnprior:
              </p>
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Ottawa Events Calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: {faq.question}</h3>
                  <p className="text-gray-700">A: {faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Schedule Your Dryer Repair in Arnprior</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dryer not working right? Call Fixer Appliance Repair for quick service:
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-2xl">
              📞 Call/Text: <a href="tel:613-413-6969" className="font-semibold hover:underline">613-413-6969</a>
            </p>
            <p className="text-xl">
              📧 Email: <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold hover:underline">service@fixerappliancerepair.ca</a>
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With...</h2>
            <p className="text-center text-gray-700 mb-8">
              We do more than just dryer repair — check out our other Ottawa services:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {relatedServices.map((service, index) => (
                <Link 
                  key={index}
                  href={service.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-semibold"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

