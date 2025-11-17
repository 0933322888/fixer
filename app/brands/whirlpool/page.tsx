import { Metadata } from "next";
import Link from "next/link";
import BrandAppliancesSection from "@/components/BrandAppliancesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Whirlpool Appliance Repair Ottawa – Reliable, Local Service | Fixer",
  description:
    "Trusted Whirlpool appliance repair in Ottawa — washers, dryers, fridges, ovens & more. Local experts, fair pricing, and a 90-day warranty on every job.",
  keywords:
    "Whirlpool appliance repair Ottawa, Whirlpool washer repair Ottawa, Whirlpool fridge repair Ottawa",
};

const whyChooseUs = [
  "Ottawa technicians trained on Whirlpool laundry and kitchen appliances",
  "Stocked with genuine-quality parts to keep repairs fast and reliable",
  "Same-day appointments available in many neighbourhoods",
  "Transparent pricing and a 90-day labour warranty on every job",
];

const whirlpoolAppliances = [
  {
    title: "Whirlpool Washers",
    description:
      "From leaking hoses to stubborn error codes, Whirlpool washers are one of our most common calls.",
    link: { href: "/washer-repair", label: "Washer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Whirlpool Dryers",
    description:
      "If your Whirlpool dryer leaves clothes damp or overheats, we replace elements, thermostats, and belts fast.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Whirlpool Refrigerators",
    description:
      "Cooling issues, ice maker leaks, or noisy fans — our team repairs all major Whirlpool fridge problems.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Whirlpool Dishwashers",
    description:
      "When Whirlpool dishwashers stop draining or leave dishes dirty, our Ottawa techs clean filters, fix pumps, and replace control boards.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Whirlpool Ovens & Cooktops",
    description:
      "A shiny glass cooktop looks great — until spills burn onto the surface. Whirlpool’s own cleaning tips help keep it spotless, and if the burners themselves stop heating, Fixer can handle the repair.",
    links: [
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
    ],
    media: (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/NWqRokO-Wgo"
          title="Whirlpool Cooktop Cleaning Tips"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
  },
  {
    title: "Whirlpool Microwaves",
    description:
      "From sparking to dead touchpads, we repair Whirlpool microwaves safely and effectively.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
];

const miniCases = [
  {
    title: "Orleans Dryer Repair",
    description:
      "A Whirlpool dryer kept shutting off mid-cycle. Replacing the high-limit thermostat solved the problem.",
  },
  {
    title: "Carp Fridge Fix",
    description:
      "A Whirlpool fridge wasn’t cooling. A new evaporator fan brought it back to life.",
  },
];

const commonProblems = [
  {
    title: "Washer not spinning or draining",
    description: "We check the drain pump, hoses, and motor to restore proper operation.",
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
    title: "Dishwasher leaving residue on dishes",
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

export default function WhirlpoolBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Whirlpool Appliance Repair in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-4">
              Whirlpool appliances are known for their reliability — but even the most dependable machines need a little help now and then. That’s where Fixer comes in.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <BenefitsSection 
        heading="Why Choose Fixer for Whirlpool Repairs" 
        message="Our Ottawa technicians handle everything from washers that won't spin to ovens that won't heat. We bring the right tools, years of experience, and back every job with a 90-day warranty. Same-day appointments available in many areas — call us to check today's availability."
        benefits={whyChooseUs} 
      />

      {/* Appliances Grid */}
      <BrandAppliancesSection brandName="Whirlpool" appliances={whirlpoolAppliances} />

      {/* Mini Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Recent Whirlpool Fixes Around Ottawa</h2>
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
      <CommonIssuesSection issues={commonProblems} heading="Common Whirlpool Problems We Fix" />

      {/* CTA */}
      <CTASection 
        heading="Book Your Whirlpool Appliance Repair" 
        description="We fix it fast, and we fix it right — so you don't have to see us twice (unless you miss us 😉)." 
      />
    </>
  );
}
