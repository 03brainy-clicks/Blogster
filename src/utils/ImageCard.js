import React from "react";

const ImageCard = ({ image, alt }) => {
  return (
    <div className="relative overflow-hidden">
      <img className="rounded " src={image} alt={`${alt}`} />
      <div className="w-full h-full absolute flex items-center top-0 opacity-0 hover:opacity-80 text-white bg-blue-600 justify-center transition duration-400 rounded cursor-pointer">
        <div>{alt}</div>
      </div>
    </div>
  );
};

export default ImageCard;
