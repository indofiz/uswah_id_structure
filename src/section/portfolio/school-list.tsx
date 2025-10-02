"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function SchoolList() {
  // Mock data for schools - you can replace with actual data
  const provinces = [
    {
      name: "DKI JAKARTA",
      schools: [
        { name: "TK Islam Al Azhar 1 Kebayoran Baru", level: "TK" },
        { name: "SD Islam Al Azhar 1 Kebayoran Baru", level: "SD" },
        { name: "SMP Islam Al Azhar 1 Kebayoran Baru", level: "SMP" },
        { name: "SMA Islam Al Azhar 1 Kebayoran Baru", level: "SMA" },
        { name: "SMA Islam Al Azhar 3 Kebayoran Baru", level: "SMA" }
      ]
    },
    {
      name: "DKI JAKARTA",
      schools: [
        { name: "TK Islam Al Azhar 1 Kebayoran Baru", level: "TK" },
        { name: "SD Islam Al Azhar 1 Kebayoran Baru", level: "SD" },
        { name: "SMP Islam Al Azhar 1 Kebayoran Baru", level: "SMP" },
        { name: "SMA Islam Al Azhar 1 Kebayoran Baru", level: "SMA" },
        { name: "SMA Islam Al Azhar 3 Kebayoran Baru", level: "SMA" }
      ]
    },
    {
      name: "DKI JAKARTA",
      schools: [
        { name: "TK Islam Al Azhar 1 Kebayoran Baru", level: "TK" },
        { name: "SD Islam Al Azhar 1 Kebayoran Baru", level: "SD" },
        { name: "SMP Islam Al Azhar 1 Kebayoran Baru", level: "SMP" },
        { name: "SMA Islam Al Azhar 1 Kebayoran Baru", level: "SMA" },
        { name: "SMA Islam Al Azhar 3 Kebayoran Baru", level: "SMA" }
      ]
    },
    {
      name: "DKI JAKARTA",
      schools: [
        { name: "TK Islam Al Azhar 1 Kebayoran Baru", level: "TK" },
        { name: "SD Islam Al Azhar 1 Kebayoran Baru", level: "SD" },
        { name: "SMP Islam Al Azhar 1 Kebayoran Baru", level: "SMP" },
        { name: "SMA Islam Al Azhar 1 Kebayoran Baru", level: "SMA" },
        { name: "SMA Islam Al Azhar 3 Kebayoran Baru", level: "SMA" }
      ]
    },
    {
      name: "DKI JAKARTA",
      schools: [
        { name: "TK Islam Al Azhar 1 Kebayoran Baru", level: "TK" },
        { name: "SD Islam Al Azhar 1 Kebayoran Baru", level: "SD" },
        { name: "SMP Islam Al Azhar 1 Kebayoran Baru", level: "SMP" },
        { name: "SMA Islam Al Azhar 1 Kebayoran Baru", level: "SMA" },
        { name: "SMA Islam Al Azhar 3 Kebayoran Baru", level: "SMA" }
      ]
    },
    {
      name: "DKI JAKARTA",
      schools: [
        { name: "TK Islam Al Azhar 1 Kebayoran Baru", level: "TK" },
        { name: "SD Islam Al Azhar 1 Kebayoran Baru", level: "SD" },
        { name: "SMP Islam Al Azhar 1 Kebayoran Baru", level: "SMP" },
        { name: "SMA Islam Al Azhar 1 Kebayoran Baru", level: "SMA" },
        { name: "SMA Islam Al Azhar 3 Kebayoran Baru", level: "SMA" }
      ]
    }
  ];

  return (
    <section id="school-list" className="py-12 sm:py-16 md:py-20" style={{backgroundColor: '#F5F5F5'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {provinces.map((province, provinceIndex) => (
          <div key={provinceIndex} className="mb-12 sm:mb-16">
            {/* Province Title */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 bg-primary-brand rounded-lg p-1">
                <img
                  src="/icon/location.png"
                  alt="Location"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-brand-navy" style={{fontFamily: 'Poppins, sans-serif'}}>
                {province.name}
              </h2>
            </div>

            {/* School Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {province.schools.map((school, schoolIndex) => (
                <Card key={schoolIndex} className="bg-white border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden">
                  {/* Ornament in bottom right */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20">
                    <img
                      src="/ornament/card-bottom-right.png"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-brand-navy mb-3">
                      Kebayoran Baru
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="text-sm sm:text-base">• {school.name}</li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
