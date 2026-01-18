import { useState } from "react";

function FormPage() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function validateForm() {
    const newErrors = {};

    if (title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }

    if (location.trim().length === 0) {
      newErrors.location = "Location is required.";
    }

    if (description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault(); 

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    const formData = {
      title,
      location,
      description,
    };

    console.log("New travel story:", formData);

    setErrors({});
    setSuccessMessage("Story submitted successfully!");

    setTitle("");
    setLocation("");
    setDescription("");
  }

  return (
  <div className="form-page">
    <div className="form-container">
      <h1 className="form-title">Add a New Travel Story</h1>
      <p className="form-subtitle">Share your experience with other travelers.</p>

      <form onSubmit={handleSubmit} className="story-form">
        
        {/* Title */}
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Trip Title"
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
        </div>

        {/* Location */}
        <div className="form-field">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="location"
          />
          {errors.location && <p className="error-message">{errors.location}</p>}
        </div>

        {/* Description */}
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="4"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Tell us about your experience..."
          />
          {errors.description && <p className="error-message">{errors.description}</p>}
        </div>

        <button type="submit" className="submit-button">
          Submit Story
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  </div>
);

}



export default FormPage;
