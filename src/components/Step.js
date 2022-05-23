import { Box, Grid } from "@mui/material";

import { styled } from "@mui/material/styles";
import { House, CreditScore, Key } from "@mui/icons-material";
import { Typography } from "antd";
import HeaderTitle from "./Header_title";
import Image from "next/image";
const GripItem = styled(Grid)`
  min-width: 396px;
  position: relative;
  align-items: center;
  padding: 30px;
  flex-direction: column;
  transition: 0.3s all ease;
  article {
    text-align: center;
    &:nth-child(2) {
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }
  article:nth-child(3) {
    color: #333;
  }
  div {
    transition: 0.3s ease all;
  }
  &:hover {
    div {
      background: #fec405;
    }
    svg {
      fill: #6cb872;
    }
    border: none;
    transition: 0.3s all ease;

    article:nth-child(2),
    article:nth-child(1) {
      color: #6cb872;
    }
    article:nth-child(3) {
      color: #fff;
    }
  }
`;

const Step = () => {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        margin: "auto",
        padding: "300px 10px 90px 10px",
      }}
    >
      <HeaderTitle
        first_text={"ХЭРХЭН ХАУСАА"}
        last_text={"ХУДАЛДАН АВАХ ВЭ?"}
      />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={16}
      >
        <div className="flex flex-col item-between">
          <Box minWidth={320} maxWidth={320} mb={16}>
            <div className="flex justify-between w-full items-end mb-4">
              <h2 className="text-xl">Хаусаа сонгох</h2>
              <h1 className="text-5xl text_primary_color font-semibold ">01</h1>
            </div>
            <p className="text-justify">
              Үл хөдлөх хөрөгшийн салбарт ажиллаж буй олон жилийн туршлагатай,
              барилгын тэргүүлэх компаниудын төсөлтэй танилцаж хаусаа сонгох
              боломжтой.{" "}
            </p>
          </Box>
          <Box minWidth={320} maxWidth={320}>
            <div className="flex justify-between w-full items-end mb-4">
              <h2 className="text-xl">Хаусаа хүлээж авах</h2>
              <h1 className="text-5xl text_primary_color font-semibold ">03</h1>
            </div>
            <p className="text-justify">
              Бидний хамтын ажиллагааны үр дүнд та Эх орондоо өөрийн үл хөдлөх
              хөрөнгийг худалдан авч түлхүүрээ гардан авах болно.
            </p>
          </Box>
        </div>
        <Box
          position={"relative"}
          height={472}
          sx={{ top: "-32px", width: "auto" }}
          display={"flex"}
        >
          <Box
            backgroundColor={"rgba(0, 0, 0, .15)"}
            width={"117px"}
            position={"absolute"}
            height={"1.6px"}
            top={"80px"}
            left={"-117px"}
          ></Box>
          <Box
            border={"#FEC405 solid 2px"}
            borderRadius={"100%"}
            position={"absolute"}
            top={"76px"}
            left={"-127px"}
            p={0.5}
          ></Box>
          <Box
            backgroundColor={"rgba(0, 0, 0, .15)"}
            width={"117px"}
            position={"absolute"}
            height={"1.6px"}
            left={"-117px"}
            bottom={"80px"}
          ></Box>
          <Box
            border={"#FEC405 solid 2px"}
            borderRadius={"100%"}
            position={"absolute"}
            bottom={"74px"}
            left={"-127px"}
            p={0.5}
          ></Box>
          <Box
            backgroundColor={"rgba(0, 0, 0, .15)"}
            position={"relative"}
            width={"1.6px"}
          ></Box>
          <Box
            backgroundColor={"rgba(0, 0, 0, .15)"}
            width={"117px"}
            position={"absolute"}
            height={"1.6px"}
            top={"calc(50% - 0.8px)"}
            left={"0px"}
          ></Box>
          <Box
            border={"#FEC405 solid 2px"}
            borderRadius={"100%"}
            position={"absolute"}
            top={"calc(50% - 4.8px)"}
            right={"-127px"}
            p={0.5}
          ></Box>
        </Box>
        <Box minWidth={320} maxWidth={320}>
          <div className="flex justify-between w-full items-end mb-4">
            <h2 className="text-xl">Худалдан авах хүсэлт илгээх</h2>
            <h1 className="text-5xl text_primary_color font-semibold ">02</h1>
          </div>
          <p className="text-justify">
            Та хүссэн хаусаа төлбөрийн нөхцөл сонгон худалдан авах боломжтой.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Step;
