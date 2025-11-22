import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";

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
      <InstallationCTASection
        applianceName="Dishwasher"
        description="Got a new dishwasher? We also provide dishwasher installation in Barrhaven with same-day service available in most areas."
        href="/appliance-installation/dishwasher"
      />

      <BenefitsSection applianceName="Dishwasher" benefits={whyChooseUs} />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Barrhaven area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dishwasher"
        nearbyAreasLabel="Our mobile team also serves:"
        footerText={
          <p className="text-lg text-gray-700">
            For full coverage, visit our{" "}
            <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dishwasher Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do in Barrhaven */}
      <ThingsToDoSection
        attractions={barrhavenAttractions}
        heading="Things to Do in Barrhaven While We Service Your Dishwasher"
        description="Make use of the downtime:"
        
        linkText="Ottawa Events Calendar"
      />

      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dishwasher Repair in Barrhaven"
        description="We're here to help — call us today to book your dishwasher repair:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Beyond dishwasher repair, we also provide these services in Barrhaven:"
        applianceName="Dishwasher"
      />
    </>
  );
}
