import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { TheLayout } from "./containers";
import "./scss/style.scss";
import { Login, Page404, Page500, Register } from "./views/Pages";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) =>
              Object.keys(user).length === 0 ? (
                <Login {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/register"
            name="Register Page"
            render={(props) =>
              Object.keys(user).length === 0 ? (
                <Register {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={(props) => <Page500 {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) =>
              Object.keys(user).length !== 0 ? (
                <TheLayout {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
