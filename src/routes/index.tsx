import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../layouts/Main";
import Modal from "../components/Modal";
import Landing from "../pages/Landing";
import Page404 from "../pages/Page404"
import useModal from "../hooks/useModal";

type RouteType = {
  path: string;
  component: React.FC<any>;
};

type Routes = {
  [key: string]: RouteType;
};

const mainRoutes: Routes = {
  landing: {
    path: "/",
    component: Landing,
  },
};

const configureRoutes = (Layout: React.FC, routes: Routes) => {
  return Object.values(routes).map(({ component: Component, path }, index) => (
    <Route
      key={index}
      path={path}
      exact
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  ));
};

const Routes = () => {
  const [{ show }, setShow] = useModal("login");
  return (
    <Router>
      <Switch>
        {configureRoutes(Main, mainRoutes)}
        <Route render={() => <Page404 />} />
      </Switch>
      <Modal show={show} setShow={setShow} title="Login/Signup">
        <div>Something Modal</div>
      </Modal>
    </Router>
  );
};

export default Routes;
