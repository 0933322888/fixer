import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import BenefitsSection from "@/components/BenefitsSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Appliance Installation Nepean – Safe, Professional Service | Fixer",
  description:
    "Trusted appliance installation in Nepean. We install washers, dryers, dishwashers, ovens & more with safe connections & 90-day warranty. Call 613-413-6969.",
  keywords:
    "appliance installation Nepean, washer installation Nepean, dryer installation Nepean",
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
  "Local experts – serving Nepean and surrounding areas.",
  "Safe installations – proper connections to existing hookups only.",
  "90-day labour warranty – clear, reliable coverage.",
  "Convenient scheduling – book times that work for you.",
  "Proven trust – professional, insured technicians.",
];

const highlights = [
  "Nepean Sportsplex – a large complex with pools, skating, and fitness facilities.",
  "Andrew Haydon Park – scenic waterfront park with trails and picnic areas.",
  "Merivale Shopping District – great for quick shopping or dining.",
];

const faqs = [
  {
    question: "Do you install appliances in all parts of Nepean?",
    answer: "Yes — we cover Centrepointe, Barrhaven East, Merivale, and surrounding neighbourhoods.",
  },
  {
    question: "Can I book installation on weekends?",
    answer: "Yes — weekend appointments are often available. Call to confirm availability.",
  },
  {
    question: "Do you bring the necessary tools?",
    answer: "Yes, our technicians arrive with the tools needed for safe and reliable installation.",
  },
];

export default function ApplianceInstallationNepeanPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaMapMarkerAlt className="text-[30px] mb-2 inline-block" /> Appliance Installation Nepean</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Getting a new appliance installed in Nepean has never been easier. Fixer delivers expert <Link href="/appliance-installation/locations/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> with local service in Nepean. We handle washers, dryers, dishwashers, ovens, and more — always with a 90-day warranty.
            </p>
            <p className="text-lg text-gray-100 mt-4">
              For repair services, see our{" "}
              <Link href="/nepean" className="text-white underline font-semibold hover:text-gray-100">
                Nepean Appliance Repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <RelatedServicesSection
        services={appliances}
        heading="Common Appliances We Install in Nepean"
        description="Fixer installation services cover:"
      />

      <BenefitsSection
        benefits={reasons}
        heading="Why Choose Fixer in Nepean?"
      />

      <ThingsToDoSection
        attractions={highlights}
        heading="Explore Nepean While We Work"
        description="Enjoy Nepean attractions while we take care of the installation:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="Ottawa events calendar"
      />

      <FAQSection faqs={faqs} />

      <CTASection
        heading="Appliance Installation Nepean – Book Today"
        description="Enjoy hassle-free installation backed by a 90-day labour warranty. Call us now to arrange your Nepean appointment."
        phoneText="Call/Text: 613-413-6969"
      />
    </>
  );
}
