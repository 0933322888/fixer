import { Metadata } from "next";
import Link from "next/link";
import { FaWind } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CommonIssuesSection from "@/components/CommonIssuesSection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import CTASection from "@/components/CTASection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Dryer Repair Ottawa – Fast & Reliable Service | Fixer",
  description: "Need dryer repair in Ottawa? Fixer offers same-day service, repairs for all major electric dryers, and a 90-day warranty. Call 613-413-6969 today!",
};

const commonIssues = [
  {
    title: "Dryer not heating",
    description: "This is usually caused by a faulty heating element, blown thermal fuse, or bad thermostat. We'll run a diagnostic and replace what's needed.",
  },
  {
    title: "Dryer takes too long to dry",
    description: "Clogged vents, weak heating, or sensor issues could be to blame. We'll get your dryer working efficiently again.",
  },
  {
    title: "Clothes come out damp or cold",
    description: "If your dryer runs but doesn't fully dry the clothes, it may be cycling too early or overheating and shutting down. We'll inspect the sensors and controls.",
  },
  {
    title: "Dryer won't start",
    description: "A broken start switch, bad door latch, or faulty control board may be the issue. We'll troubleshoot and repair it quickly.",
  },
  {
    title: "Drum not spinning",
    description: "Could be due to a worn belt, motor failure, or idler pulley issue. We'll inspect and replace the necessary parts.",
  },
  {
    title: "Dryer makes loud noises or squeaks",
    description: "Grinding, thumping, or squealing noises usually mean worn drum bearings, support rollers, or a damaged belt.",
  },
  {
    title: "Error codes or flashing lights",
    description: "We'll decode the error message and get to the root of the issue — whether it's heating, sensors, or control board.",
  },
  {
    title: "Dryer shuts off mid-cycle",
    description: "Often caused by overheating, faulty moisture sensors, or loose wiring. We'll restore proper function and safety.",
  },
  {
    title: "Washer/Dryer Combo Units",
    description: "We also service washer/dryer combo appliances — especially common in downtown Ottawa condos.",
  },
  {
    title: "Dryer smells like something is burning",
    description: "This could be due to lint buildup inside the drum or vent, or an overheating motor. We'll inspect it thoroughly to prevent fire risks.",
  },
  {
    title: "Dryer keeps tripping the breaker",
    description: "This often signals an electrical short, faulty wiring, or overheating components. Let our licensed technicians take a look.",
  },
  {
    title: "Dryer won't stop running",
    description: "A faulty timer, control board, or moisture sensor may prevent the cycle from ending. We'll pinpoint the issue and fix it.",
  },
  {
    title: "Dryer door won't stay closed",
    description: "A worn or broken door latch or strike plate can prevent the dryer from operating. We'll replace the faulty components.",
  },
  {
    title: "Dryer makes a clicking noise but doesn't start",
    description: "This could mean the motor is trying to engage but is jammed or failing. We'll safely open it up and find the source.",
  },
];

const whyChooseUs = [
  "Over 15 years of experience",
  "Same-day and next-day appointments",
  "Transparent pricing, no pressure",
  "90-day labour warranty",
  "Locally owned and operated in Ottawa",
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
    question: "How much does dryer repair cost in Ottawa?",
    answer: "Most dryer repairs in Ottawa range from $150 to $300, depending on the issue and the brand. We'll always give you a clear quote before starting any work — no surprises.",
  },
  {
    question: "How long does a typical dryer repair take?",
    answer: "Most repairs take less than 90 minutes. If parts are needed, we'll let you know up front and schedule a fast return visit.",
  },
  {
    question: "Is it worth repairing a dryer?",
    answer: "Yes, especially if your dryer is less than 10 years old. Repairs are often far more affordable than replacement. Not sure? Our repair vs replace guide is coming soon.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "Are tumble dryers worth repairing?",
    answer: "Tumble dryers are absolutely repairable — most issues involve heating elements, belts, or sensors and can be fixed quickly by a professional.",
  },
  {
    question: "Do you fix washer/dryer combo units?",
    answer: "Yes — we frequently repair stacked and combo units in Ottawa condos and apartments.",
  },
  {
    question: "Do you repair electric dryers?",
    answer: "Yes. We do not service gas dryers, but we specialize in electric models.",
  },
  {
    question: "What is the most common problem with dryers?",
    answer: "The most common issues include no heat, long drying times, and loud noises. These are usually related to the heating element or ventilation system.",
  },
  {
    question: "Should I repair or replace my dryer?",
    answer: "If your dryer is under 10 years old, repair is almost always the better option. For older units, we'll give you honest advice based on cost and condition. Our comparison guide is coming soon.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "Why does my dryer smell like burning?",
    answer: "This could be due to lint buildup, an overheating motor, or a failing heating element. It's best to stop using the unit and have it inspected immediately.",
  },
  {
    question: "Can I run my dryer if it's making noise?",
    answer: "Loud or unusual noises often indicate worn parts like rollers or belts. Continued use could cause more damage, so it's best to have it checked promptly.",
  },
  {
    question: "Why is my dryer shutting off after a few minutes?",
    answer: "It might be overheating due to a clogged vent, faulty thermostat, or sensor issue. We can quickly identify and resolve the problem.",
  },
  {
    question: "Do you offer same-day dryer repair in Ottawa?",
    answer: "Yes! We offer same-day or next-day appointments in Ottawa and surrounding areas, depending on availability.",
  },
];

const ottawaAttractions = [
  "National Gallery of Canada – stunning exhibitions and iconic architecture",
  "Major's Hill Park – peaceful green space just steps from downtown",
  "Elgin Street – full of great lunch spots and cozy cafés",
  "Canadian Museum of Nature – perfect for kids and curious minds",
];

const relatedServices = [
  { name: "Washer Repair Ottawa", href: "/washer-repair" },
  { name: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { name: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { name: "Dishwasher Repair Ottawa", href: "/dishwasher-repair" },
  { name: "Oven Repair Ottawa", href: "/oven-repair" },
  { name: "Cooktop Repair Ottawa", href: "/cooktop-repair" },
  { name: "Microwave Repair Ottawa", href: "/microwave-repair" },
  { name: "Dryer Installation Ottawa", href: "/appliance-installation/dryer" },
];

export default function DryerRepairPage() {
  return (
    <>
      <ServiceHero
        title="Fast & Reliable Dryer Repair Across Ottawa"
        description="Is your dryer not heating, taking forever to dry clothes, or making unusual noises? Fixer Appliance Repair offers professional dryer repair services throughout Ottawa — from central neighbourhoods to nearby suburbs. We repair all major electric dryers, including many stacked and condo-friendly models. Whether it's Whirlpool, LG, Samsung, or another trusted brand — we've got you covered."
        icon={<FaWind className="text-[30px] mb-2 inline-block" />}
        useSectionPadding={true}
      />

      <CommonIssuesSection issues={commonIssues} heading="Common Dryer Problems We Fix" />

      <BenefitsSection applianceName="Dryer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Wondering if your dryer is still worth fixing? Read our dryer repair vs. replacement guide to weigh your options before you buy a new one." />

      <InstallationCTASection
        applianceName="Dryer"
        description="Got a new dryer? We also provide dryer installation in Ottawa with same-day service available in most areas."
        href="/appliance-installation/dryer"
      />

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              From LG to Whirlpool, we work with all major electric dryer brands. Here are some of the brands we repair every week in Ottawa:
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
              Not sure what model you have? Just send us a quick photo or the serial number — we'll take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Repair Dryers Across Ottawa</h2>
            <p className="text-center text-gray-700 mb-8">
              We proudly repair dryers across all Ottawa neighborhoods, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={index} 
                    href={`/dryer-repair/${slug}`}
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

      <FAQSection applianceName="Dryer" faqs={faqs} />

      <ThingsToDoSection
        attractions={ottawaAttractions}
        heading="Things to Do in Ottawa While We Repair Your Dryer"
        description="Waiting for your dryer to get fixed? It's a great excuse to step out and enjoy the city. Whether you're into art, nature, or relaxing with a good book, Ottawa has something nearby:"
      />

      <CTASection
        heading="Book Your Dryer Repair in Ottawa"
        description="Don't wait for the laundry to pile up — schedule your dryer repair today. Call, text, or book online and let Fixer bring the heat back to your laundry routine."
      />

      <RelatedServicesSection services={relatedServices} applianceName="dryer" />
    </>
  );
}
