import { usePhotos } from "../../hooks/usePhotos";
import { useFixedSizeList } from "../../hooks/useVirtualize";
import Photo from "./Photo";
import {
  useCallback,
  useRef,
  useState,
} from "react";


const itemHeight = 150;
const containerHeight = 600;

const Photos = () => {
  const { photos, isLoading } = usePhotos();
  if (isLoading) return <h2>Loading...</h2>;

  const [listItems, setListItems] = useState(photos);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const { virtualItems, totalHeight } = useFixedSizeList({
    itemHeight: itemHeight,
    itemsCount: listItems?.length,
    listHeight: containerHeight,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  });

  return (
    <div
      ref={scrollElementRef}
      style={{
        height: containerHeight,
        width: "60vw",
        overflow: "auto",
        border: "1px solid lightgrey",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ height: totalHeight }}>
        {virtualItems.map((virtualItem) => {
          const item = listItems[virtualItem.index]!;
          return (
            <Photo
              virtualItem={virtualItem}
              itemHeight={itemHeight}
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Photos;
