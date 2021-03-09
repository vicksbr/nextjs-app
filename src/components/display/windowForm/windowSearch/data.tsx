import { itemsData } from "mockedData";

export const boards = ["board1", "board2", "board3", "board4", "board5"];
export const windows = itemsData.windows;

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
