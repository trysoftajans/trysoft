import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

export default function SEO() {
  const handleClick = () => {
    const phoneNumber = "905456625080"; 
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleScroll = () => {
      const words = document.querySelectorAll(".title-word");
      words.forEach((word, index) => {
        if (
          word.getBoundingClientRect().top < window.innerHeight * 0.75 &&
          !word.classList.contains("text-gray-900")
        ) {
          setTimeout(() => {
            word.classList.remove("text-gray-400");
            word.classList.add("text-gray-900");
          }, index * 200);
        }
      });

      const paragraph = document.getElementById("animated-text");
      if (
        paragraph &&
        paragraph.getBoundingClientRect().top < window.innerHeight * 0.75
      ) {
        paragraph.classList.remove("opacity-0");
        paragraph.classList.add("opacity-100");
      }

      const logos = document.getElementById("logos");
      if (
        logos &&
        logos.getBoundingClientRect().top < window.innerHeight * 0.75
      ) {
        logos.classList.add("opacity-100");
        logos.classList.remove("opacity-0");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Aşağı kaydırma fonksiyonu
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const statsData = [
    { label: "SEO Başarı Oranı", percentage: 85 },
    { label: "Dijital Pazarlama Etkinliği", percentage: 75 },
    { label: "Organik Trafik Artışı", percentage: 90 },
    { label: "Müşteri Dönüşüm Oranı", percentage: 80 },
  ];
  const [animatedWidths, setAnimatedWidths] = useState(
    statsData.map(() => 0)
  );

  useEffect(() => {
    setTimeout(() => {
      setAnimatedWidths(statsData.map((item) => item.percentage));
    }, 500);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO Bölümü */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-4 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
        style={{
          backgroundImage: "url('/image/seo/background.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Koyu overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        {/* İçerik */}
        <div className="relative z-10 max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            SEO
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Google’da Zirveye Çıkın, Rakiplerinizi Geride Bırakın.
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto">
            Web siteniz hak ettiği yerde olsun! SEO ile görünürlüğünüzü artırın,
            potansiyel müşterileriniz sizi kolayca bulsun. Daha fazla trafik,
            daha fazla dönüşüm, daha fazla başarı!
          </p>
        </div>
        {/* Aşağı Kaydır Butonu */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-10 flex flex-col items-center cursor-pointer animate-bounce"
        >
          <span className="text-sm sm:text-base md:text-lg mb-2">Aşağı Kaydır</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </section>

      
            {/* 2. Bölüm */}
      <section className="min-h-screen bg-gray-100 px-4 py-10 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          {/* SOL KUTU */}
          <div className="relative bg-[#B88A62] text-white p-8 w-full md:w-1/2 lg:w-1/3 rounded-md shadow-lg md:ml-20 mt-10 min-h-[350px]">
            {/* Daire İçindeki Foto (mobilde relative, md: absolute & transform uygulanıyor) */}
            <div
              className="relative md:absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg md:transform md:-translate-x-1/2 md:-translate-y-1/4 mb-4 md:mb-0"
            >
              <img
                src="/image/seo/1.jpg"
                alt="Laptop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Metin İçeriği */}
            <div className="space-y-4 md:pl-40 w-full">
              <h2 className="text-2xl md:text-4xl font-bold">
                SEO ile İşinizi Büyütün
              </h2>
              <p className="text-white/90 text-sm leading-relaxed">
              SEO, uzun vadede işletmenizin dijital dünyadaki en büyük yatırımlarından 
              <br />
              biri olabilir. 
              Doğru anahtar kelimeler ve içerik stratejisiyle markanız, organik aramalarda sürekli olarak yeni müşterilere ulaşır. 
              Güçlü bir teknik altyapı, doğru optimizasyon çalışmaları ve kaliteli içerik ile rakiplerinizin önüne geçebilirsiniz.
              SEO, sadece görünürlüğünüzü artırmakla kalmaz, aynı zamanda markanızın dijital otoritesini de güçlendirir.
                <br />
                Trysoft olarak, işletmenizi dijitalde güçlendirmek için etkili SEO stratejileri sunuyoruz.
              </p>
              
            </div>
          </div>

          {/* SAĞ KUTU */}
          <div className="relative bg-[#B88A62] text-white p-8 w-full md:w-1/2 lg:w-1/3 rounded-md shadow-lg md:mr-20 mt-10 min-h-[350px]">
            {/* Daire İçindeki Foto (mobilde relative, md: absolute & transform uygulanıyor) */}
            <div
              className="relative md:absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg md:transform md:translate-x-1/2 md:translate-y-1/4 mb-4 md:mb-0"
            >
              <img
                src="/image/seo/2.jpg"
                alt="Laptop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Metin İçeriği */}
            <div className="space-y-2 md:pr-48 w-full">
              <h2 className="text-2xl md:text-4xl font-bold">
                Google’da Öne Çıkın
              </h2>
              <p className="text-white/90 text-sm leading-relaxed">
                Günümüzde tüketiciler, ihtiyaç duydukları ürün veya hizmeti bulmak için
                önce Google’a başvuruyor. Arama sonuçlarında ilk sayfada yer almak,
                markanızın daha fazla trafik ve müşteri çekmesini sağlar. SEO, sadece
                sıralamada yükselmek değil, doğru kitleye ulaşmak anlamına da gelir.
                Doğru içerik ve teknik optimizasyonla rakiplerinizin önüne geçerek
                sektörde güçlü bir otorite sahibi olabilirsiniz. 
                <br />
                Trysoft, size özel SEO çözümleriyle Google’da güçlü bir konum elde etmenize yardımcı olur.
              </p>
            
            </div>
          </div>
        </div>
      </section>



      {/* 3. Bölüm */}
      <section className="relative min-h-screen bg-[#B88A62] px-8 py-10 overflow-hidden">
        {/* Dekoratif Öğeler (sadece masaüstünde) */}
        <div className="hidden md:block absolute z-0 bg-white/80 w-[600px] h-[300px] bottom-16 left-48 rounded-md"></div>
        <div className="hidden md:block absolute bottom-16 right-32 w-20 h-20 bg-white rounded-full z-0 transition-transform transform hover:scale-125 hover:rotate-12 duration-300 ease-in-out"></div>
        <div className="hidden md:block absolute top-4 left-4 w-24 h-24 bg-white rounded-full shadow-md transition-transform transform hover:scale-125 hover:rotate-12 duration-300 ease-in-out"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between mt-10 gap-10">
          {/* Beyaz Kart */}
          <div className="relative bg-white p-8 md:p-10 rounded-md shadow-md w-full md:w-1/2 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Trysoft’un SEO Stratejisi
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Her işletmenin ihtiyacı farklı olduğu için SEO stratejimiz de tamamen
              özelleştirilmiş bir yaklaşımla hazırlanır. Öncelikle sektör analizi yaparak
              rakiplerinizin ve hedef kitlenizin arama alışkanlıklarını belirliyoruz.
              Teknik SEO, içerik optimizasyonu ve backlink çalışmalarıyla sitenizin
              Google’da daha üst sıralara çıkmasını sağlıyoruz.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Sürekli analiz ve optimizasyonlarla performansınızı artırarak sürdürülebilir
              başarı elde etmenize destek oluyoruz. Trysoft olarak, işletmenize en uygun
              SEO stratejisini geliştirerek dijitalde büyümenizi sağlıyoruz.
            </p>
            <a href="/details">
              <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition shadow-md">
                Detaylı Bilgi
              </button>
            </a>
          </div>

          {/* Fotoğraf */}
          <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/image/seo/3.jpg"
              alt="Man with laptop"
              className="w-full max-w-md object-cover rounded-md shadow-md transition-transform transform hover:scale-110 hover:shadow-xl duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>

      {/* 4. Bölüm */}
      <section className="py-16 px-4 bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Sol Kısım */}
          <div className="border-l-4 border-[#B88A62] pl-4">
            <h2 className="text-5xl font-bold mt-0 transition-all duration-1000 transform translate-y-2 opacity-100 ease-in-out">
              <span className="title-word text-gray-400">SEO</span>{" "}
              <span className="title-word text-[#B88A62] animate-bounce">
                ile
              </span>{" "}
              <span className="title-word text-gray-400">Daha</span>{" "}
              <span className="title-word text-gray-400">Fazla</span>{" "}
              <span className="title-word text-[#B88A62]">Trafik,</span>{" "}
              <span className="title-word text-gray-400">Daha</span>{" "}
              <span className="title-word text-gray-400">Fazla</span>{" "}
              <span className="title-word text-[#B88A62]">Başarı!</span>
            </h2>
            <p className="opacity-100 transition-opacity duration-500 mt-4 text-gray-600">
              Web sitenizi arama motorları için mükemmelleştirerek markanızı
              organik olarak büyütüyoruz! SEO, hedef kitlenize ulaşmanın en
              etkili yoludur. Görünürlüğünüzü artırıyor, sitenizi arama
              sonuçlarında üst sıralara taşıyarak potansiyel müşterilerinizin
              sizi kolayca bulmasını sağlıyoruz.
              <br />
              <br />
              Web sitenizin içeriğini ve teknik altyapısını Google’ın
              kriterlerine göre optimize ederek uzun vadeli başarı sağlıyoruz.
              Dijital dünyada güçlü bir yer edinmek ve rakiplerinizin önüne
              geçmek için{" "}
              <span className="font-semibold text-[#B88A62]">
                SEO’nun gücünden faydalanın.
              </span>
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block px-6 py-3 text-white font-bold bg-[#B88A62] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#A06D4A]"
              >
                Daha Fazla Bilgi Al
              </a>
            </div>
          </div>

          {/* Sağ Kısım */}
          <div className="relative w-full flex justify-center">
            <div className="absolute w-[90%] h-[90%] bg-[#B88A62] rounded-lg rotate-6 -z-10 hidden md:block"></div>
            <img
              src="/image/seo/4.jpg"
              alt="SEO Strategy"
              className="w-[85%] rounded-lg shadow-lg transition-transform duration-500 animate-fadeInUp hover:translate-y-[-10px]"
            />
          </div>
        </div>
      </section>

      {/* 5. Bölüm */}
      <section className="py-20 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fadeIn">
              <span className="text-[#B88A62] animate-bounce">Trysoft</span> ile
              SEO Gücünü Keşfet
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              SEO odaklı dijital pazarlama ile markanızı büyütün.
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Kart 1 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="bg-[#B88A62] p-3 rounded-full text-white">
                  🎯
                </div>
                <h3 className="text-2xl font-semibold">Hedef Kitlenize Ulaşın</h3>
              </div>
              <p className="mt-4 text-gray-700">
                Doğru anahtar kelimelerle potansiyel müşterilerinize erişin.
                SEO odaklı dijital pazarlama ile markanızı büyütün.
              </p>
            </div>

            {/* Orta Fotoğraf */}
            <div className="relative flex justify-center">
              <img
                src="/image/seo/5.jpg"
                alt="SEO Feature"
                className="w-full max-w-xs rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Kart 2 */}
            <div className="bg-[#B88A62] text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full text-[#B88A62]">
                  ✍️
                </div>
                <h3 className="text-2xl font-semibold">
                  Doğru İçerikle Daha Fazla Müşteri Çekin
                </h3>
              </div>
              <p className="mt-4">
                SEO uyumlu içeriklerle marka bilinirliğinizi artırın. Etkileyici
                ve kaliteli içeriklerle kullanıcıların ilgisini çekin.
              </p>
            </div>

            {/* Kart 3 */}
            <div className="bg-[#B88A62] text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full text-[#B88A62]">
                  📊
                </div>
                <h3 className="text-2xl font-semibold">
                  SEO Stratejinizi Verilerle Güçlendirin
                </h3>
              </div>
              <p className="mt-4">
                Analiz ve raporlamalarla SEO performansınızı sürekli iyileştirin.
                Gerçek zamanlı verilerle stratejilerinizi optimize edin ve
                rekabet avantajı kazanın.
              </p>
            </div>

            {/* Sağ Alt Fotoğraf */}
            <div className="relative flex justify-center">
              <img
                src="/image/seo/6.jpg"
                alt="Marketing"
                className="w-full max-w-xs rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Kart 4 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="bg-[#B88A62] p-3 rounded-full text-white">
                  🚀
                </div>
                <h3 className="text-2xl font-semibold">
                  İşletmenizi Daha Görünür Hale Getirin
                </h3>
              </div>
              <p className="mt-4 text-gray-700">
                Özel SEO çözümleriyle markanızı zirveye taşıyın. Trysoft’un
                sürdürülebilir ve etkili SEO stratejileriyle kalıcı başarı elde
                edin.
              </p>
            </div>
          </div>

          {/* CTA Butonu */}
          <div className="text-center mt-16">
            <a
              href="/contact"
              className="px-8 py-4 text-white font-bold bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-800"
            >
              Hadi başlayalım!
            </a>
          </div>
        </div>
      </section>

      

        
          {/* 6. Progress Bars Bölümü */}
<section className="py-16 px-4 bg-white overflow-hidden">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
    {/* Sol Fotoğraf */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src="/image/seo/7.jpg"
        alt="SEO Progress"
        className="w-full max-w-lg rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* Sağ Progress Barlar ve Buton */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center lg:text-left">
        <span className="text-[#B88A62] block animate-bounce">
        SEO'nun %lik etkisi
        </span>
      </h2>
      {statsData.map((item, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-gray-900 font-semibold bg-white/70 px-2 py-1 rounded">
              {item.label}
            </span>
            <span className="text-gray-900 font-semibold bg-white/70 px-2 py-1 rounded">
              {item.percentage}%
            </span>
          </div>
          <div className="relative w-full h-[6px] bg-gray-300 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#B88A62] transition-all duration-1000 ease-out"
              style={{ width: `${animatedWidths[index]}%` }}
            ></div>
          </div>
        </div>
      ))}

      
      {/* Sürekli Sıvı Efektli Buton */}
<div className="mt-8 flex justify-center">
  <a
    href="/contact"
    className="relative inline-flex items-center justify-center px-6 py-3 border border-[#B88A62] text-[#B88A62] font-medium rounded-full overflow-hidden focus:outline-none liquid-button"
  >
    <span className="relative z-10">Hemen Başlayalım!</span>
  </a>
</div>




      
    </div>
  </div>

  {/* CSS Animasyon ve Stil */}
  <style jsx>{`
    .liquid-button {
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    .liquid-button:hover {
      transform: scale(1.05);
    }
    .liquid-button::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background: #B88A62;
      top: 0;
      transform: translateY(0%);
      clip-path: polygon(0 60%, 20% 65%, 40% 60%, 60% 65%, 80% 60%, 100% 65%, 100% 100%, 0 100%);
      z-index: 0;
      animation: fillLiquid 3s ease-in-out infinite;
    }
    @keyframes fillLiquid {
      0% {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(40%);
      }
      100% {
        transform: translateY(0%);
      }
    }
  `}</style>
</section>




      {/* WhatsApp Butonu */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center text-2xl"
      >
        <FaWhatsapp />
      </button>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
