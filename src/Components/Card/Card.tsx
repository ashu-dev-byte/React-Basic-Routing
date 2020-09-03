import React from "react";
import "./Card.css";
import { FaStar, FaBan } from "react-icons/fa";

interface Props {
  name: String;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className="Card dimensions border-2 border-gray-300 rounded-lg m-8">
      <div className="flex">
        <img
          className="h-16 w-16 my-5 ml-4 object-cover object-top rounded-full"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <h1 className="text-3xl font-semibold mt-8 ml-8">{props.name}</h1>
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
      <div className="flex justify-evenly mt-6">
        <button className="flex fav-btn text-xl font-medium justify-center">
          <FaStar /> <span className="ml-2">Favourite</span>
        </button>
        <button className="flex rej-btn text-xl font-medium justify-center">
          <FaBan /> <span className="ml-2">Reject</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
