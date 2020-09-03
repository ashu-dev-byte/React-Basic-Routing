import React from "react";
import FavCard from "../../Components/Card/FavCard";

interface Props {}

const Favourites: React.FC<Props> = (props) => {
  return (
    <div className="">
      <h1 className="text-5xl font-semibold mt-6 ml-8">Favourites</h1>
      <div className="flex justify-start">
        <FavCard name="Dr. John Cairns" />
        <FavCard name="Emma Blake" />
      </div>
    </div>
  );
};

export default Favourites;
