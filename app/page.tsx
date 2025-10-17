// Home page: Hero, Story, Vision, Features, Deals, Menu preview, Reservation, QR
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Features from "@/components/Features";
import ReservationForm from "@/components/ReservationForm";
import MenuGrid from "@/components/MenuGrid";
import QRSection from "@/components/QRSection";
import MapEmbed from "@/components/MapEmbed";
import { data } from "@/lib/data";
import { getAllItems, getCategories } from "@/lib/data";

export default function HomePage() {
  const cat = getCategories();
  const items = getAllItems();
  const c = data.cafeInfo;

  return (
    <main>
      {/* Hero section replicating warm aesthetic */}
      <section className="relative min-h-[70vh] flex items-center bg-hero-pattern bg-cover bg-center">
        <div className="container">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Brewed to <span className="text-accent-400">Perfection</span>
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Slow mornings, bold flavors. Explore our hand-crafted menu—freshly
              roasted, lovingly served.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/menu" className="btn-primary">
                Explore Menu
              </a>
              <a href="#reservation" className="btn-outline">
                Book Table
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="section bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-soft">
            <Image
              src="/images/story.jpg"
              alt="Our story"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionTitle title="Our Story" />
            {/* This section handles cafe story rendering */}
            <p className="text-coffee-700">{data.story}</p>
            <div className="mt-6 flex gap-3">
              <a href="/about" className="btn-outline">
                Read More
              </a>
              <a href="/menu" className="btn-primary">
                View Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section bg-coffee-50">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle title="Our Vision" />
            {/* This section handles cafe vision rendering */}
            <p className="text-coffee-700">{data.vision}</p>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-soft">
            <Image
              src="/images/vision.jpg"
              alt="Our vision"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Deals / Specials */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle
            title="Hot Deals"
            subtitle="Don’t miss our weekly specials"
            center
          />
          <div className="grid md:grid-cols-2 gap-6">
            {data.deals.map((d, i) => (
              <div key={i} className="card p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent-500 text-white flex items-center justify-center text-xl">
                  🔥
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-coffee-900">
                      {d.title}
                    </h3>
                    {d.badge ? (
                      <span className="text-xs bg-coffee-100 px-2 py-1 rounded-full">
                        {d.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-coffee-700">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu preview */}
      <section className="section bg-coffee-50" id="menu">
        <div className="container">
          <SectionTitle
            title="Our Menu"
            subtitle="Choose a category or browse all"
            center
          />
          {/* This section renders menu categories and items */}
          <MenuGrid categories={cat} items={items} />
          <div className="mt-10 text-center">
            <a href="/menu" className="btn-primary">
              See Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="section bg-white" id="reservation">
        <div className="container">
          <SectionTitle
            title="Book Your Table"
            subtitle="For Online Reservation"
            center
          />
          <ReservationForm />
        </div>
      </section>

      {/* QR code */}
      <QRSection />

      {/* Contact & Map */}
      <section className="section bg-coffee-50">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionTitle title="Contact Us" />
            {/* This section handles cafe contact info rendering */}
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
          <MapEmbed query={c.location} className="mt-6 md:mt-0" />
        </div>
      </section>
    </main>
  );
}
