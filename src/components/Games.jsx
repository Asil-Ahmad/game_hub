import { useState } from "react";
import React from "react";

import GamesCard from "./GamesCard/GamesCard";
import { peakpx } from "../assets/icons";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

const Games = () => {
  const [active, setActive] = useState(peakpx);

  return (
    <section
      style={{
        "--image-url": `url(${active})`,
        transition: "background 0.2s ease-in-out",
      }}
      className=" bg-[image:var(--image-url)] bg-cover bg-center min-h-screen
      w-full flex items-center justify-center  "
    >
      
          <GamesCard setActive={setActive} />
       
    </section>
  );
};

export default Games;
