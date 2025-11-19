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
    "Beaverbrook Appliance Repair – Trusted Local Technicians | Fixer – Washer, Dryer, Dishwasher, Fridge",
  description:
    "Reliable appliance repair in Beaverbrook. Washers, dryers, fridges & ovens. Same-day service available. Call 613-413-6969 for trusted local repair.",
};

const services = [
  {
    name: "Washer repair Beaverbrook",
    description: "Keep laundry day moving.",
    href: "/washer-repair/kanata",
  },
  {
    name: "Dryer repair Beaverbrook",
    description: "Faster drying, less noise.",
    href: "/dryer-repair/kanata",
  },
  {
    name: "Dishwasher repair Beaverbrook",
    description: "Spotless dishes without the hassle.",
    href: "/dishwasher-repair/kanata",
  },
  {
    name: "Oven repair Beaverbrook",
    description: "Even cooking from edge to edge.",
    href: "/oven-repair/kanata",
  },
  {
    name: "Cooktop repair Beaverbrook",
    description: "Responsive, even heat every time.",
    href: "/cooktop-repair/kanata",
  },
  {
    name: "Microwave repair Beaverbrook",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/kanata",
  },
  {
    name: "Fridge repair Beaverbrook",
    description: "Keep groceries chilled and safe.",
    href: "/fridge-repair/kanata",
  },
  {
    name: "Freezer repair Beaverbrook",
    description: "Consistent freezing power.",
    href: "/freezer-repair/kanata",
  },
];

const attractions = [
  "Kanata Beaverbrook Community Centre.",
  "Beautiful green spaces and walking paths.",
  "Local schools and playgrounds nearby.",
];

const faqs = [
  {
    question: "How quickly can you reach Beaverbrook homes?",
    answer: "We're based in Kanata, so response times are fast — especially with morning calls.",
  },
  {
    question: "Do you also install appliances or only repair them?",
    answer: "We do both — installation and repair services are available across Kanata.",
  },
  {
    question: "What happens if the same issue comes back?",
    answer: "It's covered under our 90-day repair warranty — we'll make it right.",
  },
  {
    question: "Do you provide fridge repair in Ottawa outside Beaverbrook?",
    answer: "Yes, our coverage extends across all Ottawa neighbourhoods. Book fridge repair in Ottawa whenever you need us.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Morgan's Grant Appliance Repair",
    href: "/service-areas/kanata/morgans-grant",
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
  "Kanata West",
  "Emerald Meadows",
  "Marchwood",
];

export default function BeaverbrookServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Beaverbrook Appliance Repair – Reliable Local Service
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Need appliance repair in Beaverbrook, Kanata? We fix all major electric
              appliances with professional care and a 90-day guarantee. See more options
              on our{" "}
              <Link
                href="/service-areas/kanata"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Kanata appliance repair
              </Link>{" "}
              page, covering Morgan's Grant and Glen Cairn.
            </p>
            <p className="text-lg text-gray-100">
              Peace of mind with our 90-day repair guarantee. Friendly, fully insured experts at your door. Kanata-based techs familiar with local homes. Call early for same-day service slots.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Beaverbrook"
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
        header="Brands We Service in Beaverbrook"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Beaverbrook While We Fix"
        description="While we fix your appliance, check out Beaverbrook:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See more events here: Ottawa Tourism Events"
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
      <FAQSection applianceName="Beaverbrook" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Ready to fix it fast? Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
