import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";

export const metadata: Metadata = {
  title: "Oven Repair Kanata – Fast Local Service for Electric Ovens | Fixer",
  description: "Fixer Appliance Repair offers expert oven repair in Kanata. From heating failures and uneven baking to broken elements and error codes, we service Whirlpool, LG, Samsung, GE & more. Same-day local service with a 90-day warranty.",
  keywords: "oven repair Kanata, electric oven repair, oven not heating Kanata, oven repair service",
};

const benefits = [
  "Skilled in fixing everything from old coils to modern touch panels",
  "Prompt service with flexible scheduling",
  "You approve the price before we begin",
  "Friendly team that keeps your space clean",
  "No pressure, just honest work",
];

const commonIssues = [
  {
    title: "Oven won't turn on",
    description: "We check incoming power, fuse, and main controls.",
  },
  {
    title: "Burner works but oven doesn't",
    description: "Element or thermostat failure likely — we replace the part.",
  },
  {
    title: "Bakes unevenly",
    description: "A failed convection fan or element might be the cause.",
  },
  {
    title: "Oven door won't lock",
    description: "We repair door switches and hinges.",
  },
  {
    title: "No heat in broil mode",
    description: "The top element or relay could be faulty.",
  },
  {
    title: "Display not lighting up",
    description: "We troubleshoot and replace control boards.",
  },
  {
    title: "Oven light stays on",
    description: "A door switch might be jammed.",
  },
  {
    title: "Flickering numbers",
    description: "Wiring or control board failure.",
  },
  {
    title: "Takes long to cook",
    description: "Sensor miscalibration can drop temperatures.",
  },
  {
    title: "Beeping randomly",
    description: "We reset sensors and repair short circuits.",
  },
];

const serviceAreas = [
  "Morgan's Grant",
  "Beaverbrook",
  "Katimavik-Hazeldean",
  "Glen Cairn",
  "Bridlewood",
  "Kanata Lakes",
  "Emerald Meadows",
];

const faqs = [
  {
    question: "Do you fix ovens in Katimavik and Kanata North?",
    answer: "Yes — we repair ovens throughout Kanata.",
  },
  {
    question: "Do you service wall ovens and built-in models?",
    answer: "Yes — including double ovens and touch control units.",
  },
  {
    question: "My oven heats unevenly — can you fix that?",
    answer: "Yes — we check sensors, fans, and heating elements.",
  },
  {
    question: "Do you install new ovens?",
    answer: "Yes — we handle uninstallation and installation.",
  },
  {
    question: "Are parts for Whirlpool and GE ovens available?",
    answer: "Yes — we stock common oven parts.",
  },
];

export default function OvenRepairKanataPage() {
  return (
    <>
      <ServiceHero
        title="Kanata's Expert Oven Repair Team"
        description="Having trouble baking dinner in Kanata? Our oven repair experts are just around the corner. Fixer Appliance Repair offers efficient, local service for all major electric ovens. We service all major electric oven brands, including LG, Samsung, Whirlpool, GE, and Maytag."
        icon={<FaFire className="text-6xl text-white" />}
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection applianceName="Oven" benefits={benefits} />

      {/* Oven Installation Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-6 text-center">Installation Services</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-6">
                Replacing your oven in Kanata? Before buying, check our repair vs. replace guide — it 
                explains costs, lifespan, and when repair makes sense.
              </p>
              <p className="text-center">
                Already purchased a new one? We provide oven installation in Kanata. We'll connect, level, 
                and test it with your existing power hookups.
              </p>
              <p className="text-center text-sm text-gray-600">
                ⚠️ Note: we don't provide new high-voltage wiring or gas connections.
              </p>
              <div className="text-center mt-8">
                <Link href="/oven-installation" className="btn-primary">
                  Learn More About Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Service Area: Kanata and Nearby</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We provide appliance repair services across the entire Kanata area, including:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                  {area}
                </div>
              ))}
              <div className="px-6 py-3 bg-gray-50 rounded-lg font-semibold text-gray-800">
                and surrounding neighbourhoods
              </div>
            </div>
            <p className="text-center text-gray-700 mb-6">
              We also provide oven repair in{" "}
              <Link href="/oven-repair/stittsville" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Stittsville
              </Link>
              ,{" "}
              <Link href="/oven-repair/nepean" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Nepean
              </Link>
              ,{" "}
              <Link href="/oven-repair/orleans" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Orleans
              </Link>
              ,{" "}
              <Link href="/oven-repair/barrhaven" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Barrhaven
              </Link>
              ,{" "}
              <Link href="/oven-repair/mississippi-mills" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Mississippi Mills
              </Link>
              ,{" "}
              <Link href="/oven-repair/arnprior" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Arnprior
              </Link>
              , and{" "}
              <Link href="/oven-repair/carleton-place" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Carleton Place
              </Link>
              . For complete coverage, check our{" "}
              <Link href="/oven-repair" className="text-primary-600 hover:text-primary-700 underline">
                Oven Repair Ottawa
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Things to Do in Kanata */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Explore Kanata While We Fix Your Oven</h2>
            <p className="text-lg text-gray-700 mb-6">
              While we handle your oven repair, you can spend some time exploring Kanata's best spots:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>South March Highlands</strong> – scenic forest trails for walking or mountain biking</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Walter Baker Park</strong> – picnic areas and wide open spaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Kanata Centrum</strong> – shopping and plenty of dining choices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3">•</span>
                <span><strong>Canadian Tire Centre</strong> – concerts, hockey, and entertainment</span>
              </li>
            </ul>
            <p className="text-gray-700">
              <a 
                href="https://ottawatourism.ca/en/see-and-do/events" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See what's happening in Kanata this week
              </a>
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Book Your Oven Repair in Kanata</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Hungry for help? We'll get your oven back to baking in no time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:6135550199" className="text-xl font-semibold hover:underline">
              📞 Call or text: (613) 555-0199
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:service@fixerappliancerepair.ca" className="text-xl font-semibold hover:underline">
              📧 service@fixerappliancerepair.ca
            </a>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Service Now
          </Link>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Also Need Help With…</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We fix more than just ovens — here are our other services in Kanata:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/washer-repair/kanata" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Washer Repair Kanata
              </Link>
              <Link href="/dryer-repair/kanata" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dryer Repair Kanata
              </Link>
              <Link href="/dishwasher-repair/kanata" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Dishwasher Repair Kanata
              </Link>
              <Link href="/fridge-repair/kanata" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Fridge Repair Kanata
              </Link>
              <Link href="/freezer-repair/kanata" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Freezer Repair Kanata
              </Link>
              <Link href="/stove-repair" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Cooktop Repair Kanata
              </Link>
              <Link href="/oven-installation" className="p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center font-semibold text-primary-600">
                Oven Installation Kanata
              </Link>
            </div>
            <p className="text-center text-gray-700 mt-8">
              Need another appliance fixed? We've got you covered across Kanata.
            </p>
            <p className="text-center text-gray-800 font-semibold mt-4">
              Fixer Appliance Repair — your friendly oven repair team in Kanata.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
