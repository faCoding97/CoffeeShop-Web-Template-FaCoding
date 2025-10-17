// Data loader: imports static JSON and provides helpers
import raw from "@/data/data.json";
import type { DataSchema, MenuItem } from "@/types";
import { slugify } from "./slug";

export const data = raw as DataSchema;

// Unique list of categories inferred from menu items
export function getCategories(): string[] {
  const set = new Set<string>(data.menuItems.map((m) => m.category));
  return Array.from(set);
}

// Find items by category slug (e.g., 'hot-coffee')
export function getItemsByCategorySlug(slug: string): MenuItem[] {
  return data.menuItems.filter((m) => slugify(m.category) === slug);
}

// Single item finder by slug of name (optional usage)
export function getItemByNameSlug(slug: string): MenuItem | undefined {
  return data.menuItems.find((m) => slugify(m.name) === slug);
}

// All items
export function getAllItems(): MenuItem[] {
  return data.menuItems;
}

// All routes for sitemap
export function getMenuCategoryRoutes(): string[] {
  return getCategories().map((c) => `/menu/${slugify(c)}`);
}