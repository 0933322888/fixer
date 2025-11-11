import { Metadata } from "next";
import Link from "next/link";

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
  "Washer error codes (4E, 5E, UE, etc.)",
  "Dryer not heating or shutting off mid-cycle",
  "Refrigerator ice maker leaking or not working",
  "Dishwasher not draining properly",
  "Oven not heating evenly",
  "Microwave sparking or shutting off",
];

export default function SamsungBrandPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-4">Why Choose Fixer for Samsung Repairs</h2>
            <p className="text-lg text-gray-700 mb-6">
              From dishwashers that don’t drain to dryers that leave clothes damp, Samsung quirks are no match for our Ottawa technicians. We carry parts, experience, and we back every job with a 90-day warranty. Same-day appointments available in many areas — call us to check today’s availability.
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
          <p className="text-lg text-gray-700 text-center mt-6">
            Have more than one brand at home? Fixer services many appliance <Link href="/brands" className="text-primary-600 font-semibold hover:underline">brands</Link>, not just Samsung. 
          </p>
      </section>

      {/* Appliances Grid */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-md mb-10 text-center">Samsung Appliances We Repair</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {samsungAppliances.map((item) => (
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
            <h2 className="heading-md mb-6">Recent Samsung Fixes Around Ottawa</h2>
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
            <h2 className="heading-md mb-6">Common Samsung Problems We Fix</h2>
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
          <h2 className="heading-md mb-4 text-white">Book Your Samsung Appliance Repair</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            📞 Call <a href="tel:+16134136969" className="underline font-semibold text-white">613-413-6969</a> or email {" "}
            <a href="mailto:service@fixerappliancerepair.ca" className="underline font-semibold text-white">service@fixerappliancerepair.ca</a> to book your Samsung appliance repair today.
          </p>
          <p className="text-lg text-white/90">
            We fix it fast, and we fix it right — so you don’t have to see us twice (unless you miss us 😉).
          </p>
        </div>
      </section>
    </>
  );
}
