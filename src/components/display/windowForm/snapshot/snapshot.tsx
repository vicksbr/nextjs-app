import React from "react";
import { Box, useTheme } from "@material-ui/core";

import { FieldLabel } from "components/display/styles";
import { typeIconsMap } from "icons";
import { formatDate } from "utils/date";
import type { WindowData } from "types";

import {
  SnapshotContainer,
  WindowInfoContainer,
  WindowInfo,
  WindowId,
  SnapshotDate,
  ButtonsContainer,
  ChangeWindowButton,
  EditIcon,
  UpdateButton,
  UpdateIcon,
} from "./styles";

const noWindowMessage = "No Window Selected";

type SnapshotProps = {
  window?: WindowData;
  board?: string;
  snapshotDate?: Date;
  onChangeWindow: () => void;
  onUpdate: () => void;
};
const Snapshot: React.FC<SnapshotProps> = ({
  window = null,
  board = null,
  snapshotDate,
  onChangeWindow,
  onUpdate,
}) => {
  const boardInfo = board ? `(${board})` : "";
  const windowInfo = window ? `${window.name} ${boardInfo}` : noWindowMessage;
  const theme = useTheme();
  return (
    <Box>
      <FieldLabel>Snapshot Preview</FieldLabel>
      <SnapshotContainer>
        <WindowInfoContainer>
          <WindowInfo variant="subtitle2">{windowInfo}</WindowInfo>
          {window && <WindowId>{window.id}</WindowId>}
          {snapshotDate && (
            <SnapshotDate>
              Window State at {formatDate(snapshotDate)}
            </SnapshotDate>
          )}
        </WindowInfoContainer>
        {window &&
          typeIconsMap({
            htmlColor: theme.palette.grey[500],
          })[window.type]}
        {snapshotDate && (
          <ButtonsContainer>
            <ChangeWindowButton
              onClick={onChangeWindow}
              startIcon={<EditIcon />}
            >
              change window
            </ChangeWindowButton>
            <UpdateButton onClick={onUpdate} startIcon={<UpdateIcon />}>
              update
            </UpdateButton>
          </ButtonsContainer>
        )}
      </SnapshotContainer>
    </Box>
  );
};

export default Snapshot;
