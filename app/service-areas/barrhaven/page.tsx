import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";
import ServiceAreaHero from "@/components/ServiceAreaHero";

export const metadata: Metadata = {
  title: "Barrhaven Appliance Repair – Quality Service, Honest Prices",
  description:
    "Fixer Appliance Repair serves Barrhaven with quick, dependable appliance fixes. No hidden costs, friendly technicians, and a 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Barrhaven",
    description: "End laundry day delays.",
    href: "/washer-repair/barrhaven",
  },
  {
    name: "Dryer repair Barrhaven",
    description: "Quiet, efficient performance.",
    href: "/dryer-repair/barrhaven",
  },
  {
    name: "Dishwasher repair Barrhaven",
    description: "Say goodbye to cloudy glassware.",
    href: "/dishwasher-repair/barrhaven",
  },
  {
    name: "Fridge repair Barrhaven",
    description: "Preserve freshness and flavour.",
    href: "/fridge-repair/barrhaven",
  },
  {
    name: "Freezer repair Barrhaven",
    description: "Reliable cold for all your goods.",
    href: "/freezer-repair/barrhaven",
  },
  {
    name: "Oven repair Barrhaven",
    description: "Perfect baking every time.",
    href: "/oven-repair/barrhaven",
  },
  {
    name: "Cooktop repair Barrhaven",
    description: "Precise, even cooking.",
    href: "/cooktop-repair/barrhaven",
  },
  {
    name: "Microwave repair Barrhaven",
    description: "Quick heating without sparks.",
    href: "/microwave-repair/barrhaven",
  },
];

const attractions = [
  "Chapman Mills Conservation Area – scenic walking trails along the river.",
  "Marketplace Shopping Centre – shops, restaurants, and coffee spots.",
  "Walter Baker Sports Centre – pools, gyms, and programs for the whole family.",
];

const faqs = [
  {
    question: "Is same day service realistic in Barrhaven?",
    answer:
      "In many neighbourhoods (Marketplace, Chapman Mills, Half Moon Bay), yes — call to check.",
  },
  {
    question: "Do you repair both gas and electric ranges?",
    answer:
      "We service electric ranges/cooktops. For gas lines, a licensed gas fitter is required for disconnection.",
  },
  {
    question: "Which appliances do you handle?",
    answer:
      "Washers, dryers, dishwashers, fridges/freezers, ovens, cooktops, and microwaves.",
  },
  {
    question: "Which brands are covered?",
    answer:
      "LG, Samsung, Whirlpool, GE, Frigidaire, Maytag, Bosch, Kenmore and others.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes — a 90 day labour warranty accompanies our work.",
  },
];

const neighbourhoods = [
  {
    name: "Chapman Mills Appliance Repair",
    href: "/service-areas/barrhaven/chapman-mills",
  },
  {
    name: "Stonebridge Appliance Repair",
    href: "/service-areas/barrhaven/stonebridge",
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
  "Cedarhill Estates",
  "Hearts Desire",
  "Jockvale",
  "Havenlea",
];

export default function BarrhavenServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero
        title="Appliance Repair in Barrhaven"
        icon={<FaMapMarkerAlt className="text-[30px] mb-2 inline-block" />}
        description={
          <>
            Looking for appliance service in Barrhaven that's prompt and professional?
            Our Ottawa-based, family-run team has been helping homes here for years.
            From{" "}
            <Link
              href="/dishwasher-repair/barrhaven"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              dishwasher repair in Barrhaven
            </Link>{" "}
            to{" "}
            <Link
              href="/dryer-repair/barrhaven"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              dryer repair in Barrhaven
            </Link>
            , we'll get your appliances back in shape.
          </>
        }
        additionalContent={
          <p>
            Expect clear pricing, same-day availability in many areas, and repairs done right the first time.
          </p>
        }
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Our Appliance Services in Barrhaven"
              description="We work on all major home appliances, including:"
              services={services}
              installationNote={{
                prefix: "👉 We also provide",
                label: "appliance installation across Ottawa",
                href: "/appliance-installation/locations/ottawa",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Barrhaven"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
        />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Barrhaven While We Work"
        description="While we repair your appliance, you can enjoy some local attractions:"
        link="https://barrhavenbia.ca/events/"
        linkText="Looking for more local happenings? Check the Barrhaven events calendar"
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We proudly serve Half Moon Bay, Chapman Mills, and Marketplace — and we
            also cover nearby{" "}
            <Link
              href="/service-areas/nepean"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Nepean appliance repair
            </Link>
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Neighbourhoods We Serve in Barrhaven"
            description="Looking for appliance service in a specific Barrhaven neighbourhood? Explore these dedicated pages:"
            neighbourhoods={neighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Barrhaven" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book Your Barrhaven Appliance Repair Today"
        description="Local. Reliable. Guaranteed."
      />
    </>
  );
}


