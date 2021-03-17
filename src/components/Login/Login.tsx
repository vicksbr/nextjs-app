import React from "react";
import {
  StyledButton,
  StyledPotion,
  StyledTextField,
  Background,
  FormContainer,
  LogoContainer,
  LoginContainer,
  ViewContainer,
} from "./style";
import TextLogo from "icons/textLogo";

import Alert from "@material-ui/core/Alert";

const LoginForm: React.FC<{
  isLogin: boolean;
  errorMessage: string;
  onSubmit: (event: React.FormEvent<HTMLDivElement>) => void;
}> = ({ errorMessage, onSubmit }) => (
  <ViewContainer>
    <Background />
    <LoginContainer>
      <LogoContainer>
        <StyledPotion />
        <TextLogo />
      </LogoContainer>
      <FormContainer component="form" onSubmit={onSubmit}>
        <StyledTextField
          required
          label="Username"
          name="username"
          variant="outlined"
        />
        <StyledTextField
          required
          label="Password"
          name="password"
          variant="outlined"
          InputProps={{ type: "password" }}
        />
        <StyledButton type="submit" variant="contained">
          Login
        </StyledButton>

        {errorMessage && <Alert severity="warning">{errorMessage}</Alert>}
      </FormContainer>
    </LoginContainer>
  </ViewContainer>
);

export default LoginForm;
