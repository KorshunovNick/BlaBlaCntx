import { useState } from "react";
import { IPost } from "../types";

export const containerHeight = 600;
export const heightPost = 50;

export const usePagination = (posts: IPost[]) => {
  const [range, setRange] = useState(0);
  const defaultCountElements = Math.floor(containerHeight / heightPost);
  const pagination = [
    ...Array(
      Math.ceil(posts?.length / Math.floor(containerHeight / heightPost))
    ).keys(),
  ].map((e) => e + 1);

  const postsToRender = posts.slice(
    defaultCountElements * range,
    defaultCountElements * (range + 1)
  );
  return { range, setRange, pagination, postsToRender };
};
