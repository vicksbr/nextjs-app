import React, { useState } from "react";
import { Autocomplete, Box, TextField } from "@material-ui/core";

import { FieldLabel } from "components/display/styles";
import type { WindowData } from "types";

import { FieldsBox, SearchBoardsIcon } from "./styles";

type WindowSearchProps = {
  initialValues?: {
    username: string;
    board: string;
    window: WindowData;
  };
  disabled?: boolean;
  getBoards: (username: string) => Promise<string[]>;
  getWindows: (board: string | null) => Promise<WindowData[]>;
  onSelectWindow: () => void;
};
const WindowSearch: React.FC<WindowSearchProps> = ({
  initialValues,
  disabled = false,
  getBoards,
  getWindows,
  onSelectWindow,
}) => {
  const [username, setUsername] = useState(initialValues?.username || "");
  const [boards, setBoards] = useState<string[]>([]);
  const [board, setBoard] = useState<string | null>(initialValues?.board || null);
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [window, setWindow] = useState<WindowData | null>(initialValues?.window || null);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleGetBoards = (username: string) => {
    getBoards(username)
      .then((result) => setBoards(result))
      .catch(() => setBoards([]));
  };

  const handleBoardChange = (
    _: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setBoard(value);
    getWindows(value)
      .then((result) => setWindows(result))
      .catch(() => setWindows([]));
  };

  const handleWindowChange = (
    _: React.SyntheticEvent<Element, Event>,
    value: WindowData | null
  ) => {
    setWindow(value);
    onSelectWindow();
  };

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
              <SearchBoardsIcon onClick={() => handleGetBoards(username)} />
            ),
          }}
        />
        <Autocomplete
          disabled={disabled}
          value={board}
          onChange={handleBoardChange}
          options={boards}
          renderInput={(params) => <TextField label="board" {...params} />}
          getOptionLabel={(option) => option as string}
        />
        <Autocomplete
          disabled={disabled}
          value={window}
          onChange={handleWindowChange}
          options={windows}
          renderInput={(params) => <TextField label="window" {...params} />}
          getOptionLabel={(option: WindowData) => option.name}
        />
      </FieldsBox>
    </Box>
  );
};

export default WindowSearch;
