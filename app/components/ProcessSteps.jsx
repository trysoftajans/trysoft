import React from "react";
import { FaSearch, FaLightbulb, FaCode, FaRocket, FaChartLine, FaExpand } from "react-icons/fa";

const steps = [
  { id: 1, title: "Anla", icon: <FaSearch size={40} className="text-blue-600" />, description: "İhtiyaçlarınızı ve hedeflerinizi analiz ediyoruz." },
  { id: 2, title: "Keşfet", icon: <FaLightbulb size={40} className="text-yellow-500" />, description: "Sizin için en iyi stratejileri oluşturuyoruz." },
  { id: 3, title: "Geliştir", icon: <FaCode size={40} className="text-green-600" />, description: "Özgün ve etkili çözümler geliştiriyoruz." },
  { id: 4, title: "Uygula", icon: <FaRocket size={40} className="text-red-500" />, description: "Stratejileri hayata geçiriyoruz." },
  { id: 5, title: "Optimize Et", icon: <FaChartLine size={40} className="text-purple-500" />, description: "Sürekli iyileştirmeler yapıyoruz." },
  { id: 6, title: "Büyü", icon: <FaExpand size={40} className="text-teal-600" />, description: "Markanızı sürekli büyütmeye devam ediyoruz." },
];

export default function ProcessSteps() {
  return (
    <div className="w-full overflow-x-hidden bg-white py-20 px-6 flex flex-col items-center">
      {/* Başlık */}
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Nasıl Çalışıyoruz?
      </h2>

      {/* Adımları İçeren Flexbox */}
      <div className="flex flex-wrap justify-center gap-10">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/6 min-w-[150px]"
          >
            {/* Yuvarlak İkon Alanı */}
            <div 
              className="relative w-28 h-28 flex items-center justify-center rounded-full border-4 border-gray-300 bg-gray-100 shadow-lg transition-transform transform hover:scale-110"
            >
              {step.icon}
            </div>

            {/* Başlık */}
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {step.title}
            </h3>

            {/* Açıklama */}
            <p className="text-gray-600 text-base mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
