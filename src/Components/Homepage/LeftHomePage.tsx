import React from "react";
import "./Homepage.css";
import { FaHome } from "react-icons/fa";

interface Props {}

const LeftHomePage: React.FC<Props> = (props) => {
  return (
    <div className="left-div sm:w-full lg:w-1/2 h-full border-2 border-gray-500 relative">
      <div className="absolute imgBackground"></div>
      <div className="absolute brand-logo">
        <FaHome color="white" size="3.5em" />
      </div>
      <div className="absolute line"></div>
      <div className="absolute brand-name text-center">
        <h2 className="font-semibold text-3xl -mb-2">GYPSY</h2>
        <h6 className="text-lg">HOUSING</h6>
      </div>
      <div className="absolute brand-para">
        <p className="text-center text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          explicabo, labore veritatis vero nesciunt ex sapiente accusamus.
        </p>
      </div>
    </div>
  );
};

export default LeftHomePage;
