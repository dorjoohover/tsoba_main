import Title from "../Title";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { AddCircleOutlineRounded } from "@mui/icons-material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddCircleOutlineRounded sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const LoanDetails = ({ items }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div className="loan flex">
        <div className="flex-1 pr-24 title">
          <Title
            subtitle={"Хадат Вилла 4"}
            title={"Зээлийн давуу тал"}
            items="left"
          />
          <div className="mt-12">
            <p className="my-3">
              Зээлийн шийдвэрийг 24 цагт гаргаж байгаа нь Монголдоо анхдагч үл
              хөдлөх хөрөнгийн санхүүжилт олгох үйлчилгээ байх болно.
            </p>
            <p className="my-3">
              Цаг хугацааг тань хэмнэн нэмэлт барьцаа шаардахгүй бөгөөд түргэн
              шуурхай шийдвэрлэх боломжтой.
            </p>
            <p className="my-3">
              Бусад санхүүгийн байгууллагуудтай харьцуулахад хамгийн бага хүүг
              бид санал болгож байгаагаас гадна зээлийн эргэн төлөлтийг таны
              өөрийн санхүүгийн чадамжид суурилсан төлбөрийн графикаар төлөх
              боломжийг олгоно.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ border: "none", background: "transparent" }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                backgroundColor: "transparent",
                borderBottom: "1px solid #eee",
                flexDirection: "row",
                padding: "10px 0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  color: "#2d2e32",
                  lineHeight: "1.4",
                }}
              >
                УРЬДЧИЛГАА ХУВААН ТӨЛӨХГҮЙ 30%
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "30px 0" }}>
              {items == "internal" && (
                <>
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
                      <td className="px-2">220,000,000</td>
                    </tr>
                    <tr>
                      <td className="px-2"></td>
                      <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                      <td className="px-2">154,000,000</td>
                    </tr>
                    <tr>
                      <td className="px-2"></td>
                      <td className="px-2">Урьдчилгаа</td>
                      <td className="px-2">66,000,000</td>
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
                      <td className="px-2 font-bold border-r-2">7,900,000</td>
                      <td className="px-2 font-bold">10,100,000</td>
                    </tr>
                    <tr className="border-t-2 py-2">
                      <td className="px-2"></td>
                      <td className="px-2 font-bold py-4">
                        Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                      </td>
                      <td className="px-2 font-bold ">21,800,000</td>
                      <td className="px-2 font-bold">13,600,000</td>
                    </tr>
                  </table>
                </>
              )}
              {items == "external" && (
                <>
                  <table>
                    <tr>
                      <th>215 саяын байр</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
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
                      <td className="px-2  border-r-2">2,125$</td>
                      <td className="px-2 ">2,785$</td>
                    </tr>
                    <tr className="border-t-2 py-2">
                      <td className="px-2"></td>
                      <td className="px-2  py-4">
                        Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                      </td>
                      <td className="px-2  ">2,810$</td>
                      <td className="px-2 ">1,930$</td>
                    </tr>
                  </table>

                  <table>
                    <tr>
                      <th>235 саяын байр</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
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
                      <td className="px-2  border-r-2">2,323$</td>
                      <td className="px-2 ">3,044$</td>
                    </tr>
                    <tr className="border-t-2 py-2">
                      <td className="px-2"></td>
                      <td className="px-2  py-4">
                        Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                      </td>
                      <td className="px-2  ">3,071$</td>
                      <td className="px-2 ">2,110$</td>
                    </tr>
                  </table>

                  <table>
                    <tr>
                      <th>245 саяын байр</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
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
                      <td className="px-2  border-r-2">2,422$</td>
                      <td className="px-2 ">3,174$</td>
                    </tr>
                    <tr className="border-t-2 py-2">
                      <td className="px-2"></td>
                      <td className="px-2  py-4">
                        Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                      </td>
                      <td className="px-2  ">3,202$</td>
                      <td className="px-2 ">2,200$</td>
                    </tr>
                  </table>

                  <table>
                    <tr>
                      <th>265 саяын байр</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
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
                      <td className="px-2  border-r-2">2,620$</td>
                      <td className="px-2 ">3,433$</td>
                    </tr>
                    <tr className="border-t-2 py-2">
                      <td className="px-2"></td>
                      <td className="px-2  py-4">
                        Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                      </td>
                      <td className="px-2  ">3,463$</td>
                      <td className="px-2 ">2,379$</td>
                    </tr>
                  </table>
                </>
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ border: "none", background: "transparent" }}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              sx={{
                backgroundColor: "transparent",
                borderBottom: "1px solid #eee",
                flexDirection: "row",
                padding: "10px 0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  color: "#2d2e32",
                  lineHeight: "1.4",
                }}
              >
                УРЬДЧИЛГАА 10 ХУВИЙГ 6 САР ХҮҮГҮЙ ХУВААН ТӨЛӨХ 20%
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "30px 0", fontSize: "1rem" }}>
              {items == "internal" && (
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
                    <td className="px-2">220,000,000</td>
                  </tr>
                  <tr>
                    <td className="px-2"></td>
                    <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                    <td className="px-2">154,000,000</td>
                  </tr>
                  <tr>
                    <td className="px-2"></td>
                    <td className="px-2">Урьдчилгаа</td>
                    <td className="px-2">66,000,000</td>
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
                    <td className="px-2 font-bold border-r-2">11,600,000</td>
                    <td className="px-2 font-bold">13,800,000</td>
                  </tr>
                  <tr>
                    <td className="px-2"></td>
                    <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                    <td className="px-2 font-bold border-r-2">7,900,000</td>
                    <td className="px-2 font-bold">10,100,000</td>
                  </tr>
                  <tr className="border-t-2 py-2">
                    <td className="px-2"></td>
                    <td className="px-2 font-bold py-4">
                      Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                    </td>
                    <td className="px-2 font-bold ">21,800,000</td>
                    <td className="px-2 font-bold">13,600,000</td>
                  </tr>
                </table>
              )}
              {items == "external" && (
                <>
                  <table>
                    <tr>
                      <th>215 саяын байр</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
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
                      <td className="px-2  border-r-2">2,125$</td>
                      <td className="px-2 ">2,785$</td>
                    </tr>
                    <tr className="border-t-2 py-2">
                      <td className="px-2"></td>
                      <td className="px-2  py-4">
                        Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                      </td>
                      <td className="px-2  ">2,810$</td>
                      <td className="px-2 ">1,930$</td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <th>235 саяын байр</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
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
                      <td className="px-2  border-r-2">2,323$</td>
                      <td className="px-2 ">3,044$</td>
                    </tr>
                    <tr className="border-t-2 py-2">
                      <td className="px-2"></td>
                      <td className="px-2  py-4">
                        Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                      </td>
                      <td className="px-2  ">3,071$</td>
                      <td className="px-2 ">2,110$</td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <th>245 саяын байр</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
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
                      <td className="px-2  border-r-2">2,422$</td>
                      <td className="px-2 ">3,174$</td>
                    </tr>
                    <tr className="border-t-2 py-2">
                      <td className="px-2"></td>
                      <td className="px-2  py-4">
                        Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                      </td>
                      <td className="px-2  ">3,202$</td>
                      <td className="px-2 ">2,200$</td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <th>265 саяын байр</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
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
                      <td className="px-2  border-r-2">2,620$</td>
                      <td className="px-2 ">3,433$</td>
                    </tr>
                    <tr className="border-t-2 py-2">
                      <td className="px-2"></td>
                      <td className="px-2  py-4">
                        Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                      </td>
                      <td className="px-2  ">3,463$</td>
                      <td className="px-2 ">2,379$</td>
                    </tr>
                  </table>
                </>
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{ border: "none", background: "transparent" }}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              sx={{
                backgroundColor: "transparent",
                borderBottom: "1px solid #eee",
                flexDirection: "row",
                padding: "10px 0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  color: "#2d2e32",
                  lineHeight: "1.4",
                }}
              >
                ТАВИГДАХ ШААРДЛАГА
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "30px 0", fontSize: "1rem" }}>
              <>
                <div>
                  <ul>
                    <li className="list-disc ml-4">
                      Монгол улсын иргэн болон хуулийн этгээд байх
                    </li>
                    <li className="list-disc ml-4">
                      Эрхзүйн бүрэн чадамжтай байх
                    </li>
                    <li className="list-disc ml-4">
                      Орлогын тогтмол эх үүсвэртэй байх
                    </li>
                    <li className="list-disc ml-4">
                      Тогтвортой ажилласан болон бизнес эрхэлсэн хугацаа 6
                      сараас дээш байх
                    </li>
                    <li className="list-disc ml-4">
                      Хүсэж буй зээлийн дүн худалдан авч байгаа ҮХХ-ийн үнийн
                      дүнгийн 70% -аас хэтрэхгүй байх
                    </li>
                    <li className="list-disc ml-4">
                      Хугацаа хэтэрсэн чанаргүй зээлийн үлдэгдэлгүй байх
                    </li>
                  </ul>
                </div>
              </>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{ border: "none", background: "transparent" }}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
              sx={{
                backgroundColor: "transparent",
                borderBottom: "1px solid #eee",
                flexDirection: "row",
                padding: "10px 0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  color: "#2d2e32",
                  lineHeight: "1.4",
                }}
              >
                БҮРДҮҮЛЭХ МАТЕРИАЛИЙН ЖАГШААЛТ
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "30px 0", fontSize: "1rem" }}>
              <>
                <div>
                  <ul>
                    <li className="list-disc ml-4">
                      Хувь хүнтэй холбоотой лавлагаанууд /E-Mongolia/
                    </li>
                    <li className="list-disc ml-4">
                      Цалингийн болон бизнесийн орлого нотлох баримт бичиг
                    </li>
                    <li className="list-disc ml-4">Дансны хуулга</li>
                    <li className="list-disc ml-4">
                      Бизнесийн үйл ажиллагаатай холбоотой бичиг баримт
                    </li>
                    <li className="list-disc ml-4">
                      Монголд эсвэл гадаадад оршин суугааг нотлох баримт бичиг
                    </li>
                  </ul>
                </div>
              </>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default LoanDetails;
