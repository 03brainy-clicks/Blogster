import React from "react";

import Crypto from "../assets/crypto.jpg";
import Travel from "../assets/travel.jpg";
import Tourism from "../assets/tourism.jpg";
import Education1 from "../assets/education-1.jpg";
import Education2 from "../assets/education-2.jpg";
import Industry from "../assets/industry.jpg";
import Politics1 from "../assets/politics-1.jpg";
import Sports from "../assets/sports.jpg";
import Tech1 from "../assets/tech-1.jpg";
import ImageCard from "../utils/ImageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaseball,
  faCamera,
  faCar,
  faCode,
  faDollarSign,
  faGamepad,
  faIndustry,
  faLightbulb,
  faPaintBrush,
  faScaleBalanced,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <div>
      {/* hero  */}
      <div className="xxl:w-8/12 md:w-9/12 w-10/12 mx-auto p-5 text-sm font-medium text-gray-600 ">
        <div className="my-16">
          <p className="">WELCOME TO BLOGSTER APP</p>
          <div className="flex gap-5">
            <div className=" w-2/3">
              <h1 className="text-5xl font-bold text-gray-800 mt-3 flex-1">
                Easy platform for{" "}
                <span className="text-blue-ribbon-600">
                  reading and writing
                </span>{" "}
                blogs and newsletters
              </h1>
              <p className="flex-1 text-gray-500 mt-5 w-4/5 ">
                Enjoy your blogs and newsletters in a space made for mindful
                reading while making room for your inbox keep track of all the
                things out there.
              </p>
            </div>
            <div className="flex-1  hero rounded-full"></div>
          </div>
        </div>
        {/* image grid  */}
        <div className="flex gap-5 justify-between items-center mx-auto my-16 ">
          <div className="flex-1 space-y-5">
            <ImageCard image={Tech1} alt={"Technology"} />
          </div>{" "}
          <div className="flex-1 space-y-5">
            <ImageCard image={Travel} alt={"Travel"} />
            <ImageCard image={Crypto} alt={"Crypto "} />
          </div>{" "}
          <div className="flex-1 space-y-5">
            <ImageCard image={Tourism} alt={"Tourism"} />
            <ImageCard image={Education1} alt={"Education"} />{" "}
            <ImageCard image={Industry} alt={"Industry"} />
          </div>
          <div className="flex-1 space-y-5">
            <ImageCard image={Politics1} alt={"Politics"} />
            <ImageCard image={Sports} alt={"Sports"} />
          </div>
          <div className="flex-1 space-y-5">
            <ImageCard image={Education2} alt={"Space"} />
          </div>
        </div>
        {/* topics  */}

        <div className="flex gap-11">
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faDollarSign}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Cryptocurrency</span>
          </div>
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faScaleBalanced}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Politics</span>
          </div>
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faIndustry}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Industry</span>
          </div>
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faLightbulb}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Creativity</span>
          </div>
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCode}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Coding</span>
          </div>{" "}
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faGamepad}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Gaming</span>
          </div>{" "}
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faBaseball}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Sports</span>
          </div>{" "}
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCar}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Travel</span>
          </div>{" "}
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faPaintBrush}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Painting</span>
          </div>
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faTelevision}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Movies</span>
          </div>
          <div className="flex items-center gap-3">
            <div className=" bg-blue-ribbon-50 h-7 w-7 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCamera}
                size="sm"
                className="text-blue-ribbon-600"
              />
            </div>
            <span>Photography</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
