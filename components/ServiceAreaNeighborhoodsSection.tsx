import Link from "next/link";
import { ReactNode } from "react";

interface Neighbourhood {
  name: string;
  href: string;
}

interface ServiceAreaNeighborhoodsSectionProps {
  title: string;
  description: string;
  neighbourhoods: Neighbourhood[];
  additionalAreas?: string[];
  footer?: ReactNode;
}

export default function ServiceAreaNeighborhoodsSection({
  title,
  description,
  neighbourhoods,
  additionalAreas,
  footer,
}: ServiceAreaNeighborhoodsSectionProps) {
  // Determine grid columns based on neighbourhoods length
  // Odd length → 3 columns, Even length → 2 columns
  const gridCols = neighbourhoods.length % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      <div className={`grid gap-4 ${gridCols}`}>
        {neighbourhoods.map((area) => (
          <Link
            key={area.name}
            href={area.href}
            className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50/60 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-lg"
          >
            <div>
              <p className="font-semibold text-gray-900">{area.name}</p>
              <p className="text-sm text-gray-600">Tap for local details</p>
            </div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-50 text-accent-600">
              <svg
                className="h-5 w-5"
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

      {additionalAreas?.length ? (
        <p className="text-sm text-gray-600 text-center">
          Also nearby: {additionalAreas.join(" • ")}
        </p>
      ) : null}

      {footer ? <div className="text-sm text-gray-700 space-y-2 text-center md:text-left">{footer}</div> : null}
    </div>
  );
}

