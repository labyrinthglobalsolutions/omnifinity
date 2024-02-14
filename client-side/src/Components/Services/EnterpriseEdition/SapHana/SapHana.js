import React from "react";

import "./SapHana.css";
import { Fade } from "react-awesome-reveal";
import WhyUsBanner from "../../WhyUsBanner/WhyusBanner";
import sapnahana1 from "../../../../images/Enterprise/SapHana/saphana1.png";
import sapnahana2 from "../../../../images/Enterprise/SapHana/saphana2.png";
import sapnahana3 from "../../../../images/Enterprise/SapHana/saphana3.png";
import sapnahana4 from "../../../../images/Enterprise/SapHana/saphana4.png";
import sapnahana5 from "../../../../images/Enterprise/SapHana/saphana5.png";
import sapnahana6 from "../../../../images/Enterprise/SapHana/saphana6.png";
import sapnahana7 from "../../../../images/Enterprise/SapHana/saphana7.png";
import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    image: sapnahana1,
    heading: "Streamlined Data Model",
    description:
      "Unlike traditional ERP systems, SAP S/4HANA utilizes a simplified data model that eliminates redundancies and reduces data footprint. This streamlined approach results in faster processing and improved performance.",
    link: "",
  },
  {
    id: 2,
    image: sapnahana2,
    heading: "In-Memory Computing",
    description:
      "SAP S/4HANA leverages in-memory computing technology that enables the processing of large amounts of data in real-time. This allows users to access insights and make informed decisions quickly and accurately. ",
    link: "",
  },
  {
    id: 3,
    image: sapnahana3,
    heading: "Real-time Analytics",
    description:
      "SAP S/4HANA comes with built-in analytics capabilities that enable users to analyze data in real-time. This includes predictive analytics, which helps organizations forecast future trends and make data-driven decisions.",
    link: "",
  },
  {
    id: 4,
    image: sapnahana4,
    heading: "Mobile-first",
    description:
      "SAP S/4HANA has been designed with a mobile-first approach, making it accessible from any device at any time, from anywhere.",
    link: "",
  },
  {
    id: 5,
    image: sapnahana5,
    heading: "Enhanced User Experience",
    description:
      "The system provides a modern, intuitive user interface that is customizable and easy to use, leading to better user adoption and increased productivity.",
    link: "",
  },
  {
    id: 6,
    image: sapnahana6,
    heading: "Cloud Deployment",
    description:
      "SAP S/4HANA can be deployed on-premise, in the cloud, or in a hybrid environment, giving organizations the flexibility to choose the deployment model that best suits their needs.",
    link: "",
  },
  {
    id: 7,
    image: sapnahana7,
    heading: "Machine Learning",
    description:
      "SAP S/4HANA leverages machine learning to automate repetitive tasks, identify patterns in data, and provide intelligent recommendations. This enhances efficiency, reduces errors, and increases productivity.",
    link: "",
  },
];

const SapHana = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="saphana-first-container">
        <div className="saphana-bg-container"></div>
        <div className="saphana-bg-sub-container">
          <h3 className="saphana-enterprise-system-text">ENTERPRISE SYSTEMS</h3>
          <h1 className="saphana-bg-heading">SAP S/4HANA</h1>
          <p className="saphana-bg-sub-heading">The ultimate ERP</p>
        </div>
      </div>
      <div className="saphana-second-main-container">
        <div className="saphana-second-main-left-container">
          <Fade direction="up">
            <p className="saphana-second-main-left-descripton">
              SAP S/4HANA is an advanced ERP (Enterprise Resource Planning)
              system designed to help businesses operate smarter, faster, and
              simpler. This modern platform is powered by state-of-the-art
              in-memory computing technology and offers a range of advanced
              features to improve the user experience, simplify business
              processes, and provide real-time insights.
            </p>
            <p className="saphana-second-main-left-descripton">
              This next-generation ERP system delivers real-time insights, a
              streamlined user experience, and powerful analytics capabilities.
              Its in-memory computing technology, built-in analytics, and
              machine learning capabilities make it a powerful tool for
              businesses looking to gain a competitive edge in today's
              fast-paced business environment.
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
          Key Features of SAP S/4HANA
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
        title={"Why Omnifinity for your SAP S/4HANA Implementation"}
      />
      <div className="saphana-last-container">
        <p className="saphana-last-description">
          Omnifinity Partners is not a new name to SAP suite of solutions. Our
          skilled team can map out a strategy on SAP S/4HANA that not only
          focuses on your current goals but also takes into account the future
          requirements of your business. We have also successfully executed
          projects for on-premise, private cloud and hybrid environments.
          Contact us to get a demo of SAP S/4HANA.
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
export default SapHana;
