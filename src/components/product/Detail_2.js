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
            subtitle={"хадат вилла 2 төсөл"}
            items="left"
          />
          <p className="mt-12">
            Хадат Вилла 2 төсөл нь Хадат Вилла-1 төслийн нэгэн адил Канад
            технологийн модон бүтээцтэй барилга юм. Энэхүү төсөл нийт 100 айлын
            хаус төсөл бөгөөд залуу, бие даасан байдал, шинэ хэв маягийг
            эрхэмлэгч хэрэглэгчдэд зориулсан Нордик загварын 100% таун хаусууд
            юм. Хадат Вилла 2 төслийн онцлог нь мөн л уулын энгэрт, өндөрлөг
            алсын хараа сайтай байршилд төлөвлөгдсөн бөгөөд загварын хувьд
            байршлын давуу талыг тодруулсан шалнаасаа тааз хүртэл цонхтой,
            Нордик загварын таун хаусууд гэдгээрээ онцлог.
          </p>
          <br />
          <p>
            Айл хоорондын эгнээ бүрт 1 га нийтийн эзэмшил газар, хүүхдийн
            тоглоомын талбай ба амарч тухлах цоо шинэ орчин бүрдүүллээ. Та
            салхинд найган ганхах модны дэргэд зориулалтын шорлог хийх талбайд
            найз нөхөд гэр бүлийн хамт шорлог хийж, морь унаж, хүссэн үедээ уул
            хадандаа авирч, илүү ихийг өндрөөс харж, өвлийн улиралдаа цана
            чаргаар гулгах боломжийг Хадат Вилла 2 төсөл зөвхөн танд зориуллаа.
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
        <div className="absolute w-2/3 flex justify-around bg-white px-12 py-16 banner">
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">
              125мк<sup>2</sup>
            </h1>
            <h6 className="uppercase">Талбайн хэмжээ</h6>
          </span>
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">2</h1>
            <h6 className="uppercase">давхар</h6>
          </span>
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">400 сая</h1>
            <h6 className="uppercase">Захиалга авч буй үнэ</h6>
          </span>
          {/* <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">95</h1>
            <h6 className="uppercase">SQUARE AREAS</h6>
          </span> */}
        </div>
      </div>
      <div className="detail grid py-48 grid-cols-3 gap-12">
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <FireplaceRounded
            sx={{
              width: "4rem",
              height: "4rem",
              fill: "#fec405",
            }}
          />
          <h2 className="my-8 font-semibold text-3xl capitalize">халаалт</h2>
          <p>
            Карборобот Унгар улсын нам даралтын уурын зуух 8 ширхэг
            суурилуулагдсан бөгөөд айл бүр нэгдсэн халаалтын шугамд холбогдсон.
            Зам
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <EditRoadRounded
            sx={{
              width: "4rem",
              height: "4rem",
              fill: "#fec405",
            }}
          />
          <h2 className="my-8 font-semibold text-3xl capitalize">зам</h2>
          <p>
            СБД Бэлхийн засмал замаар 16 км яваад, Бэлх Хадатын амаар 4.0 км
            асфальтан замаар явж хотхонд хүрнэ
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <ElectricalServicesRounded
            sx={{
              width: "4rem",
              height: "4rem",
              fill: "#fec405",
            }}
          />
          <h2 className="my-8 font-semibold text-3xl capitalize">цахилгаан</h2>
          <p>КТПН 400 кВа 8 ш суурилуулагдана.</p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <WaterDamageRounded
            sx={{
              width: "4rem",
              height: "4rem",
              fill: "#fec405",
            }}
          />
          <h2 className="my-8 font-semibold text-3xl capitalize">Цэвэр ус</h2>
          <p>
            Гүний худаг 120 м, 6 ш эх үүсвэртэй. 200 тн нөөцийн савтай, нэгдсэн
            байдлаар халаалтын шугамтай зэрэгцэн угсрагдаж айл бүртэй
            холбогдсон.
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <CountertopsRounded
            sx={{
              width: "4rem",
              height: "4rem",
              fill: "#fec405",
            }}
          />
          <h2 className="my-8 font-semibold text-3xl capitalize">
            Бохирын систем
          </h2>
          <p>
            Септик системээр бохирын асуудлыг шийдсэн бөгөөд айл бүр бохирын
            системтэй холбогдоно.
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <CableRounded
            sx={{
              width: "4rem",
              height: "4rem",
              fill: "#fec405",
            }}
          />
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
