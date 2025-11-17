import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import CommonIssuesSection from "@/components/CommonIssuesSection";
export const metadata: Metadata = {
  title: "Cooktop Repair Nepean - Fast & Safe Cooktop Service | Fixer",
  description:
    "Fixer Appliance Repair provides expert cooktop repair in Nepean. From cracked glass and faulty burners to wiring issues and error codes, we service Whirlpool, Samsung, LG, GE & more. Same-day service, upfront pricing, 90-day warranty.",
};

const commonIssues = [
  {
    title: "Cooktop stopped working after cleaning",
    description: "Moisture in touch controls — we dry and test safely.",
  },
  {
    title: "One burner always stays cold",
    description: "Element or switch failure — we replace it quickly.",
  },
  {
    title: "Touch screen doesn't respond",
    description: "We inspect and replace the faulty touch module.",
  },
  {
    title: "Burner heats unevenly",
    description: "Internal damage or worn connections — we repair or replace.",
  },
  {
    title: "Popping sounds when on",
    description: "We check wiring for shorts or grounding faults.",
  },
  {
    title: "Hot light stays on forever",
    description: "Likely a sensor stuck in closed position.",
  },
  {
    title: "Glass top lifted or warped",
    description: "Mounting clips or adhesive failure — we remount securely.",
  },
  {
    title: "Cooktop not level with counter",
    description: "We refit mounting hardware or spacers.",
  },
  {
    title: "Breaker trips when using two burners",
    description: "Load imbalance or wiring issue — we balance and fix.",
  },
  {
    title: "Strange hum or buzz from surface",
    description: "Loose element or relay coil — we secure and test.",
  },
];

const whyChooseUs = [
  "Deep experience with brands from Whirlpool to Bosch",
  "Courteous service with quick turnaround",
  "No vague quotes — you get the full picture",
  "Flexible scheduling to work around your day",
  "We value your time and your kitchen",
];

const serviceAreas = [
  "Barrhaven East",
  "Centrepointe",
  "Merivale Gardens",
  "Manordale",
  "Tanglewood",
  "Fallowfield",
];

const nearbyAreas = [
  { name: "Kanata", href: "/cooktop-repair/kanata" },
  { name: "Stittsville", href: "/cooktop-repair/stittsville" },
  { name: "Orleans", href: "/cooktop-repair/orleans" },
  { name: "Vanier", href: "/cooktop-repair/vanier" },
  { name: "Barrhaven", href: "/cooktop-repair/barrhaven" },
  { name: "Mississippi Mills", href: "/cooktop-repair/mississippi-mills" },
  { name: "Arnprior", href: "/cooktop-repair/arnprior" },
  { name: "Carleton Place", href: "/cooktop-repair/carleton-place" },
];

const highlights = [
  { title: "Andrew Haydon Park", description: "Great views and walking paths." },
  { title: "Bruce Pit", description: "Beloved by families and dog owners." },
  { title: "Merivale Mall", description: "Shop or snack while we work." },
  { title: "Art Is In Bakery", description: "Creative baked goods and coffee." },
];

const faqs = [
  {
    question: "Do you work in Craig Henry and Tanglewood?",
    answer: "Yes — we repair cooktops across Nepean.",
  },
  {
    question: "Is it safe to repair a glass cooktop?",
    answer: "Yes — we follow safety standards for all repairs.",
  },
  {
    question: "Do you offer evening appointments?",
    answer: "Availability may vary — please contact us.",
  },
  {
    question: "What if I smell burning plastic from my cooktop?",
    answer: "Unplug it and call us — it may be wiring or insulation damage.",
  },
  {
    question: "Do you repair induction cooktops?",
    answer: "Yes — we service select models.",
  },
];

const otherServices = [
  { name: "Washer Repair Nepean", href: "/washer-repair/nepean" },
  { name: "Dryer Repair Nepean", href: "/dryer-repair/nepean" },
  { name: "Dishwasher Repair Nepean", href: "/dishwasher-repair/nepean" },
  { name: "Fridge Repair Nepean", href: "/fridge-repair/nepean" },
  { name: "Freezer Repair Nepean", href: "/freezer-repair/nepean" },
  { name: "Oven Repair Nepean", href: "/oven-repair/nepean" },
  { name: "Microwave Repair Nepean", href: "/microwave-repair/nepean" },
  { name: "Cooktop Installation Nepean", href: "/cooktop-installation" },
];

export default function CooktopRepairNepeanPage() {
  return (
    <>
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FaFire className="mx-auto mb-6 text-6xl" />
            <h1 className="heading-lg mb-4 text-white">Nepean Cooktop Repair – Safe & Professional</h1>
            <p className="text-xl leading-relaxed text-gray-100">
              Need help with a misbehaving cooktop in Nepean? Whether it's a cracked glass top or burners that
              won't respond, Fixer Appliance Repair is your go-to for expert, safe, and local service. We
              repair brands like LG, Samsung, Whirlpool, GE, and Maytag.
            </p>
            <p className="mt-6 text-lg text-gray-100">
              👉 Discover local details on our{" "}
              <Link href="/nepean" className="font-semibold text-white underline-offset-4 hover:underline">
                Local Nepean page
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
              <p className="text-center">Considering a cooktop replacement in Nepean?</p>
              <p className="text-center">
                Check our repair vs. replace guide — it may help you decide between fixing and upgrading.
              </p>
              <p className="text-center">
                <Link href="/repair-vs-replace" className="text-primary-600 hover:text-primary-700">
                  {"Repair or replace? ->"}
                </Link>
              </p>
              <p className="text-center">
                When you've purchased a new unit, we provide cooktop installation in Nepean. We'll mount and
                test it with the current electrical setup.
              </p>
              <p className="text-center text-sm text-gray-600">
                👉 We don't create new high-voltage wiring or gas lines.
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
            <h2 className="heading-md mb-6">Service Area: Nepean and Nearby</h2>
            <p className="text-lg text-gray-700">
              We provide appliance repair services across the entire Nepean area, including:
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
              Cooktop repair is available not only in Nepean but also in{" "}
              {nearbyAreas.map((area, index) => (
                <span key={area.name}>
                  <Link href={area.href} className="text-primary-600 hover:text-primary-700 underline">
                    {area.name}
                  </Link>
                  {index < nearbyAreas.length - 1 ? ", " : ". "}
                </span>
              ))}
              👉 Find all areas we serve on our{" "}
              <Link href="/cooktop-repair" className="text-primary-600 hover:text-primary-700 underline">
                Cooktop Repair Ottawa page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">
              Enjoy Your Time in Nepean While We Repair the Cooktop
            </h2>
            <p className="text-lg text-gray-700 mb-6">Don't just wait — explore a little:</p>
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
              🔍{" "}
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Events in Nepean
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
          <h2 className="heading-md mb-4 text-white">Book Your Cooktop Repair in Nepean</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Serving Nepean kitchens daily — schedule your service now.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-xl sm:flex-row">
            <a href="tel:6135550199" className="font-semibold text-white hover:underline">
              Call/Text: (613) 555-0199
            </a>
            <span className="hidden text-white sm:inline">|</span>
            <a href="mailto:service@fixerappliancerepair.ca" className="font-semibold text-white hover:underline">
              Email: service@fixerappliancerepair.ca
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
              We handle more than cooktops — here are our other services in Nepean:
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
            <p className="mt-8 text-center text-gray-700">Need help with another appliance? We're ready in Nepean.</p>
            <p className="mt-4 text-center text-gray-800 font-semibold">
              Fixer Appliance Repair — your reliable cooktop repair team in Nepean.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
