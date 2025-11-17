import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Avalon Appliance Repair – Reliable Technicians | Fixer",
  description:
    "Trusted appliance repair in Avalon. We fix washers, dryers, ovens, fridges & more. Local Ottawa team, insured repairs, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Avalon",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair/orleans",
  },
  {
    name: "Dryer repair Avalon",
    description: "Faster drying with quieter performance.",
    href: "/dryer-repair/orleans",
  },
  {
    name: "Dishwasher repair Avalon",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair/orleans",
  },
  {
    name: "Oven repair Avalon",
    description: "Even heat for perfect meals.",
    href: "/oven-repair/orleans",
  },
  {
    name: "Cooktop repair Avalon",
    description: "Responsive burners every time.",
    href: "/cooktop-repair/orleans",
  },
  {
    name: "Microwave repair Avalon",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/orleans",
  },
  {
    name: "Fridge repair Avalon",
    description: "Keep groceries cold and fresh.",
    href: "/fridge-repair/orleans",
  },
  {
    name: "Freezer repair Avalon",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/orleans",
  },
];

const attractions = [
  "Millennium Sports Park with fields and walking trails.",
  "Aquaview Park and Community Centre.",
  "Shopping and restaurants along Tenth Line Road.",
];

const faqs = [
  {
    question: "Do you repair built-in ovens in Avalon?",
    answer: "Yes, we work on both built-in and freestanding models across all major brands.",
  },
  {
    question: "Can you install dishwashers and fridges?",
    answer: "Absolutely. Schedule appliance installation in Ottawa and we'll take care of the hookup.",
  },
  {
    question: "Do you provide insured technicians?",
    answer: "Yes, all Fixer technicians are fully insured for your peace of mind.",
  },
  {
    question: "Do you also cover dryer repair in Ottawa?",
    answer: "Definitely — we service the entire Ottawa region. Book dryer repair in Ottawa any time you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Fallingbrook Appliance Repair",
    href: "/service-areas/orleans/fallingbrook",
  },
  {
    name: "Queenswood Heights Appliance Repair",
    href: "/service-areas/orleans/queenswood-heights",
  },
];

const additionalAreas = [
  "Chapel Hill",
  "Chateauneuf",
  "Orleans Wood",
  "Cardinal Creek",
  "Navan",
  "Convent Glen",
  "Cumberland",
  "Hiawatha Park",
];

export default function AvalonServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Avalon Appliance Repair – Reliable Local Experts
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Looking for appliance repair in Avalon? Our friendly team provides fast,
              professional service with a 90-day guarantee. Visit our{" "}
              <Link
                href="/service-areas/orleans"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Orleans appliance repair
              </Link>{" "}
              page, also serving Fallingbrook and Queenswood Heights.
            </p>
            <p className="text-lg text-gray-100">
              Peace of mind with our 90-day guarantee. Insured, approachable experts. Local Orleans technicians. Same-day appointments when possible.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Avalon"
              description="We provide expert repair services for:"
              services={services}
              installationNote={{
                label: "appliance installation across Ottawa",
                href: "/appliance-installation/ottawa",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection
        header="Brands We Service in Avalon"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Avalon While We Fix"
        description="While your appliance is being repaired, enjoy Avalon:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See current activities: Ottawa Tourism Events"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We also cover{" "}
            <Link
              href="/dryer-repair"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              dryer repair in Ottawa
            </Link>{" "}
            and surrounding areas.
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Other Orleans Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Orleans? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Avalon" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Call Us Today to Book Your Avalon Appliance Repair"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
