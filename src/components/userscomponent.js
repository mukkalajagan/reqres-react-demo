import React, { Component } from "react";

export class UsersComponent extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    fetch("https://reqres.in/api/users/")
      .then(response => response.json())
      .then(usersList => {
        console.log(usersList.data);
        this.setState({ users: usersList.data });
      });
  }
  render() {
    return (
      <div>
        {this.state.users.map(user => {
          return (
            <div className="card-columns sidebySide" key={user.id}>
              <img
                src={user.avatar}
                alt={user.first_name}
                className="card-img-top"
              />
              <div className="card-body side">
                <h4 className="card-title">
                  {user.first_name} {user.last_name}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UsersComponent;
