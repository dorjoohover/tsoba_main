import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import Image from "next/image";
export default function Parthner() {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        arrows: "slider",
        perPage: "5",
      }}
      hassliderwrapper
      className="relative z-20 h-32 px-24"
    >
      return (
      <>
        <SplideSlide className="flex items-center relative z-20 h-32">
          <div className="h-32">
            <Image
              src={"/img/parthner/img_1.jpg"}
              alt="parther"
              width={145}
              height={108}
            />
          </div>
        </SplideSlide>
        <SplideSlide className="flex items-center relative z-20 h-32">
          <div className="h-32">
            <Image
              src={"/img/parthner/img_1.jpg"}
              alt="parther"
              width={145}
              height={108}
            />
          </div>
        </SplideSlide>
        <SplideSlide className="flex items-center relative z-20 h-32">
          <div className="h-32">
            <Image
              src={"/img/parthner/img_1.jpg"}
              alt="parther"
              width={145}
              height={108}
            />
          </div>
        </SplideSlide>
        <SplideSlide className="flex items-center relative z-20 h-32">
          <div className="h-32">
            <Image
              src={"/img/parthner/img_1.jpg"}
              alt="parther"
              width={145}
              height={108}
            />
          </div>
        </SplideSlide>
        <SplideSlide className="flex items-center relative z-20 h-32">
          <div className="h-32">
            <Image
              src={"/img/parthner/img_1.jpg"}
              alt="parther"
              width={145}
              height={108}
            />
          </div>
        </SplideSlide>
        <SplideSlide className="flex items-center relative z-20 h-32">
          <div className="h-32">
            <Image
              src={"/img/parthner/img_1.jpg"}
              alt="parther"
              width={145}
              height={108}
            />
          </div>
        </SplideSlide>
        <SplideSlide className="flex items-center relative z-20 h-32">
          <div className="h-32">
            <Image
              src={"/img/parthner/img_1.jpg"}
              alt="parther"
              width={145}
              height={108}
            />
          </div>
        </SplideSlide>
      </>
    </Splide>
  );
}
