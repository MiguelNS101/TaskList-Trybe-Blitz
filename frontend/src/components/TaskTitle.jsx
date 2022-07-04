/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';

class TaskTitle extends React.Component {
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
        <h2 data-testid="title">{data.title}</h2>
      </form>
    );
  }
}

TaskTitle.propTypes = {
  match: propTypes.shape({
    params: propTypes.objectOf(propTypes.number),
  }),
}.isRequired;

export default TaskTitle;
