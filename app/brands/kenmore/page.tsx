import { Metadata } from "next";
import Link from "next/link";
import BrandAppliancesSection from "@/components/BrandAppliancesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Kenmore Appliance Repair Ottawa – Reliable Local Service | Fixer",
  description:
    "Trusted Kenmore appliance repair in Ottawa — washers, dryers, fridges, dishwashers & more. Local experts, fair pricing, and a 90-day warranty.",
  keywords:
    "Kenmore appliance repair Ottawa, Kenmore washer repair Ottawa, Kenmore fridge repair Ottawa",
};

const whyChooseUs = [
  "Ottawa technicians who repair Kenmore laundry and kitchen appliances every week",
  "Stocked vans mean faster repairs with quality parts",
  "Same-day appointments available in many neighbourhoods",
  "Clear pricing and a 90-day labour warranty on every job",
];

const kenmoreAppliances = [
  {
    title: "Kenmore Washers",
    description:
      "From clogged drains to noisy spin cycles, Kenmore washers sometimes need a professional touch.",
    link: { href: "/washer-repair", label: "Washer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Kenmore Dryers",
    description:
      "If your Kenmore dryer overheats or won’t start, we replace heating elements, thermostats, and belts quickly.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Kenmore Refrigerators",
    description:
      "Cooling failures, broken ice makers, or leaking water lines — our Ottawa team repairs all common Kenmore fridge problems.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Kenmore Dishwashers",
    description:
      "From poor cleaning to draining issues, we fix Kenmore dishwashers weekly for Ottawa families.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Kenmore Ovens & Cooktops",
    description:
      "Uneven baking or burners not heating? We repair Kenmore ovens and cooktops safely and efficiently.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Kenmore Microwaves",
    description:
      "From sparking to dead control panels, Fixer technicians bring Kenmore microwaves back to life.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
];

const miniCases = [
  {
    title: "Barrhaven Washer Repair",
    description:
      "A Kenmore washer stopped draining. A quick pump replacement solved the issue.",
  },
  {
    title: "Nepean Fridge Fix",
    description:
      "A Kenmore fridge leaked water from the dispenser. Replacing the inlet valve fixed it for good.",
  },
];

const commonProblems = [
  {
    title: "Washer not draining or leaking",
    description: "We check the drain pump, hoses, and connections to restore proper operation.",
  },
  {
    title: "Dryer not heating or shutting off",
    description: "We inspect the heating element, thermostat, and sensors to restore heat.",
  },
  {
    title: "Refrigerator not cooling",
    description: "We check the condenser fan, coils, and thermostat to restore cooling.",
  },
  {
    title: "Dishwasher leaving dishes dirty",
    description: "We inspect the pump, filters, spray arms, and sensors for proper cleaning.",
  },
  {
    title: "Oven not heating properly",
    description: "We check the heating element, thermostat, and sensors for proper heating.",
  },
  {
    title: "Microwave not starting",
    description: "We inspect the control panel, fuses, door switches, and sensors.",
  },
];

export default function KenmoreBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Kenmore Appliance Repair in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-4">
              Kenmore has been part of Ottawa homes for decades — from washers and dryers to fridges and ovens. When they break down, Fixer is here to get them running again.
            </p>
            <p className="text-lg text-gray-200">
              Have more than one brand at home? Fixer services many{" "}
              <Link href="/brands" className="text-white font-semibold underline hover:text-gray-100">
                appliance brands
              </Link>
              , not just Kenmore.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <BenefitsSection 
        heading="Why Choose Fixer for Kenmore Repairs" 
        message="Our Ottawa technicians repair Kenmore appliances every week, from dishwashers that won't drain to ovens that won't heat. We bring the right tools, offer clear pricing, and every repair comes with a 90-day warranty. Same-day appointments available in many areas — call us to check today's availability."
        benefits={whyChooseUs} 
      />

      {/* Appliances Grid */}
      <BrandAppliancesSection brandName="Kenmore" appliances={kenmoreAppliances} />

      {/* Mini Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Recent Kenmore Fixes Around Ottawa</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {miniCases.map((item) => (
                <div key={item.title} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <CommonIssuesSection issues={commonProblems} heading="Common Kenmore Problems We Fix" />

      {/* CTA */}
      <CTASection 
        heading="Book Your Kenmore Appliance Repair" 
        description="We fix it fast, and we fix it right — so you don't have to see us twice (unless you miss us 😉)." 
      />
    </>
  );
}
