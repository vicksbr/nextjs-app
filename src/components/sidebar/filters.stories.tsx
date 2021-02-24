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
    layouts: [
      {
        name: "US Markets",
        date: new Date(),
        id: "layout1",
      },
      {
        name: "Gamer Girl Board",
        date: new Date(),
        id: "layout2",
      },
      {
        name: "Food",
        date: new Date(),
        id: "layout3",
      },
      {
        name: "Lifestyle",
        date: new Date(),
        id: "layout4",
      },
      {
        name: "Mercado Financeiro BR",
        date: new Date(),
        id: "layout5",
      },
    ],
    filteredCategories: undefined,
    filteredTypes: undefined,
    filteredLayout: undefined,
  },
};

type FiltersProps = React.ComponentProps<typeof Filters>;

const Template: Story<FiltersProps> = (args) => {
  const [, updateArgs] = useArgs();
  const handleFiltersApply = ({ types, categories, layout }: any) => {
    updateArgs({
      filteredTypes: types,
      filteredCategories: categories,
      filteredLayout: layout,
    });
  };
  return (
    <Filters {...args} onSave={handleFiltersApply as FiltersProps["onSave"]} />
  );
};

export const Default = Template.bind({});
