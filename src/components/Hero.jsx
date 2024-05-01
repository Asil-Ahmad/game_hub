import React from "react";
import { ascover } from "../assets/games";
import { aslogo } from "../assets/icons";
import { Button } from "@material-tailwind/react";
const Hero = () => {
  return (
    <>
      <section
        className="  bg-[url('./assets/icons/peakpx.jpg')] bg-cover bg-center w-full flex xl:flex-row 
      flex-col justify-center min-h-screen gap-10  "
      >
        <div
          className=" flex-wrap relative pt-[17rem] p-4  max-container font-marcellus
         text-white flex w-full justify-between items-start"
        >
          <div className="flex flex-col justify-center items-start">
            <p className="text-[18px]"> PSILOFIN PIONEER</p>
            <h1 className="xl:text-[60px] lg:text-[40px] md:text-[30px] uppercase ">
              Discover the <br /> BestGames on <br /> GamesHub
            </h1>
            <p className="text-[24px]  md:text-[18px] tracking-wide">
              Welcome to GameHub, your <br /> ultimate destination for gaming
            </p>
            <Button className="mt-5 animate-pulse">Watch Trailer Now</Button>
          </div>
          <div className="mt-5 ">
            <img
              src={ascover}
              alt=""
              width={250}
              className=" rounded-2xl  hover:scale-105 transition"
            />
            {/* <video
              autoplay="autoplay"
              muted="muted"
              loop
              preload="auto"
              className="w-1/2 rounded-2xl"
              src={asloop}
              onClick={() => window.open("/games")}
            ></video> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

/* 
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 43%, rgba(253,29,29,1) 88%, rgba(252,176,69,1) 100%);
bg-[url('./assets/icons/gtamain.png')]

 <div>
          <a href="">
            <Button>Explore Now</Button>
          </a>
        </div>

*/

/*

   <div className="m-[23.5px] w-[88rem] h-[50rem] rounded-[2rem] bg-[url('./assets/icons/gta6gif.gif')] flex justify-center bg-cover bg-center ">
          <div className="  w-full flex flex-col justify-start p-7 gap-2">
            <p className="ml-2 text-2xl font-bold">Available on.</p>
            <div className="flex flex-row p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12  bg-white rounded-full p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12  bg-white rounded-full p-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12  bg-white rounded-full p-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>

            <div className="w-full h-full  flex flex-col items-center justify-center">
              <div className="flex my-10 items-center justify-center">
                <a href="https://www.youtube.com/watch?v=eOrb93UZfPU&themeRefresh=1">
                  <Button className="animate-pulse">Explore now</Button>
                </a>
              </div>
              <div className=" flex items-center w-[50%]  justify-evenly">
                <img
                  src={ps}
                  alt=""
                  width={200}
                  className="object-contain invert"
                />
                <img
                  src={xbox}
                  alt=""
                  width={100}
                  className="object-contain invert"
                />
                <img src={Pc} alt="" width={50}  />
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-6 2xl:w-[22%] lg-max:w-full xl:px-5 lg:px-7 md:px-4 sm:px-6 xs:px-6  ">
          <div className="flex h-[97%] ">
          <CarouselImage />
         
          </div>
        </div>

*/
