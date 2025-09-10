// ContactCard.jsx
import React, { useState } from "react";
import "../css/ContectCards.css";
import { FaArrowRight } from "react-icons/fa";

const cardsData = [
  {
    title: "Request For Service",
    subtitle:
      "Have a project in mind? Fill out our quick form and our IT & IoT experts will get back to you to discuss your requirements and craft the right solution.",
  },
  {
    title: "Get Core Team's Contact",
    subtitle:
      "Need to speak directly with our experts? Reach out to our core team via phone or email for prompt assistance and personalized support.",
  },
  {
    title: "Visit Address",
    subtitle:
      "Locate our office and check our working hours. We welcome you to visit us for consultations or project discussions.",
  },
];

const ContactCard = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <div className="contact-heading">
        <h2>
          Turn your vision into intelligent, connected solutions with our
          expertise.
          </h2>
          <br />
          <p>
          Start by sharing your project idea and business goals with our team of
          IoT and IT specialists. We’ll carefully analyze your requirements to
          design a technology strategy that aligns with your objectives. From
          selecting the right IoT frameworks and software architecture to
          optimizing resources, budgeting, and delivery timelines, every step is
          tailored to ensure efficiency and innovation.
          Our collaborative approach ensures that your solution is not only
          technically robust but also scalable and future-ready. Whether it’s
          smart devices, automation systems, or enterprise-grade applications,
          we guide you from concept to deployment, helping your business stay
          ahead in a connected world.
          <br />
           <br />
          Connect with us today and take the first step towards building
          smarter, more innovative solutions.
          </p>
      </div>

      <div className="contact-cards-container">
        {cardsData.map((card, index) => (
          <div
            className={`contact-card contact-animate-card contact-delay-${index}`}
            key={index}
          >
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
            <a
              href="#"
              className={`contact-go-to ${
                activeCard === index ? "contact-active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveCard(activeCard === index ? null : index);
              }}
            >
              <span className="contact-arrow-icon">
                <FaArrowRight />
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* Expanded Section */}
      {activeCard !== null && (
        <div className="contact-expanded-section contact-animate-slide">
          {/* Card 1 - Form */}
          {activeCard === 0 && (
            <div className="contact-form-container">
              <h2>Request Service Form</h2>
              <form className="contact-grid-form">
                <div className="contact-form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="contact-form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" required />
                </div>

                <div className="contact-form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter your phone" required />
                </div>

                <div className="contact-form-group">
                  <label>Query Type</label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select Query Type
                    </option>
                    <option value="software">Software</option>
                    <option value="hardware">Hardware</option>
                    <option value="embedded">Embedded</option>
                  </select>
                </div>

                <div className="contact-form-group">
                  <label>Best time to call you</label>
                  <input type="text" placeholder="e.g. 10am - 2pm" />
                </div>

                <div className="contact-spacer"></div>

                <div className="contact-form-group contact-full-width">
                  <label>Description</label>
                  <textarea placeholder="Enter your query details"></textarea>
                </div>

                <div className="contact-form-group contact-full-width">
                  <button type="submit" className="contact-submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Card 2 - Team */}
          {activeCard === 1 && (
            <div className="contact-form-container">
              <h2>Our Core Team</h2>
              <div className="contact-team-grid">
                {[
                  {
                    name: "Ashutosh Singh",
                    role: "CEO",
                    email: "ashu@example.com",
                    phone: "+91-9876543210",
                    linkedin: "https://linkedin.com/in/johndoe",
                    photo: "/image/img1.jpg",
                  },
                  {
                    name: "Prashant Singh",
                    role: "Project Manager",
                    email: "jane@example.com",
                    phone: "+91-8765432109",
                    linkedin: "https://linkedin.com/in/janesmith",
                    photo: "/image/img2.jpg",
                  },
                  {
                    name: "Gorav Kumar",
                    role: "Hardware Specialist",
                    email: "gorav@example.com",
                    phone: "+91-7654321098",
                    linkedin: "https://linkedin.com/in/davidjohnson",
                    photo: "/image/img3.jpg",
                  },
                  {
                    name: "Krishna Shrama",
                    role: "HR",
                    email: "krishna@example.com",
                    phone: "+91-6543210987",
                    linkedin: "https://linkedin.com/in/emmawilliams",
                    photo: "/image/img4.jpeg",
                  },
                ].map((member, i) => (
                  <div
                    key={i}
                    className={`contact-team-card contact-animate-team contact-delay-${i}`}
                  >
                    <img src={member.photo} alt={member.name} />
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                    <p>Email: {member.email}</p>
                    <p>Phone: {member.phone}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3 - Address */}
          {activeCard === 2 && (
            <div className="contact-form-container">
              <h2>Visit Our Office</h2>
              <div className="contact-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6111082493053!2d75.78003334921912!3d26.852318841101926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57f0c94c5e3%3A0xab3f59c6b881585e!2sOxymora%20Technology%20Pvt.%20Ltd.(OTPL)!5e0!3m2!1sen!2sin!4v1755673686071!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="contact-form-p">
                <strong>Address:</strong> 271,Lower Ground Floor, 2nd, Mahavir
                Nagar, Maharani Farm, Phase-II, Durgapura, Jaipur, Rajasthan –
                302018
              </p>
              <p className="contact-form-p">
                <strong>Timings:</strong> Mon – Fri 9:30am – 6:30pm
              </p>
              <p className="contact-form-p">
                <strong>Phone:</strong> +917060828710
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ContactCard;
