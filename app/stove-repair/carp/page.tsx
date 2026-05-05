import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceHero from "@/components/ServiceHero";
import { FaFire } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Stove Repair in Carp – Trusted Rural Service | Fixer",
  description:
    "Reliable electric stove and range repair in Carp, including Huntley, Corkery, and Upper Dwyer Hill. We fix burners, ovens, and controls with a 90-day warranty.",
  keywords:
    "stove repair Carp, range repair Carp, rural stove repair, Fixer Appliance Repair Carp",
};

const commonIssues = [
  {
    title: "Stove won’t start",
    description: "Supply, breaker, or control fault — we trace power end to end.",
  },
  {
    title: "Oven won’t reach temperature",
    description: "Element, sensor, or board — we test and replace failed parts.",
  },
  {
    title: "Oven door misaligned",
    description: "We adjust hinges and fix latches so heat stays in.",
  },
  {
    title: "Burner cuts out after a few minutes",
    description: "Switch or element overheating — we repair the faulty circuit.",
  },
  {
    title: "Knobs or buttons worn",
    description: "We replace switches, membranes, or harnesses as needed.",
  },
  {
    title: "Timer or clock won’t hold",
    description: "We recalibrate or replace the control assembly.",
  },
  {
    title: "Oven overheats or shuts off early",
    description: "Sensor or board misread — we verify temperatures safely.",
  },
  {
    title: "Sparks at a coil element",
    description: "Receptacle or wiring fault — we repair before it worsens.",
  },
  {
    title: "Glass top cracked",
    description: "We assess safety and replace cooktops when that’s the right fix.",
  },
  {
    title: "Clock resets randomly",
    description: "Often power supply or board related — we stabilize it.",
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
  "We fix modern and older electric ranges alike",
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
  { name: "Stove Repair Kanata", href: "/stove-repair/kanata" },
  { name: "Stove Repair Stittsville", href: "/stove-repair/stittsville" },
  { name: "Stove Repair Nepean", href: "/stove-repair/nepean" },
  { name: "Stove Repair Orleans", href: "/stove-repair/orleans" },
  { name: "Stove Repair Vanier", href: "/stove-repair/vanier" },
  { name: "Stove Repair Barrhaven", href: "/stove-repair/barrhaven" },
  { name: "Stove Repair Mississippi Mills", href: "/stove-repair/mississippi-mills" },
  { name: "Stove Repair Carleton Place", href: "/stove-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair stoves in Kinburn and Huntley?",
    answer: "Yes — we visit homes throughout Carp.",
  },
  {
    question: "Do you service freestanding electric ranges?",
    answer: "Yes — we assess and quote any repairable unit.",
  },
  {
    question: "Do you fix ovens that won’t hold temperature?",
    answer: "Yes — sensor and element issues are common.",
  },
  {
    question: "How long do stove repairs take?",
    answer: "Often under 90 minutes when parts are on hand.",
  },
  {
    question: "Can you install a new range if mine isn’t worth fixing?",
    answer: "Yes — we help with removal and installation.",
  },
];

const services = [
  { label: "Washer Repair Carp", href: "/washer-repair/carp" },
  { label: "Dryer Repair Carp", href: "/dryer-repair/carp" },
  { label: "Fridge Repair Carp", href: "/fridge-repair/carp" },
  { label: "Freezer Repair Carp", href: "/freezer-repair/carp" },
  { label: "Oven Repair Carp", href: "/oven-repair/carp" },
  { label: "Cooktop Repair Carp", href: "/cooktop-repair/carp" },
  { label: "Stove Repair Carp", href: "/stove-repair/carp" },
  { label: "Microwave Repair Carp", href: "/microwave-repair/carp" },
  { label: "Appliance Installation", href: "/appliance-installation/locations/ottawa" },
];

export default function StoveRepairCarpPage() {
  return (
    <>
      <ServiceHero
        title="Stove on the Blink? Carp Repair Pros Are Here"
        description="Living in Carp and stuck with a weak burner or cold oven? We'll get your electric range back in action. Fixer Appliance Repair is known for dependable service in rural areas — no job is too far!"
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              Brands we service include LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Learn more about the community on our{" "}
              <Link href="/service-areas/carp" className="font-semibold text-white underline hover:text-gray-200">
                Carp service area page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="CALL NOW"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} />

      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Installation Services</h2>
            <p className="text-lg text-gray-700 mb-4">
              Need a new electric range in Carp? Check our{" "}
              <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 hover:text-primary-700 font-semibold">
                repair vs. replace guide
              </Link>{" "}
              — it helps compare costs and long-term value.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              If you’ve bought one, we offer range installation in Carp. We’ll connect and test it with your current power supply.
            </p>
            <p className="text-gray-700 mb-6">👉 We don’t add new wiring or structural changes.</p>
            <Link href="/appliance-installation/oven" className="btn-primary inline-flex items-center justify-center">
              Learn more about Installation
            </Link>
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Stove" benefits={whyChooseUs} />

      <InstallationCTASection
        applianceName="Range"
        description="Got a new electric range? We also provide range installation in Carp with same-day service when available."
        href="/appliance-installation/oven"
      />

      <ServiceAreaSection
        title="Service Area: Carp and Nearby"
        description="We provide appliance repair services across the entire Carp area, including:"
        neighborhoods={serviceAreas.filter((area) => area !== "Surrounding rural neighbourhoods")}
        nearbyAreas={nearbyAreas.map((area) => ({
          name: area.name.replace("Stove Repair ", ""),
          slug: area.href.replace("/stove-repair/", ""),
        }))}
        applianceType="stove"
        nearbyAreasLabel="We also serve:"
        surroundingLabel={
          serviceAreas.includes("Surrounding rural neighbourhoods")
            ? "Surrounding rural neighbourhoods"
            : "and surrounding neighbourhoods"
        }
        footerText={
          <p className="text-lg text-gray-700">
            👉 For complete coverage across the region, see our{" "}
            <Link href="/stove-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Stove Repair Ottawa
            </Link>{" "}
            page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Explore Carp While We Fix Your Stove"
        description="Your stove repair is underway — why not enjoy Carp in the meantime?"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Stove" faqs={faqs} />

      <CTASection
        heading="Book Your Stove Repair in Carp"
        description="Quick and reliable electric range repair for rural Carp is just a call away."
        buttonText="Book Online Now"
      />

      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Stove repair is only one part of what we do — here are other services in Carp:"
        applianceName="stove"
      />
    </>
  );
}
