import { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import BrandsSection from "@/components/BrandsSection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import ServiceAreaNeighborhoodsSection from "@/components/ServiceAreaNeighborhoodsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ServiceAreaHero from "@/components/ServiceAreaHero";
import ServiceAreaServicesSection from "@/components/ServiceAreaServicesSection";

export const metadata: Metadata = {
  title: "Appliance Repair in Carp – Local Service for Homes & Farms | Fixer",
  description:
    "From kitchen to laundry appliances, our Carp technicians deliver timely, reliable repairs. 90-day warranty and friendly local service.",
};

const services = [
  {
    name: "Washer repair Carp",
    description: "Reliable washes, no leaks.",
    href: "/washer-repair/carp",
  },
  {
    name: "Dryer repair Carp",
    description: "Efficient drying without the noise.",
    href: "/dryer-repair/carp",
  },
  {
    name: "Dishwasher repair Carp",
    description: "Sparkling clean dishes every time.",
    href: "/dishwasher-repair/carp",
  },
  {
    name: "Fridge repair Carp",
    description: "Cold, consistent storage.",
    href: "/fridge-repair/carp",
  },
  {
    name: "Freezer repair Carp",
    description: "Steady freezing for long-term use.",
    href: "/freezer-repair/carp",
  },
  {
    name: "Oven repair Carp",
    description: "Balanced heat for perfect cooking.",
    href: "/oven-repair/carp",
  },
  {
    name: "Cooktop repair Carp",
    description: "Even heating across burners.",
    href: "/cooktop-repair/carp",
  },
  {
    name: "Microwave repair Carp",
    description: "Safe, quick meal prep.",
    href: "/microwave-repair/carp",
  },
];

const brands = [
  { name: "Bosch", href: "/brands/bosch" },
  { name: "Frigidaire", href: "/brands/frigidaire" },
  { name: "GE", href: "/brands/ge" },
  { name: "Kenmore", href: "/brands/kenmore" },
  { name: "LG", href: "/brands/lg" },
  { name: "Maytag", href: "/brands/maytag" },
  { name: "Panasonic", href: "/brands/panasonic" },
  { name: "Samsung", href: "/brands/samsung" },
  { name: "Whirlpool", href: "/brands/whirlpool" },
  { name: "KitchenAid", href: "/brands/kitchenaid" },
];

const attractions = [
  "Carp Farmers’ Market – fresh produce and local treats.",
  "Diefenbunker Museum – Canada’s famous Cold War museum.",
  "Carp Hills Trails – scenic hikes and wildlife viewing.",
];

const faqs = [
  {
    question: "Do you service farms and rural properties around Carp?",
    answer:
      "We do — farmhouses and rural homes are part of our regular route.",
  },
  {
    question: "How fast can you come?",
    answer:
      "Same day or next day is often possible; call to confirm for your road.",
  },
  {
    question: "Which appliances do you repair most in Carp?",
    answer:
      "Fridges that won’t cool, washers that won’t drain or spin, and ovens with heating issues — plus the full range of home appliances.",
  },
  {
    question: "What brands are supported?",
    answer:
      "Most major brands including LG, Samsung, Whirlpool, GE, Maytag, Frigidaire, Bosch, Kenmore, Panasonic, and more.",
  },
  {
    question: "Do repairs come with a guarantee?",
    answer: "Yes — 90-day labour coverage on the work we complete.",
  },
];

const neighbourhoods = [
  {
    name: "Corkery Appliance Repair",
    href: "/service-areas/carp/corkery",
  },
  {
    name: "Huntley Appliance Repair",
    href: "/service-areas/carp/huntley",
  },
  {
    name: "Village of Carp Appliance Repair",
    href: "/service-areas/carp/village-of-carp",
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

export default function CarpServiceAreaPage() {
  return (
    <>
      <ServiceAreaHero
        title="Trusted Appliance Repair in Carp"
        icon={<FaMapMarkerAlt className="text-[30px] mb-2 inline-block" />}
        description={
          <>
            When appliances break down in Carp, Fixer Appliance Repair is just a
            call away. Our experienced technicians handle both home and farm
            appliance repairs — from fridges in Carp that won't cool to cooktops
            in Carp that won't heat evenly. We arrive with the tools and parts
            needed for most fixes on the first visit, and we back our work with
            a 90-day warranty.
          </>
        }
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            <ServiceAreaServicesSection
              title="Our Services in Carp"
              description="We provide repair and maintenance for:"
              services={services}
              installationNote={{
                label: "appliance installation across Ottawa",
                href: "/appliance-installation/locations/ottawa",
              }}
            />
          </div>
        </div>
      </section>

      <BrandsSection header=" Brands We Repair" premessage="We repair all major household brands, including:"
        postmessage="Not sure about your brand or model? Give us a call — chances are, we've repaired it before." />

      <TestimonialSection
        quote="Our oven stopped working just before a family gathering. Fixer's
              technician arrived the same day and had it baking perfectly again
              within hours. Professional and friendly!"
        author="James P."
      />

      <ThingsToDoSection attractions={attractions}
        heading="Explore Carp While We Fix"
        description="Make the most of your time while we work:"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-700">
            Live nearby? We also offer{" "}
            <Link
              href="/service-areas/kanata"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              appliance repair in Kanata
            </Link>{" "}
            and{" "}
            <Link
              href="/service-areas/stittsville"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Stittsville
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Neighbourhoods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ServiceAreaNeighborhoodsSection
            title="Neighbourhoods We Serve Near Carp"
            description="Looking for appliance help in a specific part of Carp? Explore these dedicated pages:"
            neighbourhoods={neighbourhoods}
            additionalAreas={additionalAreas}
          />
        </div>
      </section>

      <FAQSection applianceName="Carp" faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />

      <CTASection
        heading="Book Your Appliance Repair Today"
        description="Your local repair experts — here to help when you need us most."
      />
    </>
  );
}


