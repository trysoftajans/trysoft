import { Link, useNavigate } from "@remix-run/react";
import React from "react";
import Footer from "~/components/Footer"; // Footer bileşenini kullanıyorsanız
import { motion } from "framer-motion";

export default function ThankYou() {
  const navigate = useNavigate(); // Navigasyon fonksiyonu

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 relative overflow-hidden">
      {/* Arka Plan Efektleri */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div
          className="w-96 h-96 bg-purple-300 opacity-30 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* İçerik Bölümü - Daha Aşağı Kaydırıldı */}
      <div className="flex-grow flex justify-center items-center p-8 mt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="bg-white shadow-2xl rounded-2xl p-12 text-center border border-gray-200 max-w-lg relative"
        >
          {/* Parlayan Kenar Efekti */}
          <motion.div
            className="absolute inset-0 border-2 border-purple-400 rounded-2xl opacity-40"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <h1 className="text-6xl font-extrabold mb-6 text-gray-800 drop-shadow-lg">
            🎉 Teşekkür Ederiz! 🎉
          </h1>
          <p className="text-xl text-gray-700 mb-8 font-medium">
            Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız!
          </p>
          {/* 3D ve Neon Efektli Buton */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => navigate("/")} // Remix.js kullanıyorsan
              className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-purple-500 transition-all transform hover:scale-105"
            >
              Anasayfaya Dön
            </button>
          </motion.div>
         
        </motion.div>
      </div>

      {/* Teşekkür Mesajı Alt Kısımda */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center py-16 bg-gray-900 text-white rounded-t-3xl shadow-lg mt-16 relative overflow-hidden"
      >
        {/* Parlayan Çizgi Efekti */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-purple-500 opacity-50"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <h2 className="text-4xl font-bold">Sizinle Çalışmak İçin Sabırsızlanıyoruz!</h2>
        <p className="text-lg mt-3 text-gray-300">
          Bizi tercih ettiğiniz için teşekkürler. En iyi hizmeti sunmaya devam edeceğiz.
        </p>
      </motion.div>

      {/* Footer En Altta */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
