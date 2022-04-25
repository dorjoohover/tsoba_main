import Link from "next/link";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import { Call } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { List } from "@mui/icons-material";
const Navbar = ({ color }) => {
  const router = useRouter();
  const [list, setList] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: {
            lg: "flex",
            md: "none",
            sm: "none",
            xs: "none,",
          },
          justifyContent: "space-between",
          position: "fixed",
          top: "0",
          zIndex: "50",
          margin: "auto",
          width: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "1320px",
        }}
      >
        <div className="flex items-center h-24  w-auto relative">
          <Image src={"/img/logo.png"} alt="logo" width={166.6} height={96} />
        </div>
        <ul className="flex items-center">
          <li
            className={`text-${color} uppercase font-semibold tracking-wider mx-6`}
          >
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li
            className={`text-${color} uppercase font-semibold tracking-wider mx-6`}
          >
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li
            className={`text-${color} uppercase font-semibold tracking-wider mx-6`}
          >
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          {router.locale == "mn" && (
            <div
              onClick={() => {
                router.replace(router.pathname, router.pathname, {
                  locale: "en",
                });
              }}
              className={`text-${color} uppercase font-semibold tracking-wider mx-6 cursor-pointer`}
            >
              <p>en</p>
            </div>
          )}
          {router.locale == "en" && (
            <div
              onClick={() => {
                router.replace(router.pathname, router.pathname, {
                  locale: "mn",
                });
              }}
              className={`text-${color} uppercase font-semibold tracking-wider mx-6 cursor-pointer`}
            >
              <p>мн</p>
            </div>
          )}
        </ul>
        <div className="flex items-center">
          <Call sx={{ fill: "#b9a25f", height: "3rem", width: "3rem" }} />
          <div className="ml-4">
            <h2 className="uppercase tracking-widest font-semibold text_primary_color">
              requist viewing
            </h2>
            <h6 className={`text-${color} uppercase tracking-widest font-bold`}>
              +1 999 988 66
            </h6>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: {
            lg: "none",
            md: "flex",
            sm: "flex",
            xs: "flex",
          },
          justifyContent: "space-between",
          position: "fixed",
          top: "0",
          zIndex: "50",
          margin: "auto",
          width: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "1320px",
          alignItems: "center",
          backgroundColor: "white",
          px: "10px",
        }}
      >
        {list && (
          <span
            className="absolute inset-0 z-30 bg-black opacity-50 h-screen menu"
            onClick={() => setList(false)}
          ></span>
        )}
        {!list && (
          <List
            sx={{ fontSize: "36px", cursor: "pointer" }}
            onClick={() => setList(true)}
          />
        )}
        {list && (
          <>
            <ul className="flex  fixed top-0 left-0 z-50 h-screen bg-white  flex-col w-1/4">
              <li
                className={` uppercase font-semibold tracking-wider p-3 border-b `}
              >
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li
                className={`uppercase font-semibold tracking-wider p-3 border-b`}
              >
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li
                className={`uppercase font-semibold tracking-wider p-3 border-b`}
              >
                <Link href={"/"}>
                  <a>Home</a>
                </Link>
              </li>
            </ul>
            <p></p>
          </>
        )}
        <div className="flex items-center py-3  w-auto relative">
          <Image
            src={"/img/lil_logo.png"}
            alt="logo"
            width={58.3}
            height={60}
          />
        </div>

        {router.locale == "mn" && (
          <div
            onClick={() => {
              router.replace(router.pathname, router.pathname, {
                locale: "en",
              });
            }}
            className={`text-${color} uppercase font-semibold tracking-wider mx-6 cursor-pointer`}
          >
            <p>en</p>
          </div>
        )}
        {router.locale == "en" && (
          <div
            onClick={() => {
              router.replace(router.pathname, router.pathname, {
                locale: "mn",
              });
            }}
            className={`text-${color} uppercase font-semibold tracking-wider mx-6 cursor-pointer`}
          >
            <p>мн</p>
          </div>
        )}
      </Box>
    </>
  );
};
export default Navbar;
