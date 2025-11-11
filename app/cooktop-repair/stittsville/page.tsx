import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
export const metadata: Metadata = {
  title: "Cooktop Repair Stittsville - Fast, Reliable Electric Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair offers trusted cooktop repair in Stittsville. From cracked glass and faulty burners to wiring issues and error codes, we service Whirlpool, Samsung, LG, GE & more. Same-day service, clear pricing, 90-day warranty.",
};

const commonIssues = [
  {
    title: "Cooktop beeps randomly",
    description: "Sensor faults or interface issues — we replace or reset.",
  },
  {
    title: "One side not working",
    description: "Could be wiring or relay board failure — we test all zones.",
  },
  {
    title: "Buttons stick or don't press",
    description: "We repair or replace the touchpad layer.",
  },
  {
    title: "Cooktop smells strange",
    description: "Burned residue or overheating — we investigate and clean.",
  },
  {
    title: "Heating too slowly",
    description: "Weak elements or low voltage — we test performance.",
  },
  {
    title: "Surface cracked near edge",
    description: "We recommend replacing the entire top for safety.",
  },
  {
    title: "Burners stay hot after shutoff",
    description: "Malfunctioning switch or sensor needs replacement.",
  },
  {
    title: "Cooktop flashes error when turning on",
    description: "We decode and clear error, fixing the cause.",
  },
  {
    title: "No display at all",
    description: "Main control board might need replacing.",
  },
  {
    title: "Indicator light not working",
    description: "Could be a burned-out bulb or sensor wire issue.",
  },
];

const whyChooseUs = [
  "Focused on precision and safety",
  "Great with tricky wiring and cooktop calibration",
  "We show up when we say we will",
  "Simple pricing and no confusion",
  "Helpful advice if replacement is needed",
];

const serviceAreas = [
  "Crossing Bridge",
  "Jackson Trails",
  "Bryanston Gate",
  "West Ridge",
  "Timbermere",
  "Fairwinds",
];

const nearbyAreas = [
  { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Amberwood Village Trails", description: "Lovely forested walkways." },
  { title: "Quitters Coffee", description: "Great stop for coffee lovers." },
  { title: "Village Square Park", description: "A welcoming outdoor space." },
];

const faqs = [
  {
    question: "Do you repair cooktops in Timbermere and Jackson Trails?",
    answer: "Yes — we frequently visit those neighborhoods.",
  },
  {
    question: "Can you fix unresponsive controls?",
    answer: "Yes — it may be a faulty touch panel or switch.",
  },
  {
    question: "Do you stock cooktop parts?",
    answer: "Yes — for most common brands.",
  },
  {
    question: "Do you remove old cooktops before installing a new one?",
    answer: "Yes — we handle the full process.",
  },
  {
    question: "How long does a repair usually take?",
    answer: "Most are completed in under 90 minutes.",
  },
];

const otherServices = [
  { name: "Washer Repair Stittsville", href: "/washer-repair/stittsville" },
  { name: "Dryer Repair Stittsville", href: "/dryer-repair/stittsville" },
  { name: "Dishwasher Repair Stittsville", href: "/dishwasher-repair/stittsville" },
  { name: "Fridge Repair Stittsville", href: "/fridge-repair/stittsville" },
  { name: "Freezer Repair Stittsville", href: "/freezer-repair/stittsville" },
  { name: "Oven Repair Stittsville", href: "/oven-repair/stittsville" },
  { name: "Microwave Repair Stittsville", href: "/microwave-repair/stittsville" },
  { name: "Cooktop Installation Stittsville", href: "/cooktop-installation" },
];

export default function CooktopRepairStittsvillePage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaFire className="mx-auto mb-6 text-6xl" />
            <h1 className="heading-lg mb-4 text-white">Cooktop Not Heating? Stittsville Experts Can Help</h1>
            <p className="text-xl leading-relaxed text-gray-100">
              Cooktop acting up in your Stittsville kitchen? From flickering burners to cracked tops, our
              skilled technicians are nearby and ready to help — same-day service available. We service all
              major brands including LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
            <p className="mt-6 text-lg text-gray-100">
              👉 Learn more about the area on our{" "}
              <Link
                href="/stittsville"
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                Local Stittsville page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-12 text-center">Common Problems We Fix</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {commonIssues.map((issue) => (
                <div
                  key={issue.title}
                  className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-primary-500"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{issue.title}</h3>
                  <p className="text-sm text-gray-600">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Installation Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center">Upgrading your kitchen in Stittsville?</p>
              <p className="text-center">
                Before replacing your cooktop, take a look at our repair vs. replace guide — it breaks down
                costs and lifespan.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  {"Repair or replace? ->"}
                </Link>
              </p>
              <p className="text-center">
                For new units, we offer cooktop installation in Stittsville. We'll install and test it using
                your existing power hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                👉 New wiring or gas line installation is not included.
              </p>
              <p className="text-center">
                <Link href="/cooktop-installation" className="btn-primary inline-block">
                  {"Learn more ->"}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Why choose us</h2>
            <ul className="mx-auto max-w-2xl space-y-4 text-lg text-gray-700">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-6 w-6 text-xl" aria-hidden="true">
                    ✅
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Service Area: Stittsville and Nearby</h2>
            <p className="text-lg text-gray-700">
              We provide appliance repair services across the entire Stittsville area, including:
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-800 shadow-sm"
                >
                  {area}
                </div>
              ))}
              <div className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-800 shadow-sm">
                and surrounding neighbourhoods
              </div>
            </div>
            <p className="mt-8 text-lg text-gray-700">
              👉 For full coverage of the Ottawa region, visit our{" "}
              <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Ottawa
              </Link>{" "}
              page. We also help nearby residents in{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">
              Explore the Community While We Fix Your Cooktop
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Step away for a bit and enjoy Stittsville's charm:
            </p>
            <ul className="space-y-4 text-gray-700">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start">
                  <span className="mr-3 text-primary-600">•</span>
                  <span>
                    <strong>{item.title}</strong> - {item.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700">
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Events in Stittsville
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary-700">{faq.question}</h3>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Book Your Cooktop Repair in Stittsville</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Let's get your cooktop working again — book now:
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-xl sm:flex-row">
            <a href="tel:6135550199" className="font-semibold text-white hover:underline">
              (613) 555-0199
            </a>
            <span className="hidden text-white sm:inline">|</span>
            <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold text-white hover:underline">
              service@fixerappliancerepair.ca
            </a>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Service Now
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Also Need Help With...</h2>
            <p className="text-center text-lg text-gray-700">
              Need more than cooktop repair? Here's what else we service in Stittsville:
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="rounded-lg bg-gray-50 p-4 text-center font-semibold text-primary-600 transition-colors hover:bg-primary-50"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-700">
              From laundry rooms to kitchens, we've got Stittsville covered.
            </p>
            <p className="mt-4 text-center text-gray-800 font-semibold">
              Fixer Appliance Repair — your local cooktop repair experts in Stittsville.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
