import { Metadata } from "next";
import Link from "next/link";

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
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Frigidaire Refrigerators",
    description:
      "Cooling issues, broken ice makers, or leaking water lines — Fixer has handled it all.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Frigidaire Dishwashers",
    description:
      "From drain errors to dirty dishes, we clean filters, replace pumps, and restore performance.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Frigidaire Ovens & Cooktops",
    description:
      "Uneven baking or burners not heating? Our Ottawa technicians fix Frigidaire ovens and cooktops every week.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Frigidaire Microwaves",
    description:
      "If your microwave sparks, won’t start, or shuts off mid-cycle, we repair switches, fuses, and more.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
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
  "Washer not draining or leaking",
  "Dryer not heating or shutting off",
  "Refrigerator ice maker leaking",
  "Dishwasher not cleaning dishes",
  "Oven not heating properly",
  "Microwave not starting",
];

export default function FrigidaireBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-4">Why Choose Fixer for Frigidaire Repairs</h2>
            <p className="text-lg text-gray-700 mb-6">
              We’ve seen it all with Frigidaire — dishwashers that won’t drain, dryers that won’t heat, and ovens that bake unevenly. Our Ottawa technicians carry parts, offer clear pricing, and back every repair with a 90-day warranty. Same-day appointments available in many areas — call us to check today’s availability.
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
            <h2 className="heading-md mb-10 text-center">Frigidaire Appliances We Repair</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {frigidaireAppliances.map((item) => (
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
            <h2 className="heading-md mb-6">Recent Frigidaire Fixes Around Ottawa</h2>
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
            <h2 className="heading-md mb-6">Common Frigidaire Problems We Fix</h2>
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
          <h2 className="heading-md mb-4 text-white">Book Your Frigidaire Appliance Repair</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            📞 Call <a href="tel:+16134136969" className="underline font-semibold text-white">613-413-6969</a> or email{" "}
            <a href="mailto:service@fixerappliancerepair.ca" className="underline font-semibold text-white">service@fixerappliancerepair.ca</a> to book your Frigidaire appliance repair today.
          </p>
          <p className="text-lg text-white/90">
            We fix it fast, and we fix it right — so you don’t have to see us twice (unless you miss us 😉).
          </p>
        </div>
      </section>
    </>
  );
}
