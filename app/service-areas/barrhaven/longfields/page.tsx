import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Longfields Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Fast appliance repair in Longfields. Washers, dryers, fridges, ovens & more. Insured local techs, professional service, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Longfields",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair/barrhaven",
  },
  {
    name: "Dryer repair Longfields",
    description: "Efficient drying without delays.",
    href: "/dryer-repair/barrhaven",
  },
  {
    name: "Dishwasher repair Longfields",
    description: "Spotless dishes every cycle.",
    href: "/dishwasher-repair/barrhaven",
  },
  {
    name: "Oven repair Longfields",
    description: "Even heat for perfect meals.",
    href: "/oven-repair/barrhaven",
  },
  {
    name: "Cooktop repair Longfields",
    description: "Responsive burners with steady control.",
    href: "/cooktop-repair/barrhaven",
  },
  {
    name: "Microwave repair Longfields",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/barrhaven",
  },
  {
    name: "Fridge repair Longfields",
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair/barrhaven",
  },
  {
    name: "Freezer repair Longfields",
    description: "Dependable cold storage.",
    href: "/freezer-repair/barrhaven",
  },
];

const attractions = [
  "Ken Ross Park.",
  "Local schools and sports facilities.",
  "Shops and cafés at Strandherd Drive.",
];

const faqs = [
  {
    question: "Do you work in Longfields regularly?",
    answer: "Yes, our techs are in Barrhaven every week.",
  },
  {
    question: "Do you repair microwaves?",
    answer: "Yes, microwave repairs are available.",
  },
  {
    question: "Are your technicians insured?",
    answer: "Yes, all staff is fully insured.",
  },
  {
    question: "If I need oven repair in Ottawa, can I book that too?",
    answer: "Absolutely — we cover all of Ottawa. Book oven repair in Ottawa whenever you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Chapman Mills Appliance Repair",
    href: "/service-areas/barrhaven/chapman-mills",
  },
  {
    name: "Stonebridge Appliance Repair",
    href: "/service-areas/barrhaven/stonebridge",
  },
];

const additionalAreas = [
  "Strandherd Meadows",
  "Half Moon Bay",
  "Old Barrhaven",
  "Jockvale",
  "Davidson Heights",
  "Cedarhill Estates",
  "Hearts Desire",
  "Havenlea",
];

export default function LongfieldsServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Longfields Appliance Repair – Fast, Friendly Service
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Looking for appliance repair in Longfields? Our insured team delivers
              same-day service when available. See our{" "}
              <Link
                href="/service-areas/barrhaven"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Barrhaven appliance repair
              </Link>{" "}
              hub, also serving Stonebridge and Chapman Mills.
            </p>
            <p className="text-lg text-gray-100">
              Reliable 90-day warranty. Insured, approachable service staff. Local Barrhaven pros. Fast response, same-day options.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Longfields"
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
        header="Brands We Service in Longfields"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Longfields While We Fix"
        description="While your appliance is being repaired, check out Longfields:"
        
        linkText="See events in the area: Ottawa Tourism Events"
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
            title="Other Barrhaven Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Barrhaven? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Longfields" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Need appliance repair in Longfields? Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
