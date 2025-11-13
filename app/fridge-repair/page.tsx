import { Metadata } from "next";
import Link from "next/link";
import BrandsSection from "@/components/BrandsSection";
import BenefitsSection from "@/components/BenefitsSection";
import { FaMapMarkerAlt, FaUtensils, FaTree, FaBook } from "react-icons/fa";

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
  { name: "Washer Repair in Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair in Ottawa", href: "/dryer-repair" },
  { name: "Dishwasher Repair in Ottawa", href: "/dishwasher-repair" },
  { name: "Oven Repair in Ottawa", href: "/oven-repair" },
  { name: "Cooktop Repair in Ottawa", href: "/cooktop-repair" },
  { name: "Fridge Installation in Ottawa", href: "/fridge-installation" },
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
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
      <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white">
              Fridge Repair in Ottawa – Cold, Quiet, Reliable</h1>
            <p className="text-xl text-gray-100 mb-8">
              Fridge too warm? Freezer frosting over? Fixer Appliance Repair provides fast, effective fridge repair across Ottawa — with honest diagnostics and long-term fixes.
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

      <BenefitsSection applianceName="Fridge" benefits={benefits} />


      {/* Repair or Replace */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Repair or Replace?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Refrigerators are expensive to replace — and many common issues are easy to fix. 
              If your fridge is less than 12 years old, check our repair vs replace comparison.
            </p>
            <Link href="/repair-vs-replace" className="btn-primary">
              Read Our Repair vs. Replace Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Fridge Installation CTA */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">New Fridge? We Can Install It</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got a new fridge? We also provide fridge installation in Ottawa with same-day service available in most areas.
          </p>
          <Link href="/appliance-installation" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Learn About Fridge Installation
          </Link>
        </div>
      </section>

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              We repair refrigerators from these trusted brands:
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
              If your fridge isn't listed, just ask — we work on most brands sold in Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Repair Fridges Across Ottawa</h2>
            <p className="text-center text-gray-700 mb-8">
              We proudly repair fridges across all Ottawa neighborhoods, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={index} 
                    href={`/fridge-repair/${slug}`}
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

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: {faq.question}</h3>
                  <p className="text-gray-700">A: {faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-4">Things to Do in Ottawa While We Repair Your Fridge</h2>
            <p className="text-lg text-gray-700 mb-6">
              Take a cool break while we fix your fridge. Here are some great ways to spend the time:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Sparks Street", description: "pedestrian-friendly with patios and street performers" },
                { name: "Little Italy (Preston St.)", description: "home to gelato, pizza, and espresso bars" },
                { name: "Lansdowne Park", description: "a mix of shops, cinema, and green space" },
                { name: "Ottawa Art Gallery", description: "modern and always refreshing" },
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
          <h2 className="heading-lg mb-4 text-white">Book Your Fridge Repair in Ottawa</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fridge not cooling? Don't let your food go to waste. Reach out now — we offer quick, 
            expert service throughout Ottawa. Call, text or book online today.
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
              We do more than just fridge repair — check out our other Ottawa services:
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

