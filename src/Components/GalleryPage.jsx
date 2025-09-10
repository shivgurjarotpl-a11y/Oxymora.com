import React, { useEffect, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../css/GalleryPage.css";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";




const galleryData = {
  "Office Space": {
    "Meeting Rooms": ["/image/img1.jpg", "/image/img2.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Workspaces": ["/image/img3.jpg", "/image/img5.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Recreation Area": ["/image/img6.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Events & Functions": ["/image/img8.jpg", "/image/img10.jpg", "/image/img12.jpg", "/image/img12.jpg"],
  },
  "Team at Work": {
    "Developers": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Designers": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Marketing": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "HR Team": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
  },
  "Events & Celebrations": {
    "Annual Party": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Festivals": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Team Outings": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Award Ceremonies": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
  },
  "Company Culture": {
    "Work Environment": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Team Bonding": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Innovation": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Learning": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
  },
  "Behind the Scenes": {
    "Setup & Prep": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Office Life": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Events Prep": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
    "Daily Work": ["/image/img7.jpg", "/image/img7.jpg", "/image/img12.jpg", "/image/img12.jpg"],
  },
};

function GalleryPage() {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [allImages, setAllImages] = React.useState([]);
  const itemRefs = useRef([]);

React.useEffect(() => {
  const imgs = [];
  Object.entries(galleryData).forEach(([category, subcats]) => {
    Object.entries(subcats).forEach(([subcategory, arr]) => {
      arr.forEach((img, idx) =>
        imgs.push({
          src: img,
          title: category, // category name as title
          description: `${subcategory} - Image ${idx + 1}`, // subcategory + index
        })
      )
    });
  });
  setAllImages(imgs);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  itemRefs.current.forEach((ref) => ref && observer.observe(ref));

  return () => {
    itemRefs.current.forEach((ref) => ref && observer.unobserve(ref));
  };
}, []);


  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  let imgCounter = 0;

  return (
    <div className="gallery-wrapper">
      {Object.entries(galleryData).map(([category, subcats], i) => (
        <div key={i} className="category-section">
          <h2 className="category-heading">{category}</h2>
          {Object.entries(subcats).map(([subcategory, images], j) => (
            <div key={j} className="subcategory-section">
              <h3 className="subcategory-heading">{subcategory}</h3>
              <div className="gallery-grid">
                {images.map((img, idx) => {
                  const index = imgCounter++;
                  return (
                    <div
                      key={idx}
                      className="gallery-item fade-in-up"
                      onClick={() => openLightbox(index)}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                        if (el) {
                          // add stagger delay dynamically
                          el.style.setProperty("--delay", `${(idx % 4) * 0.15}s`);
                        }
                      }}
                    >
                      <img src={img} alt={`${subcategory} ${idx + 1}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ))}

 <Lightbox
  open={open}
  close={() => setOpen(false)}
  slides={allImages}   // already has title & description
  index={currentIndex}
  plugins={[Zoom, Captions, Thumbnails, Slideshow]}
/>

    </div>
  );
}

export default GalleryPage;
