import { useParams } from "react-router-dom";
import Navigation from "@/components/layout/navigation";
import Footer from "@/section/footer/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Tag, ChevronRight } from "lucide-react";

// Mock data - in production, this would come from API or data provider
const blogPosts = [
  {
    id: 1,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center",
    author: "Dr. Ahmad Santoso",
    tags: ["Teknologi", "Pendidikan", "Digital", "Indonesia"],
    content: `
      <p class="mb-6 text-gray-700 leading-relaxed text-lg indent-8">Pendidikan digital telah menjadi bagian integral dari sistem pembelajaran modern di Indonesia. Dengan perkembangan teknologi yang pesat, institusi pendidikan kini memiliki akses ke berbagai alat dan platform yang dapat meningkatkan kualitas pembelajaran secara signifikan. Transformasi ini bukan hanya sekadar penggantian dari metode konvensional ke digital, tetapi merupakan perubahan paradigma dalam cara kita memandang proses belajar-mengajar. Di era digital ini, pembelajaran tidak lagi terbatas pada ruang kelas fisik dan jam pelajaran tertentu. Teknologi memungkinkan siswa untuk belajar kapan saja, di mana saja, dengan kecepatan mereka sendiri. Hal ini membuka peluang baru dalam personalisasi pembelajaran, di mana setiap siswa dapat memiliki jalur pembelajaran yang disesuaikan dengan kebutuhan, minat, dan kemampuan mereka masing-masing.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Transformasi Digital dalam Pendidikan</h2>
      <p class="mb-6 text-gray-700 leading-relaxed text-lg indent-8">Teknologi pendidikan tidak hanya mengubah cara guru mengajar, tetapi juga bagaimana siswa belajar dan berinteraksi dengan materi pembelajaran. Platform Learning Management System (LMS) modern memungkinkan pembelajaran yang lebih interaktif, personal, dan dapat diakses dari mana saja dengan koneksi internet. Sistem-sistem ini dilengkapi dengan berbagai fitur canggih seperti video pembelajaran interaktif, simulasi virtual, gamifikasi, dan forum diskusi online yang memfasilitasi kolaborasi antar siswa. Guru juga mendapatkan manfaat dari analytics dashboard yang memberikan insight mendalam tentang progress dan pemahaman setiap siswa secara real-time. Dengan data-data ini, guru dapat mengidentifikasi siswa yang membutuhkan bantuan ekstra atau menyesuaikan metode pengajaran mereka untuk hasil yang lebih optimal. Integrasi dengan berbagai tools seperti video conferencing, digital whiteboard, dan cloud storage membuat ekosistem pembelajaran digital menjadi semakin komprehensif dan seamless.</p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Keuntungan Pembelajaran Digital</h3>
      <ul class="list-disc list-inside mb-6 text-gray-700 space-y-2 text-lg">
        <li>Akses pembelajaran 24/7 dari berbagai perangkat (smartphone, tablet, laptop)</li>
        <li>Materi pembelajaran yang interaktif dan multimedia (video, animasi, simulasi)</li>
        <li>Penilaian otomatis dan feedback real-time untuk evaluasi berkelanjutan</li>
        <li>Analitik pembelajaran untuk monitoring progress siswa secara detail</li>
        <li>Kolaborasi yang lebih baik antara siswa dan guru melalui tools digital</li>
        <li>Pengurangan biaya operasional seperti cetak materi dan transportasi</li>
        <li>Fleksibilitas waktu dan tempat belajar yang mendukung work-life balance</li>
        <li>Akses ke sumber belajar global dan expert dari berbagai negara</li>
      </ul>

      <blockquote class="border-l-4 border-[#45ABD5] bg-blue-50 p-6 my-8 italic text-gray-700 text-lg">
        "Teknologi pendidikan bukan hanya tentang digitalisasi, tetapi tentang menciptakan pengalaman pembelajaran yang lebih baik, lebih efektif, dan lebih inklusif untuk setiap siswa di Indonesia. Dengan pendekatan yang tepat, teknologi dapat menjadi equalizer yang membuka akses pendidikan berkualitas untuk semua."
      </blockquote>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Tantangan dan Solusi dalam Implementasi</h2>
      <p class="mb-6 text-gray-700 leading-relaxed text-lg indent-8">Meskipun memberikan banyak manfaat, implementasi teknologi pendidikan juga menghadapi berbagai tantangan yang perlu diatasi secara sistematis. Infrastruktur teknologi yang belum merata di seluruh Indonesia menjadi hambatan utama, di mana beberapa daerah masih mengalami keterbatasan akses internet dan perangkat digital. Selain itu, kesenjangan digital literasi antara guru senior dan junior juga menjadi isu yang perlu diperhatikan. Banyak tenaga pendidik yang belum familiar dengan teknologi digital dan membutuhkan pelatihan intensif untuk dapat memanfaatkan platform pembelajaran digital secara maksimal. Di sisi siswa, adaptasi terhadap metode pembelajaran baru juga memerlukan waktu dan bimbingan yang konsisten. Tantangan lainnya meliputi keamanan data, privacy concerns, dan bagaimana memastikan integritas akademik dalam lingkungan pembelajaran online. Namun, dengan strategi yang tepat dan komitmen dari semua stakeholder, tantangan-tantangan ini dapat diatasi secara bertahap.</p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Strategi Implementasi yang Efektif</h3>
      <p class="mb-6 text-gray-700 leading-relaxed text-lg indent-8">Untuk berhasil mengimplementasikan teknologi pendidikan, institusi perlu memiliki roadmap yang jelas, dukungan dari seluruh stakeholder (manajemen, guru, siswa, dan orang tua), serta komitmen untuk continuous improvement. Pelatihan berkelanjutan untuk guru dan dukungan teknis yang memadai juga sangat penting untuk memastikan adopsi teknologi berjalan lancar. Implementasi sebaiknya dilakukan secara bertahap (phased approach), dimulai dari pilot project di beberapa kelas atau mata pelajaran tertentu sebelum di-roll out ke seluruh institusi. Change management yang baik juga krusial untuk mengelola resistensi terhadap perubahan dan membangun buy-in dari semua pihak. Institusi perlu menyediakan help desk dan technical support yang responsif, serta membuat dokumentasi dan tutorial yang mudah dipahami. Regular evaluation dan feedback gathering akan membantu mengidentifikasi area improvement dan memastikan sistem terus berkembang sesuai kebutuhan pengguna.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Masa Depan Pendidikan Digital yang Cerah</h2>
      <p class="mb-6 text-gray-700 leading-relaxed text-lg indent-8">Dengan perkembangan teknologi seperti Artificial Intelligence (AI), Machine Learning, Virtual Reality (VR), Augmented Reality (AR), dan Big Data Analytics, masa depan pendidikan digital di Indonesia sangat menjanjikan dan penuh dengan potensi inovasi. AI-powered tutoring systems akan mampu memberikan pembelajaran yang benar-benar personalized untuk setiap siswa, menyesuaikan pace, konten, dan metode pembelajaran berdasarkan karakteristik individu. VR dan AR akan membawa pengalaman immersive learning yang memungkinkan siswa "mengalami" konsep-konsep abstrak atau mengunjungi lokasi-lokasi yang tidak mungkin dijangkau secara fisik, seperti eksplorasi ruang angkasa atau menjelajahi struktur molekul dalam skala nano. Personalisasi pembelajaran akan semakin canggih dengan algoritma yang dapat memprediksi kesulitan belajar siswa sebelum terjadi dan memberikan intervensi preventif. Gap dalam akses pendidikan dapat diperkecil melalui mobile-first solutions dan offline-capable applications yang memungkinkan pembelajaran tanpa koneksi internet stabil.</p>

      <p class="mb-6 text-gray-700 leading-relaxed text-lg indent-8">Sebagai penyedia solusi teknologi pendidikan terkemuka di Indonesia, kami di PT Uswah ID Structure berkomitmen untuk terus berinovasi dan mendukung institusi pendidikan Indonesia dalam perjalanan transformasi digital mereka. Kami memahami bahwa setiap institusi memiliki kebutuhan dan tantangan yang unik, oleh karena itu kami menawarkan solusi yang customizable dan scalable untuk memenuhi kebutuhan spesifik Anda. Tim expert kami siap memberikan konsultasi, implementasi, training, dan ongoing support untuk memastikan kesuksesan adopsi teknologi pendidikan di institusi Anda. Bersama-sama, mari kita ciptakan ekosistem pendidikan digital Indonesia yang lebih baik, lebih efektif, dan lebih inklusif untuk generasi masa depan. Hubungi kami hari ini untuk diskusi lebih lanjut tentang bagaimana kami dapat membantu mewujudkan visi pendidikan digital Anda.</p>
    `
  },
  {
    id: 2,
    title: "Implementasi Sistem LMS yang Efektif",
    description: "Panduan lengkap untuk mengimplementasikan Learning Management System di institusi pendidikan Anda.",
    date: "10 Maret 2025",
    category: "LMS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",
    author: "Prof. Siti Nurhaliza",
    tags: ["LMS", "Implementasi", "Best Practice"],
    content: `<p class="mb-6 text-gray-700 leading-relaxed">Learning Management System (LMS) adalah fondasi dari pembelajaran digital modern...</p>`
  }
];

const recentPosts = [
  {
    id: 3,
    title: "5 Tren Teknologi Pendidikan 2025",
    date: "5 Maret 2025",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Mengoptimalkan e-Rapor untuk Evaluasi Siswa",
    date: "1 Maret 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Strategi Meningkatkan Engagement Siswa Online",
    date: "28 Februari 2025",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center"
  }
];

const allTags = [
  "Teknologi",
  "Pendidikan",
  "Digital",
  "LMS",
  "E-Learning",
  "Inovasi",
  "Best Practice",
  "Tutorial",
  "Case Study",
  "Indonesia"
];

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id)) || blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Image Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article */}
          <div className="lg:col-span-8">
            <Card className="bg-white shadow-sm/5">
              <CardHeader className="space-y-4 pb-6">
                <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight pt-8">
                  {post.title}
                </CardTitle>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pt-2">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="prose prose-lg max-w-none">
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-900">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-sm border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Author Info */}
            <Card className="mt-6 shadow-sm/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#45ABD5] to-[#368baf] flex items-center justify-center text-white flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {post.date}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Recent Posts */}
              <Card className="bg-white shadow-sm/5">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Berita Terbaru
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((recentPost) => (
                    <a
                      key={recentPost.id}
                      href={`/blog/${recentPost.id}`}
                      className="group block"
                    >
                      <div className="flex gap-3">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={recentPost.image}
                            alt={recentPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-gray-900 group-hover:text-[#45ABD5] line-clamp-2 transition-colors">
                            {recentPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {recentPost.date}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="bg-white shadow-sm/5">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Tags Populer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-[#45ABD5] hover:text-white hover:border-[#45ABD5] transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-[#01193F] to-[#012247] text-white shadow-sm/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Ingin Tahu Lebih Lanjut?
                  </h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Hubungi kami untuk konsultasi gratis tentang solusi teknologi pendidikan untuk institusi Anda.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#45ABD5] hover:bg-[#3a96bd] text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm"
                  >
                    Hubungi Kami
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
