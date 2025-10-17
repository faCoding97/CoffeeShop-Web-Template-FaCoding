// Category page: statically generated for each category
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import MenuGrid from "@/components/MenuGrid";
import { getCategories, getItemsByCategorySlug } from "@/lib/data";
import { slugify } from "@/lib/slug";

type Props = { params: { category: string } };

export function generateStaticParams() {
  return getCategories().map((c) => ({ category: slugify(c) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = params.category.replace(/-/g, " ");
  return {
    title: `Menu · ${cat}`,
    description: `Browse our ${cat} selections prepared by our baristas.`,
    alternates: { canonical: `/menu/${params.category}` }
  };
}

export default function CategoryPage({ params }: Props) {
  const items = getItemsByCategorySlug(params.category);
  const categories = getCategories();
  if (!items || items.length === 0) return notFound();
  const current = categories.find((c) => slugify(c) === params.category) || "Menu";
  return (
    <main className="section">
      <div className="container">
        <SectionTitle title={`Our ${current}`} center />
        <MenuGrid categories={categories} items={items} defaultCategorySlug={params.category} />
      </div>
    </main>
  );
}