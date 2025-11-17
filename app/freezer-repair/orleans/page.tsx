import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Freezer Repair Orleans – Fast, Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Orleans. From frost buildup to leaks and noisy compressors, we service Samsung, Whirlpool, LG & more — with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Freezer not freezing properly",
    description: "In Orleans homes, this is often due to weak compressors, thermostat faults, or low refrigerant. We'll restore safe freezing temperatures.",
  },
  {
    title: "Frost building up on walls",
    description: "When defrost heaters or door gaskets fail, frost takes over. We'll repair the system and prevent ice overload.",
  },
  {
    title: "Water leaking inside drawers",
    description: "Blocked drains or defrost overflow are common. We'll clear the drain and stop leaks.",
  },
  {
    title: "Freezer running all the time",
    description: "Dirty coils or broken sensors force the unit to run non-stop. We'll fix it and cut your hydro bills.",
  },
  {
    title: "Unusual buzzing noises",
    description: "Relays and compressors often buzz before failing. We'll replace them before a total breakdown.",
  },
  {
    title: "Control panel flashing codes",
    description: "Samsung, LG, and Whirlpool freezers show error codes when parts fail. We'll decode and repair the problem.",
  },
];

const benefits = [
  "Local Orleans freezer repair and installation pros",
  "Same-day and next-day availability",
  "90-day labour warranty on all work",
  "Clear, upfront pricing with no surprises",
];

const serviceAreas = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const nearbyAreas = [
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
];

const faqs = [
  {
    question: "Can I get same-day freezer repair in Orleans?",
    answer: "Often yes — call early.",
  },
  {
    question: "Why is my freezer not cold enough?",
    answer: "It may be refrigerant flow, thermostat, or a sealed system issue.",
  },
  {
    question: "Do you install freezers?",
    answer: "Yes — with existing hookups.",
  },
  {
    question: "Do you service nearby areas?",
    answer: "Yes — including Chapel Hill, Avalon, and Fallingbrook.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes — 90 days on all labour.",
  },
];

const relatedServices = [
  { name: "Washer Repair in Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair in Ottawa", href: "/dryer-repair" },
  { name: "Dishwasher Repair in Ottawa", href: "/dishwasher-repair" },
  { name: "Fridge Repair in Ottawa", href: "/fridge-repair" },
  { name: "Oven Repair in Ottawa", href: "/oven-repair" },
  { name: "Freezer Installation in Ottawa", href: "/appliance-installation" },
];

export default function FreezerRepairOrleansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white py-20">
        <div className="container-custom text-center">
          <FaSnowflake className="text-6xl mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reliable Freezer Repair in Orleans
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Freezer frosting up, leaking water, or not keeping food cold? Fixer Appliance Repair provides fast, local service in Orleans with clear pricing and a 90-day guarantee. We repair all major freezer brands, including Samsung, Whirlpool, LG, GE, and Maytag.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Service Now
          </Link>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} heading="Common Freezer Issues We Fix in Orleans" />

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Freezer Installation in Orleans</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center">
                Looking for freezer installation in Orleans?
              </p>
              <p className="text-center">
                Before making the purchase, check our repair vs. replace guide — it helps compare costs and long-term value.
              </p>
              <p className="text-center">
                With your new unit ready, we provide freezer installation in Orleans. We'll set it up, balance it, and test it using your existing hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ We don't create new wiring or plumbing lines.
              </p>
              <div className="text-center mt-6">
                <Link href="/appliance-installation" className="btn-primary">
                  Learn More About Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

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

      {/* Discover Orleans */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Explore Orleans While We Fix Your Freezer</h2>
          <p className="text-center text-gray-700 mb-8">Here are a few things you can do nearby:</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Petrie Island</h3>
              <p className="text-gray-600">Unwind at scenic trails and beaches.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Shenkman Arts Centre</h3>
              <p className="text-gray-600">Catch a show.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Place d'Orleans</h3>
              <p className="text-gray-600">Shop and eat.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              See the latest happenings in Orleans this month
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">FAQ – Freezer Repair in Orleans</h2>
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Freezer Repair in Orleans</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Freezer not keeping food cold? Call Fixer Appliance Repair today to book service:
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
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With...</h2>
            <p className="text-center text-gray-700 mb-8">
              We do more than just freezer repair — check out our other Ottawa services:
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
