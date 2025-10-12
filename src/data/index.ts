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
  Bot,
  LayoutDashboard,
  FileBarChart,
  Sliders,
  UsersRound,
  Database,
  ClipboardList,
  DollarSign,
  CheckCircle2,
  Clock,
  Globe,
  FileCheck,
  CloudDownload,
  Printer,
  BookMarked,
  BarChart2,
  CalendarCheck,
  Video,
  MessageSquare,
  Puzzle,
  Wifi,
  Cloud,
  FileEdit,
  Layers,
  MonitorPlay,
  Award,
  Target,
  Package,
  MapPin,
  ScanLine,
  History,
  AlertCircle,
  HandHeart,
  Coins,
  Receipt,
  Landmark,
  LineChart,
  Filter,
  Download
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
      heroImage: "/product_mock/illust-mobile.svg",
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

// Salam Admin data provider
export class SalamAdminDataProvider {
  getData(): ProductDetail {
    return {
      id: "salam-admin",
      name: "Salam Admin",
      tagline: "Sistem Informasi Pendidikan dengan Administrasi Terpadu",
      description: "Sistem informasi pendidikan diperkuat dengan adanya sistem administrasi yang menjadi pusat dalam setiap pengelolaan yang ada di internal perusahaan atau yayasan.",
      heroImage: "/product_mock/salam-admin.png",
      features: [
        {
          icon: LayoutDashboard,
          title: "Dashboard Monitoring",
          description: "Dashboard untuk monitoring seluruh aktivitas institusi pendidikan"
        },
        {
          icon: FileBarChart,
          title: "Pelaporan Komprehensif",
          description: "Sistem pelaporan lengkap untuk kebutuhan institusi pendidikan"
        },
        {
          icon: Sliders,
          title: "Konfigurasi Layanan Terintegrasi",
          description: "Pengaturan dan konfigurasi layanan secara terpusat"
        },
        {
          icon: UsersRound,
          title: "Manajemen Pengguna",
          description: "Sistem manajemen pengguna dengan kontrol akses yang aman"
        }
      ],
      benefits: {
        users: [
          {
            icon: Database,
            title: "Manajemen Data Kemuridan",
            description: "Pengelolaan data siswa secara terpusat dan terstruktur",
            audience: "user"
          },
          {
            icon: ClipboardList,
            title: "Manajemen Pendaftaran Peserta Didik Baru",
            description: "Sistem pendaftaran siswa baru yang terintegrasi dan efisien",
            audience: "user"
          }
        ],
        institutions: [
          {
            icon: DollarSign,
            title: "Pelaporan Data Transaksi Keuangan",
            description: "Laporan keuangan lengkap untuk transparansi institusi",
            audience: "institution"
          },
          {
            icon: BarChart3,
            title: "Pelaporan Data Settlement Bank",
            description: "Pelaporan settlement bank untuk rekonsiliasi pembayaran",
            audience: "institution"
          },
          {
            icon: PieChart,
            title: "Dashboard Analytic",
            description: "Dashboard analytic untuk sekolah dan instansi pendidikan",
            audience: "institution"
          },
          {
            icon: UsersRound,
            title: "Manajemen Pengguna",
            description: "Kontrol pengguna sistem dengan berbagai tingkat akses",
            audience: "institution"
          }
        ]
      },
      platforms: [
        {
          name: "Web",
          icon: Globe,
          available: true
        }
      ],
      ctaText: "Konsultasi Implementasi Sistem",
      ctaLink: "mailto:uswah@salam-alazhar.id"
    };
  }
}

// e-Rapor data provider
export class ERaporDataProvider {
  getData(): ProductDetail {
    return {
      id: "e-rapor",
      name: "Salam e-Rapor",
      tagline: "Sistem e-Rapor Cloud Berbasis Web dengan Akses 24/7/365",
      description: "e-Rapor System merupakan layanan cloud berbasis web yang dapat diakses online secara aman 24/7/365. Mengelola penilaian di semua kurikulum sekolah, mulai dari input nilai hingga cetak rapor (digital dan offline).",
      heroImage: "/product_mock/erapor.png",
      features: [
        {
          icon: FileCheck,
          title: "Penilaian",
          description: "Sistem penilaian komprehensif untuk semua jenis evaluasi akademik"
        },
        {
          icon: CalendarCheck,
          title: "Absensi",
          description: "Manajemen kehadiran siswa yang terintegrasi dengan sistem rapor"
        },
        {
          icon: Database,
          title: "Integrasi Data",
          description: "Integrasi data murid, guru dan sekolah dengan sistem Mobile Apps"
        },
        {
          icon: CloudDownload,
          title: "Offline Mode",
          description: "Offline mode dengan fungsi export dan import data"
        },
        {
          icon: BookOpen,
          title: "Integrasi LMS",
          description: "Integrasi nilai dengan Learning Management System (LMS)"
        },
        {
          icon: Printer,
          title: "Cetak e-Rapor",
          description: "Cetak e-Rapor dalam format digital dan offline"
        },
        {
          icon: BookMarked,
          title: "Kurikulum",
          description: "Mendukung berbagai kurikulum (K13, Merdeka)"
        },
        {
          icon: FileBarChart,
          title: "Laporan-laporan",
          description: "Berbagai jenis laporan akademik dan administratif"
        },
        {
          icon: BarChart2,
          title: "Dashboard Analytic",
          description: "Dashboard analytic untuk penilaian dan monitoring kinerja siswa"
        }
      ],
      benefits: {
        users: [
          {
            icon: Clock,
            title: "Akses Kapan Saja",
            description: "Akses sistem 24/7/365 dari mana saja dengan koneksi internet",
            audience: "user"
          },
          {
            icon: Shield,
            title: "Keamanan Data",
            description: "Sistem cloud yang aman dengan backup data otomatis",
            audience: "user"
          }
        ],
        institutions: [
          {
            icon: TrendingUp,
            title: "Efisiensi Penilaian",
            description: "Proses penilaian lebih cepat dan terorganisir dengan sistem terintegrasi",
            audience: "institution"
          },
          {
            icon: CheckCircle2,
            title: "Akurasi Rapor",
            description: "Minimalisir kesalahan dengan sistem validasi otomatis",
            audience: "institution"
          },
          {
            icon: PieChart,
            title: "Analisis Kinerja",
            description: "Dashboard analitik untuk monitoring kinerja akademik siswa dan sekolah",
            audience: "institution"
          },
          {
            icon: FileText,
            title: "Dukungan Multi Kurikulum",
            description: "Fleksibilitas dalam menerapkan berbagai jenis kurikulum",
            audience: "institution"
          }
        ]
      },
      platforms: [
        {
          name: "Web",
          icon: Globe,
          available: true
        }
      ],
      ctaText: "Konsultasi Sistem e-Rapor",
      ctaLink: "mailto:uswah@salam-alazhar.id"
    };
  }
}

// LMS Moodle data provider
export class LMSMoodleDataProvider {
  getData(): ProductDetail {
    return {
      id: "lms-moodle",
      name: "LMS Moodle",
      tagline: "Solusi Digital Layanan Pendidikan Kolaboratif",
      description: "LMS berbasis Moodle (modular object-oriented dynamic learning environment) menjadi alternatif pilihan platform pembelajaran digital secara kolaboratif. Sistem dapat terhubung dengan SIAK (Sistem Informasi Akademik) untuk integrasi data yang lebih baik.",
      heroImage: "/product_mock/lms-moodle.png",
      features: [
        {
          icon: UserCheck,
          title: "User Enrollment",
          description: "Sistem pendaftaran dan manajemen pengguna yang mudah dan terstruktur"
        },
        {
          icon: GraduationCap,
          title: "Dynamic Learning",
          description: "Platform pembelajaran dinamis dengan konten interaktif dan adaptif"
        },
        {
          icon: Video,
          title: "Embedded Video",
          description: "Integrasi video pembelajaran langsung dalam platform LMS"
        },
        {
          icon: FileCheck,
          title: "Online Exam",
          description: "Sistem ujian online dengan berbagai tipe soal dan penilaian otomatis"
        },
        {
          icon: BarChart2,
          title: "Report & Analytics",
          description: "Laporan dan analitik komprehensif untuk monitoring progress pembelajaran"
        },
        {
          icon: Wifi,
          title: "Live Learning",
          description: "Pembelajaran langsung secara real-time dengan fitur interaktif"
        },
        {
          icon: MessageSquare,
          title: "Discussion Forum",
          description: "Forum diskusi untuk kolaborasi dan interaksi antar pengguna"
        },
        {
          icon: ClipboardList,
          title: "Assignment Management",
          description: "Manajemen tugas dengan sistem pengumpulan dan penilaian terintegrasi"
        },
        {
          icon: Puzzle,
          title: "Plugin Capabilities",
          description: "Dukungan plugin untuk memperluas fungsionalitas sistem"
        },
        {
          icon: Database,
          title: "System Integration",
          description: "Integrasi dengan sistem akademik (SIAK) dan sistem lainnya"
        },
        {
          icon: Smartphone,
          title: "Multi-Platform Access",
          description: "Akses melalui Android dan iOS untuk pembelajaran di mana saja"
        }
      ],
      benefits: {
        users: [
          {
            icon: Users,
            title: "Collaborative Learning",
            description: "Pembelajaran kolaboratif dengan fitur diskusi dan kerja kelompok",
            audience: "user"
          },
          {
            icon: Smartphone,
            title: "Multi-Platform",
            description: "Akses pembelajaran melalui web, Android, dan iOS",
            audience: "user"
          },
          {
            icon: Wifi,
            title: "Realtime Interactions",
            description: "Interaksi real-time dengan instruktur dan sesama peserta",
            audience: "user"
          }
        ],
        institutions: [
          {
            icon: FileCheck,
            title: "Exam Implementation",
            description: "Implementasi ujian online yang fleksibel dan aman",
            audience: "institution"
          },
          {
            icon: ClipboardList,
            title: "Assignment Collection",
            description: "Pengumpulan tugas yang terorganisir dan mudah dinilai",
            audience: "institution"
          },
          {
            icon: Cloud,
            title: "Cloud-Based System",
            description: "Sistem berbasis cloud yang dapat diakses 24/7 dari mana saja",
            audience: "institution"
          },
          {
            icon: BarChart2,
            title: "Learning Analytics",
            description: "Analitik pembelajaran untuk evaluasi dan peningkatan kualitas",
            audience: "institution"
          }
        ]
      },
      platforms: [
        {
          name: "Web",
          icon: Globe,
          available: true
        },
        {
          name: "Android",
          icon: Bot,
          available: true
        },
        {
          name: "iOS",
          icon: Apple,
          available: true
        }
      ],
      ctaText: "Konsultasi LMS Moodle",
      ctaLink: "mailto:uswah@salam-alazhar.id"
    };
  }
}

// LMS Yazan Edu data provider
export class LMSYazanDataProvider {
  getData(): ProductDetail {
    return {
      id: "lms-yazan",
      name: "LMS Yazan Edu",
      tagline: "Platform Pembelajaran Digital Kreatif untuk Anak",
      description: "LMS Yazan Edu adalah platform pembelajaran digital yang dirancang khusus untuk anak-anak dengan pendekatan interaktif dan menyenangkan. Mengembangkan kreativitas dan kemampuan belajar anak melalui materi edukatif yang engaging dan gamified.",
      heroImage: "/product_mock/illust-yazan.png",
      features: [
        {
          icon: FileEdit,
          title: "Materi Interaktif",
          description: "Konten pembelajaran interaktif dengan gambar, video, dan animasi menarik"
        },
        {
          icon: Video,
          title: "Video Pembelajaran",
          description: "Library video pembelajaran yang dirancang khusus untuk anak"
        },
        {
          icon: Target,
          title: "Learning by Doing",
          description: "Pembelajaran praktis dengan aktivitas dan eksperimen interaktif"
        },
        {
          icon: Award,
          title: "Sistem Reward",
          description: "Gamifikasi dengan sistem badge dan reward untuk motivasi belajar"
        },
        {
          icon: MonitorPlay,
          title: "Multi-Media Content",
          description: "Beragam format konten multimedia untuk berbagai gaya belajar"
        },
        {
          icon: Layers,
          title: "Level Pembelajaran",
          description: "Sistem level bertahap yang disesuaikan dengan kemampuan anak"
        },
        {
          icon: BarChart2,
          title: "Progress Tracking",
          description: "Tracking perkembangan belajar anak secara detail"
        },
        {
          icon: BookOpen,
          title: "E-Library",
          description: "Perpustakaan digital dengan koleksi materi edukatif lengkap"
        }
      ],
      benefits: {
        users: [
          {
            icon: Zap,
            title: "Belajar Menyenangkan",
            description: "Pengalaman belajar yang fun dan engaging dengan gamifikasi",
            audience: "user"
          },
          {
            icon: Target,
            title: "Pengembangan Kreativitas",
            description: "Merangsang kreativitas anak melalui aktivitas interaktif",
            audience: "user"
          },
          {
            icon: Smartphone,
            title: "Akses Multi-Device",
            description: "Belajar dari laptop, tablet, atau smartphone dengan mudah",
            audience: "user"
          }
        ],
        institutions: [
          {
            icon: Users,
            title: "Student Engagement",
            description: "Meningkatkan engagement siswa dengan konten interaktif",
            audience: "institution"
          },
          {
            icon: BarChart2,
            title: "Learning Analytics",
            description: "Analitik mendalam untuk monitoring progress pembelajaran siswa",
            audience: "institution"
          },
          {
            icon: Award,
            title: "Motivasi Belajar",
            description: "Sistem reward meningkatkan motivasi dan antusiasme belajar",
            audience: "institution"
          },
          {
            icon: CheckCircle2,
            title: "Kurikulum Terstruktur",
            description: "Materi pembelajaran terstruktur sesuai tahapan perkembangan anak",
            audience: "institution"
          }
        ]
      },
      platforms: [
        {
          name: "Web",
          icon: Globe,
          available: true
        },
        {
          name: "Android",
          icon: Bot,
          available: true
        },
        {
          name: "iOS",
          icon: Apple,
          available: true
        }
      ],
      ctaText: "Konsultasi LMS Yazan Edu",
      ctaLink: "mailto:uswah@salam-alazhar.id"
    };
  }
}

// AMS (Asset Management System) data provider
export class AMSDataProvider {
  getData(): ProductDetail {
    return {
      id: "ams",
      name: "Asset Management System",
      tagline: "Sistem Manajemen Aset Digital Terintegrasi",
      description: "Asset Management System (AMS) adalah solusi digital untuk mengelola aset institusi secara efisien dengan fitur tracking lokasi, inventory management, dan mobile scanning. Sistem terintegrasi untuk monitoring dan pelaporan aset secara real-time.",
      heroImage: "/product_mock/illust-ams.png",
      features: [
        {
          icon: LayoutDashboard,
          title: "Dashboard Monitoring",
          description: "Dashboard real-time untuk monitoring status dan nilai aset institusi"
        },
        {
          icon: Package,
          title: "Inventory Management",
          description: "Manajemen inventory aset dengan kategorisasi dan pencarian yang mudah"
        },
        {
          icon: MapPin,
          title: "Location Tracking",
          description: "Pelacakan lokasi aset dengan integrasi peta dan geolocation"
        },
        {
          icon: ScanLine,
          title: "Mobile Scanning",
          description: "Aplikasi mobile untuk scanning barcode/QR code aset di lapangan"
        },
        {
          icon: History,
          title: "Asset History",
          description: "Riwayat lengkap perpindahan dan perubahan status aset"
        },
        {
          icon: AlertCircle,
          title: "Alert & Notification",
          description: "Notifikasi otomatis untuk maintenance, penyusutan, dan anomali aset"
        },
        {
          icon: FileBarChart,
          title: "Comprehensive Reporting",
          description: "Laporan lengkap nilai aset, penyusutan, dan analisis keuangan"
        },
        {
          icon: Database,
          title: "Centralized Database",
          description: "Database terpusat untuk semua informasi aset institusi"
        }
      ],
      benefits: {
        users: [
          {
            icon: Smartphone,
            title: "Mobile Access",
            description: "Akses dan update data aset melalui aplikasi mobile di lapangan",
            audience: "user"
          },
          {
            icon: ScanLine,
            title: "Easy Asset Scanning",
            description: "Scan QR code atau barcode untuk identifikasi aset dengan cepat",
            audience: "user"
          },
          {
            icon: MapPin,
            title: "Location Awareness",
            description: "Mengetahui lokasi aset secara real-time dengan fitur GPS",
            audience: "user"
          }
        ],
        institutions: [
          {
            icon: TrendingUp,
            title: "Optimasi Aset",
            description: "Optimalisasi penggunaan dan alokasi aset untuk efisiensi maksimal",
            audience: "institution"
          },
          {
            icon: Shield,
            title: "Asset Security",
            description: "Keamanan aset dengan tracking dan audit trail yang lengkap",
            audience: "institution"
          },
          {
            icon: PieChart,
            title: "Financial Analysis",
            description: "Analisis nilai aset, depresiasi, dan perencanaan keuangan",
            audience: "institution"
          },
          {
            icon: CheckCircle2,
            title: "Compliance & Audit",
            description: "Memenuhi standar audit dan compliance manajemen aset",
            audience: "institution"
          }
        ]
      },
      platforms: [
        {
          name: "Web",
          icon: Globe,
          available: true
        },
        {
          name: "Android",
          icon: Bot,
          available: true
        },
        {
          name: "iOS",
          icon: Apple,
          available: true
        }
      ],
      ctaText: "Konsultasi Asset Management System",
      ctaLink: "mailto:uswah@salam-alazhar.id"
    };
  }
}

// ZISWAF Management data provider
export class ZISWAFDataProvider {
  getData(): ProductDetail {
    return {
      id: "ziswaf",
      name: "ZISWAF Management",
      tagline: "Platform Digital Pengelolaan Zakat, Infaq, Sedekah, dan Wakaf",
      description: "Sistem manajemen ZISWAF yang komprehensif untuk mengelola Zakat, Infaq, Sedekah, dan Wakaf dengan transparansi dan akuntabilitas penuh. Platform 'Peduli' memudahkan ribuan pengguna untuk berkontribusi dan mewujudkan masyarakat mandiri & sejahtera.",
      heroImage: "/product_mock/ziswaf.png",
      features: [
        {
          icon: HandHeart,
          title: "Multiple Donation Types",
          description: "Kelola berbagai jenis donasi: Zakat, Infaq, Sedekah, dan Wakaf dalam satu platform"
        },
        {
          icon: Coins,
          title: "Payment Integration",
          description: "Integrasi dengan berbagai metode pembayaran untuk kemudahan berdonasi"
        },
        {
          icon: Receipt,
          title: "Digital Receipt",
          description: "Bukti donasi digital otomatis dengan nomor referensi unik"
        },
        {
          icon: BarChart2,
          title: "Donation Tracking",
          description: "Tracking dan monitoring donasi secara real-time dengan dashboard lengkap"
        },
        {
          icon: Users,
          title: "Donor Management",
          description: "Manajemen data donatur dengan riwayat kontribusi lengkap"
        },
        {
          icon: Landmark,
          title: "Program Management",
          description: "Kelola berbagai program dan kampanye donasi dengan efektif"
        },
        {
          icon: FileBarChart,
          title: "Transparent Reporting",
          description: "Laporan transparan penggunaan dana untuk akuntabilitas publik"
        },
        {
          icon: Bell,
          title: "Campaign Notification",
          description: "Notifikasi kampanye dan update program kepada donatur"
        }
      ],
      benefits: {
        users: [
          {
            icon: Smartphone,
            title: "Donasi Mudah",
            description: "Berdonasi kapan saja, dimana saja melalui aplikasi mobile",
            audience: "user"
          },
          {
            icon: Receipt,
            title: "Bukti Digital",
            description: "Dapatkan bukti donasi digital langsung setelah transaksi",
            audience: "user"
          },
          {
            icon: History,
            title: "Riwayat Donasi",
            description: "Lihat riwayat lengkap kontribusi dan dampak sosial Anda",
            audience: "user"
          }
        ],
        institutions: [
          {
            icon: Shield,
            title: "Transparansi & Akuntabilitas",
            description: "Sistem transparan untuk meningkatkan kepercayaan donatur",
            audience: "institution"
          },
          {
            icon: TrendingUp,
            title: "Optimasi Fundraising",
            description: "Tools untuk mengoptimalkan kampanye penggalangan dana",
            audience: "institution"
          },
          {
            icon: PieChart,
            title: "Analytics Dashboard",
            description: "Dashboard analitik untuk monitoring performa program",
            audience: "institution"
          },
          {
            icon: CheckCircle2,
            title: "Compliance Management",
            description: "Memenuhi standar pengelolaan dana sosial dan keagamaan",
            audience: "institution"
          }
        ]
      },
      platforms: [
        {
          name: "Web",
          icon: Globe,
          available: true
        },
        {
          name: "Android",
          icon: Bot,
          available: true
        },
        {
          name: "iOS",
          icon: Apple,
          available: true
        }
      ],
      ctaText: "Konsultasi ZISWAF Management",
      ctaLink: "mailto:uswah@salam-alazhar.id"
    };
  }
}

// BI Dashboard data provider
export class BIDashboardDataProvider {
  getData(): ProductDetail {
    return {
      id: "bi-dashboard",
      name: "BI Dashboard",
      tagline: "Business Intelligence Dashboard untuk Insight Data Real-time",
      description: "Platform Business Intelligence yang powerful dengan dashboard interaktif untuk visualisasi data, analisis mendalam, dan pelaporan komprehensif. Monitoring kinerja institusi dengan data real-time dari berbagai dashboard overview seperti AKMSF, Nilai, Keuangan, dan lebih banyak lagi.",
      heroImage: "/product_mock/illust-bi-dashboard.png",
      features: [
        {
          icon: LayoutDashboard,
          title: "Multiple Dashboards",
          description: "Berbagai dashboard overview untuk berbagai aspek institusi (YPIA, TKIA, SDIA, SMPIA, SMAIA, LMS, dll)"
        },
        {
          icon: LineChart,
          title: "Real-time Analytics",
          description: "Analisis data real-time dengan visualisasi chart dan grafik yang interaktif"
        },
        {
          icon: PieChart,
          title: "Data Visualization",
          description: "Visualisasi data yang comprehensive dengan pie chart, bar chart, dan line chart"
        },
        {
          icon: Filter,
          title: "Advanced Filtering",
          description: "Filter data berdasarkan periode, kategori, dan parameter custom"
        },
        {
          icon: BarChart2,
          title: "Custom Reports",
          description: "Buat laporan custom sesuai kebutuhan dengan berbagai template"
        },
        {
          icon: Download,
          title: "Export Data",
          description: "Export data dan report ke berbagai format (Excel, PDF, CSV)"
        },
        {
          icon: Users,
          title: "Multi-user Access",
          description: "Akses multi-user dengan permission management berbasis role"
        },
        {
          icon: Database,
          title: "Data Integration",
          description: "Integrasi data dari berbagai sumber sistem (AKMSF, LMS, Keuangan, dll)"
        }
      ],
      benefits: {
        users: [
          {
            icon: BarChart2,
            title: "Easy Data Analysis",
            description: "Analisis data dengan mudah melalui dashboard visual yang intuitif",
            audience: "user"
          },
          {
            icon: Download,
            title: "Quick Reporting",
            description: "Generate laporan dengan cepat untuk berbagai keperluan",
            audience: "user"
          },
          {
            icon: Clock,
            title: "Real-time Monitoring",
            description: "Monitor performa dan KPI secara real-time dari mana saja",
            audience: "user"
          }
        ],
        institutions: [
          {
            icon: TrendingUp,
            title: "Data-Driven Decision",
            description: "Pengambilan keputusan berbasis data dengan insight yang akurat",
            audience: "institution"
          },
          {
            icon: PieChart,
            title: "Performance Monitoring",
            description: "Monitoring kinerja institusi dengan KPI dashboard yang comprehensive",
            audience: "institution"
          },
          {
            icon: Shield,
            title: "Data Security",
            description: "Keamanan data dengan role-based access control dan audit trail",
            audience: "institution"
          },
          {
            icon: CheckCircle2,
            title: "Compliance Reporting",
            description: "Laporan yang memenuhi standar compliance dan akreditasi",
            audience: "institution"
          }
        ]
      },
      platforms: [
        {
          name: "Web",
          icon: Globe,
          available: true
        }
      ],
      ctaText: "Konsultasi BI Dashboard",
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

  static createSalamAdminProvider(): SalamAdminDataProvider {
    return new SalamAdminDataProvider();
  }

  static createERaporProvider(): ERaporDataProvider {
    return new ERaporDataProvider();
  }

  static createLMSMoodleProvider(): LMSMoodleDataProvider {
    return new LMSMoodleDataProvider();
  }

  static createLMSYazanProvider(): LMSYazanDataProvider {
    return new LMSYazanDataProvider();
  }

  static createAMSProvider(): AMSDataProvider {
    return new AMSDataProvider();
  }

  static createZISWAFProvider(): ZISWAFDataProvider {
    return new ZISWAFDataProvider();
  }

  static createBIDashboardProvider(): BIDashboardDataProvider {
    return new BIDashboardDataProvider();
  }
}