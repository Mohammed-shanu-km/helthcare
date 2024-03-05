import React from "react";
import "./Medicin.css";
import { RiMedicineBottleFill } from "react-icons/ri";
import { MdLocalHospital } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";

const Medicin = () => {
  return (
    <section className="medicin-section">
      <div className="medicin-container">
        <div className="medicin-card-section">
          <div className="medicin-card">
            <div className="card-content">
              <div className="card-first-section">
                <div className="card-image">
                  <MdLocalHospital className="icons" />
                </div>
                <div className="card-number">
                  <h1>01</h1>
                </div>
              </div>
              <h1 className="card-head">General medicine</h1>
              <p className="para">
                We offer patients a convenient and personal service, allowing
                time for a thorough personal assessment
              </p>
            </div>
          </div>
          <div className="medicin-card">
            <div className="card-content">
              <div className="card-first-section">
                <div className="card-image">
                  <RiMedicineBottleFill className="icons" />
                </div>
                <div className="card-number">
                  <h1>02</h1>
                </div>
              </div>

              <h1 className="card-head">General medicine</h1>
              <p className="para">
                We offer patients a convenient and personal service, allowing
                time for a thorough personal assessment
              </p>
            </div>
          </div>
          <div className="medicin-card">
            <div className="card-content">
              <div className="card-first-section">
                <div className="card-image">
                  <MdOutlineEventNote className="icons" />
                </div>
                <div className="card-number">
                  <h1>03</h1>
                </div>
              </div>
              <h1 className="card-head">General medicine</h1>
              <p className="para">
                We offer patients a convenient and personal service, allowing
                time for a thorough personal assessment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Medicin;
