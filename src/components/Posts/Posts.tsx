import usePosts from "../../hooks/usePosts";

import Post from "./Post";
import "./Posts.css";
import IsLoadingPosts from "./IsLoadingPosts";
import {
  containerHeight,
  heightPost,
  usePagination,
} from "../../hooks/usePagination";

const Posts = () => {
  const { posts, isLoading } = usePosts();
  if (isLoading) return <IsLoadingPosts />;

  const { range, setRange, pagination, postsToRender } = usePagination(posts);

  return (
    <div
      style={{
        background: "linear-gradient(45deg,rgba(0, 128, 0, 0.775),lightgreen)",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <div
        className="pagination"
        style={{
          marginBottom: "20px",
          width: "60vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {pagination.map((item, index) => (
          <div
            className={
              range === index ? "pagination-btn-change" : "pagination-btn"
            }
            style={{
              border: "1px solid black",
              padding: "4px 8px",
              width: "40px",
            }}
            key={index}
            onClick={() => {
              setRange(index);
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        className="containerPosts"
        style={{
          height: containerHeight,
          border: "2px solid rgba(0, 128, 0, 0.775)",
          padding: "10px",
        }}
      >
        {postsToRender?.map((post) => (
          <Post key={post.id} {...post} heightPost={heightPost} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
