import Image from "next/image";
import Link from "next/link";
import {
  PhoneAndroid,
  MailOutline,
  Room,
  AccessTime,
  Facebook,
  YouTube,
  Twitter,
  Instagram,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer relative">
      <span className="absolute inset-0  bg_heading_color"></span>
      <div className="absolute inset-0 opacity-50 bg-black z-10"></div>
      <div className="relative mx-auto z-20">
        <div className="py-24 px-3 grid  mx-auto justify-around items-start footer_container">
          <div className="flex-1  footer_left">
            <div className="w-48">
              <Image
                src={"/img/logo_footer.png"}
                alt="logo"
                height={1196}
                width={2300}
                layout={"responsive"}
              />
            </div>
            <ul className="mt-12 text-sm">
              <li className="text-white mb-2">
                <PhoneAndroid sx={{ paddingRight: "0.5rem", fill: "white" }} />{" "}
                +(976-11) 77005434 , 80115262
              </li>
              <li className="text-white mb-2">
                <MailOutline sx={{ paddingRight: "0.5rem", fill: "white" }} />{" "}
                altantsetseg.b@homey.mn
              </li>
              <li className="text-white mb-2">
                <Room sx={{ paddingRight: "0.5rem", fill: "white" }} /> СХД 8-р
                хороо Болгарын гудамж 27-802
              </li>
              <li className="text-white mb-2">
                <AccessTime sx={{ paddingRight: "0.5rem", fill: "white" }} />{" "}
                9:00 - 18:00 Даваа - Баасан
              </li>
            </ul>
          </div>

          <div className="footer_item_1 footer_item mt-12">
            <h5 className="text-2xl font-bold text-white">Цэс</h5>
            <ul className="mt-20 text-white">
              <li className="mb-2">
                <Link href={"/"}>
                  <a>Нүүр</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/project"}>
                  <a>Төсөл</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/request"}>
                  <a>Зээлийн хүсэлт</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/contact"}>
                  <a>Холбогдох</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* 
          <div className="relative footer_item_3 footer_item z-20">
            <h5 className="text-2xl font-bold text-white">About</h5>
            <div className="mt-20">
              <ul className="flex relative z-30 mb-2">
                <li className="px-2">
                  <Link href={"/"}>
                    <a>
                      <Facebook
                        sx={{
                          borderRadius: "100%",
                          backgroundColor: "#272727",
                          fill: "white",
                          padding: "0.4rem",
                          width: "2rem ",
                          height: " 2rem",
                        }}
                      />{" "}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="px-2">
                      <Twitter
                        sx={{
                          borderRadius: "100%",
                          background: "#272727",
                          fill: "white",
                          padding: "0.4rem",
                          width: "2rem ",
                          height: " 2rem",
                        }}
                      />{" "}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a className="px-2">
                      <Instagram
                        sx={{
                          borderRadius: "100%",
                          background: "#272727",
                          fill: "white",
                          padding: "0.4rem",
                          width: "2rem ",
                          height: " 2rem",
                        }}
                      />{" "}
                    </a>
                  </Link>
                </li>
                {/* <li className="px-2">
                  <Link href={"/"}>
                    <a>
                      <YouTube
                        sx={{
                          borderRadius: "100%",
                          background: "#272727",
                          fill: "white",
                          padding: "0.4rem",
                          width: "2rem ",
                          height: " 2rem",
                        }}
                      />{" "}
                    </a>
                  </Link>
                </li> 
              </ul>
              <p className="text-white">
                We bring the years, global experience, and stamina to guide our
                clients through new.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
