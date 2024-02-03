import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Pendidikan"
        body={
          <div className="works-body">
            <div className="work">
              <img
                src="./faridImage/uinKHAS.jpeg"
                alt="UIN KHAS"
                className="work-image"
              />
              <div className="work-title">UIN KH. Ahmad Siddiq</div>
              <div className="work-subtitle">Prodi Manajemen Dakwah</div>
              <div className="work-duration">2022 - Sekarang</div>
            </div>

            <div className="work">
              <img src="./faridImage/MaSingosari.jpeg" alt="MA Singosari" className="work-image" />
              <div className="work-title">Madrasah Aliyah Almaarif</div>
              <div className="work-subtitle">Bahasa dan Sastra</div>
              <div className="work-duration">2019 - 2022</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
