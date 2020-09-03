import React from "react";
import CardNew from "../../Components/Card/CardNew";
import Card from "../../Components/Card/Card";
interface Props {}

const Suggestions: React.FC<Props> = (props) => {
  return (
    <div className="">
      <h1 className="text-5xl font-semibold mt-6 ml-8">Suggestions</h1>
      <div className="flex justify-start flex-wrap">
        <CardNew name="James Rhodes" />
        <CardNew name="Joel Cunningham" />
        <Card name="Chris Anderson" />
        <Card name="Edward Graham" />
        <Card name="Ross Michael" />
        <Card name="Andrew Broad" />
      </div>
    </div>
  );
};

export default Suggestions;
