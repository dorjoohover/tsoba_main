import Link from "next/link";
const Copyright = () => {
  return (
    <div className="copyright w-full">
      <div className="py-8 px-4 flex justify-between copyright_container mx-auto text-sm">
        <p>
          {" "}
          &#169; Бүх эрх хуулиар хамгаалагдсан.{" "}
          <span className="uppercase text-white"></span>
        </p>
        <div className="flex">
          <Link href="https://www.thehover.tech/">
            <a target={"_blank"}>
              <p className="capitalize text-white font-semibold">
                The Hover Web Development Company
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
