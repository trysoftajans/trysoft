import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";


export default function DigitalGrowth() {

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
                  backgroundImage: "url('/image/digital-growth/background.jpg')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* Arka plan için koyu overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* İçerik */}
                <div className="relative z-10 max-w-6xl text-center px-4 sm:px-6 md:px-8">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
                   DİJİTAL PAZARLAMA
                  </h1>
                  <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                  Markanızı internet dünyasında daha görünür hale getiriyor, doğru kitleye ulaşmanızı sağlıyoruz. 
                  </h2>
                  <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto">
                  İşletmenizin internet üzerinde daha görünür olmasını ve doğru kitleye ulaşmasını sağlamak için etkili pazarlama stratejileri oluşturuyoruz.
                 
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
                <section className="group relative bg-white py-12 sm:py-20">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 sm:px-8">
    
    {/* Sol Sütun: Yüksek Görsel */}
    <div className="h-64 sm:h-80 md:h-[700px] relative overflow-hidden">
      <img
        src="image/digital-growth/1.jpg"
        alt="Digital Growth"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>

    {/* Sağ Sütun: Metin içeriği çerçeve içine alındı */}
    <div className="relative mt-6 sm:mt-10 md:mt-32">
      <div className="border border-gray-300 bg-gray-100 p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 transition-all duration-1000 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-500 text-center sm:text-left">
          DİJİTAL PAZARLAMA
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg text-center sm:text-left">
          Dijital pazarlama, markaların çevrimiçi dünyada güçlü bir varlık oluşturmasını sağlayan kapsamlı bir süreçtir. 
          Doğru strateji ve araçlarla hedef kitlenize ulaşarak marka bilinirliğinizi artırabilir, 
          satışlarınızı yükseltebilir ve sürdürülebilir bir büyüme elde edebilirsiniz.
        </p>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg text-center sm:text-left">
          Trysoft olarak, veri odaklı yaklaşımlarımız ve yenilikçi çözümlerimizle işletmenizi dijital dünyada en iyi şekilde konumlandırıyoruz. 
          SEO, içerik pazarlaması, reklam yönetimi, e-posta pazarlaması ve dönüşüm optimizasyonu gibi alanlarda uzman ekibimizle 
          size özel stratejiler geliştiriyoruz. 
          Dijital pazarlama sürecinizi yönetirken, markanızın hedeflerine uygun en etkili kanalları kullanarak maksimum verim almanızı sağlıyoruz.
        </p>
        <div className="text-center sm:text-left">
          <a
            href="/details"
            className="bg-black text-white inline-block py-2 sm:py-3 px-4 sm:px-6 hover:bg-gray-800 transition-colors duration-700"
          >
            DETAYLI BİLGİ
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Kırmızı Çizgi: Mobil ve web uyumlu hale getirildi */}
  <div
    className="absolute top-[2rem] sm:top-[3rem] md:top-[7rem] left-1/2 -translate-x-1/2 w-2/3 h-4 sm:h-8 md:h-16 bg-red-500 z-10 transform origin-bottom transition-transform ease-out duration-[10000ms] group-hover:scale-y-[1] scale-y-[0.25]"
  ></div>
</section>









                 {/* 3.bölüm  */}
                 <section className="bg-white py-12">
  <div className="max-w-screen-xl mx-auto px-4">
    
    {/* Üstteki Görsel (Yatay Dikdörtgen) */}
    <div className="mb-8 overflow-hidden">
      <img
        src="image/digital-growth/2.jpg" 
        alt="Vision360 Mockup"
        className="w-full h-48 md:h-64 object-cover object-center"
      />
    </div>
    
    {/* İki Sütunlu Alan */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Sol Sütun: Başlık ve Açıklamalar */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Büyümek İçin  Doğru Adres   {" "}
          <span className="inline-block text-red-500 animate-scale uppercase">
          {" "} TRYSOFT
          </span>
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Markanızı büyütmek, daha fazla insana ulaşmak ve satışları artırmak için{" "}
          <span className="text-red-500">güçlü kampanyalar</span> oluşturuyoruz.
          Hedef kitlenize en uygun içerik ve reklam stratejileriyle, mesajınızı en doğru şekilde iletmenizi sağlıyoruz.
        </p>

        <br />
        <p className="text-gray-700 mb-4 leading-relaxed">
          Doğru zamanda, doğru yerde olmanızı sağlayarak müşterilerinizle{" "}
          <span className="text-red-500">güçlü bir bağ</span> kurmanıza yardımcı oluyoruz.
          <span className="text-red-500"> Dikkat çeken tasarımlar</span>, etkileyici metinler ve reklam kampanyalarıyla rakiplerinizin bir adım önüne geçin.
        </p>
      </div>
      
      {/* Sağ Sütun: Proje Bilgileri */}
      <div className="space-y-4 md:space-y-6">
        <div>
          <p
            className="font-semibold uppercase animate-color text-black"
            style={{ animationDelay: "0s" }}
          >
            E-Posta Pazarlama
          </p>
        </div>

        <div>
          <p
            className="font-semibold uppercase animate-color text-black"
            style={{ animationDelay: "0.5s" }}
          >
            Sosyal Medya Yönetimi
          </p>
        </div>

        <div>
          <p
            className="font-semibold uppercase animate-color text-black"
            style={{ animationDelay: "1s" }}
          >
            Reklam Yönetimi (Google Ads & Sosyal Medya Reklamları)
          </p>
        </div>

        <div>
          <p
            className="font-semibold uppercase animate-color text-black"
            style={{ animationDelay: "1.5s" }}
          >
            SEO (Arama Motoru Optimizasyonu)
          </p>
        </div>

        <div>
          <p
            className="font-semibold uppercase animate-color text-black"
            style={{ animationDelay: "2s" }}
          >
            Web Tasarım ve Geliştirme
          </p>
        </div>

        <div>
          <p
            className="font-semibold uppercase animate-color text-black"
            style={{ animationDelay: "2.5s" }}
          >
            İçerik Pazarlaması
          </p>
        </div>  

        <div>
          <p
            className="font-semibold uppercase animate-color text-black"
            style={{ animationDelay: "3s" }}
          >
            Pazarlama Danışmanlığı
          </p>
        </div>
      </div>
    </div>
  </div>
  
  {/* Özel Animasyonlar */}
  <style jsx>{`
    @keyframes scalePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
    .animate-scale {
      animation: scalePulse 2s infinite ease-in-out;
    }
    @keyframes colorPulse {
      0%, 100% { color: black; }
      50% { color: red; }
    }
    .animate-color {
      animation: colorPulse 5s infinite ease-in-out;
    }
  `}</style>
</section>










                  {/* 4.bölüm  */}
                  <section className="bg-white text-black py-12 md:py-24">
  <div className="max-w-screen-xl mx-auto px-4">
    
    {/* Üst Kısım: 2 Sütun (Solda Başlıklar, Sağda Fotoğraf) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Sol Sütun: Metinler dikey olarak ortalandı */}
      <div className="flex flex-col justify-center">
        <h2 className="font-bold mb-4 text-2xl md:text-4xl">
          Markanızı Daha Güçlü Hale Getirin
        </h2>
        <p className="text-gray-800 leading-relaxed text-base md:text-lg">
          İşletmeler için başarılı olmanın en önemli yollarından biri, doğru stratejileri belirleyerek hedef kitlesine en etkili şekilde ulaşmaktır. 
          Biz de tam olarak bunu yapıyoruz. İşinizi büyütmek, markanızı daha bilinir hale getirmek ve satışlarınızı artırmak için akıllı kampanyalar, 
          dikkat çekici içerikler ve etkili reklam yönetimi sunuyoruz. Amacımız, sizi sadece daha fazla insana ulaştırmak değil, 
          aynı zamanda kalıcı bir etki yaratmanızı sağlamak.
        </p>
      </div>

      {/* Sağ Sütun: Fotoğraf - hover efekti eklendi */}
      <div>
        <img 
          src="image/digital-growth/3.jpg" 
          alt="Marka Fotoğrafı" 
          className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

    {/* Üç Kart: Her kartın arkasında kırmızı arkaplan ve hover efekti mevcut */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-stretch">
      
      {/* Kart 1 */}
      <div className="relative flex flex-col">
        {/* Kırmızı arkaplan */}
        <div className="absolute inset-0 transform translate-x-2 translate-y-2 bg-red-500 rounded-lg"></div>
        {/* Kart içeriği */}
        <div className="relative bg-white rounded-lg shadow-lg p-6 border border-red-500 transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 flex flex-col h-full">
          <h3 className="text-red-500 text-lg md:text-xl font-semibold mb-2">
            Doğru İnsanlara Ulaşın
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base flex-1">
            Başarılı bir kampanyanın temelinde, mesajınızı doğru kişilere ulaştırmak yatar. 
            Markanızın sunduğu ürün ya da hizmeti en çok ihtiyaç duyan insanlarla buluşturarak etkili sonuçlar almanızı sağlıyoruz.
          </p>
        </div>
      </div>

      {/* Kart 2 */}
      <div className="relative flex flex-col">
        <div className="absolute inset-0 transform translate-x-2 translate-y-2 bg-red-500 rounded-lg"></div>
        <div className="relative bg-white rounded-lg shadow-lg p-6 border border-red-500 transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 flex flex-col h-full">
          <h3 className="text-red-500 text-lg md:text-xl font-semibold mb-2">
            Etkili Stratejilerle Öne Çıkın
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base flex-1">
            Pazarlama, yalnızca reklam vermekle değil, doğru mesajı en doğru şekilde iletmekle ilgilidir. 
            Markanızın hedeflerine uygun planlar oluşturuyor ve en iyi sonucu almanız için çalışıyoruz.
          </p>
        </div>
      </div>

      {/* Kart 3 */}
      <div className="relative flex flex-col">
        <div className="absolute inset-0 transform translate-x-2 translate-y-2 bg-red-500 rounded-lg"></div>
        <div className="relative bg-white rounded-lg shadow-lg p-6 border border-red-500 transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 flex flex-col h-full">
          <h3 className="text-red-500 text-lg md:text-xl font-semibold mb-2">
            Müşterilerinizle Güçlü Bağ Kurun
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base flex-1">
            İnsanların sizi yalnızca bir kez değil, her zaman tercih etmesini sağlamak için özgün, 
            samimi ve güven veren bir iletişim kurmanıza yardımcı oluyoruz. Sadakat oluşturan kampanyalarla markanızı güçlendiriyoruz.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</section>









                   {/* 5.bölüm  */}
                   <section className="bg-white py-16 md:py-32 overflow-hidden">
  <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Sol Sütun: Metinler */}
    <div className="space-y-5">
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
        Doğru Strateji, <span className="text-red-500">Etkili İçerik</span>, Güçlü Sonuçlar!
      </h2>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Markanızı büyütmek ve rakiplerinizin önüne geçmek için doğru stratejilerle ilerlemek şart. 
      Etkili içerik, güçlü reklam kampanyaları ve hedefe yönelik çalışmalarla işletmenizin potansiyelini en üst seviyeye çıkarıyoruz. 
      
      </p>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Doğru zamanda, doğru yerde olmanızı sağlayarak müşterilerinizin ilgisini çekiyor ve kalıcı bir etki bırakmanıza yardımcı oluyoruz. 
      İşinizi bir adım öteye taşımak ve sürdürülebilir bir başarı yakalamak için yanınızdayız!
      </p>
      
      <a
        href="/contact"
        className="inline-block border border-gray-900 text-gray-900 px-6 py-2 
                   hover:bg-gray-900 hover:text-white transition-colors"
      >
        İLETİŞİM
      </a>
    </div>

    {/* Sağ Sütun: Yarım Daire + Görsel */}
    <div className="relative w-full flex justify-center md:justify-end overflow-visible">
      <div className="w-[250px] h-[180px] sm:w-[320px] sm:h-[220px] md:w-[570px] md:h-[420px] bg-gray-100 rounded-l-full overflow-hidden mr-[-50px] sm:mr-[-100px] md:mr-[-130px] animate-slide-in">
        <img
          src="image/digital-growth/4.jpg"
          alt="Rank"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  {/* Özel Animasyonlar */}
  <style jsx>{`
    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateX(50%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .animate-slide-in {
      animation: slideIn 1.5s ease-out forwards;
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

           </>
    );
}
