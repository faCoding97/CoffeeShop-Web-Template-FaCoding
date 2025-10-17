"use client";
// Features grid showcasing cafe highlights
import { data } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="section bg-white" id="features">
      <div className="container">
        <SectionTitle
          title="Fresh & Organic Beans"
          subtitle="What makes us different"
          center
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card p-6">
              <div className="h-12 w-12 rounded-xl bg-latte-300 flex items-center justify-center mb-4">
                <span className="text-coffee-900 text-xl">☕</span>
              </div>
              <h3 className="font-bold text-lg text-coffee-900">{f.title}</h3>
              <p className="mt-2 text-coffee-700">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
