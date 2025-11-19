import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";

export const metadata: Metadata = {
  title: "Washer Repair Ottawa | Fast & Reliable Washing Machine Repair",
  description: "Professional washer repair services across Ottawa. Same-day service available. We fix all brands and models. Call 613-413-6969 for fast, reliable washer repair.",
  keywords: "washer repair Ottawa, washing machine repair, washer not draining, washer not spinning, Ottawa ON",
};

const washerProblems = [
  {
    title: "Washer won't turn on",
    description: "First, check the power cord and circuit breaker. If that's not the issue, it could be a faulty door latch, control board, or start switch. We'll diagnose it quickly.",
  },
  {
    title: "Washer not draining",
    description: "If water stays in the drum, the culprit might be a clogged drain pump, kinked hose, or worn-out pump motor. We'll clear it or replace what's needed.",
  },
  {
    title: "Washer not spinning or agitating",
    description: "A non-spinning washer could be due to a bad lid switch, motor coupling, or worn belt. Sometimes it's just an unbalanced load. Let us check it out.",
  },
  {
    title: "Strange noises or vibrations",
    description: "Thumping, squealing, or shaking can point to drum issues, loose bearings, or shock absorbers. We'll track down the cause and stop the noise.",
  },
  {
    title: "Leaking water",
    description: "Leaks usually come from worn door seals, cracked hoses, or loose connections. We'll pinpoint the source and make sure it's watertight again.",
  },
  {
    title: "Door won't unlock",
    description: "When the door stays locked after a cycle, it could be a faulty latch or a sensor error. We can unlock it safely and replace the part if needed.",
  },
  {
    title: "Error codes on the display",
    description: "Flashing codes? We'll decode them and explain what's going on — whether it's a sensor issue, water flow problem, or something else.",
  },
  {
    title: "Clothes still wet after final cycle",
    description: "If your washer finishes but clothes are soaking, it may not be spinning properly. It could be a drainage issue, unbalanced load, or motor problem.",
  },
  {
    title: "Washer starts then stops",
    description: "If your washer begins a cycle but shuts off too soon, it may be overheating, have a faulty sensor, or be experiencing power issues. We'll find the root cause.",
  },
  {
    title: "Washer won't fill with water",
    description: "When the drum stays dry, the problem could be with the inlet valve, water supply hoses, or even the control board. We'll check each part step-by-step.",
  },
  {
    title: "Washer overfills or leaks during fill",
    description: "Too much water can lead to leaks and flooding. This might be caused by a faulty pressure switch or inlet valve. We'll stop the overflow before it causes damage.",
  },
  {
    title: "Washer smells bad",
    description: "A musty or sour smell usually means mold or detergent buildup inside the drum, gasket, or dispenser. We'll deep-clean and advise on prevention.",
  },
  {
    title: "Washer shakes or \"walks\" across the floor",
    description: "If your washer shifts during a cycle, it could be unbalanced, poorly leveled, or have worn-out shock absorbers. We'll stabilize it properly.",
  },
];

const whyChooseUs = [
  "Over 15 years of washer repair experience in Ottawa homes",
  "Same-day bookings available across the city",
  "We service all major washer brands",
  "Friendly, upfront pricing and no surprises",
  "Local team that knows your neighborhood",
  "We bring the tools and parts needed for most washer repairs on the first visit",
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
  { name: "KitchenAid", href: "/brands/kitchenaid" },
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

const faqs = [
  {
    question: "Why won't my washing machine drain properly?",
    answer: "It could be due to a clogged drain hose, faulty pump, or debris in the filter. A technician can quickly diagnose the exact cause.",
  },
  {
    question: "Is it worth repairing an old washer or should I replace it?",
    answer: "It depends on the model and issue. If the machine is under 10 years old and the repair is minor, it's usually worth fixing.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "How long does a typical washer repair take?",
    answer: "Most repairs are completed in under 2 hours. We carry common parts to speed up the process.",
  },
  {
    question: "Do you offer same-day washer repair in Ottawa?",
    answer: "Yes, we offer same-day or next-day appointments across Ottawa and nearby suburbs.",
  },
  {
    question: "Do you repair washer/dryer combo units?",
    answer: "Yes! We service washer/dryer combos, especially common in downtown condos and smaller homes.",
  },
  {
    question: "What causes a washing machine to stop mid-cycle?",
    answer: "It could be due to a faulty door lock, control board, or a power interruption. Our techs can run a quick diagnostic and get it running again.",
  },
  {
    question: "Why is my washing machine shaking or walking across the floor?",
    answer: "This often happens if the machine is unbalanced or the shock absorbers are worn. We'll stabilize it so it stays in place.",
  },
  {
    question: "Why does my washer smell bad even after cleaning?",
    answer: "Mold and detergent buildup in the drum or gasket are common culprits. We'll clean it properly and give you tips to prevent it.",
  },
  {
    question: "Do you offer a warranty on washer repairs?",
    answer: "Yes — all our repairs come with a 90-day labour warranty. We stand behind our work.",
  },
];

const ottawaAttractions = [
  {
    name: "Parliament Hill",
    description: "historic views and riverfront trails",
  },
  {
    name: "ByWard Market",
    description: "local food, coffee, and art",
  },
  {
    name: "Rideau Canal",
    description: "perfect for a walk or bike ride",
  },
  {
    name: "Dow's Lake Pavilion",
    description: "relaxing waterside cafes and rentals",
  },
];

const relatedServices = [
  { name: "Dryer Repair Ottawa", href: "/dryer-repair" },
  { name: "Dishwasher Repair Ottawa", href: "/dishwasher-repair" },
  { name: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { name: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { name: "Oven Repair Ottawa", href: "/oven-repair" },
  { name: "Cooktop Repair Ottawa", href: "/cooktop-repair" },
  { name: "Microwave Repair Ottawa", href: "/microwave-repair" },
  { name: "Washer Installation Ottawa", href: "/washer-installation" },
];

export default function WasherRepairPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-white"><FaTshirt className="text-[30px] mb-2 inline-block" /> Fast & Reliable Washer Repair Across Ottawa</h1>
            <p className="text-xl leading-relaxed mb-8">
              Is your washing machine not draining, spinning, or starting at all? Don't worry — Fixer Appliance Repair is here to help. We provide professional washer repair services across Ottawa, offering fast diagnostics, same-day service options, and dependable local support in every major neighborhood.
            </p>
            <p className="mb-8">Our technicians have experience with most popular washer brands and models. From top-loaders and
              front-loaders to high-efficiency units, we know how to fix them all — quickly and reliably.</p>
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

      <CommonIssuesSection issues={washerProblems} heading="Common Washer Problems We Fix" />

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Not sure if it's time to fix or replace your washing machine? Check out our repair vs. replace guide for washers to make a smart decision based on cost, age, and reliability." />

      <InstallationCTASection
        applianceName="Washer"
        description="Upgrading to a new unit? We also offer washer installation in Ottawa — fast, safe, and fully insured."
        href="/washer-installation"
      />

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              We service all major washer brands, including:
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
              Not sure about your model? No problem. We'll identify the issue and explain your options.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Repair Washers Across Ottawa</h2>
            <p className="text-center text-gray-700 mb-8">
              We proudly repair washers across all Ottawa neighborhoods, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={index} 
                    href={`/washer-repair/${slug}`}
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

      <FAQSection applianceName="Washer" faqs={faqs} />

      <ThingsToDoSection
        attractions={ottawaAttractions}
        heading="Things to Do in Ottawa While We Repair Your Washer"
        description="While our technician takes care of your washer, why not take a break and enjoy some of Ottawa's best spots? Here are a few great places locals love:"
      />

      <CTASection
        heading="Ready to Book?"
        description="Washer trouble can ruin your day — let's get it fixed. Call or text us today to schedule your appointment."
      />

      <RelatedServicesSection services={relatedServices} applianceName="washer" />
    </>
  );
}

