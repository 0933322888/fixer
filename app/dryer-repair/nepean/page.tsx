import { Metadata } from "next";
import Link from "next/link";
import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import ServiceAreaSection from "@/components/ServiceAreaSection";

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
  { name: "Dryer Installation Nepean", href: "/appliance-installation/dryer" },
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
      <InstallationCTASection
        applianceName="Dryer"
        description="Got a new dryer? We also provide dryer installation in Nepean with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      {/* Service Area: Nepean and Nearby */}
      <ServiceAreaSection
        title="Service Area: Nepean and Nearby"
        description="We provide appliance repair services across the entire Nepean area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="dryer"
        nearbyAreasLabel="Our team also serves nearby communities like:"
      />

      {/* Things To Do */}
      <ThingsToDoSection
        attractions={nepeanAttractions}
        heading="Enjoy Nepean While We Fix Your Dryer"
        description="No need to wait at home — here are some places to explore:"
        linkText="Events in Nepean"
      />

      {/* FAQs */}
      <FAQSection applianceName="Dryer" faqs={faqs} />

      {/* Book Your Dryer Repair in Nepean */}
      <CTASection 
        heading="Book Your Dryer Repair in Nepean"
        description="Fast, reliable dryer repair in Nepean is just one call away."
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With…"
        description="We handle more than dryers — here are our other services in Nepean:"
        applianceName="Dryer"
      />
    </>
  );
}

