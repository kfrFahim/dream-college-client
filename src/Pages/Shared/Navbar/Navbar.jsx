import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import avatarImg from "../../../assets/avatar/placeholder.jpg";
import logo from "../../../assets/logo/logo.png";
import Container from "../../../Componentss/Container";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // const { user, logOut } = useContext(AuthContext);


  // const handleLogOut = () => {
  //   logOut();
  // };

  return (
    <div className="fixed w-full z-10">
      <Container>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/colleges">Colleges</Link>
                </li>
                <li>
                <Link to="/admission">Admission</Link>
                </li>
                <li>
                <Link to="/mycollege">My College</Link>
                </li>
               
              </ul>
            </div>
            <Link className="hidden md:block" to="/">
              <div className="flex items-center cursor-pointer">
                {" "}
                <img width="50" height="50" src={logo} alt="" />
                <p className="font-medium">Dream College</p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                {" "}
                <Link to="/colleges">Colleges</Link>{" "}
              </li>
              <li tabIndex={1}>
                {" "}
                <Link to="/admission">Admission</Link>{" "}
              </li>
              <li>
                <Link to="/mycollege">My College</Link>
                </li>

            </ul>
          </div>
         
        </div>
      </Container>
    </div>
  );
};

export default Navbar;