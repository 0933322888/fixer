import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appliance Installation Stittsville – Reliable Setup for All Appliances | Fixer",
  description:
    "Professional appliance installation in Stittsville — washers, dryers, dishwashers, ovens & more. Safe hookups, 90-day warranty. Call 613-413-6969.",
  keywords:
    "appliance installation Stittsville, washer installation Stittsville, dryer installation Stittsville",
};

const appliances = [
  { label: "Washer Installation Ottawa", href: "/appliance-installation/washer" },
  { label: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
  { label: "Built-in Oven Installation Ottawa", href: "/appliance-installation/oven" },
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
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Appliance Installation Stittsville</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              From washers and dryers to dishwashers and ovens, Fixer offers professional <Link href="/appliance-installation/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> with full coverage in Stittsville. Our technicians ensure correct hookups and safe connections, all supported by a 90-day labour warranty.
            </p>
            <p className="text-lg text-gray-100 mt-4">
              If you’re looking for repairs, visit our{ " "}
              <Link href="/stittsville" className="text-white underline font-semibold hover:text-gray-100">
                Stittsville Appliance Repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
