import React from "react";
import "./Card.css";
import { FaBan } from "react-icons/fa";

interface Props {
  name: String;
}

const FavCard: React.FC<Props> = (props) => {
  return (
    <div className="FavCard dimensions border-2 border-gray-300 rounded-lg m-8">
      <div className="flex">
        <img
          className="h-16 w-16 my-5 ml-4 object-cover object-top rounded-full"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <div className="mt-8 mb-2">
          <h1 className="text-3xl font-semibold ml-8 -mb-2">{props.name}</h1>
          <span className="text-xl text-blue-400 ml-8 -mt-4 underline cursor-pointer">
            Visit Facebook Profile
          </span>
        </div>
      </div>
      <div className="ml-8">
        <p className="text-lg font-medium">
          A <span className="text-orange-500">non-smoker</span>,
          <br /> looking for upto{" "}
          <span className="text-orange-500">2 roommates</span> <br /> in{" "}
          <span className="text-orange-500">Seattle Downtown</span>, <br /> with
          a move in of
          <span className="text-orange-500"> 09/01/2020</span> and <br /> a
          monthly rent of <span className="text-orange-500">$1000-$1200</span>.
        </p>
      </div>
      <div className="flex justify-start mt-6">
        <button className="flex rej-btn text-xl font-medium justify-center ml-8">
          <FaBan /> <span className="ml-2">Reject</span>
        </button>
      </div>
    </div>
  );
};

export default FavCard;
