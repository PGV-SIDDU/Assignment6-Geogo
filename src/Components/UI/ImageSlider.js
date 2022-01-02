import React from "react";
import Carousel from "react-elastic-carousel";
import SliderCard from "./SliderCard";
import "./Content.css";
const breakPoints = [
  { width: 1, itemsToShow: 1.2 }
];

export default function ImageSlider() {
  return (
    <>
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
        </Carousel>
      </div>
    </>
  );
}
