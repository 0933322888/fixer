import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Stittsville – Local Experts You Can Trust | Fixer",
  description: "Fixer offers fast dishwasher repair in Stittsville. We fix leaks, draining issues & error codes for Whirlpool, Samsung, LG & more — with a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher hums but won't start",
    description: "Likely a jammed motor or relay fault.",
  },
  {
    title: "Door won't stay shut",
    description: "Worn latch or misaligned strike — we replace and align.",
  },
  {
    title: "Cycle gets stuck halfway",
    description: "Sensor issues or bad logic board.",
  },
  {
    title: "Leaks during drain cycle",
    description: "Could be a cracked hose or faulty seal.",
  },
  {
    title: "Dishes don't dry",
    description: "We test and replace faulty heating elements.",
  },
  {
    title: "Smells bad after running",
    description: "Bacteria buildup in filters or drain line — we clean it.",
  },
  {
    title: "Touch buttons don't work",
    description: "Touchpad or control board likely needs service.",
  },
  {
    title: "Upper rack not cleaning",
    description: "We fix weak spray pressure or clogged arms.",
  },
  {
    title: "Loud clicking sounds",
    description: "We check solenoid valves and drive motors.",
  },
  {
    title: "Water backing up into tub",
    description: "We inspect the check valve and drain path.",
  },
];

const whyChooseUs = [
  "Prompt service across all of Stittsville",
  "Skilled with new and older dishwasher models",
  "Accurate troubleshooting and honest advice",
  "No pressure, no unnecessary parts",
  "Friendly help, always on time",
];

const neighborhoods = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const stittsvilleAttractions = [
  "Amberwood Village Trails – nature walks right in town",
  "Quitters Coffee – beloved spot for locals",
  "Village Square Park – easy to reach and relaxing",
];

const faqs = [
  {
    question: "Do you fix dishwashers in Jackson Trails and Timbermere?",
    answer: "Yes — we often repair appliances in Jackson Trails, Timbermere, and the rest of Stittsville.",
  },
  {
    question: "How quickly can I book an appointment in Stittsville?",
    answer: "Usually within 48 hours. Emergency slots may be available.",
  },
  {
    question: "Can you fix dishwashers that don't drain or start?",
    answer: "Yes — we troubleshoot power, drain, and control board issues.",
  },
  {
    question: "What brands do you work with?",
    answer: "We repair most major dishwasher brands including Samsung, GE, and Whirlpool.",
  },
  {
    question: "Do you remove old units before installing a new one?",
    answer: "Yes — our techs will safely uninstall and install your new dishwasher.",
  },
];

const relatedServices = [
  { name: "Washer Repair Stittsville", href: "/washer-repair/stittsville" },
  { name: "Dryer Repair Stittsville", href: "/dryer-repair/stittsville" },
  { name: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
  { name: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
  { name: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Dishwasher Installation Stittsville", href: "/dishwasher-installation" },
];

export default function DishwasherRepairStittsvillePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Stittsville's Local Dishwasher Repair Specialists</h1>
            <p className="text-xl leading-relaxed mb-8">
              If your dishwasher stops mid-cycle, won't drain, or leaves residue, Fixer Appliance Repair has you covered in Stittsville. We pride ourselves on friendly, no-pressure service.
            </p>
            <p className="text-lg mb-6">
              We service Whirlpool, Maytag, Samsung, GE, Bosch, LG, and more.
            </p>
            <p className="text-lg">
              👉 For all appliance services nearby, see our{" "}
              <Link href="/stittsville" className="font-semibold hover:underline">
                Local Stittsville page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems We Fix */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Problems We Fix</h2>
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

      {/* Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Installation Services</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Replacing a dishwasher in Stittsville?</strong> First, see our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it shows when repair may be more cost-effective.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                For new units, we provide dishwasher installation in Stittsville. We'll hook it up to the existing water and power supply, test for leaks, and ensure it runs smoothly.
              </p>
              <p className="text-gray-700 mb-6">
                👉 We don't add plumbing or high-voltage wiring.
              </p>
              <div className="text-center">
                <Link href="/dishwasher-installation" className="btn-primary">
                  Learn more about Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Dishwasher" benefits={whyChooseUs} />

      {/* Service Area */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area: Stittsville and Nearby</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Stittsville area, including:
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
              Just outside Stittsville? We also visit:
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
                For city-wide service, visit our{" "}
                <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dishwasher Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do in Stittsville */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Things to Do in Stittsville While We Repair Your Dishwasher</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Use the time to explore the neighborhood a bit:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {stittsvilleAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                🔍 Check what's happening nearby:
              </p>
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Events in Stittsville
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Book Your Dishwasher Repair in Stittsville</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let the dishes pile up — contact Fixer now for friendly, local service in Stittsville.
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
              Looking beyond dishwashers? Here's what else we service in Stittsville:
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
              From kitchens to laundry rooms, we've got Stittsville covered.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your local dishwasher repair experts in Stittsville.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
