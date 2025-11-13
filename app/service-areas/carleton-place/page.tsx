import { Metadata } from "next";
import Link from "next/link";

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
  { name: "Electrolux", href: "?" },
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
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Appliance Repair Services in Carleton Place
            </h1>
            <p className="text-xl text-gray-100 mb-4">
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
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Appliance Services in Carleton Place
          </h2>
          <p className="text-gray-700">Our technicians handle:</p>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-300"
              >
                <span className="text-base font-semibold text-gray-900 group-hover:text-accent-700">
                  {service.name}
                </span>
                <span className="text-sm text-gray-700">
                  {service.description}
                </span>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent-600 group-hover:text-accent-700">
                  Explore service
                  <svg
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <p className="text-gray-700">
            👉 We also provide{" "}
            <Link
              href="/appliance-installation/ottawa"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              appliance installation across Ottawa
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            <Link href="/brands" className="text-accent-600 hover:text-accent-700 font-semibold">Brands</Link> We Service
          </h2>
          <p className="text-gray-700">
            We repair all major household brands, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {brands.map((brand, index) => (
              <Link
                key={index}
                href={brand.href}
                className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:bg-accent-50 hover:border-accent-300 hover:text-accent-700 transition-colors"
              >
                <p className="text-sm font-medium text-gray-900 hover:text-accent-700">{brand.name}</p>
              </Link>
            ))}
          </div>
          <p className="text-gray-700">
            Not sure about your brand or model? Give us a call — chances are,
            we’ve repaired it before.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Explore Carleton Place While We Repair
          </h2>
          <p className="text-gray-700">
            While we handle your appliance service, you can enjoy:
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {attractions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700">
            We proudly serve Carleton Place and nearby communities like Beckwith
            and Franktown, as well as surrounding towns such as{" "}
            <Link
              href="/service-areas/mississippi-mills"
              className="font-semibold text-accent-600 underline decoration-2 underline-offset-4 hover:text-accent-700"
            >
              Mississippi Mills appliance repair
            </Link>
            .
          </p>
          <div className="rounded-xl border border-accent-500 bg-accent-50 p-6 text-gray-800">
            <p className="text-lg font-semibold">
              👉 Check local happenings
            </p>
            <p className="mt-2 text-sm">
              Browse the{" "}
              <a
                href="https://carletonplace.ca/events"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 underline hover:text-accent-700"
              >
                Carleton Place events calendar
              </a>
              .
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Neighbourhoods We Serve in Carleton Place
          </h2>
          <p className="text-gray-700">
            Looking for appliance service in a specific part of Carleton Place? Explore
            these dedicated pages:
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {neighbourhoods.map((area) => (
              <li key={area.name}>
                <Link
                  href={area.href}
                  className="block rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-300 hover:text-accent-700"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-700">{additionalAreas.join(" • ")}</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            FAQ – Appliance Repair in Carleton Place
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4 text-white">
            Book Your Carleton Place Appliance Service Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Local. Reliable. Guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:613-413-6969"
              className="btn-primary bg-white text-accent-600 hover:bg-gray-100"
            >
              Call or Text (613) 413-6969
            </a>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-accent-600"
            >
              Book Online Now
            </Link>
          </div>
          <p className="text-lg text-white/90 mt-6">
            Email:{" "}
            <a href="mailto:service@fixerappliancerepair.ca" className="underline text-white">
              service@fixerappliancerepair.ca
            </a>
          </p>
        </div>
      </section>
    </>
  );
}


