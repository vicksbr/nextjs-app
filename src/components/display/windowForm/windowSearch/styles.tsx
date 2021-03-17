import { Box, styled } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";

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

const SearchBoardsIcon = styled(CachedIcon)({
  cursor: "pointer",
});

export { FieldsBox, SearchBoardsIcon };
