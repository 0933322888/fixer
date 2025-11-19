import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Barrhaven – Fast, Local Service | Fixer",
  description: "Fixer provides expert dishwasher repair in Barrhaven. We fix leaks, draining issues & error codes for Whirlpool, Samsung, Bosch & more — with same-day service & warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher not starting?",
    description: "In Barrhaven's newer homes, this often happens due to a tripped breaker or faulty latch. We'll diagnose the root cause.",
  },
  {
    title: "Not draining water",
    description: "A kinked hose or clogged filter leaves standing water. We'll clean it so drainage works properly.",
  },
  {
    title: "Strange squeaks or hums",
    description: "Bad motors or spray arm issues often create odd sounds. We'll silence them with the right fix.",
  },
  {
    title: "Water leaks during cycle",
    description: "Leaky connections or worn gaskets can cause puddles. We'll seal them before they damage your Barrhaven floors.",
  },
  {
    title: "Dishes not getting clean",
    description: "Low water pressure or detergent dispenser failures leave dishes greasy. We'll restore full performance.",
  },
  {
    title: "Error codes flashing",
    description: "Codes like E15 or OE are common in Samsung and Bosch models. We'll translate and fix the cause.",
  },
];

const whyChooseUs = [
  "Local Barrhaven team with deep dishwasher knowledge",
  "Same-day and next-day appointments available",
  "90-day labour warranty on all work",
  "Professional service with clear communication",
];

const neighborhoods = [
  "Chapman Mills",
  "Stonebridge",
  "Longfields",
  "Half Moon Bay",
  "Knollsbrook",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const barrhavenAttractions = [
  "Walter Baker Centre – sports and recreation.",
  "Chapman Mills – nature trails with river views.",
  "Marketplace Barrhaven – convenient shopping.",
];

const faqs = [
  {
    question: "Can I book a same-day dishwasher repair in Barrhaven?",
    answer: "Often yes — depending on current schedule.",
  },
  {
    question: "Why does my dishwasher smell bad even after a wash?",
    answer: "Usually from food buildup in filters or drains. We'll clean and fix it.",
  },
  {
    question: "Do you install dishwashers as well?",
    answer: "Yes — we provide installation in Barrhaven with your existing connections.",
  },
  {
    question: "Do you cover nearby areas outside Barrhaven?",
    answer: "Yes — including Stonebridge, Half Moon Bay, and Chapman Mills.",
  },
  {
    question: "Do you provide warranty coverage?",
    answer: "Yes — all dishwasher repairs and installs are backed by a 90-day warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Barrhaven", href: "/washer-repair/barrhaven" },
  { name: "Dryer Repair Barrhaven", href: "/dryer-repair/barrhaven" },
  { name: "Fridge Repair Barrhaven", href: "/fridge-repair/barrhaven" },
  { name: "Freezer Repair Barrhaven", href: "/freezer-repair/barrhaven" },
  { name: "Oven Repair Barrhaven", href: "/oven-repair/barrhaven" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Dishwasher Installation Barrhaven", href: "/appliance-installation/dishwasher" },
];

export default function DishwasherRepairbarrhavenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaUtensils className="text-[30px] mb-2 inline-block" /> Dishwasher Repair Barrhaven – Fast, Local Service</h1>
            <p className="text-xl leading-relaxed mb-8">
              A broken dishwasher in Barrhaven can disrupt family routines. Fixer Appliance Repair offers same-day service in many neighbourhoods, fixing everything from stuck latches to pump failures.
            </p>
            <p className="text-lg mb-6">
              We service most major models, including Samsung, Bosch, Whirlpool, LG, and Maytag.
            </p>
            <p className="text-lg">
              👉 For all appliance services nearby, see our{" "}
              <Link href="/barrhaven" className="font-semibold hover:underline">
                Local Barrhaven page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Dishwasher Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dishwasher Issues We Fix in Barrhaven</h2>
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

      {/* Dishwasher Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Dishwasher? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new dishwasher? We also provide dishwasher installation in Barrhaven with same-day service available in most areas.
          </p>
          <Link href="/appliance-installation/dishwasher" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Dishwasher Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Dishwasher" benefits={whyChooseUs} />

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
              Our mobile team also serves:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {nearbyAreas.map((area, index) => (
                <Link 
                  key={index} 
                  href={`/dishwasher-repair/${area.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-primary-50 transition-colors shadow-sm"
                >
                  <FaMapMarkerAlt className="text-primary-600 text-lg flex-shrink-0" />
                  <p className="text-gray-700 hover:text-primary-700 font-medium">{area.name}</p>
                </Link>
              ))}
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">
                For full coverage, visit our{" "}
                <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dishwasher Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do in Barrhaven */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Things to Do in Barrhaven While We Service Your Dishwasher</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Make use of the downtime:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {barrhavenAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                🔍 Discover Barrhaven events this month:
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

      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Schedule Your Dishwasher Repair in Barrhaven</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to help — call us today to book your dishwasher repair:
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
              Beyond dishwasher repair, we also provide these services in Barrhaven:
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
              From dishwashers to ovens, we've got Barrhaven covered.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your local dishwasher repair team in Barrhaven.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
