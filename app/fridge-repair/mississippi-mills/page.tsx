import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Fridge Repair Mississippi Mills – Reliable Service in Almonte & Beyond | Fixer",
  description: "Fixer provides expert fridge repair in Mississippi Mills. From cooling issues to leaks and noisy compressors, we service Whirlpool, LG, Samsung & more — with same-day local service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Fridge too warm",
    description: "In rural Mississippi Mills homes, clogged vents or broken fans often stop air from circulating. We'll restore cooling fast.",
  },
  {
    title: "Freezer frosting up",
    description: "Heavy ice buildup points to a defrost system failure. We'll repair heaters or sensors so frost stays under control.",
  },
  {
    title: "Door seals worn out",
    description: "When gaskets don't seal, cold air escapes and hydro bills climb. We'll replace them with factory-fit parts.",
  },
  {
    title: "Loud buzzing or humming",
    description: "Motors and compressors sometimes get noisy before failing. We'll catch the problem early and prevent a breakdown.",
  },
  {
    title: "Water pooling inside fridge",
    description: "A clogged defrost drain often leaves puddles under drawers. We'll clear it and stop leaks for good.",
  },
];

const benefits = [
  "Trusted fridge repair & installation pros serving Mississippi Mills homes",
  "Clear estimates before we begin",
  "Fast response — often same or next day",
  "All work backed by a 90-day warranty",
];

const serviceAreas = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you service fridges in rural Mississippi Mills?",
    answer: "Yes — including Almonte, Appleton, and nearby areas.",
  },
  {
    question: "Why is my fridge making loud humming noises?",
    answer: "It may be the fan motor, compressor, or condenser coils.",
  },
  {
    question: "Do you handle fridge installation?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you repair all fridge brands?",
    answer: "Yes — from Whirlpool and LG to GE and Samsung.",
  },
  {
    question: "Do you provide upfront pricing?",
    answer: "Always — no hidden fees.",
  },
];

export default function FridgeRepairMississippiMillsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fridge Repair in Mississippi Mills
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            In Mississippi Mills, a broken fridge can quickly turn into wasted groceries. Whether it's uneven cooling, a noisy compressor, or water leaking onto the floor, Fixer Appliance Repair is here to help. Our team offers rural-friendly service across Almonte, Pakenham, and Clayton.
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
              We repair popular brands including Whirlpool, Frigidaire, LG, GE, and Samsung.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Common Fridge Issues We Fix in Mississippi Mills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{issue.title}</h3>
                <p className="text-gray-600">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Fridge Installation in Mississippi Mills</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Replacing your fridge in Mississippi Mills?
              </p>
              <p className="text-center">
                Before buying, see our repair vs. replace guide — it shows when a repair is better value.
              </p>
              <p className="text-center">
                Already purchased a new fridge? We provide installation in Mississippi Mills. Our team connects and tests it with your current hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't install new plumbing or high-voltage wiring.
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

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaCheckCircle className="text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Service Area</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide appliance repair services across the entire Mississippi Mills area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
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
              For full coverage, visit our Fridge Repair Ottawa page
            </Link>
          </p>
        </div>
      </section>

      {/* Discover Mississippi Mills */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Discover Mississippi Mills While We Repair Your Fridge</h2>
          <p className="text-center text-gray-700 mb-8">Here are a few ideas for your wait:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Almonte Riverwalk</h3>
              <p className="text-gray-600">Take in the scenery along the river.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Mill of Kintail</h3>
              <p className="text-gray-600">Trails and heritage buildings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Downtown Almonte</h3>
              <p className="text-gray-600">Shop and grab a snack.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Check Mississippi Mills events
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Fridge Repair in Mississippi Mills</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Fridge Repair in Mississippi Mills</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Serving Almonte, Appleton, and more — schedule your fridge service with us today:
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
            Fridges are just the beginning — here are our other services in Mississippi Mills:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/mississippi-mills" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Mississippi Mills
            </Link>
            <Link href="/dryer-repair/mississippi-mills" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Mississippi Mills
            </Link>
            <Link href="/dishwasher-repair/mississippi-mills" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Mississippi Mills
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Mississippi Mills
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation Mississippi Mills
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            From Almonte to Appleton, we've got you covered.
          </p>
        </div>
      </section>

      <MapSection />
    </>
  );
}
