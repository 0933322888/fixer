import { ReactNode } from "react";

interface ServiceAreaHeroProps {
  title: string | ReactNode;
  description: ReactNode;
  icon?: ReactNode;
  additionalContent?: ReactNode;
}

export default function ServiceAreaHero({
  title,
  description,
  icon,
  additionalContent,
}: ServiceAreaHeroProps) {
  return (
    <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl text-white mb-6">
            {icon && <>{icon} </>}
            {title}
          </h1>
          <div className="text-xl text-gray-100 mb-4">
            {description}
          </div>
          {additionalContent && (
            <div className="text-lg text-gray-100">
              {additionalContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
