import React from "react";
import type { Story } from "@storybook/react";

import { itemsData } from "mockedData";

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
  return (
    <>
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
