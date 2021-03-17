import { BaseWindow, Board } from "types";

export const getUserId = async (username: string) => {
  const response = await fetch(`/api/users?name=${username}`);
  const result = await response.json();
  return result[0].id;
};

export const getBoards = async (userId: string) => {
  const result = await fetch(`/api/users/${userId}/boards`);
  return await result.json();
};

export const getBoardFromId = (boardId: string, boards: Board[]) => {
  return boards.find((board) => board.id === boardId) || null;
};

export const getWindowFromId = (windowId: string, windows: BaseWindow[]) => {
  return windows.find((window) => window.id === windowId) || null;
};
