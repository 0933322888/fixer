import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appliance Installation Kanata – Washers, Dryers, Dishwashers, Ovens | Fixer",
  description:
    "Expert appliance installation in Kanata. We install washers, dryers, dishwashers, ovens & more with a 90-day warranty. Call 613-413-6969 today!",
  keywords:
    "appliance installation Kanata, washer installation Kanata, dryer installation Kanata",
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
  "Local service – technicians available right here in Kanata.",
  "Safe hookups – we connect appliances to existing water lines and outlets.",
  "90-day labour warranty – guaranteed peace of mind.",
  "Quick scheduling – same-day appointments often available in Kanata.",
  "Trusted team – insured, experienced, and friendly.",
];

const highlights = [
  "Kanata Centrum – shopping, dining, and entertainment in the heart of Kanata.",
  "Canadian Tire Centre – home of the Ottawa Senators and major concerts.",
  "Walter Baker Park – trails, sports fields, and a large pond for relaxing walks.",
];

const faqs = [
  {
    question: "Do you offer same-day installation in Kanata?",
    answer: "Yes — in many parts of Kanata, same-day appointments are available. Call us to check today’s schedule.",
  },
  {
    question: "Can you uninstall my old appliance?",
    answer: "Yes, we can remove it before installing the new one (additional fee applies).",
  },
  {
    question: "What appliances do you install?",
    answer: "We install washers, dryers, dishwashers, cooktops, built-in ovens, and microwaves.",
  },
];

export default function ApplianceInstallationKanataPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Appliance Installation Kanata</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Need help setting up a new appliance in Kanata? Fixer provides safe, reliable <Link href="/appliance-installation/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link>, now available right here in Kanata. Whether it’s a washer, dryer, dishwasher, or oven, we’ll connect it properly and back the job with a 90-day labour warranty.
            </p>
            <p className="text-lg text-gray-100 mt-4">
              For repairs instead of installation, see our{" "}
              <Link href="/kanata" className="text-white underline font-semibold hover:text-gray-100">
                Kanata Appliance Repair service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Common Appliances We Install in Kanata</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our technicians handle safe, professional installation for:
            </p>
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
            <h2 className="heading-md mb-6">Why Choose Fixer in Kanata?</h2>
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
            <h2 className="heading-md mb-6">Explore Kanata While We Work</h2>
            <p className="text-lg text-gray-700 mb-6">
              While we handle the installation, you can enjoy Kanata’s highlights:
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
              🎉 Looking for more?
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-semibold hover:underline ml-1"
              >
                Check the Ottawa events calendar.
              </a>
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
          <h2 className="heading-md mb-4 text-white">Book Your Appliance Installation in Kanata</h2>
          <p className="text-xl mb-4">
            📞 Call/Text: <a href="tel:+16134136969" className="underline text-white">613-413-6969</a>
          </p>
          <p className="text-xl mb-6">
            📧 <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">service@fixerappliancerepair.ca</a>
          </p>
          <p className="text-lg text-white/90">
            Don’t wait days to start using your new appliance — schedule your installation in Kanata today and enjoy same-day availability in many areas.
          </p>
        </div>
      </section>
    </>
  );
}
