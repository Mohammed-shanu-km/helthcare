import React from "react";
import "./Nurse.css";
import nurseimage from "../../assets/about-img-uxKzPyyQ.jpg";
import ajamal from "../../assets/founder-aSw4yuTm (1).jpg";

const Nurse = () => {
  return (
    <section className="nurse-section-main">
      <div className="nurse-container">
        <div className="nurse-main-section">
          <div className="nurse-image">
            <img src={nurseimage} alt="" />
          </div>
          <div className="nurse-content">
            <h1>Care Health Pharmacy</h1>
            <p className="same">
              {" "}
              Welcome to Care Health Pharmacy, located in Al Majaz, Sharjah,
              UAE. We provide quality medications and healthcare services
              including prescription filling, over-the-counter medications,
              compounding, vaccinations, and personalized customer care. Our
              commitment to excellence ensures safety, efficacy, and exceptional
              service for all your healthcare needs.
            </p>
            <div className="rounded">
              <div className="round-contents">
                <div className="round-image">
                  <img src={ajamal} alt="" />
                </div>
                <div className="round-detail-content">
                  <h2>Ajmal. CK</h2>
                  <p className="founder">Founder Of Care Health Pharmacy</p>
                  <p className="same">
                    At Care Health Pharmacy, your health is our priority. Thank
                    you for choosing us for your healthcare needs!
                  </p>
                </div>
              </div>
            </div>
            <p>
              Visit our website to discover our products, services, and health
              resources, or drop by our pharmacy to experience our commitment to
              your health firsthand. Your well-being is our priority, and we
              eagerly anticipate the opportunity to serve you with
              professionalism, compassion, and expertise.
            </p>
            <button className="contact-btn">CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nurse;
