import React from "react";
import styled from "styled-components";
import {
  Grid,
  Hidden,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar,
  Button,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { blue, grey } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import useModal from "../hooks/useModal";

const theme = {
  color: "#333333",
  background: "#FFFFFF",
  search: {
    color: grey[800],
  },
  indicator: {
    background: blue[600],
  },
};

const AppBar = styled(MuiAppBar)`
  background: ${theme.background};
  color: ${theme.color};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const Logo = styled(Link)`
  display: flex;
  justify-self: center;
  img {
    height: 28px;
  }
`;

const IconButton: any = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

type Props = {
  onDrawerToggle?: () => void;
};

const Header: React.FC<Props> = ({ onDrawerToggle }) => {
  const [, setShowModal] = useModal("login");
  const onClickAccountButton = (type: string) => () => {
    setShowModal(true, { type });
  };
  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center" justify="center">
            <Grid item style={{ marginRight: "auto" }}>
              <Logo to="/">Logo</Logo>
            </Grid>
            <Hidden smDown>
              <Grid item style={{ marginLeft: "auto" }}>
                <Grid container alignItems="center" justify="center">
                  <Grid item style={{ marginRight: "16px" }}>
                    <Button onClick={onClickAccountButton("signin")}>
                      ログイン
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button onClick={onClickAccountButton("signup")}>
                      新規登録
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
