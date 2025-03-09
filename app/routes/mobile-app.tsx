import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

export default function MobileApp() {

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
         backgroundImage: "url('/image/mobil-app/background.jpg')",
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
           MOBİL ÇÖZÜMLER
         </h1>
         <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
         İşletmenize Özel Mobil Uygulamalarla Tanışın
         </h2>
         <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto">
         Trysoft olarak sadece bir uygulama değil, işletmenize özel yenilikçi ve etkili çözümler geliştiriyoruz. 
         Kullanıcı deneyimini ön planda tutan, hızlı ve güvenli mobil uygulamalarla markanızı daha güçlü hale getiriyoruz. 
         Siz hayal edin, biz gerçeğe dönüştürelim!
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






       
          {/* 2.bölüm */}
          <section className="bg-white py-12 px-4 sm:px-6 md:px-8">
  {/* Blink animasyonu için stil tanımı */}
  <style>{`
    .blink {
      animation: blink 1s infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `}</style>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
    {/* Sol Kısım: Metin */}
    <div className="md:w-1/2">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Mobil Uygulamaların Avantajları
      </h2>
      <p className="text-gray-700 mb-6">
      Akıllı telefonlar hayatımızın vazgeçilmezi haline gelirken, mobil çözümler işletmeler için bir gereklilik oldu. İş modelinize uygun, 
      ölçeklenebilir mobil uygulamalar geliştirerek markanızı güçlendiriyoruz. Müşteri deneyimini iyileştiren platformlardan iş akışlarını 
      optimize eden sistemlere kadar ihtiyacınıza en uygun çözümü sunuyoruz.
      </p>

      {/* Bullet point listesi */}
      <ul className="space-y-4 mb-8 text-gray-800">
        <li className="flex items-center">
          <span className="mr-2 text-black blink">&#10003;</span>
          Her Zaman, Her Yerden Erişim – Müşterileriniz size tek bir dokunuşla ulaşsın.
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-blue-900 blink">&#10003;</span>
          Daha Güçlü Müşteri Bağlantısı – Bildirimler ve özel kampanyalarla etkileşimi artırın.
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-blue-900 blink">&#10003;</span>
          İş Süreçlerinde Verimlilik – İşlerinizi hızlandırın, markanızı güçlendirin!
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-blue-900 blink">&#10003;</span>
          Marka Bilinirliğini Artırın –  Mobil uygulamayla daha güvenilir ve erişilebilir olun.
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-blue-900 blink">&#10003;</span>
          Rekabette Bir Adım Öne Geçin – Teknolojiyi yakalayarak sektörde fark yaratın.
        </li>
      </ul>

      {/* Link (View More) */}
      <a
        href="/details"
        className="inline-block bg-blue-900 text-white px-6 py-2 rounded-full"
      >
       DETAYLI BİLGİ
      </a>
    </div>

    {/* Sağ Kısım: Görsel */}
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img
        src="/image/mobil-app/1.jpg"
        alt="Our Experience"
        className="w-full h-auto max-w-sm rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
      />
    </div>
  </div>
</section>






       {/* 3.bölüm */}
       <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Başlık ve açıklama */}
        <div className="text-center mb-8 text-black">
          <h2 className="text-3xl font-bold">
           MOBİLDE GÜÇLÜ ADIMLAR ATIN!
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-black">
          Mobil dünyada markanızı öne çıkarın! İşletmenize özel, 
          iOS ve Android uyumlu mobil uygulamalar geliştirerek kullanıcılarınıza kusursuz bir deneyim sunuyoruz.
           Güvenli ve hızlı çözümlerimizle dijital varlığınızı güçlendirin
          </p>
        </div>

        {/* 6 adet öğe: 2 satır x 3 sütun */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Öğe */}
          <div className="bg-blue-800 p-6 rounded-md text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
              <span className="inline-block bg-blue-700 p-4 rounded-full text-white">
                {/* Örnek ikon (SVG) */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              İşletmenize Özel Çözümler
            </h3>
            <p className="text-blue-100 text-sm">
            Dijital dünyada var olmanın en güçlü yollarından biri de mobil uygulamalar. 
            İşinizi büyütmek, müşterilerinize daha iyi hizmet sunmak ya da tamamen yeni bir fikirle öne çıkmak istiyorsanız, 
            tam ihtiyacınıza uygun mobil uygulamalar geliştiriyoruz.
            </p>
          </div>

          {/* 2. Öğe */}
          <div className="bg-blue-800 p-6 rounded-md text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
              <span className="inline-block bg-blue-700 p-4 rounded-full text-white">
                {/* İkon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
               Kişiye Özel Uygulamalar
            </h3>
            <p className="text-blue-100 text-sm">
            Her işletmenin ihtiyacı farklıdır, bu yüzden size özel çözümler üretiyoruz. 
            Hazır kalıplarla yetinmek yerine, iş süreçlerinize en iyi şekilde uyum sağlayan, 
            kullanıcılarınıza kolaylık sunan ve markanızı yansıtan mobil uygulamalar geliştiriyoruz.
            </p>
          </div>

          {/* 3. Öğe */}
          <div className="bg-blue-800 p-6 rounded-md text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
              <span className="inline-block bg-blue-700 p-4 rounded-full text-white">
                {/* İkon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
            iOS ve Android’e Uygun Geliştirme
            </h3>
            <p className="text-blue-100 text-sm">
            Hedef kitlenizin tamamına ulaşmanız için uygulamanızı hem iOS hem de Android platformlarına uygun şekilde tasarlıyoruz. 
            Native ya da hybrid çözümlerle, performansı yüksek ve sorunsuz çalışan uygulamalar oluşturuyoruz.

            </p>
          </div>

          {/* 4. Öğe */}
          <div className="bg-blue-800 p-6 rounded-md text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
              <span className="inline-block bg-blue-700 p-4 rounded-full text-white">
                {/* İkon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
            Şık, Kullanışlı ve Hızlı
            </h3>
            <p className="text-blue-100 text-sm">
            Bir mobil uygulama sadece işlevsel değil, aynı zamanda kullanıcı dostu ve estetik olmalı. 
            Sade, akıcı ve etkili bir deneyim sunan arayüzlerle hem müşterilerinizin 
            ilgisini çeken hem de işinizi kolaylaştıran çözümler üretiyoruz.
            </p>
          </div>

          {/* 5. Öğe */}
          <div className="bg-blue-800 p-6 rounded-md text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
              <span className="inline-block bg-blue-700 p-4 rounded-full text-white">
                {/* İkon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
            Güvenlik ve Performans Önceliğimiz
            </h3>
            <p className="text-blue-100 text-sm">
              Hızlı ve stabil çalışan bir uygulama herkesin beklentisi. 
              Biz de en güncel teknolojileri kullanarak, güvenli ve kesintisiz çalışan mobil çözümler geliştiriyoruz.
            </p>
          </div>

          {/* 6. Öğe */}
          <div className="bg-blue-800 p-6 rounded-md text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
              <span className="inline-block bg-blue-700 p-4 rounded-full text-white">
                {/* İkon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
            Geliştirme Sonrası Destek
            </h3>
            <p className="text-blue-100 text-sm">
            Uygulamanız yayına girdikten sonra da yanınızdayız! Güncellemeler, 
            yeni özellikler ve teknik destek ile uygulamanızın her zaman en iyi durumda kalmasını sağlıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>








        {/* 4.bölüm */}
        <section className="py-20 px-4 bg-white text-black">
  <div className="max-w-6xl mx-auto">
    {/* Üst kısım: Başlık ortalandı, sağda metin ve buton */}
    <div className="grid md:grid-cols-2 gap-12 items-start relative">
      {/* Sol sütun: Başlık (ortalandı sadece mobilde) */}
      <div className="flex md:block justify-center items-center text-center w-full md:w-auto">
        <h2 className="text-5xl font-bold mb-2 leading-tight relative inline-block before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-blue-800 before:transition-all before:duration-500 before:scale-x-0 hover:before:scale-x-100">
       
        
          <span className="text-blue-800"> TRYSOFT</span> <br />ile <br /> uygulamanız hazır!
        </h2>
      </div>

      {/* Orta çizgi (dik çizgi sadece masaüstünde) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 bg-blue-800 transform -translate-x-1/2"></div>

      {/* Sağ sütun: Metin ve buton */}
      <div>
        <p className="mb-4 leading-relaxed">
        Mobil uygulamanız Trysoft ile emin ellerde! İhtiyaçlarınıza uygun, ölçeklenebilir ve yüksek performanslı 
        bir mobil çözümle markanızı dijital dünyada güçlendiriyoruz. Siz sadece büyümeye odaklanın, biz teknolojiyi yönetelim. 
       
          <br />
          <br />
          Başarılı bir mobil uygulama sadece bir yazılım değil, stratejik bir yatırımdır. 
          İş akışlarınızı optimize eden, müşteri bağlılığını artıran ve rekabette sizi öne çıkaran çözümler üretiyoruz. 
          
        </p>
      </div>
    </div>

    {/* Kalın çizgi */}
    <div className="my-8 h-3 bg-blue-800"></div>

    {/* Alt kısım: Büyük metin, ok ikonu ve buton */}
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
      Mobil uygulamanız sadece bir araç değil, müşterilerinizle kurduğunuz bağın en güçlü köprüsü olmalı. 
      Kullanıcılarınızın uygulamanızda geçirdiği her an, markanızı keşfetmeleri, 
      hizmetlerinizi deneyimlemeleri ve size güven duymaları için bir fırsattır. Bu yüzden, hızlı çalışan, 
      sezgisel bir deneyim sunan ve ihtiyaçlara doğrudan çözüm üreten bir mobil uygulama, işletmeniz için büyük bir fark yaratır.
      </h3>

      {/* Ok ikonu + Buton satırı */}
      <div className="flex flex-col items-center space-y-4">
        {/* Ok ikonu */}
        <svg
          className="w-8 h-8 text-blue-800 transition-transform duration-300 hover:scale-125"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>

        {/* Alt buton */}
        <a href="/details">
          <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition transform hover:scale-110">
            HADİ BAŞLAYALIM!
          </button>
        </a>
      </div>
    </div>
  </div>
</section>




        



          {/* 5.bölüm */}
          <section className="py-20 px-4 bg-white">
  <div className="max-w-7xl mx-auto space-y-16">
    {/* Üst Kısım: 2 Küçültülmüş Kutu (Responsive: mobilde alt alta, md’de yan yana) */}
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
      {/* Kutu 1 */}
      <div className="bg-blue-700 text-white p-6 w-full md:w-1/3 text-center md:text-left transition-transform transform hover:scale-105 hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">📲 Müşteri Deneyimini Yeniden Tanımlayın</h3>
        <p className="text-sm mb-1">
          Günümüzün rekabetçi pazarında, müşterilerle güçlü bir bağ kurmak artık her zamankinden daha önemli.
        </p>
        <p className="text-sm mb-1">
          Mobil uygulamalar, markanızın her an ulaşılabilir olmasını sağlayarak müşteri sadakatini artırır.
        </p>
        <p className="text-sm mb-1">
          Kişiselleştirilmiş bildirimler, hızlı erişim ve sezgisel kullanıcı deneyimi ile müşterilerinizle daha etkili bir iletişim kurabilirsiniz.
        </p>
      </div>

      {/* Kutu 2 */}
      <div className="bg-blue-700 text-white p-6 w-full md:w-1/3 text-center md:text-left transition-transform transform hover:scale-105 hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">⚙️ İşletmenize Özel Mobil Çözümler</h3>
        <p className="text-sm mb-1">
          Her iş modeli farklıdır ve standart çözümler her zaman yeterli olmayabilir.
        </p>
        <p className="text-sm mb-1">
          İş süreçlerinize özel olarak tasarlanmış bir mobil uygulama, operasyonel verimliliğinizi artırırken müşteri beklentilerini en iyi şekilde karşılamanızı sağlar.
        </p>
        <p className="text-sm mb-1">
          İster iş akışınızı hızlandıran bir sistem, ister müşterilerinize benzersiz bir deneyim sunan bir platform olsun, ihtiyaçlarınıza uygun mobil çözümlerle işinizi güçlendiriyoruz.
        </p>
      </div>
    </div>

    {/* Orta Kısım: Çerçeveli Uzun Yazı - Çerçeveli Dairesel Fotoğraf */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      {/* Sol taraf: Çerçeveli uzun metin */}
      <div className="flex flex-col justify-center text-center md:text-left border-4 border-gray-300 p-6 rounded-lg h-full">
        <h4 className="text-2xl text-blue-700 font-bold mb-4">
          Bir dokunuşla müşterilerinize daha yakın olun
        </h4>
        <p className="text-black text-lg leading-relaxed">
          Mobil uygulamalar, müşterilerle daha yakın bir ilişki kurmak için harika bir yol. 
          Ama sadece bir uygulama oluşturmak yeterli değil; kullanıcıların kolayca ulaşabileceği, 
          hızlı ve kişisel deneyimler sunmanız gerekiyor. İşletmenize özel bir mobil çözüm, hem işlerinizi kolaylaştırır 
          hem de müşterilerinize daha iyi bir deneyim sunmanıza yardımcı olur. Sizin için en doğru çözümü bulmak için buradayız.
        </p>
      </div>

      {/* Sağ taraf: Çerçeveli dairesel fotoğraf */}
      <div className="flex flex-col items-center justify-center border-4 border-gray-300 p-6 rounded-lg h-full">
        <img
          src="/image/mobil-app/2.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover transition-transform transform hover:scale-105 hover:shadow-lg"
        />
        <h5 className="text-lg font-bold font-serif text-black text-center mt-4">
          Fikrinizin gerçeğe dönüşmesi için ihtiyacınız olan her şeyi biz sağlıyoruz. 
          Markanızı mobil dünyada konumlandırın, müşteri deneyimini ileriye taşıyın ve dijital dönüşümde rekabet avantajı kazanın.
        </h5>
      </div>
    </div>

    {/* Büyük Başlık (Sayfanın ortasında) */}
    <div className="text-center mt-16 px-4">
      <h2 className="text-4xl font-extrabold text-blue-700">
        Uygulamanız, hayalinizden bir dokunuş uzakta
      </h2>
    </div>

    {/* En Altta Ortada Bir Çerçeve (Gölge efekti eklendi) */}
    <div className="mx-auto w-full md:w-1/2 bg-blue-100 p-6 text-center rounded mt-12 shadow-lg">
      <p className="text-blue-700 text-sm">
        İşletmenizi büyütmenin en hızlı yolu, parmaklarının ucunda! Şimdi harekete geçin ve müşterilerinize her an ulaşmanın avantajını keşfedin.
      </p>
    </div>

    {/* İletişim Butonu (Hover'da 360 derece dönen efekt) */}
    <div className="text-center mt-8">
      <a href="/contact">
        <button className="bg-blue-700 text-white px-8 py-4 rounded-full transition-transform duration-1000 hover:rotate-[360deg] shadow-lg">
          İletişime Geçin
        </button>
      </a>
    </div>
  </div>
</section>







           {/* 6.bölüm */}










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
