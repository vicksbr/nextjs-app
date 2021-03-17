import React from "react";
import type { Story } from "@storybook/react";

import WindowSearch from ".";

export default {
  title: "WindowSearch",
  component: WindowSearch,
};

type WindowSearchProps = React.ComponentProps<typeof WindowSearch>;

const Template: Story<WindowSearchProps> = (args) => {
  return <WindowSearch {...args} />;
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  initialValues: {
    username: "fred",
    board: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
    window: "1d52b358-dab4-4665-b734-e9f4a40a56a0",
    snapshot_date: new Date().getTime(),
  },
  disabled: true,
};
