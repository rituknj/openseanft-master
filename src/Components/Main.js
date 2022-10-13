import React from "react";
import Slider from "./Slider1";
import "./Main.css";

export default function Main() {
  return (
    <section>
      <div className="container">
        <h1 className="heading-1">Explore, collect, and sell NFTs</h1>
      </div>
      <div>
        <Slider />
      </div>
    </section>
  );
}
