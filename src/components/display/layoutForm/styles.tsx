import { Box, FormControl, FormControlLabel } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const FormGrid = styled(Box)({
  display: "grid",
  gridTemplateAreas: `
    'name name thumbnail'
    'status rank thumbnail'`,
  gap: "25px",
  gridTemplateColumns: "calc(26% - 12.5px) calc(26% - 12.5px) calc(48% - 25px)",
});

const NameField = styled(FormControl)({
  gridArea: "name",
});

const ThumbnailField = styled(FormControl)({
  gridArea: "thumbnail",
});

const StatusField = styled(FormControl)({
  gridArea: "status",
});

const StatusControlLabel = styled(FormControlLabel)(({ theme }) => ({
  justifyContent: "space-between",
  borderBottom: `1px solid ${theme.palette.grey.A200}`,
  padding: "8.5px 0",
}));

const RankField = styled(FormControl)({
  gridArea: "rank",
});

export {
  FormGrid,
  NameField,
  ThumbnailField,
  StatusField,
  StatusControlLabel,
  RankField,
};
