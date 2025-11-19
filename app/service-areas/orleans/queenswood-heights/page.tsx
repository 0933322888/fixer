import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Queenswood Heights Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Appliance repair in Queenswood Heights. Washers, dryers, fridges, ovens & more. Fast service, insured techs, backed by a 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Queenswood Heights",
    description: "Smooth cycles without leaks or noise.",
    href: "/washer-repair/orleans",
  },
  {
    name: "Dryer repair Queenswood Heights",
    description: "Efficient drying every load.",
    href: "/dryer-repair/orleans",
  },
  {
    name: "Dishwasher repair Queenswood Heights",
    description: "Spotless dishes without rewashes.",
    href: "/dishwasher-repair/orleans",
  },
  {
    name: "Oven repair Queenswood Heights",
    description: "Consistent heat for perfect meals.",
    href: "/oven-repair/orleans",
  },
  {
    name: "Cooktop repair Queenswood Heights",
    description: "Responsive burners with steady heat.",
    href: "/cooktop-repair/orleans",
  },
  {
    name: "Microwave repair Queenswood Heights",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/orleans",
  },
  {
    name: "Fridge repair Queenswood Heights",
    description: "Keep food fresh and ready.",
    href: "/fridge-repair/orleans",
  },
  {
    name: "Freezer repair Queenswood Heights",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/orleans",
  },
];

const attractions = [
  "Queenswood Heights Park and trails.",
  "Bob MacQuarrie Recreation Complex.",
  "Local shops and dining along St. Joseph Boulevard.",
];

const faqs = [
  {
    question: "Do you come out to Queenswood Heights quickly?",
    answer: "Yes, same-day visits are often possible — call early to check current availability.",
  },
  {
    question: "Do you fix leaking washers and dishwashers?",
    answer: "Absolutely — water leaks are one of the most common issues we repair in Orleans.",
  },
  {
    question: "Do you guarantee the work?",
    answer: "Yes, every job is backed by a 90-day warranty covering labour and parts we install.",
  },
  {
    question: "Can I book fridge repair in Ottawa outside Queenswood Heights?",
    answer: "Definitely — we serve the entire Ottawa region. Book fridge repair in Ottawa whenever you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Fallingbrook Appliance Repair",
    href: "/service-areas/orleans/fallingbrook",
  },
  {
    name: "Avalon Appliance Repair",
    href: "/service-areas/orleans/avalon",
  },
];

const additionalAreas = [
  "Chapel Hill",
  "Orleans Wood",
  "Chateauneuf",
  "Cumberland",
  "Cardinal Creek",
  "Navan",
  "Convent Glen",
  "Hiawatha Park",
];

export default function QueenswoodHeightsServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Queenswood Heights Appliance Repair – Fast & Trusted
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance repair in Queenswood Heights with insured local service. Same-day
              appointments often available. Explore our{" "}
              <Link
                href="/service-areas/orleans"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Orleans appliance repair
              </Link>{" "}
              hub, covering Avalon and Fallingbrook.
            </p>
            <p className="text-lg text-gray-100">
              All repairs backed by 90-day coverage. Experienced, insured team. Orleans technicians who know your area. Same-day repairs offered whenever we can.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Queenswood Heights"
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
        header="Brands We Service in Queenswood Heights"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Queenswood Heights While We Fix"
        description="While we handle your repair, discover Queenswood Heights:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="See what's on nearby: Ottawa Tourism Events"
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
            title="Other Orleans Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Orleans? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Queenswood Heights" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Need Appliance Help Fast?"
        subheading="Contact Us Today for Queenswood Heights Repairs"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
