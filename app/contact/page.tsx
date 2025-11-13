"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      // Success
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#DD4F06] text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-100 mb-8">
              Need help with your appliance? Whether it's a fridge that stopped cooling, a washer making strange noises, or an oven that just won't heat — we're here to fix it quickly and professionally.
            </p>
            <p className="text-lg text-gray-100">
              At Fixer Appliance Repair, we're a local, family-owned company serving Ottawa and surrounding areas. All repairs come with our 90-day labour warranty, and we treat every home like our own.
            </p>
          </div>
        </div>
      </section>

      {/* Get in Touch & Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Get in Touch */}
            <div>
              <h2 className="heading-md mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-light-100 p-3 rounded-lg flex-shrink-0">
                    <FaPhone className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-500 mb-2">Phone</h3>
                    <a href="tel:613-413-6969" className="text-primary-500 hover:text-primary-600 text-lg">
                      613-413-6969
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-light-100 p-3 rounded-lg flex-shrink-0">
                    <FaEnvelope className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-500 mb-2">Email</h3>
                    <a href="mailto:service@fixerappliancerepair.ca" className="text-primary-500 hover:text-primary-600 text-lg break-all">
                      service@fixerappliancerepair.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-light-100 p-3 rounded-lg flex-shrink-0">
                    <FaClock className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-500 mb-2">Business Hours</h3>
                    <p className="text-neutral-600 text-lg">Monday–Saturday</p>
                    <p className="text-neutral-600 text-lg">8:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="heading-md mb-8">Contact Form</h2>
              
              {submitted && (
                <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                  <FaCheckCircle />
                  <span>Thank you! We'll contact you shortly.</span>
                </div>
              )}

              {error && (
                <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                  <FaExclamationCircle />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-light-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-light-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-light-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="Tell us about your appliance issue..."
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-light-100 disabled:cursor-not-allowed"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Quick Links to Our Most Requested Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/fridge-repair" className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md hover:bg-light-200 transition-all text-center border border-light-200">
                <h3 className="font-semibold text-primary-500">Fridge Repair Ottawa</h3>
              </Link>
              <Link href="/washer-repair" className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md hover:bg-light-200 transition-all text-center border border-light-200">
                <h3 className="font-semibold text-primary-500">Washer Repair Ottawa</h3>
              </Link>
              <Link href="/dryer-repair" className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md hover:bg-light-200 transition-all text-center border border-light-200">
                <h3 className="font-semibold text-primary-500">Dryer Repair Ottawa</h3>
              </Link>
              <Link href="/oven-repair" className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md hover:bg-light-200 transition-all text-center border border-light-200">
                <h3 className="font-semibold text-primary-500">Oven Repair Ottawa</h3>
              </Link>
              <Link href="/dishwasher-repair" className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md hover:bg-light-200 transition-all text-center border border-light-200">
                <h3 className="font-semibold text-primary-500">Dishwasher Repair Ottawa</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Service Area</h2>
            <p className="text-center text-gray-700 text-lg mb-8">
              We serve Ottawa and nearby communities, including Kanata, Stittsville, Nepean, Carp, Vanier, Westboro, Arnprior, Carleton Place, Mississippi Mills.
            </p>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700">
                📄 For information on how we protect your personal data, please see our{" "}
                <Link href="/privacy-policy" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center mb-12">FAQ</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer same-day service?</h3>
                <p className="text-gray-700">Same-day appointments are available in many areas — call us to check today's availability.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you service my area?</h3>
                <p className="text-gray-700">We cover all Ottawa neighborhoods and nearby towns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

