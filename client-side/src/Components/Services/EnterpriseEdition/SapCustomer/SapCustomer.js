import React from "react";

import "../SapHana/SapHana.css";
import { Fade } from "react-awesome-reveal";
import WhyUsBanner from "../../WhyUsBanner/WhyusBanner";

import sapcustomer1 from "../../../../images/Enterprise/SapCustomer/sapcustomer1.jpg";
import sapcustomer2 from "../../../../images/Enterprise/SapCustomer/sapcustomer2.jpg";

import sapcustomer3 from "../../../../images/Enterprise/SapCustomer/sapcustomer3.jpg";

import sapcustomer4 from "../../../../images/Enterprise/SapCustomer/sapcustomer4.jpg";

import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    image: sapcustomer1,
    heading: "Easy-to-use interface",
    description:
      "SAP customer checkout has an intuitive interface that makes it easy for your employees to use. This reduces the amount of training time needed and ensures that your staff can quickly and easily process transactions.",
    link: "",
  },
  {
    id: 2,
    image: sapcustomer2,
    heading: "Sales Management",
    description:
      ": SAP customer checkout supports multiple channels, including online, mobile, and in-store. This enables you to provide a seamless customer experience across all channels, improving customer satisfaction and loyalty.",
    link: "",
  },
  {
    id: 3,
    image: sapcustomer3,
    heading: "Real-time inventory management",
    description:
      "With SAP customer checkout, you can manage your inventory in real-time. This allows you to quickly identify which products are selling well and which ones need to be restocked.",
    link: "",
  },
  {
    id: 4,
    image: sapcustomer4,
    heading: "Integrated payments",
    description:
      "SAP customer checkout supports a wide range of payment options, including credit and debit cards, mobile payments, and gift cards. This ensures that your customers can pay in the way that's most convenient for them.",
    link: "",
  },
];

const SapCustomer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="saphana-first-container">
        <div className="sap-customer-bg-container"></div>
        <div className="saphana-bg-sub-container">
          <h3 className="saphana-enterprise-system-text">ENTERPRISE SYSTEMS</h3>
          <h1 className="saphana-bg-heading">SAP Customer Checkout</h1>
          <p className="saphana-bg-sub-heading">A comprehensive POS Solution</p>
        </div>
      </div>
      <div className="saphana-second-main-container">
        <div className="saphana-second-main-left-container">
          <Fade direction="up">
            <p className="saphana-second-main-left-descripton">
              SAP customer checkout is a powerful point-of-sale (POS) software
              that can help you streamline your checkout process, enhance
              customer experience, and increase your revenue. This solution
              allows you to manage all your sales transactions in real-time,
              from start to finish.
            </p>
            <p className="saphana-second-main-left-descripton">
              One of the most significant advantages of SAP Customer Checkout is
              its adaptability. This software can function as a standalone
              solution or be integrated effortlessly with other SAP software
              solutions, giving you the flexibility to customize it to meet your
              business's specific needs.
            </p>
          </Fade>
        </div>

        <Fade direction="down" className="enquiry-form-main-container">
          <div>
            <h1 className="enquiry-form-main-heading">Enquire Now</h1>
            <p className="enquiry-form-sub-heading">
              Please fill in your information and we'll get in touch with you.
            </p>
            <div className="enquiry-form-sub-container">
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  First name<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  Last name<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  Email<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  Phone Number<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  Company name<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div className="enquiry-form-input-container">
                <label className="enquiry-form-label-name">
                  Country/Region<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" className="equiry-form-input-field" />
              </div>
              <div>
                <button className="enquiry-form-submit-button">Submit</button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="saphana-systems-card-main-container">
        <h1 className="saphana-systems-card-main-heading">
          Key Features of SAP Customer Checkout
        </h1>

        <ul className="saphana-systems-card-flex-container">
          {data.map((each) => {
            return (
              <Fade damping={0.1} direction="up" delay={90}>
                <li className="sap-customer-card-container">
                  <img
                    src={each.image}
                    alt=""
                    className="saphana-systems-card-image"
                  />
                  <h4 className="saphana-systems-card-heading">
                    {each.heading}
                  </h4>
                  <p className="saphana-systems-card-description">
                    {each.description}
                  </p>
                  <p>learn more</p>
                </li>
              </Fade>
            );
          })}
        </ul>
      </div>
      <WhyUsBanner
        title={"Why Omnifinity for your SAP Customer Checkout Implementation"}
      />
      <div className="saphana-last-container">
        <p className="saphana-last-description">
          If you're looking to tailor POS solution for your business's specific
          requirements, then Omnifinity Partners is the perfect PARTNER. Contact
          us to get a demo of SAP Customer Checkout.
        </p>

        <button
          className="omnifinity-button"
          onClick={() => navigate("/contactUs")}
        >
          Contact Us
        </button>
      </div>
    </>
  );
};
export default SapCustomer;
