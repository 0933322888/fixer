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
  title: "Orleans Dryer Repair – Fast, Local Service | Fixer",
  description: "Professional dryer repair in Orleans. Local technicians, clear pricing, and a 90-day warranty. Same-day visits available in many neighbourhoods.",
};

const commonIssues = [
  {
    title: "Dryer won't power on",
    description: "In Orleans homes, this is often a blown fuse, faulty start switch, or bad outlet. We'll test each part and fix the root issue.",
  },
  {
    title: "Not heating at all",
    description: "A burned-out heating element or tripped thermostat can leave clothes cold and wet. We'll restore proper heat.",
  },
  {
    title: "Strange scraping noises",
    description: "Usually worn drum glides or loose blower wheels. We'll track down the sound and replace the faulty parts.",
  },
  {
    title: "Drum won't spin",
    description: "Broken belts or seized motors stop the drum from turning. We'll diagnose quickly and replace what's needed.",
  },
  {
    title: "Takes too long to dry",
    description: "Blocked vents or faulty sensors reduce airflow. We'll clean out lint and check all internal systems.",
  },
  {
    title: "Shuts down mid-cycle",
    description: "Often caused by overheating or a bad thermal fuse. We'll repair it so the cycle runs to the end.",
  },
  {
    title: "Clothes still damp",
    description: "Moisture sensors or clogged ducts are common culprits. We'll calibrate or replace the sensor and clear airflow paths.",
  },
  {
    title: "Door won't close securely",
    description: "Damaged latches and hinges are easy fixes. We'll get the door sealing again.",
  },
];

const whyChooseUs = [
  "Over 15 years of hands-on dryer repair experience",
  "Same-day service available in many Orleans neighbourhoods",
  "Honest service with no hidden fees",
  "Fully stocked vans for faster repairs in one visit",
  "90-day warranty on all labour for peace of mind",
];

const neighborhoods = [
  "Fallingbrook",
  "Avalon",
  "Queenswood Heights",
  "Chapel Hill",
  "Convent Glen",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Vanier", slug: "vanier" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const orleansAttractions = [
  "Petrie Island – a local gem with beaches and trails.",
  "Shenkman Arts Centre – catch a live performance or exhibit.",
  "Place d'Orleans – plenty of shopping and dining choices.",
];

const faqs = [
  {
    question: "Can I get same-day dryer repair in Orleans?",
    answer: "Often yes — call us early, and we'll confirm today's availability.",
  },
  {
    question: "Why is my dryer running but not heating?",
    answer: "Usually it's a failed heating element, blown fuse, or vent issue. We'll diagnose it quickly.",
  },
  {
    question: "Do you install new dryers as well as repair them?",
    answer: "Yes, we provide dryer installation in Orleans — using your existing hookups.",
  },
  {
    question: "Do you service nearby areas outside Orleans?",
    answer: "Yes — including Fallingbrook, Avalon, and Chapel Hill.",
  },
  {
    question: "What warranty do you offer on dryer repairs?",
    answer: "All labour is covered by our 90-day warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Orleans", href: "/washer-repair/orleans" },
  { name: "Dishwasher Repair Orleans", href: "/dishwasher-repair/orleans" },
  { name: "Fridge Repair Orleans", href: "/fridge-repair/orleans" },
  { name: "Freezer Repair Orleans", href: "/freezer-repair/orleans" },
  { name: "Oven Repair Orleans", href: "/oven-repair/orleans" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair" },
  { name: "Dryer Installation Orleans", href: "/appliance-installation/dryer" },
];

export default function DryerRepairOrleansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaWind className="text-[30px] mb-2 inline-block" /> Expert Dryer Repair in Orleans</h1>
            <p className="text-xl leading-relaxed mb-8">
              Dryer taking two cycles to dry a single load? Fixer Appliance Repair serves Orleans with quick, reliable dryer service. From heating element failures to noisy drums, our local team restores your laundry routine with upfront pricing and a 90-day guarantee. We repair all major brands, including LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
            <p className="text-lg">
              👉 For all appliance services in your area, check our{" "}
              <Link href="/orleans" className="font-semibold hover:underline">
                Orleans appliance repair page
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
            <h2 className="heading-md text-center mb-12">Common Dryer Issues We Fix in Orleans</h2>
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
        description="Got a new dryer? We also provide dryer installation in Orleans with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Orleans area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dryer"
        nearbyAreasLabel="We proudly serve nearby locations such as:"
      />

      {/* Enjoy Orleans While We Service Your Dryer */}
      <ThingsToDoSection
        attractions={orleansAttractions}
        heading="Enjoy Orleans While We Service Your Dryer"
        description="Take some time to explore the neighborhood:"
        linkText="Ottawa Events Calendar"
      />

      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dryer Repair in Orleans"
        description="Dryer giving you trouble? We're ready to help. Contact Fixer Appliance Repair today:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Our expertise goes beyond dryers — here's what else we do in Orleans:"
        applianceName="Dryer"
      />
    </>
  );
}

