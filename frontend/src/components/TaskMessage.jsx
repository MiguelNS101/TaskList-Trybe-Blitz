import React from 'react';

class TaskMessage extends React.Component {
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
        <h1>{data.message}</h1>
      </form>
    );
  }
}

export default TaskMessage;
