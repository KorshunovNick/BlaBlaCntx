import {
  createContext,
  FC,
  ReactNode,
  useState,
  useMemo,
  useEffect,
} from "react";
import { IUser } from "../types";
import { getUserById, getUsers } from "../api/api";

export const UserContext = createContext<{
  user: IUser | null;
  users: IUser[] | null;
  changeUser: (id: string) => unknown;
}>({ user: null, users: null, changeUser: () => {} });

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [userId, setUserId] = useState("1");

  useEffect(() => {
    getUserById(userId).then(setUser);
  }, [userId]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const value = useMemo(
    () => ({
      user,
      users,
      changeUser: (id: string) => {
        setUserId(id);
      },
    }),
    [user, users]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
