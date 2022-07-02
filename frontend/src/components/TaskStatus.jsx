/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { editStatus } from '../services/api';

class TaskStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props,
      status: this.props.status,
      statusList: this.props.statusList,
    };
  }

  componentDidMount() {
    this.setState({ statusList: this.props.statusList });
  }

  handleChange = async ({ value }, id) => {
    this.setState({ status: value });
    await editStatus(id, value);
  };

  render() {
    const { data, status, statusList } = this.state;
    return (
      <div>
        <select
          onChange={async ({ target }) => this.handleChange(target, data.id)}
          value={status}
          data-testid="status"
        >
          {statusList !== undefined ? (
            statusList.map(
              ({
                status_id,
                status_name,
              }) => (
                <option key={status_id} value={status_id}>{status_name}</option>
              ),
            )
          ) : (
            <option key="9999" value="err">Carregando</option>
          )}
        </select>
      </div>
    );
  }
}

TaskStatus.propTypes = {
  data: PropTypes.array,
  status: PropTypes.array,
}.isRequired;

export default TaskStatus;
