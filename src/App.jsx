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


const App = () => {
  return (
    <main className="bg-black bg-cover min-h-screen  ">
      <Navbar />

      <section>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
        </Routes>
      </section>

      <section>
        <Routes>
          <Route path="/" element={<Video />}></Route>
        </Routes>
      </section>
      <section>
        <Routes>
          <Route path="/" element={<Trailer />}></Route>
        </Routes>
      </section>

      <section>
        <Routes>
          <Route path="/games" element={<Games />}></Route>
        </Routes>
      </section>
      <section>
        <Routes>
          <Route path="/games/:id" element={<GameInformation />}></Route>
        </Routes>
      </section>
      <section>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </section>
      <section>
        <Routes>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </section>
    </main>
  );
};

export default App;
