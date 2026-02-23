import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import FAQSection from "@/components/FAQSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Dishwasher Repair Carp – Expert Service for Homes & Farms | Fixer",
  description: "Fixer provides dishwasher repair in Carp for farmhouses & rural homes. We fix leaks, clogs, and cloudy dishes with same-day service and a 90-day warranty.",
};

const commonIssues = [
  {
    title: "Dishwasher won't turn on",
    description: "Check for a faulty breaker or door switch — we'll fix it.",
  },
  {
    title: "Water fills but doesn't wash",
    description: "Spray arm or circulation motor might need replacement.",
  },
  {
    title: "Dishes come out cloudy",
    description: "We treat hard water film or rinse aid failure.",
  },
  {
    title: "Leaking from underneath",
    description: "We check for tub cracks, worn gaskets, or drain hose damage.",
  },
  {
    title: "Runs too long",
    description: "Thermostat or sensor might be misreading temperature.",
  },
  {
    title: "Noisy operation",
    description: "Pump motor or fan blades may be worn or loose.",
  },
  {
    title: "Not drying dishes",
    description: "The heating element or fan assembly might be to blame.",
  },
  {
    title: "Flash error codes",
    description: "We read and clear diagnostic codes accurately.",
  },
  {
    title: "Rinse cycle doesn't finish",
    description: "We inspect timers and water inlet valves.",
  },
  {
    title: "Water splashes out",
    description: "Misaligned spray arms or float switch problems.",
  },
];

const whyChooseUs = [
  "Specialized in rural and home installs",
  "Familiar with farmhouse kitchen layouts",
  "Carp-based team — no travel delays",
  "We respect your schedule and space",
  "Clear, fair rates always",
];

const neighborhoods = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
];

const nearbyAreas = [
  { name: "Dishwasher Repair Kanata", slug: "kanata" },
  { name: "Dishwasher Repair Stittsville", slug: "stittsville" },
  { name: "Dishwasher Repair Nepean", slug: "nepean" },
  { name: "Dishwasher Repair Orleans", slug: "orleans" },
  { name: "Dishwasher Repair Vanier", slug: "vanier" },
  { name: "Dishwasher Repair Barrhaven", slug: "barrhaven" },
  { name: "Dishwasher Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Dishwasher Repair Carleton Place", slug: "carleton-place" },
];

const carpAttractions = [
  "Carp Farmers' Market – one of the best in Ontario",
  "Diefenbunker Cold War Museum – unique and fascinating",
  "Rural Art Studios or seasonal markets",
  "Carp Ridge EcoWellness Centre – nature walks, spa, and more",
];

const faqs = [
  {
    question: "Can I get dishwasher repair in Carp Village or Huntley?",
    answer: "Yes! We regularly serve homes in Carp Village, Huntley, and nearby areas.",
  },
  {
    question: "Is next-day service available in Carp?",
    answer: "In most cases — yes. Let us know if it's urgent.",
  },
  {
    question: "Do you work with older dishwashers?",
    answer: "Yes, we diagnose and repair dishwashers of all ages and styles.",
  },
  {
    question: "What brands do you repair in Carp?",
    answer: "We work with Bosch, GE, LG, Frigidaire, Whirlpool, and more.",
  },
  {
    question: "Can you help with dishwasher installation?",
    answer: "Absolutely — we offer full installation service when needed.",
  },
];

const relatedServices = [
  { name: "Washer Repair Carp", href: "/washer-repair/carp" },
  { name: "Dryer Repair Carp", href: "/dryer-repair/carp" },
  { name: "Fridge Repair Carp", href: "/fridge-repair/carp" },
  { name: "Freezer Repair Carp", href: "/freezer-repair/carp" },
  { name: "Oven Repair Carp", href: "/oven-repair/carp" },
  { name: "Cooktop Repair Carp", href: "/cooktop-repair/carp" },
  { name: "Microwave Repair Carp", href: "/microwave-repair/carp" },
  { name: "Dishwasher Installation Carp", href: "/appliance-installation/dishwasher" },
];

export default function DishwasherRepairCarpPage() {
  return (
    <>
      <ServiceHero
        title="Expert Dishwasher Repair for Carp Kitchens"
        description="In Carp, dishwashers face everything from leaks to clogged pumps. Fixer Appliance Repair is here with skilled, rural-friendly service — whether you're in a new build or a farmhouse kitchen."
        icon={<FaUtensils className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <>
            <p className="text-lg mb-6">
              We handle Bosch, Whirlpool, GE, LG, Maytag, Samsung, and others.
            </p>
            <p className="text-lg mb-8">
              👉 For all appliance services nearby, see our{" "}
              <Link href="/carp" className="font-semibold hover:underline">
                Local Carp page
              </Link>
              .
            </p>
          </>
        }
        useSectionPadding={true}
      />

      <CommonIssuesSection issues={commonIssues} />

      {/* Installation Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Installation Services</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Need a new dishwasher in Carp?</strong> Before buying, check our{" "}
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                  repair vs. replace guide
                </Link>
                {" "}— it breaks down common failures, costs, and long-term value.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                If you already have a new one, we provide dishwasher installation in Carp. Our team connects, levels, and runs it using your current hookups.
              </p>
              <p className="text-gray-700 mb-6">
                👉 New plumbing or electrical lines are not included.
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

      <RepairOrReplaceSection description="When your dishwasher breaks down, it's tempting to shop for a new one — but repairs are often quick and cost-effective. See how to tell when it's worth fixing." />

      <InstallationCTASection
        applianceName="Dishwasher"
        description="Upgrading to a new unit? We also offer dishwasher installation in Carp — fast, safe, and fully insured."
        href="/appliance-installation/dishwasher"
      />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Carp and Nearby"
        description="We provide appliance repair services across the entire Carp area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dishwasher"
        nearbyAreasLabel="You'll also see us working in:"
        surroundingLabel="and surrounding rural neighbourhoods"
        footerText={
          <p className="text-lg text-gray-700">
            For city-wide service, visit our{" "}
            <Link href="/dishwasher-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Dishwasher Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do in Carp */}
      <ThingsToDoSection
        attractions={carpAttractions}
        heading="Explore Carp While We Handle Your Dishwasher Repair"
        description="No need to wait around — take some time to enjoy Carp:"
        
        linkText="Events in Carp"
      />

      {/* FAQ */}
      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Book Your Dishwasher Repair in Carp"
        description="Serving all of Carp and nearby — book your dishwasher repair today. We're just a call or text away."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="Dishwasher repair is just one part of what we do — here are more services in Carp:"
        applianceName="Dishwasher"
      />
    </>
  );
}
