import { Metadata } from "next";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";

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
        icon={<FaFire className="inline-block mr-2 text-[30px]" />}
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
                <Link href="/appliance-installation/oven" className="btn-primary">
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
      <ThingsToDoSection
        attractions={[
          "South March Highlands – scenic forest trails for walking or mountain biking",
          "Walter Baker Park – picnic areas and wide open spaces",
          "Kanata Centrum – shopping and plenty of dining choices",
          "Canadian Tire Centre – concerts, hockey, and entertainment",
        ]}
        heading="Explore Kanata While We Fix Your Oven"
        description="While we handle your oven repair, you can spend some time exploring Kanata's best spots:"
        
        linkText="See what's happening in Kanata this week"
      />

      <FAQSection applianceName="Oven" faqs={faqs} />

      {/* Booking CTA */}
      <CTASection 
        heading="Book Your Oven Repair in Kanata"
        description="Hungry for help? We'll get your oven back to baking in no time."
        buttonText="Book Service Now"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={[
          { name: "Washer Repair Kanata", href: "/washer-repair/kanata" },
          { name: "Dryer Repair Kanata", href: "/dryer-repair/kanata" },
          { name: "Dishwasher Repair Kanata", href: "/dishwasher-repair/kanata" },
          { name: "Fridge Repair Kanata", href: "/fridge-repair/kanata" },
          { name: "Freezer Repair Kanata", href: "/freezer-repair/kanata" },
          { name: "Cooktop Repair Kanata", href: "/cooktop-repair/kanata" },
          { name: "Oven Installation Kanata", href: "/appliance-installation/oven" },
        ]}
        heading="Also Need Help With…"
        description="We fix more than just ovens — here are our other services in Kanata:"
        applianceName="Oven"
      />
    </>
  );
}
