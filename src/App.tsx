import { useState, useEffect } from "react";
import {
  Waves,
  TreePine,
  TrendingUp,
  Activity,
  Leaf,
  MapPin,
} from "lucide-react";
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

function App() {
  const [selectedYear, setSelectedYear] = useState(1990);
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const mangroveImages = [mg1, mg2, mg3, mg4, mg5];
  const mangroveCaptions = [
    "Ekosistem Pesisir",
    "Biodiversity Hotspot",
    "Hutan Bakau",
    "Zona Pasang Surut",
    "Restorasi Pantai",
  ];
  const mangroveSubcaptions = [
    "Hutan Mangrove Tropis",
    "Keanekaragaman Hayati Tinggi",
    "Vegetasi Karismatik Pesisir",
    "Area Intertidal",
    "Upaya Restorasi Lokal",
  ];

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

  useEffect(() => {
    setAnimateStats(true);
    const timer = setTimeout(() => setAnimateStats(false), 100);
    return () => clearTimeout(timer);
  }, [selectedYear]);

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

  const getYearStats = (year: number) => {
    const statsMap: {
      [key: number]: { area: string; health: string; coverage: string };
    } = {
      1990: { area: "45,234", health: "87%", coverage: "62%" },
      2000: { area: "42,891", health: "84%", coverage: "59%" },
      2010: { area: "38,456", health: "79%", coverage: "55%" },
      2020: { area: "35,123", health: "73%", coverage: "50%" },
      2025: { area: "36,789", health: "76%", coverage: "52%" },
      2030: { area: "38,912", health: "81%", coverage: "56%" },
    };
    return statsMap[year] || statsMap[1990];
  };

  const currentStats = getYearStats(selectedYear);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-emerald-900/95 to-teal-900/95 backdrop-blur-md shadow-2xl py-3"
            : "bg-gradient-to-r from-emerald-900/50 to-teal-900/50 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl">
              <img src={logo_lp2m} alt="Logo LP2M" className="h-14" />
            </div>
          </div>
          <div className="flex items-center gap-3 hidden md:flex">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl">
              <img src={logo_itenas} alt="Logo ITENAS" className="h-16" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
              Monitor Ekosistem
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-blue-300">
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
          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16 border border-emerald-400/20 hover:border-emerald-400/50 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Penjelasan tentang Mangrove
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                  <p className="text-teal-100">
                    Hutan mangrove adalah ekosistem pesisir yang unik dan
                    penting, tumbuh di daerah pasang surut antara daratan dan
                    laut. Mangrove memiliki peran vital dalam menjaga
                    keseimbangan ekosistem pesisir dan melindungi garis pantai
                    dari abrasi dan tsunami.
                  </p>
                  <p className="text-teal-100">
                    Ekosistem mangrove menyediakan habitat bagi berbagai spesies
                    flora dan fauna, termasuk ikan, kepiting, burung, dan
                    reptil. Selain itu, mangrove berperan sebagai penyerap
                    karbon yang sangat efektif, membantu mengurangi dampak
                    perubahan iklim global.
                  </p>
                  <p className="text-teal-100">
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
          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 group">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Penjelasan Klasifikasi Mangrove
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                  <p className="text-blue-100">
                    Klasifikasi mangrove menggunakan teknologi penginderaan jauh
                    (remote sensing) dan analisis citra satelit untuk memetakan
                    distribusi dan kondisi hutan mangrove di wilayah pesisir
                    dengan presisi tinggi.
                  </p>
                  <p className="text-blue-100">
                    Melalui analisis temporal, kita dapat memantau perubahan
                    tutupan mangrove dari waktu ke waktu, mengidentifikasi area
                    yang mengalami degradasi atau restorasi dengan akurat.
                  </p>
                  <p className="text-blue-100">
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 text-center">
            Peta Lokasi Mangrove
          </h2>
          <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-xl rounded-3xl border-2 border-slate-400/20 shadow-2xl hover:border-slate-400/50 transition-all duration-300 overflow-hidden p-4 md:p-8">
            <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-600/30 shadow-inner relative">
              {/* Custom Header Overlay untuk menutupi header Google My Maps */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-emerald-900/95 to-teal-900/95 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-lg border-b border-emerald-400/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg shadow-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
            Hasil Klasifikasi Mangrove
          </h2>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Side - Year Selectors */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-b from-emerald-900/60 to-teal-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-emerald-400/30 sticky top-32">
                <h3 className="text-2xl font-black text-white mb-8 text-center">
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
                            ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-2xl"
                            : "bg-white/10 backdrop-blur-sm"
                        }`}
                      ></div>
                      <span
                        className={`relative z-10 flex items-center justify-center gap-2 ${
                          selectedYear === year
                            ? "text-white"
                            : "text-emerald-200"
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
                <div className="mt-10 pt-8 border-t border-emerald-400/30 space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <p className="text-emerald-300 text-xs font-bold uppercase">
                      Tahun Dipilih
                    </p>
                    <p className="text-white text-3xl font-black">
                      {selectedYear}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Dynamic Content */}
            <div className="lg:col-span-9">
              {/* Classification Image */}
              <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-400/20 hover:border-slate-400/50 transition-all duration-300 overflow-hidden group">
                <div className="mb-6 text-center">
                  <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full font-black text-lg shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    Data Tahun {selectedYear}
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-400/30 group-hover:border-emerald-400/60 transition-all duration-300 transform group-hover:scale-[1.02]">
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
                <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-center">
                    <p className="text-gray-200 text-lg mb-4">
                      <span className="font-black text-emerald-300">
                        Peta Klasifikasi Tahun {selectedYear}
                      </span>
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-emerald-400/20">
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

      {/* Charts Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
            Grafik-Grafik & Analisis
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chart Placeholder 1 */}
            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-xl rounded-3xl border border-emerald-400/20 p-8 min-h-[350px] flex flex-col items-center justify-center shadow-2xl hover:border-emerald-400/50 hover:shadow-emerald-500/20 transition-all duration-300 group cursor-pointer">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-6 shadow-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-3 text-center">
                Tren Perubahan Luas
              </h3>
              <p className="text-emerald-200 text-center font-bold">
                Visualisasi temporal perubahan area mangrove dari 1990-2030
              </p>
            </div>

            {/* Chart Placeholder 2 */}
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-xl rounded-3xl border border-blue-400/20 p-8 min-h-[350px] flex flex-col items-center justify-center shadow-2xl hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 shadow-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-3 text-center">
                Komposisi Vegetasi
              </h3>
              <p className="text-blue-200 text-center font-bold">
                Distribusi dan komposisi jenis mangrove di area monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-16 border-t border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-black">Mangrove Monitor</span>
              </div>
              <p className="text-slate-400 text-sm">
                Menjaga ekosistem pesisir untuk masa depan yang berkelanjutan
              </p>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Dashboard
                </li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Analisis
                </li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Peta
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">Tentang</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Misi Kami
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Tim
                </li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">
                  Kontak
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-4">Sosial Media</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Facebook
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Instagram
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Twitter
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8">
            <div className="text-center">
              <p className="text-slate-400 mb-2">
                &copy; {new Date().getFullYear()} Mangrove Monitoring Dashboard.
                All rights reserved.
              </p>
              <p className="text-slate-500 text-sm">
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
