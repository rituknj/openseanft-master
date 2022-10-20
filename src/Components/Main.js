import React from "react";
import Slider from "./Slider1";
import "./Main.css";

export default function Main() {
  return (
    <section>
      <div className="container-fluid  py-5 px-5">
        <h1 className="heading-1">Explore, collect, and sell NFTs</h1>

        <div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
