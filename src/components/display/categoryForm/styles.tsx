import { Box, styled } from "@material-ui/core";

const FormGrid = styled(Box)({
  display: "grid",
  gap: "25px",
  gridTemplateColumns: "calc(53% - 12.5px) calc(47% - 12.5px)",
});

export { FormGrid }