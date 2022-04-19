import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import Image from "next/image";
export default function Parthner() {
  return (
    <Splide
      options={{
        rewind: true,
        type: "loop",
        gap: "2rem",
        perPage: 7,
        breakpoints: {
          1280: {
            perPage: 6,
          },
          768: {
            perPage: 5,
          },
          500: {
            perPage: 3,
          },
        },
        autoScroll: {
          speed: 2,
        },
      }}
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
