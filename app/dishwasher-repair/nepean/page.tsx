import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Nepean – Fast, Reliable Local Service | Fixer",
  description: "Fixer offers expert dishwasher repair in Nepean. We fix leaks, draining issues & control faults for Bosch, LG, Whirlpool & more — with same-day service & warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't start",
    description: "Power issue or latch fault — we diagnose fast.",
  },
  {
    title: "Water doesn't heat up",
    description: "Faulty heating element or temperature sensor.",
  },
  {
    title: "Dishwasher runs forever",
    description: "Thermostat or timer board may be stuck.",
  },
  {
    title: "Rinse aid not dispensing",
    description: "We clean or replace the dispenser unit.",
  },
  {
    title: "Drains but still wet inside",
    description: "Fan dry system or sensor needs inspection.",
  },
  {
    title: "Dishwasher makes squealing noise",
    description: "Motor bearings or stuck impellers — we'll fix it.",
  },
  {
    title: "Controls flash random lights",
    description: "We read diagnostic modes and restore normal function.",
  },
  {
    title: "Filter keeps clogging",
    description: "Debris in system — we clean and teach maintenance.",
  },
  {
    title: "Upper rack falls down",
    description: "We repair support wheels and rails.",
  },
  {
    title: "Water fills but never sprays",
    description: "Circulation pump or spray arm may be jammed.",
  },
];

const whyChooseUs = [
  "Fast, respectful repairs from local techs",
  "Trusted by Nepean homeowners and renters",
  "Same-day visits and flexible scheduling",
  "We explain the issue in plain language",
  "You approve all work before we begin",
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
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const nepeanAttractions = [
  "Andrew Haydon Park – peaceful greenery and waterfront trails",
  "Bruce Pit – outdoor fun for families and dogs alike",
  "Merivale Mall – shopping made simple",
  "Art Is In Bakery – a trendy spot for fresh-baked treats",
];

const faqs = [
  {
    question: "Do you service dishwashers in Centrepointe and Craig Henry?",
    answer: "Of course! We regularly visit homes in Centrepointe, Craig Henry, and throughout Nepean.",
  },
  {
    question: "What's the typical repair window in Nepean?",
    answer: "Most repairs are completed within 1–2 days after booking.",
  },
  {
    question: "Do you repair built-in dishwashers?",
    answer: "Yes — we specialize in both built-in and freestanding models.",
  },
  {
    question: "What brands are common in Nepean homes?",
    answer: "We see a lot of LG, Bosch, Frigidaire, and Whirlpool units in this area.",
  },
  {
    question: "Can you recommend replacement units if needed?",
    answer: "Yes — we'll guide you on affordable, reliable options and can install them too.",
  },
];

const relatedServices = [
  { name: "Washer Repair Nepean", href: "/washer-repair/nepean" },
  { name: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
  { name: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
  { name: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
  { name: "Oven Repair Nepean", href: "/oven-repair/nepean" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Dishwasher Installation Nepean", href: "/dishwasher-installation" },
];

export default function DishwasherRepairNepeanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaUtensils className="text-[30px] mb-2 inline-block" /> Dishwasher Not Draining? We Fix It in Nepean</h1>
            <p className="text-xl leading-relaxed mb-8">
              Leaking door seals, faulty control panels, or constant draining problems — whatever the issue, Fixer Appliance Repair delivers expert dishwasher repair in Nepean.
            </p>
            <p className="text-lg mb-6">
              We fix all popular models, including Bosch, Whirlpool, GE, LG, Maytag, and Samsung.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your neighborhood, see our{" "}
              <Link href="/nepean" className="font-semibold hover:underline">
                Local Nepean page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      {/* Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Installation Services</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Looking at a new dishwasher in Nepean?</strong> Before replacing, read our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it compares repair costs vs. new purchase value.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If you've already bought one, we provide dishwasher installation in Nepean. We'll connect and test it with the current hookups.
              </p>
              <p className="text-gray-700 mb-6">
                👉 Please note: we don't create new plumbing or electrical wiring.
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
              Our reach extends to:
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
                For Ottawa-wide service, check our{" "}
                <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Dishwasher Repair Ottawa
                </Link>
                {" "}page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do in Nepean */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Take a Break in Nepean While We Service Your Dishwasher</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Use the repair time to enjoy the neighborhood:
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
                🔍 Want to check out a local festival? Browse events here:
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
          <h2 className="heading-md mb-6 text-white">Book Your Dishwasher Repair in Nepean</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Live in Nepean? We've got you covered. Reach out now to schedule fast dishwasher repair with a local pro.
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
              We handle more than dishwashers — here are our other services in Nepean:
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
              Fixer Appliance Repair — your reliable dishwasher repair team in Nepean.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
