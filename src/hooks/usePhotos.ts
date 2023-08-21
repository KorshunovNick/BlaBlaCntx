import { useContext } from "react";
import { PhotoContext } from "../providers/PhotosProviders";
import { IPhoto } from "../types";

type usePhotoReturn =
  | { photos: IPhoto[]; isLoading: false }
  | { photos: null; isLoading: true };
export const usePhotos = () => {
  const { photos } = useContext(PhotoContext);
  return { photos, isLoading: photos===null } as usePhotoReturn
};
