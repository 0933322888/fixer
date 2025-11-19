import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Vanier Dryer Repair – Expert Local Service | Fixer",
  description: "Fast, professional dryer repair in Vanier. Clear pricing, same-day availability in many neighbourhoods, and a 90-day workmanship guarantee.",
};

const commonIssues = [
  {
    title: "Dryer won't power up",
    description: "In older Vanier homes, wiring or breaker issues are frequent. If not electrical, it may be a bad start switch.",
  },
  {
    title: "Not heating properly",
    description: "Weak or no heat usually points to a burned-out coil or clogged ducts. We'll restore warmth.",
  },
  {
    title: "Squealing or scraping noise",
    description: "Rollers, bearings, or the idler pulley often wear out. We'll replace the faulty part.",
  },
  {
    title: "Drum won't rotate",
    description: "A broken belt or failing motor is the likely cause. We'll repair it fast.",
  },
  {
    title: "Takes ages to dry laundry",
    description: "Poor venting or sensor faults slow everything down. We'll clear the path and test airflow.",
  },
  {
    title: "Dryer shuts down too soon",
    description: "Overheating trips safety devices. We'll check for lint and bad thermostats.",
  },
  {
    title: "Musty smell in clothes",
    description: "Lint buildup inside can cause odors. We'll deep-clean for fresh results.",
  },
];

const whyChooseUs = [
  "Local Vanier technicians with in-depth dryer knowledge",
  "Same-day service in many Ottawa East neighbourhoods",
  "Upfront quotes so you always know the price in advance",
  "Prepared to complete most repairs in a single visit",
  "90-day warranty on all workmanship",
];

const neighborhoods = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const vanierAttractions = [
  "Richelieu Park – scenic urban forest.",
  "Museopark Vanier – history and culture.",
  "Beechwood Avenue – dining and shopping.",
];

const faqs = [
  {
    question: "Do you repair dryers in older Vanier homes and apartments?",
    answer: "Yes — we work on dryers in houses, condos, and rental units.",
  },
  {
    question: "Why won't my dryer start at all?",
    answer: "It could be a bad start switch, blown fuse, or motor issue.",
  },
  {
    question: "Do you also install dryers in Vanier?",
    answer: "Yes — we handle installation using the electrical hookups you already have.",
  },
  {
    question: "Do you work on all brands?",
    answer: "Yes — including Whirlpool, Maytag, Samsung, LG, and GE.",
  },
  {
    question: "What warranty do you provide?",
    answer: "Every dryer repair or install in Vanier is backed by our 90-day labour warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Vanier", href: "/washer-repair/vanier" },
  { name: "Dishwasher Repair Vanier", href: "/dishwasher-repair/vanier" },
  { name: "Fridge Repair Vanier", href: "/fridge-repair/vanier" },
  { name: "Freezer Repair Vanier", href: "/freezer-repair/vanier" },
  { name: "Oven Repair Vanier", href: "/oven-repair/vanier" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Dryer Installation Vanier", href: "/appliance-installation" },
];

export default function DryerRepairVanierPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaWind className="text-[30px] mb-2 inline-block" /> Local Dryer Repair Experts in Vanier</h1>
            <p className="text-xl leading-relaxed mb-8">
              When your Vanier dryer takes forever to finish or produces unusual smells, it's time to call Fixer Appliance Repair. With 15+ years of experience in Ottawa East, we provide trusted dryer repairs for apartments and houses alike — always with honest pricing and a 90-day guarantee. Brands we service include Whirlpool, Maytag, Samsung, LG, and GE.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your community, see our{" "}
              <Link href="/vanier" className="font-semibold hover:underline">
                Vanier appliance repair page
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
            Got a new dryer? We also provide dryer installation in Vanier with same-day service available in most areas.
          </p>
          <Link href="/appliance-installation/dryer" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
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
              We provide appliance repair services across the entire Vanier area, including:
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {neighborhoods.map((neighborhood, index) => (
                  <span key={index} className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                    {neighborhood}
                  </span>
                ))}
                <span className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                  and surrounding neighbourhoods
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
              We also repair dryers for customers in:
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
                👉 For city-wide service, visit our{" "}
                <Link href="/dryer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dryer Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enjoy Vanier While We Repair Your Dryer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Enjoy Vanier While We Repair Your Dryer</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Take some time to explore nearby:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {vanierAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                👉 Find Vanier events this month:
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

      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Schedule Your Dryer Repair in Vanier</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Need professional dryer repair? Contact Fixer Appliance Repair now:
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

