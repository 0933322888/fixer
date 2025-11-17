import { Metadata } from "next";
import Link from "next/link";
import BrandAppliancesSection from "@/components/BrandAppliancesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "LG Appliance Repair Ottawa – Reliable Local Technicians | Fixer",
  description:
    "Fixer Appliance Repair Inc. provides fast, affordable LG appliance repair in Ottawa. Washers, fridges, ovens, and more — with a 90-day warranty.",
  keywords:
    "LG appliance repair Ottawa, LG washer repair Ottawa, LG fridge repair Ottawa",
};

const whyChooseUs = [
  "Ottawa technicians trained on LG laundry, kitchen, and cooking appliances",
  "Fully stocked vans with LG-compatible parts for faster fixes",
  "Same-day appointments available in many neighbourhoods",
  "Transparent pricing and a 90-day labour warranty on every repair",
];

const lgAppliances = [
  {
    title: "LG Washers",
    description:
      "From leaking doors to “drain errors,” we’ve seen it all. LG washers are powerful, but when sensors fail or pumps clog, we’ll get them back to work.",
    link: { href: "/washer-repair", label: "Washer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "LG Dryers",
    description:
      "If your LG dryer leaves clothes damp or overheats, we can replace heating elements, thermostats, or drum belts quickly.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "LG Refrigerators",
    description:
      "LG fridges are famous for ice makers — and just as famous for ice maker issues. Whether it’s cooling problems, water leaks, or error codes, Fixer handles it.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/EZMaoBgyKiI?list=PL3PHk-jaLdvo1Bhgzw0_Cy60fDORmA1Tz&index=11"
          title="LG Refrigerator Ice Maker Tips"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
  },
  {
    title: "LG Dishwashers",
    description:
      "Noisy cycles? Dishes not coming out clean? We service LG dishwashers with clogged spray arms, faulty pumps, or tricky control boards.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "LG Ovens & Cooktops",
    description:
      "From uneven baking to burners that won’t heat, our team knows how to deal with LG ovens and cooktops safely and efficiently.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "LG Microwaves",
    description:
      "If your microwave sparks or won’t start, we can repair switches, fuses, and control panels to keep your kitchen running.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
];

const miniCases = [
  {
    title: "Kanata Fridge Save",
    description:
      "A family in Kanata called when their LG fridge stopped cooling before a holiday dinner. We replaced the compressor board — dinner was saved.",
  },
  {
    title: "Stittsville Washer Fix",
    description:
      "An LG washer kept showing OE error codes. A quick pump replacement had laundry day back on track.",
  },
];

const commonProblems = [
  {
    title: "Washer not draining (pump or sensor issues)",
    description: "We check the drain pump, sensors, and hoses to restore proper drainage.",
  },
  {
    title: "Dryer not heating (element or thermostat)",
    description: "We inspect the heating element, thermostat, and fuses to restore heat.",
  },
  {
    title: "Fridge not cooling properly",
    description: "We check the condenser fan, coils, and thermostat to restore cooling.",
  },
  {
    title: "Ice maker leaking or not producing ice",
    description: "We inspect the water inlet valve, ice maker assembly, and water lines.",
  },
  {
    title: "Dishwasher leaving food on dishes",
    description: "We check the pump, filters, spray arms, and sensors for proper cleaning.",
  },
  {
    title: "Oven not heating evenly",
    description: "We inspect the heating element, thermostat, and sensors for even heating.",
  },
  {
    title: "Microwave not starting or shutting off mid-cycle",
    description: "We check the control panel, fuses, door switches, and sensors.",
  },
];

export default function LGBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">LG Appliance Repair in Ottawa – Fast, Reliable & Local</h1>
            <p className="text-xl text-gray-100 mb-4">
              Known for smart features and sleek designs, LG appliances are great — until they start acting too smart for their own good. Don’t worry, Fixer knows how to bring them back in line.
            </p>
            <p className="text-lg text-gray-200">
              Have more than one brand at home? Fixer services many{" "}
              <Link href="/brands" className="text-white font-semibold underline hover:text-gray-100">
                appliance brands
              </Link>
              , not just LG.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <BenefitsSection 
        heading="Why Choose Fixer for LG Repairs" 
        message="When your LG washer won't spin or your LG fridge is making suspicious noises, you need fast, reliable service. Our Ottawa technicians know the quirks of LG machines, carry the right tools, and back every repair with a 90-day warranty. Same-day appointments available in many areas — call us to check today's availability."
        benefits={whyChooseUs} 
      />

      {/* Appliances Grid */}
      <BrandAppliancesSection brandName="LG" appliances={lgAppliances} />

      {/* Mini Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Recent LG Fixes Around Ottawa</h2>
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
      <CommonIssuesSection issues={commonProblems} heading="Common LG Problems We Fix" />

      {/* CTA */}
      <CTASection 
        heading="Book Your LG Appliance Repair" 
        description="We fix it fast, and we fix it right — so you don't have to see us twice (unless you miss us 😉)." 
      />
    </>
  );
}
