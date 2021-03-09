import { Box, styled } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const FieldsBox = styled(Box)({
  display: "grid",
  gap: "14px",
  gridTemplateAreas: `
    'username board'
    'window window'
  `,
  gridTemplateColumns: "1fr 1fr",
  "& > *:last-child": {
    gridArea: "window",
  },
});

const SearchBoardsIcon = styled(SendIcon)({
  cursor: "pointer",
});

export { FieldsBox, SearchBoardsIcon };
