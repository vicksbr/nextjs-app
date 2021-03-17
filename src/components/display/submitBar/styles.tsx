import { Box, Button, styled, Typography } from "@material-ui/core";

const SubmitBarContainer = styled(Box)({
  padding: "22px 78px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0px -4px 15px rgba(89, 89, 144, 0.15)",
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "calc(100% - 416px)",
  background: "#fff",
});

const DeleteButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  padding: "6px",
  minWidth: "unset",
  "&:hover": {
    backgroundColor: theme.palette.error.dark,
  },
}));

const LastModifiedDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  fontSize: "14px",
  margin: "0 12px 0 auto",
}));

const DeleteModal = styled(Box)({
  padding: "24px 24px 8px 24px",
  maxWidth: "280px",
});

const ConfirmationMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  fontSize: "14px",
  lineHeight: "20px",
  marginBottom: "7px",
}));

const ItemName = styled((props) => <Typography {...props} component="span" />)(
  ({ theme }) => ({
    color: theme.palette.grey[900],
    fontWeight: 500,
    fontSize: "inherit",
    lineHeight: "inherit",
  })
);

const ButtonsContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

const ConfirmButton = styled(Button)({
  marginLeft: "5px",
});

export {
  SubmitBarContainer,
  DeleteButton,
  LastModifiedDate,
  DeleteModal,
  ConfirmationMessage,
  ItemName,
  ButtonsContainer,
  ConfirmButton,
};
