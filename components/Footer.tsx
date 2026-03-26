import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-light-100">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Fixer Appliance Repair Inc.</h3>
            <p className="text-sm mb-4 text-light-200">
              Professional appliance repair services in Ottawa and surrounding areas. Fast, reliable, and affordable solutions for all your appliance needs.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/FixerApplianceRepair" className="text-light-300 hover:text-accent-500 transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/fixerappliancerepair/" className="text-light-300 hover:text-accent-500 transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/washer-repair" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Washer Repair
                </Link>
              </li>
              <li>
                <Link href="/dryer-repair" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Dryer Repair
                </Link>
              </li>
              <li>
                <Link href="/dishwasher-repair" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Dishwasher Repair
                </Link>
              </li>
              <li>
                <Link href="/fridge-repair" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Fridge Repair
                </Link>
              </li>
              <li>
                <Link href="/freezer-repair" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Freezer Repair
                </Link>
              </li>
              <li>
                <Link href="/oven-repair" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Oven Repair
                </Link>
              </li>
              <li>
                <Link href="/cooktop-repair" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Cooktop Repair
                </Link>
              </li>
              <li>
                <Link href="/microwave-repair" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Microwave Repair
                </Link>
              </li>
              <li>
                <Link href="/appliance-installation/locations/ottawa" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  Installation Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-light-200">Ottawa, Ontario, Canada</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-accent-500 mt-1 flex-shrink-0" />
                <a href="tel:613-413-6969" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  613-413-6969
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-accent-500 mt-1 flex-shrink-0" />
                <a href="mailto:service@fixerappliancerepair.ca" className="text-sm text-light-200 hover:text-accent-500 transition-colors">
                  service@fixerappliancerepair.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-accent-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-light-200">Monday - Saturday<br />8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-sm text-light-200">
            &copy; {currentYear} Fixer Appliance Repair Inc. |{" "}
            <Link href="/privacy-policy" className="hover:text-accent-500 transition-colors">
              Privacy Policy
            </Link>
            {" "}|{" "}
            <Link href="/terms-of-service" className="hover:text-accent-500 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

