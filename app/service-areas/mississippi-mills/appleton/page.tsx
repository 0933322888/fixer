import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Appleton Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Local appliance repair in Appleton. Washers, dryers, fridges, ovens & more. Professional Ottawa techs, insured service, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Appleton",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair/mississippi-mills",
  },
  {
    name: "Dryer repair Appleton",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair/mississippi-mills",
  },
  {
    name: "Dishwasher repair Appleton",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair/mississippi-mills",
  },
  {
    name: "Oven repair Appleton",
    description: "Even heat for perfect meals.",
    href: "/oven-repair/mississippi-mills",
  },
  {
    name: "Cooktop repair Appleton",
    description: "Responsive burners across the board.",
    href: "/cooktop-repair/mississippi-mills",
  },
  {
    name: "Microwave repair Appleton",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/mississippi-mills",
  },
  {
    name: "Fridge repair Appleton",
    description: "Keep groceries cold and fresh.",
    href: "/fridge-repair/mississippi-mills",
  },
  {
    name: "Freezer repair Appleton",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/mississippi-mills",
  },
];

const attractions = [
  "Appleton Park along the Mississippi River.",
  "Local historic buildings and quiet rural charm.",
  "Country roads perfect for a scenic drive.",
];

const faqs = [
  {
    question: "Do you serve rural Appleton homes?",
    answer: "Yes, we cover both rural and town addresses throughout Appleton.",
  },
  {
    question: "Do you carry parts for fridges and washers?",
    answer: "We stock many common parts on our trucks and can order specialty items quickly when needed.",
  },
  {
    question: "Do you repair microwaves too?",
    answer: "Yes, microwaves are included in our services.",
  },
  {
    question: "If I need washer repair in Ottawa, do you do that too?",
    answer: "Absolutely — Ottawa-wide service is available. Book washer repair in Ottawa any time you need help.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Almonte Appliance Repair",
    href: "/service-areas/mississippi-mills/almonte",
  },
  {
    name: "Blakeney Appliance Repair",
    href: "/service-areas/mississippi-mills/blakeney",
  },
];

const additionalAreas = [
  "Pakenham",
  "Ramsay",
  "Clayton",
  "Galbraith",
  "Rosetta",
  "Blakeney Rapids",
  "Cedar Hill",
  "Bennie's Corners",
];

export default function AppletonServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Appleton Appliance Repair – Trusted Local Technicians
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance repair in Appleton made easy. We fix all major appliances with
              insured service. Learn more on our{" "}
              <Link
                href="/service-areas/mississippi-mills"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Mississippi Mills appliance repair
              </Link>{" "}
              page, covering Almonte and Blakeney.
            </p>
            <p className="text-lg text-gray-100">
              Repairs guaranteed with a 90-day warranty. Insured, customer-friendly staff. Local techs covering Appleton homes. Ask about same-day visits.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Appleton"
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
        header="Brands We Service in Appleton"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Appleton While We Fix"
        description="While we handle your repair, enjoy Appleton:"
        
        linkText="See current events: Ottawa Tourism Events"
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
            title="Other Mississippi Mills Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Mississippi Mills? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Appleton" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book Your Appleton Repair Service Today — Contact Us"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
