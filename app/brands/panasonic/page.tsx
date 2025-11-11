import { Metadata } from "next";
import Link from "next/link";

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
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Panasonic Dryers",
    description:
      "If your dryer overheats or won’t dry at all, we repair heating elements, thermostats, and fuses.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Panasonic Refrigerators",
    description:
      "Cooling issues, noisy fans, or leaking water lines — we repair Panasonic fridges across Ottawa.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Panasonic Dishwashers",
    description:
      "When dishwashers leave dishes dirty or won’t drain, Fixer cleans filters, replaces pumps, and restores performance.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Panasonic Ovens & Cooktops",
    description:
      "Uneven baking or burners not heating? Our Ottawa technicians repair Panasonic ovens and cooktops quickly.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Panasonic Microwaves",
    description:
      "Panasonic microwaves are popular, but when they spark or stop heating, we repair switches, fuses, and magnetrons safely.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
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
  "Washer not draining or leaking",
  "Dryer not heating properly",
  "Refrigerator cooling failures",
  "Dishwasher leaving residue",
  "Oven not heating evenly",
  "Microwave not starting",
];

export default function PanasonicBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-4">Why Choose Fixer for Panasonic Repairs</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Ottawa technicians handle Panasonic appliances weekly — from washers that won’t drain to microwaves that stop heating. We carry the right tools, offer transparent pricing, and back every repair with a 90-day warranty. Same-day appointments available in many areas — call us to check today’s availability.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {whyChooseUs.map((reason) => (
                <div key={reason} className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appliances Grid */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-md mb-10 text-center">Panasonic Appliances We Repair</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {panasonicAppliances.map((item) => (
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
            <h2 className="heading-md mb-6">Recent Panasonic Fixes Around Ottawa</h2>
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
            <h2 className="heading-md mb-6">Common Panasonic Problems We Fix</h2>
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
          <h2 className="heading-md mb-4 text-white">Book Your Panasonic Appliance Repair</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            📞 Call <a href="tel:+16134136969" className="underline font-semibold text-white">613-413-6969</a> or email{" "}
            <a href="mailto:service@fixerappliancerepair.ca" className="underline font-semibold text-white">service@fixerappliancerepair.ca</a> to book your Panasonic appliance repair today.
          </p>
          <p className="text-lg text-white/90">
            We fix it fast, and we fix it right — so you don’t have to see us twice (unless you miss us 😉).
          </p>
        </div>
      </section>
    </>
  );
}
