import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Theme from "./context/MuiTheme.js";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "./views/Layout.js";
import Dashboard from "./views/Dashboard.js";
import Clientes from "./views/Clientes.js";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/clientes">
              <Clientes />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
