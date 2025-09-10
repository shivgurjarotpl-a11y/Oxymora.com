import React from "react";
import "../css/ResumeForm.css";

const ResumeForm = () => {
  return (
    <section className="resume-section">
      {/* Left Side Content */}
      <div className="resume-left">
        <h2>
          We Are On A <br /> Hunt For Talent!
        </h2>
        <p>
          If you don’t see a suitable position here, you may write to us and get
          answers to your specific queries for openings. We will soon get in
          touch!
        </p>
      </div>

      {/* Right Side Form */}
      <div className="resume-right">
        <h3>Send Us Resume</h3>
        <p className="subtext">Join Our Team for Evolving Your Career</p>

        <form className="resume-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email*" required />
          </div>

          <input type="tel" placeholder="Phone No.*" required />

          <select>
            <option>Select Professional</option>
            <option>UI Designer</option>
            <option>UX Developer</option>
            <option>PHP Developer</option>
            <option>Android Developer</option>
            <option>iOS Developer</option>
            <option>Quality Analyst</option>
          </select>

          <input type="file" />

          <textarea placeholder="Message*" rows="4" required></textarea>

          <button type="submit">Send Now</button>
        </form>
      </div>
    </section>
  );
};

export default ResumeForm;
