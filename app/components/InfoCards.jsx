import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "Performans Denetimi",
    description:
      "Google Ads ve diğer dijital reklam hesaplarınızın performansını en ince ayrıntısına kadar analiz ederek iyileştirme fırsatlarını belirlemek.",
    details: [
      "Tek seferlik analiz, hesap büyüklüğüne göre 1-2 ay sürer.",
      "Uzman ekibimiz, kapsamlı 200+ maddelik bir denetim listesi ile reklam hesaplarınızı inceler.",
      "Performansı artırmak için veri bazlı öneriler sunarız."
    ],
    image: "/image/home/infocard1.gif",
    reverse: false,
  },
  {
    id: 2,
    title: "Hızlı Büyüme",
    description:
      "Dijital reklam stratejinizi geliştirerek dönüşüm oranlarını ve gelirleri artırmak.",
    details: [
      "Sürekli optimizasyon ile marka istediği sürece devam eder.",
      "Aylık bazda strateji belirlenir ve aksiyon planı oluşturulur.",
      "Reklam hesaplarınız düzenli olarak optimize edilerek hedef kitlenize en etkili şekilde ulaşmanız sağlanır."
    ],
    image: "/image/home/infocard2.gif",
    reverse: true,
  },
  {
    id: 3,
    title: "Dönüşümsel Optimizasyonlar",
    description:
      "Dijital reklamlarınızın ve web sitenizin dönüşüm oranını en üst düzeye çıkarmak.",
    details: [
      "Sürekli optimizasyon süreci.",
      "Kullanıcı deneyimi analizi, A/B testleri ve veri bazlı optimizasyon çalışmaları ile web sitenizin dönüşüm oranını artırıyoruz.",
      "Web siteniz ve reklamlarınız en iyi performansı gösterecek şekilde optimize edilir."
    ],
    image: "/image/home/infocard3.gif",
    reverse: false,
  }
];

export default function InfoCards() {
  return (
    <div className="w-full overflow-x-hidden py-20 px-8 flex flex-col justify-center items-center gap-20 bg-white">
      {cardData.map((card) => (
        <motion.div
          key={card.id}
          className={`flex flex-col md:flex-row ${
            card.reverse ? "md:flex-row-reverse" : ""
          } items-center max-w-5xl w-full gap-10 md:gap-20`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Görsel */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full md:w-[45%] h-[300px] md:h-[400px] object-cover rounded-xl shadow-none transition duration-300 ease-in-out hover:shadow-lg"
          />

          {/* Metin Kısmı */}
          <div className="w-full md:w-[45%] text-left space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              {card.title}
            </h2>
            <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-6">
              {card.description}
            </p>
            <ul className="list-disc pl-5 text-sm md:text-lg text-gray-600 space-y-2">
              {card.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
