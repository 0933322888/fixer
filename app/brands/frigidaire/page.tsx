import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandAppliancesSection from "@/components/BrandAppliancesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Frigidaire Appliance Repair Ottawa – Trusted Local Service | Fixer",
  description:
    "Reliable Frigidaire appliance repair in Ottawa — washers, dryers, fridges, ovens & more. Expert local techs, clear pricing, and a 90-day warranty.",
  keywords:
    "Frigidaire appliance repair Ottawa, Frigidaire washer repair Ottawa, Frigidaire fridge repair Ottawa",
};

const whyChooseUs = [
  "Ottawa technicians experienced with Frigidaire laundry and kitchen models",
  "Well-stocked vans for faster on-site fixes",
  "Same-day appointments available in many neighbourhoods",
  "Upfront estimates with a 90-day labour warranty",
];

const frigidaireAppliances = [
  {
    title: "Frigidaire Washers",
    description:
      "Front-load washers need regular maintenance to prevent odors and drainage issues. Frigidaire’s own care guide shows how — and if the washer still leaks or shows error codes, Fixer can handle the repair.",
    link: { href: "/washer-repair", label: "Washer Repair Ottawa" },
    media: (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/k0ccSbDfHdI?list=PLnLZy4eZl2XRsuEElFRerlYs2nDeFQG0K"
          title="Frigidaire Washer Care Guide"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
  },
  {
    title: "Frigidaire Dryers",
    description:
      "If your dryer won’t heat or shuts off mid-cycle, we repair elements, thermostats, and fuses.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Dryer_icon.png" alt="Frigidaire dryer" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Frigidaire Refrigerators",
    description:
      "Cooling issues, broken ice makers, or leaking water lines — Fixer has handled it all.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Fridge_icon.png" alt="Frigidaire refrigerator" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Frigidaire Dishwashers",
    description:
      "From drain errors to dirty dishes, we clean filters, replace pumps, and restore performance.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Dishwasher_icon.png" alt="Frigidaire dishwasher" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Frigidaire Ovens & Cooktops",
    description:
      "Uneven baking or burners not heating? Our Ottawa technicians fix Frigidaire ovens and cooktops every week.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Oven_icon.png" alt="Frigidaire oven and cooktop" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Frigidaire Microwaves",
    description:
      "If your microwave sparks, won’t start, or shuts off mid-cycle, we repair switches, fuses, and more.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Microwave_icon.png" alt="Frigidaire microwave" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
];

const miniCases = [
  {
    title: "Kanata Washer Repair",
    description:
      "A Frigidaire washer kept leaking from the bottom. A new drain pump fixed the problem.",
  },
  {
    title: "Stittsville Fridge Fix",
    description:
      "A Frigidaire fridge stopped cooling. We replaced the condenser fan, and it was back in service.",
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
    title: "Dishwasher not cleaning dishes",
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

export default function FrigidaireBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Frigidaire Appliance Repair in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-4">
              Frigidaire has been part of Canadian homes for generations, from dependable washers to roomy fridges. When they break down, Fixer gets them running again fast.
            </p>
            <p className="text-lg text-gray-200">
              Have more than one brand at home? Fixer services many{" "}
              <Link href="/brands" className="text-white font-semibold underline hover:text-gray-100">
                appliance brands
              </Link>
              , not just Frigidaire.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <BenefitsSection 
        heading="Why Choose Fixer for Frigidaire Repairs" 
        message="We've seen it all with Frigidaire — dishwashers that won't drain, dryers that won't heat, and ovens that bake unevenly. Our Ottawa technicians carry parts, offer clear pricing, and back every repair with a 90-day warranty. Same-day appointments available in many areas — call us to check today's availability."
        benefits={whyChooseUs} 
      />

      {/* Appliances Grid */}
      <BrandAppliancesSection brandName="Frigidaire" appliances={frigidaireAppliances} />

      {/* Mini Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Recent Frigidaire Fixes Around Ottawa</h2>
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
      <CommonIssuesSection issues={commonProblems} heading="Common Frigidaire Problems We Fix" />

      {/* CTA */}
      <CTASection 
        heading="Book Your Frigidaire Appliance Repair" 
        description="We fix it fast, and we fix it right — so you don't have to see us twice (unless you miss us 😉)." 
      />
    </>
  );
}
