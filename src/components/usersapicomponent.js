import React, { useState, useEffect } from "react";
import axios from "axios";

const ReqResUsersComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/mukkalajagan")
      .then(_users => {
        setUsers(_users.data);
      })
      .then(x => console.log(x));
  }, []);

  return (
    <div>
      {users &&
        users.map(user => {
          return (
            <div className="card-columns" key={user.id}>
              <img
                src={user.avatar_url}
                alt={user.name}
                className="card-img-top"
              />
              <div class="card-body">
                <h4 class="card-title">{user.name}</h4>
                <p class="card-text">{user.bio}</p>
                <a href={user.html_url} class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ReqResUsersComponent;
