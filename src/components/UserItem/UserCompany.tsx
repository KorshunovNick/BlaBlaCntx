import { FC } from "react";
import { IUser } from "../../types";

type userCompanyProps = IUser["company"];

const UserCompany: FC<userCompanyProps> = ({ bs, catchPhrase, name }) => {
  return (
    <div style={{ textAlign: "left" }}>
      <h3>Company</h3>
      <p>{bs}</p>
      <p>{catchPhrase}</p>
      <p>{name}</p>
    </div>
  );
};

export default UserCompany;
