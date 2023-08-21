import { FC } from "react";
import { IPhoto } from "../../types";

interface PhotoProps extends IPhoto {
  itemHeight: number;
  virtualItem: { index: number; offsetTop: number };
}

const Photo: FC<PhotoProps> = ({ id, url, title, itemHeight, virtualItem }) => {
  return (
    <div
      className={"photo-block ==" + id}
      style={{
        position: "absolute",
        top: 0,
        transform: `translateY(${virtualItem.offsetTop}px)`,
        height: itemHeight,
        padding: "6px 12px",
        width: "200px",
      }}
    >
      <h3>{id}</h3>
      <img src={url} alt="" height={itemHeight / 3} width='200px'/>
      <p>{title.slice(0, 10)}</p>
    </div>
  );
};

export default Photo;
