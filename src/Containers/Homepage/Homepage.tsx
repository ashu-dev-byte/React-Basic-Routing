import React from "react";
import LeftHomePage from "../../Components/Homepage/LeftHomePage";
import RightHomePage from "../../Components/Homepage/RightHomePage";

interface Props {}

const Homepage: React.FC<Props> = (props) => {
  return (
    <div className="parent-div lg:flex h-screen">
      <LeftHomePage />
      <RightHomePage />
    </div>
  );
};

export default Homepage;
