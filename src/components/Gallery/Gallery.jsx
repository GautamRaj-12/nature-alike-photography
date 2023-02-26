import React from "react";
import "./gallery.css";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import four from "../../assets/4.jpg";
import five from "../../assets/5.jpg";
import six from "../../assets/6.jpg";
import seven from "../../assets/7.jpg";
import eight from "../../assets/8.jpg";
import nine from "../../assets/9.jpg";
import ten from "../../assets/10.jpg";

function Gallery() {
  return (
    <>
      <div class="row">
        <div class="column">
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
        </div>
        <div class="column">
          <img src={four} alt="" />
          <img src={five} alt="" />
          <img src={six} alt="" />
        </div>
        <div class="column">
          <img src={seven} alt="" />
          <img src={eight} alt="" />
        </div>
        <div class="column">
          <img src={nine} alt="" />
          <img src={ten} alt="" />
        </div>
      </div>
    </>
  );
}

export default Gallery;
