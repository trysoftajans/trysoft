import { json, redirect } from "@remix-run/node";
import { Link, Form } from "@remix-run/react";

// Eğer useTransition mevcut değilse, fallback tanımı:
const useTransition = () => ({ state: "idle" });

import nodemailer from "nodemailer";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

export async function action({ request }) {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.TARGET_EMAIL,
      subject: "Yeni İletişim Formu",
      text: `
        Adı Soyadı: ${firstName} ${lastName}
        E-posta: ${email}
        Telefon: ${phone}
        Hizmet: ${service}
        Mesaj: ${message}
      `,
    });
    return redirect("/thankyou");
  } catch (error) {
    console.error("E-posta gönderilemedi:", error);
    return json({ success: false, error: "E-posta gönderilemedi." }, { status: 500 });
  }
}

export default function Contact() {
  const transition = useTransition();

  const handleClick = () => {
    const phoneNumber = "905456625080";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section
        style={{ backgroundImage: `url("/image/contact/background.jpg")` }}
        className="min-h-screen bg-cover bg-center bg-no-repeat text-black pt-24 pb-24"
      >
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mt-8">
            <Form method="post" className="space-y-4">
              <div>
                <label className="block font-bold mb-2">
                  Adı Soyadı <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input type="text" name="firstName" placeholder="Ad" required className="w-full p-2 rounded border border-gray-400 text-black font-bold focus:outline-none" />
                  <input type="text" name="lastName" placeholder="Soyad" required className="w-full p-2 rounded border border-gray-400 text-black font-bold focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block font-bold mb-2">E-posta <span className="text-red-500">*</span></label>
                <input type="email" name="email" placeholder="E-posta adresinizi giriniz" required className="w-full p-2 rounded border border-gray-400 text-black font-bold focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold mb-2">Telefon Numaranız <span className="text-red-500">*</span></label>
                <input type="text" name="phone" placeholder="Telefon numaranızı giriniz" required className="w-full p-2 rounded border border-gray-400 text-black font-bold focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold mb-2">Almak İstediğiniz Hizmet</label>
                <input type="text" name="service" placeholder="Hangi hizmeti almak istiyorsunuz?" className="w-full p-2 rounded border border-gray-400 text-black font-bold focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold mb-2">Not</label>
                <textarea name="message" rows="4" placeholder="İletmek istediğiniz bir not varsa lütfen ekleyiniz." className="w-full p-2 rounded border border-gray-400 text-black font-bold focus:outline-none"></textarea>
              </div>
              <button type="submit" className="px-6 py-2 bg-black text-white font-bold rounded hover:bg-white hover:text-black transition-colors">
                {transition.state === "submitting" ? "Gönderiliyor..." : "Gönder"}
              </button>
            </Form>
          </div>
          <div className="space-y-6 mt-8">
            <h2 className="text-4xl font-bold mb-2">İletişim Bilgilerimiz</h2>
            <p className="font-bold">Bir kahve eşliğinde görüşelim.</p>
            <p><strong>Adres:</strong>Kavaklıdere Mahallesi Bardacık Sokak No:29  Çankaya/ANKARA</p>
            <p><strong>Telefon:</strong> <a href="tel:02129931397" className="text-blue-600">0545 662 50 80 </a></p>
            <p><strong>E-Posta:</strong> <a href="mailto:info@bossydigital.com" className="text-blue-600">trysoftajans@gmail.com</a></p>
            
            <iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


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


      <Footer />
    </>
  );
}
