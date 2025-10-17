// Footer showing cafe contact info and social links
import Link from "next/link";
import { data } from "@/lib/data";

export default function Footer() {
  const c = data.cafeInfo;
  return (
    <footer className="mt-24 border-t border-coffee-100 bg-white">
      <div className="container py-10 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold text-coffee-900">We Are {c.name}</h3>
          <p className="mt-3 text-coffee-700">{data.story}</p>
        </div>
        <div>
          <h4 className="font-bold text-coffee-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-coffee-800">
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <Link href={`tel:${c.phone}`}>{c.phone}</Link>
            </li>
            <li>
              <span className="font-semibold">WhatsApp:</span>{" "}
              <Link
                href={`https://wa.me/${c.whatsapp.replace(/\D/g, "")}`}
                target="_blank">
                Chat
              </Link>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <Link href={`mailto:${c.email}`}>{c.email}</Link>
            </li>
            <li>
              <span className="font-semibold">Instagram:</span>{" "}
              <Link href={c.instagram} target="_blank">
                Follow us
              </Link>
            </li>
            <li>
              <span className="font-semibold">Location:</span> {c.location}
            </li>
            <li>
              <span className="font-semibold">Hours:</span> {c.openingHours}
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-coffee-900">Your Table QR</h4>
          <p className="mt-3 text-coffee-700">
            Scan to open our digital menu on your phone.
          </p>
          <img
            src="/images/qr-sample.svg"
            alt="QR Code"
            className="mt-3 w-40 h-40"
          />
          <Link href="/#qr" className="btn-outline mt-4 inline-block">
            Download a fresh QR
          </Link>
        </div>
      </div>
      <div className="border-t border-coffee-100">
        <div className="container py-6 text-sm text-coffee-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {c.name}. All rights reserved.
          </p>
          <p>Made with ❤️ & coffee.</p>
        </div>
      </div>
    </footer>
  );
}
