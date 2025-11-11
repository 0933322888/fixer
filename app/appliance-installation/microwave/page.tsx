import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microwave Installation Ottawa – Professional Installation | Fixer",
  description:
    "Professional microwave installation in Ottawa — safe mounting, proper venting, 90-day warranty. Call 613-413-6969.",
  keywords:
    "microwave installation Ottawa, over the range microwave installation Ottawa",
};

const whenNeeded = [
  "You bought an over-the-range microwave and need it mounted safely.",
  "You’re replacing an older microwave with a new model.",
  "You want proper venting and installation after a kitchen upgrade.",
];

const processSteps = [
  "Arrival & assessment – we check mounting space and venting.",
  "Connection – safe mounting and hookup to existing outlet.",
  "Testing – fan, light, and heating tested.",
  "Cleanup – area left tidy before we leave.",
];

const reasons = [
  "Expert mounting – over-the-range microwaves installed securely.",
  "Safe connections – plugged into existing outlets, no rewiring.",
  "90-day labour warranty – backed by Fixer.",
  "Convenient scheduling – often same-day in Ottawa.",
  "Local professionals – insured and trusted technicians.",
];

const relatedServices = [
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
  { label: "Cooktop Installation Ottawa", href: "/appliance-installation/cooktop" },
  { label: "Appliance Installation Ottawa", href: "/appliance-installation/ottawa" },
];

const importantNotes = [
  "No plumbing work: our technicians connect appliances to pre-installed water lines only.",
  "No electrical rewiring: installation is done on existing outlets.",
  "No hardwiring: we do not perform hardwire connections; appliances must plug into an existing outlet.",
];

const faqItems = [
  {
    question: "Do you handle microwave installation in Ottawa?",
    answer: "Yes, we install new microwaves and connect them to existing outlets.",
  },
  {
    question: "Do you handle venting?",
    answer: "Yes, we connect to existing vent systems but do not install new ductwork.",
  },
  {
    question: "How long does microwave installation take?",
    answer: "Usually about 1 hour.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function MicrowaveInstallationOttawaPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Microwave Installation Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Over-the-range microwaves require safe mounting and correct venting. At Fixer, we offer expert <Link href="/appliance-installation/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> for kitchens across the city. For ongoing issues, see our{" "}
              <Link href="/microwave-repair" className="text-white underline font-semibold hover:text-gray-100">
                Microwave Repair Ottawa service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">When Do You Need Microwave Installation?</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {whenNeeded.map((item) => (
                <li key={item}>
                  <span className="text-primary-600 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              💡 Thinking about repair vs replacement? See our{" "}
              <Link href="/repair-vs-installation" className="text-primary-600 font-semibold hover:underline">
                Repair vs New Appliance Installation
              </Link>{" "}
              guide. You can also visit{" "}
              <Link href="/appliance-repair" className="text-primary-600 font-semibold hover:underline">
                Appliance Repair Ottawa
              </Link>{" "}
              for repair services.
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
              Check more options at{" "}
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
          <h2 className="heading-md mb-4 text-white">Book Your Microwave Installation in Ottawa</h2>
          <p className="text-xl mb-4">📞 613-413-6969</p>
          <p className="text-xl mb-6">📧 <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">service@fixerappliancerepair.ca</a></p>
          <p className="text-lg text-white/90">
            We’ll mount and connect your microwave properly, so you can reheat, cook, and enjoy without the hassle.
          </p>
        </div>
      </section>
    </>
  );
}
