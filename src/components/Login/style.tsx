import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Potion from "icons/potion";
import BackgroundLogin from "icons/backgroundLogin";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItens: "center",
  padding: "40px",
});

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: "28px 59px 28px 39px",
  backgroundColor: theme.palette.grey[200],
}));

const LoginContainer = styled(Container)(({ theme }) => ({
  maxWidth: "400px",
  maxHeight: "421px",
  borderRadius: "16px",
  padding: "0",
  overflow: "hidden",
  boxShadow: "0px 4px 15px rgba(20, 20, 22, 0.35)",
  backgroundColor: theme.palette.background.default,
}));

const Background = styled(BackgroundLogin)({
  position: "absolute",
  height: "100%",
  width: "100%",
  left: 0,
  bottom: 0,
  zIndex: -1,
});

const StyledPotion = styled(Potion)({
  marginRight: "12px",
});

const StyledTextField = styled(TextField)({
  marginBottom: "27px",
});

const ViewContainer = styled(Container)({
  height: "100vh",
  width: "100vw",
  maxWidth: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export {
  StyledButton,
  StyledPotion,
  StyledTextField,
  Background,
  FormContainer,
  LogoContainer,
  LoginContainer,
  ViewContainer,
};
