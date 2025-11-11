import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GE Appliance Repair Ottawa – Fast, Reliable Service | Fixer",
  description:
    "Expert GE appliance repair in Ottawa — dryers, fridges, washers, ovens & more. Local technicians, clear pricing, and a 90-day warranty.",
  keywords:
    "GE appliance repair Ottawa, GE washer repair Ottawa, GE fridge repair Ottawa",
};

const whyChooseUs = [
  "Ottawa technicians who know GE laundry and kitchen models inside and out",
  "Stocked vans with GE-compatible parts for faster fixes",
  "Same-day appointments available in many neighbourhoods",
  "Upfront estimates, no hidden fees, and a 90-day labour warranty",
];

const geAppliances = [
  {
    title: "GE Washers",
    description:
      "From leaks to unbalanced spin cycles, we repair pumps, sensors, and control boards in GE washers.",
    link: { href: "/washer-repair", label: "Washer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "GE Dryers",
    description:
      "Cleaning the lint filter is the simplest way to keep your GE dryer efficient and safe. If clothes still take forever to dry or the unit overheats, Fixer can replace heating elements, thermostats, or belts.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/FR8jN36U4x8"
          title="Keep Your GE Dryer Efficient"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
  },
  {
    title: "GE Refrigerators",
    description:
      "From cooling issues to noisy fans and ice maker problems, we handle all GE fridge repairs quickly.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "GE Dishwashers",
    description:
      "If your GE dishwasher leaves dishes dirty or won’t drain, we replace pumps, clean filters, and troubleshoot control issues.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "GE Ovens & Cooktops",
    description:
      "Uneven baking or burners not igniting? Our team fixes GE ovens and cooktops safely and efficiently.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "GE Microwaves",
    description:
      "Whether it’s sparking, tripping breakers, or just not starting, Fixer can bring your GE microwave back to life.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
];

const miniCases = [
  {
    title: "Barrhaven Dryer Fix",
    description:
      "A GE dryer kept shutting off mid-cycle. Replacing the thermal fuse solved it on the spot.",
  },
  {
    title: "Nepean Fridge Repair",
    description:
      "A GE fridge leaked water onto the floor. A new inlet valve stopped the mess for good.",
  },
];

const commonProblems = [
  "Washer not draining or showing error codes",
  "Dryer not heating or taking too long to dry",
  "Refrigerator ice maker not working",
  "Dishwasher not cleaning dishes properly",
  "Oven not heating evenly",
  "Microwave sparking or shutting off",
];

export default function GEBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">GE Appliance Repair in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-4">
              From classic fridges to powerful dryers, GE appliances have been a household name for decades. When they stop working, Fixer keeps Ottawa families running smoothly.
            </p>
            <p className="text-lg text-gray-200">
              Have more than one brand at home? Fixer services many{" "}
              <Link href="/brands" className="text-white font-semibold underline hover:text-gray-100">
                appliance brands
              </Link>
              , not just GE.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-4">Why Choose Fixer for GE Repairs</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our technicians know GE inside and out — whether it’s a washer showing error codes or an oven refusing to heat. We carry the right tools, back every repair with a 90-day warranty, and offer same-day appointments in many Ottawa areas.
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
            <h2 className="heading-md mb-10 text-center">GE Appliances We Repair</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {geAppliances.map((item) => (
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
            <h2 className="heading-md mb-6">Recent GE Fixes Around Ottawa</h2>
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
            <h2 className="heading-md mb-6">Common GE Problems We Fix</h2>
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
          <h2 className="heading-md mb-4 text-white">Book Your GE Appliance Repair</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            📞 Call <a href="tel:+16134136969" className="underline font-semibold text-white">613-413-6969</a> or email{" "}
            <a href="mailto:service@fixerappliancerepair.ca" className="underline font-semibold text-white">service@fixerappliancerepair.ca</a> to book your GE appliance repair today.
          </p>
          <p className="text-lg text-white/90">
            We fix it fast, and we fix it right — so you don’t have to see us twice (unless you miss us 😉).
          </p>
        </div>
      </section>
    </>
  );
}
