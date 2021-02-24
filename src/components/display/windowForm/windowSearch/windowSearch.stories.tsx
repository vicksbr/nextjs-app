import React from "react";
import type { Story } from "@storybook/react";

import WindowSearch from ".";
import { boards, windows, getBoards, getWindows } from "./data";

export default {
  title: "WindowSearch",
  component: WindowSearch,
  args: {
    getBoards,
    getWindows,
  },
};

type WindowSearchProps = React.ComponentProps<typeof WindowSearch>;

const Template: Story<WindowSearchProps> = (args) => {
  return <WindowSearch {...args} />;
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  initialValues: {
    username: "granmagus",
    board: boards[0],
    window: windows[0],
  },
  disabled: true,
};
