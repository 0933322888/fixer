import { Metadata } from "next";
import Link from "next/link";
import BrandsSection from "@/components/BrandsSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import CTASection from "@/components/CTASection";

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

      <CommonIssuesSection issues={commonIssues} />

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

      <InstallationCTASection
        applianceName="Fridge"
        description="Got a new fridge? We also provide fridge installation in Ottawa with same-day service available in most areas."
        href="/appliance-installation"
      />

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

      <FAQSection applianceName="Fridge" faqs={faqs} />

      <ThingsToDoSection
        attractions={[
          { name: "Sparks Street", description: "pedestrian-friendly with patios and street performers" },
          { name: "Little Italy (Preston St.)", description: "home to gelato, pizza, and espresso bars" },
          { name: "Lansdowne Park", description: "a mix of shops, cinema, and green space" },
          { name: "Ottawa Art Gallery", description: "modern and always refreshing" },
        ]}
        heading="Things to Do in Ottawa While We Repair Your Fridge"
        description="Take a cool break while we fix your fridge. Here are some great ways to spend the time:"
      />

      <CTASection
        heading="Book Your Fridge Repair in Ottawa"
        description="Fridge not cooling? Don't let your food go to waste. Reach out now — we offer quick, expert service throughout Ottawa. Call, text or book online today."
      />

      <RelatedServicesSection services={relatedServices} applianceName="fridge" />
    </>
  );
}

