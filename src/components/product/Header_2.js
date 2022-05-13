import React, { useEffect, useState } from "react";
import Title from "../Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { Box } from "@mui/material";
import LoadingScreen from "../Loading";

export default function ProductHeader() {
  const [img, setImg] = useState("");
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const intervalId = setTimeout(() => {
      switch (index) {
        case 1:
          setImg("/parthner/kh5.jpg");
          setIndex(2);
          break;
        case 2:
          setImg("/parthner/kh6.jpg");
          setIndex(3);
          break;
        case 3:
          setImg("/parthner/kh7.jpg");
          setIndex(1);
          break;
        default:
          null;
      }
    }, 5000);
    return () => {
      clearInterval(intervalId);
      setLoading(false);
    };
  }, [index, setImg]);
  if (loading) return <LoadingScreen />;
  return (
    <>
      {img && (
        <Box
          sx={{
            height: {
              xs: "60vh",
              sm: "60vh",
              md: "90vh",
            },
            overflow: "hidden",
            position: "relative",
            display: "flex",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url('/img/${img}')`,
              height: "90vh",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              position: "absolute",
              top: "0",
              zIndex: "10",
              transform: "scale(1.1)",
              width: "100%",
              //   height: "120",
              backgroundRepeat: "no-repeat",
              display: "flex",
              animation: "background-image 5s ease infinite ",
              "@keyframes background-image": {
                "0%": {
                  transform: "scale(1.1)",
                  // width: "100%",
                },
                "50%": {
                  transform: "scale(1.0)",
                  //   height: "100%",
                  // width: "90%",
                },
                "100%": {
                  transform: "scale(1.1)",
                },
              },
            }}
          ></Box>
          <div className="m-auto w-4/5 product_header py-24 relative z-20">
            <div className={`title text-center`}>
              <h5 className="uppercase text_primary_color mb-6 font-semibold text-xl">
                захиалга авж эхэллээ.
              </h5>
              <h1
                className={`uppercase text-6xl leading-tight font-bold text-gray-300`}
              >
                хадат вилла 2 төсөл
              </h1>
            </div>
          </div>
        </Box>
      )}
    </>
  );
}
