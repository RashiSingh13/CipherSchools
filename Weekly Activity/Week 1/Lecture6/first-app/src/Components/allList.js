import React from "react";
import UserDetails from "./UserDetails";
const allList = () => {
  let allUsers = [
    {
      name: "Rashi",
      email: "abs@gmail.com",
      phone: "3879452",
    },
    {
      name: "Rash",
      email: "abc@gmail.com",
      phone: "3846542",
    },
    {
      name: "Rahi",
      email: "abd@gmail.com",
      phone: "3497504",
    },
  ];

  let array = allUsers.map((user, index) => (
    <UserDetails key={index} user={user} />
  ));
  return <div>{array}</div>;
};
export default allList;
