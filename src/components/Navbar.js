import Link from "next/link";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import { Call } from "@mui/icons-material";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-4/5 flex justify-between fixed top-0 z-50 mx-auto nav">
      <div className="flex items-center h-24 w- w-auto relative">
        <Image src={"/img/logo.png"} alt="logo" width={166.6} height={96} />
      </div>
      <ul className="flex items-center">
        <li className="text-white uppercase font-semibold tracking-wider mx-6">
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li className="text-white uppercase font-semibold tracking-wider mx-6">
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li className="text-white uppercase font-semibold tracking-wider mx-6">
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
            className="text-white uppercase font-semibold tracking-wider mx-6 cursor-pointer"
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
            className="text-white uppercase font-semibold tracking-wider mx-6 cursor-pointer"
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
          <h6 className="text-white uppercase tracking-widest font-bold">
            +1 999 988 66
          </h6>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
