import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useModal from "../hooks/useModal";
import { logout } from "../redux/actions/account";

const Container = styled.div`
  width: 260px;
  padding: ${(props) => props.theme.spacing(2.5)}px;
  > * {
    margin-bottom: ${({ theme: { spacing } }) => spacing(1)}px;
  }
`;

const Authenticated = ({ name }: { name?: string }) => {
  const dispatch = useDispatch();
  const onClickLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      {name && <div>{`Hello, ${name}!`}</div>}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={onClickLogout}
      >
        Logout
      </Button>
    </>
  );
};

const Unauthenticated = () => {
  const [, setShowModal] = useModal("signin");
  const onClickButton = (type: string) => () => {
    setShowModal(true, { type });
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={onClickButton("signin")}
      >
        Signin
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={onClickButton("signup")}
      >
        Signup
      </Button>
    </>
  );
};

const Sidebar = () => {
  const { isLoggedIn, name } = useSelector((state) => {
    return { isLoggedIn: Boolean(state.account), name: state.account?.name };
  });

  return (
    <Container>
      {isLoggedIn ? <Authenticated name={name} /> : <Unauthenticated />}
    </Container>
  );
};

export default Sidebar;
