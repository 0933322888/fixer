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
    "Bridlewood Appliance Repair – Call 613-413-6969 | Fixer – Washer, Dryer, Oven, Fridge",
  description:
    "Trusted appliance repair in Bridlewood. Washers, dryers, fridges, ovens & more. Call 613-413-6969 today – insured technicians, 90-day service warranty.",
};

const services = [
  {
    name: "Washer repair Bridlewood",
    description: "Smooth cycles without surprise stops.",
    href: "/washer-repair/kanata",
  },
  {
    name: "Dryer repair Bridlewood",
    description: "Fast, even drying every load.",
    href: "/dryer-repair/kanata",
  },
  {
    name: "Dishwasher repair Bridlewood",
    description: "Dishes that shine after each cycle.",
    href: "/dishwasher-repair/kanata",
  },
  {
    name: "Oven repair Bridlewood",
    description: "Reliable temperatures for perfect meals.",
    href: "/oven-repair/kanata",
  },
  {
    name: "Cooktop repair Bridlewood",
    description: "Smooth, responsive heat control.",
    href: "/cooktop-repair/kanata",
  },
  {
    name: "Microwave repair Bridlewood",
    description: "Safe reheating minus the sparks.",
    href: "/microwave-repair/kanata",
  },
  {
    name: "Fridge repair Bridlewood",
    description: "Keep food fresh and safe.",
    href: "/fridge-repair/kanata",
  },
  {
    name: "Freezer repair Bridlewood",
    description: "Dependable long-term cold storage.",
    href: "/freezer-repair/kanata",
  },
];

const attractions = [
  "Eva James Memorial Community Centre.",
  "Bridlewood Trails and nearby parks.",
  "Shopping plazas around Eagleson Road.",
];

const faqs = [
  {
    question: "Do you handle weekend appointments in Bridlewood?",
    answer: "Sometimes — availability depends on the schedule. Call us to check and we'll do our best to accommodate.",
  },
  {
    question: "What kinds of appliances do you repair most often?",
    answer: "Washers, dryers, dishwashers, fridges, and ovens are the most common — but we service the full list of major appliances.",
  },
  {
    question: "Are your technicians local to Kanata?",
    answer: "Yes, our team is Kanata-based, serving Bridlewood every week.",
  },
  {
    question: "Do you also offer dishwasher repair in Ottawa if needed?",
    answer: "Yes, we cover the entire city. Book dishwasher repair in Ottawa whenever you need us.",
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
    name: "Kanata Lakes Appliance Repair",
    href: "/service-areas/kanata/kanata-lakes",
  },
];

const additionalAreas = [
  "Shirley's Brook Appliance Repair",
  "South March",
  "Marchwood",
  "Emerald Meadows",
  "Kanata West",
];

export default function BridlewoodServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Bridlewood Appliance Repair for Local Homes
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Reliable appliance repair in Bridlewood, Kanata. Our local techs bring tools
              and common parts to fix it right the first time. Learn more through our{" "}
              <Link
                href="/service-areas/kanata"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Kanata appliance repair
              </Link>{" "}
              page, also serving Kanata Lakes and Glen Cairn.
            </p>
            <p className="text-lg text-gray-100">
              Guaranteed repairs with a 90-day warranty. Safe, insured, and customer-friendly team. Kanata-based techs just around the corner. Same-day scheduling available most days.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Bridlewood"
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
        header="Brands We Service in Bridlewood"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Bridlewood While We Fix"
        description="While we handle your repair, explore Bridlewood:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See what's on this week: Ottawa Tourism Events"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We also cover{" "}
            <Link
              href="/dishwasher-repair"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              dishwasher repair in Ottawa
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
      <FAQSection applianceName="Bridlewood" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Same-day slots may be available — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
