"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

type NavLink = {
  href: string;
  label: string;
  children?: Array<{ href: string; label: string }>;
};

const navLinks: NavLink[] = [
  { href: "/", label: "HOME" },
  { href: "/washer-repair", label: "WASHER REPAIR" },
  { href: "/dryer-repair", label: "DRYER REPAIR" },
  { href: "/dishwasher-repair", label: "DISHWASHER REPAIR" },
  {
    href: "/fridge-repair",
    label: "FRIDGE REPAIR",
    children: [
      { href: "/freezer-repair", label: "Freezer Repair" },
    ],
  },
  {
    href: "/oven-repair",
    label: "OVEN REPAIR",
    children: [{ href: "/cooktop-repair", label: "Cooktop Repair" }],
  },
  { href: "/microwave-repair", label: "MICROWAVE REPAIR" },
  { href: "/appliance-installation/ottawa", label: "INSTALLATION SERVICE" },
];

function isLinkActive(pathname: string, link: NavLink) {
  if (pathname === link.href) return true;
  if (link.children) {
    return link.children.some((child) => child.href === pathname);
  }
  return false;
}

function applyHoverStyles(
  e: MouseEvent<HTMLAnchorElement>,
  isHovering: boolean,
  isActive: boolean
) {
  if (isActive) return;
  e.currentTarget.style.backgroundColor = isHovering ? "#DD4F06" : "transparent";
  e.currentTarget.style.color = isHovering ? "#FFF9F0" : "#0A3F5B";
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  return (
    <nav className="shadow-lg sticky top-0 z-50" style={{ backgroundColor: "#FFF9F0" }}>
      <div className="container-custom">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center text-center justify-center space-x-1 w-full">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link);

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => link.children && setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
                    style={{
                      color: active ? "#FFF9F0" : "#0A3F5B",
                      backgroundColor: active ? "#DD4F06" : "transparent",
                    }}
                    onMouseEnter={(e) => applyHoverStyles(e, true, active)}
                    onMouseLeave={(e) => applyHoverStyles(e, false, active)}
                  >
                    <span>{link.label}</span>
                    {link.children && (
                      <FaChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                  {link.children && openDropdown === link.label && (
                    <div className="absolute left-0 top-full w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                      {link.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm font-medium transition-colors"
                            style={{
                              color: childActive ? "#FFF9F0" : "#0A3F5B",
                              backgroundColor: childActive ? "#DD4F06" : "transparent",
                            }}
                            onMouseEnter={(e) => applyHoverStyles(e, true, childActive)}
                            onMouseLeave={(e) => applyHoverStyles(e, false, childActive)}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 absolute left-4"
            style={{ color: "#0A3F5B" }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const active = isLinkActive(pathname, link);

                if (!link.children) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      style={{
                        color: active ? "#FFF9F0" : "#0A3F5B",
                        backgroundColor: active ? "#DD4F06" : "transparent",
                      }}
                      onMouseEnter={(e) => applyHoverStyles(e, true, active)}
                      onMouseLeave={(e) => applyHoverStyles(e, false, active)}
                    >
                      {link.label}
                    </Link>
                  );
                }

                const isDropdownOpen = openMobileDropdown === link.label;

                return (
                  <div key={link.label} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        style={{
                          color: active ? "#FFF9F0" : "#0A3F5B",
                          backgroundColor: active ? "#DD4F06" : "transparent",
                        }}
                        onMouseEnter={(e) => applyHoverStyles(e, true, active)}
                        onMouseLeave={(e) => applyHoverStyles(e, false, active)}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileDropdown(isDropdownOpen ? null : link.label)
                        }
                        className="px-3 py-2"
                        style={{ color: "#0A3F5B" }}
                        aria-label={`Toggle ${link.label} menu`}
                      >
                        <FaChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {isDropdownOpen && (
                      <div className="ml-4 mt-2 flex flex-col space-y-1">
                        {link.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
                              style={{
                                color: childActive ? "#FFF9F0" : "#0A3F5B",
                                backgroundColor: childActive ? "#DD4F06" : "transparent",
                              }}
                              onMouseEnter={(e) => applyHoverStyles(e, true, childActive)}
                              onMouseLeave={(e) => applyHoverStyles(e, false, childActive)}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

