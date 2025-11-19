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
    "Glen Cairn Appliance Repair – Reliable Service | Fixer – Washer, Dryer, Fridge, Dishwasher",
  description:
    "Appliance repair in Glen Cairn, Kanata. We fix washers, dryers, fridges, ovens & dishwashers. Insured service, friendly local team, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Glen Cairn",
    description: "Smooth operation from start to finish.",
    href: "/washer-repair/kanata",
  },
  {
    name: "Dryer repair Glen Cairn",
    description: "Quiet, efficient drying cycles.",
    href: "/dryer-repair/kanata",
  },
  {
    name: "Dishwasher repair Glen Cairn",
    description: "Sparkling dishes without streaks.",
    href: "/dishwasher-repair/kanata",
  },
  {
    name: "Oven repair Glen Cairn",
    description: "Consistent heat for every bake.",
    href: "/oven-repair/kanata",
  },
  {
    name: "Cooktop repair Glen Cairn",
    description: "Even heating and responsive controls.",
    href: "/cooktop-repair/kanata",
  },
  {
    name: "Microwave repair Glen Cairn",
    description: "Safe reheating without surprises.",
    href: "/microwave-repair/kanata",
  },
  {
    name: "Fridge repair Glen Cairn",
    description: "Keep produce crisp and dairy cool.",
    href: "/fridge-repair/kanata",
  },
  {
    name: "Freezer repair Glen Cairn",
    description: "Steady freezing for long-term storage.",
    href: "/freezer-repair/kanata",
  },
];

const attractions = [
  "Glen Cairn Community Centre.",
  "Local soccer fields and playgrounds.",
  "Shops and restaurants along Castlefrank Road.",
];

const faqs = [
  {
    question: "What's the typical cost of a repair visit in Glen Cairn?",
    answer: "Diagnostics are a flat fee, and repair costs depend on the required parts and labour. We'll provide clear pricing before we start.",
  },
  {
    question: "Do you bring common replacement parts with you?",
    answer: "Yes, our vans are stocked with the most requested appliance parts to finish repairs on the first visit.",
  },
  {
    question: "Do you offer a guarantee on service?",
    answer: "Absolutely — every repair comes with a 90-day warranty for peace of mind.",
  },
  {
    question: "Can I also book oven repair in Ottawa for relatives outside Glen Cairn?",
    answer: "Yes, we cover the entire Ottawa region. Book oven repair in Ottawa any time.",
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
    name: "Bridlewood Appliance Repair",
    href: "/service-areas/kanata/bridlewood",
  },
  {
    name: "Kanata Lakes Appliance Repair",
    href: "/service-areas/kanata/kanata-lakes",
  },
];

const additionalAreas = [
  "Shirley's Brook Appliance Repair",
  "South March",
  "Emerald Meadows",
  "Kanata West",
  "Marchwood",
];

export default function GlenCairnServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Glen Cairn Appliance Repair – Done Right the First Time
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Trusted appliance repair in Glen Cairn. We service washers, dryers, fridges,
              ovens and more, backed by a 90-day guarantee. Visit our{" "}
              <Link
                href="/service-areas/kanata"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Kanata appliance repair
              </Link>{" "}
              page, also covering Beaverbrook and Katimavik-Hazeldean.
            </p>
            <p className="text-lg text-gray-100">
              Solid 90-day warranty on every job. Insured and approachable specialists. Kanata locals who understand the community. Same-day service offered whenever we can.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Glen Cairn"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation in Kanata",
                href: "/appliance-installation/locations/kanata",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Glen Cairn"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Glen Cairn While We Fix"
        description="While we repair your appliance, take time to enjoy Glen Cairn:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See nearby events: Ottawa Tourism Events"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We also cover{" "}
            <Link
              href="/oven-repair"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              oven repair in Ottawa
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
      <FAQSection applianceName="Glen Cairn" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Need appliance repair in Glen Cairn? Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
