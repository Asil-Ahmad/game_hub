import React from "react";

import Games from "./components/Games";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import SubNavbar2 from "./components/SubNavbar2";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import GameInformation from "./components/GameInformation/GameInformation";
import Register from "./components/Register/Register";
import Products from "./components/Products/Products";
import Trailer from "./components/Trailer/Trailer";

import Video from "./components/Video/Video";
import { useLocation } from "react-router-dom";
import Smallbar from "./components/Smallbar";

const App = () => {
  const location = useLocation();
  const showNavbar = ["/", "/games", "register", "/products"].includes(
    location.pathname
  );

  const showSmallbar = ["/games/:id"].includes(location.pathname);

  const Homepage = () => {
    return (
      <>
        <Hero />
        <Video />
        <Trailer />
      </>
    );
  };

  return (
    <main className="bg-black bg-cover min-h-screen  ">
      {showNavbar && <Navbar />}
      {showSmallbar && <Smallbar />}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/games/:id" element={<GameInformation />}></Route>
      </Routes>
    </main>
  );
};

export default App;
