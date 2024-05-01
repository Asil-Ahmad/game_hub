import React from "react";
import ProductsCard from "./ProductsCard";
import { Carousel, Typography } from "@material-tailwind/react";

import { gho1, god1, gt71 } from "../../assets/games";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import GamesCard1 from "../GamesCard/GamesCard1";
import Activity from "../../constant/Activity";
import CarouselImage from "../Carousel/CarouselImage";
import PaidGames from "../PaidGames/PaidGames";

const Products = () => {
  return (
    <section className="w-full min-h-screen flex items-start">
      <div className="flex w-full flex-col mt-[4rem] max-container p-4">
        <Typography
          variant=""
          className="text-3xl font-semibold text-blue-gray-100"
        >
          Games
        </Typography>

        <Activity />
        <Typography color="blue" className="text-[12px] mb-1">
          WATCH IT NOW
        </Typography>
        <CarouselImage />
        <GamesCard1 />
        <div className="my-2 border-b-[1px] border-gray-500" />
        <div className="flex  items-center justify-between">
          <Typography
            variant="h6"
            className="text-2xl mb-1  text-blue-gray-100"
          >
            Paid Games
          </Typography>

          <Typography color="blue" className="text-[15px] mb-1">
            See all
          </Typography>
        </div>
        <PaidGames />
      </div>
    </section>
  );
};

export default Products;
