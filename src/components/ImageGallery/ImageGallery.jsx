import { Spinner } from "@material-tailwind/react";

import { useGetGamesQuery } from "../../services/RAWG";

import { Link, useParams } from "react-router-dom";

import React from "react";
const ImageGallery = ({ setActive }) => {
  const { id } = useParams();
  const { data, isFetching } = useGetGamesQuery(id);
  console.log("GamesQuesry", data?.results);

  if (isFetching) {
    return <Spinner className="h-24 w-24" />;
  }

  const filteredResults = data?.results?.filter(
    (result) => result.id.toString() === id
  );
  return (
    <div className="flex flex-wrap">
      {filteredResults?.map((result) => (
        <div className="flex gap-4 items-center flex-wrap justify-evenly ">
          {result?.short_screenshots.map((img) => (
            <div className="  hover:scale-110">
              <img
                onClick={() => setActive(img.image)}
                src={img.image}
                alt="image 1"
                className=""
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
