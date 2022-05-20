  import { Box, Grid } from "@mui/material";
import Title from "./Title";
import { styled } from "@mui/material/styles";
import { House , CreditScore , Key} from "@mui/icons-material";
import { Typography } from "antd";
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
    <Box sx={{ maxWidth: "1300px", margin: "0 auto 90px auto" , padding: '10px'}}>
      <Title
        subtitle={"Зээлийн алхам"}
        title={"Хэрхэн лизингийн үйлчилгээнд хамрагдах вэ?"}
        items={"center"}
      />
      <Grid
        container
        mt={8}
        columns={{ xs: 3, sx: 3, sm: 4, md: 12, lg: 12 }}
        justifyContent={"center"}
      >
        <GripItem item xs={1} sm={4} md={6} lg={4} sx={1}>
          <Box
            sx={{ border: " 1px #fec405 dashed" }}
            p={3}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            minHeight={250}
          >
            <House sx={{ fontSize: "60px", fill: "#fec405" }} />
            <Typography variant={"h2"}>Бүтээгдэхүүн сонгох</Typography>
            <Typography variant="p">
              Өөрт тохирсон хаусаа сонгох
            </Typography>
          </Box>
        </GripItem>
        <GripItem item xs={1} sm={4} md={6} lg={4} sx={1}>
          <Box
            sx={{ border: " 1px #fec405 dashed" }}
            p={3}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            minHeight={250}
          >
            <CreditScore sx={{ fontSize: "60px", fill: "#fec405" }} />
            <Typography variant={"h2"}>Хүсэлт гаргах </Typography>
            <Typography variant="p">
              Ямар бүтээгдэхүүн авах гэж байгаагаа хүсэлт болгон илгээх

            </Typography>
          </Box>
        </GripItem>
        <GripItem item xs={1} sm={4} md={12} lg={4} sx={1}>
          <Box
            sx={{ border: " 1px #fec405 dashed" }}
            p={3}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            minHeight={250}
          >
            <Key sx={{ fontSize: "60px", fill: "#fec405" }} />
            <Typography variant={"h2"}>Бүтээгдэхүүн хүлээн авах</Typography>
            <Typography variant="p">
              Монголд байхгүй ч та хүссэн хөрөнгөө лизингээр авах
            </Typography>
          </Box>
        </GripItem>
      </Grid>
    </Box>
  );
};

export default Step;
