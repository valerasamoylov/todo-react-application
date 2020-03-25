import React from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import { Typography } from "antd";
import {
  Container,
  StyledInput,
  StyledButtonSubmit,
  ErrorMessage
} from "../../styles/styled";

const { Title } = Typography;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <Container>
        <Title>Login</Title>
        <p className="intro-text">Login to access your account</p>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label
            htmlFor="email"
            style={{ display: "block", textAlign: " left" }}
          >
            Email address
          </label>
          <StyledInput
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
          <label
            htmlFor="password"
            style={{ display: "block", textAlign: " left" }}
          >
            Password
          </label>
          <StyledInput
            type="password"
            name="password"
            id="password"
            placeholer="password"
            value={password}
            onChange={this.handleChange}
          />
          <StyledButtonSubmit>Log in</StyledButtonSubmit>
          <p>
            Don't have an account yet? <Link to="/register">Register here</Link>
          </p>
        </form>
      </Container>
    );
  }
}

export default Login;
