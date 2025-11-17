import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";
import BrandAppliancesSection from "@/components/BrandAppliancesSection";

export const metadata: Metadata = {
  title: "Bosch Appliance Repair Ottawa – Expert Local Technicians | Fixer",
  description:
    "Reliable Bosch appliance repair in Ottawa — washers, dryers, fridges, dishwashers & more. Local experts, transparent pricing, and a 90-day warranty.",
  keywords:
    "Bosch appliance repair Ottawa, Bosch washer repair Ottawa, Bosch fridge repair Ottawa",
};

const whyChooseUs = [
  "Ottawa technicians experienced with Bosch laundry, dish, and cooking appliances",
  "Stocked with Bosch-compatible parts for faster, reliable repairs",
  "Same-day appointments available in many neighbourhoods",
  "Transparent pricing and a 90-day labour warranty on every job",
];

const boschAppliances = [
  {
    title: "Bosch Washers",
    description:
      "From drain pumps to drum bearings, Bosch washers sometimes need expert care. Fixer can repair leaks, error codes, and noisy cycles.",
    link: { href: "/washer-repair", label: "Washer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
      <Image src="/brands-img/bosch/washer.webp" alt="Bosch Washer" width={100} height={100} />
    </div>,
  },
  {
    title: "Bosch Dryers",
    description:
      "If your Bosch dryer won’t heat or leaves clothes damp, we can replace heating elements, thermostats, or sensors.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
      <Image src="/brands-img/bosch/dryer.webp" alt="Bosch Dryer" width={100} height={100} />
    </div>,
  },
  {
    title: "Bosch Refrigerators & Freezers",
    description:
      "Properly maintaining your Bosch refrigerator’s bottom freezer — like keeping coils dust-free — helps preserve coolness and reduce energy use. If cooling performance still drops or parts wear out, Fixer can step in to diagnose and fix the issue.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/Uapm7q2rhXc"
          title="Bosch Bottom Freezer Maintenance Tips"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
  },
  {
    title: "Bosch Dishwashers",
    description:
      "Bosch dishwashers are famous for quiet cycles — but if they won’t drain or leave dishes dirty, we clean filters, replace pumps, and fix sensors.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
      <Image src="/brands-img/bosch/dishwasher.webp" alt="Bosch Dishwasher" width={100} height={100} />
    </div>,
  },
  {
    title: "Bosch Ovens & Cooktops",
    description:
      "Whether it’s an oven not heating evenly or a cooktop burner failing, we repair Bosch cooking appliances quickly and safely.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
      <Image src="/brands-img/bosch/cooktop.webp" alt="Bosch Cooktop" width={100} height={100} />
    </div>,
  },
  {
    title: "Bosch Microwaves",
    description:
      "From sparking to control issues, Fixer technicians bring Bosch microwaves back to life.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
      <Image src="/brands-img/bosch/mw.webp" alt="Bosch Microwave" width={200} height={200} />
    </div>,
  },
];

const miniCases = [
  {
    title: "Kanata Dishwasher Repair",
    description:
      "A Bosch dishwasher stopped draining mid-cycle. Replacing the drain pump had it running like new.",
  },
  {
    title: "Orleans Oven Fix",
    description:
      "A Bosch oven baked unevenly. A new heating element fixed the issue just in time for dinner.",
  },
];

const commonProblems = [
  {
    title: "Washer not draining or leaking",
    description: "We check the drain pump, hoses, and connections.",
  },
  {
    title: "Dryer not heating or shutting off",
    description: "We check the heating element, thermostat, and sensors.",
  },
  {
    title: "Refrigerator cooling problems",
    description: "We check the condenser fan, coils, and thermostat.",
  },
  {
    title: "Dishwasher not cleaning dishes",
    description: "We check the pump, filters, and sensors.",
  },
  {
    title: "Oven not heating evenly",
    description: "We check the heating element, thermostat, and sensors.",
  },
  {
    title: "Microwave not starting",
    description: "We check the control panel, fuses, and sensors.",
  },
];


export default function BoschBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Bosch Appliance Repair in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-4">
              Bosch is known for premium design and German engineering — but even the best appliances need a little fixing sometimes. That’s where Fixer comes in.
            </p>
            <p className="text-lg text-gray-200">
              Have more than one brand at home? Fixer services many{" "}
              <Link href="/brands" className="text-white font-semibold underline hover:text-gray-100">
                appliance brands
              </Link>
              , not just Bosch.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <BenefitsSection heading="Why Choose Fixer for Bosch Repairs" message="Our Ottawa technicians handle Bosch appliances daily — from dishwashers that won’t drain to ovens that bake unevenly. We know the quirks, bring the right tools, and back every job with a 90-day warranty. Same-day appointments available in many areas — call us to check today’s availability." benefits={whyChooseUs} />

      {/* Appliances Grid */}
      <BrandAppliancesSection brandName="Bosch" appliances={boschAppliances} />

      {/* Mini Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Recent Bosch Fixes Around Ottawa</h2>
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
      <CommonIssuesSection issues={commonProblems} heading="Common Bosch Problems We Fix" />

      {/* CTA */}
      <CTASection heading="Book Your Bosch Appliance Repair" description="We fix it fast, and we fix it right — so you don’t have to see us twice (unless you miss us 😉)." />
    </>
  );
}
