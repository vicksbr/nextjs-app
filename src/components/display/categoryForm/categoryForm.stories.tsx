import React from "react";
import type { Story } from "@storybook/react";

import CategoryForm from "./categoryForm";

export default {
  title: "CategoryForm",
  component: CategoryForm,
  args: {
    formValues: {
      name: "",
    },
  },
};

type CategoryFormProps = React.ComponentProps<typeof CategoryForm>;

const Template: Story<CategoryFormProps> = (args) => <CategoryForm {...args} />;

export const Default = Template.bind({});
export const InitialValue = Template.bind({});
InitialValue.args = {
  formData: {
    name: "New Category Name",
    rank: 2,
  },
};
