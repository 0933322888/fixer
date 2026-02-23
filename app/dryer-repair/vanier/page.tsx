import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Vanier Dryer Repair – Expert Local Service | Fixer",
  description: "Fast, professional dryer repair in Vanier. Clear pricing, same-day availability in many neighbourhoods, and a 90-day workmanship guarantee.",
};

const commonIssues = [
  {
    title: "Dryer won't power up",
    description: "In older Vanier homes, wiring or breaker issues are frequent. If not electrical, it may be a bad start switch.",
  },
  {
    title: "Not heating properly",
    description: "Weak or no heat usually points to a burned-out coil or clogged ducts. We'll restore warmth.",
  },
  {
    title: "Squealing or scraping noise",
    description: "Rollers, bearings, or the idler pulley often wear out. We'll replace the faulty part.",
  },
  {
    title: "Drum won't rotate",
    description: "A broken belt or failing motor is the likely cause. We'll repair it fast.",
  },
  {
    title: "Takes ages to dry laundry",
    description: "Poor venting or sensor faults slow everything down. We'll clear the path and test airflow.",
  },
  {
    title: "Dryer shuts down too soon",
    description: "Overheating trips safety devices. We'll check for lint and bad thermostats.",
  },
  {
    title: "Musty smell in clothes",
    description: "Lint buildup inside can cause odors. We'll deep-clean for fresh results.",
  },
];

const whyChooseUs = [
  "Local Vanier technicians with in-depth dryer knowledge",
  "Same-day service in many Ottawa East neighbourhoods",
  "Upfront quotes so you always know the price in advance",
  "Prepared to complete most repairs in a single visit",
  "90-day warranty on all workmanship",
];

const neighborhoods = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
];

const nearbyAreas = [
  { name: "Dryer Repair Kanata", slug: "kanata" },
  { name: "Dryer Repair Stittsville", slug: "stittsville" },
  { name: "Dryer Repair Nepean", slug: "nepean" },
  { name: "Dryer Repair Orleans", slug: "orleans" },
  { name: "Dryer Repair Barrhaven", slug: "barrhaven" },
  { name: "Dryer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dryer Repair Arnprior", slug: "arnprior" },
  { name: "Dryer Repair Carleton Place", slug: "carleton-place" },
];

const vanierAttractions = [
  "Richelieu Park – scenic urban forest.",
  "Museopark Vanier – history and culture.",
  "Beechwood Avenue – dining and shopping.",
];

const faqs = [
  {
    question: "Do you repair dryers in older Vanier homes and apartments?",
    answer: "Yes — we work on dryers in houses, condos, and rental units.",
  },
  {
    question: "Why won't my dryer start at all?",
    answer: "It could be a bad start switch, blown fuse, or motor issue.",
  },
  {
    question: "Do you also install dryers in Vanier?",
    answer: "Yes — we handle installation using the electrical hookups you already have.",
  },
  {
    question: "Do you work on all brands?",
    answer: "Yes — including Whirlpool, Maytag, Samsung, LG, and GE.",
  },
  {
    question: "What warranty do you provide?",
    answer: "Every dryer repair or install in Vanier is backed by our 90-day labour warranty.",
  },
];

const relatedServices = [
  { name: "Washer Repair Vanier", href: "/washer-repair/vanier" },
  { name: "Dishwasher Repair Vanier", href: "/dishwasher-repair/vanier" },
  { name: "Fridge Repair Vanier", href: "/fridge-repair/vanier" },
  { name: "Freezer Repair Vanier", href: "/freezer-repair/vanier" },
  { name: "Oven Repair Vanier", href: "/oven-repair/vanier" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Dryer Installation Vanier", href: "/appliance-installation" },
];

export default function DryerRepairVanierPage() {
  return (
    <>
      <ServiceHero
        title="Local Dryer Repair Experts in Vanier"
        description="When your Vanier dryer takes forever to finish or produces unusual smells, it's time to call Fixer Appliance Repair. With 15+ years of experience in Ottawa East, we provide trusted dryer repairs for apartments and houses alike — always with honest pricing and a 90-day guarantee. Brands we service include Whirlpool, Maytag, Samsung, LG, and GE."
        icon={<FaWind className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance services in your community, see our{" "}
            <Link href="/vanier" className="font-semibold hover:underline">
              Vanier appliance repair page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      {/* Common Dryer Problems */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Dryer Problems We Fix</h2>
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
        description="Got a new dryer? We also provide dryer installation in Vanier with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Wondering if your dryer is still worth fixing? Read our dryer repair vs. replacement guide to weigh your options before you buy a new one." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Vanier area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dryer"
        nearbyAreasLabel="We also repair dryers for customers in:"
        footerText={
          <p className="text-lg text-gray-700">
            👉 For city-wide service, visit our{" "}
            <Link href="/dryer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dryer Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Enjoy Vanier While We Repair Your Dryer */}
      <ThingsToDoSection
        attractions={vanierAttractions}
        heading="Enjoy Vanier While We Repair Your Dryer"
        description="Take some time to explore nearby:"
        linkText="Ottawa Events Calendar"
      />

      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Schedule Your Dryer Repair in Vanier"
        description="Need professional dryer repair? Contact Fixer Appliance Repair now:"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With..."
        description="We do more than just dryer repair — check out our other Ottawa services:"
        applianceName="Dryer"
      />
    </>
  );
}

