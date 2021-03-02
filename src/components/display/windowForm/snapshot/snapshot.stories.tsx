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
    last_update: new Date(),
    type: "flux",
    id: "window1",
    rank: [],
    basePath: '/windows',
  },
  board: "board1",
};

export const EditingWindow = Template.bind({});
EditingWindow.args = {
  window: {
    name: "World News",
    last_update: new Date(),
    type: "flux",
    id: "window1",
    rank: [],
    basePath: '/windows',
  },
  board: "board1",
  snapshotDate: new Date(),
};
