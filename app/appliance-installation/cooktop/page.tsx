import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import BenefitsSection from "@/components/BenefitsSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationNotesSection from "@/components/InstallationNotesSection";
import WhenNeededSection from "@/components/WhenNeededSection";
import InstallationProcessSection from "@/components/InstallationProcessSection";

export const metadata: Metadata = {
  title: "Cooktop Installation Ottawa – Reliable Appliance Setup | Fixer",
  description:
    "Reliable cooktop installation in Ottawa — correct alignment, safe hookups, 90-day warranty. Call 613-413-6969 today!",
  keywords:
    "cooktop installation Ottawa, stovetop installation Ottawa",
};

const whenNeeded = [
  "You’ve purchased a new cooktop and need safe, professional installation.",
  "Your existing cooktop failed, and you’re replacing it with a new unit.",
  "You’re updating your kitchen and want a technician to install your cooktop.",
];

const processSteps = [
  "Arrival & assessment – technician checks the cut-out size and electrical hookup.",
  "Connection – safe installation into the counter and connection to outlet.",
  "Testing – we verify heating elements function properly.",
  "Cleanup – work area left neat and safe.",
];

const reasons = [
  "Proper fit – secure installation into countertop cutouts.",
  "Safe hookups – existing electrical connections only.",
  "90-day labour warranty – every installation guaranteed.",
  "Fast turnaround – quick appointments available.",
  "Professional technicians – insured and reliable service.",
];

const relatedServices = [
  { label: "Washer Installation Ottawa", href: "/appliance-installation/washer" },
  { label: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
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
    question: "Do you check the countertop cutout size?",
    answer: "Yes, we confirm the cooktop fits into the existing cutout before installation.",
  },
  {
    question: "Do you connect to electrical wiring?",
    answer: "We connect to existing outlets only — no rewiring or hardwiring.",
  },
  {
    question: "How long does cooktop installation take?",
    answer: "Typically about 1 hour, depending on the kitchen setup.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function CooktopInstallationOttawaPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaFire className="text-[30px] mb-2 inline-block" /> Cooktop Installation Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Cooktops demand careful installation for safety and performance. Fixer provides reliable <Link href="/appliance-installation/locations/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link>, ensuring proper alignment and hookups. If your cooktop isn’t working right, our{" "}
              <Link href="/cooktop-repair" className="text-white underline font-semibold hover:text-gray-100">
                Cooktop Repair Ottawa
              </Link> service can help.
            </p>
          </div>
        </div>
      </section>

      <WhenNeededSection
        items={whenNeeded}
        applianceName="Cooktop"
        footerText={
          <>
            💡 Not sure if replacement is necessary? Visit{" "}
            <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 font-semibold hover:underline">
              Repair vs New Appliance Installation
            </Link>
            . For repair service, check{" "}
            <Link href="/service-areas" className="text-primary-600 font-semibold hover:underline">
              Appliance Repair Ottawa
            </Link>
            .
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
        heading="Schedule Your Cooktop Installation"
        description="Get your new cooktop installed the right way — safe connections, quick service, no stress."
        phoneText="Call/Text: 613-413-6969"
      />
    </>
  );
}
