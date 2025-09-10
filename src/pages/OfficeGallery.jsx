import React, { useState } from "react";
import Footer from "../Components/Footer";
import FloatingButtons from "../Components/FloatingButtons";
import CategoryCards from "../Components/CategoryCards";
import "../css/OfficeGallery.css";
import GalleryImg from "../Components/GalleryImg";

const OfficeGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      {/* Top gallery image */}
      <GalleryImg />

      <div className="office-contanior">
        {/* Category Cards */}
        <CategoryCards setSelectedCategory={setSelectedCategory} />

        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default OfficeGallery;
