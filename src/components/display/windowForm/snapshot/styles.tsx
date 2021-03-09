import { Box, Button, styled, Typography } from "@material-ui/core";
import { Edit, Cached } from "@material-ui/icons";

const SnapshotContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[400]}`,
  padding: "12px 12px 9px 16px",
  minHeight: "124px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

const WindowInfoContainer = styled(Box)({
  marginBottom: "15px",
});

const WindowInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[900],
  lineHeight: "24px",
}));

const WindowId = styled(Typography)(({ theme }) => ({
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
});

const ChangeWindowButton = styled(Button)({
  fontSize: "12px",
  marginRight: "17px",
});

const iconsSize = {
  width: "15px",
  height: "15px",
};

const EditIcon = styled(Edit)({
  ...iconsSize,
});

const UpdateButton = styled(Button)({
  fontSize: "12px",
});

const UpdateIcon = styled(Cached)({
  ...iconsSize,
});

export {
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
};
