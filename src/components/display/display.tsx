import React from "react";
import { useSelector } from "react-redux";

import type { StoreState } from "../../store/reducers";

import { DisplayContainer } from "./styles";

type DisplayProps = {
  selectedItem: string | null;
};
const Display: React.FC<DisplayProps> = ({ selectedItem }) => {
  const selectedView = useSelector<StoreState>((state) => state.display);

  return (
    <DisplayContainer>{`${selectedView}: ${selectedItem}`}</DisplayContainer>
  );
};
export default Display;
