import React from "react";
import { navLinks } from "../constant";
import {hamburger} from "../assets/icons";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
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
        <div  className=" w-full flex p-4  rounded-2xl justify-between items-center max-container ">
          <div className="flex justify-between items-center lg-max:hidden">
            <ul className="flex  items-start gap-[45px] max-lg:hidden text-white   ">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    <Typography className="font-marcellus text-[18px]">
                      {item.label}
                    </Typography>
                  </a>
                </li>
              ))}
            </ul>
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
              <MenuList>
                <Input
                  label="Search"
                  containerProps={{
                    className: "mb-4",
                  }}
                />
                {navLinks.map((item) => (
                  <MenuItem className="cursor-pointer">
                    <a href={item.href}>{item.label}</a>
                  </MenuItem>
                ))}
                <Link to="/register">
                  <MenuItem className="bg-black text-white">Sign Up</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
