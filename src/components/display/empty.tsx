import React from "react";
import { Container, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import GreyPotion from "icons/greyPotion";

const EmptyMessage = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "24px",
  lineHeight: "36px",
  textAlign: "center",
  color: "rgba(0, 0, 0, 0.38)",
});

const StyledGreyPotion = styled(GreyPotion)({
  marginBottom: "24px",
});

export const Empty: React.FC = () => (
  <Container
    style={{
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <StyledGreyPotion />
    <EmptyMessage variant="h4">
      Select or create an item from the sidebar
    </EmptyMessage>
  </Container>
);
