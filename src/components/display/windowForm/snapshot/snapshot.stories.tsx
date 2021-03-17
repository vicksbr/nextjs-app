import React from "react";
import type { Story } from "@storybook/react";

import Snapshot from "./snapshot";

export default {
  title: "Snapshot",
  component: Snapshot,
};

type SnapshotProps = React.ComponentProps<typeof Snapshot>;

const Template: Story<SnapshotProps> = (args) => <Snapshot {...args} />;

export const NoWindowSelected = Template.bind({});

export const CreatingWindow = Template.bind({});
CreatingWindow.args = {
  window: {
    name: "World News",
    window_type: "flux",
    id: "window1",
  },
  board: {
    name: "Gaming",
    id: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
    windows: [
      {
        name: "League of Legends",
        id: "2d52b358-dab4-4665-b734-e9f4a40a56a1",
        window_type: "chart",
      },
      {
        name: "Dota 2",
        id: "2d52b358-dab4-4665-b734-e9f4a40a56a2",
        window_type: "flux",
      },
    ],
  },
};

export const EditingWindow = Template.bind({});
EditingWindow.args = {
  window: {
    name: "World News",
    window_type: "flux",
    id: "window1",
  },
  board: {
    name: "Gaming",
    id: "2d52b358-dab4-4665-b734-e9f4a40a56a0",
    windows: [
      {
        name: "League of Legends",
        id: "2d52b358-dab4-4665-b734-e9f4a40a56a1",
        window_type: "chart",
      },
      {
        name: "Dota 2",
        id: "2d52b358-dab4-4665-b734-e9f4a40a56a2",
        window_type: "flux",
      },
    ],
  },
  date: new Date().getTime(),
};
