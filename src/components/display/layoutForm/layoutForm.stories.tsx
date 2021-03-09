import React from "react";
import type { Story } from "@storybook/react";

import LayoutForm from "./layoutForm";

export default {
  title: "LayoutForm",
  component: LayoutForm,
};

type LayoutFormProps = React.ComponentProps<typeof LayoutForm>;

const Template: Story<LayoutFormProps> = (args) => <LayoutForm {...args} />;

export const Default = Template.bind({});

export const InitialValues = Template.bind({});

InitialValues.args = {
  initialValues: {
    name: "My Layout",
    active: true,
    thumbnail: "https://i.picsum.photos/id/576/460/460.jpg?hmac=8thC52hIjsYc7aQZPim5ST-zfvb5pdEtkFn16hp3vqo",
    rank: 2,
  },
};
