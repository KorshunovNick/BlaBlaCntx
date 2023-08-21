import {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getPosts } from "../api/api";
import { IPost } from "../types";

export const PostsContext = createContext<{
  posts: null | IPost[];
  changePosts: () => unknown;
}>({ posts: null, changePosts: () => {} });

const PostProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<null | IPost[]>(null);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);
  const value = useMemo(() => ({ posts, changePosts: () => {} }), [posts]);
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export default PostProvider;
