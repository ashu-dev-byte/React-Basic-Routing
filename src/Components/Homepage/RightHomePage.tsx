import React from "react";
import "./Homepage.css";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {}

const RightHomePage: React.FC<Props> = (props) => {
  return (
    <div className="right-div sm:w-full lg:w-1/2 h-full relative">
      <div className="mt-24">
        <h1 className="text-4xl font-bold text-center">Welcome to</h1>
        <h1 className="text-4xl font-bold text-center -mt-4">Gypsy Housing</h1>
      </div>
      <div className="flex justify-center mt-24">
        <FaFacebook color="blue" size="3.5em" />
      </div>

      <div className="flex justify-center mt-4">
        <p className="text-xl text-center w-2/5">
          Login with your Facebook account to preview the best available
          suggestions to be your roommate.
        </p>
      </div>

      <div className="flex justify-center mt-16 mb-4">
        <Link to="/user/suggestions">
          <button className="flex font-bold justify-center text-white btn-fb">
            <FaFacebookF color=" rgb(14, 86, 240);" size="1.5em" /> &nbsp; LOGIN
            WITH FACEBOOK
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RightHomePage;
