import Link from "next/link";
const Copyright = () => {
  return (
    <div className="copyright w-full">
      <div className="py-8 px-4 flex justify-between copyright_container mx-auto text-sm">
        <p>
          {" "}
          &#169; Copyright <span className="uppercase text-white">
            tayta
          </span>{" "}
          All rights reserved.
        </p>
        <div className="flex">
          <Link href="/">
            <a>
              <p className="capitalize mr-8">privacy policy</p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p className="capitalize">cookie policy</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
