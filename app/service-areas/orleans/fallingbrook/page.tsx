import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Fallingbrook Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Local appliance repair in Fallingbrook. Washers, dryers, fridges, ovens, dishwashers & more. Fast service with insured Ottawa techs.",
};

const services = [
  {
    name: "Washer repair Fallingbrook",
    description: "Smooth cycles without unexpected stops.",
    href: "/washer-repair/orleans",
  },
  {
    name: "Dryer repair Fallingbrook",
    description: "Faster drying, less waiting.",
    href: "/dryer-repair/orleans",
  },
  {
    name: "Dishwasher repair Fallingbrook",
    description: "Spotless dishes every run.",
    href: "/dishwasher-repair/orleans",
  },
  {
    name: "Oven repair Fallingbrook",
    description: "Even heat for consistent results.",
    href: "/oven-repair/orleans",
  },
  {
    name: "Cooktop repair Fallingbrook",
    description: "Responsive burners with steady heat.",
    href: "/cooktop-repair/orleans",
  },
  {
    name: "Microwave repair Fallingbrook",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/orleans",
  },
  {
    name: "Fridge repair Fallingbrook",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair/orleans",
  },
  {
    name: "Freezer repair Fallingbrook",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/orleans",
  },
];

const attractions = [
  "Fallingbrook Park — trails and playgrounds for families.",
  "École secondaire publique Louis-Riel sports dome nearby.",
  "Local cafés and shops along Innes Road.",
];

const faqs = [
  {
    question: "Do you handle same-day repairs in Fallingbrook?",
    answer: "Yes, often available when you call early in the day so we can secure a slot.",
  },
  {
    question: "What brands do you repair most often?",
    answer: "LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, and many more — we cover most major brands.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes, every repair comes with a 90-day warranty on labour and installed parts.",
  },
  {
    question: "Can I request washer repair in Ottawa even if I'm outside Fallingbrook?",
    answer: "Absolutely — our coverage extends across the Ottawa region. Book washer repair in Ottawa whenever you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Avalon Appliance Repair",
    href: "/service-areas/orleans/avalon",
  },
  {
    name: "Queenswood Heights Appliance Repair",
    href: "/service-areas/orleans/queenswood-heights",
  },
];

const additionalAreas = [
  "Chapel Hill",
  "Convent Glen",
  "Orleans Wood",
  "Cardinal Creek",
  "Navan",
  "Cumberland",
  "Chateauneuf",
  "Hiawatha Park",
];

export default function FallingbrookServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Fallingbrook Appliance Repair – Done Right the First Time
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Trusted appliance repair in Fallingbrook, Orleans. We fix washers, dryers,
              ovens, fridges & more. Backed by a 90-day warranty. See our{" "}
              <Link
                href="/service-areas/orleans"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Orleans appliance repair
              </Link>{" "}
              page, also covering Avalon and Queenswood Heights.
            </p>
            <p className="text-lg text-gray-100">
              90-day warranty for every repair. Friendly, insured professionals. Orleans-based techs ready to assist. Same-day service available in many cases.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Fallingbrook"
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
        header="Brands We Service in Fallingbrook"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Fallingbrook While We Fix"
        description="While we repair your appliance, explore Fallingbrook:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See what's happening this week: Ottawa Tourism Events"
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
            title="Other Orleans Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Orleans? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Fallingbrook" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Call Us Today for Trusted Fallingbrook Appliance Repair"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
