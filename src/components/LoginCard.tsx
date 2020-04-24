import React, { useState } from "react";
import styled from "styled-components";
import {
  Tabs,
  Tab,
  TextField,
  Button,
  Divider,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { signup, signin } from "../redux/actions/account";
import useModal from "../hooks/useModal";

const Container = styled.div`
  > * {
    margin-bottom: ${({ theme: { spacing } }) => spacing(2)}px;
  }
`;

const FBButtonContainer = styled(Button)`
  background-color: #3b5998;
`;

const FBButton = ({ onClick = () => {} }) => {
  return (
    <FBButtonContainer
      variant="contained"
      color="primary"
      fullWidth
      startIcon={<Facebook />}
      onClick={onClick}
    >
      Signin with Facebook
    </FBButtonContainer>
  );
};

type SigninCardTypes = "signin" | "signup";

type SigninCardProps = {
  defaultType: SigninCardTypes;
};

const SigninCard: React.FC<SigninCardProps> = ({ defaultType = "signin" }) => {
  // 0 -> Signin
  // 1 -> Signup
  const [tabValue, setTabValue] = useState(defaultType === "signin" ? 0 : 1);
  const [, setShowModal] = useModal("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const onTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };
  const onClickPostButton = async () => {
    if (!email || !password) return;
    if (tabValue === 1 && !name) return;

    setLoading(true);
    tabValue === 0
      ? await dispatch(signin(email, password))
      : await dispatch(signup(email, password, name));
    dispatch(setShowModal(false));
    setLoading(true);
  };
  const onChangeName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };
  const onChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };

  const onClick = () => {
    return;
  };

  return (
    <Container>
      <Tabs
        value={tabValue}
        onChange={onTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        {/* Don't change the order signin and signup!! */}
        <Tab label="Signin" />
        <Tab label="Signup" />
      </Tabs>
      <FBButton onClick={onClick} />
      <FBButton onClick={onClick} />
      <Divider variant="middle" style={{ marginTop: 24, marginBottom: 24 }} />
      <Typography align="center">Or</Typography>
      {tabValue === 1 && (
        <TextField
          required
          label="Name"
          variant="outlined"
          autoComplete="name"
          fullWidth
          onChange={onChangeName}
        />
      )}
      <TextField
        required
        label="Email"
        variant="outlined"
        autoComplete="email"
        fullWidth
        onChange={onChangeEmail}
      />
      <TextField
        label="Password"
        required
        type="password"
        autoComplete="current-password"
        variant="filled"
        fullWidth
        onChange={onChangePassword}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        onClick={onClickPostButton}
      >
        {loading ? (
          <CircularProgress color="inherit" size={24} />
        ) : tabValue === 0 ? (
          "Signin"
        ) : (
          "Signup"
        )}
      </Button>
    </Container>
  );
};

export default SigninCard;
