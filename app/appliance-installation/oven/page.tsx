import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oven Installation Ottawa – Safe, Expert Hookups | Fixer",
  description:
    "Safe built-in oven installation in Ottawa — precise fitting, expert connections, 90-day warranty. 613-413-6969.",
  keywords:
    "built-in oven installation Ottawa, wall oven installation Ottawa",
};

const whenNeeded = [
  "You’ve purchased a new built-in oven and need it fitted correctly.",
  "Your old oven has been removed, and you’re upgrading.",
  "You’re remodeling your kitchen and want professional installation.",
];

const processSteps = [
  "Arrival & assessment – we confirm the cabinet opening matches your oven size.",
  "Connection – safe hookup to existing electrical outlet (no hardwire).",
  "Testing – we check heating and controls after installation.",
  "Cleanup – area left tidy, oven seated securely.",
];

const reasons = [
  "Precision work – careful fitting of built-in ovens into cabinets.",
  "Safe electrical setup – proper connections, no hardwiring.",
  "90-day labour warranty – guaranteed workmanship.",
  "Flexible scheduling – book at a time that works for you.",
  "Trusted locally – Ottawa homeowners count on Fixer.",
];

const relatedServices = [
  { label: "Cooktop Installation Ottawa", href: "/appliance-installation/cooktop" },
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/microwave" },
  { label: "Appliance Installation Ottawa", href: "/appliance-installation/ottawa" },
];

const importantNotes = [
  "No plumbing work: our technicians connect appliances to pre-installed water lines only.",
  "No electrical rewiring: installation is done on existing outlets.",
  "No hardwiring: we do not perform hardwire connections; appliances must plug into an existing outlet.",
];

const faqItems = [
  {
    question: "Do I need to check cabinet size before installation?",
    answer: "Yes — please confirm your new built-in oven fits the existing cabinet opening.",
  },
  {
    question: "Do you hardwire built-in ovens?",
    answer: "No — we connect only to existing outlets, no hardwire service is provided.",
  },
  {
    question: "How long does oven installation take?",
    answer: "Most built-in ovens are installed in about 1–2 hours.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function OvenInstallationOttawaPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Built-in Oven Installation Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Built-in ovens require precise fitting and safe electrical connections. Our technicians specialize in{" "}
              <Link href="/appliance-installation/ottawa" className="text-white underline font-semibold hover:text-gray-100">
                appliance installation in Ottawa
              </Link>
              , making sure your oven is set securely into place. If your oven isn’t heating properly, see our{" "}
              <Link href="/oven-repair" className="text-white underline font-semibold hover:text-gray-100">
                Oven Repair Ottawa page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">When Do You Need Built-in Oven Installation?</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {whenNeeded.map((item) => (
                <li key={item}>
                  <span className="text-primary-600 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Still choosing between fixing or replacing? Read our{" "}
              <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 font-semibold hover:underline">
                Repair vs New Appliance Installation
              </Link>
              . For oven repairs, see{" "}
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
          <div className="max-w-4xl mx-auto text-center">
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
              Explore more at our{" "}
              <Link href="/appliance-installation/ottawa" className="text-primary-600 font-semibold hover:underline">
                Appliance Installation Ottawa 
              </Link>
             {" "}hub.
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
          <h2 className="heading-md mb-4 text-white">Book a Built-in Oven Installation Today</h2>
          <p className="text-xl mb-4">📞 613-413-6969</p>
          <p className="text-xl mb-6">📧 <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">service@fixerappliancerepair.ca</a></p>
          <p className="text-lg text-white/90">
            We’ll fit your oven securely and safely — so you can get back to cooking without delays.
          </p>
        </div>
      </section>
    </>
  );
}
