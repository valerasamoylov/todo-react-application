import React, { Component } from "react";
import styled from "styled-components";
import Task from "./Task";
import FormAddTask from "./FormAddTask";

export class TaskList extends Component {
  constructor(props) {
    super(props);

    this.newIndex = 2;

    this.state = {
      tasks: [
        { id: 0, title: "buy potatoes", isDone: false },
        { id: 1, title: "call a friend", isDone: false }
      ]
    };
  }

  createNewTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  deleteTask(taskId) {
    const newTaskList = this.state.tasks.filter(t => {
      return t.id !== taskId;
    });

    this.setState({
      tasks: newTaskList
    });
  }

  render() {
    return (
      <div className="todolist">
        <FormAddTask onCreate={this.createNewTask.bind(this)} />
        <div className="tasks">
          {this.state.tasks.map((task, index) => {
            return (
              <Task
                key={task.id}
                task={task}
                delete={this.deleteTask.bind(this)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default TaskList;
