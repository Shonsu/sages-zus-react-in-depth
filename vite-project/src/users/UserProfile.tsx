import { useState } from "react";
import type { User } from "./User";

export const UserProfile = ({ user }: { user: User }) => {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="user-profile" id={"user_" + user.id} title={user.name}>
      <p style={{ color: user.color }}>
        {user.pet
          ? `${user.name} has a ${user.pet.name}`
          : `${user.name} has no pet`}
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>
    </div>
  );
};
