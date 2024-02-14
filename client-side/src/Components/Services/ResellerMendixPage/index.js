import { Component } from "react";
import "./index.css";

import { BeatLoader } from "react-spinners";
import medixsideimage from "../../Images/medixsideimage.webp";
import mendixbanner from "../../Images/mendixremovebg.webp";
import mendix3 from "../../Images/mendix3.webp";
import mendixappicon from "../../Images/mendixiappicon.webp";
import mendixcloudicon from "../../Images/mendixcloudicon.webp";
import mendixautoicon from "../../Images/mendixautoicon.webp";
import mendixdataintegicon from "../../Images/mendixdataintegicon.webp";
import mendixmultexpicon from "../../Images/mendixmultexpicon.webp";
import mendixaiicon from "../../Images/mendixaiicon.webp";
import Typewriter from "typewriter-effect";

class ResellerMendix extends Component {
  state = { loading: true };

  componentDidMount() {
    // Simulate an API call or any async operation
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.setState({ loading: false }); // Set loading to false when your data is ready
    }, 500); // Simulating a 2-second delay
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        {loading ? (
          <div className="spinner">
            <BeatLoader size={20} color={"#123abc"} loading={loading} />
          </div>
        ) : (
          <div className="mendix-main-container">
            <div className="mendix-page-banner">
              <div className="mendix-page-banner-heading-container">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("A LOW CODE APPLICATION DEVELOPMENT SOLUTION")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(2500)
                      .deleteAll()
                      .callFunction(() => {
                        console.log("All strings were deleted");
                      })
                      .start();
                  }}
                  options={{ loop: true }}
                />
              </div>
              <img
                alt="mendixpagebanner"
                className="mendix-page-banner-image"
                src={mendixbanner}
              />
            </div>

            <div className="reseller-mendix-side-description">
              <div className="mendix-card-description">
                <h1 className="mendix-card-description-heading">
                  SIEMENS MENDIX
                </h1>
                <p className="mendix-card-description-para">
                  Omnifinity is Siemens Mendix Channel partner in India.
                </p>
                <p className="mendix-card-description-para">
                  Omnifinity have been working with Mendix application
                  development space since 2019 even before Siemens acquisition
                  of Polarion. Omnifinity is your go-to destination for
                  cutting-edge software and app development using the powerful
                  Mendix low-code platform. We deliver innovative solutions that
                  drive success, tailored to your specific needs. As authorized
                  Mendix resellers, we ensure access to the latest tools for
                  your digital initiatives. Let's embark on this exciting
                  journey together and empower innovation with Omnifinity.
                </p>
                <p className="mendix-card-description-para">
                  We have been delivering flawless services across global to
                  various industries such as Automotive, Aerospace, Oil & Gas
                  and Life Sciences.
                </p>
              </div>
              <div className="mendixpic-container">
                <img
                  alt="mendixpic"
                  className="mendixpic"
                  src={medixsideimage}
                />
              </div>
            </div>
            <div className="reseller-mendix-row">
              <div className="mendixpic-container-2">
                <img
                  alt="mendixpic"
                  className="reseller-mendix-pic-2"
                  src={mendix3}
                />
              </div>
              <div className="reseller-mendix-side-description-2">
                <div className="mendix-card-description-2">
                  <h1 className="mendix-card-description-heading">
                    LABYRINTH OFFERING
                  </h1>
                  <ul className="labyrinth-offering-unorderedlist-contianer">
                    <li>Installation, upgrades and maintenance of Mendix</li>
                    <li>Implementation (Large & Small)</li>
                    <li>Roll Outs</li>
                    <li>Integration with Polarion, SAP and Oracle</li>
                    <li>Training</li>
                    <li>Web Application Development</li>
                    <li>Mobile Application Development</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="reseller-cards-container">
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img src={mendixappicon} alt="appdevelopment" />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">App Development</h1>
                    <p className="para">
                      Empower co-creation across a diverse developer spectrum
                      with a common visual language and dedicated IDEs to meet
                      business needs quickly and efficiently.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img src={mendixcloudicon} alt="seo-friendly" />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">Cloud</h1>
                    <p className="para">
                      Build and deliver portable, scalable, and resilient
                      applications without specialized expertise. Deploy
                      anywhere in one click.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img
                      className="chat-image"
                      src={mendixautoicon}
                      alt="chat-social"
                    />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">
                      Intelligent Automation
                    </h1>
                    <p className="para">
                      Deliver end-to-end process automation with applications
                      that bring people, data, and systems together.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img src={mendixdataintegicon} alt="blog" />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">Data Integration</h1>
                    <p className="para">
                      Open and extensible at every level: platform, models and
                      applications.Integrate data and logic from any data
                      source, system or service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img src={mendixmultexpicon} alt="theme" />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">Multi-Experience</h1>
                    <p className="para">
                      Visually design, context aware smart applications, that
                      deliver exceptional users experiences across a range of
                      touchpoints and modalities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-container">
                <div className="card">
                  <div className="img-box">
                    <img
                      className="chat-image"
                      src={mendixaiicon}
                      alt="chat-social"
                    />
                  </div>
                  <div className="content">
                    <h1 className="mendix-card-heading">
                      Artificial Intelligence
                    </h1>
                    <p className="para">
                      Embrace smart applications; seamlessly connect AI and
                      cognitive services to elevate your solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ResellerMendix;
