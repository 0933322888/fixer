import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";

export const metadata: Metadata = {
  title: "Dryer Repair Stittsville – Local, Reliable Experts | Fixer",
  description: "Fixer provides trusted dryer repair in Stittsville. We fix heating, noise, and power issues for Whirlpool, LG, Samsung & more — with same-day service and warranty.",
};

const commonIssues = [
  {
    title: "Dryer runs but doesn't heat",
    description: "Faulty elements or thermostats are usually to blame.",
  },
  {
    title: "Dryer won't start at all",
    description: "We check door switches, fuses, and circuit boards.",
  },
  {
    title: "Dryer shuts off mid-cycle",
    description: "Often caused by overheating or motor issues.",
  },
  {
    title: "Dryer takes multiple cycles",
    description: "Clogged ducts or failing moisture sensors can extend drying time.",
  },
  {
    title: "Loud thumping noise",
    description: "Usually a sign of worn drum supports or broken rollers.",
  },
  {
    title: "Dryer smells smoky",
    description: "Could indicate burning lint or electrical issues — we clean and inspect.",
  },
  {
    title: "Drum turns slowly",
    description: "Could be a belt tension issue or motor fatigue.",
  },
  {
    title: "Clothes are too hot to touch",
    description: "May be a stuck thermostat or shorted relay.",
  },
  {
    title: "Dryer door won't close",
    description: "A latch or hinge may need adjusting or replacing.",
  },
  {
    title: "Dryer keeps running after cycle ends",
    description: "Faulty control board or stuck relay — we'll replace if needed.",
  },
];

const whyChooseUs = [
  "Local team, fast response in Stittsville",
  "Skilled in troubleshooting common dryer faults",
  "Clean and efficient repair with same-day options",
  "Honest service with no hidden fees",
  "Respectful of your home and time",
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
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const stittsvilleAttractions = [
  "Amberwood Village Trails – shady paths for a walk",
  "Quitters Coffee – friendly atmosphere and great brews",
  "Village Square Park – perfect for a short break outdoors",
];

const faqs = [
  {
    question: "Is dryer repair available in Jackson Trails and Timbermere?",
    answer: "Definitely — we serve all neighborhoods across Stittsville.",
  },
  {
    question: "Can you repair dryers that make loud noises?",
    answer: "Yes — noise often points to worn rollers, bearings, or belts.",
  },
  {
    question: "Do you service compact dryer models?",
    answer: "We do — especially in townhomes and condos.",
  },
  {
    question: "Which brands do you usually see in Stittsville?",
    answer: "Whirlpool, LG, Samsung, and Maytag are common in the area.",
  },
  {
    question: "What if I need the dryer repaired fast?",
    answer: "Call early and ask for priority scheduling — we'll do our best.",
  },
];

const relatedServices = [
  { name: "Washer Repair Stittsville", href: "/washer-repair/stittsville" },
  { name: "Dishwasher Repair Stittsville", href: "/dishwasher-repair/stittsville" },
  { name: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
  { name: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
  { name: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Dryer Installation Stittsville", href: "/dryer-installation" },
];

export default function DryerRepairStittsvillePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Reliable Dryer Repair Experts in Stittsville</h1>
            <p className="text-xl leading-relaxed mb-8">
              From a drum that won't spin to sensors that won't detect dryness, Fixer Appliance Repair helps Stittsville homeowners keep laundry day stress-free. Our team knows the area and provides fast, honest solutions. We repair LG, Whirlpool, GE, Maytag, Samsung, and Frigidaire dryers.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/stittsville" className="font-semibold hover:underline">
                Stittsville appliance repair page
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

      {/* Dryer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Dryer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new dryer? We also provide dryer installation in Stittsville with same-day service available in most areas.
          </p>
          <Link href="/dryer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Dryer Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Service Area: Stittsville and Nearby */}
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
              We also provide dryer repair services for homes in:
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
                👉 Need dryer help across Ottawa? Learn more about our{" "}
                <Link href="/dryer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dryer Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enjoy Stittsville as We Service Your Dryer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Enjoy Stittsville as We Service Your Dryer</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              No need to just wait at home — discover what's nearby:
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
                👉 Find what's going on this week:
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

      {/* FAQs */}
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

      {/* Book Your Dryer Repair in Stittsville */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Book Your Dryer Repair in Stittsville</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's get that dryer spinning again — reach out today.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-2xl">
              📞 Call or text: <a href="tel:613-413-6969" className="font-semibold hover:underline">613-413-6969</a>
            </p>
            <p className="text-xl">
              📧 Email: <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold hover:underline">service@fixerappliancerepair.ca</a>
            </p>
          </div>
        </div>
      </section>

      {/* Also Need Help With… */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With…</h2>
            <p className="text-center text-gray-700 mb-8">
              Looking for more than dryer service? Here's what else we offer in Stittsville:
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
              From dryers to dishwashers, we've got Stittsville covered.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your local dryer repair experts in Stittsville.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

