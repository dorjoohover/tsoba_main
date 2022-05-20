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
            “Хадатын хөндий” хэмээх эко суурин нь олон өрх айл төвлөрсөн,
            ухаалаг зөв төлөвлөлттэй, орчин үеийн инженерийн дэд бүтцийн
            шийдлээр хийгдэснээр оршин суугч нартаа олон давуу талыг бий болгож,
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
            Одоогоос 10 жилийн өмнө зуслангийн байшин хаус моданд орж байсан бол
            бид эргэлт хийж нэгдсэн дэд бүтэц бүхий вилла хотхон төсөл гэх
            ойлголтыг нийтэд өгсөн билээ. Бидний харж буй дараагийн тренд бол
            өрсөлдөөнөөс эрс ялгарсан буюу хотхоноос илүү том бие даасан суурин
            газрын бүтээн байгуулалт юм.
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
              src={"/img/khadat-4.jpg"}
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
              80мк<sup>2</sup>
            </h1>
            <h6 className="uppercase">Талбайн хэмжээ</h6>
          </span>
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">2</h1>
            <h6 className="uppercase">давхар</h6>
          </span>
          <span className="text-center">
            <h1 className="text-6xl font-bold mb-2">195 сая</h1>
            <h6 className="uppercase">Захиалга авч буй анхны үнэ</h6>
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
            sx={{ width: "4rem", height: "4rem", fill: "#6cb872" }}
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
            sx={{ width: "4rem", height: "4rem", fill: "#6cb872" }}
          />
          <h2 className="my-8 font-semibold text-3xl capitalize">зам</h2>
          <p>
            СБД Бэлхийн засмал замаар 16 км яваад, Бэлх Хадатын амаар 4.0 км
            асфальтан замаар явж хотхонд хүрнэ
          </p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <ElectricalServicesRounded
            sx={{ width: "4rem", height: "4rem", fill: "#6cb872" }}
          />
          <h2 className="my-8 font-semibold text-3xl capitalize">цахилгаан</h2>
          <p>КТПН 400 кВа 8 ш суурилуулагдана.</p>
        </div>
        <div className="flex flex-col w-4/5 mx-auto text-justify items-center ">
          <WaterDamageRounded
            sx={{ width: "4rem", height: "4rem", fill: "#6cb872" }}
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
            sx={{ width: "4rem", height: "4rem", fill: "#6cb872" }}
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
            sx={{ width: "4rem", height: "4rem", fill: "#6cb872" }}
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
