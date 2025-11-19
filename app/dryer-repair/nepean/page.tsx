import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Dryer Repair Nepean – Fast, Professional Service | Fixer",
  description: "Need dryer repair in Nepean? Fixer provides same-day service, repairs for Whirlpool, Samsung, LG & more, plus a 90-day warranty. Call today for reliable help!",
};

const commonIssues = [
  {
    title: "Dryer doesn't heat up",
    description: "Heating coil or thermal fuse might be burned out — we test and replace.",
  },
  {
    title: "Dryer starts, then stops",
    description: "Moisture sensor or safety thermostat could be the issue.",
  },
  {
    title: "Dryer won't turn on",
    description: "Door switch, control panel, or fuse may need attention.",
  },
  {
    title: "Dryer makes screeching noise",
    description: "Worn drum glides or support rollers are often responsible.",
  },
  {
    title: "Dryer takes forever to finish",
    description: "We inspect airflow and heating components.",
  },
  {
    title: "Burning plastic smell",
    description: "Usually caused by melted wiring or clogged vents.",
  },
  {
    title: "Dryer shuts off randomly",
    description: "Overheating sensor or loose wiring may be triggering interruptions.",
  },
  {
    title: "Clothes remain damp",
    description: "Inefficient spinning or low heat — we fix both.",
  },
  {
    title: "Buttons don't respond",
    description: "Faulty UI boards or touchpad wear may be the issue.",
  },
  {
    title: "Drum won't rotate",
    description: "Could be a broken drive belt or faulty motor — we repair on-site.",
  },
];

const whyChooseUs = [
  "Nepean's own experts in appliance repair",
  "Same-day bookings with no travel charges",
  "Repairs backed by a 90-day labour warranty",
  "We fix most makes and models",
  "Honest service and no mess left behind",
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
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const nepeanAttractions = [
  "Andrew Haydon Park – lakeside paths and picnic spots",
  "Bruce Pit – leash-free trails where locals love to walk their dogs",
  "Merivale Mall – a practical stop for shops and dining",
  "Art Is In Bakery – artisan bread and sandwiches with flair",
];

const faqs = [
  {
    question: "Do you fix dryers in Centrepointe and Craig Henry?",
    answer: "Yes — those are among our most frequently serviced areas in Nepean.",
  },
  {
    question: "My dryer isn't drying clothes completely. Can you fix that?",
    answer: "Yes — it may be a sensor or vent issue. We'll find the cause.",
  },
  {
    question: "How long do dryer repairs take in Nepean?",
    answer: "Most take under 90 minutes, depending on parts.",
  },
  {
    question: "Do you offer service on weekends?",
    answer: "We offer limited weekend slots — contact us for availability.",
  },
  {
    question: "Do you clean or inspect dryer vents?",
    answer: "We check airflow and blockages but don't do full vent cleaning.",
  },
];

const relatedServices = [
  { name: "Washer Repair Nepean", href: "/washer-repair/nepean" },
  { name: "Dishwasher Repair Nepean", href: "/dishwasher-repair/nepean" },
  { name: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
  { name: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
  { name: "Oven Repair Nepean", href: "/oven-repair/nepean" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Dryer Installation Nepean", href: "/dryer-installation" },
];

export default function DryerRepairNepeanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaWind className="text-[30px] mb-2 inline-block" /> Professional Dryer Repair for Nepean Homes</h1>
            <p className="text-xl leading-relaxed mb-8">
              Is your dryer taking forever to finish or producing unusual smells? Fixer Appliance Repair is Nepean's choice for skilled dryer repairs, offering same-day appointments in many neighbourhoods. We service Whirlpool, Samsung, LG, Maytag, GE, and Frigidaire.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/nepean" className="font-semibold hover:underline">
                Nepean appliance repair page
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
            Got a new dryer? We also provide dryer installation in Nepean with same-day service available in most areas.
          </p>
          <Link href="/dryer-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Dryer Installation
          </Link>
        </div>
      </section>

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Service Area: Nepean and Nearby */}
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

      {/* Enjoy Nepean While We Fix Your Dryer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Enjoy Nepean While We Fix Your Dryer</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              No need to wait at home — here are some places to explore:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
              <ul className="space-y-4">
                {nepeanAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl">•</span>
                    <p className="text-gray-700 text-lg">{attraction}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center bg-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                🔍 Looking for entertainment? See current events:
              </p>
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Events in Nepean
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

      {/* Book Your Dryer Repair in Nepean */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6 text-white">Book Your Dryer Repair in Nepean</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Fast, reliable dryer repair in Nepean is just one call away.
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
              We handle more than dryers — here are our other services in Nepean:
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
              Need help with another appliance? We're ready to assist in Nepean.
            </p>
            <p className="text-center text-gray-900 font-semibold mt-4">
              Fixer Appliance Repair — your reliable dryer repair team in Nepean.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

