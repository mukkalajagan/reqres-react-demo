import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosWithUseEffectHook() {
  const [users, setUsers] = useState([]);
  const [people, setPeople] = useState([]);
  //const [test, setTest] = useState([]);
  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get(
  //         "https://api.github.com/search/users?q=mukkala"
  //       );
  //       const usersDataResult = await response.data.items;
  //       setUsers([...usersDataResult]);
  //       console.log(usersDataResult);
  //     }
  //     fetchData();
  //   }, []);

  useEffect(() => {
    axios
      .get("https://api.github.com/search/users?q=mukkala")
      .then(response => {
        setUsers([...response.data.items]);
      });
  }, []);

  useEffect(() => {
    let ar = [];
    users.map(user => ar.push(user.url));
    console.log(`This is new array data with urls ${ar}`);
    setPeople([...ar]);
  }, [users]);

  useEffect(() => {
    console.log(`This is people data ${people}`);
  }, [people]);

  //   useEffect(() => {
  //     axios
  //       .get("https://api.github.com/search/users?q=mukkala")
  //         .then(response => {
  //             setUsers([...response.data.items]);
  //             users.map(user => console.log(user.url))
  //         return axios.get(""); // using response.data
  //       })
  //       .then(response => {
  //         console.log("Response", response);
  //       });
  //   }, []);

  return (
    <div>
      {users &&
        users.map(user => {
          return (
            <div key={user.id} className="card-columns sidebySide">
              <img
                alt={user.name}
                src={user.avatar_url}
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">
                  {user.name} {user.bio}
                </h4>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default AxiosWithUseEffectHook;
