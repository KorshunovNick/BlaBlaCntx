import { useContext } from "react";
import { PostsContext } from "../providers/PostProvider";
import { IPost } from "../types";

type usePostsReturn =
  | { posts: null; isLoading: true }
  | { posts: IPost[]; isLoading: false };
const usePosts = () => {
  const { posts } = useContext(PostsContext);
  return { posts, isLoading: posts == null } as usePostsReturn;
};

export default usePosts;
