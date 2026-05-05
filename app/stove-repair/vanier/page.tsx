import { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceHero from "@/components/ServiceHero";
import { FaFire } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Stove Repair in Vanier – Electric Ranges & Local Experts | Fixer",
  description:
    "Professional electric stove repair in Vanier, including Overbrook and Beechwood Village. We fix burners, ovens, and controls — with clear pricing and a 90-day warranty.",
  keywords:
    "stove repair Vanier, range repair Vanier, electric stove repair Vanier, Fixer Appliance Repair Vanier",
};

const repairOrReplaceDescription =
  "Electric ranges often fail one burner, sensor, or board at a time while the rest of the unit stays solid. We'll help you decide when repair beats replacement — with straight answers and clear pricing.";

const commonIssues = [
  {
    title: "Stove not turning on",
    description:
      "In older Vanier homes, worn wiring or outlets can interrupt power. We’ll restore safe operation.",
  },
  {
    title: "Oven won’t heat but lights work",
    description:
      "Usually element, fuse, or sensor — we’ll test and replace the failed part.",
  },
  {
    title: "Buzzing from control area",
    description:
      "Relay or board noise — we track it down and repair.",
  },
  {
    title: "Touchpad not working",
    description:
      "Aged panels often fail — we’ll repair or swap the faulty board.",
  },
  {
    title: "Oven light flickering",
    description:
      "Loose sockets or failing bulbs — we’ll handle it.",
  },
  {
    title: "Oven shuts off randomly",
    description:
      "Sensors or boards sometimes cut power mid-cycle — we’ll fix it fast.",
  },
];

const highlights = [
  {
    title: "Richelieu Park",
    description: "Enjoy a peaceful stroll through the mature forest trails.",
  },
  {
    title: "Vanier Museopark",
    description: "Explore local heritage and maple syrup traditions.",
  },
  {
    title: "Beechwood Avenue",
    description: "Relax at neighbourhood cafés and independent shops.",
  },
];

const whyChooseUs = [
  "Skilled Vanier technicians with local range experience",
  "Straightforward pricing before we begin",
  "Same-day and next-day service availability",
  "90-day warranty for peace of mind",
];

const serviceAreas = [
  "Overbrook",
  "Beechwood Village",
  "Cardinal Glen",
  "Notre Dame des Champs",
  "Surrounding neighbourhoods",
];

const nearbyAreas = [
  { name: "Stove Repair Kanata", href: "/stove-repair/kanata" },
  { name: "Stove Repair Stittsville", href: "/stove-repair/stittsville" },
  { name: "Stove Repair Nepean", href: "/stove-repair/nepean" },
  { name: "Stove Repair Orleans", href: "/stove-repair/orleans" },
  { name: "Stove Repair Barrhaven", href: "/stove-repair/barrhaven" },
  { name: "Stove Repair Mississippi Mills", href: "/stove-repair/mississippi-mills" },
  { name: "Stove Repair Arnprior", href: "/stove-repair/arnprior" },
  { name: "Stove Repair Carleton Place", href: "/stove-repair/carleton-place" },
];

const faqs = [
  {
    question: "Do you repair stoves in Vanier apartments and homes?",
    answer: "Yes — all housing types.",
  },
  {
    question: "Why does my oven keep shutting off?",
    answer: "Often overheating sensors or control board issues.",
  },
  {
    question: "Do you install electric ranges?",
    answer: "Yes — with current electrical hookups.",
  },
  {
    question: "Do you work on all brands?",
    answer: "Yes — Whirlpool, LG, Samsung, GE, Frigidaire, and more.",
  },
  {
    question: "Do you provide warranty coverage?",
    answer: "Yes — every job comes with a 90-day labour warranty.",
  },
];

const services = [
  { label: "Washer Repair Vanier", href: "/washer-repair/vanier" },
  { label: "Dryer Repair Vanier", href: "/dryer-repair/vanier" },
  { label: "Fridge Repair Vanier", href: "/fridge-repair/vanier" },
  { label: "Freezer Repair Vanier", href: "/freezer-repair/vanier" },
  { label: "Oven Repair Vanier", href: "/oven-repair/vanier" },
  { label: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { label: "Stove Repair Vanier", href: "/stove-repair/vanier" },
  { label: "Microwave Repair Vanier", href: "/microwave-repair/vanier" },
  { label: "Appliance Installation", href: "/appliance-installation/locations/ottawa" },
];

export default function StoveRepairVanierPage() {
  return (
    <Fragment>
      <ServiceHero
        title="Reliable Stove Repair in Vanier"
        description="From Beechwood Village to Overbrook, our Vanier team handles electric ranges — weak burners, cold ovens, and control board problems."
        icon={<FaFire className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <div>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag electric ranges. Same-day and next-day appointments available.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              Learn more about the community on our{" "}
              <Link href="/service-areas/vanier" className="font-semibold text-white underline hover:text-gray-200">
                Vanier service area page
              </Link>
              .
            </p>
          </div>
        }
        phoneNumber="613-413-6969"
        phoneText="CALL NOW"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Stove Issues We Fix in Vanier" />

      <InstallationCTASection
        applianceName="Range"
        description="Got a new electric range? We also provide range installation in Vanier with same-day service available in most areas."
        href="/appliance-installation/oven"
      />

      <BenefitsSection applianceName="Stove" benefits={whyChooseUs} />

      <RepairOrReplaceSection description={repairOrReplaceDescription} />

      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Vanier area, including:"
        neighborhoods={serviceAreas.filter((area) => area !== "Surrounding neighbourhoods")}
        nearbyAreas={nearbyAreas.map((area) => ({
          name: area.name.replace("Stove Repair ", ""),
          slug: area.href.replace("/stove-repair/", ""),
        }))}
        applianceType="stove"
        nearbyAreasLabel="We also repair stoves in:"
        surroundingLabel={
          serviceAreas.includes("Surrounding neighbourhoods")
            ? "Surrounding neighbourhoods"
            : "and surrounding neighbourhoods"
        }
        footerText={
          <p className="text-lg text-gray-700">
            👉 For full details, see our{" "}
            <Link href="/stove-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              Stove Repair Ottawa
            </Link>{" "}
            page.
          </p>
        }
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Discover Vanier While We Work on Your Stove"
        description="Use the time to explore:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Stove" faqs={faqs} />

      <CTASection
        heading="Schedule Your Stove Repair in Vanier"
        description="Need your range fixed fast? Reach out now to schedule service with Fixer Appliance Repair."
        buttonText="Book Online Now"
      />

      <RelatedServicesSection
        services={services}
        heading="Also Need Help With…"
        description="Stoves aren't all we repair — here are our other services in Vanier:"
        applianceName="stove"
      />
    </Fragment>
  );
}
