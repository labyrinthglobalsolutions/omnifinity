import React, { useState } from "react";

import "../../EnterpriseEdition/SapHana/SapHana.css";
import { Fade } from "react-awesome-reveal";

import managedcloud1 from "../../../../images/Managed/ManagedCloud/managedcloud1.jpg";
import managedcloud2 from "../../../../images/Managed/ManagedCloud/managedcloud2.jpg";
import managedcloud3 from "../../../../images/Managed/ManagedCloud/managedcloud3.jpg";
import managedcloud4 from "../../../../images/Managed/ManagedCloud/managedcloud4.jpg";
import managedcloud5 from "../../../../images/Managed/ManagedCloud/managedcloud5.jpg";

import mountain from "../../../../images/Managed/ManagedCloud/grayscale-mountains.png";

import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    image: managedcloud1,
    heading: "Cloud Migration Services",
    description:
      "Smoothly transition to the cloud with expertise and precision. Our comprehensive approach ensures minimal disruption and maximum benefits for your business, optimizing infrastructure, enhancing scalability, and unlocking growth opportunities.",
    link: "",
  },
  {
    id: 2,
    image: managedcloud2,
    heading: "Cloud Infrastructure Management",
    description:
      "Abacus offers comprehensive cloud infrastructure management services, optimizing performance, scalability, and cost-efficiency. Our expert team and advanced tools streamline provisioning, monitoring, security, and resource optimization, allowing you to focus on core business objectives.",
    link: "",
  },
  {
    id: 3,
    image: managedcloud3,
    heading: "Cloud Security Services",
    description:
      "Abacus provides comprehensive cloud security services to protect your digital assets. Our expert team employs advanced technologies and industry best practices to identify vulnerabilities, detect threats, and mitigate risks. ",
    link: "",
  },
  {
    id: 4,
    image: managedcloud4,
    heading: "Cloud Cost Optimization",
    description:
      "Abacus offers cloud cost optimization services to enhance efficiency and reduce expenses. Our experts analyze your infrastructure, identify cost-saving opportunities, and implement strategies for optimized resource allocation and pricing models. With comprehensive monitoring and reporting tools, we help you achieve significant savings without compromising performance. ",
    link: "",
  },
  {
    id: 5,
    image: managedcloud5,
    heading: "Cloud Monitoring and Support",
    description:
      "Abacus delivers reliable cloud monitoring and support services for seamless operation of your cloud environment. Our advanced monitoring tools detect anomalies, provide real-time visibility, and optimize resource allocation. With 24/7 dedicated support, we resolve technical issues and offer guidance for best practices.",
    link: "",
  },
];

const ManagedCloud = () => {
  const navigate = useNavigate();
  const [showCard, setActiveCard] = useState("Azure");
  return (
    <>
      <div className="saphana-first-container">
        <div className="saphana-bg-container"></div>
        <div className="saphana-bg-sub-container">
          <h3 className="saphana-enterprise-system-text">MANAGED SERVICES</h3>
          <h1 className="saphana-bg-heading">MANAGED CLOUD SERVICES</h1>
          <p className="saphana-bg-sub-heading">
            Elevate Enterprise Efficiency through Cloud Services.
          </p>
        </div>
      </div>
      <div className="saphana-second-main-container">
        <div className="saphana-second-main-left-container">
          <Fade direction="up">
            <p className="saphana-second-main-left-descripton">
              Welcome to our Managed Cloud Services page, where we offer a
              comprehensive suite of cloud management solutions to help
              businesses optimize their cloud environment and achieve their
              goals. In today's world, cloud computing has become the backbone
              of most businesses. Cloud services provide flexibility,
              scalability, and cost-effectiveness.
            </p>
            <p className="saphana-second-main-left-descripton">
              However, managing cloud services can be a daunting task for
              businesses. It requires a team of highly skilled professionals,
              extensive technical knowledge, and a significant investment in
              time and resources. This is where our Managed Cloud Services come
              in. Our team of experienced cloud experts can manage your cloud
              environment for you, allowing you to focus on your core business.
              Our services are designed to optimize your cloud environment,
              improve performance, and reduce costs.
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
          Key Features of Managed Cloud Services
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

      <div className="managed-cloud-two-cards-main-container">
        <div className="managed-cloud-two-cards-buttons-container">
          <button
            className={
              showCard === "Azure" ? "service-active" : "service-deactive"
            }
            onClick={() => setActiveCard("Azure")}
          >
            Managed Cloud Services With Azure
          </button>
          <button
            className={
              showCard === "AWS" ? "service-active" : "service-deactive"
            }
            onClick={() => setActiveCard("AWS")}
          >
            Managed Cloud Services With AWS
          </button>
        </div>
        <div className="reveal-card-container">
          {showCard === "Azure" ? (
            <div className="managed-cloud-two-cards-container">
              <div className="managed-cloud-two-cards-text-container">
                <h1 className="managed-cloud-heading">
                  Managed Cloud Services With Azure
                </h1>
                <p className="managed-cloud-description">
                  Abacus offers streamlined cloud service management through
                  Azure, empowering businesses with enhanced efficiency and
                  productivity. Leveraging the power of Microsoft Azure, our
                  expert team ensures seamless deployment, monitoring, and
                  optimization of your cloud resources. From infrastructure
                  management to application development and data analytics, we
                  provide comprehensive Azure-based solutions tailored to your
                  specific needs. Trust Abacus to navigate your cloud journey
                  with Azure, delivering reliable and scalable services that
                  drive your business forward.
                </p>
              </div>
              <img
                className="managed-card-image"
                src={mountain}
                alt="normal-img"
              />
            </div>
          ) : (
            <div className="managed-cloud-two-cards-container">
              <div className="managed-cloud-two-cards-text-container">
                <h1 className="managed-cloud-heading">
                  Managed Cloud Services With AWS
                </h1>
                <p className="managed-cloud-description">
                  Abacus specializes in providing top-tier managed cloud
                  services on the AWS platform. Leveraging the extensive
                  capabilities of Amazon Web Services (AWS), our expert team
                  delivers end-to-end management and optimization of your cloud
                  infrastructure. From architecture design and migration to
                  ongoing monitoring, security, and cost optimization, we ensure
                  seamless operation and peak performance of your AWS
                  environment. With Abacus, you can confidently harness the full
                  potential of AWS, focusing on your core business while we
                  handle the complexities of cloud management. Trust us to
                  elevate your AWS experience and drive your business to new
                  heights.
                </p>
              </div>
              <img
                className="managed-card-image"
                src={mountain}
                alt="normal-img"
              />
            </div>
          )}
        </div>
      </div>

      <div className="saphana-last-container">
        <h1 className="managed-last-heading">
          Achieve Business Excellence with Abacus: Your Path to Success
        </h1>
        <p className="saphana-last-description">
          Choose Abacus for exceptional managed cloud services that propel your
          business forward. With unmatched expertise, our seasoned professionals
          possess deep knowledge in managing complex cloud environments. We
          provide tailored solutions designed to meet your specific business
          needs, ensuring seamless integration, maximum efficiency, and
          accelerated growth. Our proactive monitoring and support systems offer
          constant surveillance, quick issue detection and resolution, and 24/7
          availability. We go beyond managing your cloud infrastructure by
          implementing cost optimization strategies to reduce expenses while
          maintaining optimal performance. Additionally, our unwavering
          commitment to security includes robust measures to safeguard your data
          and protect against cyber threats. Trust Abacus as your trusted
          partner in maximizing the potential of the cloud.
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
export default ManagedCloud;
