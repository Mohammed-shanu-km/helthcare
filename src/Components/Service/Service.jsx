import React from "react";
import "./Service.css";
import image1 from "../../assets/health-ZI5BPtUO.jpg";
import { FaThumbsUp } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";


const datas=[
    {
        image:image1,
        heading:"Health Care",
        
    }
]

const Service = () => {
  return (
    <section className="service-section-main">
      <div className="service-container">
        <div className="service-content">
          <h1>Our Services</h1>
          <p>
            Explore our range of essential pharmacy services, from prescription
            refills to expert medication consultations, ensuring your
            <br /> healthcare needs are met with personalized care and
            efficiency.
          </p>
        </div>
        <div className="service-cards-main">
          <div className="service-card">
            <div className="service-image">
              <img src={image1} alt="" />
            </div>
            <div className="servive-card-content">
              <div className="thumb-icon">
                <div className="first-icon">
                  <FaThumbsUp
                    style={{ height: "40px", width: "40px", color: "white" }}
                  />
                </div>
                <div className="second-icon">
                  <GoThumbsup className="service-card-icon" />
                </div>
              </div>
              <div className="content-section">
                <h1>Health Care</h1>
                <p>
                  Health care drugs are medicines sold directly to a consumer
                  without a prescription.
                </p>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src={image1} alt="" />
            </div>
            <div className="servive-card-content">
              <div className="thumb-icon">
                <div className="first-icon">
                  <FaThumbsUp
                    style={{ height: "40px", width: "40px", color: "white" }}
                  />
                </div>
                <div className="second-icon">
                  <GoThumbsup className="service-card-icon" />
                </div>
              </div>
              <div className="content-section">
                <h1>Health Care</h1>
                <p>
                  Health care drugs are medicines sold directly to a consumer
                  without a prescription.
                </p>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src={image1} alt="" />
            </div>
            <div className="servive-card-content">
              <div className="thumb-icon">
                <div className="first-icon">
                  <FaThumbsUp
                    style={{ height: "40px", width: "40px", color: "white" }}
                  />
                </div>
                <div className="second-icon">
                  <GoThumbsup className="service-card-icon" />
                </div>
              </div>
              <div className="content-section">
                <h1>Health Care</h1>
                <p>
                  Health care drugs are medicines sold directly to a consumer
                  without a prescription.
                </p>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src={image1} alt="" />
            </div>
            <div className="servive-card-content">
              <div className="thumb-icon">
                <div className="first-icon">
                  <FaThumbsUp
                    style={{ height: "40px", width: "40px", color: "white" }}
                  />
                </div>
                <div className="second-icon">
                  <GoThumbsup className="service-card-icon" />
                </div>
              </div>
              <div className="content-section">
                <h1>Health Care</h1>
                <p>
                  Health care drugs are medicines sold directly to a consumer
                  without a prescription.
                </p>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src={image1} alt="" />
            </div>
            <div className="servive-card-content">
              <div className="thumb-icon">
                <div className="first-icon">
                  <FaThumbsUp
                    style={{ height: "40px", width: "40px", color: "white" }}
                  />
                </div>
                <div className="second-icon">
                  <GoThumbsup className="service-card-icon" />
                </div>
              </div>
              <div className="content-section">
                <h1>Health Care</h1>
                <p>
                  Health care drugs are medicines sold directly to a consumer
                  without a prescription.
                </p>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src={image1} alt="" />
            </div>
            <div className="servive-card-content">
              <div className="thumb-icon">
                <div className="first-icon">
                  <FaThumbsUp
                    style={{ height: "40px", width: "40px", color: "white" }}
                  />
                </div>
                <div className="second-icon">
                  <GoThumbsup className="service-card-icon" />
                </div>
              </div>
              <div className="content-section">
                <h1>Health Care</h1>
                <p>
                  Health care drugs are medicines sold directly to a consumer
                  without a prescription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
