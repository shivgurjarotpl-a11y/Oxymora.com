import React, { useState } from "react";
import "../css/NewsSection.css";
import { FaArrowRight } from "react-icons/fa";
import Card from "../Components/Card";

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <div className="news-wrapper">
      <div className="news-header-container">
        <div className="news-tabs-container">
          <button
            className={`news-tab-btn ${activeTab === "news" ? "news-tab-active" : ""}`}
            onClick={() => setActiveTab("news")}
          >
            News <span className="news-arrow-icon"><FaArrowRight /></span>
          </button>
          <button
            className={`news-tab-btn ${activeTab === "activity" ? "news-tab-active" : ""}`}
            onClick={() => setActiveTab("activity")}
          >
            Activity
          </button>
        </div>
        <a href="#" className="news-more-link">
          More News <span className="news-arrow-icon"><FaArrowRight /></span>
        </a>
      </div>

      <hr className="news-divider" />

      <div className="news-card-section">
        {activeTab === "news" ? <Card type="news" /> : <Card type="activity" />}
      </div>
    </div>
  );
};

export default NewsSection;
