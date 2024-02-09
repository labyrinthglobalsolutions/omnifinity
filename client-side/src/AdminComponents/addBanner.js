import React, { useState } from "react";
import "./addBanner.css";

function AddBanner() {
  const [title, setTitle] = useState("");
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
      formData.append("description", description);
      formData.append("image", image);

      const response = await fetch("http://localhost:4000/api/v1/addbanner", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add banner");
      }
      alert("Banner Added successfully");
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
        <h2 className="add-banner-heading">Add Banner</h2>
        <div className="add-banner-input-container">
          <label className="add-banner-label">Title</label>
          <input
            type="text"
            value={title}
            placeholder="Enter Banner Title"
            onChange={(e) => setTitle(e.target.value)}
            className="add-banner-input"
          />
        </div>

        <div className="add-banner-input-container">
          <label className="add-banner-label">Description</label>
          <input
            type="text"
            placeholder="Enter Banner Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="add-banner-input"
          />
        </div>

        <label className="add-banner-label">Image</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="add-banner-file-input"
        />
        <br />

        <button type="button" className="add-banner-button" onClick={addBanner}>
          Add Banner
        </button>
      </form>
    </div>
  );
}

export default AddBanner;
