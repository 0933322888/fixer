import { Metadata } from "next";
import Link from "next/link";
import { FaWind } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import BenefitsSection from "@/components/BenefitsSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationNotesSection from "@/components/InstallationNotesSection";
import WhenNeededSection from "@/components/WhenNeededSection";
import InstallationProcessSection from "@/components/InstallationProcessSection";

export const metadata: Metadata = {
  title: "Dryer Installation Ottawa – Professional Setup & Hookups | Fixer",
  description:
    "Professional dryer installation in Ottawa — safe venting, reliable connections, 90-day warranty. 613-413-6969.",
  keywords:
    "dryer installation Ottawa, dryer vent hookup Ottawa",
};

const whenNeeded = [
  "You bought a new dryer and need proper venting and safe hookups.",
  "Your old dryer stopped working, and you chose to replace it.",
  "You’ve moved into a new home and need a technician to install your dryer.",
];

const processSteps = [
  "Arrival & assessment – technician checks venting and electrical outlet.",
  "Connection – secure setup to existing vent and outlet.",
  "Testing – we run the dryer briefly to confirm airflow and heating.",
  "Cleanup – work area left neat and safe.",
];

const reasons = [
  "Vent & safety check – we ensure existing vents and outlets are ready.",
  "Safe connections – secure setup to existing venting and electrical outlets.",
  "90-day labour warranty – backed by Fixer.",
  "Quick service – same-day appointments often available.",
  "Professional technicians – insured and experienced.",
];

const relatedServices = [
  { label: "Washer Installation Ottawa", href: "/appliance-installation/washer" },
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
  { label: "Cooktop Installation Ottawa", href: "/appliance-installation/cooktop" },
  { label: "Appliance Installation Ottawa", href: "/appliance-installation/locations/ottawa" },
  { label: "Fridge Installation Ottawa", href: null },
  { label: "Freezer Installation Ottawa", href: null },
  { label: "Oven Installation Ottawa", href: "/appliance-installation/oven" },
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/microwave" },
];

const importantNotes = [
  { title: "No plumbing work", description: "Our technicians connect appliances to pre-installed water lines only." },
  { title: "No electrical rewiring", description: "Installation is done on existing outlets." },
  { title: "No hardwiring", description: "We do not perform hardwire connections; appliances must plug into an existing outlet." },
];

const faqItems = [
  {
    question: "Do you connect dryer vents?",
    answer: "Yes, we connect your dryer to an existing vent. We do not install new vent systems.",
  },
  {
    question: "Can you reverse the dryer door swing?",
    answer: "If your model allows, we can do this during installation (additional fee applies).",
  },
  {
    question: "How long does a dryer installation take?",
    answer: "Usually about 45–60 minutes.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function DryerInstallationOttawaPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaWind className="text-[30px] mb-2 inline-block" /> Dryer Installation Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Installing a dryer isn’t just about plugging it in — proper venting and safe connections are key. Our team offers expert <Link href="/appliance-installation/locations/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> across all neighborhoods. If your existing unit isn’t working, visit our{" "}
              <Link href="/dryer-repair" className="text-white underline font-semibold hover:text-gray-100">
                Dryer Repair Ottawa page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <WhenNeededSection
        items={whenNeeded}
        applianceName="Dryer"
        footerText={
          <>
            Not sure if you should repair or replace? Our{" "}
            <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 font-semibold hover:underline">
              Repair vs New Appliance Installation
            </Link>{" "}
            page can help. You can also explore{" "}
            <Link href="/service-areas" className="text-primary-600 font-semibold hover:underline">
              Appliance Repair Ottawa
            </Link>{" "}
            for service options.
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
        heading="Book Your Dryer Installation in Ottawa"
        description="Don't let that brand-new dryer sit idle — schedule your installation today and start drying clothes the same day."
        phoneText="Call/Text: 613-413-6969"
      />
    </>
  );
}
