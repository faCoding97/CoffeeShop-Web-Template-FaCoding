"use client";
// Modal for item details (price, ingredients, description)
import { MenuItem } from "@/types";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  item: MenuItem | null;
  onClose: () => void;
};

export default function MenuModal({ item, onClose }: Props) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-2 hover:bg-coffee-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {item.image && (
              <div className="relative w-full h-56 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <h3 className="mt-4 text-2xl font-extrabold text-coffee-900">
              {item.name}
            </h3>
            <p className="mt-2 text-coffee-700">{item.description}</p>
            <p className="mt-3 font-bold text-accent-600">{item.price}</p>
            <div className="mt-4">
              <h4 className="font-semibold text-coffee-900">Ingredients</h4>
              <ul className="mt-2 list-disc list-inside text-coffee-700">
                {item.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
