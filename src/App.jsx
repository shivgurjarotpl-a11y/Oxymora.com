import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./Components/Topbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import OfficeGallery from "./pages/OfficeGallery";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import CoreTeam from "./pages/CoreTeam";
import GalleryPage from "./Components/GalleryPage";
import ScrollToTop from "./Components/ScrollToTop";


const App = () => {
  return (
    <Router>
      <Topbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />

        {/* About with nested routes — About must include <Outlet /> */}
        <Route path="/about" element={<About />}>
          {/* optional default /about content */}
          {/* <Route index element={<AboutOverview />} /> */}
          <Route path="mission" element={<Mission />} />
          <Route path="vision" element={<Vision />} />
          <Route path="core-team" element={<CoreTeam />} />
          <Route path="office-gallery" element={<OfficeGallery />} />
        </Route>

        {/* gallery with dynamic subcategory */}
        <Route path="/gallery/:subcategory" element={<GalleryPage />} />

        {/* other pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* 404 / fallback */}
       
      </Routes>
    </Router>
  );
};

export default App;
