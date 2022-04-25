import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
export default function Picture() {
  return (
    <Splide
      options={{
        type: "loop",
        // autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        arrows: false,
        perPage: "4",
        breakpoints: {
          1024: {
            perPage: 2,
          },
          768: {
            perPage: 1,
          },
        },
      }}
      className="relative z-20 product_picture_mini"
    >
      return (
      <>
        <SplideSlide className="flex items-center relative z-20 ">
          <div className="flex justify-center">
            <img src={"/img/parthner/img_1.jpg"} alt="asdf" />
          </div>
        </SplideSlide>
      </>
    </Splide>
  );
}
