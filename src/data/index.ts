// Data layer following Single Responsibility Principle (SRP)
import type {
  Product,
  BlogPost,
  Partner,
  ProductDataProvider,
  BlogDataProvider,
  PartnerDataProvider
} from "@/types";
import {
  Smartphone,
  FileText,
  Settings,
  GraduationCap,
  Building2,
  UserCheck,
  Wallet,
  PieChart
} from "lucide-react";

// Product data provider
export class ProductsDataProvider implements ProductDataProvider {
  getData(): Product[] {
    return [
      {
        title: "Mobile Application",
        description: "Native mobile apps for iOS and Android with seamless user experience and offline capabilities.",
        icon: Smartphone,
        frameType: "mobile",
        deviceColor: "#45ABD5",
        screenContent: {
          type: "app",
          primaryColor: "#45ABD5",
          secondaryColor: "#01193F"
        },
        iconColor: "#45ABD5",
        bgColor: "#ffffff"
      },
      {
        title: "e-Rapor System",
        description: "Digital report card system with automated grading, progress tracking, and parent communication.",
        icon: FileText,
        frameType: "desktop",
        deviceColor: "#01193F",
        screenContent: {
          type: "report",
          primaryColor: "#01193F",
          secondaryColor: "#45ABD5"
        },
        iconColor: "#01193F",
        bgColor: "#ffffff"
      },
      {
        title: "Backoffice System",
        description: "Comprehensive administrative platform for managing operations, finances, and institutional workflows.",
        icon: Settings,
        frameType: "desktop",
        deviceColor: "#45ABD5",
        screenContent: {
          type: "dashboard",
          primaryColor: "#45ABD5",
          secondaryColor: "#01193F"
        },
        iconColor: "#45ABD5",
        bgColor: "#ffffff"
      },
      {
        title: "Learning Management System",
        description: "Advanced LMS with interactive content delivery, assessment tools, and learning analytics.",
        icon: GraduationCap,
        frameType: "desktop",
        deviceColor: "#01193F",
        screenContent: {
          type: "lms",
          primaryColor: "#01193F",
          secondaryColor: "#45ABD5"
        },
        iconColor: "#01193F",
        bgColor: "#ffffff"
      },
      {
        title: "Yazan System",
        description: "Digital writing and documentation platform with collaborative editing and version control.",
        icon: FileText,
        frameType: "desktop",
        deviceColor: "#45ABD5",
        screenContent: {
          type: "editor",
          primaryColor: "#45ABD5",
          secondaryColor: "#01193F"
        },
        iconColor: "#45ABD5",
        bgColor: "#ffffff"
      },
      {
        title: "AMS - Academic Management",
        description: "Complete academic management solution covering curriculum, scheduling, and student lifecycle management.",
        icon: Building2,
        frameType: "desktop",
        deviceColor: "#01193F",
        screenContent: {
          type: "academic",
          primaryColor: "#01193F",
          secondaryColor: "#45ABD5"
        },
        iconColor: "#01193F",
        bgColor: "#ffffff"
      },
      {
        title: "HRIS - Human Resources",
        description: "Integrated HR management system for payroll, attendance, performance, and employee development.",
        icon: UserCheck,
        frameType: "desktop",
        deviceColor: "#45ABD5",
        screenContent: {
          type: "hr",
          primaryColor: "#45ABD5",
          secondaryColor: "#01193F"
        },
        iconColor: "#45ABD5",
        bgColor: "#ffffff"
      },
      {
        title: "ZISWAF Management",
        description: "Comprehensive system for managing Zakat, Infaq, Sedekah, and Wakaf with transparency and accountability.",
        icon: Wallet,
        frameType: "mobile",
        deviceColor: "#01193F",
        screenContent: {
          type: "donation",
          primaryColor: "#01193F",
          secondaryColor: "#45ABD5"
        },
        iconColor: "#01193F",
        bgColor: "#ffffff"
      },
      {
        title: "BI Dashboard",
        description: "Business Intelligence dashboard with real-time analytics, reporting, and data visualization tools.",
        icon: PieChart,
        frameType: "desktop",
        deviceColor: "#45ABD5",
        screenContent: {
          type: "analytics",
          primaryColor: "#45ABD5",
          secondaryColor: "#01193F"
        },
        iconColor: "#45ABD5",
        bgColor: "#ffffff"
      }
    ];
  }
}

// Blog data provider
export class BlogDataProviderImpl implements BlogDataProvider {
  getData(): BlogPost[] {
    return [
      {
        title: "The Future of Digital Learning in Indonesia",
        description: "Exploring how advanced educational technologies are transforming the learning landscape across Indonesian institutions.",
        date: "March 15, 2024",
        category: "Education Technology",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
      },
      {
        title: "Advanced Analytics Dashboard Features Released",
        description: "Discover the powerful new analytics tools that help educators make data-driven decisions for better outcomes.",
        date: "March 10, 2024",
        category: "Product Update",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
      },
      {
        title: "Case Study: 300% Increase in Student Engagement",
        description: "How SMA Jakarta leveraged our LMS solution to achieve remarkable improvements in student participation.",
        date: "March 5, 2024",
        category: "Case Study",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center"
      }
    ];
  }
}

// Partner data provider
export class PartnersDataProvider implements PartnerDataProvider {
  getData(): Partner[] {
    return [
      { name: "SDN Jakarta", logo: "SDN", type: "Elementary Schools" },
      { name: "SMP Nasional", logo: "SMP", type: "Junior High Schools" },
      { name: "SMA Negeri", logo: "SMA", type: "Senior High Schools" },
      { name: "SMK Indonesia", logo: "SMK", type: "Vocational Schools" },
      { name: "Universitas", logo: "UNI", type: "Universities" },
      { name: "Pesantren", logo: "PT", type: "Islamic Boarding Schools" }
    ];
  }
}

// Factory pattern for creating data providers (Dependency Inversion)
export class DataProviderFactory {
  static createProductsProvider(): ProductDataProvider {
    return new ProductsDataProvider();
  }

  static createBlogProvider(): BlogDataProvider {
    return new BlogDataProviderImpl();
  }

  static createPartnersProvider(): PartnerDataProvider {
    return new PartnersDataProvider();
  }
}