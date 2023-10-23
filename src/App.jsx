import { createBrowserRouter, Outlet } from "react-router-dom";
import "@stripe/stripe-js"; //stripe library for user authentication

//======== NAVBAR & PAGES ========
import { Navbar } from "./components/Navbar/Navbar";
//DASHBOARD, LOGIN, SIGNUP PAGE
import { Dashboard } from "./Routes/Dashboard/Dashboard";
import { Login } from "./Routes/Login/Login";
import { ForgotPassword } from "./Routes/Login/component/ForgotPassword";
import { SignUp } from "./Routes/Register/SignUp";
import { Pricing } from "./Routes/Pricing/Pricing";
import { Success } from "./Routes/Payment/Success";
//HOME, SEARCH, WATCH PAGE
import { Home } from "./Routes/Home/Home";
import { SearchPage } from "./Routes/Search/SearchPage";
import { WatchPage } from "./Routes/Watch/WatchPage";
//USER-CHANNEL PAGE
import { User } from "./Routes/Profile/User";
import { Profile_Home } from "./Routes/Profile/components/Profile_Home";
import { Profile_Contents } from "./Routes/Profile/components/Profile_Contents";
import { Profile_Playlist } from "./Routes/Profile/components/Profile_Playlist";
import { Profile_Downloads } from "./Routes/Profile/components/Profile_Downloads";
import { Profile_About } from "./Routes/Profile/components/Profile_About";
//PROTECTED ROUTE FOR LIMITED ACCESSING OF PAGES
import { ProtectedRoute } from "./Routes/ProtectedRoute/ProtectedRoute";

//======== CONTEXT PROVIDER ========
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";

//USER-CHANNEL PAGE
import { History } from "./Routes/Feed/History";

//create an app layout that will be the parent router of our pages
//this is for the context hooks and so that the navigation bar will be present in all pages
//context use here are AuthProvider for the user authentication and DataProvider for the global data
const AppLayout = () => (
  <>
    <AuthProvider>
      <DataProvider>
        <Navbar />
        <Outlet />
      </DataProvider>
    </AuthProvider>
  </>
);

//create a browser router with the pages as the children of the app layout
export const AppRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/login",
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
        ],
      },
      {
        path: "/signup",
        children: [
          {
            path: "/signup",
            element: <SignUp />,
          },
          {
            path: "pricing",
            element: <Pricing />,
          },
          {
            path: "success",
            element: <Success />,
          },
        ],
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/feed/history",
        element: (
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        ),
      },
      {
        path: "/search",
        element: (
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/watch",
        element: (
          <ProtectedRoute>
            <WatchPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile/:id",
        children: [
          {
            path: "/profile/:id",
            element: (
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            ),
            children: [
              {
                path: "home",
                element: <Profile_Home />,
              },
              {
                path: "contents",
                element: <Profile_Contents />,
              },
              {
                path: "playlist",
                element: <Profile_Playlist />,
              },
              {
                path: "downloads",
                element: <Profile_Downloads />,
              },
              {
                path: "about",
                element: <Profile_About />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
