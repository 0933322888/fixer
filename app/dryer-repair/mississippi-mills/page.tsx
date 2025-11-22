import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

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
  { name: "Dryer Installation Mississippi Mills", href: "/appliance-installation/dryer" },
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
      <InstallationCTASection
        applianceName="Dryer"
        description="Got a new dryer? We also provide dryer installation in Mississippi Mills with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Mississippi Mills area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dryer"
        nearbyAreasLabel="We also help residents in:"
        surroundingLabel="and surrounding rural neighbourhoods"
      />

      {/* Enjoy Mississippi Mills While We Repair Your Dryer */}
      <ThingsToDoSection
        attractions={mississippiMillsAttractions}
        heading="Enjoy Mississippi Mills While We Repair Your Dryer"
        description="Don't just wait at home — take a little break:"
        linkText="Ottawa Events Calendar"
      />

      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dryer Repair in Mississippi Mills"
        description="Need fast dryer repair? Our local techs have you covered. Contact Fixer Appliance Repair:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Dryer repair is just the start — here are other services in Mississippi Mills:"
        applianceName="Dryer"
      />
    </>
  );
}

