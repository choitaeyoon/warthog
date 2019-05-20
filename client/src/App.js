import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from './store';
import HomePage from "./components/pages/HomePage";
import SignInPage from "./components/pages/SignInPage";
import RegisterPage from "./components/pages/RegisterPage";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#252C41"
    },
    secondary: {
      main: "#11cb5f"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store = {store}>
          <Router>
            <div className="App">
              <div className="container">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/signin" component={SignInPage} />
                <Route exact path="/register" component={RegisterPage} />
              </div>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
