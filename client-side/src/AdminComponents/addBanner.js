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
<div className="add-banner">
      <h2>Add Banner</h2>
      <form>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label>Image:</label>
        <input type="file" onChange={handleFileChange} />
        <br />

        <button type="button" onClick={addBanner}>
          Add Banner
        </button>
      </form>
    </div>
  );
}

export default AddBanner;
