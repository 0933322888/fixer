import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Carleton Place West Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Appliance repair in Carleton Place West. Washers, dryers, ovens, fridges & more. Same-day appointments, insured team, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Carleton Place West",
    description: "Keep laundry day running smoothly.",
    href: "/washer-repair/carleton-place",
  },
  {
    name: "Dryer repair Carleton Place West",
    description: "Efficient drying without long waits.",
    href: "/dryer-repair/carleton-place",
  },
  {
    name: "Dishwasher repair Carleton Place West",
    description: "Spotless dishes without rewashing.",
    href: "/dishwasher-repair/carleton-place",
  },
  {
    name: "Oven repair Carleton Place West",
    description: "Even heat for perfect meals.",
    href: "/oven-repair/carleton-place",
  },
  {
    name: "Cooktop repair Carleton Place West",
    description: "Responsive temperature control every time.",
    href: "/cooktop-repair/carleton-place",
  },
  {
    name: "Microwave repair Carleton Place West",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/carleton-place",
  },
  {
    name: "Fridge repair Carleton Place West",
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair/carleton-place",
  },
  {
    name: "Freezer repair Carleton Place West",
    description: "Dependable cold storage.",
    href: "/freezer-repair/carleton-place",
  },
];

const attractions = [
  "Riverside Park with playgrounds and trails.",
  "Carleton Place Canoe Club area.",
  "Shops and cafés downtown.",
];

const faqs = [
  {
    question: "Do you offer appliance repair evenings in Carleton Place West?",
    answer: "Yes, evening service is sometimes possible — call to find a time that works for you.",
  },
  {
    question: "Do you repair dishwashers and fridges?",
    answer: "Yes, we service all major kitchen appliances.",
  },
  {
    question: "Do you offer installation as well?",
    answer: "Absolutely. Schedule appliance installation in Ottawa for new units.",
  },
  {
    question: "Do you also cover washer repair in Ottawa?",
    answer: "Yes, our team travels across Ottawa. Book washer repair in Ottawa any time you need it.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Carleton Place East Appliance Repair",
    href: "/service-areas/carleton-place/east",
  },
  {
    name: "Riverside Park Appliance Repair",
    href: "/service-areas/carleton-place/riverside-park",
  },
];

const additionalAreas = [
  "High Street",
  "Findlay Park",
  "Caldwell Street",
  "Mississippi Quays",
  "Morphy Street",
  "Lake Avenue",
  "McNeely Landing",
  "Stonewater Bay",
];

export default function CarletonPlaceWestServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Carleton Place West Appliance Repair – Trusted Local Service
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance repair in Carleton Place West with insured technicians. We fix all
              major appliances quickly, backed by a 90-day warranty. See our{" "}
              <Link
                href="/service-areas/carleton-place"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Carleton Place appliance repair
              </Link>{" "}
              page, also serving East and Riverside Park.
            </p>
            <p className="text-lg text-gray-100">
              Reliable 90-day repair coverage. Insured, approachable pros. Local Carleton Place technicians. Same-day scheduling when available.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Carleton Place West"
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
        header="Brands We Service in Carleton Place West"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Carleton Place West While We Fix"
        description="While we repair your appliance, explore Carleton Place West:"
        
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
            title="Other Carleton Place Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Carleton Place? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Carleton Place West" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Don't wait — Contact Us Today for Carleton Place West Appliance Repair"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
