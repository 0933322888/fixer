import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appliance Installation Ottawa – Washers, Dryers, Dishwashers, Fridges | Fixer",
  description:
    "Expert appliance installation in Ottawa — washers, dryers, dishwashers, fridges & more. Safe, reliable service with 90-day warranty. Call 613-413-6969 today!",
  keywords:
    "appliance installation Ottawa, washer installation Ottawa, dryer installation Ottawa, dishwasher installation Ottawa",
};

const serviceAreas = [
  { install: "Appliance Installation Kanata", hrefInstall: "/appliance-installation/kanata", repair: "Kanata Appliance Repair", hrefRepair: "/kanata" },
  { install: "Appliance Installation Stittsville", hrefInstall: "/appliance-installation/stittsville", repair: "Stittsville Appliance Repair", hrefRepair: "/stittsville" },
  { install: "Appliance Installation Nepean", hrefInstall: "/appliance-installation/nepean", repair: "Nepean Appliance Repair", hrefRepair: "/nepean" },
  { install: "Carp Installation", hrefInstall: "/appliance-installation/carp", repair: "Carp Appliance Repair", hrefRepair: "/carp" },
  { install: "Orleans Installation", hrefInstall: "/appliance-installation/orleans", repair: "Orleans Appliance Repair", hrefRepair: "/orleans" },
  { install: "Barrhaven Installation", hrefInstall: "/appliance-installation/barrhaven", repair: "Barrhaven Appliance Repair", hrefRepair: "/barrhaven" },
  { install: "Vanier Installation", hrefInstall: "/appliance-installation/vanier", repair: "Vanier Appliance Repair", hrefRepair: "/vanier" },
  { install: "Arnprior Installation", hrefInstall: "/appliance-installation/arnprior", repair: "Arnprior Appliance Repair", hrefRepair: "/arnprior" },
  { install: "Carleton Place Installation", hrefInstall: "/appliance-installation/carleton-place", repair: "Carleton Place Appliance Repair", hrefRepair: "/carleton-place" },
  { install: "Mississippi Mills Installation", hrefInstall: "/appliance-installation/mississippi-mills", repair: "Mississippi Mills Appliance Repair", hrefRepair: "/mississippi-mills" },
];

const appliances = [
  { label: "Washer Installation Ottawa", href: "/appliance-installation/washer" },
  { label: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
  { label: "Fridge Installation Ottawa", href: "/appliance-installation/fridge" },
  { label: "Freezer Installation Ottawa", href: "/appliance-installation/freezer" },
  { label: "Oven Installation Ottawa", href: "/appliance-installation/oven" },
  { label: "Cooktop Installation Ottawa", href: "/appliance-installation/cooktop" },
  { label: "Microwave Installation Ottawa", href: "/appliance-installation/microwave" },
];

const faqs = [
  {
    question: "Do you offer same-day installation in Ottawa?",
    answer: "Yes — same-day appointments are available in many areas. Call us to check today’s availability.",
  },
  {
    question: "Can you uninstall my old appliance?",
    answer: "Absolutely. We can remove your old washer, fridge, or other appliance before installing the new one.",
  },
  {
    question: "Do you connect water lines and electrical hookups?",
    answer: "Yes. We connect appliances to existing water lines and electrical outlets. Plumbing work or electrical rewiring is not included in our service.",
  },
  {
    question: "What warranty do you provide?",
    answer: "Every installation is backed by our 90-day labour warranty for your peace of mind.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with scenic river views.",
  "ByWard Market – Fresh local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – Perfect for a walk, bike ride, or in winter, the world’s largest skating rink.",
  "Dow’s Lake Pavilion – Waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function InstallationServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Appliance Installation Services in Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              At Fixer Appliance Repair, we don’t just <Link href="/" className="text-white underline font-semibold hover:text-gray-100">repair appliances in Ottawa</Link> — we also install new ones so you can start using them right away. We provide appliance installation in Ottawa and nearby suburbs, covering both kitchens and laundry rooms. From washers and dryers to dishwashers, fridges, ovens, and more, our technicians handle safe, proper hookups across Ottawa and nearby towns. We bring the right tools, connect everything correctly, and back each installation with a 90-day labour warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md mb-6">Our Service Areas</h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide appliance installation and repair services across Ottawa and nearby suburbs, including:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceAreas.map((area) => (
                <div key={area.install} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <Link href={area.hrefInstall} className="text-primary-600 font-semibold hover:underline">
                      {area.install}
                    </Link>
                    <Link href={area.hrefRepair} className="text-gray-700 hover:text-primary-700 hover:underline">
                      {area.repair}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appliances We Install */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Appliances We Install</h2>
            <p className="text-lg text-gray-700 mb-6">
              From kitchens to laundry rooms, our team handles safe, professional installation for all major home appliances:
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
            <p className="text-lg text-gray-700 mt-6">
              Whether it’s a brand-new purchase or a replacement for an older unit, we’ll connect everything correctly, test the appliance, and leave your home tidy.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Important Installation Notes!</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>We install appliances only on existing connections.</li>
              <li>No plumbing work: our technicians connect appliances to pre-installed water lines only.</li>
              <li>No electrical rewiring: installation is done on existing outlets.</li>
              <li>If special modifications are required, we’ll let you know before starting.</li>
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              This way, you know exactly what’s included in our service — clear, safe, and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Ottawa */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">Explore Ottawa While We Handle the Install</h2>
            <p className="text-lg text-gray-700 mb-6">
              While we take care of the heavy lifting at home, you can enjoy some of Ottawa’s top spots:
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

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-800">{faq.question}</h3>
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <p className="text-xl mb-4">Don’t let that shiny new appliance sit idle in the box.</p>
          <p className="text-2xl font-semibold mb-6">
            📞 Call/Text: <a href="tel:+16134136969" className="underline text-white">613-413-6969</a>
          </p>
          <p className="text-xl mb-8">
            📧 <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">service@fixerappliancerepair.ca</a>
          </p>
          <p className="text-lg text-white/90">
            Same-day installation available in many Ottawa areas — book today and start using it tonight.
          </p>
        </div>
      </section>
    </>
  );
}
