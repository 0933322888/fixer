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
    "Katimavik-Hazeldean Appliance Repair – Call 613-413-6969 | Fixer – Washer, Dryer, Oven, Fridge",
  description:
    "Appliance repair in Katimavik-Hazeldean. Washers, dryers, fridges, ovens & more. Call 613-413-6969 now for insured local service, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Katimavik-Hazeldean",
    description: "Smooth washes without mid-cycle stops.",
    href: "/washer-repair/kanata",
  },
  {
    name: "Dryer repair Katimavik-Hazeldean",
    description: "Efficient drying without the noise.",
    href: "/dryer-repair/kanata",
  },
  {
    name: "Dishwasher repair Katimavik-Hazeldean",
    description: "Sparkling dishes every run.",
    href: "/dishwasher-repair/kanata",
  },
  {
    name: "Oven repair Katimavik-Hazeldean",
    description: "Even baking and roasting.",
    href: "/oven-repair/kanata",
  },
  {
    name: "Cooktop repair Katimavik-Hazeldean",
    description: "Responsive burners with precise heat.",
    href: "/cooktop-repair/kanata",
  },
  {
    name: "Microwave repair Katimavik-Hazeldean",
    description: "Safe, quick reheating.",
    href: "/microwave-repair/kanata",
  },
  {
    name: "Fridge repair Katimavik-Hazeldean",
    description: "Consistent cooling throughout.",
    href: "/fridge-repair/kanata",
  },
  {
    name: "Freezer repair Katimavik-Hazeldean",
    description: "Reliable deep-freeze capacity.",
    href: "/freezer-repair/kanata",
  },
];

const attractions = [
  "Walter Baker Park — a local favourite for sports and picnics.",
  "Kanata Leisure Centre & Wave Pool.",
  "Shops and dining spots along Hazeldean Road.",
];

const faqs = [
  {
    question: "Is same-day repair possible in Katimavik-Hazeldean?",
    answer: "Yes, depending on scheduling — call to check availability and we'll do our best to fit you in.",
  },
  {
    question: "Do you repair dishwashers and cooktops too?",
    answer: "Absolutely, we handle all major home appliances across kitchens and laundry rooms.",
  },
  {
    question: "Are your technicians insured?",
    answer: "Yes, our whole team is fully insured for your peace of mind.",
  },
  {
    question: "Do you cover nearby areas like dryer repair in Ottawa?",
    answer: "Yes, we serve all of Ottawa, not just Katimavik-Hazeldean. Book dryer repair in Ottawa whenever you need us.",
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
    name: "Glen Cairn Appliance Repair",
    href: "/service-areas/kanata/glen-cairn",
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
  "Emerald Meadows",
  "Kanata West",
  "Marchwood",
  "South March",
];

export default function KatimavikHazeldeanServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Katimavik-Hazeldean Appliance Repair That Lasts
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance repair in Katimavik-Hazeldean made simple. Our friendly, insured
              team provides dependable service with a 90-day warranty. Explore our{" "}
              <Link
                href="/service-areas/kanata"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Kanata appliance repair
              </Link>{" "}
              hub, also serving Bridlewood and Morgan's Grant.
            </p>
            <p className="text-lg text-gray-100">
              Reliable 90-day coverage on all repairs. Courteous, insured professionals. Local Kanata technicians who live nearby. Fast response — same-day visits possible.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Katimavik-Hazeldean"
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
        header="Brands We Service in Katimavik-Hazeldean"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Katimavik-Hazeldean While We Fix"
        description="While your appliance is in good hands, explore:"
        
        linkText="See current activities: Ottawa Tourism Events"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We also cover{" "}
            <Link
              href="/dryer-repair"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              dryer repair in Ottawa
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
      <FAQSection applianceName="Katimavik-Hazeldean" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Don't wait with a broken appliance — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
