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
  const [value, setValue] = React.useState(1);

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
            <Tab
              className="tab"
              label="Хаусны үнийн сонголт"
              disabled
              {...a11yProps(0)}
            />
            <Tab className="tab" label="215 сая" {...a11yProps(1)} />
            <Tab className="tab" label="235 сая" {...a11yProps(2)} />
            <Tab className="tab" label="245 сая" {...a11yProps(3)} />
            <Tab className="tab" label="265 сая" {...a11yProps(4)} />
          </Tabs>
        </Box>
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
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2">68,855$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2">48,199$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2">20,656$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хугацаа</td>
                  <td className="px-2 font-bold border-r-2">24 сар</td>
                  <td className="px-2 font-bold td_extra">18 сар</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хүү</td>
                  <td className="px-2 font-bold border-r-2">5.5%</td>
                  <td className="px-2 font-bold">5%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2">2,125$</td>
                  <td className="px-2 font-bold">2,785$</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх нийт хүү
                  </td>
                  <td className="px-2 font-bold ">2,810$</td>
                  <td className="px-2 font-bold">1,930$</td>
                </tr>
              </table>
            </div>
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 20% /10%-ийг хүүгүй хуваан төлөх/"}
                // title={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                items="left"
              />

              <br />
              <table>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2">68,855$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2">48,199$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2">13,771$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">
                    Хуваан төлөх урьдчилгаа төлбөрийн хэмжээ
                  </td>
                  <td className="px-2">6,886$</td>
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
                  <td className="px-2 font-bold border-r-2">5.5%</td>
                  <td className="px-2 font-bold">5%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Эхний 6 сар</td>
                  <td className="px-2 font-bold border-r-2">3,273$</td>
                  <td className="px-2 font-bold">3,933$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2">2,125$</td>
                  <td className="px-2 font-bold">2,785$</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх нийт хүү
                  </td>
                  <td className="px-2 font-bold ">2,810$</td>
                  <td className="px-2 font-bold">1,930$</td>
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
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2">75,260$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2">52,682$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2">22,578$</td>
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
                  <td className="px-2 font-bold border-r-2">5.5%</td>
                  <td className="px-2 font-bold">5%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2">2,323$</td>
                  <td className="px-2 font-bold">3,044$</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх нийт хүү
                  </td>
                  <td className="px-2 font-bold ">3,071$</td>
                  <td className="px-2 font-bold">2,110$</td>
                </tr>
              </table>
            </div>
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 20% /10%-ийг хүүгүй хуваан төлөх/"}
                // title={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                items="left"
              />

              <br />
              <table>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2">75,260$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2">52,682$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2">15,052$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">
                    Хуваан төлөх урьдчилгаа төлбөрийн хэмжээ
                  </td>
                  <td className="px-2">7,526$</td>
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
                  <td className="px-2 font-bold border-r-2">5.5%</td>
                  <td className="px-2 font-bold">5%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Эхний 6 сар</td>
                  <td className="px-2 font-bold border-r-2">3,577$</td>
                  <td className="px-2 font-bold">4,298$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2">2,323$</td>
                  <td className="px-2 font-bold">3,044$</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх нийт хүү
                  </td>
                  <td className="px-2 font-bold ">3,071$</td>
                  <td className="px-2 font-bold">2,110$</td>
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
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2">78,463$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2">54,923$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2">23,539$</td>
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
                  <td className="px-2 font-bold border-r-2">5.5%</td>
                  <td className="px-2 font-bold">5%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2">2,422$</td>
                  <td className="px-2 font-bold">3,174$</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх нийт хүү
                  </td>
                  <td className="px-2 font-bold ">3,202$</td>
                  <td className="px-2 font-bold">2,200$</td>
                </tr>
              </table>
            </div>
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 20% /10%-ийг хүүгүй хуваан төлөх/"}
                // title={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                items="left"
              />

              <br />
              <table>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2">78,463$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2">54,923$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2">15,693$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">
                    Хуваан төлөх урьдчилгаа төлбөрийн хэмжээ
                  </td>
                  <td className="px-2">7,846$</td>
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
                  <td className="px-2 font-bold border-r-2">5.5%</td>
                  <td className="px-2 font-bold">5%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Эхний 6 сар</td>
                  <td className="px-2 font-bold border-r-2">3,730$</td>
                  <td className="px-2 font-bold">4,481$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2">2,422$</td>
                  <td className="px-2 font-bold">3,174$</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх нийт хүү
                  </td>
                  <td className="px-2 font-bold ">3,202$</td>
                  <td className="px-2 font-bold">2,200$</td>
                </tr>
              </table>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
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
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2">84,868$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2">59,408$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2">25,460$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хугацаа</td>
                  <td className="px-2 font-bold border-r-2">24 сар</td>
                  <td className="px-2 font-bold  td_extra">18 сар</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Хүү</td>
                  <td className="px-2 font-bold border-r-2">5.5%</td>
                  <td className="px-2 font-bold">5%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2">2,620$</td>
                  <td className="px-2 font-bold">3,433$</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх нийт хүү
                  </td>
                  <td className="px-2 font-bold ">3,463$</td>
                  <td className="px-2 font-bold">2,379$</td>
                </tr>
              </table>
            </div>
            <div className="flex-1 pr-24">
              <Title
                subtitle={"Урьдчилгаа 20% /10%-ийг хүүгүй хуваан төлөх/"}
                // title={"Урьдчилгаа 10% 6 сар хүүгүй хуваан төлөх 20%"}
                items="left"
              />

              <br />
              <table>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Байрны нийт үнэ</td>
                  <td className="px-2">84,868$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                  <td className="px-2">59,408$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">Урьдчилгаа</td>
                  <td className="px-2">16,947$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2">
                    Хуваан төлөх урьдчилгаа төлбөрийн хэмжээ
                  </td>
                  <td className="px-2">8,487$</td>
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
                  <td className="px-2 font-bold border-r-2">5.5%</td>
                  <td className="px-2 font-bold">5%</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Эхний 6 сар</td>
                  <td className="px-2 font-bold border-r-2">4,034$</td>
                  <td className="px-2 font-bold">4,847$</td>
                </tr>
                <tr>
                  <td className="px-2"></td>
                  <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                  <td className="px-2 font-bold border-r-2">2,620$</td>
                  <td className="px-2 font-bold">3,433$</td>
                </tr>
                <tr className="border-t-2 py-2">
                  <td className="px-2"></td>
                  <td className="px-2 font-bold py-4">
                    Графикийн дагуу төлөхөд харилцагчийн төлөх нийт хүү
                  </td>
                  <td className="px-2 font-bold ">3,463$</td>
                  <td className="px-2 font-bold">2,379$</td>
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
