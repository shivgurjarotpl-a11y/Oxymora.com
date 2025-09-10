import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./Components/Topbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import OfficeGallery from "./pages/OfficeGallery";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import CoreTeam from "./pages/CoreTeam";
import GalleryPage from "./Components/GalleryPage";
import Work from "./pages/Work";

const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />

        {/* About nested routes */}
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="vision" element={<Vision />} />
          <Route path="core-team" element={<CoreTeam />} />
          <Route path="office-gallery" element={<OfficeGallery />} />
        </Route>

        {/* Subcategory gallery route */}
        <Route path="/gallery/:subcategory" element={<GalleryPage />} />

        {/* Other pages */}
        <Route path="/services" element={<Services/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
