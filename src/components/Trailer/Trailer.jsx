import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { close, play } from "../../assets/icons";
import { Link } from "react-router-dom";

const Trailer = () => {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <section className="">
      <div className="bg-[url('./assets/icons/trailer.png')] bg-cover bg-no-repeat min-h-[40rem] flex flex-col justify-center items-center">
        <img
          src={play}
          alt=""
          width={120}
          className="hover:scale-110 transition"
          onClick={() => setOpenVideo(true)}
        />
        <h1 className="text-white font-bold text-[60px] uppercase font-marcellus">
          FEEL IT NOW
        </h1>
        <div className=" mt-5 flex gap-5">
          <Link to="/games">
            <Button>Games available now</Button>
          </Link>
          <a href="#comingsoon">
            <Button>Coming soon</Button>
          </a>
        </div>
      </div>
      {openVideo && (
        <>
          <div className="bg-black top-0 left-0 fixed w-full h-full flex items-center justify-center">
            <iframe
              width="100%"
              height="75%"
              className="fixed"
              allow="autoplay"
              allowFullScreen
              src="https://www.youtube.com/embed/x55lAlFtXmw"
              loading="lazy"
            ></iframe>
          </div>

          <button
            className="bg-white rounded-full fixed top-5 right-[1rem] "
            onClick={() => setOpenVideo(false)}
          >
            <img src={close} alt="" width={32} />
          </button>
        </>
      )}
    </section>
  );
};

export default Trailer;
