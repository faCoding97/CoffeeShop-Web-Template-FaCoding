"use client";
// Component for rendering menu categories + filterable grid of items with animations
import { useMemo, useState } from "react";
import { MenuItem } from "@/types";
import { slugify } from "@/lib/slug";
import MenuModal from "./MenuModal";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  categories: string[];
  items: MenuItem[];
  defaultCategorySlug?: string;
};

export default function MenuGrid({
  categories,
  items,
  defaultCategorySlug,
}: Props) {
  const all = "all";
  const [active, setActive] = useState<string>(defaultCategorySlug || all);
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const filtered = useMemo(() => {
    if (active === all) return items;
    return items.filter((m) => slugify(m.category) === active);
  }, [active, items]);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setActive(all)}
          className={`px-4 py-2 rounded-full border ${
            active === all
              ? "bg-accent-500 text-white border-accent-500"
              : "border-coffee-200 text-coffee-800 hover:border-accent-500"
          }`}>
          All
        </button>
        {categories.map((c) => {
          const slug = slugify(c);
          return (
            <button
              key={c}
              onClick={() => setActive(slug)}
              className={`px-4 py-2 rounded-full border ${
                active === slug
                  ? "bg-accent-500 text-white border-accent-500"
                  : "border-coffee-200 text-coffee-800 hover:border-accent-500"
              }`}>
              {c}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
            className="card overflow-hidden group">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-white/90 text-coffee-900 text-xs font-semibold px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-coffee-900">{item.name}</h3>
              <p className="mt-1 text-sm text-coffee-700 line-clamp-2">
                {item.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-extrabold text-accent-600">
                  {item.price}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelected(item)}
                    className="btn-primary text-sm">
                    Details
                  </button>
                  <Link
                    href={`/menu/${slugify(item.category)}`}
                    className="text-sm text-coffee-700 hover:text-accent-600">
                    More in {item.category}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <MenuModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
