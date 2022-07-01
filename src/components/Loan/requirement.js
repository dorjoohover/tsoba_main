import Title from "../Title";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { AddCircleOutlineRounded } from "@mui/icons-material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

const Requirement = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/img/logo-homey.png"
              alt="target"
              height={109}
              width={208}
            />
          </div>
          <div className="loan flex">
            <div className="flex-1 pr-24 check-list-size">
              <div className="requirement">
                <Title
                  subtitle={"Тавигдах шаардлага"}
                  // title={"Урьдчилгаа 30%"}
                  items="left"
                />
                <ul className="check-list">
                  <li>Монгол улсын иргэн болон хуулийн этгээд байх</li>
                  <li>Эрхзүйн бүрэн чадамжтай байх</li>
                  <li>Орлогын тогтмол эх үүсвэртэй байх</li>
                  <li>
                    Тогтвортой ажилласан болон бизнес эрхэлсэн хугацаа 6 сараас
                    дээш байх
                  </li>
                  <li>
                    Хүсэж буй зээлийн дүн худалдан авч байгаа ҮХХ-ийн үнийн
                    дүнгийн 70% -аас хэтрэхгүй байх
                  </li>
                  <li>Хугацаа хэтэрсэн чанаргүй зээлийн үлдэгдэлгүй байх</li>
                </ul>
              </div>
            </div>
            <div className="flex-1 pr-24 check-list-size">
              <div className="requirement">
                <Title
                  subtitle={"Бүрдүүлэх материал"}
                  // title={"Урьдчилгаа 30%"}
                  items="left"
                />
                <ul className="check-list">
                  <li>Хувь хүнтэй холбоотой лавлагаанууд /E-Mongolia/</li>
                  <li>Цалингийн болон бизнесийн орлого нотлох баримт бичиг</li>
                  <li>Дансны хуулга</li>
                  <li>Бизнесийн үйл ажиллагаатай холбоотой бичиг баримт</li>
                  <li>
                    Монголд эсвэл гадаадад оршин суугааг нотлох баримт бичиг
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Requirement;
