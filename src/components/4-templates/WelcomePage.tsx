import React from "react";
import { Link } from "react-router-dom";
import Grid from "../3-organisms/Board";

const WelcomePage = () => {
  const values = ["T", "I", "C", "T", "A", "C", "T", "O", "E"];
  const handleClick = () => {};
  return (
    <Link to="/play">
      <Grid handleClick={handleClick} values={values} />
    </Link>
  );
};

export default WelcomePage;
