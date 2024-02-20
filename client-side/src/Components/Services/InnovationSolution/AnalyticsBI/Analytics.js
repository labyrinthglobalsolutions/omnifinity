import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./Analytics.css";
import Image1 from "../../../../images/Innovation/Analytics/image1.webp";
import Image2 from "../../../../images/Innovation/Analytics/image2.webp";
import Image3 from "../../../../images/Innovation/Analytics/image3.webp";
import Image4 from "../../../../images/Innovation/Analytics/Image4.webp";

export default function Analytics() {
  const [activeTab, setTab] = useState("Consult");
  const tabs = [
    {
      tab: "Consult",
      title1: "Data Migration Advisory",
      title2: "Data Modernization Advisory",
      title3: "Customized Smart Analytics & BI Strategies",
      description1:
        "Root cause analysis of gaps within current infrastructural framework. Advice on incorporation of tools to optimize data management structure.",
      description2:
        "Evaluate options to enhance current data infrastructure. Explore streamlining strategies. Monitor & secure data against theft & establish recovery mechanisms.",
      description3:
        "Develop pipelines to consolidate data in real time from source to target repositories. Determine most effective Data Visualization Tools to extract insights.",
      imageUrl:
        "https://abacuscambridge.com/hs-fs/hubfs/COnsult.jpg?width=900&height=671&name=COnsult.jpg",
    },
    {
      tab: "Implement",
      title1: "Database Migration",
      title2: "Data Warehouse",
      title3: "BI Dashboards & Visualizations",
      description1:
        "Convert your vision into an Actionable Data Platform with our extensive technical experience in developing solutions on GCP",
      description2:
        "Maximize data processing by migrating or constructing data repositories on top of scalable, fully managed, data warehouses e.g., BigQuery or BigQuery Omni (multi-cloud).",
      description3:
        "Incorporate interactive dashboards & reports to assess KPIs from your data. Provide specialized help to maximize usage of BI & Visualization tool, Looker.",
      imageUrl:
        "https://abacuscambridge.com/hs-fs/hubfs/Implement.jpg?width=900&height=671&name=Implement.jpg",
    },
    {
      tab: "Manage",
      title1: "Data Environment Assessments",
      title2: "24/7 Support Services",
      title3: "Governance & Reporting",
      description1:
        "Assess & manage security architecture, database server-level configurations, and encryption-related, RPO/RTO, availability, redundancy & other diagnostic data requirements.",
      description2:
        "Expert Data Specialists available to provide customized input based on your app use case. Proactive maintenance, repair of issues, consulting, or hands-on support available.",
      description3:
        "Insight into your data management environment via regular analytics and dashboard visualization. Regular review sessions to facilitate improvements and address gaps.",
      imageUrl:
        "https://abacuscambridge.com/hs-fs/hubfs/Manage.jpg?width=900&height=671&name=Manage.jpg",
    },
    {
      tab: "Improve",
      title1: "Smart Analytics",
      title2: "Machine Learning Enablement",
      title3: "Architecture & Cost",
      description1:
        "Assistance in ingesting, processing, and analyzing real-time event streams, enabling impactful decision-making based on high-value, time-sensitive insights.",
      description2:
        "Our ML Specialists create recommendation engines for you, letting your data drive your strategy. Provide custom-built models for analyzing time-to-market, churn rates, consumer payment patterns etc.",
      description3:
        "Optimizations Ensure optimization of your architecture & cloud data spending. Create a billing roadmap based on business growth & budget requirements.",
      imageUrl:
        "https://abacuscambridge.com/hs-fs/hubfs/Improve.jpg?width=900&height=671&name=Improve.jpg",
    },
  ];

  const Filtered = tabs.filter((each) => each.tab === activeTab);
  const cards = [
    {
      imageUrl: Image1,
      title: "BigQuery",
      description:
        "A serverless data warehouse fully managed by Abacus Cambridge Partners that enables downtime-free upgrades and maintenance, and effortless scaling. Analyze petabytes of data at high velocity and with zero operational overhead. Enhance organizational agility and provide time-sensitive, high-value insights in minimal time with maximal security",
    },
    {
      imageUrl: Image2,
      title: "Looker",
      description:
        "Empower your business with a versatile business intelligence solution that simplifies data description and metric definition, enabling all teams to explore and visualize data insights.",
    },
  ];
  return (
    <div className="AnalyticsTotalContainer">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="AnalyticsImageContainer"></div>

              <div className="content-container">
                <Fade direction="up">
                  <h6 className="pl-5 ml-5 mb-3" style={{ fontSize: "30px" }}>
                    Innovation Solutions
                  </h6>
                  <h1
                    className="pl-5  ml-5  mb-3"
                    style={{ fontSize: "65px", fontWeight: "bold" }}
                  >
                    Advanced Analytics & <br /> Business Intelligence
                  </h1>
                  <p className="pl-5 ml-5 mb-3" style={{ fontSize: "25px" }}>
                    Actionable Insights, Transformative Results
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p style={{ fontSize: "18px" }} className="p-4 pl-3 mt-3">
              In today's data-driven world, businesses cannot afford to ignore
              the power of Advanced Analytics and Business Intelligence (BI).
              These tools can provide a competitive edge by unlocking valuable
              insights from data, improving decision-making, increasing
              operational efficiency, and identifying new growth opportunities.
              By leveraging both BI and Advanced Analytics, businesses can make
              data-driven decisions and stay ahead of the curve.
            </p>
          </div>
          <div className="col-12 col-md-6 p-5">
            <Fade direction="down">
              <div className="AnalyticsCardsContainer shadow">
                <h1
                  className="p-3 text-center  mb-0 AnalyticsHeading"
                  style={{
                    marginBottom: "0px",
                    color: "#ffffff",
                    fontWeight: "bold",
                    background: "#4353ff",
                  }}
                >
                  Enquire Now
                </h1>
                <form className="form-control p-3">
                  <p classname="mb-2 mt-2 text-center p-2">
                    Please fill in your information and we'll get in touch with
                    you.
                  </p>
                  <label htmlFor="firstName">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="firstName"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="lastName">
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="lastName"
                    className="w-100 mt-3  p-2 mb-3"
                  />
                  <label htmlFor="email">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="email"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="phoneNumber">
                    PhoneNumber <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="phoneNumber"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="CompanyName">
                    Company Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="CompanyName"
                    className="w-100 mt-3 p-2 mb-3"
                  />

                  <label htmlFor="jobTitle">
                    Job Title <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="jobTitle"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="Country/Region">
                    Country/Region <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="Country/Region"
                    className="w-100 mt-3 p-2 mb-3"
                  />
                  <label htmlFor="message">
                    Message <span style={{ color: "red" }}>*</span>
                  </label>
                  <textarea
                    required
                    rows="5"
                    cols="85"
                    id="message"
                    className="mb-3"
                  ></textarea>
                  <button
                    className="p-3"
                    style={{
                      height: "45px",
                      width: "100px",
                      border: "none",
                      background: "#0f4494",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#ffffff",
                      borderRadius: "8px",
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">
              Key Solutions for your Advance Analytics and Business Intelligence
            </h1>
            <p>
              Integrate our credible knowledge with the most robust BI and smart
              analytics tools in the world to make insightful, data-driven
              decisions and elevate your business.
            </p>
          </div>

          {cards.map((each) => (
            <div className="col-12 col-md-6 mb-3">
              <Fade direction="up">
                <div className="cardsContainer  p-5">
                  <img
                    className="mt-3"
                    src={each.imageUrl}
                    alt={each.title}
                    height="150"
                    width="150"
                  />
                  <h5 className="text-primary text-center  mb-0 mt-2">
                    {each.title}
                  </h5>
                  <p className="mb-3 p-4 text-center">{each.description}</p>
                </div>
              </Fade>
            </div>
          ))}

          <div className="col-12 col-md-6 text-center mb-3">
            <Fade direction="up">
              <img src={Image3} alt="Image3" height="300" width="300" />
            </Fade>
          </div>

          <div className="col-12 col-md-6 AnalyticsListContainer mb-3">
            <Fade direction="up">
              <h1>Why BigQuery?</h1>
              <ul className="AnalyticsList mt-3 p-3">
                <li className="mt-3 mb-3">
                  Fully managed and serverless for max agility and scale
                </li>
                <li className="mt-3 mb-3">
                  Fast, in-memory BI Engine - rapid reporting and analysis
                </li>
                <li className="mt-3 mb-3">
                  Gigabyte to petabyte-scale storage and SQL queries
                </li>
                <li className="mt-3 mb-3">
                  Encrypted, resilient, and readily accessible.
                </li>
              </ul>
            </Fade>
          </div>
          <div className="col-12 col-md-6 AnalyticsListContainer mb-3">
            <Fade direction="up">
              <h1>Why Looker?</h1>
              <ul className="AnalyticsList mt-3 p-3">
                <li className="mt-3 mb-3">
                  LookML which standardizes enterprise-wide data & metrics
                </li>
                <li className="mt-3 mb-3">
                  100% in-database, no restriction or loading delay
                </li>
                <li className="mt-3 mb-3">
                  Multi-cloud, multi-database access, supporting any data
                  framework
                </li>
                <li className="mt-3 mb-3">
                  Replicable & reusable for given parameters to extract insights
                </li>
              </ul>
            </Fade>
          </div>
          <div className="col-12 col-md-6 text-center mb-3">
            <Fade direction="up">
              <img src={Image4} alt="Image3" height="300" width="300" />
            </Fade>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mb-3 mt-3">
                Omnifinity for your Advance Analytics and BI
              </h1>
            </div>
            <div className="col-12  mt-3 mb-3 text-center col-md-3">
              <button
                className={
                  activeTab === "Consult"
                    ? "AnalyticsActive"
                    : "AnalyticsInactive"
                }
                onClick={() => setTab("Consult")}
              >
                Consult
              </button>
            </div>
            <div className="col-12   mt-3 mb-3 text-center col-md-3">
              <button
                className={
                  activeTab === "Implement"
                    ? "AnalyticsActive"
                    : "AnalyticsInactive"
                }
                onClick={() => setTab("Implement")}
              >
                Implement
              </button>
            </div>
            <div className="col-12  mt-3 mb-3 text-center col-md-3">
              <button
                className={
                  activeTab === "Manage"
                    ? "AnalyticsActive"
                    : "AnalyticsInactive"
                }
                onClick={() => setTab("Manage")}
              >
                Manage
              </button>
            </div>
            <div className="col-12  mt-3 mb-3 text-center col-md-3">
              <button
                className={
                  activeTab === "Improve"
                    ? "AnalyticsActive"
                    : "AnalyticsInactive"
                }
                onClick={() => setTab("Improve")}
              >
                Improve
              </button>
            </div>
            <div className="col-12 col-md-6 mt-3 mb-3">
              <h4 className="mt-3 mb-3 p-2">{Filtered[0].title1}</h4>
              <p className="mt-3 mb-3 p-2">{Filtered[0].description1}</p>
              <h4 className="mt-3 mb-3 p-2">{Filtered[0].title2}</h4>
              <p className="mt-3 mb-3 p-2">{Filtered[0].description2}</p>
              <h4 className="mt-3 mb-3 p-2">{Filtered[0].title3}</h4>
              <p className="mt-3 mb-3 p-2">{Filtered[0].description3}</p>
              <h4 className="mt-3 mb-3 p-2">{Filtered[0].title4}</h4>
              <p className="mt-3 mb-3 p-2">{Filtered[0].description4}</p>
            </div>
            <div
              className="col-12 col-md-6 mt-3 text-center mb-3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Filtered[0].imageUrl} width="600" height="447" alt="" />
            </div>
            <div className="col-12">
              <hr className="w-100" />
            </div>
            <div className="col-12 text-center">
              <p style={{ fontSize: "18px" }}>
                Abacus Cambridge Partners can help you master the art of
                utilizing real-time data streams. Solve business-critical
                challenges, enhance the customer experience, and meet your
                organizational goals. With 35+ years of industry expertise and
                dedicated GCP-certified specialists, we promise impactful,
                scalable, and quantifiable results.
              </p>
              <div className="text-center d-flex justify-content-center mt-3 w-100  mb-4">
                <button
                  className="p-4"
                  style={{
                    height: "45px",
                    width: "130px",
                    background: "#0f4494",
                    cursor: "pointer",
                    display: "flex",
                    border: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
