import React, { useEffect, useState } from "react";
import "./WhyusBanner.css";

const WhyUsBanner = ({ title }) => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [sapProjects, setSapProjects] = useState(0);
  const [consultants, setConsultants] = useState(0);

  useEffect(() => {
    const targetExperience = 35;
    const targetProjects = 1200;
    const targetConsultants = 400;

    let currentExperience = 0;
    let currentProjects = 0;
    let currentConsultants = 0;

    const incrementExperience = Math.ceil(targetExperience / 10);
    const incrementProjects = Math.ceil(targetProjects / 10);
    const incrementConsultants = Math.ceil(targetConsultants / 10);

    const interval = setInterval(() => {
      currentExperience += incrementExperience;
      if (currentExperience >= targetExperience) {
        currentExperience = targetExperience;
      }
      setYearsOfExperience(currentExperience);

      currentProjects += incrementProjects;
      if (currentProjects >= targetProjects) {
        currentProjects = targetProjects;
      }
      setSapProjects(currentProjects);

      currentConsultants += incrementConsultants;
      if (currentConsultants >= targetConsultants) {
        currentConsultants = targetConsultants;
      }
      setConsultants(currentConsultants);

      if (
        currentExperience === targetExperience &&
        currentProjects === targetProjects &&
        currentConsultants === targetConsultants
      ) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="why-us-banner-main-container">
      <h1 className="managed-services-third-heading">{title}</h1>
      <div className="why-us-banner-flex-container">
        <div className="why-us-banner-stats-container">
          <h1 className="why-us-banner-stats-text">{yearsOfExperience} +</h1>
          <p className="why-us-banner-stats-sub-text">Years of Experience</p>
        </div>
        <div className="why-us-banner-stats-container">
          <h1 className="why-us-banner-stats-text">{sapProjects} +</h1>
          <p className="why-us-banner-stats-sub-text">SAP Projects</p>
        </div>
        <div className="why-us-banner-stats-container">
          <h1 className="why-us-banner-stats-text">{consultants} +</h1>
          <p className="why-us-banner-stats-sub-text">SAP Consultants</p>
        </div>
        <div className="why-us-banner-stats-container">
          <h1 className="why-us-banner-stats-sub-text">
            Winning SAP Partner Awards for 6 Years in a row
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WhyUsBanner;
