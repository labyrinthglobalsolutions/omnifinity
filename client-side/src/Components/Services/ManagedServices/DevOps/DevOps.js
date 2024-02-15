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
    heading: "DevOps Strategy and Planning",
    description:
      "We work closely with our clients to develop a customized DevOps strategy that aligns with their business objectives. Our team can help you identify the right tools, technologies, and processes to optimize your software development and delivery workflows.",
    link: "",
  },
  {
    id: 2,
    image: devops2,
    heading: "Continuous Integration and Delivery",
    description:
      "Our DevOps experts can help you implement continuous integration and delivery (CI/CD) pipelines to automate your software testing, build, and deployment processes. This ensures faster feedback loops, higher-quality software, and quicker time-to-market.",
    link: "",
  },
  {
    id: 3,
    image: devops3,
    heading: "Infrastructure Automation",
    description:
      "We help our clients automate their infrastructure provisioning and management processes using tools like Ansible, Terraform, and Kubernetes. This ensures consistent and reliable infrastructure deployments across different environments, from development to production.",
    link: "",
  },
  {
    id: 4,
    image: devops4,
    heading: "Cloud Migration and Optimization",
    description:
      "We help organizations migrate their applications and workloads to the cloud, leveraging cloud-native services to optimize their infrastructure costs and scalability. Our team can help you choose the right cloud provider and architecture to meet your specific needs.",
    link: "",
  },
  {
    id: 5,
    image: devops5,
    heading: "DevOps Monitoring and Support",
    description:
      "We provide ongoing monitoring and support services to ensure the reliability and availability of your applications and infrastructure. Our team can help you implement effective monitoring and alerting strategies to identify and resolve issues quickly.",
    link: "",
  },
];

const DevOps = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="saphana-first-container">
        <div className="saphana-bg-container"></div>
        <div className="saphana-bg-sub-container">
          <h3 className="saphana-enterprise-system-text">MANAGED SERVICES</h3>
          <h1 className="saphana-bg-heading">DevOps</h1>
          <p className="saphana-bg-sub-heading">
            Accelerate Your Development with DevOps Mastery
          </p>
        </div>
      </div>
      <div className="saphana-second-main-container">
        <div className="saphana-second-main-left-container">
          <Fade direction="up">
            <p className="saphana-second-main-left-descripton">
              Omnifinity is a leading provider of DevOps services, helping
              organizations streamline their software development and delivery
              processes. DevOps is an approach to software development that
              emphasizes collaboration, automation, and continuous improvement.
              By adopting DevOps practices, companies can accelerate their
              software delivery and improve the quality of their software
              products.
            </p>
            <p className="saphana-second-main-left-descripton">
              At Omnifinity , we offer a range of DevOps services tailored to
              the needs of our clients. Our team of experts can help you
              implement DevOps practices in your organization, from strategy and
              planning to implementation and support.
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
          Key Features of DevOps
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

      <div className="saphana-last-container">
        <h1 className="managed-last-heading">
          Why Choose Omnifinity: Empowering DevOps Excellence and Transformation
        </h1>
        <p className="saphana-last-description">
          Omnifinity is your ultimate choice for DevOps transformation and
          success. With our extensive expertise and proven track record, we
          empower businesses to unlock the full potential of DevOps. Our
          comprehensive approach combines agile methodologies, collaborative
          culture, and cutting-edge tools to streamline development, deployment,
          and operations. From continuous integration and delivery to automated
          testing and infrastructure as code, we enable faster time to market,
          improved quality, and enhanced collaboration across teams. With
          Omnifinity, embrace a DevOps mindset, accelerate innovation, and
          achieve sustainable growth in the digital era.
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
export default DevOps;
