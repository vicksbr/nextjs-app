import React from "react";
import { connect } from "react-redux";

import { Item } from "types";

import CategoryForm from "./categoryForm";
import TagForm from "./tagForm";
import { DisplayContainer } from "./styles";

const mapItemTypeToForm = (props: any) => ({
  window: <CategoryForm {...props} />,
  layout: <TagForm {...props} />,
  category: <CategoryForm {...props} />,
  tag: <TagForm {...props} />,
});

type DisplayProps = {
  selectedItem: Item;
};
const Display: React.FC<DisplayProps> = ({ selectedItem }) => {
  const formProps = selectedItem.data
    ? { initialValues: { name: selectedItem.data.name } }
    : null;

  return (
    <DisplayContainer>
      {mapItemTypeToForm(formProps)[selectedItem.type]}
    </DisplayContainer>
  );
};

type StateToProps = {
  selectedItem: Item;
};
const mapStateToProps = ({ selectedItem }: StateToProps) => ({
  selectedItem,
});

export default connect(mapStateToProps)(Display);
