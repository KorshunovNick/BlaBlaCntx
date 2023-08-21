import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { IUser } from "../types";

type useUserReturn = { user: IUser ; isLoading: false }
| { user: null; isLoading: true }

export const useUser = () => {
  const { user } = useContext(UserContext);
  return { user, isLoading: user === null } as useUserReturn;
};
