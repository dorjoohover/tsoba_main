import Image from "next/image";
import Title from "../Title";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import {
  EditRoadRounded,
  FireplaceRounded,
  ElectricalServicesRounded,
  WaterDamageRounded,
  CountertopsRounded,
  CableRounded,
} from "@mui/icons-material";
const BootstrapButton = styled(Button)({
  borderRadius: 0,
  backgroundColor: "#FEC405",
  margin: "0 20px",
  "&:hover": {
    backgroundColor: "#FEC405",
    borderColor: "#FEC405",
  },
});
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
            “Хадатын хөндий” хэмээх эко суурин нь олон өрх айл төвлөрсөн,
            ухаалаг зөв төлөвлөлттэй, орчин үеийн инженерийн дэд бүтцийн
            шийдлээр хийгдсэнээр оршин суугч нартаа олон давуу талыг бий болгож,
            урт хугацаандаа үнэ цэн нь өсөн нэмэгдэх төсөл болно гэдгийг
            дурьдахад таатай байна.
          </p>
          <br />
          <p>
            Одоогоос 10 жилийн өмнө зуслангийн байшин хаус моданд орж байсан бол
            бид эргэлт хийж нэгдсэн дэд бүтэц бүхий вилла хотхон төсөл гэх
            ойлголтыг нийтэд өгсөн билээ. Бидний харж буй дараагийн тренд бол
            өрсөлдөөнөөс эрс ялгарсан буюу хотхоноос илүү том бие даасан суурин
            газрын бүтээн байгуулалт юм.
          </p>
          <br />
          <p>
            Хадат вилла 4 төсөл маань хэрэглэгчдийн олж харж амжаагүй байгаа
            дараах үнэ цэнүүдийг нийтэд ойлгуулж чадсанаар бусад төслүүдээс
            ялгарч давуу талыг бий болгож байна.
          </p>
          <ul className="pb-32 ml-5">
            <li className="list-disc">Тансаг байгаль, алсыг харах харууц</li>
            <li className="list-disc">Байршил ирээдүйн бүсийн хөгжил</li>
            <li className="list-disc">Концепт архитектур төлөвлөлт </li>
            <li className="list-disc">
              Ресорт амьдралын хэв маяг (Сургууль цэцэрлэг,Клуб хаус, Ресторан,
              Лоунж, Спа)
            </li>
            <li className="list-disc">Коммунити, оршин суугчид</li>
            <li className="list-disc">Хөрөнгө оруулалтын өгөөж</li>
          </ul>
        </div>
        <div className="flex-1 pl-3">
          <div className="img">
            <Image
              src={"/img/house.jpg"}
              alt="product"
              width={630}
              height={833}
              layout="responsive"
            />
          </div>
        </div>
        <div className="absolute w-2/3 flex justify-around bg-white px-12 py-16 banner">
          <span className="text-center">
            <h1 className="text-5xl font-bold mb-2">
              80мк<sup>2</sup>
            </h1>
            <h6 className="uppercase">Талбайн хэмжээ</h6>
          </span>
          <span className="text-center">
            <h1 className="text-5xl font-bold mb-2">215 сая</h1>
            <h6 className="uppercase">Захиалга авч буй үнэ</h6>
          </span>
          <span className="text-center">
            <h1 className="text-5xl font-bold mb-2">
              30мк<sup>2</sup>, 60мк<sup>2</sup>
            </h1>
            <h6 className="uppercase">Хувийн эзэмшлийн газар</h6>
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
            sx={{ width: "4rem", height: "4rem", fill: "#fec405" }}
          />
          <h2 className="my-8 font-semibold text-3xl capitalize">халаалт</h2>
          <p>
            Карборобот Унгар улсын нам даралтын уурын зуух 8 ширхэг
            суурилуулагдсан бөгөөд айл бүр нэгдсэн халаалтын шугамд холбогдсон.
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <EditRoadRounded
            sx={{ width: "4rem", height: "4rem", fill: "#fec405" }}
          />
          <h2 className="my-8 font-semibold text-3xl capitalize">зам</h2>
          <p>
            СБД Бэлхийн засмал замаар 16 км яваад, Бэлх Хадатын амаар 4.0 км
            асфальтан замаар явж хотхонд хүрнэ. 2022 оны 9 сард 1.1 км зам
            ашиглалтанд орно.
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <ElectricalServicesRounded
            sx={{ width: "4rem", height: "4rem", fill: "#fec405" }}
          />
          <h2 className="my-8 font-semibold text-3xl capitalize">цахилгаан</h2>
          <p>КТПН 400 кВа 8 ш суурилуулагдана.</p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <WaterDamageRounded
            sx={{ width: "4rem", height: "4rem", fill: "#fec405" }}
          />
          <h2 className="my-8 font-semibold text-3xl">Цэвэр ус</h2>
          <p>
            Гүний худаг 120 м, 6 ш эх үүсвэртэй. 200 тн нөөцийн савтай, нэгдсэн
            байдлаар халаалтын шугамтай зэрэгцэн угсрагдаж айл бүртэй
            холбогдсон.
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <CountertopsRounded
            sx={{ width: "4rem", height: "4rem", fill: "#fec405" }}
          />
          <h2 className="my-8 font-semibold text-3xl">Бохирын систем</h2>
          <p>
            Септик системээр бохирын асуудлыг шийдсэн бөгөөд айл бүр бохирын
            системтэй холбогдоно.
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <CableRounded
            sx={{ width: "4rem", height: "4rem", fill: "#fec405" }}
          />
          <h2 className="my-8 font-semibold text-3xl">Харилцаа холбоо</h2>
          <p>
            Мобиком, Юнителийн гар утасны сүлжээ орсон. Юнивишний гурвалсан
            үйлчилгээ орохоор төлөвлөгдсөн.
          </p>
        </div>
      </div>
      <Box display={"flex"} justifyContent={"center"}>
        <Link href="https://cdn.fbsbx.com/v/t59.2708-21/283197136_570055881240913_1062287272156225492_n.pdf/KH4-%D0%B1%D1%80%D0%BE%D1%88%D1%83%D1%80.pdf?_nc_cat=107&ccb=1-7&_nc_sid=0cab14&_nc_ohc=wlWqeIUaIv0AX-V7WzD&_nc_ht=cdn.fbsbx.com&oh=03_AVI_MrplIeQWE3_POKO7iIWa0C6GJMDJqZSCj3uArUgjrQ&oe=62B4B040&dl=1">
          <BootstrapButton variant="contained" className="full-width">
            Брошур татах
          </BootstrapButton>
        </Link>
      </Box>
      <br />
    </>
  );
}
