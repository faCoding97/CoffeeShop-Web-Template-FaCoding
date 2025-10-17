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
          <div className="relative z-10 mx-auto max-w-5xl px-4 py-6">
            <div className="flex items-center justify-center flex-wrap gap-2 text-center">
              <p className="text-gray-900 flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
                <span className="whitespace-nowrap">Written by:</span>
                <a
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
                  href="https://elixcode.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/logo.png"
                    alt="Elix Code Logo"
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                  />
                  Elix Code
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
