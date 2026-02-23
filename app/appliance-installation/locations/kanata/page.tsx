import { Metadata } from "next";
import Link from "next/link";
import { FaWrench } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import BenefitsSection from "@/components/BenefitsSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Appliance Installation Kanata – Washers, Dryers, Dishwashers, Ovens | Fixer",
  description:
    "Expert appliance installation in Kanata. We install washers, dryers, dishwashers, ovens & more with a 90-day warranty. Call 613-413-6969 today!",
  keywords:
    "appliance installation Kanata, washer installation Kanata, dryer installation Kanata",
};

const appliances = [
  { label: "Washer Installation Ottawa", href: "/appliance-installation/washer" },
  { label: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
  { label: "Fridge Installation Ottawa", href: null },
  { label: "Freezer Installation Ottawa", href: null },
  { label: "Oven Installation Ottawa", href: "/appliance-installation/oven" },
  { label: "Cooktop Installation Ottawa", href: "/appliance-installation/cooktop" },
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/microwave" },
];

const reasons = [
  "Local service – technicians available right here in Kanata.",
  "Safe hookups – we connect appliances to existing water lines and outlets.",
  "90-day labour warranty – guaranteed peace of mind.",
  "Quick scheduling – same-day appointments often available in Kanata.",
  "Trusted team – insured, experienced, and friendly.",
];

const highlights = [
  "Kanata Centrum – shopping, dining, and entertainment in the heart of Kanata.",
  "Canadian Tire Centre – home of the Ottawa Senators and major concerts.",
  "Walter Baker Park – trails, sports fields, and a large pond for relaxing walks.",
];

const faqs = [
  {
    question: "Do you offer same-day installation in Kanata?",
    answer: "Yes — in many parts of Kanata, same-day appointments are available. Call us to check today’s schedule.",
  },
  {
    question: "Can you uninstall my old appliance?",
    answer: "Yes, we can remove it before installing the new one (additional fee applies).",
  },
  {
    question: "What appliances do you install?",
    answer: "We install washers, dryers, dishwashers, cooktops, built-in ovens, and microwaves.",
  },
];

export default function ApplianceInstallationKanataPage() {
  return (
    <>
      <ServiceHero
        title="Appliance Installation Kanata"
        description={
          <>
            Need help setting up a new appliance in Kanata? Fixer provides safe, reliable <Link href="/appliance-installation/locations/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link>, now available right here in Kanata. Whether it's a washer, dryer, dishwasher, or oven, we'll connect it properly and back the job with a 90-day labour warranty.
          </>
        }
        icon={<FaWrench className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        additionalContent={
          <p className="text-lg text-gray-100 mt-4">
            For repairs instead of installation, see our{" "}
            <Link href="/kanata" className="text-white underline font-semibold hover:text-gray-100">
              Kanata Appliance Repair service
            </Link>
            .
          </p>
        }
        useSectionPadding={false}
      />

      <RelatedServicesSection
        services={appliances}
        heading="Common Appliances We Install in Kanata"
        description="Our technicians handle safe, professional installation for:"
      />

      <BenefitsSection
        benefits={reasons}
        heading="Why Choose Fixer in Kanata?"
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Explore Kanata While We Work"
        description="While we handle the installation, you can enjoy Kanata's highlights:"
        
        linkText="Ottawa events calendar"
      />

      <FAQSection faqs={faqs} />

      <CTASection
        heading="Book Your Appliance Installation in Kanata"
        description="Don't wait days to start using your new appliance — schedule your installation in Kanata today and enjoy same-day availability in many areas."
        phoneText="Call/Text: 613-413-6969"
      />
    </>
  );
}
