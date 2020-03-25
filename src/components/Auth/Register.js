import React from "react";
import firebase from "../../firebase.js";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import {
  Container,
  StyledInput,
  StyledButtonSubmit,
  ErrorMessage
} from "../../styles/styled";

const { Title } = Typography;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      error: null
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, username, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user
          .updateProfile({ displayName: username })
          .then(() => {
            this.props.history.push("/");
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { email, username, password, error } = this.state;
    return (
      <Container>
        <Title>Register your account</Title>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <form onSubmit={this.handleSubmit}>
          <label
            htmlFor="username"
            style={{ display: "block", textAlign: " left" }}
          >
            Username
          </label>
          <StyledInput
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={this.handleChange}
          />
          <label
            htmlFor="email"
            style={{ display: "block", textAlign: " left" }}
          >
            Email address
          </label>
          <StyledInput
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
          <label
            htmlFor="password"
            style={{ display: "block", textAlign: " left" }}
          >
            Choose a password
          </label>
          <StyledInput
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
          <StyledButtonSubmit children="Get Started" />
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </Container>
    );
  }
}

export default Register;
