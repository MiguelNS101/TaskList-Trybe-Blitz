import React from 'react';

class TaskStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <form>
        <h1>{data.status}</h1>
      </form>
    );
  }
}

export default TaskStatus;
