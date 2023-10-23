//import link
import { Link } from "react-router-dom";
//import components
import { Searchbar } from "./components/Searchbar";
// import logo and icons
import { AiOutlineMenu } from "react-icons/ai";
import { Sidebar } from "./components/Sidebar";
import { useDataContext } from "../../context/DataContext";
import { useAuthContext } from "../../context/AuthContext";
import { UserSidebar } from "./components/UserSidebar";
import { AiFillBell } from "react-icons/ai";

export const Navbar = () => {
  const {
    showSidebar,
    sidebar,
    userSidebar,
    showUserSidebar,
    isActive,
    location,
  } = useDataContext();
  const { user } = useAuthContext();

  return (
    <>
      <nav
        className={`${
          isActive || sidebar ? "bg-black" : "bg-transparent"
        } w-full py-[1rem] px-[1rem]  text-white font-fig
        flex justify-between items-center fixed z-[100]`}
      >
        <div className="flex gap-5">
          <button
            className="bg-black/50 px-[.6rem] rounded-md"
            onClick={() => {
              location !== "/" &&
              location !== "/login" &&
              location !== "/login/forgot-password" &&
              location !== "/signup" &&
              location !== "/signup/pricing" &&
              location !== "/signup/payment"
                ? showSidebar()
                : "disabled";
            }}
          >
            <AiOutlineMenu size="1.5rem" />
          </button>
          <Link to={user ? "/home" : "/"}>
            <img src="/assets/nukt_logo.png" alt="" className="w-[40px]" />
          </Link>
        </div>
        {location === "/login" ||
        location === "/login/forgot-password" ||
        location === "/signup" ||
        location === "/signup/pricing" ||
        location === "/signup/success" ||
        location === "/" ? (
          ""
        ) : (
          <Searchbar />
        )}
        <div className="flex items-center gap-2">
          {location === "/login" ||
          location === "/login/forgot-password" ||
          location === "/signup" ||
          location === "/signup/pricing" ||
          location === "/signup/success" ||
          location === "/" ? (
            <Link to="/login" className="bg-black/50 rounded-md p-[.5rem]">
              <span className="uppercase text-[.9rem]">sign in</span>
            </Link>
          ) : (
            <>
              <AiFillBell size={30} />
              <button
                onClick={showUserSidebar}
                className="bg-black/50 rounded-full border-[1px]"
              >
                <img
                  src={`${user ? user.photoURL : "https://i.pravatar.cc/35"}`}
                  alt=""
                  className="rounded-full w-[35px]"
                />
              </button>
              <UserSidebar showUserSidebar={userSidebar} />
            </>
          )}
        </div>
      </nav>
      <Sidebar showSidebar={sidebar} />
    </>
  );
};
