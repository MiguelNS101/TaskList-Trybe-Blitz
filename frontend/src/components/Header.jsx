import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <h1>Task list</h1>
      </header>
    );
  }
}

export default Header;
