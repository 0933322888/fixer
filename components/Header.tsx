"use client";

import Link from "next/link";
import { FaPhone, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Top Bar with Links and Social Icons */}
      <div className="border-b border-gray-300" style={{ backgroundColor: '#DD4F06' }}>
        <div className="container-custom py-2">
          <div className="flex items-center justify-between">
            {/* Left side - Navigation Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
                About
              </Link>
              <Link href="/brands" className="text-white hover:text-gray-200 transition-colors">
                Brands
              </Link>
              <Link href="/blog" className="text-white hover:text-gray-200 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">
                Contact
              </Link>
            </div>

            {/* Right side - Social Media Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-lg" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200" style={{ backgroundColor: '#FFF9F0' }}>
        <div className="container-custom py-3">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <Image src="/gallery/BRAND1.png" alt="Fixer" width={90} height={90} />
            </div>

            {/* Title — grows to fill space between logo and CTAs */}
            <div className="min-w-0 flex-1 px-1 sm:px-2">
              <h1
                className="w-full text-balance font-bold leading-tight tracking-tight text-[#0A3F5B] text-[clamp(0.95rem,2.4vw+0.45rem,2rem)]"
              >
                FIXER APPLIANCE REPAIR
              </h1>
            </div>

            {/* Phone and Book Now button on the right */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <a href="tel:613-413-6969" className="hidden md:flex items-center gap-2 transition-colors">
                <FaPhone className="text-lg" style={{ color: '#0A3F5B' }} />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Call Us Now</p>
                  <p className="text-lg font-bold" style={{ color: '#0A3F5B' }}>(613) 413-6969</p>
                </div>
              </a>
              <Link href="/contact" className="btn-primary text-sm md:text-base">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

