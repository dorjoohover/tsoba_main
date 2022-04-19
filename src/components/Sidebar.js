import { MailOutline, Call, LocationOn } from "@mui/icons-material";
const Sidebar = () => {
  return (
    <ul className="bg-neutral-900 absolute sidebar px-20 flex justify-between z-50 ">
      <li className="py-4 uppercase text-white tracking-wider flex items-center">
        <MailOutline sx={{ fill: "#b9a25f", paddingRight: "0.5rem" }} />
        Contact@tayta.com{" "}
      </li>
      <li className="py-4 uppercase text-white tracking-wider flex items-center">
        <Call sx={{ fill: "#b9a25f", paddingRight: "0.5rem" }} />
        +23 435 654 435{" "}
      </li>
      <li className="py-4 uppercase text-white tracking-wider flex items-center">
        <LocationOn sx={{ fill: "#b9a25f", paddingRight: "0.5rem" }} />
        2159 ralph, brooklyn, ny{" "}
      </li>
    </ul>
  );
};

export default Sidebar;
