import React from "react";
import "../../../App.css";
import User from "./User";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <div className="userList">
      <h3 id="workerTitle">Workers</h3>
      {users.map((user) => (
        <ul key={user.id}>
          <User user={user} />
        </ul>
      ))}
    </div>
  );
};

export default UserList;
