import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Kvkk() {
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
            {/* Arka plan bölümü */}
            <section
                className="relative w-full h-screen flex flex-col items-start justify-end text-white px-6 sm:px-10 md:px-16 lg:px-20 overflow-x-hidden"
                style={{
                    backgroundImage: "url('/image/kvkk/background.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 max-w-lg text-left px-4 sm:px-6 md:px-8 mb-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">TRYSOFT</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                        KVKK  AYDINLATMA METNİ
                    </h1>
                </div>
            </section>

            {/* KVKK Bilgileri */}
            <section className="w-full bg-gray-100 py-16 px-6 sm:px-10 md:px-16 lg:px-20">
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                    KİŞİSEL VERİLERİN İŞLENMESİ VE KORUNMASI HAKKINDA AYDINLATMA METNİ
                    </h3>
                    <p className="text-gray-700 mb-6">
                    TrySoft Dijital Pazarlama ve Yazılım Ajansı – TrySoft olarak anılacaktır. 
                    6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili diğer mevzuat kapsamında elde edilen kişisel verileriniz,
                     kanunda tanımlanan veri sorumlusu sıfatıyla korumamız altındadır. 
                    </p>

                    <p className="text-gray-700 mb-6">
                    TrySoft olarak; tarafınıza hizmet sağlamak amacıyla, demo uygulama açma sırasında alınan bilgiler, 
                    iletişime geçilebilmesi için bırakılan kontak bilgileri, e-bültene kayıt olma sırasında paylaşılan 
                    bilgiler (ad soyad, kurum adı, e-posta adresi, telefon numarası vb.) ile kişisel veri tanımına giren 
                    her türlü verinin aşağıdaki koşullar ve kapsamda TrySoft tarafından toplanmakta, kullanılmakta, korunmakta, 
                    işlenmekte, muhafaza edilmekte, paylaşılmakta, silinmekte ve imha edilmektedir.
                    </p>


                    
                    <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">KİŞİSEL VERİLERİN İŞLENME AMAÇLARI</h3>


                    <p className="text-gray-700 mb-6">
                    Kişisel verileriniz TrySoft tarafından sunulan ürün ve hizmetlerden ilgili kişileri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi, ürün ve/veya hizmetlerin kullanılması ve satış süreçlerinin planlanması ve icrası, operasyon süreçlerinin planlanması ve icrası, satış sonrası destek hizmetleri aktivitelerinin planlanması ve/veya icrası, iş ortakları ve/veya tedarikçilerle olan ilişkilerin yönetimi, verilerin doğru ve güncel olmasının sağlanması ve sunulmakta olan hizmetlerin tedarikinde sürekliliğin sağlanması, ziyaretçi kayıtlarının oluşturulması ve takibi, TrySoft’un ve TrySoft ile iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temin edilmesi amacıyla, tarafınıza sağlanan hizmetlere ilişkin işlem ve işlerin yürütümü, sözleşmesel edimin gereği gibi ifade edilebilmesi, hizmet kalitesi vb. hususların takibi amacıyla,
                    İnsan kaynakları, finansal ve muhasebesel kayıtların tutulması amacıyla, İzinli Kullanıcı Veri Tabanı Kayıt ve Elektronik Ticari İleti İzin Metnini kabul etmişseniz TrySoft ve İş Ortaklarının kampanya, promosyon ve benzeri pazarlama faaliyetleri kapsamında,
                    Bilgi Teknolojileri İletişim Kurumu’na düzenli olarak ilgili mevzuat gereği yapılan bilgilendirme yükümlülüğü kapsamında, İlgili Kamu Kurum ve Kuruluşları, Noterlik, Mahkeme ve Savcılıklar’a bildirim zorunluluğu ve TrySoft’un hukuken haklarını korumak amacıyla her türlü yasal merci nezdinde yükümlülüklerin yerine getirilmesi amacıyla KVKK’nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçlar kapsamında işlenecektir.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">KİŞİSEL VERİLERİN KİMLERE VE HANGİ AMAÇLARLA AKTARILABİLECEĞİ</h3>
                    <p className="text-gray-700 mb-6">
                    Kişisel verileriniz; TrySoft’un ticari olarak varlığını sürdürebilmesi ve yukarıda belirtilen amaçların gerçekleştirilmesi amacıyla ve bununla sınırlı olmak üzere;
                    Grup şirketleri ve iştiraklerle, şirket hissedarlarımızla ve şirketimiz avukatlarıyla, bağımsız denetçilerle, danışmanlarla, bankalarla, arşivleme ve faturalama şirketleriyle, iş sağlığı ve güvenliği uzmanlarıyla, ilgili kamu kurum ve kuruluşları ile, İzinli Kullanıcı Veri Tabanı Kayıt ve Elektronik Ticari İleti İzin Metnini kabul etmişseniz TrySoft ve İş Ortaklarının kampanya, promosyon ve benzeri pazarlama faaliyetleri kapsamında yurtiçinde ve yurtdışındaki İş Ortakları ile KVKK’nun 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde üçüncü kişilerle paylaşılacaktır.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">KİŞİSEL VERİ TOPLAMANIN YÖNTEMİ VE HUKUKİ SEBEBİ</h3>
                    <p className="text-gray-700 mb-6">
                    Kişisel verileriniz, TrySoft olarak sunduğumuz hizmetlerin belirlenen yasal çerçevede sunulabilmesi ve bu kapsamda sözleşme ve ilgili mevzuattan doğan yükümlülüklerin eksiksiz ve doğru bir şekilde yerine getirebilmesi, sözleşmenin kurulabilmesi ve ifası amacıyla her türlü sözlü, yazılı ya da elektronik ortamda, yukarıda yer verilen amaçlar doğrultusunda hukuki sebeplerle ve ilgili mevzuat kapsamında bunlarla sınırlı olmamak kaydıyla toplanabilmektedir. Bu hukuki sebeple toplanan kişisel verileriniz KVKK’nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında bu metnin A ve B maddelerinde belirtilen amaçlarla da işlenebilmekte ve aktarılabilmektedir.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">İLGİLİ KİŞİ OLARAK HAKLARINIZ</h3>
                    <p className="text-gray-700 mb-6">
                     6698 sayılı KVKK’nın 11. Maddesi kapsamında herkes veri sorumlusu sıfatı ile TrySoft’a aşağıdaki
                     hususlarda başvurma hakkına sahiptir:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                        <li>İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                        <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
                        <li>6698 sayılı KVKK’nun 7. maddesi uyarınca, bu Kanun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel veriler resen veya ilgili kişinin talebi üzerine öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
                        <li>6. Maddeler kapsamında bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                        <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.</li>
                        <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
                        <li>Verilerinizin silinmesini veya yok edilmesini isteme,</li>
                        <li>Verilerin aktarıldığı üçüncü kişileri bilme,</li>
                    </ul>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">İLGİLİ KİŞİNİN HAKLARINI KULLANMA YÖNTEMİ</h3>
                    <p className="text-gray-700 mb-6">
                    Kişisel veri sahibi “İlgili Kişi”, D bendinde yer verilen haklarını ve taleplerini TrySoft’a bildirebilecektir. Bu kapsamda ilgili kişi 6698 Sayılı Kişisel Verilerin Korunması Kanunu madde 11 uyarınca sahip olduğu diğer tüm haklarını kullanmak amacıyla,
                    </p>

                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Başvuru sahibinin şahsen başvurusu ile,</li>
                        <li>İmza beyannamesi eklenerek posta yoluyla,</li>
                        <li>Noter vasıtasıyla,</li>
                        <li>Başvuru sahibinin adına tanımlı güvenli elektronik imza ile imzalanarak aşağıda belirtilen KEP adresine göndererek,</li>
                        
                

                    </ul>

                    <p className="text-gray-700 mb-6">
                    kimliğini ve ilgisini ispatlamak suretiyle başvurabilir.
                    Başvuru talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılacaktır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde, Kurulca belirlenen tarifedeki ücret alınabilir.
                    </p>
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
