import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components"

import useModal from "../hooks/useModal";

const Container = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(2)}px;

  > * {
    margin-bottom: ${({ theme: { spacing } }) => spacing(2)}px;
  }
`

const Landing = () => {
  const [, setShowModal] = useModal("login");
  const onClickButton = (type: string) => () => {
    setShowModal(true, { type });
  };
  return (
    <Container>
      <h2>Landing Page</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={onClickButton("signin")}
      >
        Login
      </Button>
    </Container>
  );
};

export default Landing;
