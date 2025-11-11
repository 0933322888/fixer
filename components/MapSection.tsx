export default function MapSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-4">Our Service Area</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We proudly serve Ottawa and surrounding areas including Kanata, Nepean, Barrhaven, Orleans, and more.
        </p>
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179885.2519454278!2d-75.89890849999999!3d45.2501907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ottawa Service Area Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

