"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
      name: "Juliansyah",
      title: "Guru Matematika",
      avatar: "/testimonial/avatar-1.jpg"
    },
    {
      quote: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
      name: "Juliansyah",
      title: "Guru Matematika",
      avatar: "/testimonial/avatar-2.jpg"
    },
    {
      quote: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
      name: "Juliansyah",
      title: "Guru Matematika",
      avatar: "/testimonial/avatar-3.jpg"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6 text-xs sm:text-sm px-5 py-2 border border-primary-brand rounded-full w-fit text-primary-brand bg-white mx-auto">
            Testimonial
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 text-brand-navy">
            Apa Kata Mereka?
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: '#505050' }}>
            Pendapat mereka menjadi bukti nyata atas kualitas dan layanan yang kami berikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-white border-gray-200 overflow-hidden"
              style={{ borderRadius: '24px' }}
            >
              {/* Top Right Ornament */}
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24">
                <img
                  src="/ornament/top-right-card-testimonial.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-6 sm:px-8 relative z-10">
                {/* Quote Icon */}
                <div className="mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <img
                      src="/icon/testimonial-quote.svg"
                      alt=""
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8" style={{ color: '#505050' }}>
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-brand-navy">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm" style={{ color: '#505050' }}>
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
