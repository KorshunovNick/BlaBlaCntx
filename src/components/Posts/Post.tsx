import { FC } from "react";
import { IPost } from "../../types";

interface PostProps extends IPost {
  heightPost: number;
}

const Post: FC<PostProps> = ({ heightPost, id, title }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "7% 80%",
        height: heightPost,
      }}
    >
      <div className="number">{id}</div>
      <div style={{ textAlign: "start" }}>{title}</div>
    </div>
  );
};

export default Post;
