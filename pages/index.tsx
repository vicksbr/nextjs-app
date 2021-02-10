import React from "react";

import MainGrid from "components/mainGrid";

import useUser from "../lib/useUser";
import Layout from "../src/components/Layout";

import type { CurationData } from "types";

const data: CurationData = {
  windows: [
    {
      name: "World News",
      date: new Date(),
      type: "Flux",
      id: "window1",
    },
    {
      name: "US Financial Blogs",
      date: new Date(),
      type: "Flux",
      id: "window2",
    },
    {
      name: "Graphic Design",
      date: new Date(),
      type: "Flux",
      id: "window3",
    },
    {
      name: "Currencies",
      date: new Date(),
      type: "Quotes Table",
      id: "window4",
    },
    {
      name: "Ibovespa",
      date: new Date(),
      type: "Quotes Table",
      id: "window5",
    },
    {
      name: "Game News and Entertainment",
      date: new Date(),
      type: "Flux",
      id: "window6",
    },
    {
      name: "USD BRL",
      date: new Date(),
      type: "Chart",
      id: "window7",
    },
    {
      name: "US Federal Reserve",
      date: new Date(),
      type: "Chart",
      id: "window8",
    },
    {
      name: "Agro Commodities BR",
      date: new Date(),
      type: "Flux",
      id: "window9",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window10",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window11",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window12",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window13",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window14",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window15",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window16",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window17",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window18",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window19",
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
  tags: [
    {
      name: "Bitcoin",
      date: new Date(),
      id: "tag1",
    },
    {
      name: "Blockchain",
      date: new Date(),
      id: "tag2",
    },
    {
      name: "Cryptocoin",
      date: new Date(),
      id: "tag3",
    },
    {
      name: "Business",
      date: new Date(),
      id: "tag4",
    },
    {
      name: "Entrepreneurship",
      date: new Date(),
      id: "tag5",
    },
    {
      name: "Finances",
      date: new Date(),
      id: "tag6",
    },
  ],
};
const App = () => {
  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn) {
    return <>loading...</>;
  }
  return (
    <Layout>
      <MainGrid data={data} />
    </Layout>
  );
};

export default App;
