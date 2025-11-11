import { Metadata } from "next";
import Link from "next/link";

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
  "Washer not spinning or draining",
  "Dryer not heating or shutting off",
  "Refrigerator ice maker leaking",
  "Dishwasher leaving residue on dishes",
  "Oven not heating evenly",
  "Microwave not starting",
];

export default function WhirlpoolBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-4">Why Choose Fixer for Whirlpool Repairs</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Ottawa technicians handle everything from washers that won’t spin to ovens that won’t heat. We bring the right tools, years of experience, and back every job with a 90-day warranty. Same-day appointments available in many areas — call us to check today’s availability.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {whyChooseUs.map((reason) => (
                <div key={reason} className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 mt-6">
              Have more than one brand at home? Fixer services many{" "}
              <Link href="/brands" className="text-primary-600 font-semibold hover:underline">
                appliance brands
              </Link>
              , not just Whirlpool.
            </p>
          </div>
        </div>
      </section>

      {/* Appliances Grid */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-md mb-10 text-center">Whirlpool Appliances We Repair</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {whirlpoolAppliances.map((item) => (
                <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-primary-800 flex items-center gap-2">
                      {item.title}
                    </h3>
                    {item.media}
                    <p className="text-gray-700">{item.description}</p>
                    <div className="flex flex-wrap gap-3 text-sm font-semibold text-accent-600">
                      {item.link && (
                        <Link href={item.link.href} className="hover:underline">
                          → {item.link.label}
                        </Link>
                      )}
                      {item.links &&
                        item.links.map((link) => (
                          <Link key={link.href} href={link.href} className="hover:underline">
                            → {link.label}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6">Recent Whirlpool Fixes Around Ottawa</h2>
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
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Common Whirlpool Problems We Fix</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-left">
              {commonProblems.map((problem) => (
                <li key={problem} className="bg-white border border-gray-200 rounded-lg p-4 text-gray-700">
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Book Your Whirlpool Appliance Repair</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            📞 Call <a href="tel:+16134136969" className="underline font-semibold text-white">613-413-6969</a> or email{" "}
            <a href="mailto:service@fixerappliancerepair.ca" className="underline font-semibold text-white">service@fixerappliancerepair.ca</a> to book your Whirlpool appliance repair today.
          </p>
          <p className="text-lg text-white/90">
            We fix it fast, and we fix it right — so you don’t have to see us twice (unless you miss us 😉).
          </p>
        </div>
      </section>
    </>
  );
}
