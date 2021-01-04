import React, { ReactChild } from "react";
import "./Border.css";

const Border = ({ children }: Props) =>
  <div className="border">{ children }</div>;

type Props = {
  children?:
    | React.ReactChild
    | React.ReactChild[];
}

export default Border;
