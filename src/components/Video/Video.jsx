import React from "react";
import { video } from "../../assets/icons";

const Video = () => {
  return (
    <section id="comingsoon">
      <video
        autoplay="autoplay"
        muted="muted"
        loop
        className="w-full  z-10 flex"
        src={video}
      ></video>
    </section>
  );
};

export default Video;
