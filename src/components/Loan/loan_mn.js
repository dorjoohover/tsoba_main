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
            <Tab className="tab" label="215 сая" {...a11yProps(0)} />
            <Tab className="tab" label="235 сая" {...a11yProps(1)} />
            <Tab className="tab" label="245 сая" {...a11yProps(2)} />
            <Tab className="tab" label="265 сая" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="loan flex">
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 30%"}
                // title={"Урьдчилгаа 30%"}
                items="left"
              />
              <br />
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2">215,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2">150,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2">64,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хугацаа</td>
                  <td className="px-2 font-bold border-r-2">24 сар</td>
                  <td className="px-2 font-bold">18 сар</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хүү</td>
                  <td className="px-2 font-bold border-r-2">12%</td>
                  <td className="px-2 font-bold">10%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2">7,084,000</td>
                  <td className="px-2 font-bold">9,030,000</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                  </td>
                  <td className="px-2 font-bold ">19,500,000</td>
                  <td className="px-2 font-bold">12,100,000</td>
                </tr>
              </table>
            </div>
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                // title={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                items="left"
              />

              <br />
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2"> 215,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2"> 150,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2"> 43,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">
                    Хуваан төлөх урьдчилгаа төлбөрийн хэмжээ
                  </td>
                  <td className="px-2"> 21,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хугацаа</td>
                  <td className="px-2 font-bold border-r-2">24 сар</td>
                  <td className="px-2 font-bold">18 сар</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хүү</td>
                  <td className="px-2 font-bold border-r-2">12%</td>
                  <td className="px-2 font-bold">10%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Эхний 6 сар</td>
                  <td className="px-2 font-bold border-r-2"> 10,600,000</td>
                  <td className="px-2 font-bold"> 12,600,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2"> 7,084,000</td>
                  <td className="px-2 font-bold"> 9,030,000</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                  </td>
                  <td className="px-2 font-bold "> 19,500,000</td>
                  <td className="px-2 font-bold"> 12,100,000</td>
                </tr>
              </table>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="loan flex">
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 30%"}
                // title={"Урьдчилгаа 30%"}
                items="left"
              />
              <br />
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2"> 235,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2"> 164,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2"> 70,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хугацаа</td>
                  <td className="px-2 font-bold border-r-2">24 сар</td>
                  <td className="px-2 font-bold">18 сар</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хүү</td>
                  <td className="px-2 font-bold border-r-2">12%</td>
                  <td className="px-2 font-bold">10%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2"> 7,700,000</td>
                  <td className="px-2 font-bold"> 9,800,000</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                  </td>
                  <td className="px-2 font-bold "> 21,300,000</td>
                  <td className="px-2 font-bold"> 13,300,000</td>
                </tr>
              </table>
            </div>
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                // title={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                items="left"
              />

              <br />
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2"> 235,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2"> 164,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2"> 47,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">
                    Хуваан төлөх урьдчилгаа төлбөрийн хэмжээ
                  </td>
                  <td className="px-2"> 23,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хугацаа</td>
                  <td className="px-2 font-bold border-r-2">24 сар</td>
                  <td className="px-2 font-bold">18 сар</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хүү</td>
                  <td className="px-2 font-bold border-r-2">12%</td>
                  <td className="px-2 font-bold">10%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Эхний 6 сар</td>
                  <td className="px-2 font-bold border-r-2"> 11,600,000</td>
                  <td className="px-2 font-bold"> 13,700,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2"> 7,700,000</td>
                  <td className="px-2 font-bold"> 9,800,000</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                  </td>
                  <td className="px-2 font-bold "> 21,300,000</td>
                  <td className="px-2 font-bold"> 13,300,000</td>
                </tr>
              </table>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="loan flex">
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 30%"}
                // title={"Урьдчилгаа 30%"}
                items="left"
              />
              <br />
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2"> 245,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2"> 171,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2"> 73,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хугацаа</td>
                  <td className="px-2 font-bold border-r-2">24 сар</td>
                  <td className="px-2 font-bold">18 сар</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хүү</td>
                  <td className="px-2 font-bold border-r-2">12%</td>
                  <td className="px-2 font-bold">10%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2"> 8,070,000</td>
                  <td className="px-2 font-bold"> 10,200,000</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                  </td>
                  <td className="px-2 font-bold "> 22,200,000</td>
                  <td className="px-2 font-bold"> 13,800,000</td>
                </tr>
              </table>
            </div>
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                // title={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                items="left"
              />

              <br />
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2"> 245,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2"> 171,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2"> 49,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">
                    Хуваан төлөх урьдчилгаа төлбөрийн хэмжээ
                  </td>
                  <td className="px-2"> 24,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хугацаа</td>
                  <td className="px-2 font-bold border-r-2">24 сар</td>
                  <td className="px-2 font-bold">18 сар</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хүү</td>
                  <td className="px-2 font-bold border-r-2">12%</td>
                  <td className="px-2 font-bold">10%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Эхний 6 сар</td>
                  <td className="px-2 font-bold border-r-2"> 12,100,000</td>
                  <td className="px-2 font-bold"> 14,300,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2"> 8,070,000</td>
                  <td className="px-2 font-bold"> 10,200,000</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                  </td>
                  <td className="px-2 font-bold "> 22,200,000</td>
                  <td className="px-2 font-bold"> 13,800,000</td>
                </tr>
              </table>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="loan flex">
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 30%"}
                // title={"Урьдчилгаа 30%"}
                items="left"
              />
              <br />
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2"> 265,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2"> 185,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2"> 79,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хугацаа</td>
                  <td className="px-2 font-bold border-r-2">24 сар</td>
                  <td className="px-2 font-bold">18 сар</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хүү</td>
                  <td className="px-2 font-bold border-r-2">12%</td>
                  <td className="px-2 font-bold">10%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2"> 8,730,000</td>
                  <td className="px-2 font-bold"> 11,100,000</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                  </td>
                  <td className="px-2 font-bold "> 24,000,000</td>
                  <td className="px-2 font-bold"> 15,000,000</td>
                </tr>
              </table>
            </div>
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                // title={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                items="left"
              />

              <br />
              <table>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2"> 265,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2"> 185,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2"> 53,000,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">
                    Хуваан төлөх урьдчилгаа төлбөрийн хэмжээ
                  </td>
                  <td className="px-2"> 26,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хугацаа</td>
                  <td className="px-2 font-bold border-r-2">24 сар</td>
                  <td className="px-2 font-bold">18 сар</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хүү</td>
                  <td className="px-2 font-bold border-r-2">12%</td>
                  <td className="px-2 font-bold">10%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Эхний 6 сар</td>
                  <td className="px-2 font-bold border-r-2"> 13,100,000</td>
                  <td className="px-2 font-bold"> 15,500,000</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2"> 8,730,000</td>
                  <td className="px-2 font-bold"> 11,100,000</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                  </td>
                  <td className="px-2 font-bold "> 24,000,000</td>
                  <td className="px-2 font-bold"> 15,000,000</td>
                </tr>
              </table>
            </div>
          </div>
        </TabPanel>
      </Box>
      <div className="loan flex"></div>
    </>
  );
};

export default LoanDetails;
