import React from "react";
import type { Story } from "@storybook/react";
import { useDispatch } from "react-redux";

import { itemsData } from "mockedData";
import { selectView } from "store/actions";

import Sidebar from "./sidebar";

export default {
  title: "Sidebar",
  component: Sidebar,
  args: {
    data: itemsData,
  },
};

type FiltersProps = React.ComponentProps<typeof Sidebar>;

const Template: Story<FiltersProps> = (args) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button onClick={() => dispatch(selectView("windows"))}>Windows</button>
        <button onClick={() => dispatch(selectView("layouts"))}>Layouts</button>
        <button onClick={() => dispatch(selectView("categories"))}>
          Categories
        </button>
        <button onClick={() => dispatch(selectView("tags"))}> Tags</button>
      </div>
      <div
        style={{
          width: 328,
          height: "100vh",
        }}
      >
        <Sidebar {...args} />
      </div>
    </>
  );
};

export const Default = Template.bind({});
