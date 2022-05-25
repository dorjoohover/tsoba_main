import Image from "next/image";
import Parthner from "./Parthner";
import Link from "next/link";
const MiniRequest = ({}) => {
  return (
    <div id="request" className="request relative">
      <span className="absolute bg-white bottom-0 z-10 h-2/5 w-full"></span>
      <form action="" className="flex flex-col mx-auto relative z-30  ">
        <h1 className="font-semibold text-4xl text-center mb-8">
          Зээлийн хүсэлт илгээх
        </h1>
        <p className="mt-4 mb-4">
          Та манай “Homey Mortgage”-ээс өөрийн мөрөөдлийн амины орон сууцаа
          худалдан авах зээлд хамрагдах боломжтой эсэхээ  хүсэлтийг бөглөн
          шалгуулаарай. Хүсэлтийг илгээснээр манай зээлийн мэргэжилтэн тантай
          холбогдох болно.
        </p>

        <Link href={"/request"}>
          <a
            className={
              "uppercase text-center text-white bg_primary_color py-4 mt-5 cursor-pointer font-bold btn-ext"
            }
          >
            Илгээх
          </a>
        </Link>
      </form>
    </div>
  );
};

export default MiniRequest;
