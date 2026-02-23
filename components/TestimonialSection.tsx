interface TestimonialSectionProps {
  quote: string;
  author: string;
}

export default function TestimonialSection({ quote, author }: TestimonialSectionProps) {
  return (
    <section className="bg-white pb-10">
      <div className="container-custom">
        <blockquote className="rounded-xl border-l-4 border-accent-500 bg-white p-6 text-gray-800 shadow-md max-w-3xl mx-auto">
          <p className="text-lg italic">
            {quote}{" "}
            <span className="not-italic font-semibold text-gray-900">
              – {author}
            </span>
          </p>
        </blockquote>
      </div>
    </section>
  );
}
