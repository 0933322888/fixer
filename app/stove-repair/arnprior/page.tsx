import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceHero from "@/components/ServiceHero";
import { FaFire } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Stove Repair in Arnprior – Electric Ranges & Experienced Techs | Fixer",
  description:
    "Expert electric stove repair in Arnprior, serving Braeside, McNab, and White Lake. We fix burners, ovens, and controls on all brands — with upfront pricing and a 90-day warranty.",
  keywords:
    "stove repair Arnprior, range repair Arnprior, electric stove repair Arnprior, Fixer Appliance Repair Arnprior",
};

const repairOrReplaceDescription =
  "Electric ranges often fail one burner, sensor, or board at a time while the rest of the unit stays solid. We'll help you decide when repair beats replacement — with straight answers and clear pricing.";

const commonIssues = [
  {
    title: "Stove won’t start",
    description:
      "In Arnprior kitchens, blown fuses, tripped breakers, or terminal block issues are common. We’ll test and repair them.",
  },
  {
    title: "Oven won’t heat though cooktop works",
    description:
      "Failed bake element, fuse, or sensor — we’ll restore oven heat.",
  },
  {
    title: "Clicking or buzzing from oven cavity",
    description:
      "Convection fan or cooling fan wear — we’ll replace noisy parts.",
  },
  {
    title: "Oven shuts off mid-cycle",
    description:
      "Overheating protection or control fault — we’ll correct it.",
  },
  {
    title: "Display blank",
    description:
      "Wiring or board failures can blank the screen — we’ll restore function.",
  },
  {
    title: "Oven light flickers",
    description:
      "Loose sockets or bulbs — we’ll repair them.",
  },
];

const highlights = [
  {
    title: "Robert Simpson Park",
    description: "Enjoy a river walk along the Ottawa River shoreline.",
  },
  {
    title: "Gillies Grove",
    description: "Hike beneath towering pines in this old-growth forest.",
  },
  {
    title: "Downtown Arnprior",
    description: "Grab a bite or browse local shops while we handle the repair.",
  },
];

const whyChooseUs = [
  "Friendly Arnprior range service with years of experience",
  "Clear pricing explained upfront",
  "Professional service you can rely on",
  "90-day warranty on repairs and installs",
];

const serviceAreas = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
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
    question: "Do you repair stoves in Arnprior homes?",
    answer: "Yes — also in Braeside and White Lake.",
  },
  {
    question: "Why won’t my oven light stay on?",
    answer: "Could be a loose bulb, socket, or door switch.",
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes — with existing electrical supply.",
  },
  {
    question: "Do you handle all major brands?",
    answer: "Yes — Samsung, LG, Whirlpool, GE, Frigidaire.",
  },
  {
    question: "Do you guarantee repairs?",
    answer: "Yes — 90-day warranty on all jobs.",
  },
];

const services = [
  { label: "Washer Repair Arnprior", href: "/washer-repair/arnprior" },
  { label: "Dryer Repair Arnprior", href: "/dryer-repair/arnprior" },
  { label: "Fridge Repair Arnprior", href: "/fridge-repair/arnprior" },
  { label: "Freezer Repair Arnprior", href: "/freezer-repair/arnprior" },
  { label: "Oven Repair Arnprior", href: "/oven-repair/arnprior" },
  { label: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { label: "Stove Repair Arnprior", href: "/stove-repair/arnprior" },
  { label: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { label: "Appliance Installation", href: "/appliance-installation/locations/ottawa" },
];

export default function StoveRepairArnpriorPage() {
  return (
    <>
      <ServiceHero
        title="Expert Stove Repair in Arnprior"
        description="From downtown Arnprior to White Lake and Braeside, our technicians fix electric ranges that won’t heat, bake unevenly, or lose control functions. Local help is just a call away."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag electric ranges with honest pricing and a 90-day warranty.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Find more about our coverage on the{" "}
              <Link href="/service-areas/arnprior" className="font-semibold text-white underline hover:text-gray-200">
                Arnprior service area page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="CALL NOW"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Stove Issues We Fix in Arnprior" />

      <InstallationCTASection
        applianceName="Range"
        description="Got a new electric range? We also provide range installation in Arnprior with same-day service available in most areas."
        href="/appliance-installation/oven"
      />

      <BenefitsSection applianceName="Stove" benefits={whyChooseUs} />

      <RepairOrReplaceSection description={repairOrReplaceDescription} />

      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Arnprior area, including:"
        neighborhoods={serviceAreas.filter((area) => area !== "Surrounding rural neighbourhoods")}
        nearbyAreas={nearbyAreas.map((area) => ({
          name: area.name.replace("Stove Repair ", ""),
          slug: area.href.replace("/stove-repair/", ""),
        }))}
        applianceType="stove"
        nearbyAreasLabel="We also serve surrounding areas such as:"
        surroundingLabel={
          serviceAreas.includes("Surrounding rural neighbourhoods")
            ? "Surrounding rural neighbourhoods"
            : "and surrounding neighbourhoods"
        }
        footerText={
          <p className="text-lg text-gray-700">
            👉 For full coverage, check our{" "}
            <Link href="/stove-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Stove Repair Ottawa
            </Link>{" "}
            page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Discover Arnprior While We Work on Your Stove"
        description="Here are a few ideas:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Stove" faqs={faqs} />

      <CTASection
        heading="Schedule Your Stove Repair in Arnprior"
        description="Range issues? Contact Fixer Appliance Repair today for reliable local help."
        buttonText="Book Online Now"
      />

      <RelatedServicesSection
        services={services}
        heading="Also Need Help With..."
        description="We do more than stove repair — check out our other services:"
        applianceName="stove"
      />
    </>
  );
}
