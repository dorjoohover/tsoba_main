import Image from "next/image";
import Title from "./Title";
import { Box } from "@mui/material";
import HeaderTitle from "./Header_title";
const About = () => {
  return (
    <Box
      maxWidth={1100}
      display={"flex"}
      mx={"auto"}
      alignItems="center"
      flexDirection={"column"}
      py={4}
    >
      <HeaderTitle first_text={"БИДНИЙ"} last_text={"тухай"} />
      <div className="flex items-center">
        <Box width={"70%"}>
          <Image
            className="about-image-ext"
            src={"/img/logo-homey.png"}
            alt="about"
            layout="responsive"
            width={2300}
            height={1196}
          />
        </Box>

        <div className="text-left ml-12 p-3">
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
        </div>
      </div>
    </Box>
  );
};

export default About;
