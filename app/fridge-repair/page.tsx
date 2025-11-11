import { Metadata } from "next";
import Link from "next/link";
import { FaSnowflake, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import ServiceHero from "@/components/ServiceHero";
import BrandsSection from "@/components/BrandsSection";
import CTASection from "@/components/CTASection";
import FeedbacksSection from "@/components/FeedbacksSection";
import FAQSection from "@/components/FAQSection";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Fridge Repair Ottawa – Fast, Reliable Local Service | Fixer",
  description: "Fixer provides expert fridge repair in Ottawa. We fix cooling, leaks & error codes for Samsung, LG, Whirlpool & more — with same-day service and a 90-day warranty.",
  keywords: "fridge repair Ottawa, refrigerator repair, fridge not cooling, ice maker repair, Ottawa ON",
};

const benefits = [
  "Same-day and next-day appointments available",
  "Transparent pricing with no hidden fees",
  "90-day warranty on all repairs and parts",
  "Clean, professional service every time",
  "Trusted by hundreds of local families",
];

const commonIssues = [
  {
    title: "Fridge not cooling",
    description: "Could be due to a failed compressor, thermostat, or fan motor. We'll test and fix it fast.",
  },
  {
    title: "Freezer working but fridge warm",
    description: "Usually a defrost problem or blocked airflow. We'll restore proper circulation.",
  },
  {
    title: "Water leaking on floor",
    description: "Blocked defrost drain or cracked water line are common causes.",
  },
  {
    title: "Fridge runs constantly",
    description: "Could be a faulty thermostat or dirty condenser coils.",
  },
  {
    title: "Strange noises",
    description: "Buzzing, clicking, or humming may come from fans or compressor.",
  },
  {
    title: "Ice maker not producing ice",
    description: "We check water lines, valves, and sensors.",
  },
  {
    title: "Display not working",
    description: "We inspect and replace faulty control boards or wiring.",
  },
  {
    title: "Fridge light won't turn on",
    description: "May be a bad switch or bulb — we'll fix either.",
  },
  {
    title: "Water dispenser not working",
    description: "Frozen lines or clogged filters can block flow.",
  },
  {
    title: "Fridge door won't close fully",
    description: "We replace damaged gaskets or adjust door alignment.",
  },
  {
    title: "Warm spots inside",
    description: "Caused by uneven airflow or failed fans.",
  },
  {
    title: "Food freezing in fridge",
    description: "Bad thermostat settings or sensor issues may be responsible.",
  },
  {
    title: "Frost in freezer",
    description: "Defrost heater or timer might have failed.",
  },
  {
    title: "Moldy smell",
    description: "We clean and sanitize, and fix the cause of moisture.",
  },
  {
    title: "Error codes on display",
    description: "We scan and repair control board or sensor failures.",
  },
];

const serviceAreas = [
  { name: "Kanata", slug: "/fridge-repair/kanata" },
  { name: "Carp", slug: "/fridge-repair/carp" },
  { name: "Stittsville", slug: "/fridge-repair/stittsville" },
  { name: "Nepean", slug: "/fridge-repair/nepean" },
  { name: "Orleans", slug: "/fridge-repair/orleans" },
  { name: "Barrhaven", slug: "/fridge-repair/barrhaven" },
  { name: "Vanier", slug: "/fridge-repair/vanier" },
  { name: "Arnprior", slug: "/fridge-repair/arnprior" },
  { name: "Carleton Place", slug: "/fridge-repair/carleton-place" },
  { name: "Mississippi Mills", slug: "/fridge-repair/mississippi-mills" },
];

const brands = [
  "LG",
  "Samsung",
  "Whirlpool",
  "GE",
  "Frigidaire",
  "Maytag",
  "Electrolux",
  "Kenmore",
  "Bosch",
];

const faqs = [
  {
    question: "How much does fridge repair cost?",
    answer: "Costs range from $150–$400, depending on parts and complexity.",
  },
  {
    question: "My fridge isn't cooling — is that fixable?",
    answer: "Most cooling issues can be fixed with compressor, thermostat, or fan repairs.",
  },
  {
    question: "What brands do you repair?",
    answer: "We work with Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more.",
  },
  {
    question: "Do you repair built-in and French door fridges?",
    answer: "Yes — we handle all styles, including built-ins and side-by-sides.",
  },
  {
    question: "How fast can you get here?",
    answer: "We offer same-day and next-day service in most Ottawa areas.",
  },
  {
    question: "Do you bring fridge parts with you?",
    answer: "We carry parts for common issues; rare parts may require ordering.",
  },
  {
    question: "Can you help with strange fridge noises?",
    answer: "Yes — unusual noises often point to fans, defrost systems, or motors.",
  },
  {
    question: "Do you repair freezer sections too?",
    answer: "Absolutely — fridge/freezer combos are our specialty.",
  },
  {
    question: "How long do fridge repairs usually take?",
    answer: "Usually 1–2 hours depending on diagnostics and accessibility.",
  },
  {
    question: "Do I need to empty the fridge before your visit?",
    answer: "Only the section we're working on — we'll guide you.",
  },
];

export default function FridgeRepairPage() {
  return (
    <>
      <ServiceHero
        title="Fridge Repair in Ottawa – Cold, Quiet, Reliable"
        description="Fridge too warm? Freezer frosting over? Fixer Appliance Repair provides fast, effective fridge repair across Ottawa — with honest diagnostics and long-term fixes."
        icon={<FaSnowflake className="text-6xl text-white" />}
      />

      {/* Service Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              We service all major brands including LG, Samsung, Whirlpool, GE, Frigidaire, and Maytag.
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

      <FeedbacksSection applianceName="Fridge" />

      {/* Repair or Replace */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Repair or Replace?</h2>
            <p className="text-lg text-gray-700">
              Refrigerators are expensive to replace — and many common issues are easy to fix. 
              If your fridge is less than 12 years old, check our repair vs replace comparison.
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
              We also install fridges and French-door units across Ottawa. Trust our pros for safe 
              refrigerator installation and leveling.
            </p>
            <Link href="/fridge-installation" className="btn-primary">
              Learn About Fridge Installation
            </Link>
          </div>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Brands We Repair</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We repair refrigerators from these trusted brands:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center font-semibold text-gray-800">
                {brand}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            If your fridge isn't listed, just ask — we work on most brands sold in Canada.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">We Serve These Areas</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            We provide trusted fridge repair services in all parts of Ottawa and nearby areas:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Link
                key={index}
                href={area.slug}
                className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                <FaMapMarkerAlt className="text-primary-600" />
                <span className="font-medium">Fridge Repair {area.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Not sure if you're within range? Contact us — we'll be happy to confirm.
          </p>
        </div>
      </section>

      <FAQSection applianceName="Fridge" faqs={faqs} />

      {/* Things to Do in Ottawa */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Things to Do in Ottawa While We Repair Your Fridge</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Take a cool break while we fix your fridge. Here are some great ways to spend the time:
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Sparks Street</h3>
              <p className="text-gray-600">Pedestrian-friendly with patios and street performers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Little Italy (Preston St.)</h3>
              <p className="text-gray-600">Home to gelato, pizza, and espresso bars</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Lansdowne Park</h3>
              <p className="text-gray-600">A mix of shops, cinema, and green space</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Ottawa Art Gallery</h3>
              <p className="text-gray-600">Modern and always refreshing</p>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-8">
            Want to catch a live event or exhibit? Check what's happening this week:{" "}
            <a 
              href="https://ottawatourism.ca/en/see-and-do/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Ottawa Tourism Events
            </a>
          </p>
        </div>
      </section>

      {/* Book Your Repair */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Book Your Fridge Repair in Ottawa</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Fridge not cooling? Don't let your food go to waste. Reach out now — we offer quick, 
            expert service throughout Ottawa. Call, text or book online today.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-xl font-semibold">Call or text: (613) 555-0199</p>
            <p className="text-xl">Email: service@fixerappliancerepair.ca</p>
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
            Fixer also provides trusted repair services for:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/washer-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Washer Repair in Ottawa
            </Link>
            <Link href="/dryer-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dryer Repair in Ottawa
            </Link>
            <Link href="/dishwasher-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Dishwasher Repair in Ottawa
            </Link>
            <Link href="/oven-repair" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Oven Repair in Ottawa
            </Link>
            <Link href="/fridge-installation" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors">
              Fridge Installation in Ottawa
            </Link>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}

