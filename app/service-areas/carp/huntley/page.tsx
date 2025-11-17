import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Huntley Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Reliable appliance repair in Huntley. Washers, dryers, ovens, fridges & more. Local insured team with same-day service available.",
};

const services = [
  {
    name: "Washer repair Huntley",
    description: "Keep wash cycles running smoothly.",
    href: "/washer-repair/carp",
  },
  {
    name: "Dryer repair Huntley",
    description: "Restore fast drying without noise.",
    href: "/dryer-repair/carp",
  },
  {
    name: "Dishwasher repair Huntley",
    description: "Dishes that sparkle after every load.",
    href: "/dishwasher-repair/carp",
  },
  {
    name: "Oven repair Huntley",
    description: "Even temperatures for baking and roasting.",
    href: "/oven-repair/carp",
  },
  {
    name: "Cooktop repair Huntley",
    description: "Consistent heat from every element.",
    href: "/cooktop-repair/carp",
  },
  {
    name: "Microwave repair Huntley",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/carp",
  },
  {
    name: "Fridge repair Huntley",
    description: "Keep food fresh and ready to serve.",
    href: "/fridge-repair/carp",
  },
  {
    name: "Freezer repair Huntley",
    description: "Dependable deep-freeze performance.",
    href: "/freezer-repair/carp",
  },
];

const attractions = [
  "Peaceful farmland drives and scenic rural views.",
  "Local community halls with seasonal events.",
  "Small cafés and roadside markets.",
];

const faqs = [
  {
    question: "How far in advance should I book a repair in Huntley?",
    answer: "Same-week appointments are usually available — and sometimes even same-day when you call early.",
  },
  {
    question: "Do you carry parts for older appliances?",
    answer: "Yes, our vans stock many common parts. We can source specialty items quickly when needed.",
  },
  {
    question: "Is there a service warranty?",
    answer: "Absolutely — every repair is protected with our 90-day guarantee for peace of mind.",
  },
  {
    question: "Can I request washer repair in Ottawa for relatives outside Huntley?",
    answer: "Yes, we serve Kanata, Ottawa, and surrounding towns. Book washer repair in Ottawa any time they need help.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Village of Carp Appliance Repair",
    href: "/service-areas/carp/village-of-carp",
  },
  {
    name: "Corkery Appliance Repair",
    href: "/service-areas/carp/corkery",
  },
];

const additionalAreas = [
  "Pakenham",
  "Fitzroy Harbour",
  "Galetta",
  "Dunrobin",
  "Kinburn",
  "Crown Point",
  "Constance Bay",
  "Marathon Village",
];

export default function HuntleyServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Huntley Appliance Repair – Trusted Local Experts
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Looking for appliance repair in Huntley? Our insured team offers same-day
              service in many cases, backed by a 90-day warranty. Discover more on our{" "}
              <Link
                href="/service-areas/carp"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Carp appliance repair
              </Link>{" "}
              page, covering Village of Carp and Corkery.
            </p>
            <p className="text-lg text-gray-100">
              90-day guarantee on every repair. Insured, friendly staff who care. Based in Kanata, serving Huntley quickly. Ask about same-day time slots.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Huntley"
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
        header="Brands We Service in Huntley"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Huntley While We Fix"
        description="While your appliance is being fixed, discover Huntley:"
        link="https://ottawatourism.ca/en/see-and-do/events"
        linkText="Check what's on nearby: Ottawa Tourism Events"
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
            title="Other Carp Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Carp? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Huntley" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book Your Huntley Appliance Repair — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
