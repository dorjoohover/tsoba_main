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
        maxWidth: "100%",
        margin: "0px auto 0 0",
        padding: "20px 0px 90px 0px",
        // paddingTop: {
        //   lg: "300px",
        //   md: "300px",
        //   sm: "500px",
        // },
      }}
    >
      <HeaderTitle
        first_text={"ХЭРХЭН ХАУСАА"}
        last_text={"ХУДАЛДАН АВАХ ВЭ?"}
      />

      <div className="step-container">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height="100vh"
          className="step-container-box"
          pl={8}
          sx={{
            paddingLeft: "0",
          }}
          sm={{
            paddingLeft: "0",
          }}
        >
          <div className="flex flex-col item-between step">
            <Box
              minWidth={450}
              maxWidth={450}
              display={"flex"}
              alignItems={"flex-start"}
              mt={3}
              className="step-box"
            >
              <div className="flex  align-center   mb-4 step-size">
                <h1 className="text-7xl text_primary_color font-semibold ">
                  01
                </h1>
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Хаусаа сонгох</h2>
                <p className="text-justify step-text-down">
                  Үл хөдлөх хөрөнгийн салбарт ажиллаж буй олон жилийн
                  туршлагатай, барилгын тэргүүлэх компаниудын төсөлтэй танилцаж
                  хаусаа сонгох боломжтой.{" "}
                </p>
              </div>
            </Box>
            <Box
              minWidth={450}
              maxWidth={450}
              display={"flex"}
              alignItems={"flex-start"}
              mt={3}
              className="step-box"
            >
              <div className="flex  align-center   mb-4 step-size">
                <h1 className="text-7xl text_primary_color font-semibold ">
                  02
                </h1>
              </div>
              <div>
                <h2 className="text-3xl font-semibold">
                  Худалдан авах хүсэлт илгээх
                </h2>
                <p className="text-justify step-text-down">
                  Та хүссэн хаусаа төлбөрийн нөхцөл сонгон худалдан авах
                  боломжтой.
                </p>
              </div>
            </Box>
            <Box
              minWidth={450}
              maxWidth={450}
              display={"flex"}
              alignItems={"flex-start"}
              mt={3}
              className="step-box"
            >
              <div className="flex  align-center   mb-4 step-size">
                <h1 className="text-7xl text_primary_color font-semibold ">
                  03
                </h1>
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Хаусаа хүлээж авах</h2>
                <p className="text-justify step-text-down">
                  Бидний хамтын ажиллагааны үр дүнд та Эх орондоо өөрийн үл
                  хөдлөх хөрөнгийг худалдан авч түлхүүрээ гардан авах болно.
                </p>
              </div>
            </Box>
          </div>
        </Box>
        <div className="step-container-right">
          <Image
            src={"/img/zeelSud1.png"}
            alt="about"
            layout="responsive"
            width={2300}
            height={2300}
          />
        </div>
      </div>
    </Box>
  );
};

export default Step;
