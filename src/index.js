import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase, { auth } from "./firebase.js";
import { Layout } from "antd";
import { StyledLink } from "./styles/styled";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

const { Header } = Layout;

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.logOutUser = this.logOutUser.bind(this);
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        });
      }
    });
  }

  logOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then((window.location = "/"));
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Header
            style={{
              textAlign: "right",
              marginBottom: "50px",
              padding: "0 25px"
            }}
          >
            {!this.state.user && (
              <div>
                <StyledLink to="/login">Login</StyledLink>
                <StyledLink to="/register">Register</StyledLink>
              </div>
            )}
            {this.state.user && (
              <StyledLink href="#!" onClick={this.logOutUser}>
                Logout
              </StyledLink>
            )}
          </Header>

          <Switch>
            <Route
              path="/"
              exact
              render={() => <Home user={this.state.user} />}
            />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));
