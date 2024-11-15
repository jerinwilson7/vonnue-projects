import { useState } from "react";
import { Box } from "./Box";

export const Board = () => {
  const [box, setBox] = useState(9);
  return (
    <div className="board">
      <Box />
    </div>
  );
};
