import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

export default function HomePage() {

    const HomeImages = [
        {
          src: "https://27058982.fs1.hubspotusercontent-eu1.net/hub/27058982/hubfs/1-Transform-4.jpg?width=2100&name=1-Transform-4.jpg",
          alt: 'Image 1',
          title: 'EMBRACE THE AI TRANSFORMATION',
          description: 'Unleashing New Business Horizons',
        },
        {
          src: 'https://27058982.fs1.hubspotusercontent-eu1.net/hub/27058982/hubfs/Untitled%20design%20(5).png?width=2100&name=Untitled%20design%20(5).png',
          alt: 'Image 2',
          title: 'OPERATE',
          description: 'Master Your Operations With Your Managed Services',
        },
        {
          src: "https://27058982.fs1.hubspotusercontent-eu1.net/hub/27058982/hubfs/Innovate.png?width=2100&name=Innovate.png",
          alt: 'Image 3',
          title: 'INNOVATE',
          description: 'Harness Cutting-Edge Frameworks for Business Innovation',
        }
      ];
      
  return (
   <div className="HomePageTotalContainer">
    <Carousel>
      {HomeImages.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
          />
          <div className="homepage-carousel-caption-overlay">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
   </div>
  )
}
