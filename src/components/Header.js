import { useTranslation } from "next-i18next";
import { ArrowRightAlt } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Banner from "./Banner";
const Header = () => {
  const { t } = useTranslation();
  //   console.log({t("home: dorj")});
  return (
    <>
      <div className="relative">
        <div className="absolute z-30 top-1/2 left-1/2 header_text text-center">
          <h5 className=" tracking-widest text-white mb-6 font-extralight text-2xl">
            Хаусаа 24 цагт
          </h5>
          <h1
            className={`text-5xl leading-tight font-semibold text-white mb-10`}
          >
            Хүлээлтээс давсан <br /> Хялбар санхүүжилт
          </h1>
          <Link href={"/"}>
            <a className="bg_primary_color text-white px-6 font-semibold  py-4">
              Зээлийн хүсэлт илгээх
            </a>
          </Link>
        </div>
        <span className="bg-black absolute inset-0 opacity-50 z-20"></span>
        <Banner />
        <Splide
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
              <div className=" ">
                <Image
                  src={"/img/family.png"}
                  alt={"header"}
                  layout="responsive"
                  width={3800}
                  height={2000}
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className=" ">
                <Image
                  src={"/img/02.png"}
                  alt={"header"}
                  layout="responsive"
                  width={3800}
                  height={2000}
                />
              </div>
            </SplideSlide>
          </>
          )
        </Splide>
      </div>
    </>
  );
};

export default Header;
