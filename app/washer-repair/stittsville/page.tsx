import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Washer Repair Stittsville – Fast, Local Experts | Fixer",
  description: "Need washer repair in Stittsville? Fixer provides same-day service, clear pricing, and repairs for all major brands — backed by a 90-day warranty. Call today!",
};

const commonIssues = [
  {
    title: "Not draining?",
    description: "Clogs in basement setups are common in newer homes — we'll check the pump, hose, and filter.",
  },
  {
    title: "Shaking or banging?",
    description: "We've seen plenty of spin-cycle rumbles in Stittsville's new-construction laundry rooms. Unbalanced loads? Worn suspension? We'll fix it.",
  },
  {
    title: "Error codes flashing?",
    description: "No need to Google them — we've seen them all: LE, OE, UE, F03, and more.",
  },
  {
    title: "Washer won't turn on?",
    description: "We check everything from door switches to control boards and provide a clear, fast solution.",
  },
  {
    title: "Leaks under or around the unit?",
    description: "We track down the source and stop it cold — cracked hose, loose seal, or pump leak.",
  },
  {
    title: "Door stuck shut?",
    description: "Front-loaders in many new homes love to lock up. We'll get it open and solve the problem for good.",
  },
];

const whyChooseUs = [
  "Local service tailored to newer homes",
  "Transparent pricing, no surprise charges",
  "Skilled with developer-grade washers and their common issues",
  "Same-day/next-day appointments available",
  "Friendly, respectful techs who keep things tidy",
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
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Arnprior", slug: "arnprior" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const stittsvilleAttractions = [
  "Amberwood Village Trails – a calm escape into nature",
  "Quitters Coffee – grab a latte and people-watch on the patio",
  "Village Square Park – a cozy green spot to relax",
];

const faqs = [
  {
    question: "What is the average washer repair cost in Stittsville?",
    answer: "The cost of washer repair depends on the exact issue and the parts required. Once we inspect your machine, we'll explain the problem clearly and let you know the best options before starting any work.",
  },
  {
    question: "Is it worth it to repair a washer?",
    answer: "Often yes — especially if it's under 10 years old and the issue is minor. But for older machines or major failures, replacement may be smarter. Check our repair vs. replace guide for more details.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "What is the most common washer issue you fix in Stittsville?",
    answer: "Clogged drain pumps and spin cycle imbalances in newer homes are common — especially on front-loaders with sensitive leveling.",
  },
  {
    question: "What to do if your washer isn't working at all?",
    answer: "First, check if it's under warranty — the manufacturer may offer a free repair or replacement. If not, call us. We'll diagnose it and explain your options.",
  },
  {
    question: "Can you install a new washer if mine can't be repaired?",
    answer: "Yes — we also offer professional washer installation in Stittsville.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Stittsville", href: "/dryer-repair/stittsville" },
  { name: "Dishwasher Repair Stittsville", href: "/dishwasher-repair/stittsville" },
  { name: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
  { name: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
  { name: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Washer Installation Stittsville", href: "/washer-installation" },
];

export default function WasherRepairStittsvillePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaTshirt className="text-[30px] mb-2 inline-block" /> Professional Washer Repair in Stittsville</h1>
            <p className="text-xl leading-relaxed mb-8">
              Tired of a washer that won't drain, keeps stopping mid-cycle, or shakes across the floor? Fixer Appliance Repair delivers professional washer service throughout Stittsville, with fast response and fair pricing. We fix Whirlpool, GE, Samsung, LG, Maytag, and Frigidaire machines — both top-loaders and front-loaders.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, visit our{" "}
              <Link href="/service-areas/stittsville" className="font-semibold hover:underline">
                Stittsville appliance repair page
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
            <h2 className="heading-md text-center mb-12">Common Washer Problems in Stittsville Homes</h2>
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
            <h2 className="heading-md text-center mb-6">Washer Installation in Stittsville</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Considering a new washer in Stittsville?</strong> Don't decide before checking our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it explains lifespan, costs, and when replacement makes sense.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                For new purchases, we handle washer installation in Stittsville. We'll hook up, level, and test your unit with the existing water and electrical setup.
              </p>
              <p className="text-gray-700 mb-6">
                👉 Please note: plumbing or new wiring isn't included.
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

      {/* Why Stittsville Calls Fixer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />
          </div>
        </div>
      </section>

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
              We also provide washer repair services for homes in:
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
                👉 Need washer service outside Stittsville? Learn more about our{" "}
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
            <h2 className="heading-md mb-4">Explore Stittsville While We Fix Your Washer</h2>
            <p className="text-lg text-gray-700 mb-6">
              Waiting for your laundry machine to be back on track? Spend some time around town:
            </p>
            <ul className="space-y-3 text-gray-700">
              {stittsvilleAttractions.map((attraction, index) => (
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

      {/* CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Call or Text to Schedule Your Repair</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Serving Stittsville and nearby communities — with fast, friendly, and fully insured washer repair.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-2xl">
              📞 <a href="tel:613-413-6969" className="font-semibold hover:underline">613-413-6969</a>
            </p>
            <p className="text-xl">
              📧 <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold hover:underline">service@fixerappliancerepair.ca</a>
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
              Looking for more than washer service? Here are our other options in Stittsville:
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
              From washers to all major appliances, we've got Stittsville covered.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your local washer repair experts in Stittsville.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
