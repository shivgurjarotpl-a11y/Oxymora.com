import React from "react";
import "../css/MissionPage.css";
import { FaHandsHelping, FaStar, FaBalanceScale } from "react-icons/fa";

const MissionPage = () => {
  return (
    <main className="mission-container">
      {/* Mission Hero */}
      <section className="mission-hero animate">
        <div className="hero-image">
          <img src="/image/img1.jpg" alt="Mission Illustration" />
        </div>
        <div className="hero-text">
          <h1>Our Mission</h1>
          <p>
            At EmpowerOrg, we are dedicated to empowering individuals and
            communities through innovative solutions and committed service. We
            believe in fostering sustainable growth by embracing integrity,
            collaboration, and excellence.
          </p>
          <p>
            Our mission is to create a positive impact that drives progress and
            enriches lives globally, building a future where everyone has the
            opportunity to thrive.
          </p>
          <blockquote>"Together, we build a better future."</blockquote>
          <button>Join Our Mission</button>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values animate">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="icon">
              <FaBalanceScale size={32} color="#1d1d1dff" />
            </div>
            <h3>Integrity</h3>
            <p>
              We uphold the highest ethical standards, ensuring transparency and
              accountability in all our actions.
            </p>
          </div>

          <div className="value-card">
            <div className="icon">
              <FaHandsHelping size={32} color="#1d1d1dff" />
            </div>
            <h3>Collaboration</h3>
            <p>
              We believe in the power of partnerships to amplify impact and
              achieve sustainable solutions.
            </p>
          </div>

          <div className="value-card">
            <div className="icon">
              <FaStar size={32} color="#1d1d1dff" />
            </div>
            <h3>Excellence</h3>
            <p>
              We strive for exceptional quality in everything we do, constantly
              improving and innovating.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach animate">
        <h2>Our Approach</h2>
        <div className="approach-text">
          <p>
            We believe that meaningful change happens through a thoughtful,
            inclusive approach. Our process includes:
          </p>
          <ul>
            <li>
              <strong>Community Engagement:</strong> Listening and collaborating
              with local communities to understand their unique needs and
              strengths.
            </li>
            <li>
              <strong>Innovative Solutions:</strong> Leveraging technology and
              creative strategies to address complex challenges.
            </li>
            <li>
              <strong>Capacity Building:</strong> Empowering individuals and
              organizations with skills and resources for sustainable growth.
            </li>
            <li>
              <strong>Impact Measurement:</strong> Continuously evaluating our
              programs to ensure effectiveness and transparency.
            </li>
          </ul>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="impact animate">
        <h2>Our Impact</h2>
        <div className="impact-grid">
          <div>
            <div className="impact-number">5M+</div>
            <p>Individuals Empowered</p>
          </div>
          <div>
            <div className="impact-number">200+</div>
            <p>Partner Organizations</p>
          </div>
          <div>
            <div className="impact-number">50+</div>
            <p>Countries Reached</p>
          </div>
          <div>
            <div className="impact-number">100+</div>
            <p>Projects Completed</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials animate">
        <h2>What People Say</h2>
        <blockquote>
          EmpowerOrg's programs transformed our community. Their commitment to
          innovation and partnership is unmatched.
          <footer>— Maria Gonzalez, Community Leader</footer>
        </blockquote>
        <blockquote>
          Working with this team has opened new avenues for collaboration. Their
          expertise in sustainable development is impressive.
          <footer>— David Thompson, Partner Organization</footer>
        </blockquote>
      </section>

      {/* Call to Action Banner */}
      <section className="cta animate">
        <h2>Ready to Make a Difference?</h2>
        <p>
          Join us in empowering communities and creating lasting impact
          worldwide.
        </p>
        <button>Get Involved</button>
      </section>
    </main>
  );
};

export default MissionPage;
