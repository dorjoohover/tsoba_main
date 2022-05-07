import Image from "next/image";
import Title from "../Title";
import {
  EditRoadRounded,
  FireplaceRounded,
  ElectricalServicesRounded,
  WaterDamageRounded,
  CountertopsRounded,
  CableRounded,
} from "@mui/icons-material";
export default function ProductDetail() {
  return (
    <>
      <div className="relative flex detail pt-48">
        <div className="flex-1 p-3 pr-24">
          <Title
            title={"товч танилцуулга"}
            subtitle={"хадат вилла 4 төсөл"}
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
              src={"/img/01.jpg"}
              alt="product"
              width={630}
              height={833}
              layout="responsive"
            />
          </div>
        </div>
        <div className="absolute w-2/3 flex justify-around banner bg-white px-12 py-16">
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">80</h1>
            <h6 className="uppercase">
              мк<sup>2</sup>
            </h6>
          </span>
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">2</h1>
            <h6 className="uppercase">давхар</h6>
          </span>
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">195</h1>
            <h6 className="uppercase">сая</h6>
          </span>
          {/* <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">95</h1>
            <h6 className="uppercase">SQUARE AREAS</h6>
          </span> */}
        </div>
      </div>
      <div className="detail grid py-48 grid-cols-3 gap-12">
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <FireplaceRounded sx={{ width: "4rem", height: "4rem" }} />
          <h2 className="my-8 font-semibold text-3xl capitalize">халаалт</h2>
          <p>
            Карборобот Унгар улсын нам даралтын уурын зуух 8 ширхэг
            суурилуулагдсан бөгөөд айл бүр нэгдсэн халаалтын шугамд холбогдсон.
            Зам
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <EditRoadRounded sx={{ width: "4rem", height: "4rem" }} />
          <h2 className="my-8 font-semibold text-3xl capitalize">зам</h2>
          <p>
            СБД Бэлхийн засмал замаар 16 км яваад, Бэлх Хадатын амаар 4.0 км
            асфальтан замаар явж хотхонд хүрнэ
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <ElectricalServicesRounded sx={{ width: "4rem", height: "4rem" }} />
          <h2 className="my-8 font-semibold text-3xl capitalize">цахилгаан</h2>
          <p>КТПН 400 кВа 8 ш суурилуулагдана.</p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <WaterDamageRounded sx={{ width: "4rem", height: "4rem" }} />
          <h2 className="my-8 font-semibold text-3xl capitalize">Цэвэр ус</h2>
          <p>
            Гүний худаг 120 м, 6 ш эх үүсвэртэй. 200 тн нөөцийн савтай, нэгдсэн
            байдлаар халаалтын шугамтай зэрэгцэн угсрагдаж айл бүртэй
            холбогдсон.
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <CountertopsRounded sx={{ width: "4rem", height: "4rem" }} />
          <h2 className="my-8 font-semibold text-3xl capitalize">
            Бохирын систем
          </h2>
          <p>
            Септик системээр бохирын асуудлыг шийдсэн бөгөөд айл бүр бохирын
            системтэй холбогдоно.
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <CableRounded sx={{ width: "4rem", height: "4rem" }} />
          <h2 className="my-8 font-semibold text-3xl capitalize">
            Харилцаа холбоо
          </h2>
          <p>
            Мобиком, Юнителийн гар утасны сүлжээ орсон. Юнивишний гурвалсан
            үйлчилгээ орохоор төлөвлөгдсөн
          </p>
        </div>
      </div>
    </>
  );
}