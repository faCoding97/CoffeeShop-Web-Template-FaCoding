"use client";
// Component: Reusable section heading with subtle underline style
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({ title, subtitle, center }: Props) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold tracking-tight text-coffee-900">
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-coffee-600">
          {subtitle}
        </motion.p>
      ) : null}
      <div
        className={`mt-4 h-1 w-24 bg-accent-500 rounded ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
