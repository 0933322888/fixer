import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Braeside Appliance Repair – Call 613-413-6969 | Fixer",
  description:
    "Appliance repair in Braeside. Washers, dryers, fridges, ovens & more. Reliable service, insured technicians, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Braeside",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair/arnprior",
  },
  {
    name: "Dryer repair Braeside",
    description: "Efficient drying without the wait.",
    href: "/dryer-repair/arnprior",
  },
  {
    name: "Dishwasher repair Braeside",
    description: "Spotless dishes every cycle.",
    href: "/dishwasher-repair/arnprior",
  },
  {
    name: "Oven repair Braeside",
    description: "Consistent heat for every meal.",
    href: "/oven-repair/arnprior",
  },
  {
    name: "Cooktop repair Braeside",
    description: "Responsive burners with steady control.",
    href: "/cooktop-repair/arnprior",
  },
  {
    name: "Microwave repair Braeside",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/arnprior",
  },
  {
    name: "Fridge repair Braeside",
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair/arnprior",
  },
  {
    name: "Freezer repair Braeside",
    description: "Dependable deep-freeze storage.",
    href: "/freezer-repair/arnprior",
  },
];

const attractions = [
  "Braeside Beach for summer fun.",
  "Gillies Grove and House National Historic Site.",
  "Quiet riverside walks.",
];

const faqs = [
  {
    question: "Do you come to Braeside regularly?",
    answer: "Yes, our techs serve Braeside frequently.",
  },
  {
    question: "Do you fix ovens and cooktops?",
    answer: "Yes, all major appliances are covered.",
  },
  {
    question: "Do you provide installation?",
    answer: "Absolutely. Learn more on our appliance installation page.",
  },
  {
    question: "Can I book fridge repair in Ottawa as well?",
    answer: "Yes, we cover Ottawa too. Book fridge repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Downtown Arnprior Appliance Repair",
    href: "/service-areas/arnprior/downtown",
  },
  {
    name: "McNab Appliance Repair",
    href: "/service-areas/arnprior/mcnab",
  },
];

const additionalAreas = [
  "Sandy Beach",
  "Gillies Grove",
  "Marshall's Bay",
  "Arnprior Heights",
  "Ottawa River South Shore",
  "Division Street",
  "John Street",
  "Madawaska Boulevard",
];

export default function BraesideServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Braeside Appliance Repair – Trusted Local Team
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Need appliance repair in Braeside? Our local team delivers professional service
              with a 90-day guarantee. Explore our{" "}
              <Link
                href="/service-areas/arnprior"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Arnprior appliance repair
              </Link>{" "}
              page, covering Downtown and McNab.
            </p>
            <p className="text-lg text-gray-100">
              Every repair backed with 90-day coverage. Insured, approachable experts. Arnprior techs close to your area. Same-day slots often available.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Braeside"
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
        header="Brands We Service in Braeside"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Braeside While We Fix"
        description="While your appliance is being repaired, discover Braeside:"
        
        linkText="See current events: Ottawa Tourism Events"
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
            title="Other Arnprior Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Arnprior? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Braeside" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Trusted local service in Braeside — Contact Us Today"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
