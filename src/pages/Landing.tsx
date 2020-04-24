import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import useModal from "../hooks/useModal";
import { logout } from "../redux/actions/account";

const Container = styled.div`
  padding: ${({ theme: { spacing } }) => spacing(2)}px;

  > * {
    margin-bottom: ${({ theme: { spacing } }) => spacing(2)}px;
  }
`;

const Landing = () => {
  const [, setShowModal] = useModal("signin");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => Boolean(state.account));
  const onClickButton = (type: string) => () => {
    setShowModal(true, { type });
  };
  const onClickLogout = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <h2>Landing Page</h2>
      {isLoggedIn ? (
        <Button
          variant="contained"
          color="primary"
          onClick={onClickLogout}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={onClickButton("signin")}
        >
          Signin
        </Button>
      )}
    </Container>
  );
};

export default Landing;
