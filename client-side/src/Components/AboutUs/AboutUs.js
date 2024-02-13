import React from "react";
import "./AboutUs.css";
import handshake from "../../images/handshake.webp";
import worldMap from "../../images/map.webp";
import green from "../../images/green.webp";
import yellow from "../../images/yellow.webp";
import blue from "../../images/blue.webp";
import purple from "../../images/purple.webp";
import profile from "../../images/profile.png";

const ourValues = [
  {
    id: 0,
    head: "Data-Driven Symphony",
    image: green,
    desc: "We don't just build apps, we weave them into the fabric of your data strategy. Every solution starts with a deep understanding of your unique data landscape, ensuring your apps play in perfect harmony with your business goals.",
  },
  {
    id: 1,
    head: "Mendix Maestro",
    image: green,
    desc: "We're certified Mendix experts, capable of composing beautiful, user-friendly applications at lightning speed. This means faster development cycles, lower costs, and easier maintenance for your data-driven instruments.",
  },
  {
    id: 2,
    head: "Polarion Precision",
    image: green,
    desc: "We don't just build apps, we weave them into the fabric of your data strategy. Every solution starts with a deep understanding of your unique data landscape, ensuring your apps play in perfect harmony with your business goals.",
  },
  {
    id: 3,
    head: "Oracle Cloud Orchestra",
    image: green,
    desc: "We harness the power of Oracle Cloud to provide secure, scalable, and reliable infrastructure for your data and applications. This ensures your symphony can grow and evolve seamlessly, reaching even the grandest audiences. ",
  },
];

const ourGlobal = [
  {
    id: 0,
    head: "Offices",
    image: green,
    desc: "London | New York | Riyadh | Dubai",
  },
  {
    id: 1,
    head: "Delivery Centers",
    image: purple,
    desc: "Lahore | Karachi | Islamabad",
  },
  {
    id: 2,
    head: "Resource Base",
    image: yellow,
    desc: "Egypt | Algeria | India | Germany",
  },
  {
    id: 3,
    head: "Project Sites",
    image: blue,
    desc: "Bahrain | Caribbean Islands | Egypt | Ethiopia | Ghana | Iraq | Ivory Coast | Kenya | Kuwait | KSA | Malaysia | Malawi | Morocco | Oman | Qatar | Tunisia | UAE | UK | USA",
  },
];

// const leadershipCards = [
//   {
//     id: 0,
//     name: "Name",
//     deignation: "Designation",
//     image: profile,
//     link: "profile",
//   },
//   {
//     id: 1,
//     name: "Name",
//     image: profile,
//     deignation: "Designation",
//     link: "profile",
//   },
//   {
//     id: 2,
//     name: "Name",
//     image: profile,
//     deignation: "Designation",
//     link: "profile",
//   },
//   {
//     id: 3,
//     name: "Name",
//     image: profile,
//     deignation: "Designation",
//     link: "profile",
//   },
//   {
//     id: 4,
//     name: "Name",
//     image: profile,
//     deignation: "Designation",
//     link: "profile",
//   },
// ];

const AboutUs = () => {
  return (
    <div className="aboutus-main-container">
      <div className="aboutus-first-container">
        <div className="aboutus-background"></div>
        <div className="aboutus-first-text-container">
          <h1 className="aboutus-heading">Where Data Ignites Transformation</h1>
          <p className="aboutus-description">
            Orchestrating Data-Driven Innovation with Mendix, Polarion, and
            Oracle Cloud
          </p>
        </div>
      </div>

      <div className="aboutus-second-container">
        <div className="aboutus-second-text-container">
          <h2 className="aboutus-second-heading">About Us</h2>
          <p className="aboutus-second-description">
            Imagine a world where your data sings, your apps dance, and your
            business soars to new heights. At Omnifinity, we don't just build
            apps, we conduct a symphony of data, technology, and strategy to
            unlock your organization's true potential. We leverage the power of
            Mendix low-code development, Polarion ALM platform, and the robust
            capabilities of Oracle Cloud to deliver agile, insightful, and
            scalable solutions.Think of us as your maestro, guiding you on a
            data-driven odyssey. Our team of business intelligence experts and
            Mendix certified developers act as your trusted chorus, translating
            complex data into actionable harmonies. We delve deep to uncover
            hidden insights, trends, and patterns, empowering you to make
            informed decisions that resonate with your business goals.
          </p>
        </div>
      </div>
      <div className="aboutus-second-container">
        <div className="aboutus-third-image-text-container">
          <div className="aboutus-third-image-container">
            <img
              src={handshake}
              className="aboutus-third-image"
              alt="about-us-handshake"
            />
          </div>
          <div className="aboutus-third-text-container">
            <h2 className="aboutus-third-heading">Omnifinity Group</h2>
            <p className="aboutus-second-description">
              But wait, there's more! We don't just build and conduct, we also
              refine and orchestrate with the help of Polarion. This
              industry-leading ALM platform allows us to streamline application
              lifecycle management, ensuring every note hits the right tone,
              every line of code is flawless, and every release is a
              masterpiece. And to elevate your performance to the cloud
              stratosphere, we bring in the power of Oracle Cloud. This robust
              platform provides us with the infrastructure, security, and
              scalability needed to build applications that can handle any data
              symphony, no matter how complex.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutus-second-container">
        <div className="aboutus-our-global-point-container">
          <h1 className="aboutus-third-heading">Our Global Footprint</h1>
          <img
            src={worldMap}
            alt="about-us-world-map"
            className="aboutus-world-map-image"
          />
        </div>
      </div>
      <div className="aboutus-second-container">
        <div className="aboutus-global-colors-container">
          {ourGlobal.map((global) => (
            <div
              className="aboutus-global-color-image-container"
              key={global.id}
            >
              <img
                alt="About Us-01-1"
                className="aboutus-global-color-image"
                src={global.image}
              />

              <h3 className="aboutus-global-color-text">{global.head}</h3>
              <p>{global.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="aboutus-second-container">
        <div className="aboutus-our-values-conatainer">
          {ourValues.map((value) => (
            <div
              className="aboutus-our-values-text-image-container"
              key={value.id}
            >
              <img
                alt="About Us-01-1"
                className="aboutus-global-color-image"
                src={value.image}
              />

              <h3 className="aboutus-our-values-card-heading">{value.head}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="aboutus-second-container">
        <div className="our-leadrship-caontainer">
          <div className="our-leadership-text-container">
            <h1 className="aboutus-third-heading">Our Leadership</h1>
            <p className="aboutus-second-description">
              Our Leadership Team is composed of individuals who are deeply
              committed to leveraging their diverse experience with digital
              technology to bring about transformative improvements in business
              and public services, and ultimately in people's lives.
            </p>
          </div>
          <div className="our-leadership-cards-container">
            {leadershipCards.map((card) => (
              <div className="our-leadership-card">
                <img
                  src={card.image}
                  alt="our-leader"
                  className="our-leader-image"
                />
                <h3>{card.name}</h3>
                <p>{card.deignation}</p>
                <p>{card.link}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
