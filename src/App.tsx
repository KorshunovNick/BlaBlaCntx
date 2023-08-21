import "./App.css";
import { UserProvider } from "./providers/UserProvider";
import UserItem from "./components/UserItem/UserItem";
import SearchUser from "./components/SearchUser/SearchUser";
import { PhotoProviders } from "./providers/PhotosProviders";
import Photos from "./components/Photos/Photos";
import PostProvider from "./providers/PostProvider";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <>
      <PostProvider>
        <Posts />
      </PostProvider>
      <UserProvider>
        <SearchUser />
        <UserItem />
      </UserProvider>
      <PhotoProviders>
        <Photos />
      </PhotoProviders>
    </>
  );
}

export default App;
