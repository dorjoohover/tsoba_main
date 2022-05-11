import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { useState } from "react";
export default function Picture({ start, setStart }) {
  return (
    <>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
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
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(splide, prev, next) => {
              setStart(0);
            }}
          >
            <Link href={"#splide_1"}>
              <a className="w-full ">
                <div className="flex justify-center w-full h-full">
                  <img src={"/img/parthner/kh5.jpg"} alt="asdf" />
                </div>
              </a>
            </Link>
          </SplideSlide>
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(splide, prev, next) => {
              setStart(1);
            }}
          >
            <Link href={"#splide_1"}>
              <a className="w-full ">
                <div className="flex justify-center w-full h-full">
                  <img src={"/img/parthner/kh6.jpg"} alt="asdf" />
                </div>
              </a>
            </Link>
          </SplideSlide>
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(splide, prev, next) => {
              setStart(2);
            }}
          >
            <Link href={"#splide_1"}>
              <a className="w-full ">
                <div className="flex justify-center w-full h-full">
                  <img src={"/img/parthner/kh7.jpg"} alt="asdf" />
                </div>
              </a>
            </Link>
          </SplideSlide>
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(splide, prev, next) => {
              setStart(3);
            }}
          >
            <Link href={"#splide_1"}>
              <a className="w-full ">
                <div className="flex justify-center w-full">
                  <img src={"/img/parthner/kh8.jpg"} alt="asdf" />
                </div>
              </a>
            </Link>
          </SplideSlide>
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(splide, prev, next) => {
              setStart(4);
            }}
          >
            <Link href={"#splide_1"}>
              <a className="w-full ">
                <div className="flex justify-center w-full">
                  <img src={"/img/parthner/kh9.jpg"} alt="asdf" />
                </div>
              </a>
            </Link>
          </SplideSlide>
        </>{" "}
        )
      </Splide>
      {start > -1 && (
        <>
          <Splide
            options={{
              type: "loop",
              // autoplay: true,
              pauseOnHover: false,
              resetProgress: false,
              // arrows: false,
              perPage: "1",
              start: start,
            }}
            className=" inset-0 splide_1"
            id="splide_1"
          >
            return (
            <>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(splide, prev, next) => {
                  setStart(-1);
                }}
              >
                <Link href={"#splide"}>
                  <a className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/parthner/kh5.jpg"} alt="asdf" />
                    </div>
                  </a>
                </Link>
              </SplideSlide>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(splide, prev, next) => {
                  setStart(-1);
                }}
              >
                <Link href={"#splide"}>
                  <a className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/parthner/kh6.jpg"} alt="asdf" />
                    </div>
                  </a>
                </Link>
              </SplideSlide>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(splide, prev, next) => {
                  setStart(-1);
                }}
              >
                <Link href={"#splide"}>
                  <a className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/parthner/kh7.jpg"} alt="asdf" />
                    </div>
                  </a>
                </Link>
              </SplideSlide>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(splide, prev, next) => {
                  setStart(-1);
                }}
              >
                <Link href={"#splide"}>
                  <a className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/parthner/kh8.jpg"} alt="asdf" />
                    </div>
                  </a>
                </Link>
              </SplideSlide>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(splide, prev, next) => {
                  setStart(-1);
                }}
              >
                <Link href={"#splide"}>
                  <a className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/parthner/kh9.jpg"} alt="asdf" />
                    </div>
                  </a>
                </Link>
              </SplideSlide>
            </>
            )
            {/* <span className="absolute top-0 bg-white h-24 w-24 z-100"></span> */}
          </Splide>
        </>
      )}
    </>
  );
}
