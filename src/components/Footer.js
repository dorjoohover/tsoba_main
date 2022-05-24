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
import { Box } from "@mui/material";
const Footer = () => {
  return (
    <Box backgroundColor={"#2B2B2B"} pb={6}>
      <div className="relative mx-auto z-20">
        <Box
          display="flex"
          className="fl-direction"
          maxWidth={1200}
          py={6}
          px={2}
          mx="auto"
          sx={{ borderBottom: "rgba(255,255,255, 0.4) 1px solid" }}
        >
          <div className="flex-1">
            <Image
              src={"/img/logo_footer.png"}
              alt="logo"
              height={164}
              width={318}
            />
          </div>
          <ul className="text-base flex-1">
            <li className=" text-white mb-4 ml-12">Бидэнтэй холбоо барих:</li>
            <li className="text-white mb-2">
              <PhoneAndroid sx={{ paddingRight: "0.5rem", fill: "white" }} />{" "}
              +(976-11) 77005434 , 80115262
            </li>
            <li className="text-white mb-2">
              <MailOutline sx={{ paddingRight: "0.5rem", fill: "white" }} />{" "}
              info@homey.mn
            </li>
            <li className="text-white mb-2">
              <Room sx={{ paddingRight: "0.5rem", fill: "white" }} /> СБД 8-р
              хороо Болгарын гудамж 27-802
            </li>
            <li className="text-white mb-2">
              <AccessTime sx={{ paddingRight: "0.5rem", fill: "white" }} /> 9:00
              - 18:00 Даваа - Баасан
            </li>
          </ul>
        </Box>
      </div>
    </Box>
  );
};

export default Footer;
