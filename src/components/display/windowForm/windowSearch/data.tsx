import type { WindowData } from "types";

export const boards = ["board1", "board2", "board3", "board4", "board5"];
export const windows: WindowData[] = [
  {
    name: "World News",
    date: new Date(),
    type: "Flux",
    id: "window1",
    basePath: "windows",
  },
  {
    name: "US Financial Blogs",
    date: new Date(),
    type: "Flux",
    id: "window2",
    basePath: "windows",
  },
  {
    name: "Graphic Design",
    date: new Date(),
    type: "Flux",
    id: "window3",
    basePath: "windows",
  },
  {
    name: "Currencies",
    date: new Date(),
    type: "Quotes Table",
    id: "window4",
    basePath: "windows",
  },
  {
    name: "Ibovespa",
    date: new Date(),
    type: "Quotes Table",
    id: "window5",
    basePath: "windows",
  },
  {
    name: "Game News and Entertainment",
    date: new Date(),
    type: "Flux",
    id: "window6",
    basePath: "windows",
  },
  {
    name: "USD BRL",
    date: new Date(),
    type: "Chart",
    id: "window7",
    basePath: "windows",
  },
  {
    name: "US Federal Reserve",
    date: new Date(),
    type: "Chart",
    id: "window8",
    basePath: "windows",
  },
  {
    name: "Agro Commodities BR",
    date: new Date(),
    type: "Flux",
    id: "window9",
    basePath: "windows",
  },
  {
    name: "Petrobras",
    date: new Date(),
    type: "Twitter Search",
    id: "window10",
    basePath: "windows",
  },
  {
    name: "Petrobras",
    date: new Date(),
    type: "Twitter Search",
    id: "window11",
    basePath: "windows",
  },
  {
    name: "Petrobras",
    date: new Date(),
    type: "Twitter Search",
    id: "window12",
    basePath: "windows",
  },
];

const getBoards = (username: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      username.length > 2 ? resolve(boards) : reject();
    }, 1000);
  });
};

const getWindows = (board: string | null) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      board ? resolve(windows) : reject();
    }, 1000);
  });
};

export { getBoards, getWindows };
