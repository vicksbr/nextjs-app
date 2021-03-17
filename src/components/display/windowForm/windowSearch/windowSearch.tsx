import React, { useEffect, useState, useRef } from "react";
import { Autocomplete, Box, TextField, useTheme } from "@material-ui/core";

import { FieldLabel } from "components/display/styles";
import { Board, BaseWindow, CreatedFrom } from "types";

import { getUserId, getBoards, getBoardFromId, getWindowFromId } from "./utils";
import { FieldsBox, SearchBoardsIcon } from "./styles";

type WindowSearchProps = {
  clearSnapshot: () => void;
  initialValues?: CreatedFrom;
  disabled?: boolean;
  onSelectWindow: (
    username: string,
    board: Board,
    window: BaseWindow,
    date?: number
  ) => void;
};
const WindowSearch: React.FC<WindowSearchProps> = ({
  clearSnapshot,
  initialValues,
  disabled = false,
  onSelectWindow,
}) => {
  const [loadingBoards, setLoadingBoards] = useState(false);
  const [username, setUsername] = useState("");
  const [boards, setBoards] = useState<Board[]>([]);
  const [board, setBoard] = useState<Board | null>(null);
  const [windows, setWindows] = useState<BaseWindow[]>([]);
  const [window, setWindow] = useState<BaseWindow | null>(null);

  const theme = useTheme();

  const clearFields = () => {
    setBoard(null);
    setBoards([]);
    setWindow(null);
    setWindows([]);
    clearSnapshot();
  };

  useEffect(() => {
    if (initialValues) {
      setUsername(initialValues.username);
      setLoadingBoards(true);
      clearFields();
      getUserId(initialValues.username)
        .then((userId) =>
          getBoards(userId)
            .then((boards) => {
              setBoards(boards);
              const selectedBoard = getBoardFromId(initialValues.board, boards);
              if (selectedBoard) {
                setBoard(selectedBoard);
                setWindows(selectedBoard.windows);
                const selectedWindow = getWindowFromId(
                  initialValues.window,
                  selectedBoard.windows
                );
                if (selectedWindow) {
                  setWindow(selectedWindow);
                  onSelectWindow(
                    initialValues.username,
                    selectedBoard,
                    selectedWindow,
                    initialValues.snapshot_date
                  );
                }
              }
              setLoadingBoards(false);
            })
            .catch(() => setLoadingBoards(false))
        )
        .catch(() => setLoadingBoards(false));
    }
  }, [initialValues]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleGetBoards = (username: string) => {
    setLoadingBoards(true);
    clearFields();
    getUserId(username)
      .then((userId) => {
        getBoards(userId)
          .then((boards) => {
            setBoards(boards);
            boardsInput.current?.focus();
            setLoadingBoards(false);
          })
          .catch(() => {
            setLoadingBoards(false);
          });
      })
      .catch(() => {
        setLoadingBoards(false);
      });
  };

  const handleBoardChange = (
    _: React.SyntheticEvent<Element, Event>,
    value: Board | null
  ) => {
    setBoard(value);
    setWindow(null);
    setWindows(value?.windows || []);
    windowsInput.current?.focus();
  };

  const handleWindowChange = (
    _: React.SyntheticEvent<Element, Event>,
    value: BaseWindow | null
  ) => {
    setWindow(value);
    onSelectWindow(username, board as Board, value as BaseWindow);
  };

  const boardsInput = useRef<any>();
  const windowsInput = useRef<any>();

  return (
    <Box>
      <FieldLabel>Window Search</FieldLabel>
      <FieldsBox>
        <TextField
          disabled={disabled}
          value={username}
          onChange={handleUsernameChange}
          label="username"
          InputProps={{
            endAdornment: (
              <SearchBoardsIcon
                htmlColor={
                  loadingBoards
                    ? theme.palette.grey[400]
                    : theme.palette.grey[700]
                }
                onClick={() => handleGetBoards(username)}
              />
            ),
          }}
        />
        <Autocomplete
          disabled={disabled}
          value={board}
          onChange={handleBoardChange}
          options={boards}
          renderInput={(params) => (
            <TextField inputRef={boardsInput} label="board" {...params} />
          )}
          getOptionLabel={(option) => option.name}
          getOptionSelected={(option, value) => option.id === value.id}
          openOnFocus={true}
        />
        <Autocomplete
          disabled={disabled}
          value={window}
          onChange={handleWindowChange}
          options={windows}
          renderInput={(params) => (
            <TextField inputRef={windowsInput} label="window" {...params} />
          )}
          getOptionLabel={(option) => option.name}
          getOptionSelected={(option, value) => option.id === value.id}
          openOnFocus={true}
        />
      </FieldsBox>
    </Box>
  );
};

export default WindowSearch;
