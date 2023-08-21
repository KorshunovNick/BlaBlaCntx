import { useUsers } from "../../hooks/useusers";
import './SearchUser.css'
import { Spinner } from '@chakra-ui/react'

const SearchUser = () => {
  const { users, isLoading, changeUser } = useUsers();

  if (isLoading) return <Spinner size='xl'/>

  return (
    <div>
        <h4>Change User</h4>
        <div className="select-wrapper">
      <select
        className="Select_Users"
        name="users"
        id="users"
        onChange={(e) => changeUser(e.target.value)}
      >
        {users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <div className="triangle"></div>
      </div>
    </div>
  );
};

export default SearchUser;
