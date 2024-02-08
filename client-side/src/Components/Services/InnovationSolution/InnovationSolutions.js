import { Link } from "react-router-dom";

import "./InnovationSolutions.css";
import { Fade } from "react-awesome-reveal";
import innovation1 from "../../../images/Innovation/cloud.png";
import innovation2 from "../../../images/Innovation/api.png";
import innovation3 from "../../../images/Innovation/application.png";
import innovation4 from "../../../images/Innovation/ai.png";
import innovation5 from "../../../images/Innovation/aiml.png";
import innovation6 from "../../../images/Innovation/identity.png";
import innovation7 from "../../../images/Innovation/software.png";
import innovation8 from "../../../images/Innovation/digital.png";
import innovation9 from "../../../images/Innovation/agile.png";

const InnovationSolutions = () => {
  const data = [
    {
      id: 1,
      image: innovation1,
      heading: "Cloud Application Modernization",
      description:
        "Migrate your legacy applications to the cloud securely and efficiently on a cloud platform that meets your business requirements.",
      link: "",
    },
    {
      id: 2,
      image: innovation2,
      heading: "API Management Platform",
      description:
        "Our API management platform allows businesses to create and manage their APIs, monitor API usage and enforce security policies.",
      link: "",
    },
    {
      id: 3,
      image: innovation3,
      heading: "Application Development",
      description:
        "With an extensive range of programming developers we offer application development services for web, mobile, and desktop environments.",
      link: "",
    },
    {
      id: 4,
      image: innovation4,
      heading: "AI & Data",
      description:
        "Our AI and data services help businesses to leverage the power of artificial intelligence and data analytics.",
      link: "",
    },
    {
      id: 5,
      image: innovation5,
      heading: "AI & ML",
      description:
        "Our AI and ML services help businesses automate their operations and improve their decision-making processes.",
      link: "",
    },
    {
      id: 6,
      image: innovation6,
      heading: "Digitize Identity",
      description:
        "Our digital identity services offer identity and access management solutions that help businesses control access to their systems and data.",
      link: "",
    },
    {
      id: 7,
      image: innovation7,
      heading: "Software Engineering",
      description:
        "Build high-quality software products using modern software engineering practices to ensure that your products are reliable, scalable and maintainable.",
      link: "",
    },
    {
      id: 8,
      image: innovation8,
      heading: "Digital Financial Services",
      description:
        "Manage your financial operations more efficiently through digital payments, online banking and financial reporting, providing secure and reliable financial services that meet the needs of today's businesses.",
      link: "",
    },
    {
      id: 9,
      image: innovation9,
      heading: "Agile Process Management",
      description:
        "Let us help you adopt agile methodologies to improve your management processes through agile training and agile project management software.",
      link: "",
    },
  ];

  return (
    <div className="innovation-solutions-main-container">
      <div className="innovation-solutions-first-container">
        <div className="innovation-solutions-bg-container"> </div>
        <div className="innovation-solutions-bg-sub-container">
          <h1 className="innovation-solutions-bg-heading">
            Innovation Solutions
          </h1>
          <p className="innovation-solutions-bg-sub-heading">
            Leading Towards Metamorphosis of Your Businesses
          </p>
        </div>
      </div>
      <div className="innovation-solutions-second-container">
        <p className="innovation-solutions-main-description">
          Innovative solutions are the backbone of businesses striving to thrive
          in today's digital landscape. By harnessing the power of new
          technologies and processes, businesses can elevate their efficiency,
          gain a competitive advantage, improve customer experience, make
          informed decisions, and become more agile and adaptable. These
          solutions effectively streamline processes, boost productivity, and
          automate manual tasks. Moreover, they enable deeper insights and
          data-driven decision-making capabilities, enabling businesses to
          swiftly adapt to market changes and optimize their strategies. At our
          company, we provide innovative solutions to empower businesses to
          achieve their objectives and succeed in their respective industries.
        </p>

        <div className="innovation-solutions-card-main-container">
          <h1 className="innovation-solutions-card-main-heading">
            Choose the right Innovation Solution for your Business
          </h1>

          <ul className="innovation-solutions-card-flex-container">
            {data.map((each) => {
              return (
                <Fade damping={0.1} direction="up" delay={100}>
                  <li className="innovation-solutions-card-container">
                    <img
                      src={each.image}
                      alt=""
                      className="innovation-solutions-card-image"
                    />
                    <h4 className="innovation-solutions-card-heading">
                      {each.heading}
                    </h4>
                    <p className="innovation-solutions-card-description">
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
    </div>
  );
};
export default InnovationSolutions;
