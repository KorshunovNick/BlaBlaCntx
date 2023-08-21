import { Skeleton } from "@mui/material";
import { Spinner } from "@chakra-ui/react";
import { containerHeight } from "../../hooks/usePagination";


const IsLoadingPosts = () => {
  return (
    <>
      <Spinner width={50} height={50} />
      <div
        style={{
          width: "60vw",
          padding: "20px",
          border: "2px solid green",
          height: containerHeight,
          marginTop: "80px",
        }}
      >
        {Array.from(Array(10).keys()).map(() => (
          <div style={{ display: "grid", gridTemplateColumns: "7% 80%" }}>
            <Skeleton
              variant="rectangular"
              height={50}
              style={{
                marginBottom: "20px",
                marginRight: "10px",
                borderRadius: "8px",
              }}
            />
            <Skeleton
              variant="rectangular"
              height={50}
              style={{ marginBottom: "20px" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default IsLoadingPosts;
