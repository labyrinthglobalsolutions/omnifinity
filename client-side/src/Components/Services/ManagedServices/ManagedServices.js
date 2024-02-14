import { Link } from "react-router-dom";

import "./ManagedServices.css";
import { Fade } from "react-awesome-reveal";
import managed1 from "../../../images/Managed/managed1.jpg";
import managed2 from "../../../images/Managed/managed2.jpg";
import managed3 from "../../../images/Managed/managed3.jpg";
import managed4 from "../../../images/Managed/managed4.jpg";

const ManagedServices = () => {
  const data = [
    {
      id: 1,
      image: managed1,
      heading: "Staff Augmentation Services",
      description:
        "Tap into the talent of skilled and budget-friendly professionals worldwide with Omnifinity. We provide access to personalized and highly qualified technology resources to help you optimize costs and deliver projects on time. Our technical experts possess extensive experience working with leading global brands, equipping them with exceptional technology and business acumen.",
      link: "",
    },
    {
      id: 2,
      image: managed2,
      heading: "CX Outsourcing Services",
      description:
        "We provide reliable and cost-effective solution for businesses looking to enhance their customer experience. We offer tailored solutions that cater to your unique business needs and align with your brand values. With our CX experts, you can rest assured that your customers will receive exceptional service, leading to increased customer satisfaction, retention, and loyalty.",
      link: "",
    },
    {
      id: 3,
      image: managed3,
      heading: "DevOps Services",
      description:
        "As a leading provider of DevOps solutions, we are dedicated to helping organizations achieve their software development goals with faster and more efficient processes. Our DevOps services are designed to streamline your software development lifecycle, reduce development time, and improve collaboration between development and operations teams.",
      link: "",
    },
    {
      id: 4,
      image: managed4,
      heading: "Managed Cloud Services",
      description:
        "In today's world where cloud computing has become the backbone of most businesses, managing it can be a daunting task as it requires a team of highly skilled professionals and extensive technical knowledge. For this challenge Omnifinity offers a comprehensive suite of cloud management solutions to help businesses optimize their cloud environment and achieve their goals.",
      link: "",
    },
  ];

  return (
    <div className="managed-services-main-container">
      <div className="managed-services-first-container">
        <div className="managed-services-bg-container"> </div>
        <div className="managed-services-bg-sub-container">
          <h1 className="managed-services-bg-heading">
            Accelerate Your Digital Agenda with Omnifinity Managed Services
          </h1>
        </div>
      </div>
      <div className="managed-services-second-container">
        <p className="managed-services-main-description">
          The Information Technology landscape today is more complex than ever
          before. There is constant pressure on businesses to find the right
          balance between business growth and keep day-to-day operations as
          smooth as possible. Forward-looking organisations are making enormous
          investments to manage, operate, and continually optimise technology
          infrastructure to support business agility and flexibility, enhance
          customer experiences, and capture the true workforce potential.
        </p>
        <p className="managed-services-main-description">
          This is where Omnifinity helps organisations to efficiently design,
          build and run their technology landscape to accelerate business
          transformation — today and beyond. We offer modern approaches for
          configuring and optimising digital-first infrastructure interwoven
          into every part of your enterprise. Our Managed Services adhere to
          strong security protocols, ensuring the highest level of compliance.
        </p>
        <div className="managed-services-card-main-container">
          <h1 className="managed-services-card-main-heading">
            Drive Tangible Business Outcomes with Omnifinity Managed Services
          </h1>

          <ul className="managed-services-card-flex-container">
            {data.map((each) => {
              return (
                <Fade damping={0.1} direction="up" delay={90}>
                  <li className="managed-services-card-container">
                    <img
                      src={each.image}
                      alt=""
                      className="managed-services-card-image"
                    />
                    <h4 className="managed-services-card-heading">
                      {each.heading}
                    </h4>
                    <p className="managed-services-card-description">
                      {each.description}
                    </p>
                    <p>learn more</p>
                  </li>
                </Fade>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="managed-services-third-container">
        <div className="managed-services-text-container">
          <h3 className="managed-services-third-heading">
            Why Omnifinity for your Managed Services
          </h3>
          <div className="managed-services-text-fields-container">
            <p className="managed-services-third-text">
              Technology-agnostic, No vendor lock-in
            </p>
            <p className="managed-services-third-text">
              <span className="managed-services-span">4000 + </span>
              <br />
              Customer Focused Workforce
            </p>
            <p className="managed-services-third-text">
              Certified and dedicated technology resources
            </p>
            <p className="managed-services-third-text">
              Automated delivery playbooks and templates for seamless
              integration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManagedServices;
