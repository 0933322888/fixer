import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title:
    "Kanata Lakes Appliance Repair – Professional Technicians | Fixer – Washer, Dryer, Fridge, Dishwasher",
  description:
    "Appliance repair in Kanata Lakes. Washers, dryers, fridges & ovens fixed quickly. Book now at 613-413-6969 – friendly local team, 90-day guarantee.",
};

const services = [
  {
    name: "Washer repair Kanata Lakes",
    description: "Smooth cycles without setbacks.",
    href: "/washer-repair/kanata",
  },
  {
    name: "Dryer repair Kanata Lakes",
    description: "Quiet, efficient drying sessions.",
    href: "/dryer-repair/kanata",
  },
  {
    name: "Dishwasher repair Kanata Lakes",
    description: "Crystal-clear dishes every time.",
    href: "/dishwasher-repair/kanata",
  },
  {
    name: "Oven repair Kanata Lakes",
    description: "Even heat for reliable meals.",
    href: "/oven-repair/kanata",
  },
  {
    name: "Cooktop repair Kanata Lakes",
    description: "Consistent heat on every burner.",
    href: "/cooktop-repair/kanata",
  },
  {
    name: "Microwave repair Kanata Lakes",
    description: "Safe, speedy reheating.",
    href: "/microwave-repair/kanata",
  },
  {
    name: "Fridge repair Kanata Lakes",
    description: "Protect your fresh ingredients.",
    href: "/fridge-repair/kanata",
  },
  {
    name: "Freezer repair Kanata Lakes",
    description: "Dependable cold storage.",
    href: "/freezer-repair/kanata",
  },
];

const attractions = [
  "Kanata Centrum Shopping Centre.",
  "Beaver Pond walking trails.",
  "Kanata Golf & Country Club.",
];

const faqs = [
  {
    question: "Can I get an evening appointment in Kanata Lakes?",
    answer: "Yes, evening slots are sometimes available — call to check and we'll do our best to accommodate.",
  },
  {
    question: "Do you service built-in appliances?",
    answer: "Yes, we work on both freestanding and built-in units, including wall ovens and built-in fridges.",
  },
  {
    question: "Do you provide a written warranty?",
    answer: "Absolutely — all repairs include a 90-day warranty for peace of mind.",
  },
  {
    question: "If I need fridge repair in Ottawa, do you travel outside Kanata Lakes?",
    answer: "Absolutely — we cover all of Kanata and Ottawa. Book fridge repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Morgan's Grant Appliance Repair",
    href: "/service-areas/kanata/morgans-grant",
  },
  {
    name: "Beaverbrook Appliance Repair",
    href: "/service-areas/kanata/beaverbrook",
  },
  {
    name: "Katimavik-Hazeldean Appliance Repair",
    href: "/service-areas/kanata/katimavik-hazeldean",
  },
  {
    name: "Glen Cairn Appliance Repair",
    href: "/service-areas/kanata/glen-cairn",
  },
  {
    name: "Bridlewood Appliance Repair",
    href: "/service-areas/kanata/bridlewood",
  },
];

const additionalAreas = [
  "Shirley's Brook Appliance Repair",
  "Kanata West",
  "Emerald Meadows",
  "Marchwood",
  "South March",
];

export default function KanataLakesServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Kanata Lakes Appliance Repair – Fast & Friendly
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Need quick appliance repair in Kanata Lakes? Our insured team delivers fast,
              professional service with a 90-day warranty. Part of our{" "}
              <Link
                href="/service-areas/kanata"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Kanata appliance repair
              </Link>{" "}
              service, covering Bridlewood and Morgan's Grant too.
            </p>
            <p className="text-lg text-gray-100">
              90-day protection on all completed repairs. Helpful, fully insured service team. Local Kanata pros ready to assist quickly. Many repairs handled with same-day service.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Kanata Lakes"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation in Kanata",
                href: "/appliance-installation/kanata",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Kanata Lakes"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Kanata Lakes While We Fix"
        description="While your appliance is being repaired, discover Kanata Lakes:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See what's happening now: Ottawa Tourism Events"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We also cover{" "}
            <Link
              href="/fridge-repair"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              fridge repair in Ottawa
            </Link>{" "}
            and surrounding areas.
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Other Kanata Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Kanata? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Kanata Lakes" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="For fast, local help in Kanata Lakes — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
