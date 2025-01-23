import { FaMedium } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const token1 = localStorage.getItem("access_token");
  const token2 = localStorage.getItem("get_token");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const [isHamburger, setHamburger] = useState(false);
  const handleHamburger = () => {
    setHamburger(!isHamburger);
  };

  return (
    <nav className="fixed z-30 flex justify-center w-full my-5">
      <div>
        <div className="flex items-center gap-20 p-5 shadow-xl w-fit rounded-xl bg-slate-100">
          <div className="block text-4xl text-blue-500 md:hidden">
            <button onClick={handleHamburger} data-testid="hamburger-button">
              <GiHamburgerMenu />
            </button>
          </div>
          <Link to={"/"}>
            <FaMedium
              className="text-4xl text-blue-500 rounded-xl"
              data-testid="medium-logo"
            />
          </Link>
          <div className="hidden md:block">
            <ul className="flex justify-center font-semibold gap-7">
              <Link to={"/"} className="nav-link" data-testid="home-link">
                <li className="hover:text-blue-500">Home</li>
              </Link>
              <Link
                to={"/member"}
                className="nav-link"
                data-testid="members-link"
              >
                <li className="hover:text-blue-500">Members</li>
              </Link>
            </ul>
          </div>

          <div className="flex justify-end">
            {token1 || token2 ? (
              <Button
                title="Logout"
                p="px-4"
                hiddenL="hidden"
                bg="bg-white"
                onClick={handleLogout}
                data-testid="logout-button"
              />
            ) : (
              <Link to={"/login"}>
                <Button
                  title="Login"
                  p="px-4"
                  hiddenL="hidden"
                  bg="bg-white"
                  data-testid="login-button"
                />
              </Link>
            )}
          </div>
        </div>
        <div
          className={`${
            isHamburger ? "block" : "hidden"
          } md:hidden duration-300`}
          data-testid="mobile-menu"
        >
          <ul className="flex flex-col justify-start gap-3 px-5 py-3 mt-5 font-semibold shadow-xl bg-slate-100 rounded-xl">
            <Link to={"/"} data-testid="home-link">
              <li className="hover:text-blue-500">Home</li>
            </Link>
            <Link to={"/member"} data-testid="members-link">
              <li className="hover:text-blue-500">Members</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
