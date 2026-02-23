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
import FAQSection from "@/components/FAQSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Microwave Repair in Arnprior – Local, Experienced Service | Fixer",
  description:
    "Expert microwave repair in Arnprior, serving Braeside, McNab, and White Lake. We fix heating, power, and control issues on all brands — with upfront pricing and a 90-day warranty.",
  keywords:
    "microwave repair Arnprior, microwave service Arnprior, microwave not heating Arnprior, Fixer Appliance Repair Arnprior",
};

const commonIssues = [
  {
    title: "Microwave won’t start",
    description:
      "In Arnprior kitchens, blown fuses or bad door latches are common. We’ll test and repair them.",
  },
  {
    title: "No heat though lights work",
    description:
      "A failed magnetron or capacitor usually causes this. We’ll restore heating.",
  },
  {
    title: "Grinding or rattling noises",
    description:
      "Turntable motors or fan blades often wear out. We’ll replace the noisy parts.",
  },
  {
    title: "Microwave shuts off mid-cycle",
    description:
      "Overheating sensors sometimes cut power. We’ll correct the fault.",
  },
  {
    title: "Display not lighting up",
    description:
      "Wiring or board failures can darken the screen. We’ll restore function.",
  },
  {
    title: "Light inside flickers",
    description:
      "Loose sockets or bulbs are common culprits. We’ll repair them.",
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
  "Friendly Arnprior microwave service pros with 15+ years of experience",
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
    question: "Do you repair microwaves in Arnprior homes?",
    answer: "Yes — also in Braeside and White Lake.",
  },
  {
    question: "Why is my microwave light flickering?",
    answer: "Could be a loose bulb, socket, or wiring.",
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes — with existing electrical supply.",
  },
  {
    question: "Do you handle all major brands?",
    answer: "Yes — Samsung, LG, Panasonic, Whirlpool, GE.",
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
  { label: "Microwave Repair Arnprior", href: "/microwave-repair/arnprior" },
  { label: "Appliance Installation", href: "/appliance-installation/dishwasher" },
];

export default function MicrowaveRepairArnpriorPage() {
  return (
    <>
      <ServiceHero
        title="Expert Microwave Repair in Arnprior"
        description="From downtown Arnprior to White Lake and Braeside, our technicians fix microwaves that won't heat, spark, or shut off mid-cycle. Local help is just a call away."
        icon={<FaWaveSquare className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <>
            <p className="text-lg text-gray-200 mb-6">
              We service LG, Samsung, Whirlpool, GE, and Maytag microwaves with honest pricing and a 90-day warranty.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              👉 Find more about our coverage on the{" "}
              <Link href="/arnprior" className="font-semibold text-white underline hover:text-gray-200">
                Local Arnprior page
              </Link>
              .
            </p>
          </>
        }
        phoneNumber="613-413-6969"
        phoneText="Call us"
        useSectionPadding={false}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Microwave Issues We Fix in Arnprior" />

      {/* Microwave Installation CTA */}
      <InstallationCTASection
        applianceName="Microwave"
        description="Got a new microwave? We also provide microwave installation in Arnprior with same-day service available in most areas."
        href="/appliance-installation/microwave"
      />

      <BenefitsSection applianceName="Microwave" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Microwaves often fail due to a single component like the magnetron or door switch. We'll help you decide when it's smarter to repair than replace — and give you an honest estimate either way." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Arnprior area, including:"
        neighborhoods={serviceAreas.filter(area => area !== "Surrounding rural neighbourhoods")}
        nearbyAreas={nearbyAreas.map(area => ({
          name: area.name.replace("Microwave Repair ", ""),
          slug: area.href.replace("/microwave-repair/", "")
        }))}
        applianceType="microwave"
        nearbyAreasLabel="We also serve surrounding areas such as:"
        surroundingLabel={serviceAreas.includes("Surrounding rural neighbourhoods") ? "Surrounding rural neighbourhoods" : "and surrounding neighbourhoods"}
        footerText={
          <p className="text-lg text-gray-700">
            👉 For full coverage, check our{" "}
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
        heading="Discover Arnprior While We Work on Your Microwave"
        description="Here are a few ideas:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Microwave" faqs={faqs} />

      <CTASection
        heading="Schedule Your Microwave Repair in Arnprior"
        description="Microwave issues? Contact Fixer Appliance Repair today for reliable local help."
        buttonText="Book Online Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={services}
        heading="Also Need Help With..."
        description="We do more than just microwave repair — check out our other Ottawa services:"
        applianceName="Microwave"
      />
    </>
  );
}
