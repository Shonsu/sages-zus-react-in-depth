import type { User } from "./User";
import { UserProfile } from "./UserProfile";

export const UserList = ({ users }: { users: User[] }) => (
  <div>
    <ul>
      {users.map((user, index) => (
        // <li key={user.id}>{UserProfile({ user })}</li>
        // <li key={index}>
        <li key={user.id}>


          // root.GDZIE_TERAZ_JESTEM = tu.. // DIRTY!
          <UserProfile user={user} />
          // root.GDZIE_TERAZ_JESTEM = null
        </li>
      ))}
    </ul>
  </div>
);
