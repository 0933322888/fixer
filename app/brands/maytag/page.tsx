import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandAppliancesSection from "@/components/BrandAppliancesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Maytag Appliance Repair Ottawa – Local Experts You Can Trust | Fixer",
  description:
    "Professional Maytag appliance repair in Ottawa — washers, dryers, fridges, ovens & more. Trusted local techs, fair pricing, and a 90-day warranty.",
  keywords:
    "Maytag appliance repair Ottawa, Maytag washer repair Ottawa, Maytag fridge repair Ottawa",
};

const whyChooseUs = [
  "Ottawa technicians trained on Maytag laundry and kitchen appliances",
  "Fully stocked vans with Maytag-compatible parts for faster fixes",
  "Same-day availability in many neighbourhoods",
  "Upfront pricing and a 90-day labour warranty on every repair",
];

const maytagAppliances = [
  {
    title: "Maytag Washers",
    description:
    "Front-load washers need regular cleaning to stay fresh and prevent odor. Maytag’s own guide shows how — and if your washer still leaks or throws error codes, Fixer is ready to repair it.",
    link: { href: "/washer-repair", label: "Washer Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Washer_icon.png" alt="Maytag washer" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Maytag Dryers",
    description:
    "When dryers stop heating or shut off mid-cycle, we replace heating elements, thermostats, and fuses quickly.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Dryer_icon.png" alt="Maytag dryer" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Maytag Refrigerators",
    description:
    "From cooling failures to noisy fans and ice maker issues, our Ottawa techs repair all common Maytag fridge problems.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Fridge_icon.png" alt="Maytag refrigerator" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Maytag Dishwashers",
    description:
      "If your dishwasher won’t drain or leaves dishes dirty, we clean filters, fix pumps, and restore performance.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/luEp9bbawt0"
          title="Maytag Washer Cleaning Guide"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
  },
  {
    title: "Maytag Ovens & Cooktops",
    description:
      "Uneven baking or burners not heating? We repair Maytag ovens and cooktops safely and efficiently.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Oven_icon.png" alt="Maytag oven and cooktop" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Maytag Microwaves",
    description:
      "From sparking to control panel issues, we repair Maytag microwaves quickly and safely.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Microwave_icon.png" alt="Maytag microwave" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
];

const miniCases = [
  {
    title: "Nepean Washer Repair",
    description:
      "A Maytag washer leaked during spin cycles. A new door boot seal solved the issue.",
  },
  {
    title: "Kanata Fridge Fix",
    description:
      "A Maytag fridge stopped cooling. Replacing the start relay fixed it the same day.",
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
    title: "Refrigerator ice maker leaking",
    description: "We check the water inlet valve, ice maker assembly, and water lines.",
  },
  {
    title: "Dishwasher leaving dishes dirty",
    description: "We inspect the pump, filters, spray arms, and sensors for proper cleaning.",
  },
  {
    title: "Oven not heating evenly",
    description: "We check the heating element, thermostat, and sensors for even heating.",
  },
  {
    title: "Microwave not starting",
    description: "We inspect the control panel, fuses, door switches, and sensors.",
  },
];

export default function MaytagBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Maytag Appliance Repair in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-4">
              Maytag built its reputation on toughness — but even the toughest appliances break down sometimes. When they do, Fixer is here to get them back in action.
            </p>
            <p className="text-lg text-gray-200">
              Have more than one brand at home? Fixer services many{" "}
              <Link href="/brands" className="text-white font-semibold underline hover:text-gray-100">
                appliance brands
              </Link>
              , not just Maytag.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <BenefitsSection 
        heading="Why Choose Fixer for Maytag Repairs" 
        message="Our Ottawa technicians handle everything from washers that won't spin to ovens that won't bake. We bring the right tools, years of experience, and every repair comes with a 90-day warranty. Same-day appointments available in many areas — call us to check today's availability."
        benefits={whyChooseUs} 
      />

      {/* Appliances Grid */}
      <BrandAppliancesSection brandName="Maytag" appliances={maytagAppliances} />

      {/* Mini Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Recent Maytag Fixes Around Ottawa</h2>
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
      <CommonIssuesSection issues={commonProblems} heading="Common Maytag Problems We Fix" />

      {/* CTA */}
      <CTASection 
        heading="Book Your Maytag Appliance Repair" 
        description="We fix it fast, and we fix it right — so you don't have to see us twice (unless you miss us 😉)." 
      />
    </>
  );
}
