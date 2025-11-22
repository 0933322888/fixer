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
    "Morgan's Grant Appliance Repair – Call 613-413-6969 | Fixer – Washer, Dryer, Fridge, Oven",
  description:
    "Appliance repair in Morgan's Grant. Washers, dryers, fridges & ovens fixed fast. Call 613-413-6969 today – insured service with 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Morgan's Grant",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair/kanata",
  },
  {
    name: "Dryer repair Morgan's Grant",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair/kanata",
  },
  {
    name: "Dishwasher repair Morgan's Grant",
    description: "Spotless dishes without the rewash.",
    href: "/dishwasher-repair/kanata",
  },
  {
    name: "Oven repair Morgan's Grant",
    description: "Even heat for every meal.",
    href: "/oven-repair/kanata",
  },
  {
    name: "Cooktop repair Morgan's Grant",
    description: "Consistent heat across every burner.",
    href: "/cooktop-repair/kanata",
  },
  {
    name: "Microwave repair Morgan's Grant",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/kanata",
  },
  {
    name: "Fridge repair Morgan's Grant",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair/kanata",
  },
  {
    name: "Freezer repair Morgan's Grant",
    description: "Dependable deep-freeze performance.",
    href: "/freezer-repair/kanata",
  },
];

const attractions = [
  "Richcraft Recreation Complex — pool, gym, and community programs.",
  "Shirley's Brook Park — walking trails and playgrounds.",
  "Shops and cafés along March Road.",
];

const faqs = [
  {
    question: "Can you come out the same day in Morgan's Grant?",
    answer: "Often yes — give us a call in the morning to confirm availability.",
  },
  {
    question: "Do you handle high-end brands like Bosch and LG?",
    answer: "Yes, our technicians repair all major brands, from GE to Samsung and beyond.",
  },
  {
    question: "If I move across town, can I still book washer repair in Ottawa?",
    answer: "Of course — our team covers all of Kanata and the wider Ottawa area. Book washer repair in Ottawa any time you need us.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes, every repair includes a 90-day guarantee.",
  },
];

const otherNeighbourhoods = [
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

export default function MorgansGrantServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Morgan's Grant Appliance Repair You Can Trust
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Looking for appliance repair in Morgan's Grant? Our insured local team offers
              fast, reliable service with a 90-day warranty. Part of our{" "}
              <Link
                href="/service-areas/kanata"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Kanata appliance repair
              </Link>{" "}
              network, also serving Beaverbrook and Katimavik-Hazeldean.
            </p>
            <p className="text-lg text-gray-100">
              Every repair comes with a 90-day warranty. Our insured, approachable team makes service stress-free. Local Kanata technicians who know your neighbourhood. Same-day appointments often available.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Morgan's Grant"
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
        header="Brands We Service in Morgan's Grant"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Morgan's Grant While We Fix"
        description="While we handle your repair, enjoy Morgan's Grant:"
        
        linkText="See what's happening this week: Ottawa Tourism Events"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We also cover{" "}
            <Link
              href="/washer-repair"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              washer repair in Ottawa
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
      <FAQSection applianceName="Morgan's Grant" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book Your Morgan's Grant Appliance Repair Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
