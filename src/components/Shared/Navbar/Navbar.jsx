import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import logo from "../../../assets/images/logo.png";
import { useEffect } from "react";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 mr-2 border-blue-600"
            : "text-gray-600 hover:text-blue-600 mr-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-contest"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : "text-gray-600 hover:text-blue-600"
        }
      >
        All Contest
      </NavLink>
    </>
  );
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="fixed w-full bg-white dark:bg-gray-400 z-10 shadow-sm">
      <div className="py-4">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="logo" height={"50"} width={"70"} />
            </Link>
            <div className="hidden md:block">{links}</div>

            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Dashboard
                        </Link>
                        <label className="toggle text-base-content mx-4">
                          <input
                            onChange={(e) => handleTheme(e.target.checked)}
                            defaultChecked={
                              localStorage.getItem("theme") === "dark"
                            }
                            type="checkbox"
                            value="synthwave"
                            className="theme-controller"
                          />

                          <svg
                            aria-label="sun"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <g
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2"
                              fill="none"
                              stroke="currentColor"
                            >
                              <circle cx="12" cy="12" r="4"></circle>
                              <path d="M12 2v2"></path>
                              <path d="M12 20v2"></path>
                              <path d="m4.93 4.93 1.41 1.41"></path>
                              <path d="m17.66 17.66 1.41 1.41"></path>
                              <path d="M2 12h2"></path>
                              <path d="M20 12h2"></path>
                              <path d="m6.34 17.66-1.41 1.41"></path>
                              <path d="m19.07 4.93-1.41 1.41"></path>
                            </g>
                          </svg>

                          <svg
                            aria-label="moon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <g
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </g>
                          </svg>
                        </label>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
