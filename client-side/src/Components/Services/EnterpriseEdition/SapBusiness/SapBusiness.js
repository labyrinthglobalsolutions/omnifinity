import React from "react";

import "../SapHana/SapHana.css";
import { Fade } from "react-awesome-reveal";
import WhyUsBanner from "../../WhyUsBanner/WhyusBanner";
import sapbusiness1 from "../../../../images/Enterprise/SapBusiness/sapbusiness1.webp";
import sapbusiness2 from "../../../../images/Enterprise/SapBusiness/sapbusiness2.webp";
import sapbusiness3 from "../../../../images/Enterprise/SapBusiness/sapbusiness3.webp";
import sapbusiness4 from "../../../../images/Enterprise/SapBusiness/sapbusiness4.webp";
import sapbusiness5 from "../../../../images/Enterprise/SapBusiness/sapbusiness5.webp";
import sapbusiness6 from "../../../../images/Enterprise/SapBusiness/sapbusiness6.webp";
import sapbusiness7 from "../../../../images/Enterprise/SapBusiness/sapbusiness7.webp";
import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    image: sapbusiness1,
    heading: "Financial Management",
    description:
      "SAP Business ByDesign offers a range of financial management tools to manage financial transactions, accounts payable and receivable, general ledger, budgeting, and more.",
    link: "",
  },
  {
    id: 2,
    image: sapbusiness2,
    heading: "Customer Relationship Management (CRM)",
    description:
      "The CRM module of SAP Business ByDesign helps businesses manage customer data, sales, and marketing activities, including campaigns, lead management, and customer analytics.",
    link: "",
  },
  {
    id: 3,
    image: sapbusiness3,
    heading: "Supply Chain Management",
    description:
      "The supply chain management module of SAP Business ByDesign includes tools for inventory management, purchasing, production, and logistics, enabling businesses to optimize their supply chain operations.",
    link: "",
  },
  {
    id: 4,
    image: sapbusiness4,
    heading: "Project Management",
    description:
      "SAP Business ByDesign's project management module helps businesses manage projects, including task allocation, budget tracking, and project planning.",
    link: "",
  },
  {
    id: 5,
    image: sapbusiness5,
    heading: "Human Resources Management",
    description:
      "The HR management module of SAP Business ByDesign includes tools for managing employee data, payroll, benefits administration, performance management, and more.",
    link: "",
  },
  {
    id: 6,
    image: sapbusiness6,
    heading: "Analytics and Reporting",
    description:
      "SAP Business ByDesign provides advanced analytics and reporting tools that enable businesses to analyze data and make informed decisions. These tools can help businesses identify opportunities, trends, and issues, and improve their operations accordingly.",
    link: "",
  },
  {
    id: 7,
    image: sapbusiness7,
    heading: "Mobile Access",
    description:
      "SAP Business ByDesign supports mobile access, enabling businesses to access the software and manage their operations from anywhere, at any time.",
    link: "",
  },
];

const SapBusinessByDesign = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="saphana-first-container">
        <div className="sap-business-by-design-bg-container"></div>
        <div className="saphana-bg-sub-container">
          <h3 className="saphana-enterprise-system-text">ENTERPRISE SYSTEMS</h3>
          <h1 className="saphana-bg-heading">SAP Business ByDesign</h1>
          <p className="saphana-bg-sub-heading">
            Accelerate profitable growth with an on-demand ERP
          </p>
        </div>
      </div>
      <div className="saphana-second-main-container">
        <div className="saphana-second-main-left-container">
          <Fade direction="up">
            <p className="saphana-second-main-left-descripton">
              SAP Business ByDesign is an ERP (Enterprise Resource Planning)
              software for small and medium-sized businesses. This cloud-based
              software streamlines operation and manages key business processes
              efficiently. It provides a comprehensive set of tools tailored to
              support various industries, allowing businesses to optimize
              workflows and stay competitive.
            </p>
            <p className="saphana-second-main-left-descripton">
              TThis software solution is ideal for businesses aiming to
              streamline operations and improve efficiency. With its
              comprehensive tools, flexible features, scalability, and
              user-friendly interface, SAP Business ByDesign can help businesses
              achieve their goals and remain competitive in today's fast-paced
              business environment.
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
          Key Features of SAP Business ByDesign
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
      <WhyUsBanner
        title={"Why Omnifinity for your SAP Business ByDesign Implmentation"}
      />
      <div className="saphana-last-container">
        <p className="saphana-last-description">
          Omnifinity Partners has a proven track record of successful SAP
          Business ByDesign projects with a skilled team of consultants. We can
          quickly deploy this ERP solution while also considering your
          business's future requirements. Contact us now for a demo of SAP
          Business ByDesign.
        </p>

        <button
          className="omnifinity-button"
          onClick={() => navigate("/contactUS")}
        >
          Contact Us
        </button>
      </div>
    </>
  );
};
export default SapBusinessByDesign;
