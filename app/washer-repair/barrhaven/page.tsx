import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Barrhaven Washer Repair – Trusted Local Experts | Fixer",
  description: "Fast, efficient washer repair in Barrhaven. Same-day visits in many areas, no hidden fees, and a 90-day workmanship warranty. Call now for service.",
};

const commonIssues = [
  {
    title: "Washer won't start up?",
    description: "In Barrhaven's newer developments, this can follow a power surge or tripped breaker. If not, it may be a faulty control or latch. We'll identify and resolve the problem.",
  },
  {
    title: "Not draining fully?",
    description: "Drainage problems are often due to blocked pumps or hoses in basement setups. We'll clear them and restore proper flow.",
  },
  {
    title: "Noisy washer during spin?",
    description: "Shaking or squeaking often comes from worn shocks or loose parts. We'll balance your washer so it runs smoothly.",
  },
  {
    title: "Door won't unlock?",
    description: "Front-load machines in Barrhaven townhouses sometimes stick due to sensor glitches. We'll release the door and fix the lock issue.",
  },
  {
    title: "Water leaks?",
    description: "Loose hose fittings or worn gaskets are common leak sources. We'll find and repair the issue quickly.",
  },
  {
    title: "Error codes displayed?",
    description: "Flashing washer codes can be confusing. We'll translate and repair — whether it's Samsung, Whirlpool, or GE.",
  },
];

const whyChooseUs = [
  "Trusted washer repair pros serving Barrhaven homes",
  "Flexible scheduling, including many same-day slots",
  "Honest service with no hidden fees",
  "90-day guarantee on all labour performed",
];

const neighborhoods = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const barrhavenAttractions = [
  "Walter Baker Sports Centre – recreation and swimming.",
  "Chapman Mills Conservation Area – scenic river trails.",
  "Marketplace Barrhaven – shopping and dining hub.",
];

const faqs = [
  {
    question: "Can I get same-day washer service in Barrhaven?",
    answer: "Often yes — we can confirm availability when you call.",
  },
  {
    question: "Do you repair energy-efficient washers?",
    answer: "Yes — our technicians are trained on both standard and high-efficiency models.",
  },
  {
    question: "Do you service nearby areas outside Barrhaven?",
    answer: "Yes — including Stonebridge, Half Moon Bay, and surrounding communities.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Barrhaven", href: "/dryer-repair/barrhaven" },
  { name: "Dishwasher Repair Barrhaven", href: "/dishwasher-repair/barrhaven" },
  { name: "Fridge Repair Barrhaven", href: "/fridge-repair/barrhaven" },
  { name: "Freezer Repair Barrhaven", href: "/freezer-repair/barrhaven" },
  { name: "Oven Repair Barrhaven", href: "/oven-repair/barrhaven" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Washer Installation Barrhaven", href: "/washer-installation" },
];

export default function WasherRepairBarrhavenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaTshirt className="text-[30px] mb-2 inline-block" /> Washer Repair Services in Barrhaven</h1>
            <p className="text-xl leading-relaxed mb-8">
              If your washer stops mid-cycle, makes unusual noises, or leaks water, our Barrhaven repair team is ready to help. We service all makes and models, offering clear pricing, same-day availability in many neighbourhoods, and a 90-day workmanship guarantee on every repair.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/service-areas/barrhaven" className="font-semibold hover:underline">
                Barrhaven appliance repair page
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
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Barrhaven</h2>
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
            Got a new washer? We also provide washer installation in Barrhaven with same-day service available in most areas.
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
              We provide appliance repair services across the entire Barrhaven area, including:
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
              We also serve:
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
                👉 Need washer help across Ottawa? Learn more about our{" "}
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
            <h2 className="heading-md mb-4">Explore Barrhaven While We Fix Your Washer</h2>
            <p className="text-lg text-gray-700 mb-6">
              While we handle the repair, you could:
            </p>
            <ul className="space-y-3 text-gray-700">
              {barrhavenAttractions.map((attraction, index) => (
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

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Need Washer Repair in Barrhaven?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Fast service, clear pricing, and a 90-day guarantee — get in touch today!
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
              Beyond washer repair, we also provide these services in Barrhaven:
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
              Need appliance help today? We're ready in Barrhaven.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your local washer repair team in Barrhaven.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
