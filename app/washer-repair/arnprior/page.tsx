import { Metadata } from "next";
import Link from "next/link";
import { FaTshirt, FaMapMarkerAlt } from "react-icons/fa";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ThingsToDoSection from "@/components/ThingsToDoSection";
import RelatedServicesSection from "@/components/RelatedServicesSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import RepairOrReplaceSection from "@/components/RepairOrReplaceSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServiceHero from "@/components/ServiceHero";

export const metadata: Metadata = {
  title: "Arnprior Washer Service – Local, Friendly Technicians | Fixer",
  description: "Reliable washer repair in Arnprior. Prompt service, clear pricing, and a 90-day warranty. Same-day appointments available in many neighbourhoods.",
};

const commonIssues = [
  {
    title: "Washer won't turn on?",
    description: "In Arnprior households, power surges or older electrical systems sometimes cause this. If the outlet checks out, it may be a latch or switch issue. We'll handle the fix.",
  },
  {
    title: "Not draining properly?",
    description: "Blocked hoses or pumps often stop Arnprior washers from draining. We'll clear the blockage so your laundry finishes without standing water.",
  },
  {
    title: "Strange noises while spinning?",
    description: "Loud thumps and rattles often come from worn suspension rods or unbalanced loads. We'll steady the washer and replace parts if necessary.",
  },
  {
    title: "Washer door won't open?",
    description: "Lock malfunctions or electronic glitches can trap laundry inside. We'll free the door and repair the faulty lock.",
  },
  {
    title: "Water on the floor?",
    description: "Leaks from hoses, seals, or valves are common. We'll pinpoint the cause and stop the leak before it causes water damage.",
  },
  {
    title: "Error codes on screen?",
    description: "Flashing LE, UE, or other codes are frequent across major brands. We'll read the code and fix the issue fast.",
  },
];

const whyChooseUs = [
  "Local Arnprior technicians — fast, reliable, and friendly",
  "Service for all major washer makes and models",
  "Same-day appointments where possible",
  "Workmanship guaranteed for 90 days",
];

const neighborhoods = [
  "Downtown Arnprior",
  "Braeside",
  "McNab",
  "White Lake",
  "Sand Point",
];

const nearbyAreas = [
  { name: "Washer Repair Kanata", slug: "kanata" },
  { name: "Washer Repair Stittsville", slug: "stittsville" },
  { name: "Washer Repair Nepean", slug: "nepean" },
  { name: "Washer Repair Orleans", slug: "orleans" },
  { name: "Washer Repair Vanier", slug: "vanier" },
  { name: "Washer Repair Barrhaven", slug: "barrhaven" },
  { name: "Washer Repair Mississippi Mills", slug: "mississippi-mills" },
  { name: "Washer Repair Carleton Place", slug: "carleton-place" },
];

const arnpriorAttractions = [
  "Robert Simpson Park – waterfront views and sandy beach.",
  "Gillies Grove – beautiful old-growth forest trails.",
  "Downtown Arnprior – shops, cafés, and small-town charm.",
];

const faqs = [
  {
    question: "Do you offer same-day washer repair in Arnprior?",
    answer: "Yes — in many cases we can visit the same day you call.",
  },
  {
    question: "Do you work on stacked washer-dryer units?",
    answer: "Absolutely — we service both individual and stacked units.",
  },
  {
    question: "Do you cover rural areas near Arnprior?",
    answer: "Yes — including White Lake, Pakenham, and Braeside.",
  },
];

const relatedServices = [
  { name: "Dryer Repair Arnprior", href: "/dryer-repair" },
  { name: "Dishwasher Repair Arnprior", href: "/dishwasher-repair" },
  { name: "Fridge Repair Arnprior", href: "/fridge-repair" },
  { name: "Freezer Repair Arnprior", href: "/freezer-repair" },
  { name: "Oven Repair Arnprior", href: "/oven-repair" },
  { name: "Cooktop Repair Arnprior", href: "/cooktop-repair" },
  { name: "Microwave Repair Arnprior", href: "/microwave-repair" },
  { name: "Washer Installation Arnprior", href: "/appliance-installation/washer" },
];

export default function WasherRepairArnpriorPage() {
  return (
    <>
      <ServiceHero
        title="Local Washer Repair Specialists in Arnprior"
        description="From rural properties to downtown homes, Fixer Appliance Repair keeps Arnprior's washers running smoothly. Our technicians handle everything from poor drainage to complete breakdowns, with honest pricing and a 90-day service warranty. In many cases, we can even offer same-day appointments."
        icon={<FaTshirt className="text-[30px] mb-2 inline-block" />}
        additionalContent={
          <p className="text-lg mb-8">
            👉 For all appliance services in your area, check our{" "}
            <Link href="/service-areas/arnprior" className="font-semibold hover:underline">
              Arnprior appliance repair page
            </Link>
            .
          </p>
        }
        useSectionPadding={true}
      />

      {/* Common Washer Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">Common Washer Issues We Fix in Arnprior</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonIssues.map((issue, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{issue.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Washer Installation CTA */}
      <InstallationCTASection
        applianceName="Washer"
        description="Got a new washer? We also provide washer installation in Arnprior with same-day service available in most areas."
        href="/appliance-installation/washer"
      />

      <BenefitsSection applianceName="Washer" benefits={whyChooseUs} />

      <RepairOrReplaceSection description="Not sure if it's time to fix or replace your washing machine? Check out our repair vs. replace guide for washers to make a smart decision based on cost, age, and reliability." />

      {/* Service Area */}
      <ServiceAreaSection
        title="Service Area"
        description="We provide appliance repair services across the entire Arnprior area, including:"
        neighborhoods={neighborhoods}
        nearbyAreas={nearbyAreas}
        applianceType="washer"
        nearbyAreasLabel="We also offer:"
        surroundingLabel="and surrounding rural neighbourhoods"
        footerText={
          <p className="text-lg text-gray-700">
            👉 Need washer help across the city? Learn more about our{" "}
            <Link href="/washer-repair" className="text-primary-600 hover:text-primary-700 font-semibold">
              washer repair in Ottawa
            </Link>
            .
          </p>
        }
      />

      {/* Things to Do */}
      <ThingsToDoSection
        attractions={arnpriorAttractions}
        heading="Explore Arnprior While We Fix Your Washer"
        description="While we handle the repair, discover the area:"
        linkText="Ottawa Tourism Events"
      />

      <FAQSection applianceName="Washer" faqs={faqs} />

      {/* Contact CTA */}
      <CTASection 
        heading="Ready to Book Your Washer Repair in Arnprior?"
        description="Don't let a broken washer slow you down. Our Arnprior team offers quick, reliable repairs — book now!"
      />

      {/* Related Services */}
      <RelatedServicesSection
        services={relatedServices}
        heading="Also Need Help With..."
        description="We do more than just washer repair — check out our other Ottawa services:"
        applianceName="Washer"
      />
    </>
  );
}
