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
  title: "Corkery Appliance Repair – Fast Local Experts | Fixer",
  description:
    "Appliance repair in Corkery. Washers, dryers, dishwashers, fridges, ovens & more. Insured techs, 90-day warranty, same-day appointments.",
};

const services = [
  {
    name: "Washer repair Corkery",
    description: "Keep laundry day moving smoothly.",
    href: "/washer-repair/carp",
  },
  {
    name: "Dryer repair Corkery",
    description: "Restore fast, efficient drying.",
    href: "/dryer-repair/carp",
  },
  {
    name: "Dishwasher repair Corkery",
    description: "Sparkling dishes without rewashing.",
    href: "/dishwasher-repair/carp",
  },
  {
    name: "Oven repair Corkery",
    description: "Even heat for every bake.",
    href: "/oven-repair/carp",
  },
  {
    name: "Cooktop repair Corkery",
    description: "Consistent temperatures across burners.",
    href: "/cooktop-repair/carp",
  },
  {
    name: "Microwave repair Corkery",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/carp",
  },
  {
    name: "Fridge repair Corkery",
    description: "Keep groceries fresh and safe.",
    href: "/fridge-repair/carp",
  },
  {
    name: "Freezer repair Corkery",
    description: "Dependable long-term cold storage.",
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
    question: "Do you cover rural homes in Corkery?",
    answer: "Yes, we service both urban and rural households throughout the Corkery area.",
  },
  {
    question: "What brands do you most often repair?",
    answer: "LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, Bosch, Kenmore, and many others.",
  },
  {
    question: "Do you also install appliances?",
    answer: "Yes, we provide installation for washers, dishwashers, fridges, and more via our appliance installation Ottawa service.",
  },
  {
    question: "If I move, can I still book fridge repair in Ottawa?",
    answer: "Of course — our coverage extends across the entire Ottawa area. Book fridge repair in Ottawa whenever you need us.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Village of Carp Appliance Repair",
    href: "/service-areas/carp/village-of-carp",
  },
  {
    name: "Huntley Appliance Repair",
    href: "/service-areas/carp/huntley",
  },
];

const additionalAreas = [
  "Pakenham",
  "Fitzroy Harbour",
  "Galetta",
  "Dunrobin",
  "Kinburn",
  "Constance Bay",
  "Crown Point",
  "Marathon Village",
];

export default function CorkeryServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero
        title="Corkery Appliance Repair – Fast, Reliable Service"
        description={
          <>
            Need appliance repair in Corkery? Our local technicians bring tools and
            parts to get the job done right. Check our{" "}
            <Link
              href="/service-areas/carp"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              Carp appliance repair
            </Link>{" "}
            page, also serving Huntley and Carp village.
          </>
        }
        additionalContent={
          <p>
            90-day repair warranty included. Fully insured and approachable pros. Kanata-area techs familiar with rural homes. Same-day repair visits often possible.
          </p>
        }
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Corkery"
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
        header="Brands We Service in Corkery"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Corkery While We Fix"
        description="While we repair your appliance, discover Corkery:"
        
        linkText="See what's happening this week: Ottawa Tourism Events"
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
            title="Other Carp Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Carp? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Corkery" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Schedule Your Corkery Appliance Repair — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
