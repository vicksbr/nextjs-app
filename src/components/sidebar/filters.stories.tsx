import React from "react";
import type { Story } from "@storybook/react";
import { useArgs } from "@storybook/client-api";

import Filters from "./filters";

export default {
  title: "Filters",
  component: Filters,
  args: {
    categories: [
      {
        name: "Business",
        date: new Date(),
        id: "category1",
      },
      {
        name: "Finances",
        date: new Date(),
        id: "category2",
      },
    ],
    filteredCategories: undefined,
    filteredTypes: undefined,
  },
};

type FiltersProps = React.ComponentProps<typeof Filters>;

const Template: Story<FiltersProps> = (args) => {
  const [, updateArgs] = useArgs();
  const handleFiltersApply = (types: any, categories: any) => {
    updateArgs({ filteredTypes: types, filteredCategories: categories });
  };
  return <Filters {...args} onSave={handleFiltersApply} />;
};

export const Default = Template.bind({});
