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

// Data provider interfaces (Dependency Inversion Principle)
export interface DataProvider<T> {
  getData(): T[];
}

export interface ProductDataProvider extends DataProvider<Product> {}
export interface BlogDataProvider extends DataProvider<BlogPost> {}
export interface PartnerDataProvider extends DataProvider<Partner> {}