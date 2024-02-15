import React, { useState } from "react";

import "../../EnterpriseEdition/SapHana/SapHana.css";
import { Fade } from "react-awesome-reveal";

import devops1 from "../../../../images/Managed/Devops/devops1.jpg";
import devops2 from "../../../../images/Managed/Devops/devops2.jpg";
import devops3 from "../../../../images/Managed/Devops/devops3.jpg";
import devops4 from "../../../../images/Managed/Devops/devops4.jpg";
import devops5 from "../../../../images/Managed/Devops/devops5.jpg";

import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    image: devops1,
    heading: "Top talent",
    description:
      "Industry experts and best-of-class assessment tools are utilized to vet candidates and ensure top-quality talent.",
    link: "",
  },
  {
    id: 2,
    image: devops2,
    heading: "Rapid availability",
    description:
      "Candidates can be onboarded within a short time frame, typically within two weeks of signing on.",
    link: "",
  },
  {
    id: 3,
    image: devops3,
    heading: "Scalable",
    description:
      "Staff augmentation services are designed to scale rapidly and flexibly to meet clients' changing needs, without any upper caps.",
    link: "",
  },
  {
    id: 4,
    image: devops4,
    heading: "Professional workspace",
    description:
      "A secure Desktop-as-a-Service (DaaS) environment is provided, which includes access to Microsoft O365 and cloud storage to facilitate collaboration.",
    link: "",
  },
  {
    id: 5,
    image: devops5,
    heading: "Flexible Contracts",
    description:
      "Clients can choose from term lengths ranging from 3 to 11 months, with the option to cancel within the first month.",
    link: "",
  },
  {
    id: 6,
    image: devops5,
    heading: "Scalable",
    description:
      " Timesheet and attendance processes are implemented to enable periodic reporting for key actionable insights.",
  },
];

const Staff = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(1);

  const buttonsData = [
    {
      id: 1,
      text: "Step 1: Share Your Requirements",
      content: "Fill out our lead form with your specific requirements.",
    },
    {
      id: 2,
      text: "Step 2: Candidate Analysis",
      content:
        "Our team will analyze your requirements and identify suitable candidates with the necessary skill-set.",
    },
    {
      id: 3,
      text: "Step 3: Meet the Candidate",
      content:
        "Have a virtual meeting with the proposed candidate to discuss your project needs.",
    },
    {
      id: 4,
      text: "Step 4: Sign Up",
      content: "Confirm your requirements, term length, and engage with us.",
    },
    {
      id: 5,
      text: "Step 5: On boarding",
      content: "We will on-board your team and you are ready to go.",
    },
  ];

  const showContent = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <>
      <div className="saphana-first-container">
        <div className="saphana-bg-container"></div>
        <div className="saphana-bg-sub-container">
          <h3 className="saphana-enterprise-system-text">MANAGED SERVICES</h3>
          <h1 className="saphana-bg-heading">PROFACUS-STAFF AUGMENTATION</h1>
        </div>
      </div>
      <div className="saphana-second-main-container">
        <div className="saphana-second-main-left-container">
          <Fade direction="up">
            <p className="saphana-second-main-left-descripton">
              Supercharge your digital transformation with remote talent. Abacus
              Cambridge Partners' staff augmentation service, "Profacus," is the
              ultimate solution for engaging top-tier remote technology talent.
              Our expert team assists enterprises in sourcing and assessing the
              best tech talent, ensuring rapid onboarding, fully compliant
              contracting, and providing necessary infrastructure and management
              tools, periodic productivity reporting, and meaningful cost
              reduction. Trust Profacus to accelerate your digital
              transformation and propel your business to new heights.
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
          Partner with us to build offshore technology teams and drive your
          digital growth.
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
                </li>
              </Fade>
            );
          })}
        </ul>
      </div>

      <div className="saphana-last-container">
        <div className="staff-steps-main-continer">
          <h1 className="staff-steps-heading">
            Get Started with Profacus in 5 Easy Steps:
          </h1>
          <div className="staff-steps-container">
            <div>
              {buttonsData.map((button) => (
                <button
                  key={button.id}
                  onClick={() => showContent(button.id)}
                  className={
                    button.id === selectedButton
                      ? "staff-active"
                      : "staff-inactive"
                  }
                >
                  {button.text}
                </button>
              ))}

              {buttonsData.map((button) => (
                <div
                  key={`content-${button.id}`}
                  style={{
                    display: selectedButton === button.id ? "block" : "none",
                  }}
                >
                  <p className="staff-steps-text-content">{button.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
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
export default Staff;
