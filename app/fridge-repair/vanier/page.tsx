import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Fridge Repair Vanier – Local, Reliable Refrigerator Service | Fixer",
  description: "Fixer Appliance Repair provides expert fridge repair in Vanier. From cooling issues to leaks, noises, and control board failures, we service Whirlpool, Samsung, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge won't start",
    description: "In older Vanier homes, worn wiring or blown fuses often cause this. We'll test and restore power safely.",
  },
  {
    title: "Fridge too cold",
    description: "If items freeze in the fresh food section, it's often a stuck damper or bad thermostat. We'll adjust or replace the part.",
  },
  {
    title: "Water dispenser leaking",
    description: "Cracked lines or loose fittings drip water inside the door. We'll replace and reseal them.",
  },
  {
    title: "Loud knocking noises",
    description: "A failing compressor or loose fan blades often make knocking sounds. We'll find the source and repair it.",
  },
  {
    title: "Lights or display not working",
    description: "From simple bulbs to faulty control boards, we'll restore full function.",
  },
];

const benefits = [
  "Skilled Vanier fridge repair and installation pros",
  "Straightforward pricing before work begins",
  "90-day warranty on all completed jobs",
  "Same-day and next-day service availability",
];

const serviceAreas = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you work on fridges in Vanier apartments and homes?",
    answer: "Yes — houses, condos, and rentals.",
  },
  {
    question: "Why is my fridge light not working?",
    answer: "Could be a bulb, switch, or wiring issue.",
  },
  {
    question: "Do you install refrigerators?",
    answer: "Yes — using current electrical and water lines.",
  },
  {
    question: "Do you handle all brands?",
    answer: "Yes — Whirlpool, Maytag, Samsung, LG, GE, and more.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes — every fridge repair or install includes a 90-day warranty.",
  },
];

export default function FridgeRepairVanierPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><FaSnowflake className="text-[30px] mb-2 inline-block" /> Fridge Repair in Vanier</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Vanier residents count on Fixer Appliance Repair when refrigerators break down. From inconsistent temperatures to malfunctioning control boards, we offer professional service with same-day appointments in many neighbourhoods.
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
              We handle all major models, including Whirlpool, Maytag, Samsung, LG, and GE.
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Fridge Issues We Fix in Vanier" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Fridge Installation in Vanier</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Looking for fridge installation in Vanier?
              </p>
              <p className="text-center">
                Before you buy, review our repair vs. replace guide — it outlines costs, lifespan, and repair value.
              </p>
              <p className="text-center">
                For new units, we provide fridge installation in Vanier. We'll set it up and test it using your existing hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't add plumbing or high-voltage wiring.
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
            We provide appliance repair services across the entire Vanier area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-800">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-700 mb-6">
            We also provide fridge repair services in:
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
              For complete coverage, see our Fridge Repair Ottawa page
            </Link>
          </p>
        </div>
      </section>

      {/* Discover Vanier */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Discover Vanier While We Repair Your Fridge</h2>
          <p className="text-center text-gray-700 mb-8">Instead of waiting, enjoy:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Richelieu Park</h3>
              <p className="text-gray-600">Peaceful city escape.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Museopark</h3>
              <p className="text-gray-600">Local francophone history.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Beechwood Avenue</h3>
              <p className="text-gray-600">Cafés and restaurants.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See what's happening in Vanier
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Fridge Repair in Vanier</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Fridge Repair in Vanier</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't let food spoil — reach out now and get your fridge repair scheduled:
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
            Fridges aren't all we repair — here are our other services in Vanier:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/vanier" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Vanier
            </Link>
            <Link href="/dryer-repair/vanier" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Vanier
            </Link>
            <Link href="/dishwasher-repair/vanier" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Vanier
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Vanier
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation Vanier
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            From kitchens to laundry rooms, we've got Vanier covered.
          </p>
        </div>
      </section>

    </>
  );
}

