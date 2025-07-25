import "./CardForm.css"

const CardForm = ({ formData, handleChange, handlePhotoChange, handleSubmit, errors}) => {
  return (
    <form onSubmit={handleSubmit} className="card-form">
      <h2>Professional Information</h2>
      
      <div className="form-group">
        <label>Profile Photo:</label>
        <input 
          type="file" 
          onChange={handlePhotoChange}
          accept="image/*"
        />
      </div>

      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={errors.fullName ? 'error' : ''}
        />
        {errors.fullName && <span className="error-text">{errors.fullName}</span>}
      </div>

      <div className="form-group">
        <label>Phone *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label>Designation *</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className={errors.designation ? 'error' : ''}
        />
        {errors.designation && <span className="error-text">{errors.designation}</span>}
      </div>

      <div className="form-group">
        <label>Company *</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={errors.company ? 'error' : ''}
        />
        {errors.company && <span className="error-text">{errors.company}</span>}
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Website</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default CardForm;