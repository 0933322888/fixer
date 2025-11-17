import { Metadata } from "next";
import Link from "next/link";
import BrandAppliancesSection from "@/components/BrandAppliancesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Samsung Appliance Repair Ottawa – Fast, Reliable Service | Fixer",
  description:
    "Expert Samsung appliance repair in Ottawa — washers, dryers, fridges, dishwashers & more. Local techs, clear pricing, and a 90-day warranty.",
  keywords:
    "Samsung appliance repair Ottawa, Samsung washer repair Ottawa, Samsung fridge repair Ottawa",
};

const whyChooseUs = [
  "Samsung-trained technicians for washers, dryers, fridges, and more",
  "Local Ottawa service with same-day availability in many areas",
  "Fully stocked vans with common Samsung replacement parts",
  "Upfront estimates, 90-day labour warranty, and no surprise fees",
];

const samsungAppliances = [
  {
    title: "Samsung Washers",
    description:
      "Drain errors, loud spin cycles, or faulty sensors — our team has fixed them all.",
    link: { href: "/washer-repair", label: "Washer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Samsung Dryers",
    description:
      "If your Samsung dryer overheats or doesn’t dry at all, we repair heating elements, thermostats, and belts.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Samsung Refrigerators",
    description:
      "Ice maker issues and cooling failures are common. We handle sealed system repairs, leaks, and noisy fans.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Samsung Dishwashers",
    description:
      "Samsung dishwashers often run quietly and clean well. But when draining stops or error codes pop up, proper maintenance and timely repairs keep them going strong.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/rR_ivObG_Tc"
          title="Samsung Dishwasher Maintenance"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
  },
  {
    title: "Samsung Ovens & Cooktops",
    description:
      "Uneven baking? Burners not heating? Our technicians get Samsung ovens and cooktops back in shape.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Samsung Microwaves",
    description:
      "Whether it’s sparking, tripping breakers, or just not starting, we fix microwave issues safely.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
];

const miniCases = [
  {
    title: "Nepean Washer Fix",
    description:
      "A Samsung washer kept showing error code 4E. We replaced the water inlet valve — problem solved.",
  },
  {
    title: "Kanata Dishwasher Win",
    description:
      "A Samsung dishwasher leaked mid-cycle. A new circulation pump brought it back to life.",
  },
];

const commonProblems = [
  {
    title: "Washer error codes (4E, 5E, UE, etc.)",
    description: "We diagnose and fix error codes by checking sensors, pumps, and control boards.",
  },
  {
    title: "Dryer not heating or shutting off mid-cycle",
    description: "We inspect the heating element, thermostat, and sensors to restore proper operation.",
  },
  {
    title: "Refrigerator ice maker leaking or not working",
    description: "We check the water inlet valve, ice maker assembly, and water lines.",
  },
  {
    title: "Dishwasher not draining properly",
    description: "We inspect the drain pump, filters, and hoses to restore drainage.",
  },
  {
    title: "Oven not heating evenly",
    description: "We check the heating element, thermostat, and sensors for even heating.",
  },
  {
    title: "Microwave sparking or shutting off",
    description: "We inspect the magnetron, control panel, and door switches for safe operation.",
  },
];

export default function SamsungBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Samsung Appliance Repair in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-4">
              Samsung appliances are everywhere in Ottawa homes, from sleek refrigerators to high-tech washers. They’re packed with features — and when those features stop working, Fixer is here to help.
            </p>

          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <BenefitsSection 
        heading="Why Choose Fixer for Samsung Repairs" 
        message="From dishwashers that don't drain to dryers that leave clothes damp, Samsung quirks are no match for our Ottawa technicians. We carry parts, experience, and we back every job with a 90-day warranty. Same-day appointments available in many areas — call us to check today's availability."
        benefits={whyChooseUs} 
      />

      {/* Appliances Grid */}
      <BrandAppliancesSection brandName="Samsung" appliances={samsungAppliances} />

      {/* Mini Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Recent Samsung Fixes Around Ottawa</h2>
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
      <CommonIssuesSection issues={commonProblems} heading="Common Samsung Problems We Fix" />

      {/* CTA */}
      <CTASection 
        heading="Book Your Samsung Appliance Repair" 
        description="We fix it fast, and we fix it right — so you don't have to see us twice (unless you miss us 😉)." 
      />
    </>
  );
}
