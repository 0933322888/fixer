import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appliance Installation Nepean – Safe, Professional Service | Fixer",
  description:
    "Trusted appliance installation in Nepean. We install washers, dryers, dishwashers, ovens & more with safe connections & 90-day warranty. Call 613-413-6969.",
  keywords:
    "appliance installation Nepean, washer installation Nepean, dryer installation Nepean",
};

const appliances = [
  { label: "Washer Installation Ottawa", href: "/appliance-installation/washer" },
  { label: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
  { label: "Built-in Oven Installation Ottawa", href: "/appliance-installation/oven" },
  { label: "Cooktop Installation Ottawa", href: "/appliance-installation/cooktop" },
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/microwave" },
];

const reasons = [
  "Local experts – serving Nepean and surrounding areas.",
  "Safe installations – proper connections to existing hookups only.",
  "90-day labour warranty – clear, reliable coverage.",
  "Convenient scheduling – book times that work for you.",
  "Proven trust – professional, insured technicians.",
];

const highlights = [
  "Nepean Sportsplex – a large complex with pools, skating, and fitness facilities.",
  "Andrew Haydon Park – scenic waterfront park with trails and picnic areas.",
  "Merivale Shopping District – great for quick shopping or dining.",
];

const faqs = [
  {
    question: "Do you install appliances in all parts of Nepean?",
    answer: "Yes — we cover Centrepointe, Barrhaven East, Merivale, and surrounding neighbourhoods.",
  },
  {
    question: "Can I book installation on weekends?",
    answer: "Yes — weekend appointments are often available. Call to confirm availability.",
  },
  {
    question: "Do you bring the necessary tools?",
    answer: "Yes, our technicians arrive with the tools needed for safe and reliable installation.",
  },
];

export default function ApplianceInstallationNepeanPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Appliance Installation Nepean</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Getting a new appliance installed in Nepean has never been easier. Fixer delivers expert <Link href="/appliance-installation/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> with local service in Nepean. We handle washers, dryers, dishwashers, ovens, and more — always with a 90-day warranty.
            </p>
            <p className="text-lg text-gray-100 mt-4">
              For repair services, see our{" "}
              <Link href="/nepean" className="text-white underline font-semibold hover:text-gray-100">
                Nepean Appliance Repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Common Appliances We Install in Nepean</h2>
            <p className="text-lg text-gray-700 mb-6">Fixer installation services cover:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {appliances.map((appliance) => (
                <Link
                  key={appliance.label}
                  href={appliance.href}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-primary-600 font-semibold hover:border-primary-400 hover:text-primary-700 transition"
                >
                  {appliance.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Why Choose Fixer in Nepean?</h2>
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Explore Nepean While We Work</h2>
            <p className="text-lg text-gray-700 mb-6">
              Enjoy Nepean attractions while we take care of the installation:
            </p>
            <ul className="space-y-3 text-gray-700">
              {highlights.map((item) => (
                <li key={item}>
                  <span className="text-primary-600 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              🎉 Find upcoming events on the
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-semibold hover:underline ml-1"
              >
                Ottawa events calendar
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-800">{faq.question}</h3>
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Appliance Installation Nepean – Book Today</h2>
          <p className="text-xl mb-4">
            📞 Call/Text: <a href="tel:+16134136969" className="underline text-white">613-413-6969</a>
          </p>
          <p className="text-xl mb-6">
            📧 <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">service@fixerappliancerepair.ca</a>
          </p>
          <p className="text-lg text-white/90">
            Enjoy hassle-free installation backed by a 90-day labour warranty. Call us now to arrange your Nepean appointment.
          </p>
        </div>
      </section>
    </>
  );
}
