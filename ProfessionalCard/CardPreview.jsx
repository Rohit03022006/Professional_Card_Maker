import React, { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./CardPreview.css";

const CARD_WIDTH_MM = 85; 
const CARD_HEIGHT_MM = 55; 

const CardPreview = ({ formData }) => {
  const cardRef = useRef(null);

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

  const downloadPDF = async () => {
    if (!cardRef.current) return;

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3, 
        logging: false,
        useCORS: true, 
      });

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [CARD_WIDTH_MM, CARD_HEIGHT_MM]
      });

      pdf.addImage(
        canvas.toDataURL("image/png", 1.0),
        "PNG",
        0, 
        0, 
        CARD_WIDTH_MM, 
        CARD_HEIGHT_MM 
      );

      pdf.save(`${formData.fullName || "business-card"}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="card-container">
      <div className="professional-card" ref={cardRef}>
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
      <button className="download-button" onClick={downloadPDF}>
        <FaDownload /> Download as PDF
      </button>
    </div>
  );
};

export default CardPreview;