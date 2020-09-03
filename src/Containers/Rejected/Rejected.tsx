import React from "react";
import RejCard from "../../Components/Card/RejCard";

interface Props {}

const Rejected: React.FC<Props> = (props) => {
  return (
    <div className="">
      <h1 className="text-5xl font-semibold mt-6 ml-8">Rejected</h1>
      <div className="flex justify-start">
        <RejCard name="Cara Dunes" />
      </div>
    </div>
  );
};

export default Rejected;
