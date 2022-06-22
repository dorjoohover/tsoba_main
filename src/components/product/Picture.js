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
            onClick={(prev, next) => {
              setStart(0);
            }}
          >
            <div>
              <div className="w-full ">
                <div className="flex justify-center w-full h-full">
                  <img src={"/img/extra/opti/childRoom.jpg"} alt="asdf" />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(prev, next) => {
              setStart(1);
            }}
          >
            <div>
              <div className="w-full ">
                <div className="flex justify-center w-full h-full">
                  <img src={"/img/extra/opti/childRoom2.jpg"} alt="asdf" />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(prev, next) => {
              setStart(2);
            }}
          >
            <div>
              <div className="w-full ">
                <div className="flex justify-center w-full h-full">
                  <img src={"/img/extra/opti/childRoom3.jpg"} alt="asdf" />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(prev, next) => {
              setStart(3);
            }}
          >
            <div>
              <div className="w-full ">
                <div className="flex justify-center w-full">
                  <img src={"/img/extra/opti/bedroom1.jpg"} alt="asdf" />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(prev, next) => {
              setStart(4);
            }}
          >
            <div>
              <div className="w-full ">
                <div className="flex justify-center w-full">
                  <img src={"/img/extra/opti/bedroom2.jpg"} alt="asdf" />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(prev, next) => {
              setStart(5);
            }}
          >
            <div>
              <div className="w-full ">
                <div className="flex justify-center w-full">
                  <img src={"/img/extra/opti/bathroom1.jpg"} alt="asdf" />
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(prev, next) => {
              setStart(8);
            }}
          >
            <div>
              <div className="w-full ">
                <div className="flex justify-center w-full">
                  <img src={"/img/extra/1floor2.jpg"} alt="asdf" />
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide
            className="flex items-center relative z-20 "
            onClick={(prev, next) => {
              setStart(9);
            }}
          >
            <div>
              <div className="w-full ">
                <div className="flex justify-center w-full">
                  <img src={"/img/extra/1floor3.jpg"} alt="asdf" />
                </div>
              </div>
            </div>
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
                onClick={(prev, next) => {
                  setStart(-1);
                }}
              >
                <div>
                  <div className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/extra/childRoom.jpg"} alt="asdf" />
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(prev, next) => {
                  setStart(-1);
                }}
              >
                <div>
                  <div className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/extra/childRoom2.jpg"} alt="asdf" />
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(prev, next) => {
                  setStart(-1);
                }}
              >
                <div>
                  <div className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/extra/childRoom3.jpg"} alt="asdf" />
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(prev, next) => {
                  setStart(-1);
                }}
              >
                <div>
                  <div className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/extra/bedroom1.jpg"} alt="asdf" />
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(prev, next) => {
                  setStart(-1);
                }}
              >
                <div>
                  <div className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/extra/bedroom2.jpg"} alt="asdf" />
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(prev, next) => {
                  setStart(-1);
                }}
              >
                <div>
                  <div className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/extra/bathroom1.jpg"} alt="asdf" />
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(prev, next) => {
                  setStart(-1);
                }}
              >
                <div>
                  <div className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/extra/1floor2.jpg"} alt="asdf" />
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide
                className="flex items-center relative z-20 "
                onClick={(prev, next) => {
                  setStart(-1);
                }}
              >
                <div>
                  <div className="w-full ">
                    <div className="flex justify-center w-full h-full">
                      <img src={"/img/extra/1floor3.jpg"} alt="asdf" />
                    </div>
                  </div>
                </div>
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
