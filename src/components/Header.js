import { useTranslation } from "next-i18next";
import { ArrowRightAlt } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Banner from "./Banner";
import { height, width } from "@mui/system";
const Header = () => {
  const { t } = useTranslation();
  //   console.log({t("home: dorj")});
  return (
    <>
      <div className="relative header-bg-size">
        <div className="absolute z-30 top-1/2 left-1/2 header_text text-left">
          <h5 className=" tracking-widest text-white mb-12 font-extrabold text-6xl header-title-width">
            Хүлээлтээс давсан хялбар санхүүжилт
          </h5>
          {/* <h1
            className={`text-5xl leading-tight font-semibold text-white mb-10`}
          >
            Хүлээлтээс давсан <br /> Хялбар санхүүжилт
          </h1> */}
          <Link href={"/request"}>
            <a className="bg_primary_color text-white px-6 font-semibold  py-4 main_link text-3xl">
              Зээлийн хүсэлт илгээх
            </a>
          </Link>
        </div>
        <span className="bg-black absolute inset-0 opacity-50 z-20"></span>

        <Splide
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
        </Splide>

        <div className="absolute z-30 top-3/4 left-1/2 sub-title-extra ">
          <h5 className=" tracking-widest text-white mb-2 font-lightbold text-base sub-title-text">
            Хаусаа 24 цагт
          </h5>
          <div id="lineh1"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
