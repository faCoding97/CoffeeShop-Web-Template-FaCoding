// Types for cafe data and menu items
export interface CafeInfo {
  name: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  location: string;
  email: string;
  qrCodeUrl: string;
  openingHours: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Deal {
  title: string;
  description: string;
  badge?: string;
}

export interface MenuItem {
  category: string;
  name: string;
  description: string;
  image: string;
  price: string;
  ingredients: string[];
}

export interface DataSchema {
  siteUrl: string;
  cafeInfo: CafeInfo;
  story: string;
  vision: string;
  features: Feature[];
  deals: Deal[];
  menuItems: MenuItem[];
}