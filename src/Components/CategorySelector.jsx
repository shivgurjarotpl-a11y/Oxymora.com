import React from "react";
import "../css/CategorySelector.css"; // external css import
import { Globe, Smartphone, Monitor, LayoutDashboard } from "lucide-react";

const CategorySelector = ({ active, setActive }) => {
  const categories = [
    { id: "all", label: "All", icon: <Globe size={28} /> },
    { id: "application", label: "Iot Application", icon: <Smartphone size={28} /> },
    { id: "website", label: "Iot Dashboard", icon: <Monitor size={28} /> },
    { id: "Projects", label: "Projects", icon: <LayoutDashboard size={28} /> },
  ];

  return (
    <div className="category-wrapper">
      {categories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => setActive(cat.id)}
          className={`category-card ${active === cat.id ? "active" : ""}`}
        >
          <div className="category-icon">{cat.icon}</div>
          <span className="category-label">{cat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
