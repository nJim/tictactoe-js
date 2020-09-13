import React, { useState } from "react";
import Grid from "./Grid";

const Welcome = () => {
  const values = ["T", "I", "C", "T", "A", "C", "T", "O", "E"];
  const handleClick = null;
  return (
    <>
      <Grid handleClick={handleClick} values={values} />
    </>
  );
};

export default Welcome;
