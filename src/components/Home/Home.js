import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../styles/styled";
import { Typography } from "antd";
import { TaskList } from "./TaskList";
const { Title } = Typography;

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Title>Welcome to todo app!</Title>
        {this.props.user && (
          <div>
            <TaskList />
          </div>
        )}
        {!this.props.user && (
          <div>
            <p>
              <Link to="/login">Login</Link> or{" "}
              <Link to="/register">Register</Link> to do!
            </p>
          </div>
        )}
      </Container>
    );
  }
}

export default Home;
