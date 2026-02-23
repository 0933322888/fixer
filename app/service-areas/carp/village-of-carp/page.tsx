import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";
import ServiceAreaHero from "@/components/ServiceAreaHero";

export const metadata: Metadata = {
  title: "Carp Appliance Repair – Professional Service | Fixer",
  description:
    "Professional appliance repair in Carp. We fix washers, dryers, fridges, ovens & dishwashers. Local team, insured service, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Village of Carp",
    description: "Reliable cycles without leaks.",
    href: "/washer-repair/carp",
  },
  {
    name: "Dryer repair Village of Carp",
    description: "Fast drying with less noise.",
    href: "/dryer-repair/carp",
  },
  {
    name: "Dishwasher repair Village of Carp",
    description: "Sparkling results every load.",
    href: "/dishwasher-repair/carp",
  },
  {
    name: "Oven repair Village of Carp",
    description: "Even heat for perfect meals.",
    href: "/oven-repair/carp",
  },
  {
    name: "Cooktop repair Village of Carp",
    description: "Consistent temperatures on every element.",
    href: "/cooktop-repair/carp",
  },
  {
    name: "Microwave repair Village of Carp",
    description: "Safe reheating without surprises.",
    href: "/microwave-repair/carp",
  },
  {
    name: "Fridge repair Village of Carp",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair/carp",
  },
  {
    name: "Freezer repair Village of Carp",
    description: "Dependable cold storage year-round.",
    href: "/freezer-repair/carp",
  },
];

const attractions = [
  "Carp Farmers' Market — one of Ontario's best.",
  "Diefenbunker: Canada's Cold War Museum.",
  "Carp Ridge EcoWellness Centre — nature trails and spa.",
];

const faqs = [
  {
    question: "Do you provide same-day repair in Carp?",
    answer: "Yes, in many cases — especially if you call early in the day so we can secure a time slot.",
  },
  {
    question: "Can you install a new dishwasher or fridge for me?",
    answer: "Absolutely. We handle repairs and installations (connected to existing water lines) via our appliance installation service.",
  },
  {
    question: "Are your technicians insured?",
    answer: "Yes, every Fixer technician who visits your home is fully insured for your peace of mind.",
  },
  {
    question: "If I need oven repair in Ottawa, do you travel outside Carp?",
    answer: "Absolutely — we serve the whole Ottawa region. Book oven repair in Ottawa whenever you need us.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Huntley Appliance Repair",
    href: "/service-areas/carp/huntley",
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
  "Constance Bay",
  "Marathon Village",
  "Crown Point",
];

export default function VillageOfCarpServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero
        title="Village of Carp Appliance Repair You Can Rely On"
        description={
          <>
            Appliance repair in Carp homes and farms, done by local experts. We provide
            reliable service with a 90-day guarantee. See our{" "}
            <Link
              href="/service-areas/carp"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              Carp appliance repair
            </Link>{" "}
            page, also serving Huntley and Corkery.
          </>
        }
        additionalContent={
          <p>
            All work backed by a 90-day warranty. Experienced, insured team members. Local technicians serving Carp and Kanata areas. Same-day availability in many cases.
          </p>
        }
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in the Village of Carp"
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
        header="Brands We Service in the Village of Carp"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Carp While We Fix"
        description="While we repair your appliance, enjoy the Village of Carp:"
        
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
            title="Other Carp Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Carp? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Village of Carp" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Trusted repair is just a call away — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
