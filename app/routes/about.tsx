import React, { useRef } from "react";
import { Link } from "@remix-run/react";
import { FaWhatsapp, FaArrowDown } from "react-icons/fa";
import Footer from "../components/Footer";
import { motion, useMotionValue, useAnimation, useInView } from "framer-motion";


const AnimatedButton = ({ children, ...props }) => {
  const x = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const mouseX = e.clientX - rect.left;
    const offset = (mouseX - centerX) * 0.6;
    x.set(offset);
  };

  const handleMouseLeave = () => {
    x.set(0);
  };

  return (
    <motion.button
      {...props}
      style={{ x, ...props.style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.button>
  );
};

export default function About() {
  // Doğrudan görüntülenecek başlık
  const title = "İşinizi Dijitalleştirme Rehberi";

  const words = [
    "Müşterilerimizin ",
    "Sorunlarına ",
    "Yönelik ",
    "Çözümler",
    "Üretiyoruz",
  ];

  const handleClick = () => {
    const phoneNumber = "905456625080"; 
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToContent = () => {
    document
      .getElementById("about-content")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const bounceVariant = {
    hidden: { y: 0 },
    visible: (custom) => ({
      y: [0, -30, 0, -20, 0, -10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: custom * 0.5,
      },
    }),
  };

  const AnimatedCircle = ({ custom, title, description, background, textColor }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [inView, controls]);

    return (
      <motion.div
        ref={ref}
        className={`p-10 rounded-full w-64 h-64 mx-auto shadow-lg border-2 border-gray-300 flex flex-col justify-center items-center ${background} ${textColor}`}
        variants={bounceVariant}
        initial="hidden"
        animate={controls}
        custom={custom}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3 text-lg text-center">{description}</p>
      </motion.div>
    );
  };

  return (
    <div className="relative bg-gray-100">
      {/* Üst Bölüm (Hakkımızda Başlığı) */}
      <section className="h-screen flex flex-col items-center justify-center text-white relative overflow-hidden bg-black">
        {/* Arka Plan Resmi */}
        <div
          className="absolute inset-0 bg-black opacity-80 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/about/aboutbackground.jpg')",
            filter: "brightness(50%)",
          }}
        ></div>
        {/* İçerik */}
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hakkımızda
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Merhaba! Biz <strong>TrySoft</strong> olarak markanızın bir parçası
            gibi hareket eder, <strong>sizin başarınız için</strong> çalışırız.
            Dijitalde <strong>en iyi sonuçları</strong> almak için{" "}
            <strong>stratejiler geliştirir</strong>, uygulamaya geçirir ve{" "}
            <strong>büyümenizi hızlandırırız!</strong>
          </p>
          {/* Scroll Down Butonu */}
          <div className="mt-6 flex items-center justify-center">
            <button
              onClick={scrollToContent}
              className="bg-black text-white p-4 rounded-full text-2xl animate-bounce flex items-center justify-center shadow-lg"
            >
              <FaArrowDown />
            </button>
          </div>
        </div>
      </section>

      {/* Hakkımızda (Metin + Görsel) */}
      <section
        id="about-content"
        className="bg-[#F5F7FA] container mx-auto px-6 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
      >
        <div className="text-gray-900 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Hakkımızda</h2>
          <p className="mt-4 text-lg">
            <strong className="text-black">TRYSOFT</strong>, markalar için en uygun
            platformları seçerek en doğru pazarlama kurgularıyla hedef kitlelere
            ulaşılmasını sağlayan bir 360 derece dijital pazarlama ve yazılım
            ajansıdır. Dijital dünyada güçlü bir marka olmak, sadece var olmakla
            değil, doğru stratejilerle büyümekle mümkündür.
          </p>
          <p className="mt-4 text-lg">
            <strong className="text-black">TRYSOFT</strong> olarak, işletmelerin
            dijitalde sürdürülebilir başarıya ulaşması için SEO, mobil uygulama
            geliştirme, e-ticaret danışmanlığı, dijital büyüme ve reklam yönetimi,
            marka odaklı sosyal medya yönetimi, kurumsal web sitesi ve e-ticaret sitesi
            hizmetleri sunuyoruz.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/image/about/about1.jpg"
            alt="Hakkımızda Görsel"
            className="w-full max-w-md md:max-w-lg rounded-3xl shadow-lg transform transition duration-500 hover:scale-105"
          />
        </div>
      </section>

      {/* Geometrik Şekilli Parça */}
      <section>
        <div className="flex justify-center items-center min-h-screen bg-[#F5F7FA] p-6 md:p-10">
          <div className="flex flex-col md:flex-row w-full max-w-6xl h-auto md:h-[450px] items-center gap-20">
            <motion.div
              className="relative w-full md:w-[45%] h-full flex items-center justify-center p-4 md:p-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative w-full h-auto md:h-full rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.4 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/image/about/about3.jpg"
                  alt="Geometric Shape"
                  className="w-full h-auto md:h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full md:w-[55%] p-6 md:p-16 flex flex-col justify-center items-center text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 leading-tight">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mx-6"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 1,
                      delay: index * 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <p className="text-gray-700 text-lg mb-4 max-w-lg">
                Her işletme, kendine özgü zorluklarla karşılaşır.{" "}
                <strong className="text-black font-extrabold">TRYSOFT</strong>{" "}
                olarak, bu sorunları çözmek ve işinizi dijital dünyada daha
                güçlü hale getirmek için stratejik çözümler sunuyoruz.
              </p>
              <ul className="text-gray-800 mb-6 space-y-2 text-lg max-w-lg">
                <li className="flex items-center gap-2">
                  ✔️ <strong>Hedef Kitlenizi Anlıyoruz</strong>
                </li>
                <li className="flex items-center gap-2">
                  ✔️ <strong>Veriye Dayalı Stratejilerle Büyüme Sağlıyoruz</strong>
                </li>
                <li className="flex items-center gap-2">
                  ✔️ <strong>Yenilikçi ve Etkili Dijital Pazarlama Çözümleri</strong>
                </li>
                <li className="flex items-center gap-2">
                  ✔️ <strong>Özel İhtiyaçlara Yönelik Teknik Çözümler</strong>
                </li>
                <li className="flex items-center gap-2">
                  ✔️ <strong>Sonuç Odaklı ve Ölçülebilir Sonuçlar</strong>
                </li>
              </ul>
              <div className="flex justify-center w-full max-w-lg">
                <Link to="/details">
                  <AnimatedButton className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg">
                    Detaylı Bilgi
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISYON - VİZYON - HEDEF */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">
            Misyon, Vizyon ve Hedeflerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCircle
              custom={0}
              title="Misyon"
              description="Müşterilerimize en iyi dijital çözümleri sunmak."
              background="bg-black"
              textColor="text-white"
            />
            <AnimatedCircle
              custom={1}
              title="Vizyon"
              description="Dijital dünyada markaları geleceğe taşımak."
              background="bg-white"
              textColor="text-black"
            />
            <AnimatedCircle
              custom={2}
              title="Hedef"
              description="İnovatif çözümlerle sektörde lider olmak."
              background="bg-black"
              textColor="text-white"
            />
          </div>
        </div>
      </section>

      {/* BAŞARIYI BİRLİKTE YAKALAYABİLİRİZ */}
      <section className="bg-black text-white py-20 text-center px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Başarıyı birlikte yakalayabiliriz
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl">
            Hemen bizimle iletişime geçin ve dijitalde fark yaratın!
          </p>
          <Link
            to="/contact"
            className="mt-6 sm:mt-8 inline-block bg-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-blue-700 transition"
          >
            Hemen İletişime Geçin →
          </Link>
        </div>
      </section>

      {/* "How It Works" */}
      <section className="bg-[#F5F7FA] text-white py-20">
  <div className="container mx-auto px-8">
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: [0.8, 1.5, 1] }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {title}
    </motion.h2>
    <p className="text-center text-gray-900 max-w-2xl mx-auto mb-16">
      Dijital pazarlama ve yazılım alanlarında <strong>TRYSOFT</strong> ile,
      markanızı dijital dünyada bir adım öne taşıyoruz. İhtiyaçlarınıza göre
      özel olarak tasarladığımız çözümlerle, hedef kitlenize en etkili şekilde
      ulaşmanıza ve işinizi büyütmenize destek oluyoruz.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {/* Adım 1: Sol kutu */}
      <motion.div
        className="p-6 bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h3 className="text-2xl font-bold mb-4">
          1. İhtiyaç Analizi &amp; Hedef Tanımı
        </h3>
        <p className="text-gray-300 mb-4">
          Projenizle ilgili detayları öğrenmek ve iş hedeflerinizi netleştirmek için
          sizinle kısa bir görüşme veya anket düzenliyoruz. Bu aşamada:
        </p>
        <ul className="text-left text-gray-300 list-disc list-inside space-y-2">
          <li>
            Markanızın mevcut dijital durumunu, hedef kitlenizi ve rekabet ortamını inceliyoruz.
          </li>
          <li>
            İhtiyaç duyduğunuz çözümleri belirleyerek projeyi en verimli şekilde yönlendirecek hedefleri tanımlıyoruz.
          </li>
        </ul>
      </motion.div>
      {/* Adım 2: Orta kutu */}
      <motion.div
        className="p-6 bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h3 className="text-2xl font-bold mb-4">
          2. Stratejik Planlama &amp; Geliştirme
        </h3>
        <p className="text-gray-300 mb-4">
          Topladığımız veriler doğrultusunda, dijital pazarlama stratejinizi oluşturuyor ve
          yazılım gereksinimlerinizi belirliyoruz. Bu süreçte:
        </p>
        <ul className="text-left text-gray-300 list-disc list-inside space-y-2">
          <li>
            Zaman çizelgesinden bütçe planlamasına kadar tüm aşamaları detaylı bir şekilde planlıyoruz.
          </li>
          <li>
            Markanızı rakiplerinizden ayrıştıracak yaratıcı fikirleri ve teknik altyapıyı hayata geçirmeye başlıyoruz.
          </li>
          <li>
            Hedef kitlenize uygun iletişim tonunu ve kampanya stratejilerini tasarlıyoruz.
          </li>
        </ul>
      </motion.div>
      {/* Adım 3: Sağ kutu */}
      <motion.div
        className="p-6 bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h3 className="text-2xl font-bold mb-4">
          3. Uygulama &amp; Lansman
        </h3>
        <p className="text-gray-300 mb-4">
          Onayladığımız plan doğrultusunda projeyi hayata geçiriyor, tasarım ve geliştirme
          aşamalarını tamamladıktan sonra kapsamlı testler ve optimizasyonlar yapıyoruz. Bu aşamada:
        </p>
        <ul className="text-left text-gray-300 list-disc list-inside space-y-2">
          <li>
            Lansman sürecini dikkatle yöneterek markanızın dijital dünyadaki konumunu güçlendiriyoruz.
          </li>
          <li>
            Performans verilerini düzenli olarak takip ediyor, gerektiğinde hızlı iyileştirmeler yaparak sürekli büyümenize destek oluyoruz.
          </li>
          <li>
            Uzun vadeli iş birliği yaklaşımımızla, markanızın gelişimine devamlı katkı sağlıyoruz.
          </li>
        </ul>
      </motion.div>
    </div>
  </div>
</section>




      {/* Neden Bizi Tercih Etmelisiniz */}
      <section className="bg-[#F5F7FA] py-20 container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="/image/about/about2.jpg"
            alt="Neden Bizi Seçmelisiniz Görsel"
            className="w-full max-w-lg mx-auto rounded-3xl shadow-lg transform transition duration-500 hover:scale-105"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <ul className="space-y-6 text-lg text-gray-700">
            <li className="flex items-center gap-2">
              📌 <strong>Hızlı ve Etkili Çözümler:</strong> Projelerinizi hızla hayata geçirip, sonuç odaklı çözümler sunuyoruz.
            </li>
            <li className="flex items-center gap-2">
              🎨 <strong>Yenilikçi Tasarımlar:</strong> Markanız için benzersiz, çağdaş tasarımlar yaratıyoruz.
            </li>
            <li className="flex items-center gap-2">
              🖼 <strong>Görsel Estetik:</strong> Dijital varlığınızı şık ve etkileyici bir hale getiriyoruz.
            </li>
            <li className="flex items-center gap-2">
              🔒 <strong>Güvenilirlik ve Kalite:</strong> Her projede güven ve üstün kaliteyi ön planda tutuyoruz.
            </li>
          </ul>
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
    </div>
  );
}
