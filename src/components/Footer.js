import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-ribbon-600">
      <div className="xxl:w-8/12 md:w-9/12 w-11/12 mx-auto p-5 text-sm font-medium text-gray-500 py-8">
        <div>
          <h1 className="text-2xl font-bold  text-white mt-3 flex-1  text-center">
            Blogster.
          </h1>
          <div className="mt-8">
            <ul className="flex gap-5 items-center text-white justify-center ">
              <li className=" cursor-pointer ">Features</li>
              <li className=" cursor-pointer ">How it works</li>
              <li className=" cursor-pointer ">Web readers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
