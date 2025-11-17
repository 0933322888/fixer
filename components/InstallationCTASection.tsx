import Link from "next/link";

interface InstallationCTASectionProps {
  applianceName: string;
  description: string;
  href: string;
  heading?: string;
  buttonText?: string;
}

export default function InstallationCTASection({
  applianceName,
  description,
  href,
  heading,
  buttonText,
}: InstallationCTASectionProps) {
  const defaultHeading = `New ${applianceName}? We Can Install It`;
  const defaultButtonText = `Learn About ${applianceName} Installation`;

  return (
    <section className="section-padding bg-[#DD4F06] text-white">
      <div className="container-custom text-center">
        <h2 className="heading-md mb-4 text-white">{heading || defaultHeading}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
        <Link href={href} className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
          {buttonText || defaultButtonText}
        </Link>
      </div>
    </section>
  );
}

