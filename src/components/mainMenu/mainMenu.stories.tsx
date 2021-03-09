import React from "react";
import type { Story } from "@storybook/react";

import MainMenu from "./mainMenu";

export default {
  title: "MainMenu",
  component: MainMenu,
  args: {
    selectedView: null,
  },
};

type MainMenuProps = React.ComponentProps<typeof MainMenu>;

const Template: Story<MainMenuProps> = (args) => {
  return <MainMenu {...args} />;
};

export const Default = Template.bind({});
