import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import CTASection from "@/components/CTASection";
import FeedbacksSection from "@/components/FeedbacksSection";
import FAQSection from "@/components/FAQSection";
import MapSection from "@/components/MapSection";

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
  { name: "Kanata", slug: "/freezer-repair/kanata" },
  { name: "Carp", slug: "/freezer-repair/carp" },
  { name: "Stittsville", slug: "/freezer-repair/stittsville" },
  { name: "Nepean", slug: "/freezer-repair/nepean" },
  { name: "Orleans", slug: "/freezer-repair/orleans" },
  { name: "Barrhaven", slug: "/freezer-repair/barrhaven" },
  { name: "Vanier", slug: "/freezer-repair/vanier" },
  { name: "Arnprior", slug: "/freezer-repair/arnprior" },
  { name: "Carleton Place", slug: "/freezer-repair/carleton-place" },
  { name: "Mississippi Mills", slug: "/freezer-repair/mississippi-mills" },
];

const brands = [
  "Frigidaire",
  "GE",
  "Whirlpool",
  "Samsung",
  "LG",
  "Maytag",
  "Electrolux",
  "Danby",
  "Haier",
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
      <ServiceHero
        title="Freezer Repair in Ottawa – Stop the Thaw Today"
        description="Frozen over or not freezing at all? Fixer Appliance Repair handles freezer repair across Ottawa with same-day appointments and honest advice."
        icon={<FaSnowflake className="text-6xl text-white" />}
      />

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

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaCheckCircle className="text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <FeedbacksSection applianceName="Freezer" />

      {/* Repair or Replace */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Repair or Replace?</h2>
            <p className="text-lg text-gray-700">
              A good freezer can last well over a decade. If yours isn't cooling right, read our article 
              to find out if a repair makes more sense than a new unit.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Installation Services</h2>
            <p className="text-lg text-gray-700 mb-8">
              Buying a chest or upright freezer? We install all types of units across Ottawa. 
              Fast and reliable freezer installation available.
            </p>
            <Link href="/freezer-installation" className="btn-primary">
              Learn About Freezer Installation
            </Link>
          </div>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Brands We Repair</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We handle upright and chest freezer repairs for:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center font-semibold text-gray-800">
                {brand}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Have a specialty or garage freezer? We've probably fixed it before — contact us to be sure.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">We Serve These Areas</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Fixer Appliance Repair offers freezer repairs throughout Ottawa and the greater region:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Link
                key={index}
                href={area.slug}
                className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                <FaMapMarkerAlt className="text-primary-600" />
                <span className="font-medium">Freezer Repair {area.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Need a visit outside these zones? Get in touch — we might already serve your area.
          </p>
        </div>
      </section>

      <FAQSection applianceName="Freezer" faqs={faqs} />

      {/* Things to Do in Ottawa */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Things to Do in Ottawa While We Repair Your Freezer</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Frozen dinners on hold? No worries — step out and explore:
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Bank Street Promenade</h3>
              <p className="text-gray-600">Local shops, vegan eats, and indie vibe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Mooney's Bay Park</h3>
              <p className="text-gray-600">Beachfront, picnic tables, and volleyball</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">House of TARG</h3>
              <p className="text-gray-600">Arcade, pierogis, and retro fun</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Orange Art Gallery</h3>
              <p className="text-gray-600">Hidden gem with local artists</p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-8">
            🔍 Want to catch a live event or exhibit? Check what's happening this week:{" "}
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              https://ottawatourism.ca/en/see-and-do/events
            </a>
          </p>
        </div>
      </section>

      {/* Book Your Repair */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Book Your Freezer Repair in Ottawa</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Is your freezer giving you trouble? Contact us now for fast, professional service in Ottawa. 
            We're just a phone call (or click) away.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-xl font-semibold">📞 Call or text: (613) 555-0199</p>
            <p className="text-xl">📧 Email: service@fixerappliancerepair.ca</p>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Book Online
          </Link>
        </div>
      </section>

      {/* We Also Offer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">We Also Offer</h2>
          <p className="text-center text-gray-700 mb-8">
            Need more appliance help in Ottawa? We also provide:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/fridge-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Repair in Ottawa
            </Link>
            <Link href="/washer-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair in Ottawa
            </Link>
            <Link href="/dryer-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair in Ottawa
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair in Ottawa
            </Link>
            <Link href="/stove-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Cooktop Repair in Ottawa
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Appliance Installation in Ottawa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

