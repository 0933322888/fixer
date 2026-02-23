import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceHero from "@/components/ServiceHero";
import {
  FaBolt,
  FaMapMarkerAlt,
  FaTools,
  FaUtensils,
  FaTree,
  FaBook,
  FaWaveSquare,
} from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Carp – Trusted Rural Service | Fixer",
  description:
    "Reliable microwave repair in Carp, including Huntley, Corkery, and Upper Dwyer Hill. We fix heating, sparking, and control issues with a 90-day warranty.",
  keywords:
    "microwave repair Carp, microwave service Carp, rural microwave repair, Fixer Appliance Repair Carp",
};

const commonIssues = [
  {
    title: "Microwave won’t start",
    description: "Likely a door sensor or fuse issue — we fix both.",
  },
  {
    title: "Loud buzzing noise",
    description: "Common with failing capacitors or magnetrons.",
  },
  {
    title: "Microwave door misaligned",
    description: "We adjust hinges and fix latch mechanisms.",
  },
  {
    title: "Microwave stops after few seconds",
    description: "Faulty switches or internal wiring can interrupt cycles.",
  },
  {
    title: "Buttons worn or stuck",
    description: "We clean or replace keypads and controls.",
  },
  {
    title: "Timer won’t set properly",
    description: "We recalibrate or install a new control unit.",
  },
  {
    title: "Microwave overheating quickly",
    description: "Blocked vents or a faulty fan — we test airflow.",
  },
  {
    title: "Sparks even when empty",
    description: "Damaged waveguide or insulation — we replace parts.",
  },
  {
    title: "Internal surface cracked",
    description: "We patch or replace the interior liner.",
  },
  {
    title: "Microwave resets clock randomly",
    description: "Likely power supply board or capacitor issue.",
  },
];

const highlights = [
  {
    title: "Carp Farmers’ Market",
    description: "Browse local produce and artisan goods while we repair.",
  },
  {
    title: "Diefenbunker Cold War Museum",
    description: "Explore one of Canada’s most unique museums.",
  },
  {
    title: "Carp Ridge EcoWellness Centre",
    description: "Enjoy nature walks, spa services, and wellness classes.",
  },
];

const whyChooseUs = [
  "We know how to fix modern and older microwaves alike",
  "Clean, careful work with attention to safety",
  "Upfront pricing without surprises",
  "We treat your appliances with care",
  "Local service you can rely on",
];

const serviceAreas = [
  "Village of Carp",
  "Huntley",
  "Corkery",
  "Upper Dwyer Hill",
  "Surrounding rural neighbourhoods",
];

const nearbyAreas = [
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Microwave Repair Orleans", href: "/microwave-repair/orleans" },
  { name: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { name: "Microwave Repair Barrhaven", href: "/microwave-repair/barrhaven" },
  { name: "Microwave Repair Mississippi Mills", href: "/microwave-repair/mississippi-mills" },
  { name: "Microwave Repair Carleton Place", href: "/microwave-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair microwaves in Kinburn and Huntley?",
    answer: "Yes — we visit homes throughout Carp.",
  },
  {
    question: "Do you service compact countertop models?",
    answer: "Yes — if repairable, we’ll assess and quote.",
  },
  {
    question: "Do you fix microwaves with broken buttons?",
    answer: "Yes — control panel repairs are common.",
  },
  {
    question: "How long do microwave repairs take?",
    answer: "Usually under an hour.",
  },
  {
    question: "Can you install a new unit if mine is unrepairable?",
    answer: "Yes — we offer removal and installation.",
  },
];

const services = [
  { label: "Washer Repair Carp", href: "/washer-repair/carp" },
  { label: "Dryer Repair Carp", href: "/dryer-repair/carp" },
  { label: "Fridge Repair Carp", href: "/fridge-repair/carp" },
  { label: "Freezer Repair Carp", href: "/freezer-repair/carp" },
  { label: "Oven Repair Carp", href: "/oven-repair/carp" },
  { label: "Cooktop Repair Carp", href: "/cooktop-repair/carp" },
  { label: "Microwave Repair Carp", href: "/microwave-repair/carp" },
  { label: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function MicrowaveRepairCarpPage() {
  return (
    <>
      <ServiceHero
        title="Microwave on the Fritz? Carp Repair Pros Are Here"
        description="Living in Carp and stuck with a broken microwave? We'll get it back in action quickly. Fixer Appliance Repair is known for dependable service in rural areas — no job is too far!"
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              Brands we service include LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Learn more about the community on our{" "}
              <Link href="/carp" className="font-semibold text-white underline hover:text-gray-200">
                Local Carp page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="Call us"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} />

      {/* Installation Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Installation Services</h2>
            <p className="text-lg text-gray-700 mb-4">
              Need a new microwave in Carp? Check our{" "}
              <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it helps compare costs and long-term value.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              If you’ve bought one, we offer microwave installation in Carp. We’ll connect and test it with your current power supply.
            </p>
            <p className="text-gray-700 mb-6">
              👉 We don’t add new wiring or structural changes.
            </p>
            <Link href="/appliance-installation/microwave" className="btn-primary inline-flex items-center justify-center">
              Learn more about Installation
            </Link>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area: Carp and Nearby"
        description="We provide appliance repair services across the entire Carp area, including:"
        neighborhoods={serviceAreas.filter(area => area !== "Surrounding rural neighbourhoods")}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Microwave Repair ", ""),
          slug: area.href.replace("/microwave-repair/", "")
        }))}
        applianceType="microwave"
        nearbyAreasLabel="We also serve:"
        surroundingLabel={serviceAreas.includes("Surrounding rural neighbourhoods") ? "Surrounding rural neighbourhoods" : "and surrounding neighbourhoods"}
        footerText={
          <p className="text-lg text-gray-700">
            👉 For complete coverage across the city, see our{" "}
            <Link href="/microwave-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Microwave Repair Ottawa
            </Link>
            {" "}page.
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={highlights}
        heading="Explore Carp While We Fix Your Microwave"
        description="Your microwave repair is underway — why not enjoy Carp in the meantime?"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Book Your Microwave Repair in Carp"
        description="Quick and reliable microwave repair for rural Carp is just a call away."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Microwave repair is only one part of what we do — here are other services in Carp:"
        applianceName="Microwave"
      />
    </>
  );
}
