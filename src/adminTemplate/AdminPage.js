import "../App.css";
import React, { useState } from "react";
import UserList from "./components/User/UserList";
import DateNav from "./components/DateNav";
import HList from "../adminTemplate/components/hourSelector/HList";

const AdminPage = () => {
  const usersArray = [
    {
      id: 1,
      login: "Zoka",
      avatar_url: "https://avatars3.githubusercontent.com/u/25?v=4",
      site_admin: false,
    },
    {
      id: 2,
      login: "Lepi",
      avatar_url: "https://avatars2.githubusercontent.com/u/29?v=4",
      site_admin: false,
    },
    {
      id: 3,
      login: "Ban",
      avatar_url: "https://avatars2.githubusercontent.com/u/46?v=4",
      site_admin: false,
    },
    {
      id: 4,
      login: "Pero Biceps",
      avatar_url: "https://avatars3.githubusercontent.com/u/23?v=4",
      site_admin: false,
    },
    {
      id: 5,
      login: "Uzi",
      avatar_url: "https://avatars0.githubusercontent.com/u/6?v=4",
      site_admin: false,
    },
    {
      id: 6,
      login: "Sola",
      avatar_url: "https://avatars1.githubusercontent.com/u/17?v=4",
      site_admin: false,
    },
    {
      id: 7,
      login: "Muva",
      avatar_url: "https://avatars0.githubusercontent.com/u/18?v=4",
      site_admin: false,
    },
    {
      id: 8,
      login: "Belaja",
      avatar_url: "https://avatars0.githubusercontent.com/u/19?v=4",
      site_admin: false,
    },
    {
      id: 9,
      login: "Lafi",
      avatar_url: "https://avatars3.githubusercontent.com/u/20?v=4",
      site_admin: false,
    },
    {
      id: 10,
      login: "Manda",
      avatar_url: "https://avatars3.githubusercontent.com/u/21?v=4",
      site_admin: false,
    },
    {
      id: 11,
      login: "Lovre",
      avatar_url: "https://avatars3.githubusercontent.com/u/22?v=4",
      site_admin: false,
    },
  ];

  const [users, setUsers] = useState(usersArray);

  return (
    <div className="adminWrap">
      <UserList users={users} />
      <DateNav />
      <HList />
    </div>
  );
};

export default AdminPage;
