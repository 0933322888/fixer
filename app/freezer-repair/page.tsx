import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import BenefitsSection from "@/components/BenefitsSection";
import { FaMapMarkerAlt, FaUtensils, FaTree, FaBook } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Freezer Repair Ottawa – Fast, Reliable Upright & Chest Freezer Service | Fixer",
  description: "Fixer Appliance Repair provides expert freezer repair in Ottawa. From frost buildup to cooling failures, we service Whirlpool, Samsung, LG, GE & more — with same-day service and a 90-day warranty.",
  keywords: "freezer repair Ottawa, chest freezer repair, upright freezer repair, freezer not cooling, Ottawa ON",
};

const benefits = [
  "Fast repair service for upright and chest freezers",
  "We troubleshoot and fix most models on the first visit",
  "Honest pricing, no pressure",
  "Experienced with home and commercial units",
  "Courteous service from start to finish",
];

const commonIssues = [
  {
    title: "Freezer not freezing",
    description: "Compressor, thermostat, or refrigerant problems can all cause this — we'll find the issue.",
  },
  {
    title: "Frost buildup",
    description: "Often from failed defrost heater or timer. We'll defrost and fix the root cause.",
  },
  {
    title: "Water leaking from freezer",
    description: "Blocked drain lines or cracked drain pans are common — we clear and seal them.",
  },
  {
    title: "Loud noises when running",
    description: "Fans, motors, or compressors may be worn. We'll isolate the sound and repair it.",
  },
  {
    title: "Door won't seal",
    description: "A warped gasket or broken hinge can leak cold air — we replace and realign.",
  },
  {
    title: "Clicking every few minutes",
    description: "This may indicate a failing start relay or overloaded compressor.",
  },
  {
    title: "Lights not turning on",
    description: "Could be a failed switch or burned-out bulb.",
  },
  {
    title: "Ice crystals on food",
    description: "Temperature fluctuations or poor airflow — we fix both.",
  },
  {
    title: "Freezer runs constantly",
    description: "A stuck thermostat or dirty coils may be overworking the unit.",
  },
  {
    title: "Error code on display",
    description: "We read and resolve fault codes from digital systems.",
  },
];

const serviceAreas = [
  "Kanata",
  "Stittsville",
  "Nepean",
  "Orleans",
  "Vanier",
  "Barrhaven",
  "Carp",
  "Arnprior",
  "Carleton Place",
  "Mississippi Mills",
];

const brands = [
  { name: "Bosch", href: "/brands/bosch" },
  { name: "Frigidaire", href: "/brands/frigidaire" },
  { name: "GE", href: "/brands/ge" },
  { name: "Kenmore", href: "/brands/kenmore" },
  { name: "LG", href: "/brands/lg" },
  { name: "Maytag", href: "/brands/maytag" },
  { name: "Panasonic", href: "/brands/panasonic" },
  { name: "Samsung", href: "/brands/samsung" },
  { name: "Whirlpool", href: "/brands/whirlpool" },
  { name: "Electrolux", href: "?" },
];

const relatedServices = [
  { name: "Fridge Repair in Ottawa", href: "/fridge-repair" },
  { name: "Washer Repair in Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair in Ottawa", href: "/dryer-repair" },
  { name: "Oven Repair in Ottawa", href: "/oven-repair" },
  { name: "Cooktop Repair in Ottawa", href: "/stove-repair" },
  { name: "Microwave Repair in Ottawa", href: "/microwave-repair" },
  { name: "Dishwasher Repair in Ottawa", href: "/dishwasher-repair" },
  { name: "Appliance Installation in Ottawa", href: "/appliance-installation" },
];

const faqs = [
  {
    question: "Do you fix upright and chest freezers?",
    answer: "Yes — we service both residential upright and chest freezers.",
  },
  {
    question: "How much does freezer repair cost?",
    answer: "Usually between $140–$300, depending on the model and issue.",
  },
  {
    question: "My freezer is frosting up — can that be fixed?",
    answer: "Yes, it's often a defrost heater or sensor issue.",
  },
  {
    question: "Can you save the food inside during repair?",
    answer: "We work quickly to minimize thawing. Let us know if it's urgent.",
  },
  {
    question: "Which brands do you service?",
    answer: "Whirlpool, Frigidaire, GE, Danby, Samsung, and others.",
  },
  {
    question: "Do you offer emergency freezer repair?",
    answer: "Yes — especially for sudden outages or commercial units.",
  },
  {
    question: "How long does a freezer repair take?",
    answer: "Typically under 2 hours for most repairs.",
  },
  {
    question: "What causes freezers to stop cooling?",
    answer: "It's often a thermostat, sealed system, or compressor failure.",
  },
  {
    question: "Can you install a replacement freezer if needed?",
    answer: "Yes — we offer delivery and installation for new freezers.",
  },
  {
    question: "Is repair or replacement more cost-effective?",
    answer: "We give honest advice based on age, parts, and energy use.",
  },
];

export default function FreezerRepairPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">Freezer Repair in Ottawa – Stop the Thaw Today</h1>
            <p className="text-xl text-gray-100 mb-8">
              Frozen over or not freezing at all? Fixer Appliance Repair handles freezer repair across Ottawa with same-day appointments and honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Book Online
              </Link>
              <a href="tel:613-413-6969" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              We service LG, Samsung, Whirlpool, GE, Frigidaire, Maytag, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems We Fix */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Common Problems We Fix</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{issue.title}</h3>
                <p className="text-gray-600">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection applianceName="Freezer" benefits={benefits} />

      <CTASection />

      {/* Repair or Replace */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Repair or Replace?</h2>
            <p className="text-lg text-gray-700 mb-8">
              A good freezer can last well over a decade. If yours isn't cooling right, read our article 
              to find out if a repair makes more sense than a new unit.
            </p>
            <Link href="/repair-vs-replace" className="btn-primary">
              Read Our Repair vs. Replace Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Freezer Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Freezer? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new freezer? We also provide freezer installation in Ottawa with same-day service available in most areas.
          </p>
          <Link href="/appliance-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Freezer Installation
          </Link>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              We handle upright and chest freezer repairs for:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {brands.map((brand, index) => (
                <Link
                  key={index}
                  href={brand.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                >
                  <p className="font-semibold text-gray-900 hover:text-primary-700">{brand.name}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-700">
              Have a specialty or garage freezer? We've probably fixed it before — contact us to be sure.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Repair Freezers Across Ottawa</h2>
            <p className="text-center text-gray-700 mb-8">
              We proudly repair freezers across all Ottawa neighborhoods, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={index} 
                    href={`/freezer-repair/${slug}`}
                    className="text-center p-3 bg-white rounded-lg shadow-sm hover:bg-primary-50 hover:shadow-md transition-all"
                  >
                    <p className="text-gray-900 font-medium hover:text-primary-700">{area}</p>
                  </Link>
                );
              })}
            </div>
            <p className="text-center text-gray-700">
              If you don't see your area listed — feel free to ask. Chances are, we're already nearby.
            </p>
          </div>
        </div>
      </section>

      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Things to Do in Ottawa While We Repair Your Freezer</h2>
            <p className="text-lg text-gray-700 mb-6">
              Frozen dinners on hold? No worries — step out and explore:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Bank Street Promenade", description: "local shops, vegan eats, and indie vibe" },
                { name: "Mooney's Bay Park", description: "beachfront, picnic tables, and volleyball" },
                { name: "House of TARG", description: "arcade, pierogis, and retro fun" },
                { name: "Orange Art Gallery", description: "hidden gem with local artists" },
              ].map((attraction, index) => {
                const icons = [FaMapMarkerAlt, FaTree, FaUtensils, FaBook];
                const Icon = icons[index % icons.length];
                return (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-accent-500 flex items-start gap-4">
                    <Icon className="text-accent-500 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{attraction.name}</h3>
                      <p className="text-gray-600 text-sm">{attraction.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-200 rounded-lg p-6 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Want to catch a live event or exhibit?
              </p>
              <p className="text-gray-700 mb-3">
                Check what's happening this week:
              </p>
              <a
                href="https://ottawatourism.ca/en/see-and-do/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 hover:underline transition-colors"
              >
                Ottawa Tourism Events
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">Book Your Freezer Repair in Ottawa</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Is your freezer giving you trouble? Contact us now for fast, professional service in Ottawa. 
            We're just a phone call (or click) away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16135550199"
              className="btn-primary bg-white text-accent-600 hover:bg-gray-100"
            >
              Call or Text (613) 555-0199
            </a>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-accent-600"
            >
              Book Online Now
            </Link>
          </div>
          <p className="text-lg text-white/90 mt-6">
            Email:{" "}
            <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">
              service@fixerappliancerepair.ca
            </a>
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Also Need Help With...</h2>
            <p className="text-center text-gray-700 mb-8">
              We do more than just freezer repair — check out our other Ottawa services:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors font-semibold"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

