import Link from "next/link";
import { ReactNode } from "react";

interface ServiceHeroProps {
  title: string | ReactNode;
  description: string | ReactNode;
  icon: ReactNode;
  additionalContent?: ReactNode;
  buttonText?: string;
  phoneNumber?: string;
  phoneText?: string;
  headingSize?: "lg" | "xl";
  useSectionPadding?: boolean;
}

export default function ServiceHero({ 
  title, 
  description, 
  icon,
  additionalContent,
  buttonText = "Book Online",
  phoneNumber = "613-413-6969",
  phoneText = "Call us",
  headingSize = "lg",
  useSectionPadding = false,
}: ServiceHeroProps) {
  const headingClass = headingSize === "xl" ? "heading-xl" : "heading-lg";
  const sectionClass = useSectionPadding ? "section-padding bg-[#DD4F06] text-white" : "bg-[#DD4F06] text-white";
  const containerPadding = useSectionPadding ? "" : "py-16 md:py-20";

  return (
    <section className={sectionClass}>
      <div className={`container-custom ${containerPadding}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`${headingClass} mb-6 text-white`}>
            {icon} {title}
          </h1>
          {typeof description === "string" ? (
            <p className="text-xl leading-relaxed mb-8 text-gray-100">
              {description}
            </p>
          ) : (
            <div className="text-xl leading-relaxed mb-8 text-gray-100">
              {description}
            </div>
          )}
          {additionalContent && (
            <div className="mb-8">
              {additionalContent}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              {buttonText}
            </Link>
            <a href={`tel:${phoneNumber}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary-500">
              {phoneText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

