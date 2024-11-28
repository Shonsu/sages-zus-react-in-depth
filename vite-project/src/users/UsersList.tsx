import type { User } from "./User";
import { UserProfile } from "./UserProfile";

export const UserList = ({ users }: { users: User[] }) => (
  <div>
    <ul>
      {users.map((user) => (
        // <li key={user.id}>{UserProfile({ user })}</li>
        <li key={user.id}>
          <UserProfile user={user} />
        </li>
      ))}
    </ul>
  </div>
);
