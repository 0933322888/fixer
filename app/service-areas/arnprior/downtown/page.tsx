import { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Downtown Arnprior Appliance Repair – Professional Service | Fixer",
  description:
    "Appliance repair in Downtown Arnprior. Washers, dryers, fridges, ovens & more. Insured local techs, same-day service, 90-day warranty.",
};

const services = [
  {
    name: "Washer repair Downtown Arnprior",
    description: "Keep laundry cycles running smoothly.",
    href: "/washer-repair/arnprior",
  },
  {
    name: "Dryer repair Downtown Arnprior",
    description: "Efficient drying without re-running loads.",
    href: "/dryer-repair/arnprior",
  },
  {
    name: "Dishwasher repair Downtown Arnprior",
    description: "Spotless dishes without rewashing.",
    href: "/dishwasher-repair/arnprior",
  },
  {
    name: "Oven repair Downtown Arnprior",
    description: "Even temperatures for every meal.",
    href: "/oven-repair/arnprior",
  },
  {
    name: "Cooktop repair Downtown Arnprior",
    description: "Responsive burners with steady heat.",
    href: "/cooktop-repair/arnprior",
  },
  {
    name: "Microwave repair Downtown Arnprior",
    description: "Safe, reliable reheating.",
    href: "/microwave-repair/arnprior",
  },
  {
    name: "Fridge repair Downtown Arnprior",
    description: "Keep groceries fresh and cool.",
    href: "/fridge-repair/arnprior",
  },
  {
    name: "Freezer repair Downtown Arnprior",
    description: "Dependable cold storage.",
    href: "/freezer-repair/arnprior",
  },
];

const attractions = [
  "Robert Simpson Park on the Ottawa River.",
  "Arnprior & District Museum.",
  "Local cafés and shops on John Street.",
];

const faqs = [
  {
    question: "Do you provide same-day repair downtown?",
    answer: "Yes, often available when you call early.",
  },
  {
    question: "Do you repair washers and dryers?",
    answer: "Yes, laundry appliances are a big part of our work.",
  },
  {
    question: "Do you guarantee the repair?",
    answer: "Yes, we provide a 90-day warranty.",
  },
  {
    question: "Do you also cover washer repair in Ottawa?",
    answer: "Absolutely — Ottawa is within our service area. Book washer repair in Ottawa any time.",
  },
];

const otherNeighbourhoods = [
  {
    name: "Braeside Appliance Repair",
    href: "/service-areas/arnprior/braeside",
  },
  {
    name: "McNab Appliance Repair",
    href: "/service-areas/arnprior/mcnab",
  },
];

const additionalAreas = [
  "Sandy Beach",
  "Gillies Grove",
  "Madawaska Boulevard",
  "Arnprior Heights",
  "Ottawa River South Shore",
  "Division Street",
  "Marshall's Bay",
  "John Street",
];

export default function DowntownArnpriorServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Downtown Arnprior Appliance Repair You Can Count On
            </h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance repair in Downtown Arnprior, done by insured technicians. Fast
              service, 90-day warranty. See our{" "}
              <Link
                href="/service-areas/arnprior"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                Arnprior appliance repair
              </Link>{" "}
              page, also serving Braeside and McNab.
            </p>
            <p className="text-lg text-gray-100">
              90-day guarantee on every repair. Courteous, insured team. Local Arnprior technicians. Same-day bookings possible.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Appliances We Repair in Downtown Arnprior"
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
        header="Brands We Service in Downtown Arnprior"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Downtown Arnprior While We Fix"
        description="While we repair your appliance, explore Downtown Arnprior:"
        
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
            title="Other Arnprior Neighbourhoods We Serve"
            description="Looking for appliance repair in other parts of Arnprior? Explore these dedicated service pages:"
            neighbourhoods={otherNeighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection applianceName="Downtown Arnprior" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Call Us Today for Quick Downtown Arnprior Appliance Repair"
        description="Fast, friendly help from your local team."
      />
    </>
  );
}
