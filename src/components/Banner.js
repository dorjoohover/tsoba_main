import Image from "next/image";
const Banner = () => {
  return (
    <div className="mx-auto header_banner absolute z-30 bottom-0 flex bg-white py-12 px-20">
      <div className="flex flex-col items-center text-center">
        <Image src="/img/target.svg" alt="target" height={70} width={70} />

        <h2 className="text-2xl font-semibold  my-4">Эрхэм зорилго</h2>
        <p className="text-zinc-500">
          Бид амины орон сууц худалдан авч буй харилцагчдын санхүүгийн чадамжид
          үндэслэн тэдний хүлээлтэнд нийцсэн санхүүжилтыг санал болгон худалдан
          авалтыг нь дэмжинэ.
        </p>
      </div>
      <span className="w-2 bg-slate-300 mx-20"></span>
      <div className="flex flex-col items-center text-center">
        <Image src="/img/binoculars.svg" alt="target" height={70} width={95} />
        <h2 className="text-2xl font-semibold  my-4">Алсын хараа</h2>
        <p className="text-zinc-500">
          Зах зээлийн судалгаа шинжилгээнд үндэслэн харилцагчдынхаа хүсэл
          шаардлагад нийцэхүйц санхүүгийн эрэлт хэрэгцээг хангасан харилцагч
          төвтэй цогц үйлчилгээг бий болгоно.
        </p>
      </div>
    </div>
  );
};

export default Banner;
