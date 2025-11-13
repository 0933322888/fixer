import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Carleton Place Washer Repair – Dependable, Local Service | Fixer",
  description: "Local washer repair in Carleton Place. Same-day bookings, upfront pricing, and a 90-day guarantee. Fast, friendly, and professional care for your laundry appliance.",
};

const commonIssues = [
  {
    title: "Washer not switching on?",
    description: "In Carleton Place homes, this often follows a blown fuse or tripped breaker. If power isn't the problem, a faulty latch or start button might be. We'll diagnose and restore it quickly.",
  },
  {
    title: "Draining issues?",
    description: "Kinked hoses or clogged pumps are common in basement laundry setups. We'll inspect the drainage system so your washer empties correctly.",
  },
  {
    title: "Noisy spin cycles?",
    description: "Banging or squealing sounds usually point to worn bearings or shocks. We'll determine if it's just an unbalanced load or something that needs replacement.",
  },
  {
    title: "Door jammed closed?",
    description: "Modern energy-efficient washers in Carleton Place can sometimes lock up due to sensor faults. We'll open it safely and repair the mechanism.",
  },
  {
    title: "Water pooling near the washer?",
    description: "Leaky hoses or worn door gaskets are frequent culprits. We'll seal the leak and protect your Carleton Place home from water damage.",
  },
  {
    title: "Error messages?",
    description: "Codes on digital displays can be confusing. We'll translate the error and get to the root cause, whether it's Whirlpool, Maytag, or LG.",
  },
];

const whyChooseUs = [
  "Experienced washer repair specialists in Carleton Place",
  "Same-day scheduling available in most neighbourhoods",
  "Honest service with no hidden fees",
  "Backed by a 90-day warranty on all labour",
];

const neighborhoods = [
  "Carleton Place West",
  "Carleton Place East",
  "Riverside Park",
  "Mississippi Quays",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
];

const carletonPlaceAttractions = [
  "Riverside Park for peaceful views along the Mississippi River.",
  "Unique shops and dining in Downtown Carleton Place.",
  "Local history at the Carleton Place and Beckwith Heritage Museum.",
];

const faqs = [
  {
    question: "Can you come the same day in Carleton Place?",
    answer: "Yes, in most neighbourhoods — call to confirm.",
  },
  {
    question: "Do you repair all types of washers?",
    answer: "We fix both high-efficiency and traditional models, all brands included.",
  },
  {
    question: "Do you visit rural addresses outside Carleton Place?",
    answer: "Yes — we also serve Beckwith, Franktown, and surrounding areas.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Carleton Place", href: "/dryer-repair/carleton-place" },
  { name: "Dishwasher Repair Carleton Place", href: "/dishwasher-repair/carleton-place" },
  { name: "Fridge Repair Carleton Place", href: "/fridge-repair/carleton-place" },
  { name: "Freezer Repair Carleton Place", href: "/freezer-repair/carleton-place" },
  { name: "Oven Repair Carleton Place", href: "/oven-repair/carleton-place" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
  { name: "Washer Installation Carleton Place", href: "/washer-installation" },
];

export default function WasherRepairCarletonPlacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Trusted Washer Repair in Carleton Place</h1>
            <p className="text-xl leading-relaxed mb-8">
              Laundry piling up because your washer won't cooperate? Our skilled Carleton Place team provides reliable repairs for all major washer brands. We offer same-day service in many areas, clear upfront pricing, and a 90-day warranty on all labour — so you can have peace of mind long after the repair is done.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/service-areas/carleton-place" className="font-semibold hover:underline">
                Carleton Place appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Washer Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Carleton Place</h2>
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

      {/* Washer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Washer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new washer? We also provide washer installation in Carleton Place with same-day service available in most areas.
          </p>
          <Link href="/washer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Washer Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      {/* Service Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Carleton Place area, including:
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
              We also work with customers from:
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
                👉 Need washer help beyond Carleton Place? Learn more about our{" "}
                <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
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
            <h2 className="heading-md mb-4">Explore Carleton Place While We Fix Your Washer</h2>
            <p className="text-lg text-gray-700 mb-6">
              While we service your washer, check out:
            </p>
            <ul className="space-y-3 text-gray-700">
              {carletonPlaceAttractions.map((attraction, index) => (
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

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Schedule Your Washer Repair in Carleton Place</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Laundry piling up? Our Carleton Place washer repair experts are just a call away — schedule your visit today!
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
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With…</h2>
            <p className="text-center text-gray-700 mb-8">
              Washer repairs are just the start — here's what else we do in Carleton Place:
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
              Need more appliance help? We serve all of Carleton Place.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your washer repair pros in Carleton Place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
