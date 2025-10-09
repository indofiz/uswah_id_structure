// Types following Interface Segregation Principle (ISP)
import type { LucideIcon } from "lucide-react";

// Product-related types
export interface ProductScreenContent {
  type: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface Product {
  title: string;
  description: string;
  icon: LucideIcon;
  frameType: "mobile" | "desktop";
  deviceColor: string;
  screenContent: ProductScreenContent;
  iconColor: string;
  bgColor: string;
}

// Blog-related types
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  author?: string;
  content?: string;
  tags?: string[];
}

// Partner-related types
export interface Partner {
  name: string;
  logo: string;
  type: string;
}

// Navigation-related types
export interface NavigationItem {
  href: string;
  label: string;
}

export interface NavigationProps {
  items: NavigationItem[];
  logoSrc: string;
  logoAlt: string;
  companyName: string;
  companyShortName: string;
}

// Product Detail types
export interface ProductFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProductBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
  audience: "user" | "institution";
}

export interface ProductDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  features: ProductFeature[];
  benefits: {
    users: ProductBenefit[];
    institutions: ProductBenefit[];
  };
  platforms: {
    name: string;
    icon: LucideIcon;
    available: boolean;
  }[];
  ctaText: string;
  ctaLink: string;
}

// Data provider interfaces (Dependency Inversion Principle)
export interface DataProvider<T> {
  getData(): T[];
}

// You can use DataProvider<Product>, DataProvider<BlogPost>, and DataProvider<Partner> directly instead of empty interfaces.