import React from "react";
import React, { useEffect } from "react";
import { useLocation } from "@remix-run/react";
import Home from "~/components/Home";  // ✅ Doğru import yolu!
import ProcessStep from "~/components/ProcessSteps";
import Services from "~/components/Services";
import InfoCards from "~/components/InfoCards";
import Footer from "~/components/Footer";
import WhyChooseUs from "~/components/WhyChooseUs";



export default function Index() {


    const location = useLocation();

  useEffect(() => {
    if (location.hash === "#services") {
      // Öncelikle tarayıcıyı en üste çekiyoruz:
      window.scrollTo(0, 0);
      // URL'den hash bilgisini kaldırıyoruz:
      window.history.replaceState(null, "", window.location.pathname);

      // Sayfa tamamen render edildikten sonra, biraz bekleyip (örneğin 500-1000ms) smooth scroll uyguluyoruz:
      setTimeout(() => {
        const element = document.getElementById("services");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); 
    }
  }, [location]);



    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Home />
            <Services />
            <ProcessStep />
            <InfoCards />
            <WhyChooseUs />
            <Footer />
        </div>
    );
}
