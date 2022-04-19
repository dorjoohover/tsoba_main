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
        <div className="py-24 flex w-4/5 mx-auto justify-center items-end">
          <div className="flex-1  footer_left">
            <Image
              src={"/img/logo_footer.png"}
              alt="logo"
              height={75}
              width={250}
            />
            <ul className="mt-24">
              <li className="text-white mb-2">
                <PhoneAndroid sx={{ paddingRight: "0.5rem", fill: "white" }} />{" "}
                (+01)999.88.77 or (+01)999.888.66
              </li>
              <li className="text-white mb-2">
                <MailOutline sx={{ paddingRight: "0.5rem", fill: "white" }} />{" "}
                contact.tayta@gmail.com
              </li>
              <li className="text-white mb-2">
                <Room sx={{ paddingRight: "0.5rem", fill: "white" }} /> 2159
                Ralp, Brooklyn, NY, United States
              </li>
              <li className="text-white mb-2">
                <AccessTime sx={{ paddingRight: "0.5rem", fill: "white" }} />{" "}
                8am - 6px EST, Monday - Sunday
              </li>
            </ul>
          </div>
          <div className="flex justify-between footer_items ">
            <div>
              <h5 className="text-2xl font-bold text-white">About</h5>
              <ul className="mt-24 text-white">
                <li className="mb-2">Services</li>
                <li className="mb-2">Team Member</li>
                <li className="mb-2">Propreties</li>
                <li className="mb-2">About Us</li>
              </ul>
            </div>
            <div>
              <h5 className="text-2xl font-bold text-white">About</h5>
              <ul className="mt-24 text-white">
                <li className="mb-2">Services</li>
                <li className="mb-2">Team Member</li>
                <li className="mb-2">Propreties</li>
                <li className="mb-2">About Us</li>
              </ul>
            </div>
            <div className="relative z-20">
              <h5 className="text-2xl font-bold text-white">About</h5>
              <div className="mt-24">
                <ul className="flex relative z-30">
                  <li className="px-2">
                    <Link href={"/"}>
                      <a>
                        <Facebook
                          sx={{
                            borderRadius: "100%",
                            backgroundColor: "#272727",
                          }}
                        />{" "}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <a className="px-2">
                        <Twitter
                          sx={{ borderRadius: "100%", background: "#272727" }}
                        />{" "}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/"}>
                      <a className="px-2">
                        <Instagram
                          sx={{ borderRadius: "100%", background: "#272727" }}
                        />{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="px-2">
                    <Link href={"/"}>
                      <a>
                        <YouTube
                          sx={{ borderRadius: "100%", background: "#272727" }}
                        />{" "}
                      </a>
                    </Link>
                  </li>
                </ul>
                <p className="text-white">
                  We bring the years, global experience, and stamina to guide
                  our clients through new.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
