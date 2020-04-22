import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import useModal from "../hooks/useModal";

const Container = styled.div`
  width: 260px;
  padding: ${(props) => props.theme.spacing(2.5)}px;
  > * {
    margin-bottom: ${({ theme: { spacing } }) => spacing(1)}px;
  }
`;

const Sidebar = () => {
  const [, setShowModal] = useModal("login");
  const onClickButton = (type: string) => () => {
    setShowModal(true, { type });
  };
  return (
    <Container>
      <div>
        Sidebar
      </div>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={onClickButton('signin')}
      >
        Login
      </Button>
    </Container>
  );
};

export default Sidebar;
