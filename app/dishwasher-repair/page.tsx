import { Metadata } from "next";
import Link from "next/link";
import { FaUtensils } from "react-icons/fa";
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
  title: "Dishwasher Repair Ottawa – Fast & Reliable Service | Fixer",
  description: "Need dishwasher repair in Ottawa? Fixer services all major brands like Bosch, Whirlpool & Samsung with same-day options and a 90-day warranty. Call today!",
};

const commonIssues = [
  {
    title: "Dishes come out dirty",
    description: "Clogged spray arms or poor water circulation may be to blame.",
  },
  {
    title: "Doesn't drain",
    description: "We clear blocked filters, drain hoses, and worn pumps.",
  },
  {
    title: "Leaking water",
    description: "Door seals, cracked hoses, or failed valves are typical issues.",
  },
  {
    title: "Won't start",
    description: "Could be a door latch, thermal fuse, or control board fault.",
  },
  {
    title: "Stops mid-cycle",
    description: "Bad sensors or failing control boards may be the cause.",
  },
  {
    title: "No water entering",
    description: "We test inlet valves and sensors to restore water flow.",
  },
  {
    title: "Strange noises",
    description: "Worn motors or food stuck in the pump can create loud cycles.",
  },
  {
    title: "Soap not dispensing",
    description: "A jammed detergent door or control board fault is likely.",
  },
  {
    title: "Smells bad inside",
    description: "Food buildup in filters or stagnant water often creates odors.",
  },
  {
    title: "Flashing lights or beeping",
    description: "We diagnose the error codes and reset the cycle.",
  },
  {
    title: "Spray arm not spinning",
    description: "Low pressure or debris can block movement — we clean or replace them.",
  },
  {
    title: "Water stays cold",
    description: "Faulty heating elements or thermostats may prevent sanitizing.",
  },
  {
    title: "Control panel frozen",
    description: "We test touchpads, UI boards, and wiring for defects.",
  },
  {
    title: "Overflows during fill",
    description: "Float switches or fill valves may need service.",
  },
  {
    title: "Dish racks off track",
    description: "We replace damaged rails and guides.",
  },
];

const whyChooseUs = [
  "Trusted by hundreds of Ottawa families",
  "Fast, tidy, and reliable service",
  "Transparent quotes and no surprises",
  "90-day labor warranty on every job",
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

const ottawaAttractions = [
  "ByWard Market – fresh produce, unique shops, and great patios",
  "Rideau Canal Pathway – scenic walks with Ottawa's best views",
  "Happy Goat Coffee Co. (Elgin St.) – popular café with serious personality",
  "Canadian Museum of Nature – perfect for curious minds of all ages",
];

const faqs = [
  {
    question: "How much does dishwasher repair usually cost in Ottawa?",
    answer: "Most repairs range between $120–$250 depending on the issue and brand.",
  },
  {
    question: "Which dishwasher brands do you service?",
    answer: "We handle all major brands like Bosch, Whirlpool, KitchenAid, Samsung, LG, GE, and more.",
  },
  {
    question: "Can you fix leaking dishwashers?",
    answer: "Yes — leaks are a common issue, often caused by worn seals, hoses, or valves.",
  },
  {
    question: "My dishwasher doesn't drain. Can you help?",
    answer: "Definitely. We'll check for clogs, faulty pumps, or drain motors and get it fixed.",
  },
  {
    question: "Do you offer same-day dishwasher repair in Ottawa?",
    answer: "In many cases, yes — especially for urgent issues like leaks or flooding.",
  },
  {
    question: "How long does a typical repair take?",
    answer: "Most repairs take 45–90 minutes, depending on the problem and part availability.",
  },
  {
    question: "Is it worth repairing an older dishwasher?",
    answer: "We help you decide based on age, model, and part costs. In many cases — yes.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "Do you carry parts or need to order them?",
    answer: "We stock parts for most common brands. Special orders may take 1–3 days.",
  },
  {
    question: "Do you provide a warranty on repairs?",
    answer: "Yes — we provide a 90-day warranty on both labor and parts we install.",
  },
  {
    question: "Do you uninstall and reinstall built-in dishwashers?",
    answer: "Absolutely. We carefully remove and reinstall dishwashers when needed.",
  },
];

const relatedServices = [
  { name: "Washer Repair Ottawa", href: "/washer-repair" },
  { name: "Dryer Repair Ottawa", href: "/dryer-repair" },
  { name: "Fridge Repair Ottawa", href: "/fridge-repair" },
  { name: "Freezer Repair Ottawa", href: "/freezer-repair" },
  { name: "Oven Repair Ottawa", href: "/oven-repair" },
  { name: "Cooktop Repair Ottawa", href: "/cooktop-repair" },
  { name: "Microwave Repair Ottawa", href: "/microwave-repair" },
  { name: "Dishwasher Installation Ottawa", href: "/appliance-installation/dishwasher" },
];

export default function DishwasherRepairPage() {
  return (
    <>
      <ServiceHero
        title={
          <>
            Dishwasher Repair Ottawa
            <br /> Get Your Dishes Clean Again
          </>
        }
        description="A broken dishwasher means more than dirty dishes — it eats up your time. Fixer Appliance Repair delivers professional, affordable dishwasher repair across Ottawa. Whether it's leaking, not draining, or not turning on, we'll get it back in action fast."
        icon={<FaUtensils className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            We repair all major dishwasher brands, including Bosch, LG, Samsung, Whirlpool, GE, Maytag, and more.
          </p>
        }
        useSectionPadding={true}
        imageSrc="/images/Dishwasher-tec.png"
        imageAlt="Dishwasher repair with technician in Ottawa"
        imageSrcRight="/images/Dishwasher 3.png"
        imageAltRight="Dishwasher repair Ottawa"
      />

      <CommonIssuesSection issues={commonIssues} />

      <BenefitsSection
        applianceName="Dishwasher"
        benefits={whyChooseUs}
        imageSrc="/images/Dishwasher smile.png"
        imageAlt="Dishwasher repair service in Ottawa"
      />

      <RepairOrReplaceSection description="When your dishwasher breaks down, it's tempting to shop for a new one — but repairs are often quick and cost-effective. See how to tell when it's worth fixing." />

      <InstallationCTASection
        applianceName="Dishwasher"
        description="Got a new dishwasher? We also provide dishwasher installation in Ottawa with same-day service available in most areas."
        href="/appliance-installation/dishwasher"
      />

      {/* Brands We Repair */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands We Repair</Link></h2>
            <p className="text-center text-gray-700 mb-8">
              We work with all popular dishwasher brands:
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
              Don't see your dishwasher's name here? Reach out — we likely still service it.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">We Repair Dishwashers Across Ottawa</h2>
            <p className="text-center text-gray-700 mb-8">
              We proudly repair dishwashers across all Ottawa neighborhoods, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => {
                const slug = area.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={index} 
                    href={`/dishwasher-repair/${slug}`}
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

      <FAQSection applianceName="Dishwasher" faqs={faqs} />

      <ThingsToDoSection
        attractions={ottawaAttractions}
        heading="Things to Do in Ottawa While We Repair Your Dishwasher"
        description="Give yourself a break while we fix your dishwasher. Whether you're into culture, coffee, or calm — Ottawa has something nearby:"
      />

      <CTASection
        heading="Book Your Dishwasher Repair in Ottawa"
        description="Ready to get your dishwasher back in action? Call or text us now to book your appointment."
      />

      <RelatedServicesSection services={relatedServices} applianceName="dishwasher" />
    </>
  );
}

