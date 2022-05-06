import Image from "next/image";
import Title from "./Title";
const About = () => {
  return (
    <div className="flex mx-auto  mx-auto about py-32 mb-32 justify-center">
      <div className="relative about_left p-3">
        <div className="relative about_img_1 z-10">
          <Image
            src={"/img/01.jpg"}
            alt="about"
            layout="responsive"
            width={453}
            height={600}
          />
        </div>
        {/* <div className="relative about_img_2 z-20">
          <Image
            src={"/img/01.jpg"}
            alt="about"
            layout="responsive"
            width={456}
            height={622}
          />
        </div> */}
      </div>
      <div className="text-left ml-12 p-3">
        <div className="about_right">
          <Title
            title={"Товч танилцуулга"}
            subtitle={"overview"}
            items={"left"}
          />
          <p className="mt-10 mb-4">
            Амины орон сууцны зах зээл хурдацтай тэлж буй энэ үед иргэдэд бага
            хүүтэй хурдан шуурхай үйлчилгээтэй санхүүгийн байгууллагын эрэлт
            хэрэгцээ нэмэгдсээр байна.
          </p>
          <p className="mb-4">
            Иймд бид иргэдэд түргэн шуурхай, нээлттэй үйлчилж, хэрэгцээт амины
            орон сууцыг нь хамгийн бага хүүтэй олгох санхүүгийн үйлчилгээ
            үзүүлэх зорилготойгоор нээгдлээ.
          </p>
          <p>
            Бид төслүүдтэй хамтран ажиллахдаа урт хугацаандаа үнэ цэн өсөх,
            хотоос гадна байгаль дунд, дэд бүтцээ бүрэн шийдсэн, туршлагатай
            компаниудтай хамтран ажиллахыг зорих бөгөөд нэн тэргүүнд зах зээлд
            хамгийн эрэлт өндөр байгаа Хадат вилла 4 төслийг сонгон хамтран
            ажиллахаар боллоо. Зөвхөн дотооддоо төдийгүй гадаад дахь
            Монголчууддаа зориулсан зээлийн бүтээгдэхүүнийг мөн санал болгох юм.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
