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
        <p data-testid="message">{data.message}</p>
      </form>
    );
  }
}

export default TaskMessage;
