import Address from "./Adress";
import "./UserItem.css";
import UserCompany from "./UserCompany";
import { useUser } from "../../hooks/useUser";
import { Spinner } from '@chakra-ui/react'

const UserItem = () => {
  const { user, isLoading } = useUser();
  console.log(isLoading)
  if (isLoading) return <div> Loading...<Spinner size='lg'/></div>;

  return (
    <div
      className="user-wrapper"
      onClick={() => {
        console.log("CLICK");
      }}
    >
      <h2>
        <b>Name:</b> {user.name}
      </h2>
      <div className="info-wrapper">
        <p>
          <b>Username:</b> {user.username}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>Phone:</b> {user.phone}
        </p>
      </div>
      <UserCompany {...user.company} />
      <Address {...user.address} />
    </div>
  );
};

export default UserItem;
