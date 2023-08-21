import { useContext } from "react";
import { IUser } from "../types";
import { UserContext } from "../providers/UserProvider";

type useUserReturn =
  | { users: IUser[]; isLoading: false; changeUser: (id:string)=>unknown}
  | { users: null; isLoading: true; changeUser: (id:string)=>unknown };

export const useUsers = () => {
  const { users, changeUser } = useContext<{
    user: IUser | null;
    users: IUser[] | null;
    changeUser: (id: string) => unknown;
  }>(UserContext);

  return { users, isLoading: users === null, changeUser } as useUserReturn;
};
