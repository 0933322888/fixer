import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import BenefitsSection from "@/components/BenefitsSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationNotesSection from "@/components/InstallationNotesSection";
import WhenNeededSection from "@/components/WhenNeededSection";
import InstallationProcessSection from "@/components/InstallationProcessSection";

export const metadata: Metadata = {
  title: "Dishwasher Installation Ottawa – Expert Installation Service | Fixer",
  description:
    "Expert dishwasher installation in Ottawa — proper water line and electrical hookups, 90-day warranty. Call 613-413-6969.",
  keywords:
    "dishwasher installation Ottawa, built-in dishwasher install Ottawa",
};

const whenNeeded = [
  "You’ve purchased a new dishwasher and want proper water line and electrical connections.",
  "You’re upgrading from an older model after years of use.",
  "You’ve just renovated your kitchen and need a new unit installed.",
];

const processSteps = [
  "Arrival & assessment – we verify existing water and drain connections.",
  "Connection – secure hookup to water, drain, and electrical outlet.",
  "Testing – we run a short cycle to ensure there are no leaks.",
  "Cleanup – workspace left clean, packaging removed if possible.",
];

const reasons = [
  "Experienced team – skilled with all major dishwasher brands.",
  "Leak-free connections – secure water, drain, and electrical hookups.",
  "90-day labour warranty – your installation is backed by Fixer.",
  "Quick service – appointments often available same-day.",
  "Professional care – insured, reliable technicians.",
];

const relatedServices = [
  { label: "Washer Installation Ottawa", href: "/appliance-installation/washer" },
  { label: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
  { label: "Fridge Installation Ottawa", href: null },
  { label: "Freezer Installation Ottawa", href: null },
  { label: "Oven Installation Ottawa", href: "/appliance-installation/oven" },
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/microwave" },
  { label: "Appliance Installation Ottawa", href: "/appliance-installation/locations/ottawa" },
];

const importantNotes = [
  { title: "No plumbing work", description: "Our technicians connect appliances to pre-installed water lines only." },
  { title: "No electrical rewiring", description: "Installation is done on existing outlets." },
  { title: "No hardwiring", description: "We do not perform hardwire connections; appliances must plug into an existing outlet." },
];

const faqItems = [
  {
    question: "Do you connect dishwashers to water and drain lines?",
    answer: "Yes — we connect dishwashers to existing water and drain lines. No plumbing work is included.",
  },
  {
    question: "Do you level the dishwasher?",
    answer: "Yes, we make sure the unit sits properly and level before finishing the job.",
  },
  {
    question: "What if my old dishwasher is stuck?",
    answer: "We can carefully remove the old appliance before installing the new one (additional fee applies).",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function DishwasherInstallationOttawaPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaUtensils className="text-[30px] mb-2 inline-block" /> Dishwasher Installation Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              A dishwasher only works as well as it’s installed. At Fixer, we provide professional <Link href="/appliance-installation/locations/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> to ensure correct water and electrical hookups. For troubleshooting or leaks, check our{" "}
              <Link href="/dishwasher-repair" className="text-white underline font-semibold hover:text-gray-100">
                Dishwasher Repair Ottawa service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <WhenNeededSection
        items={whenNeeded}
        applianceName="Dishwasher"
        footerText={
          <>
            Wondering if repair might be enough? Visit{" "}
            <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 font-semibold hover:underline">
              Repair vs New Appliance Installation
            </Link>
            . Or see our{" "}
            <Link href="/service-areas" className="text-primary-600 font-semibold hover:underline">
              Appliance Repair Ottawa
            </Link>{" "}
            page for service options.
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
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="Ottawa events calendar"
      />

      <CTASection
        heading="Schedule Your Dishwasher Installation"
        description="Enjoy spotless dishes without the hassle — let Fixer handle your dishwasher install with a 90-day labour warranty."
        phoneText="Call/Text: 613-413-6969"
      />
    </>
  );
}
