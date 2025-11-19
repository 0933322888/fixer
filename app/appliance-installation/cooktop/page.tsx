import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cooktop Installation Ottawa – Reliable Appliance Setup | Fixer",
  description:
    "Reliable cooktop installation in Ottawa — correct alignment, safe hookups, 90-day warranty. Call 613-413-6969 today!",
  keywords:
    "cooktop installation Ottawa, stovetop installation Ottawa",
};

const whenNeeded = [
  "You’ve purchased a new cooktop and need safe, professional installation.",
  "Your existing cooktop failed, and you’re replacing it with a new unit.",
  "You’re updating your kitchen and want a technician to install your cooktop.",
];

const processSteps = [
  "Arrival & assessment – technician checks the cut-out size and electrical hookup.",
  "Connection – safe installation into the counter and connection to outlet.",
  "Testing – we verify heating elements function properly.",
  "Cleanup – work area left neat and safe.",
];

const reasons = [
  "Proper fit – secure installation into countertop cutouts.",
  "Safe hookups – existing electrical connections only.",
  "90-day labour warranty – every installation guaranteed.",
  "Fast turnaround – quick appointments available.",
  "Professional technicians – insured and reliable service.",
];

const relatedServices = [
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
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
    question: "Do you check the countertop cutout size?",
    answer: "Yes, we confirm the cooktop fits into the existing cutout before installation.",
  },
  {
    question: "Do you connect to electrical wiring?",
    answer: "We connect to existing outlets only — no rewiring or hardwiring.",
  },
  {
    question: "How long does cooktop installation take?",
    answer: "Typically about 1 hour, depending on the kitchen setup.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function CooktopInstallationOttawaPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Cooktop Installation Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Cooktops demand careful installation for safety and performance. Fixer provides reliable <Link href="/appliance-installation/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link>, ensuring proper alignment and hookups. If your cooktop isn’t working right, our{" "}
              <Link href="/cooktop-repair" className="text-white underline font-semibold hover:text-gray-100">
                Cooktop Repair Ottawa
              </Link> service can help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">When Do You Need Cooktop Installation?</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {whenNeeded.map((item) => (
                <li key={item}>
                  <span className="text-primary-600 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              💡 Not sure if replacement is necessary? Visit{" "}
              <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 font-semibold hover:underline">
                Repair vs New Appliance Installation
              </Link>
              . For repair service, check{" "}
              <Link href="/appliance-repair" className="text-primary-600 font-semibold hover:underline">
                Appliance Repair Ottawa
              </Link>
              .
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
              See full list at{" "}
              <Link href="/appliance-installation/ottawa" className="text-primary-600 font-semibold hover:underline">
                Appliance Installation Ottawa
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
              🎉 Looking for something fun this month?
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
          <h2 className="heading-md mb-4 text-white">Schedule Your Cooktop Installation</h2>
          <p className="text-xl mb-4">📞 Call/Text: 613-413-6969</p>
          <p className="text-xl mb-6">📧 <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">service@fixerappliancerepair.ca</a></p>
          <p className="text-lg text-white/90">
            Get your new cooktop installed the right way — safe connections, quick service, no stress.
          </p>
        </div>
      </section>
    </>
  );
}
