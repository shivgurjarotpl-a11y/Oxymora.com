import React from "react";
import CardWithPopup from "./CardWithPopup";
import "../css/VisionSection.css";
const cards = [
  {
    title: "Driving Technology from India to the Globe",
    shortText: `
At the heart of our vision lies a commitment to establish India as a global leader in IoT and IT innovation. `,
    longText: `We believe that the future of technology is being written today, and India has the capability to lead that story.
By combining cutting-edge electronics, advanced IoT platforms, AI-driven solutions, and IT services, we aim to deliver
world-class products and services that reach every corner of the globe.  We envision a world where Made in India technology powers industries across continents,
helping businesses achieve digital transformation, smarter automation, and greater efficiency. 
From smart homes and smart cities to industrial IoT, healthcare, and agriculture, our solutions are built to create real-world impact.
By consistently investing in research, design, and innovation, we want to position India as a technology powerhouse that contributes 
not only to its own growth but also to the progress of humanity.`,
    image: "/image/wallpaper.jpg",
  },
  {
    title: "Designed & Manufactured in India",
    shortText: `Our company strongly supports the vision of “Make in India” and “Atmanirbhar Bharat” (self-reliant India). We take pride in designing,
developing, and manufacturing electronic products, IoT devices, and IT solutions right here in India—for Indian brands, businesses, 
and global markets.`,
    longText: `Instead of relying on imported technology, we focus on indigenous innovation. Every stage, from concept design and prototyping to large-scale manufacturing, 
is carried out in India. This approach not only strengthens local industries but also provides Indian brands with high-quality, cost-effective,
and scalable technology solutions. Our mission is to ensure that Indian products are recognized globally for their quality, reliability, and innovation.
By manufacturing in India, we also contribute to job creation, industrial growth, and technological independence.
We see this as more than just business—it is a responsibility to empower our nation and strengthen India’s role in the global technology ecosystem.`,
    image: "/image/wallpaper.jpg",
  },
  {
    title: "Passion for Sustainable Development",
    shortText: `
Our vision is not limited to innovation alone—it extends to sustainability and environmental responsibility.`,
    longText: `We recognize that the future of technology must align with the future of our planet. That is why we are committed to building eco-friendly,
energy-efficient, and sustainable IoT and IT solutions.
We focus on developing smart devices and IT systems that reduce energy consumption, optimize resource utilization, and minimize waste.
For example, our IoT-enabled monitoring systems can help industries save electricity, track energy usage, and reduce carbon emissions. 
Our manufacturing practices are designed with green technology, recycling, and eco-conscious processes at the core.
By integrating sustainability into our innovation journey, we not only create value for businesses but also contribute to global sustainable 
development goals (SDGs). Our vision is to ensure that technology becomes a tool for environmental preservation and responsible progress, 
leaving behind a healthier planet for future generations.`,
    image: "/image/wallpaper.jpg",
  },
    {
    title: "Creating a Smarter & Better Future Together",
    shortText: `
We believe that the true purpose of technology is not just to build machines but to empower people, businesses,
and societies. Our vision is to create a future where IoT and IT solutions seamlessly connect humans, devices, 
and industries, enabling smarter living and smarter working.`,
    longText: `We are working towards building solutions that enhance healthcare delivery through connected medical devices,
transform agriculture through smart farming, improve industries through automation, and empower cities through
IoT-based smart infrastructure. With the power of cloud computing, AI, machine learning, and big data analytics, 
our solutions help organizations make better decisions, reduce costs, and accelerate growth.
This vision is not ours alone—it is a collaborative journey. We work hand in hand with businesses, partners, 
and communities to shape a digital-first future where technology serves as a bridge to progress, equality, 
and better living. Together, we aim to create a future that is connected, intelligent, and inclusive.`,
    image: "/image/wallpaper.jpg",
  },
    {
    title: "Promoting “Made with Love in India”",
    shortText: `Every product we build carries a part of our identity. We believe in creating solutions that are not just engineered for performance but also crafted with love,
care, and precision. That is why we proudly promote “Made with Love in India.”`,
    longText: `When we design and manufacture our IoT devices, electronics, and IT platforms, we ensure that every detail reflects Indian innovation,
global quality standards, and reliability. Our solutions are built to solve real-world challenges while also being adaptable to global markets.
Whether it’s a smart sensor, a connected platform, or a large-scale IT solution, each product embodies our values of quality, creativity, and responsibility.
Through this commitment, we aim to establish India as a country that doesn’t just make technology but makes it with passion, pride, and purpose.
 Our products stand as a symbol of trust, innovation, and excellence.`,
    image: "/image/wallpaper.jpg",
  },
    {
    title: "Looking Ahead",
    shortText: `Looking to the future, we envision our company as a global leader in IoT and IT solutions, with India at the center of every innovation we create.`,
    longText: `We aim to build cutting-edge electronics, intelligent devices, and scalable IT platforms that transform industries and improve lives.
Our long-term goal is to contribute to India’s growth as a digital superpower while creating technology that addresses global challenges in connectivity,
sustainability, and automation. By embracing AI, cloud computing, IoT, and smart manufacturing, we want to shape industries of the future and inspire a 
new generation of innovators in India.
We see ourselves not just as a company but as a catalyst for change—a force that drives India’s journey toward becoming a technology-first,
innovation-driven nation that impacts the world. Together with our partners, clients, and communities, we are building a smarter, greener,
and more connected tomorrow.`,
    image: "/image/wallpaper.jpg",
  },
];

const VisionSection = () => {
  return (
    <div>
      <div className="VisionSection-contanior">
        {cards.map((card, index) => (
          <CardWithPopup
            key={index}
            {...card}
            isReverse={index % 2 !== 0} // Alternate image side
          />
        ))}
      </div>
    </div>
  );
};

export default VisionSection;
