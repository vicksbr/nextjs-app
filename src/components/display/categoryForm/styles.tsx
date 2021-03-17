import { Box, styled } from "@material-ui/core";

const FormGrid = styled(Box)({
  display: "grid",
  gap: "25px",
  gridTemplateColumns: "calc(52% - 12.5px) calc(48% - 12.5px)",
  paddingBottom: 80,
});

export { FormGrid };
