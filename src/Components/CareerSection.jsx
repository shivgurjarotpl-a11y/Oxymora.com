import React from "react";
import "../css/CareerSection.css";
import { TrendingUp, Gift, Handshake } from "lucide-react"; // ✅ icons import

const CareerSection = () => {
  return (
    <section className="career-section">
      <h2 className="career-heading">
        Join Us Today and Unlock a World of Opportunities
      </h2>
      <p className="career-subtext">
        At Oxymora, we’re more than just a company — we’re a close-knit family.
        Here, employees aren’t just workers; they’re valued team members who
        grow together. Our collaborative environment fosters learning, support,
        and innovation, helping everyone reach their full potential. With a
        balance of challenge and encouragement, we create a workplace where
        careers flourish. Become a part of our family and watch your
        professional journey soar!
      </p>

      <div className="career-cards">
        <div className="career-card">
          <div className="icon">
            <TrendingUp size={40} />
          </div>
          <h3>Growth Opportunities</h3>
          <p>
            At Oxymora, we give both freshers and experienced professionals a
            unique environment to learn, grow, and excel. Challenges become
            easier when employees feel motivated and supported. Our culture
            nurtures talent, encourages innovation, and fosters personal and
            professional growth.
          </p>
        </div>

        <div className="career-card">
          <div className="icon">
            <Gift size={40} />
          </div>
          <h3>Bonuses</h3>
          <p>
            Everyone likes rewards and incentives and our employees are no
            different. We value the hard work that our team puts in to make our
            clients happy and award them various perks as a token of our
            appreciation!
          </p>
        </div>

        <div className="career-card">
          <div className="icon">
            <Handshake size={40} />
          </div>
          <h3>Community Partner</h3>
          <p>
            Join Oxymora to work on your dream projects. We like exploring new
            work opportunities and our employees get hands-on experience with
            the latest tech. So, if you want to work on rapidly changing
            technology and complete challenging tasks, Oxymora is where you want
            to be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
