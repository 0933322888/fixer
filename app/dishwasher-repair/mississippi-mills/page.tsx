import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Dishwasher Repair Mississippi Mills – Trusted Local Service | Fixer",
  description: "Fixer provides expert dishwasher repair in Mississippi Mills, Almonte & Pakenham. We fix leaks, draining issues & error codes with same-day service + warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't power on?",
    description: "In rural Mississippi Mills homes, electrical fluctuations or worn switches often cause this. We'll diagnose and get it working again.",
  },
  {
    title: "Water not draining?",
    description: "A clogged hose or pump often leaves water in the bottom. We'll clear it and restore proper drainage.",
  },
  {
    title: "Unusual buzzing or rattling?",
    description: "When your dishwasher shakes the whole kitchen, it's usually a failing motor or spray arm hitting something. We'll fix it fast.",
  },
  {
    title: "Leaks under the door?",
    description: "Aged seals or loose connections are common. We'll stop the drip before it damages your Mississippi Mills kitchen floor.",
  },
  {
    title: "Cloudy or dirty dishes?",
    description: "Hard water or spray arm blockages often cause this. We'll adjust, clean, and replace what's needed so dishes shine again.",
  },
  {
    title: "Error lights blinking?",
    description: "Codes like E15 or E24 can be confusing. We'll handle the repair for Bosch, KitchenAid, or Whirlpool models.",
  },
];

const whyChooseUs = [
  "Trusted dishwasher repair & installation pros serving Mississippi Mills homes",
  "Clear estimates before work begins",
  "Fast response — same or next day in most cases",
  "Covered by our 90-day labour warranty",
];

const neighborhoods = [
  "Almonte",
  "Appleton",
  "Blakeney",
  "Pakenham",
  "Ramsay",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Arnprior", slug: "arnprior" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const mississippiMillsAttractions = [
  "Relax with a riverside stroll on the Almonte Riverwalk.",
  "Explore nature and history at the Mill of Kintail.",
  "Enjoy local boutiques and cafés in Downtown Almonte.",
];

const faqs = [
  {
    question: "Do you provide dishwasher service in rural Mississippi Mills?",
    answer: "Yes — we regularly serve homes in Almonte, Appleton, and surrounding areas.",
  },
  {
    question: "Why does my dishwasher leave dishes cloudy or with white spots?",
    answer: "Usually from hard water or detergent residue. We'll check the rinse aid system and filters.",
  },
  {
    question: "Do you repair all dishwasher brands?",
    answer: "Yes — including Bosch, Whirlpool, Samsung, GE, and others.",
  },
  {
    question: "Can you install a new dishwasher I just bought?",
    answer: "Yes — we handle installation with your existing hookups.",
  },
  {
    question: "Do you provide clear pricing before repairs?",
    answer: "Always — you'll know the cost upfront.",
  },
];

const relatedServices = [
  { name: "Washer Repair Mississippi Mills", href: "/washer-repair/mississippi-mills" },
  { name: "Dryer Repair Mississippi Mills", href: "/dryer-repair/mississippi-mills" },
  { name: "Fridge Repair Mississippi Mills", href: "/fridge-repair/mississippi-mills" },
  { name: "Freezer Repair Mississippi Mills", href: "/freezer-repair/mississippi-mills" },
  { name: "Oven Repair Mississippi Mills", href: "/oven-repair/mississippi-mills" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Dishwasher Installation Mississippi Mills", href: "/appliance-installation/dishwasher" },
];

export default function DishwasherRepairMississippiMillsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaUtensils className="text-[30px] mb-2 inline-block" /> Dishwasher Repair Mississippi Mills – Trusted Local Service</h1>
            <p className="text-xl leading-relaxed mb-8">
              In Mississippi Mills, a broken dishwasher means extra hours at the sink. Whether it's leaking, leaving residue, or making odd noises, Fixer Appliance Repair delivers dependable service across Almonte, Pakenham, and rural kitchens.
            </p>
            <p className="text-lg mb-6">
              We work on most brands such as Whirlpool, Maytag, Bosch, GE, and Samsung.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, see our{" "}
              <Link href="/mississippi-mills" className="font-semibold hover:underline">
                Local Mississippi Mills page
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
            <h2 className="heading-md text-center mb-12">Common Dishwasher Issues We Fix in Mississippi Mills</h2>
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
            <h2 className="heading-md text-center mb-6">Dishwasher Installation in Mississippi Mills</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Is your dishwasher beyond repair in Mississippi Mills?</strong> Before replacing, read our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it helps decide if a fix is still possible.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                For new purchases, we provide dishwasher installation in Mississippi Mills. We'll connect and test it using the current hookups.
              </p>
              <p className="text-gray-700 mb-6">
                👉 We don't add new plumbing lines or high-voltage wiring.
              </p>
              <div className="text-center">
                <Link href="/appliance-installation/dishwasher" className="btn-primary">
                  Learn more about Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Dishwasher" benefits={whyChooseUs} />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Mississippi Mills area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dishwasher"
        nearbyAreasLabel="Nearby areas like:"
        surroundingLabel="and surrounding rural neighbourhoods"
        footerText={
          <p className="text-lg text-gray-700">
            For Ottawa-wide coverage, visit our{" "}
            <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dishwasher Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do in Mississippi Mills */}
      <ThingsToDoSection
        attractions={mississippiMillsAttractions}
        heading="Things to Do in Mississippi Mills While We Fix Your Dishwasher"
        description="Use the time to explore the area:"
        link="https://www.mississippimills.ca/en/explore-and-play/events.aspx"
        linkText="Mississippi Mills Events"
      />

      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dishwasher Repair in Mississippi Mills"
        description="Need reliable dishwasher repair in Almonte or nearby? Book your service with Fixer Appliance Repair:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Dishwashers are just the beginning — here are our other services in Mississippi Mills:"
        applianceName="Dishwasher"
      />
    </>
  );
}
