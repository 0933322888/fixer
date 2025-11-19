import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Washer Installation Ottawa – Safe, Reliable Service | Fixer",
  description:
    "Expert washer installation in Ottawa — safe hookups, proper testing, 90-day warranty. Call 613-413-6969 today!",
  keywords:
    "washer installation Ottawa, washing machine installation Ottawa",
};

const whenNeeded = [
  "You’ve purchased a new washer and need it connected safely.",
  "Your old washer was removed, and you’re upgrading to a new one.",
  "You’ve just renovated your laundry room and want a professional setup.",
];

const processSteps = [
  "Arrival & assessment – we check your laundry hookups and make sure the space is ready.",
  "Connection – safe hookup to existing water lines and electrical outlets.",
  "Testing – we run a quick cycle to confirm proper operation.",
  "Cleanup – area left tidy before we go.",
];

const reasons = [
  "Local technicians – serving Ottawa and nearby towns.",
  "Safe hookups – proper connection to existing water lines and outlets.",
  "90-day labour warranty – peace of mind after every job.",
  "Fast scheduling – same-day appointments available in many areas.",
  "Trusted service – friendly, professional, and fully insured.",
];

const relatedServices = [
  { label: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
  { label: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
  { label: "Appliance Installation Ottawa hub page", href: "/appliance-installation/ottawa" },
];

const importantNotes = [
  "No plumbing work: our technicians connect appliances to pre-installed water lines only.",
  "No electrical rewiring: installation is done on existing outlets.",
  "No hardwiring: we do not perform hardwire connections; appliances must plug into an existing outlet.",
];

const faqItems = [
  {
    question: "Do you connect washers to water lines?",
    answer: "Yes — we connect to existing hot and cold water lines only. Plumbing modifications are not included.",
  },
  {
    question: "Can you uninstall my old washer?",
    answer: "Yes, we can remove the old unit before installing the new one (additional fee applies).",
  },
  {
    question: "How long does washer installation take?",
    answer: "Most washer installations are completed within an hour.",
  },
];

const exploreItems = [
  "Parliament Hill – Canada’s most iconic landmark with stunning views.",
  "ByWard Market – local food, coffee shops, and artisan boutiques.",
  "Rideau Canal – perfect for a stroll, bike ride, or skating in winter.",
  "Dow’s Lake Pavilion – waterside cafés, boat rentals, and tulip gardens in spring.",
];

export default function WasherInstallationOttawaPage() {
  return (
    <>
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">Washer Installation Ottawa</h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Need help setting up your new washer? At Fixer, we provide safe, professional <Link href="/appliance-installation/ottawa" className="text-white underline font-semibold hover:text-gray-100">appliance installation in Ottawa</Link> so you can start using it right away. Whether it’s a replacement or your first machine, our technicians ensure correct hookups and testing. For ongoing issues, see our{" "}
              <Link href="/washer-repair" className="text-white underline font-semibold hover:text-gray-100">
                Washer Repair Ottawa service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6">When Do You Need Washer Installation?</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {whenNeeded.map((item) => (
                <li key={item}>
                  <span className="text-primary-600 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Still deciding between repair and replacement? See our{" "}
              <Link href="/blog/repair-vs-replace-appliance" className="text-primary-600 font-semibold hover:underline">
                Repair vs New Appliance Installation guide
              </Link>
              . If you’d rather fix your current unit, check our{" "}
              <Link href="/appliance-repair" className="text-primary-600 font-semibold hover:underline">
                Appliance Repair Ottawa services
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
          <h2 className="heading-md mb-4 text-white">Ready to Book Your Washer Installation?</h2>
          <p className="text-xl mb-4">Call/Text: 613-413-6969</p>
          <p className="text-xl mb-6">
            📧 <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">service@fixerappliancerepair.ca</a>
          </p>
          <p className="text-lg text-white/90">
            We’ll get your new washer hooked up quickly and correctly — so laundry day won’t have to wait.
          </p>
        </div>
      </section>
    </>
  );
}
