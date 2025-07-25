import { useState, useCallback, useMemo } from "react";
import CardForm from "./CardForm";
import CardPreview from "./CardPreview";
import "./ProfessionalCard.css";
const ProfessionalCard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    designation: "",
    company: "",
    email: "",
    website: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateField = useCallback((name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        return "";
      case "designation":
        if (!value.trim()) return "Designation is required";
        return "";
      case "company":
        if (!value.trim()) return "Company name is required";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email format";
        return "";
      default:
        return "";
    }
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "photo") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return newErrors;
  }, [formData, validateField]);

  const isValid = useMemo(() => {
    return (
      Object.keys(errors).length === 0 &&
      Object.values(formData).some((val) => val !== "" && val !== null)
    );
  }, [errors, formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handlePhotoChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: URL.createObjectURL(file),
      }));
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formErrors = validateForm();

      if (Object.keys(formErrors).length === 0) {
        setIsSubmitting(true);
        setTimeout(() => {
          console.log("Form submitted:", formData);
          setSubmitMessage("Card generated successfully!");
          setIsSubmitting(false);
        }, 1000);
      }
    },
    [formData, validateForm]
  );

  return (
    <>
      <div className="left">
        <div className="professional-card-container ">
          <CardForm
            formData={formData}
            handleChange={handleChange}
            handlePhotoChange={handlePhotoChange}
            handleSubmit={handleSubmit}
            errors={errors}
            isValid={isValid}
            isSubmitting={isSubmitting}
          />
        </div>
        <div className="right">
          <div className="card-preview-container">
            <CardPreview formData={formData} />
            {submitMessage && (
              <div
                className={`submit-message ${
                  submitMessage.includes("success") ? "success" : "error"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalCard;
