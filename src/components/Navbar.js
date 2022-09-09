import Link from "next/link";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import { Call } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { List, ArrowDropDown } from "@mui/icons-material";
const Navbar = ({ color, check_bg }) => {
  const router = useRouter();
  const [list, setList] = useState(false);
  const [scrollY, setScrollY] = useState("flex");
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setColor] = useState("white");
  const [logo, setLogo] = useState("homey_white.png");
  useEffect(() => {
    const fetchBusinesses = () => {
      return fetch("theURL", { method: "GET" })
        .then((res) => normalizeResponseErrors(res))
        .then((res) => {
          return res.json();
        })
        .then((rcvdBusinesses) => {
          // some stuff
        })
        .catch((err) => {
          // some error handling
        });
      fetchBusinesses();
    };
    const handleScroll = () => {
      if (window.scrollY == 0) {
        if (check_bg != "home") {
          setBgColor("white");
          setColor("black");
          setLogo("logo.png");
        } else {
          setBgColor("transparent");
          setColor("white");
          setLogo("homey_white.png");
        }
      }
      if (window.scrollY > 0 && window.scrollY < 600) {
        setScrollY("none");
        setBgColor("transparent");
        setColor("white");
        setLogo("homey_white.png");
      } else if (window.scrollY >= 600) {
        setScrollY("flex");
        setBgColor("white");
        setColor("black");
        setLogo("logo.png");
      } else {
        setScrollY("flex");
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      sx={{
        display: `${scrollY}`,
        background: `${bgColor}`,
        height: {
          lg: "96px",
          md: "82px",
          sm: "82px",
          xs: "82px",
        },
        width: "100%",
        position: "fixed",
        top: "0",
        zIndex: "50",
      }}
    >
      <Box
        sx={{
          display: {
            lg: `${scrollY}`,
            md: "none",
            sm: "none",
            xs: "none",
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
          color: `${textColor}`,
        }}
      >
        <div className="flex items-center h-24  w-auto relative nav-bg-color">
          <Image src={`/img/${logo}`} alt="logo" width={166.6} height={90} />
        </div>
        <ul className="flex items-center">
          <li
            className={`text-${color} uppercase font-semibold tracking-wider mx-6`}
          >
            <Link href={"/"}>
              <a>нүүр</a>
            </Link>
          </li>
          <li
            className={`text-${color} uppercase font-semibold tracking-wider mx-6 nav_btn`}
          >
            <button
              className={`text-${color} uppercase font-semibold tracking-wider px-6 flex items-center`}
            >
              төсөл
              <ArrowDropDown
                sx={[
                  {
                    fontSize: "1.5rem",
                    marginLeft: "0.5rem",
                    transition: "0.5s",
                  },
                ]}
              />
            </button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: "96px",
                transition: "0.5s",
                zIndex: "60",
                background: `#fff`,
                color: "#171718",
              }}
              className="link"
            >
              {/* <Link href={'/project/khadat-villa-2'}>
								<a>Хадат вилла 2</a>
							</Link> */}
              <Link href={"/project"}>
                <a>Хадат вилла 4</a>
              </Link>
            </Box>
          </li>
          <li
            className={`text-${color} uppercase font-semibold tracking-wider  nav_btn`}
          >
            <button
              className={`text-${color} uppercase font-semibold tracking-wider px-6 flex items-center`}
            >
              зээл
              <ArrowDropDown
                sx={[
                  {
                    fontSize: "1.5rem",
                    marginLeft: "0.5rem",
                    transition: "0.5s",
                  },
                ]}
                className="svg_1"
              />
            </button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: "96px",
                transition: "0.5s",
                zIndex: "60",
                background: `#fff`,
                color: "#171718",
              }}
              className="link"
            >
              {/* <Link href={"/loans/external"}>
                <a>зээлийн тооцоолол</a>
              </Link> */}
              <div className="nav_btn_2">
                <button
                  className={`text-${color} uppercase font-semibold tracking-wider px-6 flex items-center`}
                >
                  зээлийн тооцоолол
                  <ArrowDropDown
                    sx={[
                      {
                        fontSize: "1.5rem",
                        marginLeft: "0.5rem",
                        transition: "0.5s",
                      },
                    ]}
                    className="svg_2"
                  />
                </button>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "0px",
                    left: "100%",
                    transition: "0.5s",
                    zIndex: "60",
                    background: `#fff`,
                    color: "#171718",
                  }}
                  className="link_2"
                >
                  <Link href={"/loans/external_mn"}>
                    <a style={{ border: "none" }}>Төгрөг</a>
                  </Link>

                  {/* <Link href={"/loans/internal"}>
                <a>дотоод дахь харилцагч</a>
              </Link> */}
                  <Link href={"/loans/external"}>
                    <a>Доллар</a>
                  </Link>
                </Box>
              </div>
              {/* <Link href={"/loans/internal"}>
                <a>дотоод дахь харилцагч</a>
              </Link> */}
              <Link href={"/loans/material_requirement"}>
                <a>Бүрдүүлэх материал</a>
              </Link>
              <Link href={"/request"}>
                <a>зээлийн хүсэлт</a>
              </Link>
            </Box>
          </li>

          <li
            className={`text-${color} uppercase font-semibold tracking-wider mx-6`}
          >
            <Link href={"/contact"}>
              <a>холбогдох</a>
            </Link>
          </li>
          {/* {router.locale == "mn" && (
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
          )} */}
        </ul>
        <div className="flex items-center">
          <Call
            sx={{
              fill: "#fec405",
              height: "3rem",
              width: "3rem",
            }}
          />
          <div className="ml-4">
            <h2 className="uppercase tracking-widest font-semibold text_primary_color">
              холбоо барих
            </h2>
            <h6 className={`text-${color} uppercase tracking-widest font-bold`}>
              (976-11) 7700 5434
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
          px: "10px",
          color: `${textColor}`,
          backgroundColor: `${bgColor}`,
        }}
        className="mobile_navbar"
      >
        {list && (
          <span
            className="absolute inset-0 z-30 bg-black opacity-50 h-screen menu"
            onClick={() => setList(false)}
          ></span>
        )}
        {!list && (
          <List
            sx={{
              fontSize: "36px",
              cursor: "pointer",
              fill: `${textColor}`,
            }}
            onClick={() => setList(true)}
          />
        )}
        {list && (
          <>
            <ul className="flex fixed top-0 left-0 z-50 h-screen bg-white text-black  flex-col w-1/4">
              <li className="mx-6 flex items-center">
                <div className="flex items-center py-3 mx-auto mobile_nav_logo w-28">
                  <Image
                    src={"/img/logo.png"}
                    alt="logo"
                    width={2300}
                    height={1196}
                    layout="responsive"
                  />
                </div>
              </li>
              <li
                className={`text-${color} uppercase font-semibold tracking-wider mx-6 py-4`}
              >
                <Link href={"/"}>
                  <a>нүүр</a>
                </Link>
              </li>
              <li
                className={`text-${color} uppercase font-semibold tracking-wider py-4 nav_btn_mobile`}
              >
                <button
                  className={`text-${color} uppercase font-semibold tracking-wider mx-6 py-4 flex items-center px-0`}
                >
                  төсөл
                  <ArrowDropDown
                    sx={[
                      {
                        fontSize: "1.5rem",
                        marginLeft: "0.5rem",
                        transition: "0.5s",
                      },
                    ]}
                  />
                </button>
                <div className="link">
                  {/* <Link href={"/project/khadat-villa-2"}>
                    <a>хадат вилла 2</a>
                  </Link> */}
                  <Link href={"/project"}>
                    <a>хадат вилла 4</a>
                  </Link>
                </div>
              </li>
              <li
                className={`text-${color} uppercase font-semibold tracking-wider  nav_btn_mobile`}
              >
                <button
                  className={`text-${color} uppercase font-semibold tracking-wider mx-6 py-4 flex items-center px-0`}
                >
                  зээл
                  <ArrowDropDown
                    sx={[
                      {
                        fontSize: "1.5rem",
                        marginLeft: "0.5rem",
                        transition: "0.5s",
                      },
                    ]}
                    className="svg_1"
                  />
                </button>
                <div className="link">
                  {/* <Link href={"/loans/external"}>
                    <a>зээлийн тооцоолол</a>
                  </Link> */}
                  <div className="nav_btn_2">
                    <button
                      className={`text-${color} uppercase font-semibold tracking-wider px-6 flex items-center`}
                    >
                      зээлийн тооцоолол
                      <ArrowDropDown
                        sx={[
                          {
                            fontSize: "1.5rem",
                            marginLeft: "0.5rem",
                            transition: "0.5s",
                          },
                        ]}
                        className="svg_2"
                      />
                    </button>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        top: "0px",
                        left: "100%",
                        transition: "0.5s",
                        zIndex: "60",
                        background: `#fff`,
                        color: "#171718",
                      }}
                      className="link_2"
                    >
                      <Link href={"/loans/external_mn"}>
                        <a style={{ border: "none" }}>ТӨГРӨГ</a>
                      </Link>

                      {/* <Link href={"/loans/internal"}>
                <a>дотоод дахь харилцагч</a>
              </Link> */}
                      <Link href={"/loans/external"}>
                        <a>ДОЛЛАР</a>
                      </Link>
                    </Box>
                  </div>
                  {/* <Link href={"/loans/internal"}>
                    <a>дотоод харилцагч</a>
                  </Link> */}
                  <Link href={"/loans/material_requirement"}>
                    <a>Бүрдүүлэх материал</a>
                  </Link>
                  <Link href={"/request"}>
                    <a>зээлийн хүсэлт</a>
                  </Link>
                </div>
              </li>
              <li
                className={`text-${color} uppercase font-semibold tracking-wider mx-6 py-4`}
              >
                <Link href={"/contact"}>
                  <a>холбогдох</a>
                </Link>
              </li>
            </ul>
            <p></p>
          </>
        )}
        <div className="flex items-center  mobile_nav_logo w-28">
          <Image
            src={`/img/${logo}`}
            alt="logo"
            width={2300}
            height={1196}
            layout="responsive"
          />
        </div>

        {/* {router.locale == "mn" && (
          <div
            onClick={() => {
              router.replace(router.pathname, router.pathname, {
                locale: "en",
              });
            }}
            className={`text-${color} uppercase font-semibold opacity-0 tracking-wider cursor-pointer`}
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
            className={`text-${color} uppercase font-semibold opacity-0 tracking-wider cursor-pointer`}
          >
            <p>мн</p>
          </div>
        )} */}
      </Box>
    </Box>
  );
};
export default Navbar;
