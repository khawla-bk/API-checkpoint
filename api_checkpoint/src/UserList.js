import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const userUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(userUsers.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="projects-container">
      {users.map((user) => (
        <ul className="project-card" key={user.id}>
          <div>
            <li>
              {" "}
              <h4> PROFILE </h4>{" "}
            </li>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email} </p>
            <p>Phone Number: {user.phone} </p>
            <p>Website: {user.website} </p>
          </div>
          <div>
            <li>
              {" "}
              <h4> ADDRESS </h4>{" "}
            </li>
            <p> street: {user.address.street} </p>
            <p> city: {user.address.city} </p>
            <p> zipcode: {user.address.zipcode} </p>
          </div>

          <div>
            {" "}
            <li>
              {" "}
              <h4> COMPANY </h4>{" "}
            </li>
            <p> Name: {user.company.name} </p>
            <p> Motto :{user.company.catchPhrase} </p>
            <p>
              {" "}
              bs: {user.company.bs} <hr />{" "}
            </p>{" "}
            <br />
          </div>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
