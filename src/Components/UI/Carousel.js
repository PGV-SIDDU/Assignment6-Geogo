import React from "react";
import Carousel from "react-elastic-carousel";
import CardElement from "./CardElement" 
import "./Content.css";
const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 7 },
];
export default function Carousal(){
    return (
        <>
          <div className="carousal">
            <h2>Trending Songs</h2>
            <Carousel breakPoints={breakPoints}>
              <CardElement content="One"></CardElement>
              <CardElement content="One"></CardElement>
              <CardElement content="One"></CardElement>
              <CardElement content="One"></CardElement>
              <CardElement content="One"></CardElement>
              <CardElement content="One"></CardElement>
              <CardElement content="One"></CardElement>
              <CardElement content="One"></CardElement>
              <CardElement content="One"></CardElement>
            </Carousel>
          </div>
        </>
      );
}