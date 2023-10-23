import { createBrowserRouter } from "react-router-dom";
import { ProfileNav } from "./ProfileNav";
import { Profile_Home } from "./Profile_Home";
import { Profile_Contents } from "./Profile_Contents";
import { Profile_Playlist } from "./Profile_Playlist";
import { Profile_Downloads } from "./Profile_Downloads";

const ProfileLayout = () => (
  <>
    <ProfileNav />
    <Outlet />
  </>
);

export const ProfileRouter = createBrowserRouter([
  {
    element: <ProfileLayout />,
    children: [
      {
        path: "/profile/:id/",
        element: <Profile_Home />,
      },
      {
        path: "/profile/:id/contents",
        element: <Profile_Contents />,
      },
      {
        path: "/profile/:id/playlist",
        element: <Profile_Playlist />,
      },
      {
        path: "/profile/:id/downloads",
        element: <Profile_Downloads />,
      },
      // add more child pages
    ],
  },
]);
