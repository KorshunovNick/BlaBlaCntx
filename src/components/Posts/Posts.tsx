import { useState } from "react";
import usePosts from "../../hooks/usePosts";
import { Spinner } from "@chakra-ui/react";
import Post from "./Post";
import "./Posts.css";
const containerHeight = 600;
const heightPost = 50;

const Posts = () => {
  const { posts, isLoading } = usePosts();
  if (isLoading) return <Spinner height={"100px"} width={"100px"}></Spinner>;
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

  console.log(pagination);

  return (
    <div style={{background:'linear-gradient(45deg,rgba(0, 128, 0, 0.775),lightgreen)',padding: '20px',borderRadius:'8px'}}>
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
             range===index  ? "pagination-btn-change" : "pagination-btn"
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
