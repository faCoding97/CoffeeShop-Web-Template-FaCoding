// Menu index page: shows all categories with filter controls
import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import MenuGrid from "@/components/MenuGrid";
import { getAllItems, getCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our full digital menu: hot coffee, cold drinks, pastries, snacks, and more."
};

export default function MenuPage() {
  const categories = getCategories();
  const items = getAllItems();
  return (
    <main className="section">
      <div className="container">
        <SectionTitle title="Our Full Menu" center />
        <MenuGrid categories={categories} items={items} />
      </div>
    </main>
  );
}