import React from "react";
import { navLinks } from "../constant";
import { hamburger } from "../assets/icons";
import { Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Input,
} from "@material-tailwind/react";

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full">
      <nav className=" w-full flex bg-black/30    ">
        <div className=" w-full flex p-4  rounded-2xl justify-between items-center max-container ">
          <div className="flex justify-between items-center lg-max:hidden">
            <div className="flex  items-start gap-[45px] max-lg:hidden text-white   ">
              {navLinks.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.href}
                  className={({ isActive }) => {
                    return (
                      "font-marcellus text-[18px] rounded-2xl px-3 py-2 no-underline" +
                      (isActive ? " text-white bg-gray-700" : "bg-gray-500")
                    );
                    // console.log(item.href + " " + isActive);
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <a
            href="/"
            className=" items-center justify-center flex text-white font-marcellus tracking-[0.5rem] sm:mr-[10rem] text-2xl font-extrabold "
          >
            GAMEHUB
          </a>

          <Link to="/register" className="lg-max:hidden">
            <Button>Login</Button>
          </Link>

          <div className="px-2 hidden lg-max:block">
            <Menu>
              <MenuHandler>
                <img
                  src={hamburger}
                  alt=""
                  width={25}
                  height={25}
                  className="invert object-contain"
                />
              </MenuHandler>
              <MenuList className="outline-none  ">
                <Input
                  label="Search"
                  containerProps={{
                    className: "mb-4",
                  }}
                />
                {navLinks.map((item) => (
                  <NavLink
                    to={item.href}
                    key={item.href}
                    className={({ isActive }) => {
                      return (
                        "font-marcellus rounded-xl text-[18px] p-2 flex flex-col mt-2 outline-none  " +
                        (isActive ? " text-white bg-gray-700" : "")
                      );
                      // console.log(item.href + " " + isActive);
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}

                <NavLink
                  className="bg-black flex items-center justify-center font-marcellus rounded-xl p-2 text-[18px] text-white mt-2"
                  to="/register"
                >
                  Sign Up
                </NavLink>
              </MenuList>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
