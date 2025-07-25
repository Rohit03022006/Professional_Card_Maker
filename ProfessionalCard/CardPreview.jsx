import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import "./CardPreview.css";
const CardPreview = ({ formData }) => {
  const generateVCard = () => {
    try {
      return [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${formData.fullName || ""}`,
        `TITLE:${formData.designation || ""}`,
        `ORG:${formData.company || ""}`,
        `TEL:${formData.phone || ""}`,
        `EMAIL:${formData.email || ""}`,
        `URL:${formData.website || ""}`,
        "END:VCARD",
      ].join("\n");
    } catch (error) {
      console.error("Error generating vCard:", error);
      return "ERROR: Could not generate contact data";
    }
  };

  const getQRData = () => {
    try {
      if (!formData.fullName && !formData.phone && !formData.email) {
        return "https://example.com";
      }
      return generateVCard();
    } catch (error) {
      console.log(error);
      return "https://example.com";
    }
  };

  return (
    <div className="professional-card">
      <div className="card-content">
        <div className="card-header">
          {formData.photo && (
            <div className="card-photo">
              <img src={formData.photo} alt="Profile" />
            </div>
          )}
          <div className="card-text">
            <h3>{formData.fullName || "Your Name"}</h3>
            <p className="designation">
              {formData.designation || "Your Title"}
            </p>
            <p className="company">{formData.company || "Company Name"}</p>
          </div>
        </div>

        <div className="contact-info">
          {formData.phone && (
            <p className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>{formData.phone}</span>
            </p>
          )}
          {formData.email && (
            <p className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>{formData.email}</span>
            </p>
          )}
          {formData.website && (
            <p className="contact-item">
              <FaGlobe className="contact-icon" />
              <span>{formData.website}</span>
            </p>
          )}
        </div>

        <div className="qr-code">
          <QRCodeSVG
            value={getQRData()}
            size={150}
            level="H"
            bgColor="#ffffff"
            fgColor="#292c6d"
            includeMargin={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
