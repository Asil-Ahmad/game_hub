import { Spinner } from "@material-tailwind/react";

import { useGetGamesQuery } from "../../services/RAWG";

import { Link, useParams } from "react-router-dom";

import React from "react";
const ImageGallery = ({ setActive }) => {
  const { id } = useParams();
  const { data, isFetching } = useGetGamesQuery(id);
 

  if (isFetching) {
    return <Spinner className="h-24 w-24" />;
  }

  const filteredResults = data?.results?.filter(
    (result) => result.id.toString() === id
  );
  return (
    <div className="flex  overflow-x-auto">
      {filteredResults?.map((result) => (
        <div className="flex items-center gap-2 justify-center p-1">
          {result?.short_screenshots.map((img) => (
            <div className="w-[100px] drop-shadow-xl ">
              <img
                onClick={() => setActive(img.image)}
                src={img.image}
                alt="image 1"
                className="object-cover rounded-xl drop-shadow-md"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
