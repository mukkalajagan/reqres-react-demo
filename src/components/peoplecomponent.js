import React, { useState, useEffect } from "react";

const PeopleComponent = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(response => response.data)
      .then(_peopleResult => setPeople(_peopleResult.data));
  });

  return (
    <div>
      {people &&
        people.map(user => {
          return (
            <div className="card-columns" key={user.id}>
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
};

export default PeopleComponent;
