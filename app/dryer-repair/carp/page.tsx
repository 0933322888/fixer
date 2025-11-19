import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Dryer Repair Carp – Fast, Reliable Service for Homes & Farms | Fixer",
  description: "Fixer provides trusted dryer repair in Carp for rural homes and farms. We fix heating, noise, and power issues with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Dryer won't turn on",
    description: "Check for faulty wiring or blown fuses — we'll restore power.",
  },
  {
    title: "Dryer overheats",
    description: "Bad thermostats or blocked vents may trigger safety shutdowns.",
  },
  {
    title: "Clothes still wet after cycle",
    description: "Sensor or heating element issues might be to blame.",
  },
  {
    title: "Dryer shakes during use",
    description: "Loose parts or leveling issues — we stabilize the unit.",
  },
  {
    title: "Makes rattling or banging",
    description: "Worn drum rollers or loose internal components often cause noise.",
  },
  {
    title: "Burning odor during drying",
    description: "Lint or wiring problems can be dangerous — we clean and repair.",
  },
  {
    title: "Drum not spinning",
    description: "Likely due to a broken belt or motor failure — we replace and test.",
  },
  {
    title: "Dryer stops after a few minutes",
    description: "Could be a failing motor or overheating sensor.",
  },
  {
    title: "Dryer hums but doesn't start",
    description: "Indicates motor start capacitor or switch trouble.",
  },
  {
    title: "Control panel flickering",
    description: "A power supply or interface board issue — we diagnose it quickly.",
  },
];

const whyChooseUs = [
  "Professional service for both homes and farms",
  "Carp's go-to team for electric dryer repair",
  "Clean, respectful service every time",
  "We bring parts to you — no long waits",
  "Honest advice with no pressure",
];

const neighborhoods = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const carpAttractions = [
  "Carp Farmers' Market – one of the best in Ontario",
  "Diefenbunker Cold War Museum – unique and fascinating",
  "Rural Art Studios or seasonal markets",
  "Carp Ridge EcoWellness Centre – nature walks, spa, and more",
];

const faqs = [
  {
    question: "Do you fix dryers in Carp Village and Huntley?",
    answer: "Yes — we serve both central Carp and surrounding rural areas like Huntley.",
  },
  {
    question: "My dryer heats but doesn't spin — can you help?",
    answer: "Absolutely. That's usually a drive belt or motor issue.",
  },
  {
    question: "Do you repair older Whirlpool or GE dryers?",
    answer: "Yes — we handle both newer and older model repairs.",
  },
  {
    question: "Can I schedule a visit outside business hours in Carp?",
    answer: "Sometimes — just let us know and we'll do our best to accommodate.",
  },
  {
    question: "Do you also install new dryers?",
    answer: "Yes, we offer full uninstall/install services for electric dryers.",
  },
];

const relatedServices = [
  { name: "Washer Repair Carp", href: "/washer-repair/carp" },
  { name: "Dishwasher Repair Carp", href: "/dishwasher-repair/carp" },
  { name: "Fridge Repair Carp", href: "/fridge-repair/carp" },
  { name: "Freezer Repair Carp", href: "/freezer-repair/carp" },
  { name: "Oven Repair Carp", href: "/oven-repair/carp" },
  { name: "Cooktop Repair Carp", href: "/cooktop-repair/carp" },
  { name: "Microwave Repair Carp", href: "/microwave-repair" },
  { name: "Dryer Installation Carp", href: "/dryer-installation" },
];

export default function DryerRepairCarpPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaWind className="text-[30px] mb-2 inline-block" /> Fast & Friendly Dryer Repair in Carp</h1>
            <p className="text-xl leading-relaxed mb-8">
              Dryer overheating, shutting off early, or making a grinding noise? In Carp, Fixer Appliance Repair delivers tailored service for rural homes and farmhouses. No fuss, just reliable local repairs. We work with leading brands such as GE, Whirlpool, Samsung, Maytag, and LG.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/carp" className="font-semibold hover:underline">
                Carp appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      {/* Dryer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Dryer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new dryer? We also provide dryer installation in Carp with same-day service available in most areas.
          </p>
          <Link href="/dryer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Dryer Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Service Area: Carp and Nearby */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Service Area: Carp and Nearby</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Carp area, including:
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {neighborhoods.map((neighborhood, index) => (
                  <span key={index} className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                    {neighborhood}
                  </span>
                ))}
                <span className="px-4 py-2 bg-primary-50 text-gray-900 rounded-lg">
                  and surrounding rural neighbourhoods
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

      {/* Explore Carp While We Fix... */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Explore Carp While We Fix...</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Waiting on your dryer repair? Make the most of your time in Carp:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {carpAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                👉 Find out what's on this week:
              </p>
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Events in Carp
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

      {/* Book Your Dryer Repair in Carp */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Book Your Dryer Repair in Carp</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Serving all of Carp and rural areas nearby — get your dryer fixed fast.
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
              Dryer repair is just one part of what we do — here are other services in Carp:
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
              Need service beyond dryers? We're here to help in Carp.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your trusted dryer repair team in Carp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

