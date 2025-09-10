import React, { useRef, useEffect } from 'react';
import '../css/HorizontalScrollCards.css';

const HorizontalScrollCards = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollSpeed = 2;

    const scroll = () => {
      container.scrollLeft += scrollSpeed;

     
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="slider-wrapper" ref={scrollContainerRef}>
      <div className="slider-content">
        {[...Array(2)].map((_, i) => (
          <div className="slider-track" key={i}>
            {[
              { title: 'Event Calendar', img: '/image/img1.jpg' },
              { title: 'YouTube', img: '/image/img2.jpg' },
              { title: 'Smart CityGPT',img: '/image/img3.jpg' },
              { title: 'Meeting', img: '/image/img1.jpg'}
            ].map((card, index) => (
              <div className="slider-card" key={index}>
                <img src={card.img} alt={card.title} />
                <p>{card.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
