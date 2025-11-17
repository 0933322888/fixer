import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Crossing Bridge Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Local appliance repair in Crossing Bridge. We fix washers, dryers, ovens, fridges & more. 90-day warranty, trusted Ottawa technicians.",
};

const services = [
  {
    name: "Washer repair Crossing Bridge",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair/stittsville",
  },
  {
    name: "Dryer repair Crossing Bridge",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair/stittsville",
  },
  {
    name: "Dishwasher repair Crossing Bridge",
    description: "Spotless dishes without the hassle.",
    href: "/dishwasher-repair/stittsville",
  },
  {
    name: "Oven repair Crossing Bridge",
    description: "Even heat for every recipe.",
    href: "/oven-repair/stittsville",
  },
  {
    name: "Cooktop repair Crossing Bridge",
    description: "Reliable temperature control on every burner.",
    href: "/cooktop-repair/stittsville",
  },
  {
    name: "Microwave repair Crossing Bridge",
    description: "Safe, quick reheating.",
    href: "/microwave-repair/stittsville",
  },
  {
    name: "Fridge repair Crossing Bridge",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair/stittsville",
  },
  {
    name: "Freezer repair Crossing Bridge",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/stittsville",
  },
];

const attractions = [
  "Crossing Bridge Park with trails and play areas.",
  "Local shops and cafés along Stittsville Main Street.",
  "Community events at nearby schools and centres.",
];

const faqs = [
  {
    question: "Do you provide evening service in Crossing Bridge?",
    answer: "Yes, evening slots are sometimes available — give us a call to confirm availability.",
  },
  {
    question: "Do you repair both washers and dryers?",
    answer: "Absolutely, we service all major laundry appliances throughout Stittsville and Ottawa.",
  },
  {
    question: "Are your repairs guaranteed?",
    answer: "Yes, every service comes with our 90-day warranty for peace of mind.",
  },
  {
    question: "If I need dishwasher repair in Ottawa, do you cover that too?",
    answer: "Yes, we cover the entire Ottawa region. Book dishwasher repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Jackson Trails Appliance Repair",
    href: "/service-areas/stittsville/jackson-trails",
  },
  {
    name: "Bryanston Gate Appliance Repair",
    href: "/service-areas/stittsville/bryanston-gate",
  },
];

const additionalAreas = [
  "Amberway",
  "Poole Creek",
  "Timbermere",
  "West Ridge",
  "Fairwinds",
  "Edenwylde",
  "Westwind Farms",
  "Fernbank Crossing",
];

export default function CrossingBridgeServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Crossing Bridge Appliance Repair You Can Count On
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Trusted appliance repair in Crossing Bridge. We provide quick, insured
              service for all major appliances with a 90-day warranty. Learn more via our{" "}
              <Link
                href="/service-areas/stittsville"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Stittsville appliance repair
              </Link>{" "}
              page, covering Jackson Trails and Bryanston Gate.
            </p>
            <p className="text-lg text-gray-100">
              90-day warranty on every appliance fix. Insured, friendly technicians you can count on. Local techs serving Stittsville daily. Same-day bookings available in many cases.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Crossing Bridge"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation in Stittsville",
                href: "/appliance-installation/stittsville",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Crossing Bridge"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Crossing Bridge While We Fix"
        description="While we handle your repair, enjoy Crossing Bridge:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See what's happening this week: Ottawa Tourism Events"
      />

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Other Stittsville Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Stittsville? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Crossing Bridge" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Broken washer or fridge?"
        description="Call 613-413-6969 or email service@fixerappliancerepair.ca for fast repair in Crossing Bridge."
      />
    </>
  );
}
