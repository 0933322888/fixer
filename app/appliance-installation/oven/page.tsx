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
  title: "Oven Installation Ottawa – Safe, Expert Hookups | Fixer",
  description:
    "Safe built-in oven installation in Ottawa — precise fitting, expert connections, 90-day warranty. 613-413-6969.",
  keywords:
    "built-in oven installation Ottawa, wall oven installation Ottawa",
};

const whenNeeded = [
  "You’ve purchased a new built-in oven and need it fitted correctly.",
  "Your old oven has been removed, and you’re upgrading.",
  "You’re remodeling your kitchen and want professional installation.",
];

const processSteps = [
  "Arrival & assessment – we confirm the cabinet opening matches your oven size.",
  "Connection – safe hookup to existing electrical outlet (no hardwire).",
  "Testing – we check heating and controls after installation.",
  "Cleanup – area left tidy, oven seated securely.",
];

const reasons = [
  "Precision work – careful fitting of built-in ovens into cabinets.",
  "Safe electrical setup – proper connections, no hardwiring.",
  "90-day labour warranty – guaranteed workmanship.",
  "Flexible scheduling – book at a time that works for you.",
  "Trusted locally – Ottawa homeowners count on Fixer.",
];

const relatedServices = [
  { label: "Cooktop Installation Ottawa", href: "/appliance-installation/cooktop" },
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/microwave" },
  { label: "Appliance Installation Ottawa", href: "/appliance-installation/locations/ottawa" },
  { label: "Fridge Installation Ottawa", href: null },
  { label: "Freezer Installation Ottawa", href: null },
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/microwave" },
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
    question: "Do I need to check cabinet size before installation?",
    answer: "Yes — please confirm your new built-in oven fits the existing cabinet opening.",
  },
  {
    question: "Do you hardwire built-in ovens?",
    answer: "No — we connect only to existing outlets, no hardwire service is provided.",
  },
  {
    question: "How long does oven installation take?",
    answer: "Most built-in ovens are installed in about 1–2 hours.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function OvenInstallationOttawaPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaFire className="text-[30px] mb-2 inline-block" /> Built-in Oven Installation Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Built-in ovens require precise fitting and safe electrical connections. Our technicians specialize in{" "}
              <Link href="/appliance-installation/locations/ottawa" className="text-white underline font-semibold hover:text-gray-100">
                appliance installation in Ottawa
              </Link>
              , making sure your oven is set securely into place. If your oven isn’t heating properly, see our{" "}
              <Link href="/oven-repair" className="text-white underline font-semibold hover:text-gray-100">
                Oven Repair Ottawa page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <WhenNeededSection
        items={whenNeeded}
        applianceName="Built-in Oven"
        footerText={
          <>
            Still choosing between fixing or replacing? Read our{" "}
            <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 font-semibold hover:underline">
              Repair vs New Appliance Installation
            </Link>
            . For oven repairs, see{" "}
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
        heading="Book a Built-in Oven Installation Today"
        description="We'll fit your oven securely and safely — so you can get back to cooking without delays."
        phoneText="Call/Text: 613-413-6969"
      />
    </>
  );
}
