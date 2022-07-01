/* eslint-disable camelcase */
import React from 'react';
import { getTasks } from '../services/api';
import TaskTitle from './TaskTitle';
import TaskMessage from './TaskMessage';
import TaskStatus from './TaskStatus';

class Tasklist extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks = async () => {
    this.setState({ tasks: await getTasks() });
  };

  render() {
    const { tasks } = this.state;
    const taskList = tasks.data;
    return (
      <section>
        <h1>Task List</h1>
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
                  <TaskTitle title={task_name} />
                  <TaskMessage message={task_message} />
                  <TaskStatus status={status_name} />
                  <h5>{task_date}</h5>
                </div>
              ),
            )
          ) : (
            <p>Nenhum Task foi encontrado</p>
          )}
        </section>
      </section>
    );
  }
}

export default Tasklist;
