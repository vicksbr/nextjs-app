import { Box, Button, styled, Typography } from "@material-ui/core";
import CenterFocusWeakIcon from "@material-ui/icons/CenterFocusWeak";

const SnapshotContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[400]}`,
  padding: "12px 12px 4px 16px",
  minHeight: "126px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

const WindowInfoContainer = styled(Box)({
  marginBottom: "0",
});

const WindowInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[900],
  lineHeight: "24px",
}));

const Username = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  lineHeight: "16px",
  color: theme.palette.grey[500],
  marginBottom: "8px",
}));

const SnapshotDate = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  lineHeight: "16px",
  color: theme.palette.grey[900],
}));

const ButtonsContainer = styled(Box)({
  flexBasis: "100%",
  textAlign: "right",
  alignSelf: "flex-end",
});

const iconsSize = {
  width: "15px",
  height: "15px",
};

const UpdateButton = styled(Button)({
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "1.1111px",
  display: "inline",
  color: "#005CB2",
});

const UpdateIcon = styled(CenterFocusWeakIcon)({
  ...iconsSize,
  verticalAlign: "sub",
});

export {
  SnapshotContainer,
  WindowInfoContainer,
  WindowInfo,
  Username,
  SnapshotDate,
  ButtonsContainer,
  UpdateButton,
  UpdateIcon,
};
