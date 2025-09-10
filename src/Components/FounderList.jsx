// FounderList.jsx
import React from "react";
import FounderCard from "./FounderCard";

const FounderList = () => {
  const founders = [
    {
      name: "Terry Gou",
      position: "Founder",
      company: "Hon Hai Technology Group (Foxconn)",
      image: "/image/img1.jpg",
      description: [
        "Mr. Terry Gou is the Founder and former Chief Executive Officer of Hon Hai Technology Group (Foxconn). Since its establishment in 1974, the company has become the world’s largest electronics manufacturer and the leading global science and technology solutions provider.",
        "Under Mr. Gou’s leadership, Foxconn has committed to creating an AI 8K+5G global ecosystem which will be a catalyst in promoting next-generation technological solutions...",
        "Foxconn has more than 200 subsidiaries and branch offices across over 20 countries...",
        "The company has received widespread international accolades and recognition..."
      ]
    },
    {
      name: "Another Founder",
      position: "Co-Founder",
      company: "TechVision Ltd.",
      image: "/image/img1.jpg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec tincidunt, massa ut volutpat commodo, purus mi suscipit nibh.",
        "Integer feugiat, metus sit amet feugiat venenatis, justo sapien bibendum est..."
      ]
    },

     {
      name: "Another Founder",
      position: "Co-Founder",
      company: "TechVision Ltd.",
      image: "/image/img1.jpg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec tincidunt, massa ut volutpat commodo, purus mi suscipit nibh.",
        "Integer feugiat, metus sit amet feugiat venenatis, justo sapien bibendum est..."
      ]
    },

     {
      name: "Another Founder",
      position: "Co-Founder",
      company: "TechVision Ltd.",
      image: "/image/img1.jpg",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec tincidunt, massa ut volutpat commodo, purus mi suscipit nibh.",
        "Integer feugiat, metus sit amet feugiat venenatis, justo sapien bibendum est..."
      ]
    },
    


  ];

  return (
    <div>
      {founders.map((founder, index) => (
        <FounderCard key={index} {...founder} />
      ))}
    </div>
  );
};

export default FounderList;
