import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Almonte Appliance Repair – Professional Technicians | Fixer",
  description:
    "Appliance repair in Almonte. Washers, dryers, fridges, ovens & more. Friendly insured team, local service, 90-day warranty included.",
};

const services = [
  {
    name: "Washer repair Almonte",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair/mississippi-mills",
  },
  {
    name: "Dryer repair Almonte",
    description: "Restore quick, efficient drying.",
    href: "/dryer-repair/mississippi-mills",
  },
  {
    name: "Dishwasher repair Almonte",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair/mississippi-mills",
  },
  {
    name: "Oven repair Almonte",
    description: "Even heat for consistent results.",
    href: "/oven-repair/mississippi-mills",
  },
  {
    name: "Cooktop repair Almonte",
    description: "Responsive burners every time.",
    href: "/cooktop-repair/mississippi-mills",
  },
  {
    name: "Microwave repair Almonte",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/mississippi-mills",
  },
  {
    name: "Fridge repair Almonte",
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair/mississippi-mills",
  },
  {
    name: "Freezer repair Almonte",
    description: "Dependable deep-freeze performance.",
    href: "/freezer-repair/mississippi-mills",
  },
];

const attractions = [
  "Mississippi Valley Textile Museum — history and culture.",
  "Almonte Riverwalk — scenic views along the falls.",
  "Downtown Almonte shops and cafés.",
];

const faqs = [
  {
    question: "Do you repair appliances in older Almonte homes?",
    answer: "Yes, we handle both older and newer units throughout the community.",
  },
  {
    question: "Do you offer installation service?",
    answer: "Absolutely. Book appliance installation in Ottawa for new appliances.",
  },
  {
    question: "Is there a warranty?",
    answer: "Yes, a 90-day guarantee covers all work.",
  },
  {
    question: "Do you also provide oven repair in Ottawa?",
    answer: "Yes, our service covers Ottawa as well. Schedule oven repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Appleton Appliance Repair",
    href: "/service-areas/mississippi-mills/appleton",
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

export default function AlmonteServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Almonte Appliance Repair You Can Rely On
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Need appliance repair in Almonte? Our local team delivers friendly, insured
              service with a 90-day guarantee. Check our{" "}
              <Link
                href="/service-areas/mississippi-mills"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Mississippi Mills appliance repair
              </Link>{" "}
              page, also serving Appleton and Blakeney.
            </p>
            <p className="text-lg text-gray-100">
              90-day warranty on every service. Friendly, insured team members. Local technicians serving Mississippi Mills. Same-day appointments available.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Almonte"
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
        header="Brands We Service in Almonte"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Almonte While We Fix"
        description="While your appliance is being repaired, explore Almonte:"
        
        linkText="See what's happening this week: Ottawa Tourism Events"
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
            title="Other Mississippi Mills Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Mississippi Mills? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Almonte" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Call Us Today for Almonte Appliance Repair You Can Trust"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
