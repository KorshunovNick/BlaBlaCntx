import {
  useEffect,
  createContext,
  FC,
  ReactNode,
  useState,
  useMemo,
} from "react";
import { getPhotos } from "../api/api";
import { IPhoto } from "../types";

export const PhotoContext = createContext<{
  photos: IPhoto[] | null;
  changePhoto: () => unknown;
}>({
  photos: null,
  changePhoto: () => {},
});

export const PhotoProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = useState<IPhoto[] | null>(null);

  useEffect(() => {
    getPhotos().then(setPhotos);
  }, []);

  const value = useMemo(
    () => ({
      photos,
      changePhoto: () => {},
    }),
    [photos]
  );

  return (
    <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
  );
};
