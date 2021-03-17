import React from "react";
import type { Story } from "@storybook/react";

import SubmitBar from "./submitBar";

export default {
  title: "SubmitBar",
  component: SubmitBar,
  args: {
    itemName: "Game News and Entertainment",
  },
};

type SubmitBarProps = React.ComponentProps<typeof SubmitBar>;

const Template: Story<SubmitBarProps> = (args) => <SubmitBar {...args} />;

export const Default = Template.bind({});
export const WithModifiedDate = Template.bind({});
WithModifiedDate.args = {
  lastModified: new Date().getTime(),
};
