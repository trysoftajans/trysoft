import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* Üst Kısım */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Çözümlerimiz */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-3">ÇÖZÜMLERİMİZ</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/seo" className="hover:underline">Seo</a></li>
            <li><a href="/mobile-app" className="hover:underline">Mobil Uygulama</a></li>
            <li><a href="/digital-growth" className="hover:underline">Dijital Pazarlama</a></li>
            <li><a href="/ecommerce" className="hover:underline">E-Ticaret Danışmanlığı</a></li>
            <li><a href="/socialmedia" className="hover:underline">Sosyal Medya Yönetimi</a></li>
            <li><a href="/web-development" className="hover:underline">Kurumsal Web Sitesi Ve E-Ticaret Sitesi</a></li>
          </ul>
        </div>

        {/* Kurumsal */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-3">KURUMSAL</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/about" className="hover:underline">Hakkımızda</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">İletişim</a></li>
            <li><a href="/kvkk" className="hover:underline">KVKK Aydınlatma Metni</a></li>
          </ul>
        </div>

        {/* İletişim */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-3">İLETİŞİM</h3>
          <ul className="text-sm space-y-2">
            <li><strong>Adres:</strong> Kavaklıdere Mahallesi Bardacık Sokak No:29</li>
            <li>Çankaya/Ankara</li>
            <li>
              <strong>GSM:</strong>{" "}
              0545 662 50 80
            </li>
            <li>
              <strong>Mail:</strong>{" "}
              trysoftajans@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm">
        <p className="text-center md:text-left">© 2025 Trysoft Dijital Pazarlama Reklam Ticaret A.Ş.</p>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">

          <a href="/kvkk" className="hover:underline">
          KVKK Aydınlatma Metni
          </a>

          <a href="https://www.instagram.com/trysoftajans/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-gray-400" />
          </a>

          <a href="https://www.linkedin.com/company/trysoftyazilimgelistirme/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-gray-400" />
          </a>
          
          <p>Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
