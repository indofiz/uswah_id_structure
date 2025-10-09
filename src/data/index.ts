// Data layer following Single Responsibility Principle (SRP)
import type {
  Product,
  BlogPost,
  Partner,
  DataProvider,
  ProductDetail
} from "@/types";
import {
  Smartphone,
  FileText,
  Settings,
  GraduationCap,
  Building2,
  UserCheck,
  Wallet,
  PieChart,
  CreditCard,
  Bell,
  Users,
  BookOpen,
  Gift,
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  Apple,
  Bot
} from "lucide-react";

// Product data provider
export class ProductsDataProvider implements DataProvider<Product> {
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
export class BlogDataProviderImpl implements DataProvider<BlogPost> {
  getData(): BlogPost[] {
    return [
      {
        id: 1,
        title: "The Future of Digital Learning in Indonesia",
        description: "Exploring how advanced educational technologies are transforming the learning landscape across Indonesian institutions.",
        date: "March 15, 2024",
        category: "Education Technology",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
      },
      {
        id: 2,
        title: "Advanced Analytics Dashboard Features Released",
        description: "Discover the powerful new analytics tools that help educators make data-driven decisions for better outcomes.",
        date: "March 10, 2024",
        category: "Product Update",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
      },
      {
        id: 3,
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
export class PartnersDataProvider implements DataProvider<Partner> {
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

// Product Detail data provider
export class SalamMobileDataProvider {
  getData(): ProductDetail {
    return {
      id: "salam-mobile",
      name: "Salam Mobile",
      tagline: "Transformasi Digital untuk Ekosistem Pendidikan Modern",
      description: "Aplikasi berbasis mobile yang memudahkan para peserta didik dan juga orang tua peserta didik dalam mengelola setiap aktifitas pendidikan dengan mudah, cepat, dan terintegrasi.",
      heroImage: "/products/salam-mobile-hero.png",
      features: [
        {
          icon: UserCheck,
          title: "PPDB Online",
          description: "Pendaftaran peserta didik baru secara digital dan terintegrasi dengan sistem pembayaran"
        },
        {
          icon: CreditCard,
          title: "Pembayaran Langsung",
          description: "Pembayaran langsung ke rekening yayasan dengan koneksi host-to-host bank"
        },
        {
          icon: BookOpen,
          title: "Informasi Akademik",
          description: "Update informasi akademik real-time untuk siswa dan orang tua"
        },
        {
          icon: Bell,
          title: "Notifikasi & Pesan",
          description: "Sistem notifikasi via SMS dan email untuk komunikasi efektif"
        },
        {
          icon: Building2,
          title: "Informasi Sekolah",
          description: "Tampilan informasi sekolah yang lengkap dan mudah diakses"
        },
        {
          icon: Gift,
          title: "Program Loyalitas",
          description: "Program loyalitas untuk meningkatkan engagement siswa dan orang tua"
        }
      ],
      benefits: {
        users: [
          {
            icon: Zap,
            title: "Pembayaran Mudah",
            description: "Bayar biaya sekolah kapan saja, dimana saja dengan berbagai metode pembayaran",
            audience: "user"
          },
          {
            icon: BarChart3,
            title: "Riwayat Pembayaran",
            description: "Lihat dan download riwayat pembayaran lengkap dengan bukti transaksi",
            audience: "user"
          },
          {
            icon: FileText,
            title: "Registrasi Digital",
            description: "Daftar sekolah baru secara online tanpa perlu datang ke lokasi",
            audience: "user"
          },
          {
            icon: Users,
            title: "Monitoring Orang Tua",
            description: "Pantau perkembangan akademik anak secara real-time dari smartphone",
            audience: "user"
          }
        ],
        institutions: [
          {
            icon: TrendingUp,
            title: "Efektivitas Personil",
            description: "Meningkatkan efektivitas personil dengan otomasi proses administrasi",
            audience: "institution"
          },
          {
            icon: Shield,
            title: "Pelacakan Finansial",
            description: "Pelacakan finansial langsung dengan laporan yang transparan dan akurat",
            audience: "institution"
          },
          {
            icon: PieChart,
            title: "Dukungan Keputusan",
            description: "Dashboard analytics untuk pengambilan keputusan berbasis data",
            audience: "institution"
          },
          {
            icon: GraduationCap,
            title: "Kualitas Pendidikan",
            description: "Peningkatan kualitas pendidikan digital dengan sistem terintegrasi",
            audience: "institution"
          }
        ]
      },
      platforms: [
        {
          name: "iOS",
          icon: Apple,
          available: true
        },
        {
          name: "Android",
          icon: Bot,
          available: true
        }
      ],
      ctaText: "Mulai Transformasi Digital",
      ctaLink: "mailto:uswah@salam-alazhar.id"
    };
  }
}

// Factory pattern for creating data providers (Dependency Inversion)
export class DataProviderFactory {
  static createProductsProvider(): DataProvider<Product> {
    return new ProductsDataProvider();
  }

  static createBlogProvider(): DataProvider<BlogPost> {
    return new BlogDataProviderImpl();
  }

  static createPartnersProvider(): DataProvider<Partner> {
    return new PartnersDataProvider();
  }

  static createSalamMobileProvider(): SalamMobileDataProvider {
    return new SalamMobileDataProvider();
  }
}