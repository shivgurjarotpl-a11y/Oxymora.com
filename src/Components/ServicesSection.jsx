// import React, { useEffect } from "react";
// import "../css/ServicesSection.css";

// const services = [
//   {
//     id: 1,
//     title: "IoT Product Development",

//   },
//   {
//     id: 2,
//     title: "Software & Application Development",

//   },
//   {
//     id: 3,
//     title: "Digital & User Experience Design",

//   },
//   {
//     id: 4,
//     title: "Data & Cloud Services",

//   },
//   {
//     id: 5,
//     title: "Consulting & Support",

//   },
// ];

// const ServicesSection = () => {
//   useEffect(() => {
//     const cards = document.querySelectorAll(".subcategory-card");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//             observer.unobserve(entry.target); // animate only once
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cards.forEach((card) => {
//       observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="services-wrapper">
//       <h2 className="services-heading">Custom IoT Development Services</h2>

//       {services.map((category) => (
//         <div key={category.id} className="service-category">
//           <h3 className="category-title">
//             {category.id}. {category.title}
//           </h3>
//           <div className="subcategory-grid">
//             {category.subcategories.map((sub, i) => (
//               <div key={i} className="subcategory-card">
//                 <img
//                   src={sub.image}
//                   alt={sub.name}
//                   className="subcategory-img"
//                 />
//                 <h4 className="subcategory-title">{sub.name}</h4>
//                 <p className="subcategory-desc">{sub.desc}</p>
//                 <button className="read-more-btn">Read More</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default ServicesSection;


import React, { useEffect } from "react";
import "../css/ServicesSection.css";
import { Cpu, Smartphone, Palette, Cloud, LifeBuoy } from "lucide-react"; 

const services = [
  {
    id: 1,
    title: "IoT Product Development",
    icon: <Cpu className="category-icon" />,
        subcategories: [
      {
        name: "Firmware Development",
        desc: "Embedded software for devices, sensor integration, real-time systems.",
        image: "/image/iot.webp",
      },
      {
        name: "Hardware Development",
        desc: "Circuit design, PCB design, sensor modules, microcontrollers.",
        image: "/image/iot2.webp",
      },
      {
        name: "Prototyping Development",
        desc: "Rapid prototyping, proof of concept devices, testing.",
        image: "/image/prototyping.jpg",
      },
      {
        name: "Manufacturing Services",
        desc: "Mass production, assembly, quality control, supply chain support.",
        image: "/image/manufactur.jpg",
      },
    ],
  },
    {
    id: 2,
    title: "Embedded Software Development",
    icon: <Cpu className="category-icon" />,
        subcategories: [
      {
        name: "Firmware Development",
        desc: "Embedded software for devices, sensor integration, real-time systems.",
        image: "/image/iot.webp",
      },
      {
        name: "Hardware Development",
        desc: "Circuit design, PCB design, sensor modules, microcontrollers.",
        image: "/image/iot2.webp",
      },
      {
        name: "Prototyping Development",
        desc: "Rapid prototyping, proof of concept devices, testing.",
        image: "/image/prototyping.jpg",
      },
      {
        name: "Manufacturing Services",
        desc: "Mass production, assembly, quality control, supply chain support.",
        image: "/image/manufactur.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Software & Application Development",
    icon: <Smartphone className="category-icon" />,
       subcategories: [
      {
        name: "IoT Web & Mobile Applications",
        desc: "Device dashboards, remote monitoring apps, analytics platforms.",
        image: "/image/mb.webp",
      },
      {
        name: "Custom Software Development",
        desc: "Cloud integration, data management, automation solutions.",
        image: "/image/img17.jpg",
      },
      {
        name: "API Development & Integration",
        desc: "Connect devices to third-party services and cloud platforms.",
        image: "/image/img17.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Digital & User Experience Design",
    icon: <Palette className="category-icon" />,
        subcategories: [
      {
        name: "UI/UX Design",
        desc: "Mobile and web interface design, usability testing, user experience optimization.",
        image: "/image/img17.jpg",
      },
      {
        name: "Website Development",
        desc: "Company websites, landing pages, e-commerce portals.",
        image: "/image/img17.jpg",
      },
      {
        name: "Mobile Application Development",
        desc: "iOS, Android, and cross-platform apps.",
        image: "/image/img17.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Data & Cloud Services",
    icon: <Cloud className="category-icon" />,
        subcategories: [
      {
        name: "IoT Cloud Platforms",
        desc: "Cloud-based device management, storage, and analytics.",
        image: "/image/img17.jpg",
      },
      {
        name: "Big Data & Analytics",
        desc: "Sensor data processing, visualization, and reporting.",
        image: "/image/img17.jpg",
      },
      {
        name: "AI & Machine Learning for IoT",
        desc: "Predictive maintenance, anomaly detection, smart automation.",
        image: "/image/img17.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Consulting & Support",
    icon: <LifeBuoy className="category-icon" />,
        subcategories: [
      {
        name: "IoT Strategy Consulting",
        desc: "Feasibility studies, roadmap planning, technology selection.",
        image: "/image/img17.jpg",
      },
      {
        name: "Maintenance & Support",
        desc: "Firmware updates, hardware maintenance, app updates.",
        image: "/image/img17.jpg",
      },
      {
        name: "Security & Compliance",
        desc: "IoT device security, data privacy compliance, regulatory guidance.",
        image: "/image/img17.jpg",
      },
    ],
  },
];

const ServicesSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".subcategory-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-wrapper">
      <h2 className="services-heading">Custom IoT Development Services</h2>

      {services.map((category) => (
        <div key={category.id} className="service-category">
          <h3 className="category-title">
            <span className="category-id">{category.id}</span>
            {category.icon}
            <span className="category-text">{category.title}</span>
          </h3>
          <div className="subcategory-grid">
            {category.subcategories.map((sub, i) => (
              <div key={i} className="subcategory-card">
                <img src={sub.image} alt={sub.name} className="subcategory-img" />
                <h4 className="subcategory-title">{sub.name}</h4>
                <p className="subcategory-desc">{sub.desc}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;







