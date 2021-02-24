import React from "react";
import type { Story } from "@storybook/react";

import TagForm from "./tagForm";

export default {
  title: "TagForm",
  component: TagForm,
  args: {
    initialValues: {
      name: "",
    },
  },
};

type TagFormProps = React.ComponentProps<typeof TagForm>;

const Template: Story<TagFormProps> = (args) => <TagForm {...args} />;

export const Default = Template.bind({});
export const InitialValue = Template.bind({});
InitialValue.args = {
  values: {
    name: "New Tag Name"
  }
};