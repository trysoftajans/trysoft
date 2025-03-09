import React, { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import Footer from "../components/Footer";
import { motion, useAnimation } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Details() {
  const controlsX = useAnimation();
  const controlsY = useAnimation();

  // Sürekli tekrar eden animasyonları başlatan fonksiyon
  const startAnimations = () => {
    controlsX.start({
      x: [0, 300, 150, 270, 260],
      transition: {
        duration: 6,
        times: [0, 0.3, 0.5, 0.7, 1],
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
    controlsY.start({
      y: [0, -20, 0, -20, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAnimations();
  }, [controlsX, controlsY]);

  // Ok üzerine gelindiğinde animasyonları durdur
  const handleArrowMouseEnter = () => {
    controlsX.stop();
    controlsY.stop();
  };

  // Ok üzerinden fare ayrıldığında animasyonları tekrar başlat
  const handleArrowMouseLeave = () => {
    startAnimations();
  };

  const destinations = [
    {
      image: "/image/details/details-4-1.jpg",
      yOffset: 40, // translate-y-10 ~ 40px
    },
    {
      image: "/image/details/details-4-2.jpg",
      yOffset: -40, // -translate-y-10 ~ -40px
    },
    {
      image: "/image/details/details-4-3.jpg",
      yOffset: 56, // translate-y-14 ~ 56px
    },
    {
      image: "/image/details/details-4-4.jpg",
      yOffset: -56, // -translate-y-14 ~ -56px
    },
  ];

  const handleClick = () => {
    const phoneNumber = "905456625080"; 
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const textOptions = ["ciro", "müşteri", "büyüme", "satış", "gelir"];
  const [activeText, setActiveText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = textOptions[wordIndex];

      if (!isDeleting) {
        setActiveText(currentWord.slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);

        if (letterIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 400);
          return;
        }
      } else {
        setActiveText(currentWord.slice(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % textOptions.length);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? 100 : 150);
    return () => clearInterval(typingInterval);
  }, [letterIndex, isDeleting, wordIndex]);

  return (
    <div>
      {/* Hero Bölümü */}
      <div className="h-screen flex flex-col items-center justify-center bg-white text-black px-4 sm:px-6 pt-12 sm:pt-16 md:pt-32 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold">
          Daha fazla <span className="text-red-600">{activeText}</span> istiyor <br /> musunuz?
        </h2>
        <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg max-w-3xl">
          Reklam bütçenizi adeta bir kara deliğe atıyor gibi hissediyor musunuz? İyi bir haberimiz var! Biz, sizinle aynı dili konuşan bir dijital pazarlama ajansıyız ve sizin başarınızı kendi başarımız olarak görüyoruz.
        </p>
        <div className="mt-6 sm:mt-8">
          <Link
            to="/contact"
            reloadDocument className="relative inline-block px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 font-bold text-sm sm:text-base md:text-lg text-white bg-red-500 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-90 hover:shadow-2xl"
          >
            ✨ Bizimle İletişime Geç ✨
          </Link>
        </div>
      </div>

      {/* Fotoğraf ve Yazı Bölümü */}
      <section className="bg-gray-100 py-16 sm:py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-10 md:gap-32">
          {/* Fotoğraf */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 5, type: "spring", bounce: 0.3 }}
            viewport={{ once: false }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] -mt-10 md:-mt-40 group"
          >
            <img
              src="image/details/details2.jpg"
              alt="Arkadaki Büyük Görsel"
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-110"
            />
            <img
              src="image/details/details1.jpg"
              alt="Öndeki Küçük Görsel"
              className="absolute w-full h-full left-[25%] top-[25%] md:left-[40%] md:top-[40%] rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>

          {/* Yazı */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 5, type: "spring", bounce: 0.3 }}
            viewport={{ once: false }}
            className="max-w-2xl mx-auto text-center px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Dijitali Biz Yönetelim, Siz Sadece Büyümeyi Hayal Edin!
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4">
              Günümüzün rekabetçi dijital Dünyasında, markanızın fark edilmesi ve doğru hedef kitleye ulaşması için güçlü bir stratejiye ihtiyacınız var. Biz, markanızın dijitalde en iyi şekilde konumlanmasını sağlamak için yaratıcı ve etkili çözümler üreten bir ekibiz.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4">
              İçerik üretiminden sosyal medya yönetimine, SEO’dan reklam kampanyalarına kadar geniş bir yelpazede hizmet sunarak, dijitalde sürdürülebilir bir büyüme elde etmenize yardımcı oluyoruz. Sadece estetik değil, aynı zamanda etkileşimi ve dönüşümü artıran stratejilerle markanızı bir adım öne çıkarıyoruz.
            </p>
          </motion.div>
        </div>
      </section>




      {/* 4'lü Resim Bölümü */}
      <section className="flex justify-center items-center min-h-screen bg-[#F5F7FA] p-4 sm:p-10">
        <div className="flex flex-col md:flex-row w-full max-w-7xl items-center gap-6 sm:gap-8 md:gap-12">
          {/* Sol taraftaki Yazı */}
          <div className="w-full md:w-1/3 text-left px-4">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Farkınızı Ortaya Koymaya Hazır Olun!
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              Dijital dünyada iz bırakmanın zamanı geldi! Markanızı büyütmek, rakiplerinizin önüne geçmek ve dijitalin gücünü keşfetmek için buradayız.
              Hadi, birlikte başarıya adım atalım! Dijitalde fark yaratmak için ilk adımı şimdi atın!
            </p>
          </div>

          {/* Sağ taraftaki Kartlar */}
          <div className="flex gap-4 sm:gap-6 w-full md:w-2/3 overflow-hidden">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                className="relative w-1/2 sm:w-1/3 md:w-1/4 h-[320px] sm:h-[400px] md:h-[480px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                initial={{ y: destination.yOffset }}
                whileHover={{ scale: 1.1, y: destination.yOffset }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={destination.image}
                  alt={`Destination ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-5 left-5 text-white">
                  {/* Eğer title, subtitle veya price verisi eklenirse buraya ekleyin */}
                  <h3 className="text-xl font-bold">{destination.title || ""}</h3>
                  <p className="text-md">{destination.subtitle || ""}</p>
                  <span className="text-lg font-semibold">{destination.price || ""}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Howerlı Top Bölümü */}
      <div className="flex flex-col min-h-screen">
        {/* Üst Kısım (Sayfanın ilk yarısı) */}
        <div className="flex-1 relative flex items-center justify-center bg-white">
          <style>{`
            /* Daire (top) container stili */
            .circle-container {
              position: relative;
              width: 20rem;
              height: 20rem;
              border-radius: 9999px;
              background-color: #fff;
              border: 6px solid #000;
              overflow: hidden;
            }
            /* Küçük ekranlarda boyutlandırma */
            @media (max-width: 768px) {
              .circle-container {
                width: 15rem;
                height: 15rem;
              }
            }
            @media (max-width: 480px) {
              .circle-container {
                width: 12rem;
                height: 12rem;
              }
            }
            /* Çarşaf efekti */
            .circle-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 0;
              height: 100%;
              background-color: #000;
              transition: width 0.6s ease;
              z-index: 0;
            }
            .circle-container:hover .circle-overlay {
              width: 100%;
            }
            /* Metin ve ikon */
            .circle-text {
              color: #000;
              position: relative;
              z-index: 1;
              transition: color 0.6s ease;
            }
            .circle-container:hover .circle-text {
              color: #fff;
            }
          `}</style>

          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-4 sm:px-8 py-12 sm:py-20">
            {/* Solda: Hareketli Top */}
            <div className="relative mb-8 md:mb-0 md:mr-10">
              <motion.div animate={controlsX}>
                <motion.div
                  animate={controlsY}
                  className="circle-container group -left-40 flex flex-col items-center justify-center transition-all duration-300"
                >
                  <div className="circle-overlay"></div>
                  <Link to="/#services" className="circle-text text-lg sm:text-xl font-semibold text-center leading-snug">
                    Hizmetleri <br /> Keşfedin
                  </Link>
                  <Link to="/#services">
                    <FiArrowRight
                      onMouseEnter={handleArrowMouseEnter}
                      onMouseLeave={handleArrowMouseLeave}
                      className="circle-text text-2xl mt-2 transition-colors duration-300"
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Sağda: Metin Bloğu */}
            <div className="w-full md:w-1/2 p-4 sm:p-8 bg-gray-800 border-4 border-gray-900">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
                TRYSOFT ile Adım Adım Başarı!
              </h2>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg">
                Hızla değişen dünyada markalarınızı bir adım öne çıkaracak çözümler sunuyoruz.
                Her adımda işlerinizi daha verimli hale getirmek için stratejik bir yol haritası oluşturuyoruz.
                Teknolojiye olan bakış açımızla sektörünüzdeki potansiyelinizi ortaya çıkarıyoruz.
                Farklı ve etkili yaklaşımlarımızla işinizi geleceğe taşıyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Alt Kısım (Stratejik Yaklaşım Bölümü) */}
        <div className="flex-1 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
            {/* Üst Başlık */}
            <motion.div
              className="text-center mb-8 sm:mb-10 md:mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="block text-base sm:text-xl md:text-2xl font-extrabold text-black mb-4">
                Yenilikçi Adımlar Atmaya Hazır mısınız?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black">
                TRYSOFT'UN Stratejik Yaklaşımı
              </h2>
            </motion.div>

            {/* 3'lü Daire Kartlar */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Kart 1 */}
              <motion.div
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="flex flex-col items-center text-center w-full md:w-64 mb-6 md:mb-0"
              >
                <img
                  src="/image/details/details-top-1.jpg"
                  alt="Özsel Kimlik"
                  className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full object-cover shadow-lg"
                />
                <h3 className="mt-4 font-semibold text-base sm:text-lg">Özsel Kimlik</h3>
                <p className="text-xs sm:text-sm text-gray-600">Etkili Büyüme Sağlamak</p>
              </motion.div>

              {/* Kart 2 */}
              <motion.div
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="flex flex-col items-center text-center w-full md:w-64 mb-6 md:mb-0"
              >
                <img
                  src="/image/details/details-top-2.jpg"
                  alt="Ana Strateji"
                  className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full object-cover shadow-lg"
                />
                <h3 className="mt-4 font-semibold text-base sm:text-lg">Ana Strateji</h3>
                <p className="text-xs sm:text-sm text-gray-600">Hedef Kitle Belirlemek</p>
              </motion.div>

              {/* Kart 3 */}
              <motion.div
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="flex flex-col items-center text-center w-full md:w-64"
              >
                <img
                  src="/image/details/details-top-3.jpg"
                  alt="Uygulama ve Taktikler"
                  className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full object-cover shadow-lg"
                />
                <h3 className="mt-4 font-semibold text-base sm:text-lg">Uygulama ve Taktikler</h3>
                <p className="text-xs sm:text-sm text-gray-600">Performans Takibi Yapmak</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Neden Bizi Seçmelisiniz Bölümü */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          {/* Dönen Başlık */}
          <div style={{ perspective: "1000px" }}>
            <motion.h2
              initial={{ rotateY: 0 }}
              whileInView={{ rotateY: 360 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: false }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 inline-block px-4 sm:px-6 py-2 md:py-4 border-4 border-black rounded-lg"
            >
              Neden Bizi Seçmelisiniz?
            </motion.h2>
          </div>

          {/* Alt Açıklama */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            İşletmenizin büyümesi ve dijital dünyada güçlü bir konum elde etmesi için sunduğumuz avantajlar.
          </p>

          {/* Kartlar */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                img: "/image/details/details1.png",
                title: "7/24 Tam Destek",
                text: "Proje aşamasından ve teslim sürecine kadar 7/24 destek sunuyoruz."
              },
              {
                img: "/image/details/details2.png",
                title: "Profesyonel Çözüm",
                text: "Kaliteli ve yaratıcı çözümler ile markanızı güçlendiriyoruz."
              },
              {
                img: "/image/details/details3.png",
                title: "Müşteri Memnuniyeti",
                text: "Başarınız başarımızdır prensibiyle hareket ediyoruz."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0, 5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8 + index * 0.2
                  }}
                  className="flex flex-col items-center bg-white shadow-lg p-4 sm:p-6 md:p-8 rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl border-2 border-gray-300"
                >
                  <img src={item.img} alt={item.title} className="w-12 sm:w-16 md:w-20 mb-3" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700">{item.text}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp Butonu */}
      <button
        onClick={handleClick}
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center text-xl sm:text-2xl"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
}
