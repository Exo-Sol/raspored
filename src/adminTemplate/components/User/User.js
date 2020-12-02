import React from "react";
import "../../../App.css";

const User = ({ user }) => {
  return (
    <>
      <button
        className="btn"
        style={{
          borderRadius: "50%",
        }}
      >
        <img
          className="avatarImg"
          src={user.avatar_url}
          alt={user.login}
          style={{ width: "45px", borderRadius: "50%", cursor: "pointer" }}
        ></img>
      </button>
      <li
        style={{
          listStyleType: "none",
          paddingBottom: "15px",
        }}
      >
        {user.login}
      </li>
    </>
  );
};

export default User;
