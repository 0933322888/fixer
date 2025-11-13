import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Washer Repair Nepean – Reliable Local Service | Fixer",
  description: "Fixer offers trusted washer repair in Nepean with same-day service, clear quotes, and a 90-day warranty. We fix leaks, errors, and power issues. Call today!",
};

const commonIssues = [
  {
    title: "Washer won't turn on?",
    description: "We check power supply, door latch, and control board issues — and fix them fast.",
  },
  {
    title: "Water not draining?",
    description: "Could be a clogged drain pump, kinked hose, or filter issue — all common in Nepean basements.",
  },
  {
    title: "Unit shaking or thumping?",
    description: "We inspect suspension, shocks, and flooring — especially in split-level or older homes.",
  },
  {
    title: "Stuck door?",
    description: "Front-loaders are notorious for lock issues. We'll get it open and repair the fault.",
  },
  {
    title: "Error codes like LE or OE?",
    description: "We've seen them all. We'll decode, repair, and test it fully.",
  },
  {
    title: "Washer leaking water?",
    description: "We'll find the source — hose, seal, or internal leak — and stop it before it causes floor damage.",
  },
];

const whyChooseUs = [
  "Trusted by homeowners across Nepean",
  "Same-day and evening appointment options",
  "90-day warranty on all labour",
  "Respectful, tidy technicians",
  "Honest advice before any repair",
];

const neighborhoods = [
  "Barrhaven East",
  "Centrepointe",
  "Merivale Gardens",
  "Manordale",
  "Tanglewood",
  "Fallowfield",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const nepeanAttractions = [
  "Andrew Haydon Park – beautiful parkland with views of the water",
  "Bruce Pit – a favorite spot for dog walkers and families",
  "Merivale Mall – shopping and quick eats in one place",
  "Art Is In Bakery – creative pastries and breads worth the trip",
];

const faqs = [
  {
    question: "Do you work in condos and townhomes?",
    answer: "Yes — we service stacked and compact models, including washer/dryer combo units.",
  },
  {
    question: "Is your work guaranteed?",
    answer: "Yes — all repairs come with a 90-day labour warranty.",
  },
  {
    question: "Do you offer evening appointments?",
    answer: "We do our best to offer flexible times — just ask when booking.",
  },
  {
    question: "Do you repair all brands?",
    answer: "Yes — we work with most major washer brands. Just let us know your model, and we'll confirm before booking.",
  },
  {
    question: "Should I repair or replace my washer?",
    answer: "Depends on age and condition. We'll give you honest advice — or you can check our repair vs. replace guide.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
  { name: "Dishwasher Repair Nepean", href: "/dishwasher-repair/nepean" },
  { name: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
  { name: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
  { name: "Oven Repair Nepean", href: "/oven-repair/nepean" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Washer Installation Nepean", href: "/washer-installation" },
];

export default function WasherRepairNepeanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Reliable Washer Repair in Nepean</h1>
            <p className="text-xl leading-relaxed mb-8">
              When your washer refuses to start, leaves suds behind, or makes unusual grinding noises, Fixer Appliance Repair can help. Our Nepean technicians offer same-day and next-day service, backed by honest estimates. We handle repairs for Samsung, Whirlpool, LG, Maytag, GE, and more.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, visit our{" "}
              <Link href="/nepean" className="font-semibold hover:underline">
                Nepean appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Washer Problems */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Problems in Nepean</h2>
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

      {/* Washer Installation */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Washer Installation in Nepean</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Is your old washer giving up in Nepean?</strong> Before you rush to replace it, take a look at our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it may help you save money.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If replacement is the way, we also provide washer installation in Nepean. We'll connect and test it using the existing water and electrical hookups.
              </p>
              <p className="text-gray-700 mb-6">
                👉 We don't run new plumbing lines or high-voltage circuits.
              </p>
              <div className="text-center">
                <Link href="/washer-installation" className="btn-primary">
                  Learn more about Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      {/* Service Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area: Nepean and Nearby</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Nepean area, including:
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
              Our team also serves nearby communities like:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {nearbyAreas.map((area, index) => (
                <Link 
                  key={index} 
                  href={`/washer-repair/${area.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors shadow-sm"
                >
                  <FaMapMarkerAlt className="text-primary-600 text-lg flex-shrink-0" />
                  <p className="text-gray-700 hover:text-primary-700 font-medium">{area.name}</p>
                </Link>
              ))}
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">
                👉 Looking for washer service across the city? Learn more about our{" "}
                <Link href="/service-areas/nepean" className="text-primary-600 hover:text-primary-700 font-semibold">
                  washer repair in Ottawa
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Explore Nepean While We Repair Your Washer</h2>
            <p className="text-lg text-gray-700 mb-6">
              Waiting for the laundry to be back on track? Take a little break nearby:
            </p>
            <ul className="space-y-3 text-gray-700">
              {nepeanAttractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Want to catch a live event or exhibit? Check what's happening this week:
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 font-medium ml-2 hover:underline"
              >
                Ottawa Tourism Events
              </a>
            </p>
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

      {/* Schedule Washer Repair */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Schedule Washer Repair in Nepean</h2>
          <div className="space-y-4 mb-8">
            <p className="text-2xl">
              📞 Call/Text: <a href="tel:613-413-6969" className="font-semibold hover:underline">613-413-6969</a>
            </p>
            <p className="text-xl">
              📧 Email: <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold hover:underline">service@fixerappliancerepair.ca</a>
            </p>
          </div>
          <p className="text-lg">
            Serving: Barrhaven, Craig Henry, Centrepointe, Tanglewood, Merivale, and nearby.
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With…</h2>
            <p className="text-center text-gray-700 mb-8">
              We handle more than just washers — here are our other services in Nepean:
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
            <p className="text-center text-gray-700 mt-8">
              Need a different appliance fixed? We're ready to help in Nepean.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your reliable washer repair team in Nepean.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
