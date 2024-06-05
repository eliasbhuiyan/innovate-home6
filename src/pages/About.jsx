import React from "react";
import { useSelector } from "react-redux";
import IncrementComp from "../components/IncrementComp";
import DicrementComp from "../components/DicrementComp";

const About = () => {
  const data = useSelector((state) => state.counter.value);

  return (
    <div className="m-36">
      <IncrementComp />
      <h1>{data}</h1>
      <DicrementComp />
    </div>
  );
};

export default About;
