import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Fixer Appliance Repair – Ottawa Local Technicians",
  description: "Get in touch with Fixer Appliance Repair in Ottawa. Call, email, or fill out our form for fast, reliable appliance repairs from your local experts.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

