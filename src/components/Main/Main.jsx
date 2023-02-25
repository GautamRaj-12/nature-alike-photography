import React from "react";
import insectOnPlant from "../../assets/insect-on-plant.jpg";
import dropsOnPlant from "../../assets/drops-on-plant.jpg"
import insectOnPlantDark from "../../assets/insect-on-plant-dark.jpg"
import "./main.css";
function Main() {
  return (
    <>
      <main className="main">
        <div class="main-text">
          Nature
        </div>
        <div class="main-images">
          <img src={insectOnPlant} alt="An insect on a plant" class="first-img"/>
          <img src={dropsOnPlant} alt="Raindrops on a plant" class="second-img"/>
          <img src={insectOnPlantDark} alt="An insect on a plant in the evening" class="third-img"/>
        </div>
      </main>
    </>
  );
}

export default Main;
