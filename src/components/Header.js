import { useTranslation } from "next-i18next";
import { ArrowRightAlt } from "@mui/icons-material";
import Sidebar from "./Sidebar";
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
              convernient location
            </h5>
            <h1 className="text-white capitalize tracking-wider text-6xl font-bold leading-tight">
              beautiful spaces <br /> in the best places
            </h1>
            <button className="px-12 py-6 text-white font-semibold uppercase bg_heading_color mt-20 tracking-widest flex items-center">
              schedule a visit
              <ArrowRightAlt sx={{ marginLeft: "1rem" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
