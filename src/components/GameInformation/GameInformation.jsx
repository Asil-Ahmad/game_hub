import React, { useEffect } from "react";
import { useState } from "react";

import { Rating, Typography, Spinner, Button } from "@material-tailwind/react";

import { useGetGameQuery } from "../../services/RAWG";

import { Link, useParams } from "react-router-dom";

import ImageGallery from "../ImageGallery/ImageGallery";
import GameDescription from "../GameDescription/GameDescription";

const GameInformation = () => {
  const { id } = useParams();
  //console.log(id);
  const { data, isFetching } = useGetGameQuery(id);
  console.log("Single GameData", data);

  const [active, setActive] = useState();

  useEffect(() => {
    // Check if data is available and then update state
    if (data && data.background_image) {
      setActive(data.background_image);
    }
  }, [data]); // Dependency on data means this runs when data changes

  if (isFetching) {
    return (
      <Spinner className="flex items-center justify-center h-16 w-16 text-gray-300/50" />
    );
  }
  return (
    <section className="w-full min-h-screen flex items-start ">
      <div className=" flex w-full flex-col mt-[4rem] max-container  bg-gradient-to-t from-gray-700"  >
        <img src={data.background_image} alt="" />
        <div className=" p-4 flex flex-row justify-evenly items-center object-contain  ">
          <img
            src={data.background_image}
            alt=""
            className="size-[7rem] object-cover object-center rounded-2xl
           
            "
          />
          <div>
            <Typography variant="h6" color="white" className="font-[600]">
              {data.name}
            </Typography>

            <Typography color="gray" className="font-normal">
              <div className="flex items-center justify-center gap-2 font-bold text-white">
                <Rating value={Math.trunc(data.rating)} readonly />
                {Math.floor(data.rating * 10) / 10}
              </div>
            </Typography>

            <button className="flex flex-row items-center gap-1 bg-gray-400 rounded-sm px-2  text-[12px] font-semibold mt-2 ">
              <span className="animate-ping">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#d11b1b"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke=""
                  class="w-2 h-2 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
              </span>
              {data.added_by_status.playing} Live
            </button>
          </div>
        </div>
        <div className="p-4 ">
          <Typography variant="h5" color="white">
            Screenshots
          </Typography>
          <div className="mt-5 ">
            <ImageGallery/>
          </div>
          <div className="mt-5">
            <Typography variant="h5" color="white">
              Game Description
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInformation;
{
  /* <Carousel loop={true} autoplay={true} className="rounded-xl">
  <img
  src={data.background_image}
  alt="image 1"
  className="object-cover object-center "
  />
  <img
  src={data.background_image_additional}
  alt="image 2"
  className=" object-cover object-center"
/>
</Carousel> */
}
