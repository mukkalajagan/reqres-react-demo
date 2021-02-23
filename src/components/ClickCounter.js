import React, { Component } from "react";

class ClickCounter extends Component {
  state = {
    count: 0,
  };
  incrementCount = prevState => {
    this.setState({
      count: prevState + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={() => this.incrementCount(count)}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default ClickCounter;
