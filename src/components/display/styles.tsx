import { styled } from "@material-ui/core/styles";
import { Container, FormLabel, Typography } from "@material-ui/core";

const DisplayContainer = styled(Container)({
  padding: "48px 78px",
});

export { DisplayContainer };

// Forms
const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: theme.palette.primary.main,
  fontWeight: "bold",
  lineHeight: "32px",
  marginBottom: "32px",
}));

const FieldLabel = styled(FormLabel)(({ theme }) => ({
  color: theme.palette.grey[900],
  fontSize: "14px",
  lineHeight: "24px",
  fontWeight: 500,
  marginBottom: "12px",
  display: "block",
}));

export { FormTitle, FieldLabel };
