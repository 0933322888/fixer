import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appliance Installation Stittsville – Reliable Setup for All Appliances | Fixer",
  description:
    "Professional appliance installation in Stittsville — washers, dryers, dishwashers, ovens & more. Safe hookups, 90-day warranty. 📞 613-413-6969.",
  keywords:
    "appliance installation Stittsville, washer installation Stittsville, dryer installation Stittsville",
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
  "Local coverage – serving homes throughout Stittsville.",
  "Professional setup – safe water and electrical connections.",
  "90-day labour warranty – every job backed by Fixer.",
  "Fast response – appointments often available same-day.",
  "Reliable technicians – skilled, insured, and local.",
];

const highlights = [
  "Village Square Park – a community hub with green space and seasonal events.",
  "Stittsville Main Street – local shops, cafés, and restaurants to explore.",
  "Amberwood Village Golf & Country Club – for a quick round or a bite at the clubhouse.",
];

const faqs = [
  {
    question: "Are installations in Stittsville covered by warranty?",
    answer: "Yes — every installation is backed by a 90-day labour warranty.",
  },
  {
    question: "Do you service all brands of appliances?",
    answer: "Absolutely — we install major brands including LG, Samsung, Whirlpool, GE, Maytag, Bosch, and more.",
  },
  {
    question: "How long does a typical installation take?",
    answer: "Most jobs take about an hour, depending on the appliance and setup.",
  },
];

export default function ApplianceInstallationStittsvillePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Appliance Installation Stittsville</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              From washers and dryers to dishwashers and ovens, Fixer offers professional <Link href="/appliance-installation/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> with full coverage in Stittsville. Our technicians ensure correct hookups and safe connections, all supported by a 90-day labour warranty.
            </p>
            <p className="text-lg text-gray-100 mt-4">
              If you're looking for repairs, visit our{ " "}
              <Link href="/stittsville" className="text-white underline font-semibold hover:text-gray-100">
                Stittsville Appliance Repair page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Common Appliances We Install */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Common Appliances We Install in Stittsville</h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide safe connections and testing for:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {appliances.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-primary-600 font-semibold hover:border-primary-400 hover:text-primary-700 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fixer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Why Choose Fixer in Stittsville?</h2>
            <ul className="space-y-3 text-gray-700">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Explore Stittsville */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Explore Stittsville While We Work</h2>
            <p className="text-lg text-gray-700 mb-6">
              Make the most of your time in Stittsville while we install your appliance:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700">
              🎉 See what's happening this month on the{" "}
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-semibold hover:underline"
              >
                Ottawa events calendar
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Ready to Schedule Your Stittsville Installation?</h2>
          <p className="text-xl mb-4">
            📞 <a href="tel:+16134136969" className="underline text-white">613-413-6969</a>
          </p>
          <p className="text-xl mb-8">
            📧 <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">service@fixerappliancerepair.ca</a>
          </p>
          <p className="text-lg text-white/90">
            From washers to dishwashers, Fixer makes installation quick and reliable. Book now and get your appliance running the right way, right away.
          </p>
        </div>
      </section>
    </>
  );
}
