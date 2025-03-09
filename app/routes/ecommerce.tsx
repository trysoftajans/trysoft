import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";
import React, { useEffect, useRef } from "react";

export default function ECommerce() {

  const photoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Görsel ekrana girdiğinde "show" sınıfını ekleyerek translateX(0) yapıyoruz
        if (entry.isIntersecting) {
          photoRef.current.classList.add("show");
        }
      },
      { threshold: 0.1 }
    );

    if (photoRef.current) {
      observer.observe(photoRef.current);
    }
  }, []);


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
          top: window.innerHeight, // Bir sonraki bölüme kaydır
          behavior: "smooth",
        });
      };


 


    return (
        <>

          {/* 1.bölüm arka-plan */}
       
       <section
       className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-6 sm:px-10 md:px-16 lg:px-20 overflow-x-hidden"
       style={{
         backgroundImage: "url('/image/ecommerce/background.jpg')",
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "center",
       }}
     >
       {/* Arka plan için koyu overlay */}
       <div className="absolute inset-0 bg-black bg-opacity-0"></div>
 
       {/* İçerik */}
       <div className="relative z-10 max-w-6xl text-center px-4 sm:px-6 md:px-8">
         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
           E-TİCARET DANIŞMANLIĞI
         </h1>
         <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
         E-Ticaret sektörüne adım atmak veya mevcut satışlarınızı büyütmek mi istiyorsunuz? 
         </h2>
         <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto">
         TrySoft, kapsamlı çözümleriyle markanızı güçlendirmeye ve satış performansınızı artırmaya odaklanır!
         </p>
       </div>
 
       {/* Aşağı Kaydır Butonu */}
       <button
         onClick={scrollToNextSection}
         className="absolute bottom-10 flex flex-col items-center z-10 cursor-pointer animate-bounce"
       >
         <span className="text-white text-sm sm:text-base md:text-lg mb-2">Aşağı Kaydır</span>
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






        {/* 2.bölüm  */}
        <section className="py-12 px-4 bg-black">
  <div className="max-w-8xl mx-auto bg-black rounded-md p-6 shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      {/* Sol kolon (7 sütun, metin merkezde) */}
      <div className="md:col-span-7 text-center">
        <h2 className="text-6xl font-bold mb-4 text-white leading-tight transition-transform duration-300 hover:scale-105">
          Profesyonel
          <br />
          <span className="text-[#148d7c]">E-Ticaret</span> Hizmetleri
        </h2>

        <p className="mb-6 text-white">
          E-Ticaret dünyasına adım atmak istiyorsunuz ama nereden başlayacağınızı bilmiyor musunuz? 
          Başladınız ama satışlar istediğiniz gibi gitmiyor mu? TrySoft ile tanışın! E-Ticaret yolculuğunuzda ihtiyacınız olan her adımda yanınızdayız. 
          Profesyonel çözümlerimizle markanızı güçlendirin, satışlarınızı artırın ve sektörde öne çıkın.
        </p>

        <a href="/details">
          <button
            type="button"
            className="inline-block bg-[#148d7c] text-white py-2 px-4 rounded hover:bg-[#0e6b5a] transition-transform duration-300 hover:scale-105"
          >
            Detaylı Bilgi
          </button>
        </a>
      </div>

      {/* Sağ kolon (5 sütun) */}
      <div className="md:col-span-5 flex justify-center">
        <img
          src="/image/ecommerce/1.jpg"
          alt="Digital Marketing"
          className="rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  </div>
  <div className="my-8 h-3 bg-[#148d7c]"></div>
  
</section>






        {/* 3.bölüm  */}
        <section className="py-12 px-4 bg-black text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">
      E-Ticaretinizi Büyütmek İçin Doğru Stratejiler
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Sol kolon */}
      <div className="space-y-6">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3 bg-[#148d7c] rounded-full leading-none"></span>
          <p className="leading-relaxed">
            <span className="text-[#148d7c]">Doğru Pazarı ve Rakipleri Tanıyın.</span> Sektörünüzde neler olup bittiğini anlamak, hedef kitlenizi belirlemek ve rakiplerinizden bir adım önde olmak için detaylı analiz yapıyoruz.
          </p>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3 bg-[#148d7c] rounded-full leading-none"></span>
          <p className="leading-relaxed">
            <span className="text-[#148d7c]">Size En Uygun E-Ticaret Altyapısını Seçin.</span> Shopify, WooCommerce, Magento gibi platformlar arasında işletmenize en uygun olanı belirleyip, kurulum ve optimizasyon süreçlerini yönetiyoruz.
          </p>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3 bg-[#148d7c] rounded-full leading-none"></span>
          <p className="leading-relaxed">
            <span className="text-[#148d7c]">Ürünlerinizi Etkili Bir Şekilde Sunun.</span> Ürünlerinizi doğru kategorilere ayırıyor, açıklamalarını ve görsellerini optimize ederek müşterilerinize en iyi alışveriş deneyimini sunmanızı sağlıyoruz.
          </p>
        </div>
      </div>

      {/* Sağ kolon */}
      <div className="space-y-6">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3 bg-[#148d7c] rounded-full leading-none"></span>
          <p className="leading-relaxed">
            <span className="text-[#148d7c]">Müşteri Deneyimini Geliştirin, Satışları Artırın.</span> Ziyaretçilerinizi müşteriye dönüştürecek kullanıcı dostu bir site yapısı oluşturuyor, ödeme ve sipariş süreçlerini en verimli hale getiriyoruz.
          </p>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3 bg-[#148d7c] rounded-full leading-none"></span>
          <p className="leading-relaxed">
            <span className="text-[#148d7c]">Reklam ve Pazarlama ile Daha Fazla Müşteriye Ulaşın.</span> Google Ads, Facebook &amp; Instagram reklamları gibi kanalları kullanarak işletmenizi büyütmenize destek oluyoruz.
          </p>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3 bg-[#148d7c] rounded-full leading-none"></span>
          <p className="leading-relaxed">
            <span className="text-[#148d7c]">Müşteri Memnuniyetini Artırın.</span> İade, değişim ve satış sonrası destek süreçlerinizi iyileştirerek müşteri sadakati kazanmanıza yardımcı oluyoruz.
          </p>
        </div>
      </div>
    </div>
  </div>

  

  <div className="max-w-6xl mx-auto text-center mt-10">
    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
      Make your marketing <span className="text-[#148d7c]">more effective</span>
    </h3>

    

    <a href="/contact">
  <button
    type="button"
    className="inline-block bg-white text-[#148d7c] py-3 px-6 rounded transition-transform duration-1000 hover:bg-[#148d7c] hover:text-white custom-hover-rotate"
  >
    İLETİŞİM
  </button>
</a>

<style jsx>{`
  .custom-hover-rotate {
    transform: perspective(500px) rotateX(0deg);
  }
  .custom-hover-rotate:hover {
    transform: perspective(500px) rotateX(360deg);
  }
`}</style>


  </div>
</section>









         {/* 4.bölüm  */}
         <section className="relative py-12 px-4 bg-black text-white min-h-screen">
  <div className="max-w-6xl mx-auto">
    {/* Başlık */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      <span className="text-[#148d7c]">E-Ticaret</span> Danışmanlığı ile Satışlarınızı Artırın
    </h2>

    {/* Açıklama */}
    <p className="leading-relaxed mb-8 max-w-4xl">
      <span className="text-[#148d7c] font-bold">E-ticaret</span> dünyasında başarılı olmak, yalnızca bir web sitesi açmak ya da ürün yüklemekle bitmiyor.
      Rekabetin her geçen gün arttığı dijital ortamda fark yaratmak, doğru stratejiler geliştirmek ve
      markayı güvenilir en üst seviyeye çıkarmak gerekiyor. İşte bu noktada
      <span className="font-bold text-[#148d7c]"> E-Ticaret </span>
      danışmanlığı devreye giriyor!
    </p>

    <div className="relative w-full md:h-[700px] mt-8 flex flex-col md:block">
      {/* 1. Kutu (yeşil) */}
      <div className="hover-rotate bg-[#148d7c] text-white p-6 rounded shadow-md max-w-md leading-relaxed mb-8 md:absolute md:top-0 md:left-0">
        <div className="text-xl font-bold mb-2">1</div>
        <p>
          <span className="font-bold">E-ticaret</span> danışmanlığı, işletmenizin online satış dünyasında
          başarılı olmasını sağlamak için kapsamlı stratejiler ve çözümler
          sunar. Sektör analizi, ürün yönetimi, pazarlama ve lojistik gibi
          kritik alanlarda uzman desteği alarak rekabetçi avantaj
          sağlamanıza yardımcı oluyoruz.
        </p>
      </div>

      {/* 2. Kutu (beyaz) */}
      <div className="hover-rotate bg-white text-black p-6 rounded shadow-md max-w-md leading-relaxed mb-8 md:absolute md:top-1/2 md:left-1/3 md:-translate-y-1/2 z-10">
        <div className="text-xl font-bold text-[#148d7c] mb-2">2</div>
        <p>
          Ürünlerinizi en iyi şekilde sunarak, açıklamalarını ve görsellerini
          optimize ederek satışlarınızı artırıyoruz. Ayrıca, kullanıcı
          deneyimini iyileştirmek için ödeme ve kargo süreçlerinizi
          kolaylaştırıyor, müşteri memnuniyetini artırmak için etkili
          yöntemler geliştiriyoruz.
        </p>
      </div>

      {/* Sol tarafa dalgalı çizgi (SVG) */}
      <div className="hidden md:block absolute top-1/3 left-0 w-72 h-32 pointer-events-none z-0">
        <svg
          viewBox="0 0 200 80"
          fill="none"
          stroke="#148d7c"
          strokeWidth="3"
          strokeLinecap="round"
          className="w-full h-full"
        >
          <path d="M 10 40 C 30 10, 70 10, 90 40 S 130 70, 150 40" />
          <path d="M 20 50 C 40 20, 80 20, 100 50 S 140 80, 160 50" />
          <path d="M 0 35 C 20 5, 60 5, 80 35 S 120 65, 140 35" />
        </svg>
      </div>

      {/* Fotoğraf - sağ alt (mobilde kaydırılmasını önlemek için sabitlendi) */}
      <div
        ref={photoRef}
        className="hidden md:block absolute bottom-[-40px] right-0 md:transform md:translate-x-full md:transition-transform md:duration-2000"
      >
        <img
          src="/image/ecommerce/2.jpg"
          alt="E-Ticaret Danışmanlığı"
          className="w-72 h-48 rounded-lg object-cover"
        />
      </div>

      {/* Sağ üstte daire fotoğraf (mobilde gizlendi) */}
      <div className="hidden md:block group hover-rotate absolute top-0 right-0 w-96 h-96 rounded-full overflow-hidden border-4 border-[#148d7c]">
        <img
          src="/image/ecommerce/3.jpg"
          alt="Circle Photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-0.5 bg-[#148d7c] transition-all duration-700 group-hover:h-16"></div>
      </div>
    </div>
  </div>

  {/* Stil ve animasyonlar */}
  <style jsx>{`
    .hover-rotate {
      transform: perspective(800px) rotateX(0deg);
      transition: transform 2s ease-in-out;
    }
    .hover-rotate:hover {
      transform: perspective(800px) rotateX(360deg);
    }
    .show {
      transform: translateX(0);
    }
  `}</style>
</section>






          {/* 5.bölüm  */}
          <section className="py-20 px-4 bg-black text-white">
  <div className="max-w-6xl mx-auto">
    {/* Üst kısım: Başlık ortalandı, sağda metin ve buton */}
    <div className="grid md:grid-cols-2 gap-12 items-start relative">
      {/* Sol sütun: Başlık (ortalandı sadece mobilde) */}
      <div className="flex md:block justify-center items-center text-center w-full md:w-auto">
        <h2 className="text-5xl font-bold mb-2 leading-tight relative inline-block before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-[#148d7c] before:transition-all before:duration-500 before:scale-x-0 hover:before:scale-x-100">
          Biz  
          <br />
          <span className="text-[#148d7c]">E-Ticareti</span> Güçlendiriyoruz
        </h2>
      </div>

      {/* Orta çizgi (dik çizgi sadece masaüstünde) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 bg-[#148d7c] transform -translate-x-1/2"></div>

      {/* Sağ sütun: Metin ve buton */}
      <div>
        <p className="mb-4 leading-relaxed">
          E-ticaret dünyasında başarı, sadece ürün listelemekle değil, doğru stratejilerle mümkündür. 
          Trysoft olarak, markaların satışlarını artırmalarına ve pazarda güçlü bir yer edinmelerine yardımcı oluyoruz.
          <br />
          <br />
          E-ticarette sürdürülebilir büyüme, müşteri deneyimini iyileştirmek ve rekabette öne geçmekle mümkündür. 
          İşletmenizin ihtiyaçlarına özel çözümler sunarak, satış süreçlerinizi daha verimli ve kârlı hale getiriyoruz.
        </p>
      </div>
    </div>

    {/* Kalın çizgi */}
    <div className="my-8 h-3 bg-[#148d7c]"></div>

    {/* Alt kısım: Büyük metin, ok ikonu ve buton */}
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
        E-ticarette fark yaratmak için güçlü bir altyapı, doğru strateji ve mükemmel müşteri deneyimi gerekir. Trysoft olarak, 
        işletmenizin büyümesini destekleyen yenilikçi çözümler geliştiriyoruz. Dijital mağazanızı en verimli şekilde yönetmeniz için buradayız.
      </h3>

      {/* Ok ikonu + Buton satırı */}
      <div className="flex flex-col items-center space-y-4">
        {/* Ok ikonu */}
        <svg
          className="w-8 h-8 text-[#148d7c] transition-transform duration-300 hover:scale-125"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>

        {/* Alt buton */}
        <a href="/details">
          <button className="bg-[#148d7c] text-white px-6 py-2 rounded hover:bg-[#0e6b5a] transition transform hover:scale-110">
            HADİ BAŞLAYALIM!
          </button>
        </a>
      </div>
    </div>
  </div>
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

                  </>
    );
}
