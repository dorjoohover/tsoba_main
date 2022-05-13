import { useTranslation } from "next-i18next";
import { ArrowRightAlt } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import Link from "next/link";
const Header = () => {
  const { t } = useTranslation();
  //   console.log({t("home: dorj")});
  return (
    <>
      <div className="text-white bg-black bg_header  relative">
        <Sidebar />
        <span className="bg-black inset-0 opacity-50 absolute z-20"></span>
        <h1 className="relative z-30"></h1>
        <div className="w-4/5 mx-auto header">
          <div className="relative z-30  ">
            <h5 className=" uppercase text-white text-xl mb-8">
              Хаусаа 24 цагт
            </h5>
            <h1 className="text-white capitalize tracking-wider text-6xl font-semibold leading-tight  header_text">
              Хүлээлтээс давсан <br /> Хялбар санхүүжилт
            </h1>
            <Link href={"/request"}>
              <a className="px-12 py-6 text-white font-semibold uppercase whitespace-nowrap bg_color inline tracking-widest items-center request_btn">
                Зээлийн хүсэлт илгээх
                <ArrowRightAlt sx={{ marginLeft: "1rem" }} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
