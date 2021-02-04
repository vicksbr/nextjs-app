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
    },
    {
      name: "US Financial Blogs",
      date: new Date(),
      type: "Flux",
    },
    {
      name: "Graphic Design",
      date: new Date(),
      type: "Flux",
    },
    {
      name: "Currencies",
      date: new Date(),
      type: "Quotes Table",
    },
    {
      name: "Ibovespa",
      date: new Date(),
      type: "Quotes Table",
    },
    {
      name: "Game News and Entertainment",
      date: new Date(),
      type: "Flux",
    },
    {
      name: "USD BRL",
      date: new Date(),
      type: "Chart",
    },
    {
      name: "US Federal Reserve",
      date: new Date(),
      type: "Chart",
    },
    {
      name: "Agro Commodities BR",
      date: new Date(),
      type: "Flux",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
    },
  ],
  layouts: [
    {
      name: "US Markets",
      date: new Date(),
    },
    {
      name: "Gamer Girl Board",
      date: new Date(),
    },
    {
      name: "Food",
      date: new Date(),
    },
    {
      name: "Lifestyle",
      date: new Date(),
    },
    {
      name: "Mercado Financeiro BR",
      date: new Date(),
    },
  ],
  categories: [
    {
      name: "Business",
      date: new Date(),
    },
    {
      name: "Finances",
      date: new Date(),
    },
  ],
  tags: [
    {
      name: "Bitcoin",
      date: new Date(),
    },
    {
      name: "Blockchain",
      date: new Date(),
    },
    {
      name: "Cryptocoin",
      date: new Date(),
    },
    {
      name: "Business",
      date: new Date(),
    },
    {
      name: "Entrepreneurship",
      date: new Date(),
    },
    {
      name: "Finances",
      date: new Date(),
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
