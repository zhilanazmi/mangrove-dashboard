import { useState, useEffect } from "react";
import { TreePine, Activity, Leaf, MapPin } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import img1990 from "./assets/images/CLASS_RF_1990.png";
import img2000 from "./assets/images/CLASS_RF_2000.png";
import img2010 from "./assets/images/CLASS_RF_2010.png";
import img2015 from "./assets/images/CLASS_RF_2015.png";
import img2020 from "./assets/images/CLASS_RF_2020.png";
import img2023 from "./assets/images/CLASS_RF_2023.png";
import img2025 from "./assets/images/CLASS_RF_2025.png";
import mg1 from "./assets/images/mangrove/IMG-20251205-WA0046.jpg";
import mg2 from "./assets/images/mangrove/IMG-20251205-WA0047.jpg";
import mg3 from "./assets/images/mangrove/IMG-20251205-WA0055.jpg";
import mg4 from "./assets/images/mangrove/IMG-20251205-WA0056.jpg";
import mg5 from "./assets/images/mangrove/IMG-20251205-WA0057.jpg";
import logo_lp2m from "./assets/images/logo/lppm.png";
import logo_itenas from "./assets/images/logo/itenas.png";

// Import dokumentasi images
import dok1 from "./assets/images/dokumentasi/IMG-20251205-WA0012.jpg";
import dok2 from "./assets/images/dokumentasi/IMG-20251205-WA0013.jpg";
import dok3 from "./assets/images/dokumentasi/IMG-20251205-WA0014.jpg";
import dok4 from "./assets/images/dokumentasi/IMG-20251205-WA0015.jpg";
import dok5 from "./assets/images/dokumentasi/IMG-20251205-WA0018.jpg";
import dok6 from "./assets/images/dokumentasi/IMG-20251205-WA0019.jpg";
import dok7 from "./assets/images/dokumentasi/IMG-20251205-WA0020.jpg";
import dok8 from "./assets/images/dokumentasi/IMG-20251205-WA0021.jpg";
import dok9 from "./assets/images/dokumentasi/IMG-20251205-WA0022.jpg";
import dok10 from "./assets/images/dokumentasi/IMG-20251205-WA0023.jpg";
import dok11 from "./assets/images/dokumentasi/IMG-20251205-WA0024.jpg";
import dok12 from "./assets/images/dokumentasi/IMG-20251205-WA0025.jpg";
import dok13 from "./assets/images/dokumentasi/IMG-20251205-WA0026.jpg";
import dok14 from "./assets/images/dokumentasi/IMG-20251205-WA0027.jpg";
import dok15 from "./assets/images/dokumentasi/IMG-20251205-WA0028.jpg";
import dok16 from "./assets/images/dokumentasi/IMG-20251205-WA0029.jpg";
import dok17 from "./assets/images/dokumentasi/IMG-20251205-WA0030.jpg";
import dok18 from "./assets/images/dokumentasi/IMG-20251205-WA0031.jpg";
import dok19 from "./assets/images/dokumentasi/IMG-20251205-WA0032.jpg";
import dok20 from "./assets/images/dokumentasi/IMG-20251205-WA0033.jpg";
import dok21 from "./assets/images/dokumentasi/IMG-20251205-WA0034.jpg";
import dok22 from "./assets/images/dokumentasi/IMG-20251205-WA0035.jpg";
import dok23 from "./assets/images/dokumentasi/IMG-20251205-WA0036.jpg";
import dok24 from "./assets/images/dokumentasi/IMG-20251205-WA0037.jpg";
import dok25 from "./assets/images/dokumentasi/IMG-20251205-WA0038.jpg";
import dok26 from "./assets/images/dokumentasi/IMG-20251205-WA0039.jpg";
import dok27 from "./assets/images/dokumentasi/IMG-20251205-WA0040.jpg";
import dok28 from "./assets/images/dokumentasi/IMG-20251205-WA0041.jpg";
import dok29 from "./assets/images/dokumentasi/IMG-20251205-WA0042.jpg";
import dok30 from "./assets/images/dokumentasi/IMG-20251205-WA0043.jpg";
import dok31 from "./assets/images/dokumentasi/IMG-20251205-WA0044.jpg";
import dok32 from "./assets/images/dokumentasi/IMG-20251205-WA0045.jpg";
import dok33 from "./assets/images/dokumentasi/IMG-20251205-WA0048.jpg";
import dok34 from "./assets/images/dokumentasi/IMG-20251205-WA0049.jpg";
import dok35 from "./assets/images/dokumentasi/IMG-20251205-WA0050.jpg";
import dok36 from "./assets/images/dokumentasi/IMG-20251205-WA0051.jpg";
import dok37 from "./assets/images/dokumentasi/IMG-20251205-WA0052.jpg";
import dok38 from "./assets/images/dokumentasi/IMG-20251205-WA0053.jpg";
import dok39 from "./assets/images/dokumentasi/IMG-20251205-WA0054.jpg";

function App() {
  const [selectedYear, setSelectedYear] = useState(1990);
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const mangroveImages = [mg1, mg2, mg3, mg4, mg5];

  const years = [1990, 2000, 2010, 2020, 2023, 2025, 2030];

  const data: {
    [key: number]: {
      year: string;
      method: string;
      area_mangrove_ha: number;
      area_non_ha: number;
    };
  } = {
    1990: {
      year: "1990",
      method: "RF",
      area_mangrove_ha: 4014.99,
      area_non_ha: 5319294.3,
    },
    2000: {
      year: "2000",
      method: "RF",
      area_mangrove_ha: 119029.86,
      area_non_ha: 5204279.43,
    },
    2010: {
      year: "2010",
      method: "RF",
      area_mangrove_ha: 71977.05,
      area_non_ha: 5251332.24,
    },
    2015: {
      year: "2015",
      method: "RF",
      area_mangrove_ha: 105071.67,
      area_non_ha: 5218237.62,
    },
    2020: {
      year: "2020",
      method: "RF",
      area_mangrove_ha: 119029.86,
      area_non_ha: 5204279.43,
    },
    2023: {
      year: "2023",
      method: "RF",
      area_mangrove_ha: 85934.07,
      area_non_ha: 5237375.22,
    },
    2025: {
      year: "2025",
      method: "RF",
      area_mangrove_ha: 1092.24,
      area_non_ha: 5322217.05,
    },
    2030: {
      year: "2030",
      method: "LSTM",
      area_mangrove_ha: 365968.08,
      area_non_ha: 4967341.21,
    },
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("id-ID").format(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Autoplay carousel: advance every 5 seconds
  useEffect(() => {
    const t = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % mangroveImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, [mangroveImages.length]);

  const getClassificationImage = (year: number) => {
    const imageMap: { [key: number]: string } = {
      1990: img1990,
      2000: img2000,
      2010: img2010,
      2015: img2015,
      2020: img2020,
      2023: img2023,
      2025: img2025,
      2030: img2025, // Using 2025 as placeholder for 2030
    };
    return (
      imageMap[year] ||
      `https://placehold.co/900x650/2d5016/ffffff?text=Mangrove+Classification+${year}`
    );
  };

  // Data untuk chart berdasarkan selectedYear
  const chartData = [
    {
      name: "Mangrove",
      value: data[selectedYear]?.area_mangrove_ha || 0,
      fill: "#10b981",
    },
    {
      name: "Non-Mangrove",
      value: data[selectedYear]?.area_non_ha || 0,
      fill: "#ef4444",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-2xl py-3"
            : "bg-white/50 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div>
              <img src={logo_lp2m} alt="Logo LP2M" className="h-14" />
            </div>
          </div>
          <div className="flex items-center gap-3 hidden md:flex">
            <div className="h-20">
              <img src={logo_itenas} alt="Logo ITENAS" className="h-16" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 leading-tight">
              Monitor Ekosistem
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-slate-700 to-gray-800">
                Mangrove Pantai
              </span>
            </h2>
          </div>

          <div className="mb-12 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10 transition-all duration-300"></div>
              <img
                src={mangroveImages[carouselIndex]}
                alt={`Mangrove ${carouselIndex + 1}`}
                className="w-full h-auto max-h-[650px] object-contain bg-gray-800 transition-all duration-500"
              />

              <button
                onClick={() =>
                  setCarouselIndex(
                    (i) =>
                      (i - 1 + mangroveImages.length) % mangroveImages.length
                  )
                }
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-30"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCarouselIndex((i) => (i + 1) % mangroveImages.length)
                }
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-30"
              >
                ›
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {mangroveImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === carouselIndex ? "bg-white" : "bg-white/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Info Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16 border border-gray-200 hover:border-gray-300 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Penjelasan tentang Mangrove
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                  <p className="text-gray-600">
                    Hutan mangrove adalah ekosistem pesisir yang unik dan
                    penting, tumbuh di daerah pasang surut antara daratan dan
                    laut. Mangrove memiliki peran vital dalam menjaga
                    keseimbangan ekosistem pesisir dan melindungi garis pantai
                    dari abrasi dan tsunami.
                  </p>
                  <p className="text-gray-600">
                    Ekosistem mangrove menyediakan habitat bagi berbagai spesies
                    flora dan fauna, termasuk ikan, kepiting, burung, dan
                    reptil. Selain itu, mangrove berperan sebagai penyerap
                    karbon yang sangat efektif, membantu mengurangi dampak
                    perubahan iklim global.
                  </p>
                  <p className="text-gray-600">
                    Monitoring dan pelestarian hutan mangrove menjadi sangat
                    penting untuk menjaga keberlanjutan lingkungan pesisir dan
                    kesejahteraan masyarakat yang bergantung pada ekosistem ini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classification Info Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16 border border-gray-200 hover:border-gray-300 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Penjelasan Klasifikasi Mangrove
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                  <p className="text-gray-600">
                    Klasifikasi mangrove menggunakan teknologi penginderaan jauh
                    (remote sensing) dan analisis citra satelit untuk memetakan
                    distribusi dan kondisi hutan mangrove di wilayah pesisir
                    dengan presisi tinggi.
                  </p>
                  <p className="text-gray-600">
                    Melalui analisis temporal, kita dapat memantau perubahan
                    tutupan mangrove dari waktu ke waktu, mengidentifikasi area
                    yang mengalami degradasi atau restorasi dengan akurat.
                  </p>
                  <p className="text-gray-600">
                    Sistem klasifikasi menggunakan kombinasi indeks vegetasi,
                    analisis spektral, dan algoritma machine learning untuk
                    membedakan mangrove dari vegetasi lainnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Container Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">
            Peta Lokasi Mangrove
          </h2>
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-gray-200 shadow-2xl hover:border-gray-300 transition-all duration-300 overflow-hidden p-4 md:p-8">
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-inner relative">
              {/* Custom Header Overlay untuk menutupi header Google My Maps */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-lg border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">
                      Peta Lokasi Mangrove
                    </h3>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1Iy26aIpYhrYUutZoDCOp-QTPvfx8XXY&ehbc=2E312F&noprof=1&output=embed"
                className="w-full h-[500px] md:h-[650px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Peta Lokasi Mangrove - Google My Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Classification Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
            Hasil Klasifikasi Mangrove
          </h2>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Side - Year Selectors */}
            <div className="lg:col-span-3">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200 sticky top-32">
                <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
                  Pilih Tahun
                </h3>
                <div className="space-y-3">
                  {years.map((year) => (
                    <button
                      key={year}
                      onMouseEnter={() => setHoveredYear(year)}
                      onMouseLeave={() => setHoveredYear(null)}
                      onClick={() => setSelectedYear(year)}
                      className={`w-full py-4 px-6 rounded-xl font-black text-lg transition-all duration-300 transform relative overflow-hidden group ${
                        selectedYear === year
                          ? "scale-105"
                          : hoveredYear === year
                          ? "scale-102"
                          : "scale-100"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 transition-all duration-300 ${
                          selectedYear === year
                            ? "bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl"
                            : "bg-gray-100 backdrop-blur-sm"
                        }`}
                      ></div>
                      <span
                        className={`relative z-10 flex items-center justify-center gap-2 ${
                          selectedYear === year ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {/* {selectedYear === year && (
                          <span className="text-lg">✓</span>
                        )} */}
                        {year}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Mini Stats */}
                <div className="mt-10 pt-8 border-t border-gray-300 space-y-4">
                  <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-100 transition-all duration-300">
                    <p className="text-gray-600 text-xs font-bold uppercase">
                      Tahun Dipilih
                    </p>
                    <p className="text-gray-900 text-3xl font-black">
                      {selectedYear}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Dynamic Content */}
            <div className="lg:col-span-9">
              {/* Classification Image */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden group">
                <div className="mb-6 text-center">
                  <span className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-full font-black text-lg shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    Data Tahun {selectedYear}
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-300 group-hover:border-gray-400 transition-all duration-300 transform group-hover:scale-[1.02]">
                  <div
                    key={data[selectedYear].year}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h2 className="text-xl font-bold text-center mb-4 text-gray-700">
                      Tahun {data[selectedYear].year} (
                      {data[selectedYear].method})
                    </h2>

                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis
                          tickFormatter={(value) =>
                            `${(value / 1000000).toFixed(1)}M`
                          }
                        />
                        <Tooltip
                          formatter={(value: number) =>
                            `${formatNumber(value)} ha`
                          }
                        />
                        <Legend />
                        <Bar dataKey="value" />
                      </BarChart>
                    </ResponsiveContainer>

                    <div className="mt-4 text-sm text-gray-600">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">Area Mangrove:</span>
                        <span className="text-green-600">
                          {formatNumber(data[selectedYear].area_mangrove_ha)} ha
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">
                          Area Non-Mangrove:
                        </span>
                        <span className="text-red-600">
                          {formatNumber(data[selectedYear].area_non_ha)} ha
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300">
                  <div className="text-center">
                    <p className="text-gray-700 text-lg mb-4">
                      <span className="font-black text-gray-900">
                        Peta Klasifikasi Tahun {selectedYear}
                      </span>
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300">
                      <img
                        src={getClassificationImage(selectedYear)}
                        alt={`Klasifikasi Mangrove ${selectedYear}`}
                        className="w-full h-auto object-contain bg-gray-800"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Dokumentasi Kegiatan
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Momen dan aktivitas penelitian ekosistem mangrove di lapangan
            </p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              dok1,
              dok2,
              dok3,
              dok4,
              dok5,
              dok6,
              dok7,
              dok8,
              dok9,
              dok10,
              dok11,
              dok12,
              dok13,
              dok14,
              dok15,
              dok16,
              dok17,
              dok18,
              dok19,
              dok20,
              dok21,
              dok22,
              dok23,
              dok24,
              dok25,
              dok26,
              dok27,
              dok28,
              dok29,
              dok30,
              dok31,
              dok32,
              dok33,
              dok34,
              dok35,
              dok36,
              dok37,
              dok38,
              dok39,
            ].map((img, idx) => (
              <div key={idx} className="break-inside-avoid mb-4">
                <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white">
                  <img
                    src={img}
                    alt={`Dokumentasi ${idx + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-sm">
                        Kegiatan Penelitian
                      </p>
                      <p className="text-white/80 text-xs">
                        Monitoring Mangrove
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-black">Mangrove Monitor</span>
              </div>
              <p className="text-gray-400 text-sm">
                Menjaga ekosistem pesisir untuk masa depan yang berkelanjutan
              </p>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-gray-200 transition-colors cursor-pointer">
                  Dashboard
                </li>
                <li className="hover:text-gray-200 transition-colors cursor-pointer">
                  Analisis
                </li>
                <li className="hover:text-gray-200 transition-colors cursor-pointer">
                  Peta
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">Tentang</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-gray-200 transition-colors cursor-pointer">
                  Misi Kami
                </li>
                <li className="hover:text-gray-200 transition-colors cursor-pointer">
                  Tim
                </li>
                <li className="hover:text-gray-200 transition-colors cursor-pointer">
                  Kontak
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">Sosial Media</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-gray-200 transition-colors cursor-pointer">
                  Facebook
                </li>
                <li className="hover:text-gray-200 transition-colors cursor-pointer">
                  Instagram
                </li>
                <li className="hover:text-gray-200 transition-colors cursor-pointer">
                  Twitter
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              <p className="text-gray-400 mb-2">
                &copy; {new Date().getFullYear()} Mangrove Monitoring Dashboard.
                All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                🌍 Melestarikan Ekosistem Pesisir Melalui Teknologi
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
