import React from "react";

import "../SapHana/SapHana.css";
import { Fade } from "react-awesome-reveal";
import WhyUsBanner from "../../WhyUsBanner/WhyusBanner";

import sapariba1 from "../../../../images/Enterprise/SapAriba/sapariba1.jpg";
import sapariba2 from "../../../../images/Enterprise/SapAriba/sapariba2.jpg";
import sapariba3 from "../../../../images/Enterprise/SapAriba/sapariba3.jpg";
import sapariba4 from "../../../../images/Enterprise/SapAriba/sapariba4.jpg";
import sapariba5 from "../../../../images/Enterprise/SapAriba/sapariba5.jpg";
import sapariba6 from "../../../../images/Enterprise/SapAriba/sapariba6.jpg";
import sapariba7 from "../../../../images/Enterprise/SapAriba/sapariba7.jpg";
import sapariba8 from "../../../../images/Enterprise/SapAriba/sapariba8.jpg";
import sapariba9 from "../../../../images/Enterprise/SapAriba/sapariba9.jpg";

import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    image: sapariba1,
    heading: "Procurement Automation",
    description:
      ": SAP Ariba helps businesses automate their procurement processes, ensuring compliance with policies and regulations",
    link: "",
  },
  {
    id: 2,
    image: sapariba2,
    heading: "Contract Management",
    description:
      "The platform streamlines the contract management process with features such as contract authoring, negotiation, execution, and monitoring.",
    link: "",
  },
  {
    id: 3,
    image: sapariba3,
    heading: "Supplier Management",
    description:
      "SAP Ariba helps businesses manage supplier relationships, including onboarding, qualification, and performance monitoring.",
    link: "",
  },
  {
    id: 4,
    image: sapariba4,
    heading: "Strategic Sourcing",
    description:
      "The platform helps businesses identify, evaluate, and select suppliers, negotiate contracts, and manage the entire sourcing process.",
    link: "",
  },
  {
    id: 5,
    image: sapariba5,
    heading: "Invoice Management",
    description:
      "SAP Ariba automates the invoice processing from receipt to payment while ensuring compliance with tax and regulatory requirements.",
    link: "",
  },
  {
    id: 6,
    image: sapariba6,
    heading: "Spend Analysis",
    description:
      "Businesses can use SAP Ariba to gain insights into their spending patterns, identify cost-saving opportunities, and optimize their procurement strategies.",
    link: "",
  },
  {
    id: 7,
    image: sapariba7,
    heading: "Mobile App",
    description:
      "SAP Ariba offers a mobile app that allows users to manage procurement tasks, collaborate with suppliers, and access real-time information from anywhere.",
  },
  {
    id: 8,
    image: sapariba8,
    heading: "Analytics and Reporting",
    description:
      "The platform provides advanced analytics and reporting capabilities, enabling businesses to track spending, monitor supplier performance, and make data-driven decisions.",
  },
  {
    id: 9,
    image: sapariba9,
    heading: "Integration with Other Systems",
    description:
      "SAP Ariba integrates with other enterprise systems, such as ERP and CRM, to provide a seamless procurement experience.",
  },
];

const SapAriba = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="saphana-first-container">
        <div className="sap-ariba-bg-container"></div>
        <div className="saphana-bg-sub-container">
          <h3 className="saphana-enterprise-system-text">ENTERPRISE SYSTEMS</h3>
          <h1 className="saphana-bg-heading">SAP Ariba</h1>
          <p className="saphana-bg-sub-heading">
            Accelerate Your Journey to Intelligent Procurement with Omnifinity
          </p>
        </div>
      </div>
      <div className="saphana-second-main-container">
        <div className="saphana-second-main-left-container">
          <Fade direction="up">
            <p className="saphana-second-main-left-descripton">
              SAP Ariba is a cloud-based procurement platform that connects
              buyers and suppliers to streamline B2B procurement processes. With
              this solution, businesses can collaborate with suppliers,
              negotiate contracts, manage purchasing approvals, and monitor
              spending. The platform is designed to be user-friendly, allowing
              businesses to quickly adopt the system and see the benefits of a
              streamlined procurement process.
            </p>
            <p className="saphana-second-main-left-descripton">
              Overall, SAP Ariba simplifies procurement processes, improves
              efficiency, and reduces costs. Its vast network of buyers and
              suppliers enables businesses to connect with potential partners
              and leverage the platform to drive business success.
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
          Key Features of SAP Ariba
        </h1>

        <ul className="saphana-systems-card-flex-container">
          {data.map((each) => {
            return (
              <Fade damping={0.1} direction="up" delay={90}>
                <li className="saphana-systems-card-container">
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
      <WhyUsBanner title={"Why Omnifinity for your SAP Ariba Implementation"} />
      <div className="saphana-last-container">
        <p className="saphana-last-description">
          With more than 400 specialists, Omnifinity Partners has a large and
          established force of SAP consultants working at more than 35 projects
          sites across the globe. With 1200+ projects under our belt, we have
          demonstrated quick wins and have real value to our clients. Our
          experienced and certified team of SAP consultants delivers unmatched
          services and smart and scalable business solutions built on SAP
          technologies, helping our clients to transform into truly dynamic,
          agile, and intelligent enterprises.
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
export default SapAriba;
