import React from "react";
import { UserProfile } from "./main";
import type { User } from "./User";

const UserProfile2 = ({ user }: { user: User }) => {
    return React.createElement(
      "div",
      {
        id: "user_" + user.id,
        title: user.name,
        className: "user-profile",
      },
      React.createElement(
        "p",
        {
          style: { color: user.color },
        },
        user.pet
          ? `${user.name} has a ${user.pet.name}`
          : `${user.name} has no pet`
      )
    );
  };
  
  const UserList2 = ({ users }: { users: User[] }) =>
    React.createElement(
      "ul",
      {},
      users.map((user) =>
        React.createElement(
          "li",
          {
            key: user.id,
          },
          // UserProfile({ user }) // call before render, send result
          React.createElement(UserProfile, { user }) // send Function, call it later
        )
      )
    );
  