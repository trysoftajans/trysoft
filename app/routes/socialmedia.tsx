import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

export default function SocialMedia() {

  const handleClick = () => {
    const phoneNumber = "905456625080"; 
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 1. BÖLÜM: Hero/Kapak */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-6 sm:px-10 md:px-16 lg:px-20 overflow-x-hidden"
        style={{
          backgroundImage: "url('/image/social-media/background.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Koyu overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* İçerik */}
        <div className="relative z-10 max-w-6xl text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
            SOSYAL MEDYA YÖNETİMİ
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            Google’da Zirveye Çıkın, Rakiplerinizi Geride Bırakın.
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto">
            Web siteniz hak ettiği yerde olsun! SEO ile görünürlüğünüzü artırın, 
            potansiyel müşterileriniz sizi kolayca bulsun. Daha fazla trafik, 
            daha fazla dönüşüm, daha fazla başarı!
          </p>
        </div>

        {/* Aşağı Kaydır Butonu */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-10 flex flex-col items-center z-10 cursor-pointer animate-bounce"
        >
          <span className="text-white text-sm sm:text-base md:text-lg mb-2">
            Aşağı Kaydır
          </span>
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </section>








      {/* 2. BÖLÜM  */}
      <section className="relative w-full min-h-[800px] bg-white overflow-x-hidden">
  {/* SİYAH-SARI ÇİZGİLER (Sol Alt Köşe) - YANYANA */}
  <div className="absolute bottom-2 left-2 flex flex-row space-x-1 z-30">
    <div className="w-16 h-2 bg-black"></div>
    <div className="w-16 h-2 bg-yellow-500"></div>
    <div className="w-16 h-2 bg-black"></div>
  </div>

  {/* FOTOĞRAF (SAĞ TARAF) - Masaüstü: absolute, mobil: normal akış */}
  <div className="w-full md:w-1/2 md:absolute md:top-5 md:bottom-0 md:right-0 z-10">
    <img
      src="/image/social-media/1.jpg"
      alt="Creative Agency"
      className="w-full h-full object-cover"
    />
  </div>

  {/* SOLDAKİ İÇERİK (BAŞLIK, BUTON) */}
  <div className="relative z-20 w-full md:w-1/2 px-6 py-16 flex flex-col">
    {/* BAŞLIK */}
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug mb-4 text-black">
      <span className="inline-block bg-black text-yellow-500 px-3 py-1">
        Markanızı
      </span>
      <span className="inline-block bg-yellow-500 text-black px-3 py-1 ml-2">
        Sosyal Medyada
      </span>
      <br />
      <span className="inline-block bg-black text-yellow-500 mt-2">
        Büyütelim
      </span>
    </h2>

    {/* AÇIKLAMA */}
    <p className="text-gray-600 mb-6">
      Sosyal medya, markanızın kimliğini güçlendiren, hedef kitlenizle doğrudan etkileşim kurmanızı sağlayan en etkili alanlardan biri. 
      Trysoft olarak, sadece içerik paylaşmakla kalmıyor, markanızın hedeflerine uygun stratejiler geliştirerek sizi doğru kitleyle buluşturuyoruz.
    </p>

    {/* KISA (SABİT GENİŞLİK) BUTON - /contact sayfasına yönlendirir */}
    <a
      href="/contact"
      className="inline-flex items-center justify-center w-52 h-12 bg-black text-white font-bold rounded text-sm transform transition-all duration-300 hover:bg-yellow-600 hover:scale-105 mb-8"
    >
      BAŞLAMAYA NE DERSİN?
    </a>
  </div>

  {/* KARTLAR: ALT BÖLÜM - Masaüstü: absolute, mobil: normal akış */}
  <div className="w-full px-6 pb-6 md:absolute md:bottom-0 md:left-0">
    <div className="flex flex-col sm:flex-row justify-between gap-12">
      {/* Kart 1 (En solda) */}
      <div className="bg-yellow-500 p-4 h-64 flex-1 rounded-2xl shadow relative z-20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center flex items-center justify-center gap-2">
          {/* Tik ikonu (siyah daire, beyaz tik) */}
          <svg className="w-6 h-6 text-black" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="8" />
            <path
              fill="#FFF"
              d="M6.173 9.586l3.536-3.536a.5.5 0 0 1 .707.708L6.53 10.707a.5.5 0 0 1-.707 0L4.354 9.237a.5.5 0 1 1 .707-.708l1.112 1.057z"
            />
          </svg>
          <span>Doğru Adımlar</span>
        </h3>
        <p className="text-gray-800 text-sm">
          Sosyal medyada sadece var olmak yetmez, doğru adımları atmak gerekir. 
          Markanızı güçlendiren, sizi hedef kitlenizle buluşturan ve etkileşim sağlayan stratejilerle sosyal medya hesaplarınızı yönetiyoruz.
        </p>
      </div>

      {/* Kart 2 (Ortada) */}
      <div className="bg-yellow-500 p-4 h-64 flex-1 rounded-2xl shadow relative z-20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center flex items-center justify-center gap-2">
          <svg className="w-6 h-6 text-black" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="8" />
            <path
              fill="#FFF"
              d="M6.173 9.586l3.536-3.536a.5.5 0 0 1 .707.708L6.53 10.707a.5.5 0 0 1-.707 0L4.354 9.237a.5.5 0 1 1 .707-.708l1.112 1.057z"
            />
          </svg>
          <span>Etkileyici İçerikler</span>
        </h3>
        <p className="text-gray-800 text-sm">
          Sosyal medyada fark edilmek için dikkat çeken içeriklere ihtiyacınız var. 
          Markanızı en iyi şekilde yansıtan özgün ve etkileyici paylaşımlar hazırlıyoruz.
        </p>
      </div>

      {/* Kart 3 (En sağda; masaüstünde fotoğrafın üstüne taşan) */}
      <div className="bg-yellow-500 p-4 h-64 flex-1 rounded-2xl shadow relative z-20 md:-mr-18 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center flex items-center justify-center gap-2">
          <svg className="w-6 h-6 text-black" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="8" />
            <path
              fill="#FFF"
              d="M6.173 9.586l3.536-3.536a.5.5 0 0 1 .707.708L6.53 10.707a.5.5 0 0 1-.707 0L4.354 9.237a.5.5 0 1 1 .707-.708l1.112 1.057z"
            />
          </svg>
          <span>Etkili Yönetim</span>
        </h3>
        <p className="text-gray-800 text-sm">
          Hesaplarınızı yalnızca yönetmekle kalmıyor, aktif ve dinamik bir marka algısı oluşturuyoruz. 
          Etkileşimi artırarak hedef kitlenizle güçlü bir bağ kurmanızı sağlıyoruz.
        </p>
      </div>
    </div>
  </div>
</section>






          
      {/* 3. BÖLÜM  */}
      <section className="bg-white py-8 px-4">
  <style jsx>{`
    @keyframes wave {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-wave {
      animation: wave 2s ease-in-out infinite;
    }
    @keyframes dripDrop {
      0% { height: 0; opacity: 1; }
      50% { height: 20px; opacity: 0.5; }
      100% { height: 0; opacity: 0; }
    }
    .drip-black {
      position: relative;
      color: black;
    }
    .drip-black::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -5px;
      width: 2px;
      height: 0;
      background: black;
      transform: translateX(-50%);
      animation: dripDrop 2s infinite;
    }
  `}</style>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
    {/* SOL KISIM (METİN ve BLOKLAR) */}
    <div className="md:w-1/2 space-y-2">
      {/* GRAFFITI STİLİNDE BAŞLIK (SİYAH ve DRIP EFECT) */}
      <h2 className="text-4xl md:text-5xl font-extrabold font-graffiti drip-black">
      Trysoft ile Doğru Kitleye,  &amp; Doğru Mesaj
      </h2>

      {/* 1. BLOK (SİYAH ARKA PLAN - YELLOW TEXT + DALGALANMA EFECT) */}
      <div className="relative px-4 py-10 md:px-6 md:py-20 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full z-0"
          viewBox="0 0 1200 350"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="black"
            d="
              M0,70
              Q150,0 300,70
              T600,70
              T900,70
              T1200,70
              L1200,280
              Q1050,350 900,280
              T600,280
              T300,280
              T0,280
              Z
            "
          />
        </svg>
        <div className="relative z-10 text-yellow-500 leading-relaxed animate-wave">
          <h3 className="text-xl font-semibold mb-1">Sosyal Medya Stratejileri</h3>
          <p className="text-sm md:text-base">
          Sosyal medyada başarılı olmak için sadece içerik paylaşmak yetmez, doğru bir plan gerekir! Markanız için hedef kitlenize uygun, 
          etkili ve dikkat çeken içerikler hazırlıyor, sizi her platformda en iyi şekilde temsil ediyoruz.
          </p>
        </div>
      </div>

      {/* 2. BLOK (SARI ARKA PLAN - BLACK TEXT + DALGALANMA EFECT) */}
      <div className="relative px-4 py-10 md:px-6 md:py-20 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full z-0"
          viewBox="0 0 1200 350"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fcd34d"
            d="
              M0,70
              Q150,0 300,70
              T600,70
              T900,70
              T1200,70
              L1200,280
              Q1050,350 900,280
              T600,280
              T300,280
              T0,280
              Z
            "
          />
        </svg>
        <div className="relative z-10 text-black leading-relaxed animate-wave">
          <h3 className="text-xl font-semibold mb-1">Marka Yönetimi ve Büyüme</h3>
          <p className="text-sm md:text-base">
          Sosyal medya hesaplarınızı titizlikle yönetiyor, takipçilerinizle güçlü bir bağ kurmanıza yardımcı oluyoruz. 
          Etkileşimi artırmak, doğru mesajı vermek ve markanızı öne çıkarmak için stratejik adımlar atıyoruz.
          </p>
        </div>
      </div>

      {/* 3. BLOK (SİYAH ARKA PLAN - YELLOW TEXT + DALGALANMA EFECT) */}
      <div className="relative px-4 py-10 md:px-6 md:py-20 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full z-0"
          viewBox="0 0 1200 350"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="black"
            d="
              M0,70
              Q150,0 300,70
              T600,70
              T900,70
              T1200,70
              L1200,280
              Q1050,350 900,280
              T600,280
              T300,280
              T0,280
              Z
            "
          />
        </svg>
        <div className="relative z-10 text-yellow-500 leading-relaxed animate-wave">
          <h3 className="text-xl font-semibold mb-1">Sonuç Odaklı Çözümler</h3>
          <p className="text-sm md:text-base">
          Sadece paylaşımlarınızı değil, aldığınız geri dönüşleri de analiz ediyor, 
          her geçen gün daha iyi sonuçlar almanız için çalışmalarımızı geliştiriyoruz. 
          Kampanyalarınızı en iyi şekilde yöneterek hedeflerinize ulaşmanızı sağlıyoruz.
          </p>
        </div>
      </div>
    </div>

    {/* SAĞ KISIM (BÜYÜK DAİRE + KÜÇÜK DAİRELER) */}
    <div className="md:w-1/2 flex items-center justify-center relative">
      {/* BÜYÜK DAİRE */}
      <img
        src="/image/social-media/2.jpg"
        alt="Marketing Lady"
        className="w-64 h-64 md:w-[32rem] md:h-[32rem] object-cover rounded-full shadow-lg transition duration-300 transform hover:scale-105"
      />
      {/* KÜÇÜK DAİRE 1 (ÜSTTE) */}
      <img
        src="/image/social-media/3.jpg"
        alt="Small Circle 1"
        className="w-24 h-24 md:w-48 md:h-48 object-cover rounded-full shadow-lg absolute top-4 right-4 md:top-[5rem] md:right-[6rem] transition duration-300 transform hover:-rotate-6"
      />
      {/* KÜÇÜK DAİRE 2 (ALTA) */}
      <img
        src="/image/social-media/4.jpg"
        alt="Small Circle 2"
        className="w-24 h-24 md:w-48 md:h-48 object-cover rounded-full shadow-lg absolute bottom-4 right-4 md:bottom-[5rem] md:right-[8rem] transition duration-300 transform hover:rotate-6"
      />
    </div>
  </div>
</section>








      {/* 4. BÖLÜM  */}
      <section className="w-full py-16 px-6 bg-white relative">
  <div className="max-w-6xl mx-auto space-y-12">
    
    {/* ÜSTTEKİ İKİ ÇERÇEVE (YAN YANA) */}
    <div className="flex flex-col md:flex-row gap-0">

      {/* SOL ÇERÇEVE: BAŞLIK */}
      <div className="bg-yellow-500 shadow p-8 md:w-1/2 rounded-l-lg">
        {/* Daha büyük ve kalın bir başlık */}
        <h2 className="text-5xl md:text-5xl font-extrabold mb-4 leading-tight">
          Sosyal Medya Yönetimi İçin Neden Trysoft?
        </h2>
        <p className="text-gray-700">
          Sosyal medyada başarılı olmanın yolu, hedef kitlenizi anlamaktan ve onlarla doğru şekilde iletişim kurmaktan geçer. 
          Trysoft olarak, insanların sosyal medyayı nasıl kullandığını analiz ediyor ve markanıza özel stratejiler geliştiriyoruz.
          Belki de “Sosyal medya yönetimi benim için ne kadar önemli?” diye düşünüyorsunuz. 
          Cevap basit: Doğru yönetildiğinde, sosyal medya markanızın bilinirliğini artırmanın en etkili ve en düşük maliyetli yollarından biridir. 
          Biz, en uygun stratejilerle hedef kitlenize ulaşmanızı sağlıyor, 
          yalnızca takipçi kazanmakla kalmayıp markanızı gerçekten güçlendirecek adımlar atıyoruz.
        </p>
      </div>

      {/* SAĞ ÇERÇEVE: FOTOĞRAF (HOVER EFEKTİ) */}
      <div className="bg-white shadow p-8 md:w-1/2 rounded-r-lg">
        <img
          src="/image/social-media/5.jpg" 
          alt="Stella Northton"
          className="
            w-full h-auto object-cover rounded
            transition-transform duration-300 
            hover:scale-110 hover:shadow-2xl
          "
        />
      </div>
    </div>

    {/* ALTTAKİ KART (TEK ÇERÇEVE) */}
    <div className="bg-white shadow rounded p-8 flex flex-col md:flex-row items-start md:items-center gap-8">
      
      {/* SOL KISIM: BÜYÜK BAŞLIK + SARI ÇİZGİ EFEKTİ + YANIP SÖNME */}
      <div className="md:w-1/2 relative">
        {/* 
          - Yanıp sönme efekti: blinkText class’ı
          - Sarı çizgi: absolutely positioned bir div 
        */}
        <h2
          className="
            text-4xl md:text-5xl font-extrabold mb-2
            text-black transition-colors duration-300 
            hover:text-yellow-500 
            blinkText
            relative
            z-10
          "
        >
          Sosyal Medyada 
          <br />
          Öne Çıkın
        </h2>

        {/* Sarı çizgi (arkada) */}
        <div
          className="
            absolute 
            -z-0 
            bg-yellow-300 
            h-2 
            w-4/5 
            left-0 
            top-1/2 
            transform 
            -translate-y-1/2
          "
        ></div>
      </div>

      {/* SAĞ KISIM: YAZI + BUTON (TRANSITION DURATION) */}
      <div className="md:w-1/2">
        <p className="text-gray-700 mb-6">
          Başarılı bir sosyal medya yönetimi yalnızca içerik paylaşmak değil, takipçilerinizle gerçek bir bağ kurmayı gerektirir. 
          Trysoft olarak, özgün içerikler, etkili reklam stratejileri ve profesyonel yönetim ile markanızı dijitalde bir adım öne çıkarıyoruz.
        </p>
        
        <a
          href="/contact"
          className="
            inline-flex items-center justify-center
            w-52 h-12
            bg-black text-white font-bold
            rounded text-sm
            transform
            transition-all duration-300
            hover:bg-yellow-600 hover:scale-105
            mb-8
          "
        >
          BİZİMLE İLETİŞİME GEÇİN!
        </a>
      </div>
    </div>
  </div>

  {/* Yanıp sönme animasyonu için style bloğu */}
  <style jsx>{`
    .blinkText {
      animation: blink 1.2s infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `}</style>
</section>








      {/* WhatsApp Butonu */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center text-2xl z-50"
      >
        <FaWhatsapp />
      </button>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
