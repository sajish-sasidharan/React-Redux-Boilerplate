
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Theme from "./theme/theme-default";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import GlobalStyles from "./styles/Styles";

function App(props) {
  const Component = props.component;
  const { title, userRoles, classes } = props;

  return (
    <MuiThemeProvider theme={Theme}>
      <div className={classes.root}>
        <Header title={title} />
        <div className={classes.container}>
          <Component />
        </div>
      </div>
    </MuiThemeProvider>
  );
}
export default withStyles(GlobalStyles(Theme), { withTheme: true })(App);
