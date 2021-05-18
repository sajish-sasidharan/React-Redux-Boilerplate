import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./web.history";
import Layout from "./ui/Layout";
import Sample from "./ui/container/Sample";

const PrivateRoute = ({ component: Component, authenticate, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticate ? (
        <Layout component={Component} {...rest} />
      ) : (
        <Redirect to={`${process.env.PUBLIC_URL}/logout`} />
      )
    }
  />
);

export default function App() {
  return (
    <Router history={history} basename="/dev">
      <div>
        <Switch>
          <PrivateRoute
            path={`${process.env.PUBLIC_URL}/`}
            title={"Boilerplate"}
            userRoles={[""]}
            component={Sample}
            authenticate={true}
            currentMenu="organization-list"
            dontShowHeader={false}
          />
        </Switch>
      </div>
    </Router>
  );
}
