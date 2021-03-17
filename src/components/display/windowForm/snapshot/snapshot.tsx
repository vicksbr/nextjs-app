import React from "react";
import { Box, useTheme } from "@material-ui/core";

import { FieldLabel } from "components/display/styles";
import { typeIconsMap } from "icons";
import { formatDate } from "utils/date";
import type { BaseWindow, Board } from "types";

import {
  SnapshotContainer,
  WindowInfoContainer,
  WindowInfo,
  Username,
  SnapshotDate,
  ButtonsContainer,
  UpdateButton,
  UpdateIcon,
} from "./styles";

const noWindowMessage = "No Window Selected";

type SnapshotProps = {
  window?: BaseWindow;
  board?: Board;
  username?: string;
  date?: number;
  onUpdate: () => void;
};
const Snapshot: React.FC<SnapshotProps> = ({
  window,
  board,
  username,
  date,
  onUpdate,
}) => {
  const boardInfo = board ? `(${board.name})` : "";
  const windowInfo = window ? `${window.name} ${boardInfo}` : noWindowMessage;
  const theme = useTheme();
  return (
    <Box>
      <FieldLabel>Snapshot Preview</FieldLabel>
      <SnapshotContainer>
        <WindowInfoContainer>
          <WindowInfo variant="subtitle2">{windowInfo}</WindowInfo>
          {window && <Username>{username}</Username>}
          {date && (
            <SnapshotDate>
              Window State at {formatDate(date)}
            </SnapshotDate>
          )}
        </WindowInfoContainer>
        {window &&
          typeIconsMap({
            htmlColor: theme.palette.grey[500],
          })[window.window_type]}
        {date && (
          <ButtonsContainer>
            <UpdateButton onClick={onUpdate} startIcon={<UpdateIcon />}>
              take snapshot
            </UpdateButton>
          </ButtonsContainer>
        )}
      </SnapshotContainer>
    </Box>
  );
};

export default Snapshot;
