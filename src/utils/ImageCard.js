import React from "react";

const ImageCard = ({ image, alt }) => {
  return (
    <div className="relative overflow-hidden rounded w-[200px]  ">
      <img
        className="rounded hover:scale-125 transition duration-300 w-full bg-cover hover:rounded"
        src={image}
        alt={`${alt}`}
      />
      {/* <div className="absolute top-5 z-50 right-5 hidden bg-red hover:bg-white">
        {alt}
      </div> */}
      <div className="w-full h-full absolute flex items-center top-0 opacity-0 hover:opacity-70 text-white bg-black justify-center transition duration-400 rounded cursor-pointer">
        <div>{alt}</div>
      </div>
    </div>
  );
};

export default ImageCard;
