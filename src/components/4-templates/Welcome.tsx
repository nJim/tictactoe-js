import React from "react";
import Grid from "../3-organisms/Board";

const Welcome = () => {
  const values = ["T", "I", "C", "T", "A", "C", "T", "O", "E"];
  const handleClick = () => {};
  return (
    <>
      <Grid handleClick={handleClick} values={values} />
    </>
  );
};

export default Welcome;
