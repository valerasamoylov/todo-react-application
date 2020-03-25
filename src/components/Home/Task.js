import React, { Component } from "react";
import {
  TaskTodo,
  CheckTodo,
  DeleteTodo,
  ChangeTodo
} from "../../styles/styled";
export class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: props.task,
      editMode: false,
      title: props.task.title
    };

    this.parentDelete = props.delete;
  }

  deleteTask(e) {
    this.parentDelete(this.state.task.id);
  }

  toogleTaskIsChecked(e) {
    var newTask = {
      ...this.state.task,
      isDone: !this.state.task.isDone
    };

    this.setState({
      task: newTask
    });
  }

  changeTitle(e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  saveTitle(e) {
    if (e.key === "Enter" && !e.currentTarget.value === !"undefined") {
      const newTitle = e.currentTarget.value;

      var task = {
        ...this.state.task
      };
      task.title = newTitle;
      this.setState({
        editMode: false
      });
    }
  }

  goToEditMode() {
    this.setState({
      editMode: true
    });
  }

  render() {
    var { isDone } = this.state.task;
    var { title } = this.state;

    var showTask = "";
    if (this.state.editMode) {
      showTask = (
        <ChangeTodo
          value={title}
          onChange={this.changeTitle.bind(this)}
          onKeyPress={this.saveTitle.bind(this)}
        />
      );
    } else {
      showTask = (
        <span onDoubleClick={this.goToEditMode.bind(this)}>{title}</span>
      );
    }
    return (
      <TaskTodo
        key={this.state.task.title}
        className={isDone ? "done" : TaskTodo}
      >
        <CheckTodo
          type="checkbox"
          defaultChecked={isDone}
          onClick={this.toogleTaskIsChecked.bind(this)}
        />
        {showTask}
        <DeleteTodo onClick={this.deleteTask.bind(this)}>x</DeleteTodo>
      </TaskTodo>
    );
  }
}
export default Task;
