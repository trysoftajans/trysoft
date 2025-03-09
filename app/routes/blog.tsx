import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    image: "/image/blog/1.jpg",
    title: "Yapay Zeka ile Pazarlama Stratejilerinizi Geliştirmenin Yolları Nelerdir?",
    route: "/blox1"
  },
  {
    id: 2,
    image: "/image/blog/2.jpg",
    title: "Instagram ve TikTok’ta marka bilinirliği nasıl artırılır?",
    route: "/blox2"
  },
  {
    id: 3,
    image: "/image/blog/3.jpg",
    title: "Google Ads İle Satışları Artırma Taktikleri!",
    route: "/blox3"
  },
  {
    id: 4,
    image: "/image/blog/4.jpg",
    title: "Meta reklamlarında dikkat edilmesi gerekenler nelerdir?",
    route: "/blox4"
  },
  {
    id: 5,
    image: "/image/blog/5.jpg",
    title: "SEO Nedir ve Etkili Uygulama Yöntemleriyle Nasıl Yapılır?",
    route: "/blox5"
  },
  {
    id: 6,
    image: "/image/blog/6.jpg",
    title: "Sosyal Medya Stratejileri: Markanızı Zirveye Taşıyacak Yaratıcı Yöntemler!",
    route: "/blox6"
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

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Ana içerik alanı */}
      <div className="flex-grow p-10 mt-20 flex flex-col items-center">
        <div className="w-full text-center mb-10">
          <h1 className="text-5xl font-bold text-black">BLOG</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 w-80 h-[420px] flex flex-col"
            >
              {/* Resim Alanı */}
              <div className="w-full h-48 bg-gray-300">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 flex items-center justify-center h-full">
                    Resim Ekleyin
                  </span>
                )}
              </div>

              {/* Başlık ve Link Alanı */}
              <div className="p-3 flex flex-col justify-center items-center flex-grow text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>

                {/* Hover Efektli Buton */}
                <Link
                  to={post.route}
                  className="mt-2 inline-block bg-blue-600 text-white text-center px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110"
                >
                  HEMEN OKU
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

          {/* WhatsApp Butonu */}
                <button
                  onClick={handleClick}
                  className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center text-2xl"
                >
                  <FaWhatsapp />
                </button>

      {/* Footer sabit alt kısım */}
      <Footer />
    </div>
  );
}
