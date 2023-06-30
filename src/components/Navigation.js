import React from "react";

const Navigation = () => {
  return (
    <div className="xxl:w-8/12 md:w-9/12 w-10/12 mx-auto p-5 flex justify-between items-center text-sm font-medium">
      <div>
        <h4 className="text-xl font-bold cursor-pointer">
          Blogster<span className="text-blue-ribbon-600">.</span>
        </h4>
      </div>
      <div>
        <ul className="flex gap-5 items-center text-gray-600">
          <li className=" cursor-pointer hover:text-black">Features</li>
          <li className=" cursor-pointer hover:text-black">How it works</li>
          <li className=" cursor-pointer hover:text-black">Web readers</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-5 items-center text-gray-600">
          <li className=" cursor-pointer hover:text-black ">Login</li>
          <li>
            <button className="btn py-2  px-5 rounded text-white cursor-pointer">
              Get started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
