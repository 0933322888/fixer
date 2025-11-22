import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Riverside Park Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Fast appliance repair in Riverside Park. Washers, dryers, fridges, ovens & more. Ottawa technicians, insured service, backed by warranty.",
};

const services = [
  {
    name: "Washer repair Riverside Park",
    description: "Smooth cycles without stalls.",
    href: "/washer-repair/carleton-place",
  },
  {
    name: "Dryer repair Riverside Park",
    description: "Efficient drying with steady heat.",
    href: "/dryer-repair/carleton-place",
  },
  {
    name: "Dishwasher repair Riverside Park",
    description: "Spotless dishes every cycle.",
    href: "/dishwasher-repair/carleton-place",
  },
  {
    name: "Oven repair Riverside Park",
    description: "Even heat for perfect meals.",
    href: "/oven-repair/carleton-place",
  },
  {
    name: "Cooktop repair Riverside Park",
    description: "Responsive burners with consistent control.",
    href: "/cooktop-repair/carleton-place",
  },
  {
    name: "Microwave repair Riverside Park",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/carleton-place",
  },
  {
    name: "Fridge repair Riverside Park",
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair/carleton-place",
  },
  {
    name: "Freezer repair Riverside Park",
    description: "Dependable cold storage.",
    href: "/freezer-repair/carleton-place",
  },
];

const attractions = [
  "Mississippi River views and picnic areas.",
  "Local sports fields and playgrounds.",
  "Walking paths perfect for families.",
];

const faqs = [
  {
    question: "Do you work weekends in Riverside Park?",
    answer: "Sometimes, depending on availability — call early and we'll do our best to fit you in.",
  },
  {
    question: "Do you repair washers that won't drain?",
    answer: "Yes, drainage issues are common and fully repairable.",
  },
  {
    question: "Are your technicians insured?",
    answer: "Yes, all of them are fully insured.",
  },
  {
    question: "Can you also do oven repair in Ottawa?",
    answer: "Absolutely — our coverage includes Ottawa. Book oven repair in Ottawa whenever you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Carleton Place West Appliance Repair",
    href: "/service-areas/carleton-place/west",
  },
  {
    name: "Carleton Place East Appliance Repair",
    href: "/service-areas/carleton-place/east",
  },
];

const additionalAreas = [
  "Caldwell Street",
  "High Street",
  "Findlay Park",
  "Lake Avenue",
  "Stonewater Bay",
  "Morphy Street",
  "Mississippi Quays",
  "McNeely Landing",
];

export default function RiversideParkServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Riverside Park Appliance Repair – Fast, Friendly Service
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance repair in Riverside Park made simple. Same-day service often available.
              Learn more through our{" "}
              <Link
                href="/service-areas/carleton-place"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Carleton Place appliance repair
              </Link>{" "}
              page, also serving East and West.
            </p>
            <p className="text-lg text-gray-100">
              90-day warranty for peace of mind. Professional, insured staff. Carleton Place-based technicians. Same-day availability most days.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Riverside Park"
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
        header="Brands We Service in Riverside Park"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Riverside Park While We Fix"
        description="While we handle your repair, discover Riverside Park:"
        
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
            title="Other Carleton Place Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Carleton Place? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Riverside Park" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Reliable Riverside Park repair is one call away — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
