import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandAppliancesSection from "@/components/BrandAppliancesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Panasonic Appliance Repair Ottawa – Trusted Local Technicians | Fixer",
  description:
    "Panasonic appliance repair in Ottawa — washers, dryers, fridges, ovens & more. Local experts, clear pricing, and a 90-day warranty on all services.",
  keywords:
    "Panasonic appliance repair Ottawa, Panasonic washer repair Ottawa, Panasonic fridge repair Ottawa",
};

const whyChooseUs = [
  "Ottawa technicians servicing Panasonic appliances every week",
  "Stocked with Panasonic-compatible parts for faster fixes",
  "Same-day appointments available in many neighbourhoods",
  "Transparent pricing and a 90-day labour warranty on every repair",
];

const panasonicAppliances = [
  {
    title: "Panasonic Washers",
    description:
      "From clogged filters to draining issues, we fix all common Panasonic washer problems.",
    link: { href: "/washer-repair", label: "Washer Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Washer_icon.png" alt="Panasonic washer" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Panasonic Dryers",
    description:
      "If your dryer overheats or won’t dry at all, we repair heating elements, thermostats, and fuses.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Dryer_icon.png" alt="Panasonic dryer" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Panasonic Refrigerators",
    description:
      "Cooling issues, noisy fans, or leaking water lines — we repair Panasonic fridges across Ottawa.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Fridge_icon.png" alt="Panasonic refrigerator" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Panasonic Dishwashers",
    description:
      "When dishwashers leave dishes dirty or won’t drain, Fixer cleans filters, replaces pumps, and restores performance.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Dishwasher_icon.png" alt="Panasonic dishwasher" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Panasonic Ovens & Cooktops",
    description:
      "Uneven baking or burners not heating? Our Ottawa technicians repair Panasonic ovens and cooktops quickly.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Oven_icon.png" alt="Panasonic oven and cooktop" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
  {
    title: "Panasonic Microwaves",
    description:
      "Panasonic microwaves are popular, but when they spark or stop heating, we repair switches, fuses, and magnetrons safely.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: (
      <div className="h-40 w-full rounded-lg flex items-center justify-center p-4">
        <Image src="/images/Microwave_icon.png" alt="Panasonic microwave" width={160} height={160} className="object-contain max-h-36 w-auto" />
      </div>
    ),
  },
];

const miniCases = [
  {
    title: "Stittsville Washer Fix",
    description:
      "A Panasonic washer showed constant draining errors. Replacing the drain pump solved it.",
  },
  {
    title: "Orleans Microwave Repair",
    description:
      "A Panasonic microwave stopped heating. Installing a new magnetron brought it back to life.",
  },
];

const commonProblems = [
  {
    title: "Washer not draining or leaking",
    description: "We check the drain pump, hoses, and connections to restore proper operation.",
  },
  {
    title: "Dryer not heating properly",
    description: "We inspect the heating element, thermostat, and sensors to restore heat.",
  },
  {
    title: "Refrigerator cooling failures",
    description: "We check the condenser fan, coils, and thermostat to restore cooling.",
  },
  {
    title: "Dishwasher leaving residue",
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

export default function PanasonicBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Panasonic Appliance Repair in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-4">
              From washing machines to microwaves, Panasonic appliances are known for reliability. But when they stop working, Fixer is ready to get them running again for Ottawa families.
            </p>
            <p className="text-lg text-gray-200">
              Have more than one brand at home? Fixer services many{" "}
              <Link href="/brands" className="text-white font-semibold underline hover:text-gray-100">
                appliance brands
              </Link>
              , not just Panasonic.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <BenefitsSection 
        heading="Why Choose Fixer for Panasonic Repairs" 
        message="Our Ottawa technicians handle Panasonic appliances weekly — from washers that won't drain to microwaves that stop heating. We carry the right tools, offer transparent pricing, and back every repair with a 90-day warranty. Same-day appointments available in many areas — call us to check today's availability."
        benefits={whyChooseUs} 
      />

      {/* Appliances Grid */}
      <BrandAppliancesSection brandName="Panasonic" appliances={panasonicAppliances} />

      {/* Mini Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Recent Panasonic Fixes Around Ottawa</h2>
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
      <CommonIssuesSection issues={commonProblems} heading="Common Panasonic Problems We Fix" />

      {/* CTA */}
      <CTASection 
        heading="Book Your Panasonic Appliance Repair" 
        description="We fix it fast, and we fix it right — so you don't have to see us twice (unless you miss us 😉)." 
      />
    </>
  );
}
