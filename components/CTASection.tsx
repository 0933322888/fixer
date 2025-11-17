import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  description?: string;
  phoneNumber?: string;
  phoneText?: string;
  buttonText?: string;
  email?: string;
}

export default function CTASection({
  heading = "Ready to Book?",
  subheading,
  description = "Let's get it fixed. Call or text us today to schedule your appointment.",
  phoneNumber = "613-413-6969",
  phoneText,
  buttonText = "Book Online Now",
  email = "service@fixerappliancerepair.ca",
}: CTASectionProps) {
  const defaultPhoneText = `Call or Text (${phoneNumber})`;

  return (
    <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
      <div className="container-custom text-center">
        <h2 className="heading-lg mb-4 text-white">{heading}</h2>
        {subheading && <h3 className="heading-md mb-4 text-white">{subheading}</h3>}
        <p className="text-xl mb-8 max-w-3xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${phoneNumber}`}
            className="btn-primary bg-white text-accent-600 hover:bg-gray-100"
          >
            {phoneText || defaultPhoneText}
          </a>
          <Link
            href="/contact"
            className="btn-outline border-white text-white hover:bg-white hover:text-accent-600"
          >
            {buttonText}
          </Link>
        </div>
        <p className="text-lg text-white/90 mt-6">
          Email:{" "}
          <a href={`mailto:${email}`} className="underline text-white">
            {email}
          </a>
        </p>
      </div>
    </section>
  );
}

