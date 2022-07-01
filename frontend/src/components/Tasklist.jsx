/* eslint-disable camelcase */
import React from 'react';
import {
  getTasks, deleteTask, createTask, editTask,
} from '../services/api';
import TaskTitle from './TaskTitle';
import TaskMessage from './TaskMessage';
import TaskStatus from './TaskStatus';

class Tasklist extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTitle: '',
      newMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  getTasks = async () => {
    this.setState({ tasks: [] });
    this.setState({ tasks: await getTasks() });
  };

  addTask = async () => {
    const { newTitle, newMessage } = this.state;
    await createTask(newTitle, newMessage);
    this.setState({ newTitle: '', newMessage: '' });
    await this.getTasks();
  };

  delTask = async (id) => {
    await deleteTask(id);
    await this.getTasks();
  };

  edit = async (id) => {
    const { newTitle, newMessage } = this.state;
    await editTask(id, newTitle, newMessage);
    await this.getTasks();
    this.setState({ newTitle: '', newMessage: '' });
  };

  render() {
    const {
      tasks, newTitle, newMessage,
    } = this.state;
    const taskList = tasks.data;
    return (
      <main>
        <h1>Task List</h1>
        <form>
          <label htmlFor="newTitle">
            Titulo:
            <input
              type="text"
              value={newTitle}
              name="newTitle"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="newMessage">
            Mensagem:
            <input
              type="text"
              value={newMessage}
              name="newMessage"
              onChange={this.handleChange}
            />
          </label>
          <button
            type="button"
            onClick={this.addTask}
          >
            Create
          </button>
        </form>
        <section>
          {taskList !== undefined ? (
            taskList.map(
              ({
                task_id,
                task_name,
                task_message,
                task_date,
                status_name,
              }) => (
                <div key={task_id}>
                  <div>
                    <TaskTitle title={task_name} />
                    <TaskStatus status={status_name} />
                  </div>
                  <TaskMessage message={task_message} />
                  <div>
                    <h5>{task_date}</h5>
                    <button
                      type="button"
                      onClick={async () => this.delTask(task_id)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      onClick={async () => this.edit(task_id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ),
            )
          ) : (
            <p>Nenhum Task foi encontrado</p>
          )}
        </section>
      </main>
    );
  }
}

export default Tasklist;
