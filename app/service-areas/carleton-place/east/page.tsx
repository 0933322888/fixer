import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";
import ServiceAreaHero from "@/components/ServiceAreaHero";

export const metadata: Metadata = {
  title: "Carleton Place East Appliance Repair – Trusted Service | Fixer",
  description:
    "Dependable appliance repair in Carleton Place East. Washers, dryers, ovens, fridges & more. Professional team, insured repairs, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Carleton Place East",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair/carleton-place",
  },
  {
    name: "Dryer repair Carleton Place East",
    description: "Faster drying, less hassle.",
    href: "/dryer-repair/carleton-place",
  },
  {
    name: "Dishwasher repair Carleton Place East",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair/carleton-place",
  },
  {
    name: "Oven repair Carleton Place East",
    description: "Even temperatures for perfect meals.",
    href: "/oven-repair/carleton-place",
  },
  {
    name: "Cooktop repair Carleton Place East",
    description: "Responsive burners every time.",
    href: "/cooktop-repair/carleton-place",
  },
  {
    name: "Microwave repair Carleton Place East",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/carleton-place",
  },
  {
    name: "Fridge repair Carleton Place East",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair/carleton-place",
  },
  {
    name: "Freezer repair Carleton Place East",
    description: "Dependable cold storage.",
    href: "/freezer-repair/carleton-place",
  },
];

const attractions = [
  "Carleton Place and Beckwith Heritage Museum.",
  "Mississippi Riverwalk Trail.",
  "Downtown shopping and dining spots.",
];

const faqs = [
  {
    question: "Can I book same-day repair in Carleton Place East?",
    answer: "Yes, in many cases we can accommodate same-day service — call early to check availability.",
  },
  {
    question: "Do you service ovens and cooktops?",
    answer: "Yes, we repair all major cooking appliances.",
  },
  {
    question: "Do you guarantee the service?",
    answer: "Yes, every repair is backed by a 90-day warranty.",
  },
  {
    question: "Can I schedule fridge repair in Ottawa?",
    answer: "Definitely — we cover Ottawa and beyond. Book fridge repair in Ottawa whenever you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Carleton Place West Appliance Repair",
    href: "/service-areas/carleton-place/west",
  },
  {
    name: "Riverside Park Appliance Repair",
    href: "/service-areas/carleton-place/riverside-park",
  },
];

const additionalAreas = [
  "Caldwell Street",
  "High Street",
  "Lake Avenue",
  "Mississippi Quays",
  "Morphy Street",
  "Findlay Park",
  "Stonewater Bay",
  "McNeely Landing",
];

export default function CarletonPlaceEastServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero
        title="Carleton Place East Appliance Repair – Reliable Experts"
        description={
          <>
            Looking for appliance repair in Carleton Place East? Our local team provides
            friendly, insured service. Visit our{" "}
            <Link
              href="/service-areas/carleton-place"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              Carleton Place appliance repair
            </Link>{" "}
            hub, covering West and Riverside Park.
          </>
        }
        additionalContent={
          <p>
            Every repair comes with a 90-day warranty. Friendly, insured specialists. Local experts close to your home. Same-day service available.
          </p>
        }
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Carleton Place East"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation across Ottawa",
                href: "/appliance-installation/locations/ottawa",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Carleton Place East"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Carleton Place East While We Fix"
        description="While your appliance is being fixed, enjoy Carleton Place East:"
        
        linkText="See current activities: Ottawa Tourism Events"
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
            title="Other Carleton Place Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Carleton Place? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Carleton Place East" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Schedule Your Carleton Place East Appliance Repair — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
