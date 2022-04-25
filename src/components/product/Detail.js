import Image from "next/image";
import Title from "../Title";
import { TouchAppOutlined } from "@mui/icons-material";
export default function ProductDetail() {
  return (
    <>
      <div className="relative flex detail pt-48">
        <div className="flex-1 p-3 pr-24">
          <Title
            title={"Delivering High Quality Projects"}
            subtitle={"More Details"}
            items="left"
          />
          <p className="mt-12">
            Staying calm, composed and maintaining strong self esteem in today’s
            tough environment can be difficult but is not impossible if you
            follow a few simple guidelines.
          </p>
          <br />
          <p>
            Everything and everyone else around you can affect your self esteem.
            Other people can deliberately or inadvertently damage your self
            image. Unchecked people and circumstances can ultimately destroy
            your
          </p>
        </div>
        <div className="flex-1 pl-3">
          <div className="img">
            <Image
              src={"/img/about/img_1.jpg"}
              alt="product"
              width={630}
              height={833}
              layout="responsive"
            />
          </div>
        </div>
        <div className="absolute w-2/3 flex justify-around banner bg-white px-12 py-16">
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">95</h1>
            <h6 className="uppercase">SQUARE AREAS</h6>
          </span>
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">95</h1>
            <h6 className="uppercase">SQUARE AREAS</h6>
          </span>
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">95</h1>
            <h6 className="uppercase">SQUARE AREAS</h6>
          </span>
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">95</h1>
            <h6 className="uppercase">SQUARE AREAS</h6>
          </span>
        </div>
      </div>
      <div className="detail grid py-48 grid-cols-3 gap-12">
        <div className="flex flex-col justify-center items-center text-center">
          <TouchAppOutlined sx={{ width: "4rem", height: "4rem" }} />
          <h2 className="my-8 font-semibold text-3xl capitalize">
            Smart homes
          </h2>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <TouchAppOutlined sx={{ width: "4rem", height: "4rem" }} />
          <h2 className="my-8 font-semibold text-3xl capitalize">
            Smart homes
          </h2>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <TouchAppOutlined sx={{ width: "4rem", height: "4rem" }} />
          <h2 className="my-8 font-semibold text-3xl capitalize">
            Smart homes
          </h2>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.
          </p>
        </div>
      </div>
    </>
  );
}
