import React from "react";
import type { Story } from "@storybook/react";
import { useArgs } from '@storybook/client-api';

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
  const [, updateArgs] = useArgs();
  return <MainMenu {...args} setSelectedView={(view) => updateArgs({
    selectedView: view
  })}/>;
};

export const Default = Template.bind({});
