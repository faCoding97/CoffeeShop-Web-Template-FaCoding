// About page: We Are ElixCode
import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { data } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We are ElixCode Coffee Shop — brewing community one cup at a time.",
};

export default function AboutPage() {
  return (
    <main className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-soft">
          <Image
            src="/images/about.jpg"
            alt="About us"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <SectionTitle title={`We Are ${data.cafeInfo.name}`} />
          <p className="text-coffee-700">{data.story}</p>
          <p className="mt-4 text-coffee-700">{data.vision}</p>
        </div>
      </div>
    </main>
  );
}
