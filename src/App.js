import { Switch, Route } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { Redirect } from "react-router-dom";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/Authentication" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/Authentication/auth">
            <AuthPage />
          </Route>
        )}

        <Route path="/Authentication/profile">
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to="/Authentication/auth" />}
        </Route>

        <Route path="*">
          <Redirect to="/Authentication" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
