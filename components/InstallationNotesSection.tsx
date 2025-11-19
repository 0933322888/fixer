interface Note {
  title: string;
  description: string;
}

interface InstallationNotesSectionProps {
  notes: Note[];
  heading?: string;
  description?: string;
}

export default function InstallationNotesSection({
  notes,
  heading = "Important Installation Notes",
  description = "To ensure clarity and set proper expectations, here's what you need to know about our installation service:",
}: InstallationNotesSectionProps) {
  // Determine grid columns: 2 columns for even number of notes, 3 columns for odd
  const gridCols = notes.length % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section className="section-padding bg-light-100">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-md text-center mb-8">{heading}</h2>
          <p className="text-center text-lg text-neutral-600 mb-8">{description}</p>
          <div className={`grid ${gridCols} gap-6 mb-6`}>
            {notes.map((note, index) => {
              const isPrimary = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`bg-background border-l-4 ${isPrimary ? "border-primary-500" : "border-accent-500"} p-6 rounded-lg shadow-sm`}
                >
                  <h3 className={`text-lg font-semibold ${isPrimary ? "text-primary-500" : "text-accent-500"} mb-2`}>
                    {note.title}
                  </h3>
                  <p className="text-neutral-700">{note.description}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-light-200 border border-light-300 rounded-lg p-6 text-center">
            <p className="text-lg text-neutral-700 font-medium">
              This way, you know exactly what's included in our service — <span className="text-primary-500 font-semibold">clear, safe, and reliable</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
