import { MailOutline, Call, LocationOn } from "@mui/icons-material";
const Sidebar = () => {
  return (
    <ul className="bg_color absolute sidebar pl-10 pr-28 flex justify-between z-40 ">
      {/* <li className="py-4 uppercase text-white tracking-wider flex items-center">
        <MailOutline sx={{ fill: "#fec405", paddingRight: "0.5rem" }} />
        Contact@tayta.com{" "}
      </li> */}
      <li className="py-4 uppercase text-white tracking-wider flex items-center">
        <Call sx={{ fill: "#fec405", paddingRight: "0.5rem" }} />
        +(976-11) 77005434, 80115262
      </li>
      <li className="py-4  text-white tracking-wider flex items-center">
        <LocationOn sx={{ fill: "#fec405", paddingRight: "0.5rem" }} />
        СБД 8-р хороо Болгарын гудамж 27-802
      </li>
    </ul>
  );
};

export default Sidebar;
