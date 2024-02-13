import React, { useEffect, useState } from "react";
import "../AllBanners.css";
import Modal from "react-modal";

function AllServices() {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    title: "",
    slogan: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/getservice", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch banners");
      }

      const data = await response.json();
      setServices(data);

      console.log(data, "getr services ");
    } catch (error) {
      console.error("Error fetching banners:", error.message);
    }
  };

  const openModal = (service) => {
    setSelectedService(service);
    setUpdatedData({
      title: service.service.title,
      slogan: service.service.slogan,
      description: service.service.description,
      image: null, // Set to null initially, assuming you want to allow updating the image
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setUpdatedData({
      title: "",
      slogan: "",
      description: "",
      image: null,
    });
    setIsModalOpen(false);
  };

  const handleUpdate = async () => {
    const { _id: id } = selectedService;
    const token = sessionStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("title", updatedData.title);
      formData.append("slogan", updatedData.slogan);
      formData.append("description", updatedData.description);

      if (updatedData.image) {
        formData.append("image", updatedData.image);
      }

      const response = await fetch(
        `http://localhost:4000/api/v1/update-service/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update banner");
      }

      const data = await response.json();
      alert("Banner updated successfully!");
      fetchBanners();
      closeModal();
    } catch (error) {
      console.error("Error updating banner:", error.message);
    }
  };

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/delete-service/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete banner");
      }

      const data = await response.json();
      alert("Banner deleted successfully!");
      fetchBanners();
    } catch (error) {
      console.error("Error deleting banner:", error.message);
    }
  };

  return (
    <div className="all-banners-container">
      <h2>All Services</h2>
      <ul className="banners-list">
        {services.map((service) => (
          <li key={service._id} className="banner-item">
            <img
              src={`http://localhost:4000/uploads/services/${service.service.image}`}
              alt={service.service.title}
              className="banner-image"
              onError={(e) => {
                console.error("Error loading image:", e);
              }}
            />
            <div className="banner-details">
              <p className="banner-title">{service.service.title}</p>
              <p className="banner-description">{service.service.slogan}</p>
              <p className="service-description">
                {service.service.description}
              </p>
              <div className="button-container">
                <button
                  onClick={() => openModal(service)}
                  className="btn btn-success"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for updating banner */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Update Banner Modal"
        className="modal-content" // Custom modal content class
        overlayClassName="modal-overlay" // Custom modal overlay class
      >
        <h2>Update Banner</h2>
        <form className="update-form">
          <label>Title:</label>
          <input
            type="text"
            value={updatedData.title}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, title: e.target.value })
            }
          />
          <label>Slogan:</label>
          <input
            type="text"
            value={updatedData.slogan}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, slogan: e.target.value })
            }
          />
          <label>Description:</label>
          <textarea
            value={updatedData.description}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, description: e.target.value })
            }
          />

          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setUpdatedData({ ...updatedData, image: e.target.files[0] })
            }
          />

          <button
            className="update-button"
            type="button"
            onClick={handleUpdate}
          >
            Update
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default AllServices;
