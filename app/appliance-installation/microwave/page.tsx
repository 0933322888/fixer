import { Metadata } from "next";
import Link from "next/link";
import { FaWaveSquare } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import BenefitsSection from "@/components/BenefitsSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationNotesSection from "@/components/InstallationNotesSection";
import WhenNeededSection from "@/components/WhenNeededSection";
import InstallationProcessSection from "@/components/InstallationProcessSection";

export const metadata: Metadata = {
  title: "Microwave Installation Ottawa – Professional Installation | Fixer",
  description:
    "Professional microwave installation in Ottawa — safe mounting, proper venting, 90-day warranty. Call 613-413-6969.",
  keywords:
    "microwave installation Ottawa, over the range microwave installation Ottawa",
};

const whenNeeded = [
  "You bought an over-the-range microwave and need it mounted safely.",
  "You’re replacing an older microwave with a new model.",
  "You want proper venting and installation after a kitchen upgrade.",
];

const processSteps = [
  "Arrival & assessment – we check mounting space and venting.",
  "Connection – safe mounting and hookup to existing outlet.",
  "Testing – fan, light, and heating tested.",
  "Cleanup – area left tidy before we leave.",
];

const reasons = [
  "Expert mounting – over-the-range microwaves installed securely.",
  "Safe connections – plugged into existing outlets, no rewiring.",
  "90-day labour warranty – backed by Fixer.",
  "Convenient scheduling – often same-day in Ottawa.",
  "Local professionals – insured and trusted technicians.",
];

const relatedServices = [
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
  { label: "Cooktop Installation Ottawa", href: "/appliance-installation/cooktop" },
  { label: "Appliance Installation Ottawa", href: "/appliance-installation/locations/ottawa" },
  { label: "Fridge Installation Ottawa", href: null },
  { label: "Freezer Installation Ottawa", href: null },
  { label: "Oven Installation Ottawa", href: "/appliance-installation/oven" },
  { label: "Washer Installation Ottawa", href: "/appliance-installation/washer" },
  { label: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
];

const importantNotes = [
  { title: "No plumbing work", description: "Our technicians connect appliances to pre-installed water lines only." },
  { title: "No electrical rewiring", description: "Installation is done on existing outlets." },
  { title: "No hardwiring", description: "We do not perform hardwire connections; appliances must plug into an existing outlet." },
];

const faqItems = [
  {
    question: "Do you handle microwave installation in Ottawa?",
    answer: "Yes, we install new microwaves and connect them to existing outlets.",
  },
  {
    question: "Do you handle venting?",
    answer: "Yes, we connect to existing vent systems but do not install new ductwork.",
  },
  {
    question: "How long does microwave installation take?",
    answer: "Usually about 1 hour.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function MicrowaveInstallationOttawaPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaWaveSquare className="text-[30px] mb-2 inline-block" /> Microwave Installation Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Over-the-range microwaves require safe mounting and correct venting. At Fixer, we offer expert <Link href="/appliance-installation/locations/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> for kitchens across the city. For ongoing issues, see our{" "}
              <Link href="/microwave-repair" className="text-white underline font-semibold hover:text-gray-100">
                Microwave Repair Ottawa service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <WhenNeededSection
        items={whenNeeded}
        applianceName="Microwave"
        footerText={
          <>
            💡 Thinking about repair vs replacement? See our{" "}
            <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 font-semibold hover:underline">
              Repair vs New Appliance Installation
            </Link>{" "}
            guide. You can also visit{" "}
            <Link href="/service-areas" className="text-primary-600 font-semibold hover:underline">
              Appliance Repair Ottawa
            </Link>{" "}
            for repair services.
          </>
        }
      />

      <InstallationProcessSection steps={processSteps} />

      <BenefitsSection
        benefits={reasons}
        heading="Why Choose Fixer for Installation?"
      />

      <RelatedServicesSection
        services={relatedServices}
        heading="Related Installation Services"
      />

      <InstallationNotesSection notes={importantNotes} />

      <FAQSection faqs={faqItems} />

      <ThingsToDoSection
        attractions={exploreItems}
        heading="Explore Ottawa While We Work"
        description="While we handle the installation, why not enjoy some of Ottawa's highlights?"
        
        linkText="Ottawa events calendar"
      />

      <CTASection
        heading="Book Your Microwave Installation in Ottawa"
        description="We'll mount and connect your microwave properly, so you can reheat, cook, and enjoy without the hassle."
        phoneText="Call/Text: 613-413-6969"
      />
    </>
  );
}
