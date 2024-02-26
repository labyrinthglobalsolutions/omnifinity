import React, { useState } from "react";
import Contact1 from "../Images/contact1.webp";
import Contact2 from "../Images/contact2.webp";
import Contact3 from "../Images/contact3.webp";
import Contact4 from "../Images/conatct4.webp";
// import ReCAPTCHA from "react-google-recaptcha";
// import Footer from "../Footer/Footer"
import "./Contact.css";
// const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const Data = [
  {
    projectId: 1,
    imageUrl: Contact1,
    title: "London",
    description: "Two Kingdom Street, 6th Floor, Paddington,London W2 6BD ",
    phone: "+44 (0) 203 580 4343",
  },
  {
    projectId: 2,
    imageUrl: Contact2,
    title: "New York",
    description: "405 Lexington Avenue, The Chrysler Building,New York 10174",
    phone: "+1 347 701 4221",
  },
  {
    projectId: 3,
    imageUrl: Contact3,
    title: "Dubai",
    description:
      "Liberty House, Sheikh Zayed Rd, Trade Centre, DIFC Dubai 417624",
    phone: "+971 4 446 1890",
  },
  {
    projectId: 4,
    imageUrl: Contact4,
    title: "Riyadh",
    description: "Akaria, Olayya Street,PO Box 295879,Riyadh 11351",
    phone: "+966 11 4600 670",
  },
];

//api call for countact us form

export default function Contact() {
  // const _reCaptchaRef = React.createRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    company: "",
    country: "",
    message: "",
  });

  const apiUrl = "http://localhost:4000/api/v1/contact-us";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log(formData)
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Success:", responseData);
        alert("Your message has been sent successfully");

        // Clear the form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNo: "",
          company: "",
          country: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "An error occurred while sending your message. Please try again later."
        );
      });
  };
  return (
    <div className="totalContactUsContainer">
      <div className="container-fluid p-0 w-100">
        <div className="row">
          <div style={{ height: "400px" }}>
            <div className="col-12 contactbgcontainer">
              {/* <h1 className="contactHeading text-primary" >Contact US!</h1> */}
            </div>
            <div className="col-12 text-center w-100">
              <h1 className="contactHeading text-center">Contact US!</h1>
            </div>
          </div>
          {Data.map((each, index) => (
            <div className="col-12 col-md-3 text-center w-90 mt-3 mb-3 p-4">
              <img
                src={each.imageUrl}
                height="150"
                width="150"
                alt={`${index + 1}`}
              />
              <h6 className="text-primary mt-3">{each.title}</h6>
              <p className="text-secondary">{each.description}</p>
              <p className="text-secondary">{each.phone}</p>
            </div>
          ))}
          <div className="col-12">
            <div className="container">
              <div
                className="row shadow mb-3 p-2"
                style={{ border: "1px solid black" }}
              >
                <div className="col-12">
                <form
      className="form-control"
      style={{ border: "none", outline: "none" }}
      onSubmit={handleSubmit}
    >
      <div className="container-fluid p-0 w-100">
        <div className="row">
          <div className="col-12 p-2 text-center bg-primary">
            <h3 style={{ color: "#ffffff" }}>Get in touch!</h3>
          </div>
          <div className="p-2 mt-3 mb-3 col-md-6">
            <label htmlFor="email" className="text-left" style={{ fontWeight: "normal" }}>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              id="email"
              type="text"
              className="w-100"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 mt-3 mb-3 col-md-6">
            <label htmlFor="phoneNo" className="text-left" style={{ fontWeight: "normal" }}>
              Phone Number <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="phoneNo"
              className="w-100"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 mt-3 mb-3 col-md-6">
            <label htmlFor="firstName" className="text-left" style={{ fontWeight: "normal" }}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-100"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 mt-3 mb-3 col-md-6">
            <label htmlFor="lastName" className="text-left" style={{ fontWeight: "normal" }}>
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-100"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 mt-3 mb-3 col-md-6">
            <label htmlFor="company" className="text-left" style={{ fontWeight: "normal" }}>
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="w-100"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 mt-3 mb-3 col-md-6">
            <label htmlFor="country" className="text-left" style={{ fontWeight: "normal" }}>
              Country/Region
            </label>
            <input
              type="text"
              id="country"
              className="w-100"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="text-left" style={{ fontWeight: "normal" }}>
              Message
            </label>
            <textarea
              rows="5"
              id="message"
              className="w-100 p-2 mt-3 mb-3"
              cols="54"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-12 text-center w-100">
            <button
              type="submit"
              className="p-2 text-left"
              style={{
                border: "none",
                outline: "none",
                height: "45px",
                width: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff",
                backgroundColor: "#0f4494",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
