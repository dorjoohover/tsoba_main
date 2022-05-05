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

            {items == "internal" && (
              <>
                <div>
                  <ul>
                    <h5 className="font-bold">ДОТООД ЗАХИАЛАГЧ НАРТ</h5>
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
            )}
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
                      <td className="px-2"></td>
                      <td className="px-2">Байрны нийт үнэ</td>
                      <td className="px-2">71,956$</td>
                    </tr>
                    <tr>
                      <td className="px-2"></td>
                      <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                      <td className="px-2">50,376$</td>
                    </tr>
                    <tr>
                      <td className="px-2"></td>
                      <td className="px-2">Урьдчилгаа</td>
                      <td className="px-2">21,590$</td>
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
                      <td className="px-2  border-r-2">2,221$</td>
                      <td className="px-2 ">2,910$</td>
                    </tr>
                    <tr className="border-t-2 py-2">
                      <td className="px-2"></td>
                      <td className="px-2  py-4">
                        Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                      </td>
                      <td className="px-2  ">2,937$</td>
                      <td className="px-2 ">2,018$</td>
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
                <table>
                  <tr>
                    <td className="px-2"></td>
                    <td className="px-2">Байрны нийт үнэ</td>
                    <td className="px-2">71,956$</td>
                  </tr>
                  <tr>
                    <td className="px-2"></td>
                    <td className="px-2">Зээлээр санхүүжүүлэх дүн-70%</td>
                    <td className="px-2">50,376$</td>
                  </tr>
                  <tr>
                    <td className="px-2"></td>
                    <td className="px-2">Урьдчилгаа</td>
                    <td className="px-2">14,393$</td>
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
                    <td className="px-2 font-bold border-r-2">3,420$</td>
                    <td className="px-2 font-bold">4,109$</td>
                  </tr>
                  <tr>
                    <td className="px-2"></td>
                    <td className="px-2 pb-4">Сард төлөх зээлийн хэмжээ</td>
                    <td className="px-2  border-r-2">2,221$</td>
                    <td className="px-2 ">2,910$</td>
                  </tr>
                  <tr className="border-t-2 py-2">
                    <td className="px-2"></td>
                    <td className="px-2  py-4">
                      Графикийн дагуу төлөхөд харилцагчийн төлөх хүү
                    </td>
                    <td className="px-2  ">2,937$</td>
                    <td className="px-2 ">2,018$</td>
                  </tr>
                </table>
              )}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default LoanDetails;
