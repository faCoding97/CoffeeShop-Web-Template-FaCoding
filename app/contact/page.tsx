// Contact page
import type { Metadata } from "next";
import MapEmbed from "@/components/MapEmbed";
import SectionTitle from "@/components/SectionTitle";
import { data } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ElixCode Coffee Shop — phone, email, Instagram, and maps.",
};

export default function ContactPage() {
  const c = data.cafeInfo;
  return (
    <main className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <SectionTitle title="Contact Information" />
          <ul className="space-y-2 text-coffee-800">
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a href={`tel:${c.phone}`}>{c.phone}</a>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href={`mailto:${c.email}`}>{c.email}</a>
            </li>
            <li>
              <span className="font-semibold">WhatsApp:</span>{" "}
              <a
                href={`https://wa.me/${c.whatsapp.replace(/\D/g, "")}`}
                target="_blank">
                Chat now
              </a>
            </li>
            <li>
              <span className="font-semibold">Instagram:</span>{" "}
              <a href={c.instagram} target="_blank">
                Follow us
              </a>
            </li>
            <li>
              <span className="font-semibold">Opening Hours:</span>{" "}
              {c.openingHours}
            </li>
            <li>
              <span className="font-semibold">Address:</span> {c.location}
            </li>
          </ul>
        </div>
        <MapEmbed query={c.location} />
      </div>
    </main>
  );
}
