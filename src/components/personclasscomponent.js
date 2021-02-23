import React, { Component } from "react";

class Person extends Component {
  state = {
    firstName: "Jagan",
    lastName: "Mohan",
    age: 33,
    address: {
      city: "Bangalore",
      ad_state: "Karnataka",
      countr: "India",
    },
  };

  handleFirstnameChange = e => {
    this.setState({
      firstName: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="firstName">First Name</label>&nbsp;
        <input
          type="text"
          id="firstName"
          onChange={this.handleFirstnameChange}
          value={this.state.firstName}
        />{" "}
        <br />
        <label htmlFor="lastName">Last Name</label>&nbsp;
        <input type="text" id="lastName" value={this.state.lastName} /> <br />
        <label htmlFor="age">Age</label>&nbsp;
        <input type="number" id="age" defaultValue={this.state.age} /> <br />
        <br />
        {this.state.firstName}
      </div>
    );
  }
}

export default Person;
