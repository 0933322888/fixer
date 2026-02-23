import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";
import ServiceAreaHero from "@/components/ServiceAreaHero";

export const metadata: Metadata = {
  title: "Carleton Place Appliance Repair – Friendly Experts, Lasting Results",
  description:
    "Family-run appliance repair in Carleton Place. Same-day visits in many areas, fair pricing, and a 90-day service guarantee.",
};

const services = [
  {
    name: "Washer repair Carleton Place",
    description: "Smooth operation from start to finish.",
    href: "/washer-repair/carleton-place",
  },
  {
    name: "Dryer repair Carleton Place",
    description: "Faster cycles, better results.",
    href: "/dryer-repair/carleton-place",
  },
  {
    name: "Dishwasher repair Carleton Place",
    description: "Cleaner dishes, no streaks.",
    href: "/dishwasher-repair/carleton-place",
  },
  {
    name: "Fridge repair Carleton Place",
    description: "Keep produce crisp and dairy cool.",
    href: "/fridge-repair/carleton-place",
  },
  {
    name: "Freezer repair Carleton Place",
    description: "Consistent freezing power.",
    href: "/freezer-repair/carleton-place",
  },
  {
    name: "Oven repair Carleton Place",
    description: "Uniform heat for every dish.",
    href: "/oven-repair/carleton-place",
  },
  {
    name: "Cooktop repair Carleton Place",
    description: "Accurate temperature control.",
    href: "/cooktop-repair/carleton-place",
  },
  {
    name: "Microwave repair Carleton Place",
    description: "Safe, speedy reheating.",
    href: "/microwave-repair/carleton-place",
  },
];

const attractions = [
  "Riverside Park – a peaceful walk along the Mississippi River.",
  "Downtown Carleton Place – unique shops, restaurants, and local charm.",
  "Carleton Place and Beckwith Heritage Museum – discover the area’s history.",
];

const faqs = [
  {
    question: "Can I get a same day appointment in Carleton Place?",
    answer:
      "Often yes, especially if you contact us earlier in the day.",
  },
  {
    question: "Do you visit nearby communities like Beckwith or Franktown?",
    answer: "Yes — we cover those areas and more.",
  },
  {
    question: "Which appliances do you service?",
    answer:
      "Washer/dryer, dishwasher, fridge/freezer, oven/cooktop, and microwave repairs.",
  },
  {
    question: "What brands can you work on?",
    answer:
      "Most major manufacturers and many premium lines.",
  },
  {
    question: "What if my unit is older?",
    answer:
      "We’ll assess parts availability and advise whether repair or replacement is the smarter choice.",
  },
];

const neighbourhoods = [
  {
    name: "Carleton Place West Appliance Repair",
    href: "/service-areas/carleton-place/west",
  },
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

export default function CarletonPlaceServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero
        title="Appliance Repair Services in Carleton Place"
        icon={<FaMapMarkerAlt className="text-[30px] mb-2 inline-block" />}
        description={
          <>
            For fast and dependable appliance repair in Carleton Place, trust the
            team at Fixer. From{" "}
            <Link
              href="/washer-repair/carleton-place"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              washer repair in Carleton Place
            </Link>{" "}
            to{" "}
            <Link
              href="/oven-repair/carleton-place"
              className="font-semibold text-white underline decoration-2 underline-offset-4 hover:text-gray-200"
            >
              oven repair in Carleton Place
            </Link>
            , we've been helping households in this vibrant community for years. As a
            local family business, we offer honest pricing, same-day service in many
            neighbourhoods, and a 90-day labour guarantee you can count on.
          </>
        }
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Our Appliance Services in Carleton Place"
              description="Our technicians handle:"
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
        header="Brands We Service"
        premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before."
      />

      <ThingsToDoSection
        attractions={attractions}
        heading="Explore Carleton Place While We Repair"
        description="While we handle your appliance service, you can enjoy:"
        link="https://carletonplace.ca/events"
        linkText="Check Carleton Place events"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            We proudly serve Carleton Place and nearby communities like Beckwith and Franktown, as well as surrounding towns such as{" "}
            <Link
              href="/service-areas/mississippi-mills"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Mississippi Mills appliance repair
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Neighbourhoods We Serve in Carleton Place"
            description="Looking for appliance service in a specific part of Carleton Place? Explore these dedicated pages:"
            neighbourhoods={neighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      <FAQSection applianceName="Carleton Place" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book Your Carleton Place Appliance Service Today"
        description="Local. Reliable. Guaranteed."
      />
    </>
  );
}


