import Title from "../Title";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { AddCircleOutlineRounded } from "@mui/icons-material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LoanDetails = ({ items }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: "#fec716" } }}
            aria-label="basic tabs"
            sx={{
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
              },
            }}
          >
            <Tab className="tab" label="Урьдчилгаа 30%" {...a11yProps(0)} />
            <Tab className="tab" label="Урьдчилгаа 10%" {...a11yProps(1)} />
            <Tab className="tab" label="Тавигдах шаардлага" {...a11yProps(2)} />
            <Tab className="tab" label="Бүрдүүлэх материал" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="loan flex">
            <div className="flex-1 pr-24 title">
              <Title
                subtitle={"Хадат Вилла 4"}
                title={"Зээлийн давуу тал"}
                items="left"
              />
              <div className="mt-12">
                <p className="my-3">
                  Зээлийн шийдвэрийг 24 цагт гаргаж байгаа нь Монголдоо анхдагч
                  үл хөдлөх хөрөнгийн санхүүжилт олгох үйлчилгээ байх болно.
                </p>
                <p className="my-3">
                  Цаг хугацааг тань хэмнэн нэмэлт барьцаа шаардахгүй бөгөөд
                  түргэн шуурхай шийдвэрлэх боломжтой.
                </p>
                <p className="my-3">
                  Бусад санхүүгийн байгууллагуудтай харьцуулахад хамгийн бага
                  хүүг бид санал болгож байгаагаас гадна зээлийн эргэн төлөлтийг
                  таны өөрийн санхүүгийн чадамжид суурилсан төлбөрийн графикаар
                  төлөх боломжийг олгоно.
                </p>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="loan flex">
            <div className="flex-1 pr-24 title">
              <Title
                subtitle={"Хадат Вилла 4"}
                title={"Зээлийн давуу тал"}
                items="left"
              />
              <div className="mt-12">
                <p className="my-3">
                  Зээлийн шийдвэрийг 24 цагт гаргаж байгаа нь Монголдоо анхдагч
                  үл хөдлөх хөрөнгийн санхүүжилт олгох үйлчилгээ байх болно.
                </p>
                <p className="my-3">
                  Цаг хугацааг тань хэмнэн нэмэлт барьцаа шаардахгүй бөгөөд
                  түргэн шуурхай шийдвэрлэх боломжтой.
                </p>
                <p className="my-3">
                  Бусад санхүүгийн байгууллагуудтай харьцуулахад хамгийн бага
                  хүүг бид санал болгож байгаагаас гадна зээлийн эргэн төлөлтийг
                  таны өөрийн санхүүгийн чадамжид суурилсан төлбөрийн графикаар
                  төлөх боломжийг олгоно.
                </p>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="loan flex">
            <div className="flex-1 pr-24 title">
              <Title
                subtitle={"Хадат Вилла 4"}
                title={"Зээлийн давуу тал"}
                items="left"
              />
              <div className="mt-12">
                <p className="my-3">
                  Зээлийн шийдвэрийг 24 цагт гаргаж байгаа нь Монголдоо анхдагч
                  үл хөдлөх хөрөнгийн санхүүжилт олгох үйлчилгээ байх болно.
                </p>
                <p className="my-3">
                  Цаг хугацааг тань хэмнэн нэмэлт барьцаа шаардахгүй бөгөөд
                  түргэн шуурхай шийдвэрлэх боломжтой.
                </p>
                <p className="my-3">
                  Бусад санхүүгийн байгууллагуудтай харьцуулахад хамгийн бага
                  хүүг бид санал болгож байгаагаас гадна зээлийн эргэн төлөлтийг
                  таны өөрийн санхүүгийн чадамжид суурилсан төлбөрийн графикаар
                  төлөх боломжийг олгоно.
                </p>
              </div>
            </div>
            <div className="flex-1 check-list-size">
              <div>
                <ul class="check-list">
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
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="loan flex">
            <div className="flex-1 pr-24 title">
              <Title
                subtitle={"Хадат Вилла 4"}
                title={"Зээлийн давуу тал"}
                items="left"
              />
              <div className="mt-12">
                <p className="my-3">
                  Зээлийн шийдвэрийг 24 цагт гаргаж байгаа нь Монголдоо анхдагч
                  үл хөдлөх хөрөнгийн санхүүжилт олгох үйлчилгээ байх болно.
                </p>
                <p className="my-3">
                  Цаг хугацааг тань хэмнэн нэмэлт барьцаа шаардахгүй бөгөөд
                  түргэн шуурхай шийдвэрлэх боломжтой.
                </p>
                <p className="my-3">
                  Бусад санхүүгийн байгууллагуудтай харьцуулахад хамгийн бага
                  хүүг бид санал болгож байгаагаас гадна зээлийн эргэн төлөлтийг
                  таны өөрийн санхүүгийн чадамжид суурилсан төлбөрийн графикаар
                  төлөх боломжийг олгоно.
                </p>
              </div>
            </div>
            <div className="flex-1 check-list-size">
              <div>
                <ul class="check-list">
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
        </TabPanel>
      </Box>
      <div className="loan flex"></div>
    </>
  );
};

export default LoanDetails;
