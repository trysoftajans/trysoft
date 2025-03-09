import React from "react";
import { Link } from "@remix-run/react";

const services = [
  {
    id: 1,
    title: "SEO",
    description:
      "Web sitenizi arama motorlarında üst sıralara taşıyarak daha fazla organik trafik elde etmenizi sağlıyoruz. Doğru anahtar kelimeler, teknik SEO ve içerik stratejileriyle markanızı güçlendiriyoruz.",
    link: "/seo",
    image: "/image/services/services-seo.jpg",
  },
  {
    id: 2,
    title: "MOBİL UYGULAMA",
    description:
      "İşletmenize özel mobil uygulamalar geliştirerek kullanıcılarınıza en iyi deneyimi sunmanıza yardımcı oluyoruz. Hem iOS hem de Android platformlarında güçlü ve işlevsel çözümler üretiyoruz.",
    link: "/mobile-app",
    image: "/image/services/services-mobiluygulama.jpg",
  },
  {
    id: 3,
    title: "E-TİCARET DANIŞMANLIĞI",
    description:
      "E-ticarette başarıya ulaşmanız için stratejik danışmanlık hizmetleri sunuyoruz. Ürün yönetimi, pazarlama, reklam ve satış süreçlerinizi optimize ederek maksimum verim almanızı sağlıyoruz.",
    link: "/ecommerce",
    image: "/image/services/services-eticaret.jpg",
  },
  {
    id: 4,
    title: "DİJİTAL PAZARLAMA",
    description:
      "Dijital dünyada markanızı en iyi şekilde konumlandırıyor, dönüşüm odaklı reklam kampanyalarıyla hedef kitlenize ulaşıyoruz. Google Ads, sosyal medya reklamları ve performans odaklı stratejilerle büyümenizi hızlandırıyoruz.",
    link: "/digital-growth",
    image: "/image/services/services-digitalmarketing.jpg",
  },
  {
    id: 5,
    title: "SOSYAL MEDYA YÖNETİMİ",
    description:
      "Sosyal medyada güçlü bir marka kimliği oluşturmanız için içerik üretimi, etkileşim yönetimi ve stratejik planlamalar yapıyoruz. Doğru kitleye ulaşarak markanızı daha görünür ve etkili hale getiriyoruz.",
    link: "/socialmedia",
    image: "/image/services/services-socialmedia.jpg",
  },
  {
    id: 6,
    title: "KURUMSAL WEB SİTESİ VE E-TİCARET SİTESİ",
    description:
      "İhtiyaçlarınıza uygun, modern ve kullanıcı dostu web siteleri tasarlıyoruz. E-ticaret çözümleriyle satışlarınızı artırırken, güvenli ve hızlı bir alışveriş deneyimi sunuyoruz.",
    link: "/web-development",
    image: "/image/services/services-web.jpg",
  },
];

export default function Services() {
  return (
    <div
      id="services"
      className="min-h-screen bg-white flex flex-col justify-center items-center text-gray-900 px-4 py-12 sm:px-6 sm:py-16"
    >
      {/* Global Stil Tanımı */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>

      {/* Başlık */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Hizmetlerimiz
      </h2>

      {/* Kartları İçeren Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service) => (
          <Link to={service.link} key={service.id} className="group">
            <div
              className="relative w-full sm:w-80 h-64 sm:h-80 mx-auto"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-full transform transition duration-500 group-hover:[transform:rotateY(180deg)_translateZ(30px)_scale(1.1)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Kartın Ön Yüzü */}
                <div
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                </div>

                {/* Kartın Arka Yüzü */}
                <div
                  className="absolute inset-0 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-center items-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 text-center">
                    {service.description}
                  </p>
                  <p
                    className="text-xs sm:text-sm font-bold text-gray-700 text-center mt-auto"
                    style={{ animation: "blink 1s linear infinite" }}
                  >
                    Detaylı bilgi için tıklayınız
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
