import axios from "axios";
import { IUser } from "../types";

const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });
api.interceptors.request.use(
  (config) => new Promise((resolve) => setTimeout(() => resolve(config), 2800))
);

export const getUsers = async () =>
  await api.get<IUser[]>(`/users`).then((r) => r.data);

export const getUserById = async (id: string) =>
  await api.get<IUser>(`/users/${id}`).then((r) => r.data);

export const getPhotos = async () =>
  await api.get(`/photos`).then((r) => r.data);

export const getPosts = async () =>
  await api.get(`/posts`).then((r) => r.data);
