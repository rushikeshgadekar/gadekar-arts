import React from "react";
import "../App.css";
import "./home.css";
import smoke from "../components/videos/smoke.mp4";
function Home() {
  return (
    <div>
      <section>
        <video autoPlay playsInline loop muted src={smoke} />
        <h1 id="logo">
          <span>G</span>
          <span>A</span>
          <span>D</span>
          <span>E</span>
          <span>K</span>
          <span>A</span>
          <span>R</span>
          <span>~</span>
          <span>A</span>
          <span>R</span>
          <span>T</span>
          <span>S</span>
        </h1>
      </section>
    </div>
  );
}

export default Home;
