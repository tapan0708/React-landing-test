import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function TestimonialCard({ testimonialsData }) {
  const iconStyle = {
    color: "yellow", // Change this to the desired color
  };

  const iconsArray = Array.from({ length: testimonialsData.starsCount });
  return (
    <div className="col-md-3 pe-5 mt-4">
      <div className="mb-3">
        {iconsArray.map((_, index) => (
          <FontAwesomeIcon icon={faStar} key={index} style={iconStyle} />
        ))}
      </div>
      <p>{testimonialsData.title}</p>
      <p className="opacity-50">{testimonialsData.desc}</p>
      <p>{testimonialsData.name}</p>
    </div>
  );
}

export default TestimonialCard;
