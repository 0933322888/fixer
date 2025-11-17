interface Issue {
  title: string;
  description: string;
}

interface CommonIssuesSectionProps {
  issues: Issue[];
  heading?: string;
}

export default function CommonIssuesSection({ 
  issues, 
  heading = "Common Problems We Fix" 
}: CommonIssuesSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-md text-center mb-12">{heading}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {issues.map((issue, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{issue.title}</h3>
                <p className="text-gray-700 leading-relaxed">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
