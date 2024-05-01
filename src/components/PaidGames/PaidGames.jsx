import React, { useState } from "react";
import { products } from "../../constant";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-tailwind/react";

const PaidGames = () => {
  const [like, setLike] = useState("");
  const liked = () => {
    setLike("text-red-500");
  };
  return (
    <div className="">
      {products.map((item) => (
        <Link className="text-white w-full flex mt-4 items-center justify-between ">
          <div className=" flex items-center">
            <div className="relative">
              <img
                src={item.imgURL}
                alt=""
                className=" lg:w-[24rem] lg:h-[24rem]  size-[7rem] object-cover object-center rounded-2xl"
              />
              <span
                className={`absolute bottom-0 right-0 p-2 text-3xl ${like}`}
                onClick={liked}
              >
                ❤
              </span>
            </div>

          </div>
            <Typography
              color="white"
              className=" lg:text-3xl  font-[400] text-sm p-2 capitalize"
            >
              {item.label}
            </Typography>
          <Link to={`/games/${item.id}`}>
            <Button>GET</Button>
          </Link>
        </Link>
      ))}
    </div>
  );
};

export default PaidGames;
