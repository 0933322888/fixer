import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import BenefitsSection from "@/components/BenefitsSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationNotesSection from "@/components/InstallationNotesSection";
import WhenNeededSection from "@/components/WhenNeededSection";
import InstallationProcessSection from "@/components/InstallationProcessSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Washer Installation Ottawa – Safe, Reliable Service | Fixer",
  description:
    "Expert washer installation in Ottawa — safe hookups, proper testing, 90-day warranty. Call 613-413-6969 today!",
  keywords:
    "washer installation Ottawa, washing machine installation Ottawa",
};

const whenNeeded = [
  "You’ve purchased a new washer and need it connected safely.",
  "Your old washer was removed, and you’re upgrading to a new one.",
  "You’ve just renovated your laundry room and want a professional setup.",
];

const processSteps = [
  "Arrival & assessment – we check your laundry hookups and make sure the space is ready.",
  "Connection – safe hookup to existing water lines and electrical outlets.",
  "Testing – we run a quick cycle to confirm proper operation.",
  "Cleanup – area left tidy before we go.",
];

const reasons = [
  "Local technicians – serving Ottawa and nearby towns.",
  "Safe hookups – proper connection to existing water lines and outlets.",
  "90-day labour warranty – peace of mind after every job.",
  "Fast scheduling – same-day appointments available in many areas.",
  "Trusted service – friendly, professional, and fully insured.",
];

const relatedServices = [
  { label: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
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
    question: "Do you connect washers to water lines?",
    answer: "Yes — we connect to existing hot and cold water lines only. Plumbing modifications are not included.",
  },
  {
    question: "Can you uninstall my old washer?",
    answer: "Yes, we can remove the old unit before installing the new one (additional fee applies).",
  },
  {
    question: "How long does washer installation take?",
    answer: "Most washer installations are completed within an hour.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function WasherInstallationOttawaPage() {
  return (
    <>
      <ServiceHero
        title="Washer Installation Ottawa"
        description={
          <>
            Need help setting up your new washer? At Fixer, we provide safe, professional <Link href="/appliance-installation/locations/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> so you can start using it right away. Whether it's a replacement or your first machine, our technicians ensure correct hookups and testing. For ongoing issues, see our{" "}
            <Link href="/washer-repair" className="text-white underline font-semibold hover:text-gray-100">
              Washer Repair Ottawa service
            </Link>
            .
          </>
        }
        icon={<FaTshirt className="text-[30px] mb-2 inline-block" />}
        headingSize="xl"
        useSectionPadding={false}
      />

      <WhenNeededSection
        items={whenNeeded}
        applianceName="Washer"
        footerText={
          <>
            Still deciding between repair and replacement? See our{" "}
            <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 font-semibold hover:underline">
              Repair vs New Appliance Installation guide
            </Link>
            . If you'd rather fix your current unit, check our{" "}
            <Link href="/service-areas" className="text-primary-600 font-semibold hover:underline">
              Appliance Repair Ottawa services
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
        
        linkText="Ottawa events calendar"
      />

      <CTASection
        heading="Ready to Book Your Washer Installation?"
        description="We'll get your new washer hooked up quickly and correctly — so laundry day won't have to wait."
        phoneText="Call/Text: 613-413-6969"
      />
    </>
  );
}
