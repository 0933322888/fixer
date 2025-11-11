import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appliance Repair Tips & Guides | Fixer Blog",
  description: "Expert advice, maintenance tips, and repair guides for your home appliances from Fixer Appliance Repair in Ottawa.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

