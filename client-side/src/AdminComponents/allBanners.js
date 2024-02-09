

import React, { useEffect, useState } from 'react';
import './AllBanners.css';
import Modal from 'react-modal';

function AllBanners() {
  const [banners, setBanners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    title: '',
    description: '',
    image: null,
  });

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await fetch('http://localhost:4000/api/v1/getbanner', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch banners');
      }

      const data = await response.json();
      setBanners(data);
    } catch (error) {
      console.error('Error fetching banners:', error.message);
    }
  };

  const openModal = (banner) => {
    setSelectedBanner(banner);
    setUpdatedData({
      title: banner.banner.title,
      description: banner.banner.description,
      image: null, // Set to null initially, assuming you want to allow updating the image
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBanner(null);
    setUpdatedData({
      title: '',
      description: '',
      image: null,
    });
    setIsModalOpen(false);
  };

  const handleUpdate = async () => {
    const { _id: id } = selectedBanner;
    const token = sessionStorage.getItem('token');

    try {
      const formData = new FormData();
      formData.append('title', updatedData.title);
      formData.append('description', updatedData.description);

      if (updatedData.image) {
        formData.append('image', updatedData.image);
      }

      const response = await fetch(`http://localhost:4000/api/v1/update-banner/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update banner');
      }

      const data = await response.json();
      alert('Banner updated successfully!');
      fetchBanners();
      closeModal();
    } catch (error) {
      console.error('Error updating banner:', error.message);
    }
  };

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem('token');

    try {
      const response = await fetch(`http://localhost:4000/api/v1/delete-banner/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete banner');
      }

      const data = await response.json();
      alert('Banner deleted successfully!');
      fetchBanners();
    } catch (error) {
      console.error('Error deleting banner:', error.message);
    }
  };

  return (
    <div className="all-banners-container">
      <h2>All Banners</h2>
      <ul className="banners-list">
        {banners.map((banner) => (
          <li key={banner._id} className="banner-item">
            <img
              src={`http://localhost:4000/uploads/banners/${banner.banner.image}`}
              alt={banner.banner.title}
              className="banner-image"
              onError={(e) => {
                console.error('Error loading image:', e);
              }}
            />
            <div className="banner-details">
              <p className="banner-title">{banner.banner.title}</p>
              <p className="banner-description">{banner.banner.description}</p>
              <div className="button-container">
                <button onClick={() => openModal(banner)}>Update</button>
                <button onClick={() => handleDelete(banner._id)}>Delete</button>
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
    <form className='update-form'>
          <label>Title:</label>
          <input
            type="text"
            value={updatedData.title}
            onChange={(e) => setUpdatedData({ ...updatedData, title: e.target.value })}
          />

          <label>Description:</label>
          <textarea
            value={updatedData.description}
            onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })}
          />

          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setUpdatedData({ ...updatedData, image: e.target.files[0] })}
          />

  <button className='update-button' type="button" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default AllBanners;

