import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Stonebridge Appliance Repair – Trusted Technicians | Fixer",
  description:
    "Appliance repair in Stonebridge. Washers, dryers, ovens, fridges & more. Local insured team with 90-day repair warranty.",
};

const services = [
  {
    name: "Washer repair Stonebridge",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair/barrhaven",
  },
  {
    name: "Dryer repair Stonebridge",
    description: "Efficient drying without delays.",
    href: "/dryer-repair/barrhaven",
  },
  {
    name: "Dishwasher repair Stonebridge",
    description: "Spotless dishes every cycle.",
    href: "/dishwasher-repair/barrhaven",
  },
  {
    name: "Oven repair Stonebridge",
    description: "Even heat for perfect meals.",
    href: "/oven-repair/barrhaven",
  },
  {
    name: "Cooktop repair Stonebridge",
    description: "Responsive burners with steady control.",
    href: "/cooktop-repair/barrhaven",
  },
  {
    name: "Microwave repair Stonebridge",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/barrhaven",
  },
  {
    name: "Fridge repair Stonebridge",
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair/barrhaven",
  },
  {
    name: "Freezer repair Stonebridge",
    description: "Dependable cold storage.",
    href: "/freezer-repair/barrhaven",
  },
];

const attractions = [
  "Stonebridge Golf Club.",
  "Kilbirnie Park with sports fields and trails.",
  "Shopping plazas along Greenbank Road.",
];

const faqs = [
  {
    question: "Do you handle installations in Stonebridge?",
    answer: "Yes, we install washers, dishwashers, fridges, and more. Book appliance installation in Ottawa when you need it.",
  },
  {
    question: "Do you fix dryers that won't spin?",
    answer: "Yes, that's a common repair we handle regularly.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes, every repair has 90-day coverage.",
  },
  {
    question: "Do you also cover fridge repair in Ottawa?",
    answer: "Absolutely — Ottawa is within our service area. Book fridge repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Chapman Mills Appliance Repair",
    href: "/service-areas/barrhaven/chapman-mills",
  },
  {
    name: "Longfields Appliance Repair",
    href: "/service-areas/barrhaven/longfields",
  },
];

const additionalAreas = [
  "Half Moon Bay",
  "Strandherd Meadows",
  "Old Barrhaven",
  "Davidson Heights",
  "Jockvale",
  "Cedarhill Estates",
  "Hearts Desire",
  "Havenlea",
];

export default function StonebridgeServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Stonebridge Appliance Repair – Reliable Local Experts
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance repair in Stonebridge made simple. Insured local team, 90-day
              guarantee. Visit our{" "}
              <Link
                href="/service-areas/barrhaven"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Barrhaven appliance repair
              </Link>{" "}
              page, covering Chapman Mills and Longfields.
            </p>
            <p className="text-lg text-gray-100">
              90-day warranty included with every repair. Courteous, insured experts. Barrhaven techs near you. Same-day appointments when available.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Stonebridge"
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
        header="Brands We Service in Stonebridge"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Stonebridge While We Fix"
        description="While we repair your appliance, enjoy Stonebridge:"
        link="https://ottawatourism.ca/en/see-and-do/events"
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
            title="Other Barrhaven Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Barrhaven? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Stonebridge" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book your Stonebridge repair today — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
