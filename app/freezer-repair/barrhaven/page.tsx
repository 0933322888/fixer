import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Freezer Repair Barrhaven – Upright & Chest Freezers Fixed Fast | Fixer",
  description: "Fixer Appliance Repair offers freezer repair in Barrhaven. From frost buildup and leaks to noisy compressors and uneven cooling, we service Whirlpool, LG, Samsung, GE & more. Same-day local service with a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not cold enough",
    description: "In Barrhaven townhomes, airflow issues or weak compressors often cause warm spots. We'll restore freezing quickly.",
  },
  {
    title: "Ice buildup on shelves",
    description: "Door gaskets leaking air often create frost. We'll reseal the door to keep frost out.",
  },
  {
    title: "Freezer leaking water",
    description: "Blocked defrost drains push water onto floors. We'll clear them and prevent damage.",
  },
  {
    title: "Unit runs too loud",
    description: "Fans, bearings, or compressors sometimes roar when failing. We'll silence the noise.",
  },
  {
    title: "Food freezing unevenly",
    description: "Sensors or fans may be misreading temperatures. We'll adjust or replace them.",
  },
  {
    title: "Door switch not working",
    description: "If the light stays off or the fan won't stop, the switch may be bad. We'll test and replace it.",
  },
];

const benefits = [
  "Local Barrhaven team with deep freezer repair knowledge",
  "Same-day and next-day service slots available",
  "90-day warranty on all jobs",
  "Professional, reliable service with clear communication",
];

const serviceAreas = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I book same-day freezer repair in Barrhaven?",
    answer: "Yes — subject to schedule.",
  },
  {
    question: "Why does my freezer run constantly?",
    answer: "Dirty coils, bad sensors, or refrigerant issues.",
  },
  {
    question: "Do you provide freezer installation?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you serve nearby areas?",
    answer: "Yes — Stonebridge, Half Moon Bay, Chapman Mills.",
  },
  {
    question: "Do you provide upfront pricing?",
    answer: "Yes — always before work.",
  },
];

export default function FreezerRepairBarrhavenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fast Freezer Repair for Barrhaven Families
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From faulty seals to units that over-freeze, Fixer Appliance Repair provides quick, professional freezer repair in Barrhaven. Same-day visits are available in many neighbourhoods, backed by a 90-day warranty.
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
              Brands we repair include LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Common Freezer Issues We Fix in Barrhaven</h2>
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
            <h2 className="heading-md text-center mb-8">Freezer Installation in Barrhaven</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Upgrading your freezer in Barrhaven?
              </p>
              <p className="text-center">
                Check our repair vs. replace guide — it explains costs and expected lifespan.
              </p>
              <p className="text-center">
                For new appliances, we provide freezer installation in Barrhaven. We'll set it up and test it with your existing power connections.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't install new circuits or plumbing.
              </p>
              <div className="text-center mt-6">
                <Link href="/freezer-installation" className="btn-primary">
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
            We provide appliance repair services across the entire Barrhaven area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-800">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-700 mb-6">
            We also provide freezer repair services in:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {nearbyAreas.map((area, index) => (
              <Link
                key={index}
                href={area.slug}
                className="flex items-center justify-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm"
              >
                <FaMapMarkerAlt className="text-primary-600 flex-shrink-0" />
                <span>Freezer Repair {area.name}</span>
              </Link>
            ))}
          </div>
          
          <p className="text-center">
            <Link href="/freezer-repair" className="text-primary-600 hover:text-primary-700 underline">
              For complete coverage, see our Freezer Repair Ottawa page
            </Link>
          </p>
        </div>
      </section>

      {/* Discover Barrhaven */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Explore Barrhaven While We Fix Your Freezer</h2>
          <p className="text-center text-gray-700 mb-8">Why not take a quick outing?</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Walter Baker Centre</h3>
              <p className="text-gray-600">Pool, skating, and more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Chapman Mills</h3>
              <p className="text-gray-600">Relaxing riverfront paths.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Marketplace Barrhaven</h3>
              <p className="text-gray-600">Shop and grab a bite.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See upcoming events in Barrhaven
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Freezer Repair in Barrhaven</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Freezer Repair in Barrhaven</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're here to help — book your freezer repair appointment today:
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
            Beyond freezer repair, we also provide these services in Barrhaven:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair/barrhaven" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair Barrhaven
            </Link>
            <Link href="/dryer-repair/barrhaven" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair Barrhaven
            </Link>
            <Link href="/dishwasher-repair/barrhaven" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair Barrhaven
            </Link>
            <Link href="/fridge-repair/barrhaven" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Repair Barrhaven
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair Barrhaven
            </Link>
            <Link href="/freezer-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Freezer Installation Barrhaven
            </Link>
          </div>
          <p className="text-center text-gray-700 mt-8">
            Need quick appliance help? We're ready in Barrhaven.
          </p>
        </div>
      </section>
    </>
  );
}
