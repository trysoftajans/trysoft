import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";
import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FaSearch, FaCogs, FaBell } from "react-icons/fa";

export default function WebDevelopment() {

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
          backgroundImage: "url('/image/web-site/background.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Arka plan için koyu overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* İçerik */}
        <div className="relative z-10 max-w-6xl text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
          Kurumsal Web Sitesi <br />&  E-Ticaret Çözümleri
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
          Markanızın gücünü profesyonel bir web sitesiyle yansıtın, dijital dünyada itibarınızı yükseltin.
          E-ticaret altyapısıyla satışlarınızı artırın, 7/24 açık mağazanızla müşteri kitlenizi genişletin.
         
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto">
          Dijital dönüşümde öne çıkın, işletmenizi geleceğe taşıyın.
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



          {/* 2.BÖLÜM */}
          <section className="py-16 bg-white px-8">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start">
    {/* Left Section: About Text */}
    <div className="md:w-1/2 text-left">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Etkili Bir Web Deneyimi</h2>
      <p className="text-gray-600 max-w-md">
        Dijital dünyada ilk izlenim her şeydir! Trysoft olarak, işletmenizin profesyonelliğini yansıtan modern, 
        estetik ve kullanıcı dostu kurumsal web siteleri tasarlıyoruz. Güçlü altyapımız ve yenilikçi bakış açımızla, 
        firmanızın sektöründe öne çıkmasını sağlıyor, web sitenizi hem görsel açıdan etkileyici hem de teknik olarak kusursuz hale getiriyoruz. 
        SEO uyumlu, hızlı ve mobil dostu web tasarımlarımızla, markanızı dijitalde en iyi şekilde temsil etmenize yardımcı oluyoruz.
        <br /><br />
        Müşteri memnuniyetini ön planda tutarak, en son teknolojilerle uyumlu, güvenilir ve etkili web çözümleri sunuyoruz. 
        Siz işinize odaklanırken, biz de markanızı dijital dünyada en iyi şekilde temsil etmek için çalışıyoruz!
      </p>
    </div>
    
    {/* Right Section: Features */}
    <div className="md:w-1/2 flex flex-col gap-8 mt-8 md:mt-0">
      <div className="flex items-start gap-4">
        <div className="bg-blue-600 text-white p-4 rounded-full text-3xl flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <FaSearch />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-600">Araştırma ve Analiz</h3>
          <p className="text-gray-600">
            Bir web sitesi sadece estetik olarak iyi görünmekle kalmamalı, aynı zamanda hedef kitlenizi doğru şekilde yakalamalıdır. 
            Trysoft olarak, işletmenizin ihtiyaçlarını analiz ediyor, 
            sektör araştırmaları yapıyor ve kullanıcı beklentilerine en uygun çözümleri sunuyoruz. 
            Kullanıcı deneyimini en üst seviyeye çıkaran, dönüşüm odaklı tasarımlar geliştirerek rakiplerinizin önüne geçmenizi sağlıyoruz.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-blue-600 text-white p-4 rounded-full text-3xl flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <FaCogs />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-600">Strateji ve Planlama</h3>
          <p className="text-gray-600">
            Başarılı bir web sitesi, doğru bir stratejiyle başlar. İşletmenizin online hedeflerini belirleyerek, SEO uyumlu,
            hızlı ve mobil dostu çözümler geliştiriyoruz. E-ticaret projeleriniz için satışları artıracak akıllı sistemler sunuyor, 
            kurumsal web sitelerinizde marka imajınızı güçlendiriyoruz. 
            Stratejik yaklaşımlarımızla, uzun vadeli başarınızı garanti altına alıyoruz.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-blue-600 text-white p-4 rounded-full text-3xl flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <FaBell />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-600">Tasarım ve Kullanıcı Deneyimi</h3>
          <p className="text-gray-600">
            İlk izlenim her şeydir! Web siteniz, markanızın online dünyadaki vitrinidir. 
            Trysoft olarak, modern, şık ve kullanıcı dostu arayüzler tasarlayarak ziyaretçilerinizi etkilemenizi sağlıyoruz. 
            Mobil uyumluluk, hızlı yükleme süresi ve sezgisel navigasyon ile web sitenizi mükemmelleştiriyoruz. 
            Unutmayın, iyi bir web sitesi sadece güzel görünmekle kalmaz, aynı zamanda işlevselliğiyle de kullanıcıları cezbeder.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




           {/* 3.BÖLÜM */}
    <section className="py-20 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fadeIn">
              <span className="text-blue-600 animate-bounce">Trysoft</span> ile
              İşletmenize Özel Web Çözümleri
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            İşletmenize özel, estetik ve işlevsel web çözümleri ile markanızı en iyi şekilde temsil edin.
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Kart 1 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-400 p-3 rounded-full text-white">
                  🎯
                </div>
                <h3 className="text-2xl font-semibold"> Güçlü Bir İlk İzlenim Bırakın</h3>
              </div>
              <p className="mt-4 text-gray-700">
              Web siteniz, markanızın vitrinidir. Şık tasarım ve kullanıcı odaklı yapısıyla ziyaretçilerin ilgisini çekin ve güven oluşturun. 
              İlk izlenimler saniyeler içinde oluşur, bu yüzden profesyonel bir görünüm sunarak müşterilerinizde kalıcı bir etki bırakın.
              Web siteniz ne kadar profesyonel ve akıcı olursa, ziyaretçilerin sitenizde kalma süresi ve etkileşim oranı da o kadar artar.
              </p>
            </div>

            {/* Orta Fotoğraf */}
            <div className="relative flex justify-center">
              <img
                src="/image/web-site/1.jpg"
                alt="SEO Feature"
                className="w-full max-w-xs rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Kart 2 */}
            <div className="bg-blue-400 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-black flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full text-[#B88A62]">
                  ✍️
                </div>
                <h3 className="text-2xl font-semibold">
                Kolay Kullanım, Etkili Deneyim
                </h3>
              </div>
              <p className="text-black mt-4">
              Düzenli ve sezgisel bir yapı sayesinde kullanıcıların aradıklarını zahmetsizce bulmasını sağlayın. 
              Akıcı bir deneyim sunarak etkileşimi ve dönüşüm oranlarını artırın. Kullanıcılarınız için pratik, anlaşılır 
              ve rahat bir gezinme deneyimi sunarak web sitenizi daha işlevsel hale getirin. 
              Karmaşık bir yapı yerine, hızlı erişim sağlayan ve ziyaretçileri yönlendiren akıllı bir sistemle müşteri memnuniyetini artırın.
              </p>
            </div>

            {/* Kart 3 */}
            <div className="bg-blue-400 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-black flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full text-[#B88A62]">
                  📊
                </div>
                <h3 className="text-2xl font-semibold">
                Hızlı, Güvenli ve Performanslı 
                </h3>
              </div>
              <p className="text-black mt-4">
              
              Güçlü altyapı, hızlı yükleme süreleri ve güvenli sistemlerle web sitenizi en verimli hale getirin. 
              Kesintisiz bir deneyim sunarak kullanıcı memnuniyetini artırın. Yavaş yüklenen sayfalar kullanıcıları kaybetmenize neden olabilir, 
              bu yüzden hız optimizasyonu ve güçlü sunucu altyapısıyla sitenizin her zaman en iyi performansı göstermesini sağlayın. 
              Aynı zamanda güvenlik önlemleriyle hem sizin hem de müşterilerinizin verilerini koruyarak sorunsuz bir kullanım sunun.

              </p>
            </div>

            {/* Sağ Alt Fotoğraf */}
            <div className="relative flex justify-center">
              <img
                src="/image/web-site/2.jpg"
                alt="Marketing"
                className="w-full max-w-xs rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Kart 4 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-400 p-3 rounded-full text-white">
                  🚀
                </div>
                <h3 className="text-2xl font-semibold">
                Markanızı Daha Görünür Hale Getirin
                </h3>
              </div>
              <p className="mt-4 text-gray-700">
              Mobil uyumluluk, arama motoru dostu yapılar ve stratejik planlamalar ile rakiplerinizin önüne geçin. 
              Trysoft ile her yönüyle güçlü ve etkili bir web sitesine sahip olun. Sitenizin her cihazda kusursuz çalışmasını 
              sağlayarak daha fazla kullanıcıya ulaşın ve etkileşiminizi artırın. 
              Doğru stratejilerle markanızı daha fazla kişiye ulaştırarak sektörde fark yaratın.
              </p>
            </div>
          </div>

          {/* CTA Butonu */}
          <div className="text-center mt-16">
            <a
              href="/contact"
              className="px-8 py-4 text-white font-bold bg-blue-400 rounded-lg shadow-lg transition-transform duration-900 hover:scale-110 hover:bg-white hover:text-black"
            >
              Hadi başlayalım!
            </a>
          </div>
        </div>
      </section>







           {/* 4.BÖLÜM */}
           <section className="bg-white py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Siyah Daire (Sol Kutu Üstü) */}
        <div className="absolute top-[-60px] left-0 w-32 h-32 bg-black rounded-full hidden md:block"></div>
        
        {/* Mavi Daire (Sağ Kutu Üstü) */}
        <div className="absolute top-[60px] right-0 w-32 h-32 bg-blue-400 rounded-full hidden md:block"></div>
        
        {/* Üst Başlık Alanı */}
        <div className="text-center mb-12 relative z-10">
          
          {/* Büyük ve Kalın Ortalı Başlık */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Web Sitenizle 
            <br />
            Fark Yaratın
          </h1>
          {/* Uzun ve Daha Kalın Beyaz Çizgi */}
          <div className="w-full h-[10px] bg-white mx-auto" />
        </div>

        {/* İçerik Alanı (Sol kutu + Sağ metin) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Sol Kutu (Beyaz arkaplan + hover efekti) */}
          <div className="bg-blue-400 p-6 md:p-8 rounded-md shadow text-gray-700 hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <p className="mb-6 text-sm md:text-base">
            Bir web sitesi ya da uygulamanın beklentileri karşılaması için hem teknik hem de tasarımsal açıdan doğru adımların atılması gerekir. 
            Kullanıcılarınıza etkileyici bir deneyim sunabilmek için sitenizin sadece şık bir tasarıma sahip olması yetmez; 
            aynı zamanda hızlı, akıcı ve işlevsel olması da şarttır. Hedef kitlenizin beklentilerine uygun bir yapı oluşturulmazsa, 
            ziyaretçileriniz kısa sürede sitenizden ayrılabilir. 
            Doğru stratejilerle oluşturulmuş bir web sitesi, marka bilinirliğinizi artırırken, müşterilerinizin size daha kolay ulaşmasını sağlar.
            </p>
            <p className="mb-6 text-sm md:text-base">
            Bu yüzden, web sitenizin güçlü bir altyapıya sahip olması, hem kullanıcı deneyimi hem de işletmenizin başarısı için kritik bir öneme sahiptir. 
            İlk izlenim her şeydir ve iyi bir web sitesi, potansiyel müşterilerinize markanız hakkında olumlu bir imaj sunar.
            </p>
            {/* Buton Yerine Link */}
            <Link
              to="/contact"
              className="bg-white text-blue-400 px-6 py-3 rounded hover:bg-gray-800"
            >
              İLETİŞİM
            </Link>
          </div>

          {/* Sağ Metin (Çerçeveli ve Hover Efekti) */}
          <div className="bg-black p-6 md:p-8 rounded-md shadow text-white leading-relaxed hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <p className="mb-6 text-sm md:text-base">
            Trysoft olarak, işletmenizi en iyi şekilde yansıtacak web çözümleri sunuyoruz. 
            Markanızı ve ihtiyaçlarınızı detaylı bir şekilde analiz ederek, 
            sektöre özel modern tasarımlar ve yüksek performanslı yazılım altyapıları oluşturuyoruz.
            </p>
            <p className="mb-6 text-sm md:text-base">
            Web sitelerinizi önce çıkarıyor, rakiplerinizin önüne geçmenizi sağlıyoruz. 
            Hızlı yüklenen, SEO uyumlu ve mobil dostu web çözümlerimizle sitenizin arama motorlarında üst sıralarda yer almasını hedefliyoruz. 
            Kullanıcı odaklı tasarımlarımızla, ziyaretçilerinizin sitenizde daha uzun süre kalmasını sağlıyoruz.
            Küresel trendleri takip eden, kullanıcı dostu ve verimli çözümlerle web sitenizi en üst seviyeye taşıyoruz. 
            <br />
            <br />
            Güçlü bir web sitesi, sadece bir vitrin değil, aynı zamanda işletmenizin büyümesine katkı sağlayan en önemli araçlardan biridir.
            </p>
          </div>
        </div>
      </div>
    </section>





          {/* 5.BÖLÜM */}
          <section className="py-16 bg-white px-8 flex justify-center">
      <div className="max-w-7xl w-full bg-white shadow-xl p-16 relative border-4 border-gray-300 rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-white opacity-20 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-20 rounded-tl-full"></div>
        
        {/* Blue Circle in the Top Right Corner */}
        <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-40 h-40 bg-blue-500 rounded-full clip-circle"></div>
        
        {/* Left Section: Text Content with Hover Effect */}
        <div className="w-full md:w-1/2 p-6 md:p-12 relative text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-bold text-blue-400 mb-4 md:mb-6">E-Ticaret Sitenizle <br />Satışları Artırın</h2>
          <div className="bg-blue-100 p-4 md:p-6 mb-4 md:mb-6 w-full shadow-md rounded-lg border-2 border-gray-300 transition duration-300 hover:border-blue-500 hover:shadow-lg">
            <p className="text-black text-sm md:text-base">
            E-ticarette başarılı olmak için sadece şık bir web sitesi yeterli değildir; sitenizin hızlı, 
            güvenilir ve pratik bir yapıya sahip olması da gerekir. 
            Trysoft olarak, işletmenize özel e-ticaret çözümleri sunarak online satışlarınızı kolaylaştırıyor ve 
            müşterilerinize kusursuz bir alışveriş deneyimi yaşatmanızı sağlıyoruz.
            Ürün yönetimi, güvenli ödeme sistemleri ve mobil uyumluluk gibi kritik detayları 
            en iyi şekilde planlıyor, sitenizin her cihazda sorunsuz çalışmasını sağlıyoruz. 
            Kullanıcıların kolayca gezinebileceği, hızlı yüklenen ve SEO uyumlu bir e-ticaret sitesiyle markanızı öne çıkarıyoruz.
            Güçlü bir altyapıya sahip, işlevsel ve estetik bir e-ticaret sitesiyle satışlarınızı 
            artırmak ve rakiplerinizin önüne geçmek için Trysoft yanınızda.
            </p>
          </div>
         
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-6 justify-center md:justify-start">
            <a href="/contact" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 hover:bg-blue-700">
              HADİ BAŞLAYALIM!
            </a>
          </div>
          {/* Blue Line with Hover Effect */}
          <div className="mt-6 md:mt-8 w-full h-2 md:h-3 bg-blue-500 rounded-full shadow-md transition duration-300 hover:scale-110 hover:bg-blue-500"></div>
        </div>
        
        {/* Right Section: Enlarged Image with Hover Effect */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="w-full max-w-md md:max-w-full h-64 md:h-[400px] border-4 border-gray-300 rounded-lg overflow-hidden shadow-lg transition duration-300 hover:scale-105 hover:border-blue-500">
            <img 
              src="/image/web-site/3.jpg" 
              alt="Web Development & Design" 
              className="w-full h-full object-cover md:object-cover object-center rounded-lg transition duration-300 hover:opacity-90 hover:scale-105"
            />
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
