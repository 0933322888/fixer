import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import BenefitsSection from "@/components/BenefitsSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Appliance Installation Stittsville – Reliable Setup for All Appliances | Fixer",
  description:
    "Professional appliance installation in Stittsville — washers, dryers, dishwashers, ovens & more. Safe hookups, 90-day warranty. 📞 613-413-6969.",
  keywords:
    "appliance installation Stittsville, washer installation Stittsville, dryer installation Stittsville",
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
  "Local coverage – serving homes throughout Stittsville.",
  "Professional setup – safe water and electrical connections.",
  "90-day labour warranty – every job backed by Fixer.",
  "Fast response – appointments often available same-day.",
  "Reliable technicians – skilled, insured, and local.",
];

const highlights = [
  "Village Square Park – a community hub with green space and seasonal events.",
  "Stittsville Main Street – local shops, cafés, and restaurants to explore.",
  "Amberwood Village Golf & Country Club – for a quick round or a bite at the clubhouse.",
];

const faqs = [
  {
    question: "Are installations in Stittsville covered by warranty?",
    answer: "Yes — every installation is backed by a 90-day labour warranty.",
  },
  {
    question: "Do you service all brands of appliances?",
    answer: "Absolutely — we install major brands including LG, Samsung, Whirlpool, GE, Maytag, Bosch, and more.",
  },
  {
    question: "How long does a typical installation take?",
    answer: "Most jobs take about an hour, depending on the appliance and setup.",
  },
];

export default function ApplianceInstallationStittsvillePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaMapMarkerAlt className="text-[30px] mb-2 inline-block" /> Appliance Installation Stittsville</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              From washers and dryers to dishwashers and ovens, Fixer offers professional <Link href="/appliance-installation/locations/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> with full coverage in Stittsville. Our technicians ensure correct hookups and safe connections, all supported by a 90-day labour warranty.
            </p>
            <p className="text-lg text-gray-100 mt-4">
              If you're looking for repairs, visit our{ " "}
              <Link href="/stittsville" className="text-white underline font-semibold hover:text-gray-100">
                Stittsville Appliance Repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <RelatedServicesSection
        services={appliances}
        heading="Common Appliances We Install in Stittsville"
        description="We provide safe connections and testing for:"
      />

      <BenefitsSection
        benefits={reasons}
        heading="Why Choose Fixer in Stittsville?"
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Explore Stittsville While We Work"
        description="Make the most of your time in Stittsville while we install your appliance:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="Ottawa events calendar"
      />

      <FAQSection faqs={faqs} />

      <CTASection
        heading="Ready to Schedule Your Stittsville Installation?"
        description="From washers to dishwashers, Fixer makes installation quick and reliable. Book now and get your appliance running the right way, right away."
        phoneText="Call/Text: 613-413-6969"
      />
    </>
  );
}
