import { useTranslation } from "next-i18next";
import { ArrowRightAlt } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Banner from "./Banner";
import { height, width } from "@mui/system";
import React from "react";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative header-bg-size">
        <div className="wrapper">
          <video autoPlay muted loop width={"100%"} height={"100%"}>
            <source src="./video/Video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute z-30 top-1/2 left-1/2 header_text text-left flex">
          <div className="header-content-size header-content-title">
            <h5 className=" tracking-widest text-white mb-12 font-extrabold text-7xl header-title-width">
              Хаусаа{" "}
              <strong>
                {" "}
                <br /> 24{" "}
              </strong>
              цагт
            </h5>

            <div className=" header-button">
              <Link href={"/request"}>
                <a className=" text-white font-semibold main_link">
                  Зээлийн хүсэлт илгээх
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="header-content-size header-bg-image">
            <Image
              src={"/img/step-bg-cut2.png"}
              alt={"header"}
              layout="responsive"
              width={3800}
              height={2000}
              unoptimized
            />
          </div> */}
        </div>
        {/* <span className="bg-black absolute inset-0 opacity-50 z-20"></span> */}

        {/* <Splide
          className="screen"
          options={{
            type: "loop",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            arrows: false,
            perPage: 1,
          }}
          hasSliderWrapper
        >
          return (
          <>
            <SplideSlide>
              <div className="screen_slide">
                <Image
                  className="fam01"
                  src={"/img/fam01.png"}
                  alt={"header"}
                  layout="responsive"
                  width={3800}
                  height={2000}
                  unoptimized
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="screen_slide">
                <Image
                  className="fam02"
                  src={"/img/fam02.png"}
                  alt={"header"}
                  layout="responsive"
                  width={3800}
                  height={2000}
                  unoptimized
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="screen_slide">
                <Image
                  className="fam03"
                  src={"/img/fam03.png"}
                  alt={"header"}
                  layout="responsive"
                  width={3800}
                  height={2000}
                  unoptimized
                />
              </div>
            </SplideSlide>
          </>
          )
        </Splide> */}

        <div className="absolute z-30 left-1/2 sub-title-extra ">
          <h5 className=" tracking-widest text-white mb-2 font-lightbold text-base sub-title-text ">
            Хүлээлтээс давсан хялбар санхүүжилт.
          </h5>
          <div id="lineh1"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
