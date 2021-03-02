import React from "react";
import type { Story } from "@storybook/react";

import WindowForm from "./windowForm";

import { itemsData } from "mockedData";

export default {
  title: "WindowForm",
  component: WindowForm,
  args: {
    availableTags: itemsData.tags,
    availableCategories: itemsData.categories,
    availableLayouts: itemsData.layouts,
  },
};

type WindowFormProps = React.ComponentProps<typeof WindowForm>;

const Template: Story<WindowFormProps> = (args) => <WindowForm {...args} />;

export const Default = Template.bind({});

export const InitialValue = Template.bind({});
InitialValue.args = {
  initialValues: {
    name: "string",
    last_update: new Date(),
    description: "",
    thumbnail: "string",
    tags: [itemsData.tags[0], itemsData.tags[1]],
    category: itemsData.categories[0],
    layouts: [
      { ...itemsData.layouts[0], rank: 10 },
      { ...itemsData.layouts[1], rank: 2 },
    ],
    active: true,
    featured: false,
    type: "flux",
    id: "string",
    created_from: {
      username: "string",
      board: "string",
      window: "string",
    },
  },
};
