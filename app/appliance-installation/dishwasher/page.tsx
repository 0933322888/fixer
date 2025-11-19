import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dishwasher Installation Ottawa – Expert Installation Service | Fixer",
  description:
    "Expert dishwasher installation in Ottawa — proper water line and electrical hookups, 90-day warranty. Call 613-413-6969.",
  keywords:
    "dishwasher installation Ottawa, built-in dishwasher install Ottawa",
};

const whenNeeded = [
  "You’ve purchased a new dishwasher and want proper water line and electrical connections.",
  "You’re upgrading from an older model after years of use.",
  "You’ve just renovated your kitchen and need a new unit installed.",
];

const processSteps = [
  "Arrival & assessment – we verify existing water and drain connections.",
  "Connection – secure hookup to water, drain, and electrical outlet.",
  "Testing – we run a short cycle to ensure there are no leaks.",
  "Cleanup – workspace left clean, packaging removed if possible.",
];

const reasons = [
  "Experienced team – skilled with all major dishwasher brands.",
  "Leak-free connections – secure water, drain, and electrical hookups.",
  "90-day labour warranty – your installation is backed by Fixer.",
  "Quick service – appointments often available same-day.",
  "Professional care – insured, reliable technicians.",
];

const relatedServices = [
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/microwave" },
  { label: "Oven Installation Ottawa", href: "/appliance-installation/oven" },
  { label: "Appliance Installation Ottawa", href: "/appliance-installation/ottawa" },
];

const importantNotes = [
  "No plumbing work: our technicians connect appliances to pre-installed water lines only.",
  "No electrical rewiring: installation is done on existing outlets.",
  "No hardwiring: we do not perform hardwire connections; appliances must plug into an existing outlet.",
];

const faqItems = [
  {
    question: "Do you connect dishwashers to water and drain lines?",
    answer: "Yes — we connect dishwashers to existing water and drain lines. No plumbing work is included.",
  },
  {
    question: "Do you level the dishwasher?",
    answer: "Yes, we make sure the unit sits properly and level before finishing the job.",
  },
  {
    question: "What if my old dishwasher is stuck?",
    answer: "We can carefully remove the old appliance before installing the new one (additional fee applies).",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function DishwasherInstallationOttawaPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Dishwasher Installation Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              A dishwasher only works as well as it’s installed. At Fixer, we provide professional <Link href="/appliance-installation/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> to ensure correct water and electrical hookups. For troubleshooting or leaks, check our{" "}
              <Link href="/dishwasher-repair" className="text-white underline font-semibold hover:text-gray-100">
                Dishwasher Repair Ottawa service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">When Do You Need Dishwasher Installation?</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {whenNeeded.map((item) => (
                <li key={item}>
                  <span className="text-primary-600 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Wondering if repair might be enough? Visit{" "}
              <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 font-semibold hover:underline">
                Repair vs New Appliance Installation
              </Link>
              . Or see our{" "}
              <Link href="/appliance-repair" className="text-primary-600 font-semibold hover:underline">
                Appliance Repair Ottawa
              </Link>{" "}
              page for service options.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Our Installation Process</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {processSteps.map((step) => (
                <li key={step}>
                  <span className="text-primary-600 mr-2">•</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Why Choose Fixer for Installation?</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {reasons.map((reason) => (
                <li key={reason}>
                  <span className="text-primary-600 mr-2">•</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Related Installation Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-primary-600 font-semibold hover:border-primary-400 hover:text-primary-700 transition"
                >
                  {service.label}
                </Link>
              ))}
            </div>
            <p className="text-lg text-gray-700 mt-6">
              More on our{" "}
              <Link href="/appliance-installation/ottawa" className="text-primary-600 font-semibold hover:underline">
                Appliance Installation Ottawa hub page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Important Installation Notes</h2>
            <p className="text-lg text-gray-700 mb-4">We install appliances only on existing connections:</p>
            <ul className="space-y-3 text-lg text-gray-700">
              {importantNotes.map((note) => (
                <li key={note}>
                  <span className="text-primary-600 mr-2">•</span>
                  {note}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              This way, you know exactly what’s included in our service — clear, safe, and reliable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">FAQ</h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.question} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-800">{faq.question}</h3>
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Explore Ottawa While We Work</h2>
            <p className="text-lg text-gray-700 mb-6">
              While we handle the installation, why not enjoy some of Ottawa’s highlights?
            </p>
            <ul className="space-y-3 text-gray-700">
              {exploreItems.map((item) => (
                <li key={item}>
                  <span className="text-primary-600 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Looking for something fun this month?
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-semibold hover:underline ml-1"
              >
                Check out the Ottawa events calendar.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Schedule Your Dishwasher Installation</h2>
          <p className="text-xl mb-4">Call/Text: 613-413-6969</p>
          <p className="text-xl mb-6">
            📧 <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">service@fixerappliancerepair.ca</a>
          </p>
          <p className="text-lg text-white/90">
            Enjoy spotless dishes without the hassle — let Fixer handle your dishwasher install with a 90-day labour warranty.
          </p>
        </div>
      </section>
    </>
  );
}
