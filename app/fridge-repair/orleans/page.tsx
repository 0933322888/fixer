import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Fridge Repair Orleans – Fast, Local Refrigerator Service | Fixer",
  description: "Fixer provides expert fridge repair in Orleans. From cooling issues to ice maker leaks, we service LG, Samsung, Whirlpool & more — with same-day service and 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge not cooling enough",
    description: "In Orleans homes, this often happens after a power surge or when condenser coils get clogged. We'll get the temperature back to safe levels.",
  },
  {
    title: "Ice maker leaking water",
    description: "Overflowing or cracked lines are common in newer side-by-side models. We'll repair the leak before it damages your Orleans kitchen floor.",
  },
  {
    title: "Strange clicking noises",
    description: "Often a failing relay or compressor trying to start. We'll diagnose the noise and fix it quickly.",
  },
  {
    title: "Water dispenser not working",
    description: "Blocked filters or frozen water lines can cut the flow. We'll restore clean, cold water.",
  },
  {
    title: "Fridge running constantly",
    description: "If your refrigerator never shuts off, it's usually a thermostat or fan issue. Call us to save energy and keep food fresh.",
  },
];

const benefits = [
  "Local Orleans fridge specialists with years of experience",
  "Same-day and next-day service available",
  "90-day labour warranty on repairs and installations",
  "Transparent pricing, no hidden fees",
];

const serviceAreas = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day fridge repair in Orleans?",
    answer: "Often yes — call us early to check availability.",
  },
  {
    question: "Why is my fridge not cooling properly?",
    answer: "It could be a failing thermostat, compressor, or blocked airflow.",
  },
  {
    question: "Do you install new refrigerators?",
    answer: "Yes — we install fridges in Orleans using existing water and power connections.",
  },
  {
    question: "Do you serve areas near Orleans?",
    answer: "Yes — including Chapel Hill, Avalon, and Fallingbrook.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes — all fridge work is covered by our 90-day warranty.",
  },
];

export default function FridgeRepairOrleansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Fridge Repair in Orleans</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fridge running warm or ice maker refusing to work? Fixer Appliance Repair provides Orleans households with fast, reliable refrigerator service. Our local techs fix everything from faulty thermostats to broken seals, always with clear pricing and a 90-day warranty.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Service Now
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              We service major brands such as LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Fridge Issues We Fix in Orleans" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Fridge Installation in Orleans</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Looking for fridge installation in Orleans?
              </p>
              <p className="text-center">
                Before you invest in a new one, review our repair vs. replace guide — it may help you save money.
              </p>
              <p className="text-center">
                For new purchases, we provide fridge installation in Orleans. We'll connect, level, and test your unit using the existing water and electrical connections.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ No new plumbing or wiring included.
              </p>
              <div className="text-center mt-6">
                <Link href="/fridge-installation" className="btn-primary">
                  Learn More About Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Fridge" benefits={benefits} />

      <CTASection />

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Service Area</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services across the entire Orleans area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-800">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-700 mb-6">
            We also help customers in:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {nearbyAreas.map((area, index) => (
              <Link
                key={index}
                href={area.slug}
                className="flex items-center justify-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm"
              >
                <FaMapMarkerAlt className="text-primary-600 flex-shrink-0" />
                <span>Fridge Repair {area.name}</span>
              </Link>
            ))}
          </div>
          
          <p className="text-center">
            <Link href="/fridge-repair" className="text-primary-600 hover:text-primary-700 underline">
              For full coverage, visit our Fridge Repair Ottawa page
            </Link>
          </p>
        </div>
      </section>

      {/* Discover Orleans */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Discover Orleans While We Repair Your Fridge</h2>
          <p className="text-center text-gray-700 mb-8">Instead of waiting at home, try:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Petrie Island</h3>
              <p className="text-gray-600">Perfect for a walk along the water.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Shenkman Arts Centre</h3>
              <p className="text-gray-600">Shows, exhibits, and events.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Place d'Orleans</h3>
              <p className="text-gray-600">A hub for shopping and dining.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Check Orleans events this month
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Fridge Repair in Orleans</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Service */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Schedule Your Fridge Repair in Orleans</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Fridge not cooling properly? Don't wait — call Fixer Appliance Repair now:
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-xl font-semibold">Call/Text: 613-413-6969</p>
            <p className="text-xl">Email: service@fixerappliancerepair.ca</p>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Online
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Also Need Help With…</h2>
          <p className="text-center text-gray-700 mb-8">
            Our team handles more than fridges — here's what else we do in Orleans:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/orleans" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Orleans
            </Link>
            <Link href="/dryer-repair/orleans" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Orleans
            </Link>
            <Link href="/dishwasher-repair/orleans" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Orleans
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Orleans
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation Orleans
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            Looking for another service? We've got Orleans covered.
          </p>
        </div>
      </section>

    </>
  );
}
