import { Metadata } from "next";
import Link from "next/link";
import { FaCheckCircle, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { descriptiveLinkText } from "@/lib/descriptiveLinkText";

export const metadata: Metadata = {
  title: "Appliance Repair Ottawa – Same-Day Service & Trusted Techs | Fixer",
  description: "Fast, affordable appliance repair in Ottawa from Fixer Appliance Repair Inc. No hidden fees — just trusted local technicians with a 90-day warranty.",
};

const services = [
  { name: "Washer Repair Ottawa", href: "/washer-repair", description: "No more laundry pile-ups." },
  { name: "Dryer Repair Ottawa", href: "/dryer-repair", description: "Fast fixes for noisy, non-heating, or stubborn dryers." },
  { name: "Dishwasher Repair Ottawa", href: "/dishwasher-repair", description: "Say goodbye to handwashing marathons." },
  { name: "Fridge Repair Ottawa", href: "/fridge-repair", description: "Keep your food fresh and safe." },
  { name: "Freezer Repair Ottawa", href: "/freezer-repair", description: "Reliable fixes for deep-freeze problems." },
  { name: "Oven Repair Ottawa", href: "/oven-repair", description: "Perfect bakes, every time." },
  { name: "Cooktop Repair Ottawa", href: "/cooktop-repair", description: "From uneven heat to total shutdowns." },
  { name: "Microwave Repair Ottawa", href: "/microwave-repair", description: "Fast heating without sparks." },
  { name: "Appliance Installation Ottawa", href: "/appliance-installation/locations/ottawa", description: "Professional, safe, and precise setup." },
];

const brands = [
  { name: "LG Appliance Repair", href: "/brands/lg", description: "Known for smart features, but even smart tech needs expert care." },
  { name: "Samsung Appliance Repair", href: "/brands/samsung", description: "We handle complex electronics and cooling systems." },
  { name: "Whirlpool Appliance Repair", href: "/brands/whirlpool", description: "Trusted for decades, and we keep them running strong." },
  { name: "GE Appliance Repair", href: "/brands/ge", description: "From vintage models to modern innovations." },
  { name: "Frigidaire Appliance Repair", href: "/brands/frigidaire", description: "Specialists in cooling and cooking solutions." },
  { name: "Maytag Appliance Repair", href: "/brands/maytag", description: "Built tough, but not unbreakable." },
  { name: "Bosch Appliance Repair", href: "/brands/bosch", description: "Precision engineering requires precise repairs." },
  { name: "Kenmore Appliance Repair", href: "/brands/kenmore", description: "Common in many Ottawa homes, and we know them inside out." },
  { name: "Panasonic Appliance Repair", href: "/brands/panasonic", description: "Specialists in high-end appliances and electronics." },
  { name: "KitchenAid Appliance Repair", href: "/brands/kitchenaid", description: "Popular brand in many homes, but we fix them all." },
];

const serviceAreas = [
  { name: "Kanata Appliance Repair", slug: "kanata" },
  { name: "Carp Appliance Repair", slug: "carp" },
  { name: "Stittsville Appliance Repair", slug: "stittsville" },
  { name: "Nepean Appliance Repair", slug: "nepean" },
  { name: "Orleans Appliance Repair", slug: "orleans" },
  { name: "Barrhaven Appliance Repair", slug: "barrhaven" },
  { name: "Vanier Appliance Repair", slug: "vanier" },
  { name: "Arnprior Appliance Repair", slug: "arnprior" },
  { name: "Carleton Place Appliance Repair", slug: "carleton-place" },
  { name: "Mississippi Mills Appliance Repair", slug: "mississippi-mills" },
];

const commonProblems = [
  { problem: "Why is my fridge not cooling or making loud noises?", link: "/fridge-repair" },
  { problem: "Washer not spinning or leaking water", link: "/washer-repair" },
  { problem: "Dryer not heating or making strange noises", link: "/dryer-repair" },
  { problem: "Why is my dishwasher not draining or leaving dishes dirty?", link: "/dishwasher-repair" },
  { problem: "Why is my oven not heating evenly or showing error codes?", link: "/oven-repair" },
  { problem: "Cooktop burner not turning on", link: "/cooktop-repair" },
  { problem: "Microwave won't start or sparks inside", link: "/microwave-repair" },
];

const generalFAQs = [
  {
    question: "Do you offer same-day service?",
    answer: "In many areas, yes — call us to check availability today.",
  },
  {
    question: "Do you work on all brands?",
    answer: "We handle all major brands, plus some specialty models.",
  },
  {
    question: "What if my appliance is too old to repair?",
    answer: "We'll give you honest advice — sometimes replacement is the smarter choice.",
  },
  {
    question: "Do you install appliances?",
    answer: "Yes — from unboxing to final setup.",
  },
];

const howToFAQs = [
  {
    question: "How to repair a washing machine that won't spin?",
    answer: "You can try checking the load balance or the drain filter — but it's not always safe to repair it yourself. Our pros fix it fast, give you a 90-day warranty, and save you the stress.",
    link: "/washer-repair",
  },
  {
    question: "How to fix a fridge that's not cooling?",
    answer: "It could be a thermostat, compressor, or blocked vents. Some fixes are simple, others need professional tools. We'll diagnose it quickly and repair it safely.",
    link: "/fridge-repair",
  },
  {
    question: "How to repair a dishwasher that won't drain?",
    answer: "Sometimes it's just a clogged filter or hose, but it can also be a faulty pump. We check both and make sure your dishwasher runs like new.",
    link: "/dishwasher-repair",
  },
  {
    question: "How to stop an oven from burning food?",
    answer: "Uneven heating could be a faulty element or thermostat. We'll test, replace, and calibrate so your baking is back on track.",
    link: "/oven-repair",
  },
  {
    question: "How to know if my appliance is worth repairing?",
    answer: "As a rule of thumb: if the repair is less than 50% of the cost of a new appliance, it's usually worth it. We'll help you decide honestly — no upselling.",
    link: "/blog/repair-vs-replace-appliance",
  },
  {
    question: "How much does it cost to repair a fridge in Ottawa?",
    answer: "The cost depends on the exact problem, required parts, and the age of the appliance. We always diagnose first and let you know whether it's worth repairing or if replacing might be a smarter option.",
    link: null,
  },
];

const whyFAQs = [
  {
    question: "Why is my dryer taking so long to dry clothes?",
    answer: "It could be a clogged vent, worn heating element, or faulty thermostat. We fix the cause and improve efficiency.",
    link: "/dryer-repair",
  },
  {
    question: "Why does my microwave spark inside?",
    answer: "Usually from a damaged waveguide cover, metal debris, or peeling interior paint — all of which we can repair safely.",
    link: "/microwave-repair",
  },
  {
    question: "Why is my fridge making a loud noise?",
    answer: "This could be a failing fan, compressor, or something as simple as ice buildup. We'll find and fix the root cause.",
    link: "/fridge-repair",
  },
  {
    question: "Why won't my cooktop heat evenly?",
    answer: "Burners, wiring, or control switches may be failing. We replace parts so cooking is smooth again.",
    link: "/cooktop-repair",
  },
  {
    question: "Why is appliance repair so expensive?",
    answer: "It's often the cost of quality parts and skilled labor. With Fixer, you get expert service, genuine parts, and a 90-day warranty — so you only pay once for a job done right.",
    link: null,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/home_hero.jpg"
            alt="Professional appliance repair service in Ottawa"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center -110px' }}
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="container-custom section-padding relative z-10" style={{ paddingTop: '30px' }}>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Same Day Appliance Repair in Ottawa – Fast, Reliable & Local
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              We fix it fast and fix it right — so you don't have to see us again. (Unless it's for a different appliance.)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:613-413-6969" className="btn-primary bg-accent-500 hover:bg-accent-600 text-center text-lg px-8 py-4">
                <FaPhone className="inline mr-2" />
                Call (613) 413-6969
              </a>
              <a href="mailto:service@fixerappliancerepair.ca" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 text-center text-lg px-8 py-4">
                <FaEnvelope className="inline mr-2" />
                Email Us
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-accent-400" />
                <span>Same-Day Service Available</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-accent-400" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-accent-400" />
                <span>90-Day Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-8">Welcome to Fixer – Your Local Appliance Repair Experts</h2>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
              <div className="prose prose-lg max-w-none text-neutral-600 space-y-4 flex-1">
                <p className="text-center lg:text-left">
                  Looking for fast, dependable appliance repair in Ottawa? At <strong>Fixer Appliance Repair Inc.</strong>, we fix it fast and fix it right — so you don't have to see us again. (Unless it's for a different appliance.)
                </p>
                <p className="text-center lg:text-left">
                  Your satisfaction isn't just a goal — it's how we measure success. We're a locally owned and operated company, proudly serving Ottawa and nearby communities like Kanata, Nepean, Stittsville, Carp, Arnprior, Orleans, Barrhaven, Vanier, Carleton Place, and Mississippi Mills.
                </p>
                <p className="text-center lg:text-left">
                  We offer same-day appointments in many areas, clear pricing with no hidden fees, and repairs backed by a 90-day guarantee. Whether it's a noisy washer, a warm fridge, or a stubborn dishwasher, we make the process smooth, respectful, and stress-free.
                </p>
              </div>
              <div className="flex-shrink-0 w-full max-w-md">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/Kitchen.png"
                    alt="Kitchen appliances – we repair them all in Ottawa"
                    fill
                    style={{ objectFit: "unset" }}
                    sizes="(max-width: 1024px) 100vw, 448px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Repair Services */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-4">Our Repair Services</h2>
            <p className="text-center text-neutral-600 mb-12 text-lg">
              We handle all major home appliances — whether it's a small hiccup or a major breakdown:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-light-200"
                >
                  <h3 className="text-lg font-semibold text-primary-500 mb-2">{service.name}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </Link>
              ))}
            </div>
            <div className="text-center bg-light-100 p-6 rounded-lg border border-light-200">
              <p className="text-lg text-neutral-700 mb-4">
                📞 Need your appliance fixed today? Call{" "}
                <a href="tel:613-413-6969" className="text-primary-500 hover:text-primary-600 font-semibold">
                  (613) 413-6969
                </a>
                {" "}or email{" "}
                <a href="mailto:service@fixerappliancerepair.ca" className="text-primary-500 hover:text-primary-600 font-semibold">
                  service@fixerappliancerepair.ca
                </a>
                {" "}— fast, friendly, and local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-4"> <Link href="/brands" className="text-primary-600 hover:text-primary-700 font-semibold">Brands</Link> We Service</h2>
            <p className="text-center text-neutral-600 mb-12 text-lg">
              We repair all major brands and models — from the latest smart appliances to reliable classics:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {brands.map((brand, index) => (
                <Link
                  key={index}
                  href={brand.href}
                  className="bg-light-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:bg-light-200 border border-light-200"
                >
                  <h3 className="text-lg font-semibold text-primary-500 mb-2">{brand.name}</h3>
                  <p className="text-neutral-600">{brand.description}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-neutral-600">
              and more — just ask!
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-[#DD4F06] text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-4 text-white">Service Areas</h2>
            <p className="text-center text-gray-100 mb-8 text-lg">
              Based in Ottawa, we proudly serve:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <Link
                  key={index}
                  href={`/service-areas/${area.slug}`}
                  className="bg-primary-500 p-4 rounded-lg text-center hover:bg-primary-600 transition-colors"
                >
                  <p className="font-medium">{area.name}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-100">
              👉 See all{" "}
              <Link href="/service-areas" className="font-semibold hover:underline">
                Appliance Repair Service Areas in Ottawa
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems We Fix */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-4">🔧 Common Problems We Fix</h2>
            <p className="text-center text-neutral-600 mb-8 text-lg">
              Appliance acting up? Here are some of the most common issues we handle every day:
            </p>
            <div className="bg-background p-8 rounded-lg shadow-sm space-y-4 border border-light-200">
              {commonProblems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-accent-500 text-xl flex-shrink-0">•</span>
                  <Link href={item.link} className="text-neutral-700 hover:text-primary-500 text-lg">
                    {item.problem}
                  </Link>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <span className="text-accent-500 text-xl flex-shrink-0">•</span>
                <p className="text-neutral-700 text-lg">Appliance won't power on at all</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-500 text-xl flex-shrink-0">•</span>
                <p className="text-neutral-700 text-lg">Broken door seals or handles</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-500 text-xl flex-shrink-0">•</span>
                <p className="text-neutral-700 text-lg">Weird smells, unusual noises, or something feels "off"</p>
              </div>
            </div>
            <p className="text-center text-neutral-600 mt-8 text-lg italic">
              If you've said, "This thing used to work just fine…" — we're the team to call.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">FAQ – Appliance Repair in Ottawa</h2>

            {/* General FAQs */}
            <div className="mb-12">
              <div className="space-y-6">
                {generalFAQs.map((faq, index) => (
                  <div key={index} className="bg-light-100 p-6 rounded-lg shadow-sm border border-light-200">
                    <h4 className="text-lg font-semibold text-primary-500 mb-3">{faq.question}</h4>
                    <p className="text-neutral-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How-To Questions */}
            <div className="mb-12">
              <div className="space-y-6">
                {howToFAQs.map((faq, index) => (
                  <div key={index} className="bg-light-100 p-6 rounded-lg shadow-sm border border-light-200">
                    <h4 className="text-lg font-semibold text-primary-500 mb-3">{faq.question}</h4>
                    <p className="text-neutral-600">
                      {faq.answer}
                      {faq.link && (
                        <>
                          {" "}→{" "}
                          <Link href={faq.link} className="text-primary-500 hover:text-primary-600 font-semibold">
                            {descriptiveLinkText(faq.link)}
                          </Link>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Questions */}
            <div>
              <div className="space-y-6">
                {whyFAQs.map((faq, index) => (
                  <div key={index} className="bg-light-100 p-6 rounded-lg shadow-sm border border-light-200">
                    <h4 className="text-lg font-semibold text-primary-500 mb-3">{faq.question}</h4>
                    <p className="text-neutral-600">
                      {faq.answer}
                      {faq.link && (
                        <>
                          {" "}→{" "}
                          <Link href={faq.link} className="text-primary-500 hover:text-primary-600 font-semibold">
                            {descriptiveLinkText(faq.link)}
                          </Link>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection 
        heading="Ready to Book Your Repair?"
        description="Our Ottawa technicians are standing by and fully stocked with the tools and common parts needed to get your appliances back up and running fast."
      />
    </>
  );
}
