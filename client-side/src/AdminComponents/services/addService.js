import React, { useState } from "react";
import "../addBanner.css";

function AddService() {
  const [title, setTitle] = useState("");
  const [slogan, setSlogan] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Debounce file input change handler
  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];

    // Use the callback form to get the latest state value
    setImage((prevImage) => {
      // Do something with the selectedImage if needed
      return selectedImage;
    });
  };

  const addBanner = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slogan", slogan);
      formData.append("description", description);
      formData.append("image", image);

      const response = await fetch("http://localhost:4000/api/v1/addservice", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add banner");
      }
      alert("Service Added successfully");
      setDescription("");
      setTitle("");
      setImage(null);
      // Optionally, you can redirect or update the banner list
    } catch (error) {
      console.error("Error adding banner:", error.message);
    }
  };

  return (
    <div className="add-banner-container">
      <form className="add-banner-form-container">
        <h2 className="add-banner-heading">Add Services</h2>
        <div className="add-banner-input-container">
          <label className="add-banner-label">Title</label>
          <input
            type="text"
            placeholder="Enter Service Title"
            className="add-banner-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="add-banner-input-container">
          <label className="add-banner-label">Slogan</label>
          <input
            placeholder="Enter Slogan"
            className="add-banner-input"
            type="text"
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
          />
        </div>
        <div className="add-banner-input-container">
          <label className="add-banner-label">Description</label>
          <input
            placeholder="Enter Description"
            className="add-banner-input"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="add-banner-input-container">
          <label className="add-banner-label">Image</label>

          <input
            type="file"
            onChange={handleFileChange}
            placeholder="Select a File"
            className="add-banner-file-input"
          />
        </div>
        <button
          type="button"
          className="add-service-button"
          onClick={addBanner}
        >
          Add Service
        </button>
      </form>
    </div>
  );
}

export default AddService;
