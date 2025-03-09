import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhyChooseUs() {
  const handleClick = () => {
    const phoneNumber = "905456625080"; 
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full bg-white flex flex-col items-center justify-center py-20 px-6">
        
        {/* Başlık ve Açıklamalar */}
        <div className="text-center max-w-4xl mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            DİJİTAL PAZARLAMA VE YAZILIM AJANSI
          </h2>
          <p className="text-2xl text-gray-700 mt-3">
            Yeni Bir Başlangıç İçin Hazır mısınız?
          </p>
          <p className="text-xl text-gray-500 mt-1">
            Şimdi Fark Yaratma Zamanı!
          </p>
        </div>

        {/* İçerik Kapsayıcı */}
        <div className="w-full flex flex-col md:flex-row items-stretch max-w-7xl min-h-[500px] gap-6">
          
          {/* Sol Kısım */}
          <motion.div 
            className="w-full md:w-1/3 bg-black text-white py-20 px-12 flex flex-col justify-center items-center rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
          >
            <h2 className="text-3xl font-bold text-center">
              Başarınızı Birlikte İnşa Edeceğiz!
            </h2>
          </motion.div>

          {/* Sağ Kısım */}
          <motion.div
            className="w-full md:w-2/3 bg-gray-100 text-black py-20 px-12 flex flex-col justify-center items-start rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xl font-semibold">
              Paketlenmiş, standart ve etkisiz dijital pazarlama çözümleriyle{" "}
              <strong className="text-blue-600">zaman kaybettirmiyoruz.</strong>
            </p>
            <p className="text-xl mt-6">
              Her işletmenin benzersiz hedefleri ve gereksinimleri vardır. Bunun farkındayız ve önce sizi dinliyoruz. İşinizi, hedeflerinizi ve vizyonunuzu anladıktan sonra, size özel stratejiler geliştirmeye başlıyoruz.
            </p>
            <p className="text-xl mt-6">
              Hangi platform ve araçların sizin için en verimli olacağına birlikte karar veriyor ve süreci birlikte yönetiyoruz.{" "}
              <strong className="text-blue-800">Hedef odaklı, esnek ve yenilikçi</strong> bir yaklaşım sergileyerek, her adımda birlikte büyüyor ve başarıya ulaşmanızı sağlıyoruz.
            </p>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Butonu */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center text-2xl"
      >
        <FaWhatsapp />
      </button>
    </section>
  );
}
