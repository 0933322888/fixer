import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maytag Appliance Repair Ottawa – Local Experts You Can Trust | Fixer",
  description:
    "Professional Maytag appliance repair in Ottawa — washers, dryers, fridges, ovens & more. Trusted local techs, fair pricing, and a 90-day warranty.",
  keywords:
    "Maytag appliance repair Ottawa, Maytag washer repair Ottawa, Maytag fridge repair Ottawa",
};

const whyChooseUs = [
  "Ottawa technicians trained on Maytag laundry and kitchen appliances",
  "Fully stocked vans with Maytag-compatible parts for faster fixes",
  "Same-day availability in many neighbourhoods",
  "Upfront pricing and a 90-day labour warranty on every repair",
];

const maytagAppliances = [
  {
    title: "Maytag Washers",
    description:
      "Front-load washers need regular cleaning to stay fresh and prevent odor. Maytag’s own guide shows how — and if your washer still leaks or throws error codes, Fixer is ready to repair it.",
    link: { href: "/washer-repair", label: "Washer Repair Ottawa" },
    media: (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/luEp9bbawt0"
          title="Maytag Washer Cleaning Guide"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ),
  },
  {
    title: "Maytag Dryers",
    description:
      "When dryers stop heating or shut off mid-cycle, we replace heating elements, thermostats, and fuses quickly.",
    link: { href: "/dryer-repair", label: "Dryer Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Maytag Refrigerators",
    description:
      "From cooling failures to noisy fans and ice maker issues, our Ottawa techs repair all common Maytag fridge problems.",
    link: { href: "/fridge-repair", label: "Fridge Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Maytag Dishwashers",
    description:
      "If your dishwasher won’t drain or leaves dishes dirty, we clean filters, fix pumps, and restore performance.",
    link: { href: "/dishwasher-repair", label: "Dishwasher Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Maytag Ovens & Cooktops",
    description:
      "Uneven baking or burners not heating? We repair Maytag ovens and cooktops safely and efficiently.",
    links: [
      { href: "/oven-repair", label: "Oven Repair Ottawa" },
      { href: "/cooktop-repair", label: "Cooktop Repair Ottawa" },
    ],
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
  {
    title: "Maytag Microwaves",
    description:
      "From sparking to control panel issues, we repair Maytag microwaves quickly and safely.",
    link: { href: "/microwave-repair", label: "Microwave Repair Ottawa" },
    media: <div className="h-40 w-full rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">Photo</div>,
  },
];

const miniCases = [
  {
    title: "Nepean Washer Repair",
    description:
      "A Maytag washer leaked during spin cycles. A new door boot seal solved the issue.",
  },
  {
    title: "Kanata Fridge Fix",
    description:
      "A Maytag fridge stopped cooling. Replacing the start relay fixed it the same day.",
  },
];

const commonProblems = [
  "Washer not draining or leaking",
  "Dryer not heating or shutting off",
  "Refrigerator ice maker leaking",
  "Dishwasher leaving dishes dirty",
  "Oven not heating evenly",
  "Microwave not starting",
];

export default function MaytagBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Maytag Appliance Repair in Ottawa</h1>
            <p className="text-xl text-gray-100 mb-4">
              Maytag built its reputation on toughness — but even the toughest appliances break down sometimes. When they do, Fixer is here to get them back in action.
            </p>
            <p className="text-lg text-gray-200">
              Have more than one brand at home? Fixer services many{" "}
              <Link href="/brands" className="text-white font-semibold underline hover:text-gray-100">
                appliance brands
              </Link>
              , not just Maytag.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-4">Why Choose Fixer for Maytag Repairs</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Ottawa technicians handle everything from washers that won’t spin to ovens that won’t bake. We bring the right tools, years of experience, and every repair comes with a 90-day warranty. Same-day appointments available in many areas — call us to check today’s availability.
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
            <h2 className="heading-md mb-10 text-center">Maytag Appliances We Repair</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {maytagAppliances.map((item) => (
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
            <h2 className="heading-md mb-6">Recent Maytag Fixes Around Ottawa</h2>
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
            <h2 className="heading-md mb-6">Common Maytag Problems We Fix</h2>
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
          <h2 className="heading-md mb-4 text-white">Book Your Maytag Appliance Repair</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            📞 Call <a href="tel:+16134136969" className="underline font-semibold text-white">613-413-6969</a> or email{" "}
            <a href="mailto:service@fixerappliancerepair.ca" className="underline font-semibold text-white">service@fixerappliancerepair.ca</a> to book your Maytag appliance repair today.
          </p>
          <p className="text-lg text-white/90">
            We fix it fast, and we fix it right — so you don’t have to see us twice (unless you miss us 😉).
          </p>
        </div>
      </section>
    </>
  );
}
