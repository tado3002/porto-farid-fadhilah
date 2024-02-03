import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title">
              Mari Menghubungi: Cara Terhubung dengan Saya
            </div>

            <div className="subtitle contact-subtitle">
              Terima kasih atas minat Anda untuk menghubungi saya. Saya
              menyambut masukan, pertanyaan, dan saran Anda. Jika Anda memiliki
              pertanyaan atau komentar spesifik, silakan kirim email langsung
              kepada saya di &nbsp;{" "}
              <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I
              Saya berusaha membalas semua pesan dalam waktu 24 jam, meskipun mungkin memerlukan waktu lebih lama selama masa sibuk. Alternatifnya, Anda dapat menggunakan formulir kontak di situs web saya untuk menghubungi. Cukup isi kolom yang wajib diisi dan saya akan menghubungi Anda sesegera mungkin. Terakhir, jika Anda lebih suka terhubung di media sosial, Anda dapat menemukan saya di{" "}
              <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                {INFO.socials.instagram}
              </a>
			  Saya memposting pembaruan rutin dan berinteraksi dengan pengikut saya di sana, jadi jangan ragu untuk menghubungi kami. Sekali lagi terima kasih atas minat Anda, dan saya menantikan tanggapan Anda!

            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
