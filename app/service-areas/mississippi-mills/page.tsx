import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";

export const metadata: Metadata = {
  title: "Appliance Service in Mississippi Mills – Dependable Local Technicians",
  description:
    "Serving Mississippi Mills with professional appliance repairs. Transparent pricing, rural service available, and 90-day coverage on all work.",
};

const services = [
  {
    name: "Washer repair Mississippi Mills",
    description: "No leaks, no hassles.",
    href: "/washer-repair/mississippi-mills",
  },
  {
    name: "Dryer repair Mississippi Mills",
    description: "Efficient and quiet operation.",
    href: "/dryer-repair/mississippi-mills",
  },
  {
    name: "Dishwasher repair Mississippi Mills",
    description: "Thorough cleaning every cycle.",
    href: "/dishwasher-repair/mississippi-mills",
  },
  {
    name: "Fridge repair Mississippi Mills",
    description: "Freshness that lasts.",
    href: "/fridge-repair/mississippi-mills",
  },
  {
    name: "Freezer repair Mississippi Mills",
    description: "Reliable preservation of food.",
    href: "/freezer-repair/mississippi-mills",
  },
  {
    name: "Oven repair Mississippi Mills",
    description: "Even heat for baking and roasting.",
    href: "/oven-repair/mississippi-mills",
  },
  {
    name: "Cooktop repair Mississippi Mills",
    description: "Smooth heating, precise control.",
    href: "/cooktop-repair/mississippi-mills",
  },
  {
    name: "Microwave repair Mississippi Mills",
    description: "Quick reheating done right.",
    href: "/microwave-repair/mississippi-mills",
  },
];

const attractions = [
  "Almonte Riverwalk – picturesque riverside strolls.",
  "Mill of Kintail Conservation Area – trails and a charming museum.",
  "Downtown Almonte – local cafés, shops, and heritage sites.",
];

const faqs = [
  {
    question:
      "Do you service Almonte, Pakenham and surrounding rural roads?",
    answer:
      "Yes — we regularly visit homes across Mississippi Mills, including rural properties.",
  },
  {
    question: "Can you come the same or next day?",
    answer: "Frequently, yes. Call early for the best availability.",
  },
  {
    question: "What appliances are most common here?",
    answer:
      "Fridges losing temperature, washers leaking, and ovens with uneven heat — plus the full list of major units.",
  },
  {
    question: "Which brands can you fix?",
    answer:
      "Most major brands and many premium lines such as Bosch, LG, Samsung, Whirlpool, GE, and Maytag.",
  },
  {
    question: "What about guarantees?",
    answer: "Repairs include a 90 day labour warranty.",
  },
];

const neighbourhoods = [
  {
    name: "Almonte Appliance Repair",
    href: "/service-areas/mississippi-mills/almonte",
  },
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
  "Bennie’s Corners",
];

export default function MississippiMillsServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6"><FaMapMarkerAlt className="text-[30px] mb-2 inline-block" /> Appliance Service in Mississippi Mills</h1>
            <p className="text-xl text-gray-100 mb-4">
              Appliance trouble in Mississippi Mills? Fixer Appliance Repair has been
              keeping local kitchens and laundry rooms in shape for years. From{" "}
              <Link
                href="/fridge-repair/mississippi-mills"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                fridge repair in Mississippi Mills
              </Link>{" "}
              to{" "}
              <Link
                href="/oven-repair/mississippi-mills"
                className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
              >
                oven repair in Mississippi Mills
              </Link>
              , we've got you covered with clear pricing, a 90-day warranty, and
              same-day appointments in many areas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Our Services in the Mississippi Mills Area"
              description="We're experienced with:"
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
        header="Brands We Work With"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore the Area While We Work"
        description="While we get your appliance back in shape, enjoy:"
        link="https://www.mississippimills.ca/en/explore-and-play/events.aspx"
        linkText="Want more local happenings? Visit the Mississippi Mills community page"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We proudly serve Almonte, Pakenham, and nearby rural roads — plus surrounding areas like{" "}
            <Link
              href="/service-areas/carleton-place"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Carleton Place appliance repair
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Neighbourhoods We Serve in Mississippi Mills"
            description="Explore detailed service pages for these Mississippi Mills communities:"
            neighbourhoods={neighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      <FAQSection applianceName="Mississippi Mills" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      {/* CTA */}
      <CTASection
        heading="Book Your Local Service Today"
        description="Friendly. Local. Guaranteed."
      />
    </>
  );
}


