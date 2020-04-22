import React, { useState } from "react";
import styled from "styled-components";
import { CssBaseline, Drawer } from "@material-ui/core";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};
`;

const Main: React.FC = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Root>
      <CssBaseline />
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Sidebar />
      </Drawer>
      <AppContent>
        <Header onDrawerToggle={handleDrawerToggle} />
        <MainContent>{children}</MainContent>
        <Footer />
      </AppContent>
    </Root>
  );
};

export default Main;
