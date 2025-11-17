import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Appliance Repair in Arnprior – Reliable, Local Help | Fixer",
  description:
    "Trusted appliance repairs for Arnprior homes. Same-day service in many areas, clear quotes, and dependable local technicians.",
};

const services = [
  {
    name: "Washer repair Arnprior",
    description: "No more mid-cycle surprises.",
    href: "/washer-repair/arnprior",
  },
  {
    name: "Dryer repair Arnprior",
    description: "Get clothes dry the first time.",
    href: "/dryer-repair/arnprior",
  },
  {
    name: "Dishwasher repair Arnprior",
    description: "Sparkling results every load.",
    href: "/dishwasher-repair/arnprior",
  },
  {
    name: "Fridge repair Arnprior",
    description: "Keep food fresh and safe.",
    href: "/fridge-repair/arnprior",
  },
  {
    name: "Freezer repair Arnprior",
    description: "Steady temperatures for long-term storage.",
    href: "/freezer-repair/arnprior",
  },
  {
    name: "Oven repair Arnprior",
    description: "Even, reliable heat.",
    href: "/oven-repair/arnprior",
  },
  {
    name: "Cooktop repair Arnprior",
    description: "Smooth, consistent cooking.",
    href: "/cooktop-repair/arnprior",
  },
  {
    name: "Microwave repair Arnprior",
    description: "Fast, safe heating.",
    href: "/microwave-repair/arnprior",
  },
];

const attractions = [
  "Gillies Grove and House National Historic Site – a peaceful nature retreat.",
  "Robert Simpson Park – scenic Ottawa River views.",
  "Downtown Arnprior – local shops, cafés, and bakeries.",
];

const faqs = [
  {
    question: "Can you come the same day in Arnprior?",
    answer:
      "Often yes, depending on time and parts — call for current availability.",
  },
  {
    question: "Do you service White Lake, Pakenham and Braeside?",
    answer:
      "Yes — those communities are within our service area.",
  },
  {
    question: "Which appliances do you repair?",
    answer:
      "Washers, dryers, dishwashers, fridges/freezers, ovens, cooktops, and microwaves.",
  },
  {
    question: "What brands can you fix?",
    answer:
      "Most major and premium brands found locally, including LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, and more.",
  },
  {
    question: "Is the work guaranteed?",
    answer: "It is — 90 days of labour coverage on the completed repair.",
  },
];

const neighbourhoods = [
  {
    name: "Downtown Arnprior Appliance Repair",
    href: "/service-areas/arnprior/downtown",
  },
  {
    name: "Braeside Appliance Repair",
    href: "/service-areas/arnprior/braeside",
  },
  {
    name: "McNab Appliance Repair",
    href: "/service-areas/arnprior/mcnab",
  },
];

const additionalAreas = [
  "Sandy Beach",
  "Gillies Grove",
  "Madawaska Boulevard",
  "Arnprior Heights",
  "Ottawa River South Shore",
  "Division Street",
  "Marshall’s Bay",
  "John Street",
];

export default function ArnpriorServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Appliance Service in Arnprior
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Need appliance repair in Arnprior you can rely on? From{" "}
              <Link
                href="/washer-repair/arnprior"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                washer repair in Arnprior
              </Link>{" "}
              to{" "}
              <Link
                href="/fridge-repair/arnprior"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                fridge repair in Arnprior
              </Link>
              , Fixer Appliance Repair has been helping households across the Ottawa
              Valley keep their kitchens and laundry rooms running smoothly. We fix it
              fast — and back every job with a 90-day workmanship warranty. Local,
              friendly, and ready to help the same day in many neighbourhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Our Services in Arnprior & Surrounding Areas"
              description="From kitchen essentials to laundry appliances, we service:"
              services={services}
              installationNote={{
                label: "appliance installation across Ottawa",
                href: "/appliance-installation/ottawa",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection header=" Brands We Handle" premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Things to Do While We Work"
        description="Why wait at home? Explore some of Arnprior's highlights:"
        link="https://www.arnprior.ca/en/play/events-and-festivals.aspx"
        linkText="See upcoming events via the Arnprior community calendar"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We also serve nearby communities, including White Lake, Pakenham, and Braeside — and even neighbouring{" "}
            <Link
              href="/service-areas/carp"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Carp appliance repair
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Neighbourhoods We Serve in Arnprior"
            description="Looking for appliance help in a specific Arnprior community? Explore these dedicated pages:"
            neighbourhoods={neighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      <FAQSection applianceName="Arnprior" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book Your Local Service Today"
        description="Local. Reliable. Guaranteed."
      />
    </>
  );
}


