import React from "react";
import Box from "./Box";

const Board = () => (
  <div className="board">
    <Box key={11} row={1} col={1} />
    <Box key={12} row={1} col={2} />
    <Box key={13} row={1} col={3} />
    <Box key={21} row={2} col={1} />
    <Box key={22} row={2} col={2} />
    <Box key={23} row={2} col={3} />
    <Box key={31} row={3} col={1} />
    <Box key={32} row={3} col={2} />
    <Box key={33} row={3} col={3} />
  </div>
);

export default Board;
