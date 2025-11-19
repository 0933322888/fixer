import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Cooktop Repair Kanata - Fast, Reliable Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair provides trusted cooktop repair in Kanata. From cracked glass and faulty burners to wiring issues and touch control failures, we service Whirlpool, Samsung, LG, GE & more. Same-day appointments, clear pricing, 90-day warranty.",
};

const commonIssues = [
  {
    title: "Cooktop not heating evenly",
    description: "Element or sensor could be faulty — we replace and recalibrate.",
  },
  {
    title: "No power to cooktop",
    description: "We test power supply, fuses, and connections.",
  },
  {
    title: "Burner cycles on and off",
    description: "This is often a failing infinite switch.",
  },
  {
    title: "Touch controls not responding",
    description: "Could be moisture damage or failed interface board.",
  },
  {
    title: "Hot surface light won't go off",
    description: "Sensor or indicator relay is likely stuck.",
  },
  {
    title: "Glass top cracked from pan",
    description: "We safely remove and install a new surface.",
  },
  {
    title: "Smells like burning",
    description: "We check wiring, element insulation, or spilled food inside.",
  },
  {
    title: "Circuit trips when in use",
    description: "We locate shorted elements or overloaded wiring.",
  },
  {
    title: "Cooktop won't turn off",
    description: "Faulty relay or stuck switch needs replacement.",
  },
  {
    title: "No sound from elements when on",
    description: "Indicates disconnected power or dead element.",
  },
];

const whyChooseUs = [
  "Experience with both built-in and freestanding units",
  "We keep common cooktop parts in stock",
  "You'll always know what to expect",
  "Friendly and honest service, every time",
  "Trusted by many local families",
];

const serviceAreas = [
  "Morgan's Grant",
  "Beaverbrook",
  "Katimavik-Hazeldean",
  "Glen Cairn",
  "Bridlewood",
  "Kanata Lakes",
  "Emerald Meadows",
];

const nearbyAreas = [
  { name: "Cooktop Repair Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Cooktop Repair Nepean", href: "/cooktop-repair/nepean" },
  { name: "Cooktop Repair Orleans", href: "/cooktop-repair/orleans" },
  { name: "Cooktop Repair Vanier", href: "/cooktop-repair/vanier" },
  { name: "Cooktop Repair Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Cooktop Repair Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Cooktop Repair Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "South March Highlands", description: "Scenic forest trails for walking or mountain biking." },
  { title: "Walter Baker Park", description: "Ideal for a short walk or picnic." },
  { title: "Kanata Centrum", description: "Plenty of shops, coffee, and dining." },
  { title: "Canadian Tire Centre", description: "Concerts, hockey, and more." },
];

const faqs = [
  {
    question: "Do you repair cooktops in Kanata Lakes and Bridlewood?",
    answer: "Yes — we offer cooktop repair across Kanata.",
  },
  {
    question: "Do you fix cracked glass tops?",
    answer: "Yes — we replace damaged glass surfaces.",
  },
  {
    question: "Can you repair cooktops with power issues?",
    answer: "Yes — we check switches, wiring, and fuses.",
  },
  {
    question: "Do you install new cooktops?",
    answer: "Yes — installation is available upon request.",
  },
  {
    question: "What brands do you see most often in Kanata?",
    answer: "Whirlpool, GE, Samsung, LG, and Frigidaire.",
  },
];

const otherServices = [
  { name: "Washer Repair Kanata", href: "/washer-repair/kanata" },
  { name: "Dryer Repair Kanata", href: "/dryer-repair/kanata" },
  { name: "Dishwasher Repair Kanata", href: "/dishwasher-repair/kanata" },
  { name: "Fridge Repair Kanata", href: "/fridge-repair/kanata" },
  { name: "Freezer Repair Kanata", href: "/freezer-repair/kanata" },
  { name: "Oven Repair Kanata", href: "/oven-repair/kanata" },
  { name: "Microwave Repair Kanata", href: "/microwave-repair/kanata" },
  { name: "Cooktop Installation Kanata", href: "/cooktop-installation" },
];

export default function CooktopRepairKanataPage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-4 text-white"><FaFire className="text-[30px] mb-2 inline-block" /> Cooktop Repair Services in Kanata</h1>
            <p className="text-xl leading-relaxed text-gray-100">
              Cooktop not turning on? Based in Kanata, Fixer Appliance Repair offers professional
              troubleshooting and repair to get you cooking again without stress or delays. We repair all
              major electric cooktop brands, including LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
            <p className="mt-6 text-lg text-gray-100">
              👉 Learn more about the community on our{" "}
              <Link href="/kanata" className="font-semibold text-white underline-offset-4 hover:underline">
                Local Kanata page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CommonIssuesSection issues={commonIssues} />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Installation Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center">Thinking about replacing your cooktop in Kanata?</p>
              <p className="text-center">
                Before making the switch, check our repair vs. replace guide — it explains repair costs,
                lifespan, and when replacement makes sense.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  {"Repair or replace? ->"}
                </Link>
              </p>
              <p className="text-center">
                Already bought a new unit? We provide cooktop installation in Kanata. We'll mount and test it
                using your existing electrical hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                👉 Note: we don't run new high-voltage wiring or gas lines.
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
            <h2 className="heading-md mb-6">Service Area: Kanata and Nearby</h2>
            <p className="text-lg text-gray-700">
              We provide appliance repair services across the entire Kanata area, including:
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
              👉 Looking beyond Kanata? Visit our{" "}
              <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Ottawa
              </Link>{" "}
              page — we also service{" "}
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

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Explore Kanata While We Fix Your Cooktop</h2>
            <p className="text-lg text-gray-700 mb-6">
              Your cooktop repair is underway — why not enjoy Kanata while you wait?
            </p>
            <ul className="space-y-3 text-gray-700">
              {highlights.map((item) => (
                <li key={item.title}>{item.title} – {item.description}</li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Want to catch a live event or exhibit? Check what's happening this week:
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 font-medium ml-2 hover:underline"
              >
                Ottawa Tourism Events
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
          <h2 className="heading-md mb-4 text-white">Book Your Cooktop Repair in Kanata</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Fast and reliable cooktop repair is just a call away.
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
              We fix more than just cooktops — here are our other services in Kanata:
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
              Looking for another appliance repair? We've got you covered across Kanata.
            </p>
            <p className="mt-4 text-center text-gray-800 font-semibold">
              Fixer Appliance Repair — your friendly cooktop repair team in Kanata.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

