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
  title: "Blakeney Appliance Repair – Reliable Local Team | Fixer",
  description:
    "Appliance repair in Blakeney. Washers, dryers, fridges, ovens & more. Insured local experts with same-day service and 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Blakeney",
    description: "Smooth cycles without leaks.",
    href: "/washer-repair/mississippi-mills",
  },
  {
    name: "Dryer repair Blakeney",
    description: "Efficient drying with steady heat.",
    href: "/dryer-repair/mississippi-mills",
  },
  {
    name: "Dishwasher repair Blakeney",
    description: "Spotless dishes every run.",
    href: "/dishwasher-repair/mississippi-mills",
  },
  {
    name: "Oven repair Blakeney",
    description: "Even temperatures for perfect meals.",
    href: "/oven-repair/mississippi-mills",
  },
  {
    name: "Cooktop repair Blakeney",
    description: "Responsive burners with dependable heat.",
    href: "/cooktop-repair/mississippi-mills",
  },
  {
    name: "Microwave repair Blakeney",
    description: "Safe, quick reheating.",
    href: "/microwave-repair/mississippi-mills",
  },
  {
    name: "Fridge repair Blakeney",
    description: "Keep groceries cold and safe.",
    href: "/fridge-repair/mississippi-mills",
  },
  {
    name: "Freezer repair Blakeney",
    description: "Reliable deep-freeze storage.",
    href: "/freezer-repair/mississippi-mills",
  },
];

const attractions = [
  "Blakeney Rapids and walking trails.",
  "Small community parks and nature areas.",
  "Peaceful countryside views along the Mississippi River.",
];

const faqs = [
  {
    question: "Can you reach Blakeney for same-day repair?",
    answer: "Sometimes — call early for availability and we'll work to fit you in.",
  },
  {
    question: "Do you fix dryers that won't heat?",
    answer: "Yes, heating issues are one of our specialties.",
  },
  {
    question: "Do you guarantee the work?",
    answer: "Absolutely — every repair includes a 90-day warranty for peace of mind.",
  },
  {
    question: "Can I book fridge repair in Ottawa as well?",
    answer: "Yes, we serve all Ottawa homes. Book fridge repair in Ottawa whenever you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Almonte Appliance Repair",
    href: "/service-areas/mississippi-mills/almonte",
  },
  {
    name: "Appleton Appliance Repair",
    href: "/service-areas/mississippi-mills/appleton",
  },
];

const additionalAreas = [
  "Pakenham",
  "Ramsay",
  "Clayton",
  "Galbraith",
  "Rosetta",
  "Bennie's Corners",
  "Cedar Hill",
  "Blakeney Rapids",
];

export default function BlakeneyServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero
        title="Blakeney Appliance Repair – Fast & Professional"
        description={
          <>
            Looking for appliance repair in Blakeney? Our local team provides reliable,
            insured service with a 90-day warranty. Visit our{" "}
            <Link
              href="/service-areas/mississippi-mills"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              Mississippi Mills appliance repair
            </Link>{" "}
            hub, also serving Appleton and Almonte.
          </>
        }
        additionalContent={
          <p>
            90-day guarantee included. Courteous, insured team. Technicians familiar with rural homes. Same-day repairs often possible.
          </p>
        }
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Blakeney"
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
        header="Brands We Service in Blakeney"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Blakeney While We Fix"
        description="While we fix your appliance, discover Blakeney:"
        
        linkText="See nearby events: Ottawa Tourism Events"
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
            title="Other Mississippi Mills Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Mississippi Mills? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Blakeney" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Fast Appliance Repair in Blakeney — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
