import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Dryer Service in Mississippi Mills – Reliable Local Experts | Fixer",
  description: "Skilled dryer repair in Mississippi Mills. Transparent pricing, same-day bookings in many areas, and a 90-day labour warranty.",
};

const commonIssues = [
  {
    title: "Dryer won't turn on",
    description: "In rural Mississippi Mills homes, voltage fluctuations or worn switches often cause this. We'll troubleshoot and repair.",
  },
  {
    title: "Low or no heat",
    description: "Heating elements wear out, and clogged outdoor vents are common in country homes. We'll restore heat safely.",
  },
  {
    title: "Excessive rattling",
    description: "Loose rollers or bad bearings make dryers noisy. We'll inspect and swap worn parts.",
  },
  {
    title: "Drum stuck",
    description: "A snapped belt or bad motor can leave laundry sitting wet. We'll replace or repair as needed.",
  },
  {
    title: "Takes hours to dry clothes",
    description: "Restricted venting is the usual suspect. We'll clear ducts and improve airflow.",
  },
  {
    title: "Dryer keeps shutting off",
    description: "Overheating or faulty thermostats cut cycles short. We'll handle both.",
  },
  {
    title: "Musty or burnt smell",
    description: "Lint trapped inside the cabinet or vent can create odors. We'll deep-clean and ensure safe operation.",
  },
];

const whyChooseUs = [
  "Skilled local technicians familiar with all major dryer brands",
  "Prompt service, often available the same day",
  "Honest service with no hidden fees",
  "Friendly, professional team based in the Ottawa Valley",
  "Backed by a 90-day labour guarantee",
];

const neighborhoods = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const mississippiMillsAttractions = [
  "Walk by the water on the Almonte Riverwalk.",
  "Discover trails and heritage at Mill of Kintail.",
  "Browse shops and stop for coffee in Downtown Almonte.",
];

const faqs = [
  {
    question: "Do you offer dryer repair in rural Mississippi Mills?",
    answer: "Yes — we regularly service homes in Almonte, Appleton, and nearby areas.",
  },
  {
    question: "Why does my dryer take too long to dry clothes?",
    answer: "Blocked vents, bad sensors, or a weak element often cause this.",
  },
  {
    question: "Do you handle both gas and electric dryers?",
    answer: "We service electric dryers only — no gas appliances.",
  },
  {
    question: "Can you install a new dryer I just purchased?",
    answer: "Yes, we handle installation using your existing electrical setup.",
  },
  {
    question: "Do you provide upfront pricing?",
    answer: "Always — you'll know the cost before we begin.",
  },
];

const relatedServices = [
  { name: "Washer Repair Mississippi Mills", href: "/washer-repair/mississippi-mills" },
  { name: "Dishwasher Repair Mississippi Mills", href: "/dishwasher-repair/mississippi-mills" },
  { name: "Fridge Repair Mississippi Mills", href: "/fridge-repair/mississippi-mills" },
  { name: "Freezer Repair Mississippi Mills", href: "/freezer-repair/mississippi-mills" },
  { name: "Oven Repair Mississippi Mills", href: "/oven-repair/mississippi-mills" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Dryer Installation Mississippi Mills", href: "/dryer-installation" },
];

export default function DryerRepairMississippiMillsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaWind className="text-[30px] mb-2 inline-block" /> Local Dryer Repair Specialists in Mississippi Mills</h1>
            <p className="text-xl leading-relaxed mb-8">
              In Mississippi Mills, a broken dryer can mean more than inconvenience — especially in rural homes where line-drying isn't an option. Fixer Appliance Repair fixes everything from faulty thermostats to worn belts, with same-day appointments often available in Almonte, Pakenham, and nearby communities. Our technicians service popular brands such as Whirlpool, Maytag, Samsung, LG, and GE.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/mississippi-mills" className="font-semibold hover:underline">
                Mississippi Mills appliance repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Dryer Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dryer Issues We Fix in Mississippi Mills</h2>
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
            Got a new dryer? We also provide dryer installation in Mississippi Mills with same-day service available in most areas.
          </p>
          <Link href="/dryer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
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
              We provide appliance repair services across the entire Mississippi Mills area, including:
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
              We also help residents in:
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

      {/* Enjoy Mississippi Mills While We Repair Your Dryer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Enjoy Mississippi Mills While We Repair Your Dryer</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Don't just wait at home — take a little break:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {mississippiMillsAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                👉 Find events in Mississippi Mills:
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
          <h2 className="heading-md mb-6 text-white">Schedule Your Dryer Repair in Mississippi Mills</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Need fast dryer repair? Our local techs have you covered. Contact Fixer Appliance Repair:
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
              Dryer repair is just the start — here are other services in Mississippi Mills:
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
              From Almonte to Appleton, we're here to help.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your trusted dryer repair team in Mississippi Mills.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

