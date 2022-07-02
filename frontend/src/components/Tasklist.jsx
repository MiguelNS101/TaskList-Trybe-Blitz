/* eslint-disable camelcase */
import React from 'react';
import {
  getTasks, deleteTask, createTask, editTask, getStatus,
} from '../services/api';
import TaskTitle from './TaskTitle';
import TaskMessage from './TaskMessage';
import TaskStatus from './TaskStatus';

class Tasklist extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      status: [],
      newTitle: '',
      newMessage: '',
      sortBy: 'task_id',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.edit = this.edit.bind(this);
    this.chooseSorting = this.chooseSorting.bind(this);
  }

  componentDidMount() {
    this.getTasks();
    this.getStatus();
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

  getStatus = async () => {
    this.setState({ status: [] });
    this.setState({ status: await getStatus() });
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

  handleSort = (a, b) => {
    const { sortBy } = this.state;
    if (sortBy === 'task_status_id') {
      return a[sortBy] - b[sortBy];
    }

    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0;
  };

  async chooseSorting(target) {
    this.setState({ sortBy: target.value });
    await this.getTasks();
  }

  render() {
    const {
      tasks, newTitle, newMessage, status, sortBy,
    } = this.state;
    const taskList = tasks.data;
    return (
      <main>
        <h1>Task List</h1>
        <form data-testid="createTask">
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
          <button type="button" onClick={this.addTask}>
            Create
          </button>
        </form>
        <div data-testid="sortTask">
          <label htmlFor="chooseSort">
            Choose Sorting method
            <select
              onChange={({ target }) => this.chooseSorting(target)}
              value={sortBy}
              name="chooseSort"
            >
              <option value="task_name">Ordem alfabetica</option>
              <option value="task_id">Data</option>
              <option value="task_status_id">Status</option>
            </select>
          </label>
        </div>
        <section data-testid="taskList">
          {taskList !== undefined ? (
            taskList.sort(this.handleSort).map(
              ({
                task_id,
                task_name,
                task_message,
                task_date,
                task_status_id,
              }) => (
                <div key={task_id}>
                  <div>
                    <TaskTitle title={task_name} />
                    <TaskStatus
                      status={task_status_id}
                      id={task_id}
                      statusList={status.data}
                    />
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
