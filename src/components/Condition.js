import HeaderTitle from "./Header_title";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
const BootstrapButton = styled(Button)({
  borderRadius: 0,
  backgroundColor: "#FEC405",
  marginLeft: "50%",
  transform: "translateX(-50%)",
  "&:hover": {
    backgroundColor: "#FEC405",
    borderColor: "#FEC405",
  },
});
const Condition = () => {
  return (
    <Box backgroundColor={"#D3D3D330"} py={"90px"}>
      <HeaderTitle
        first_text={"ЗАХИАЛАГЧИД САНАЛ БОЛГОХ"}
        last_text={"НӨХЦӨЛ"}
      />
      <Typography
        variant="body1"
        my={2}
        textAlign="center"
        maxWidth={700}
        mx="auto"
      >
        Зээлийн шийдвэрийг 24 цагт гаргаж байгаа нь Монголдоо анхдагч үл хөдлөх
        хөрөнгийн санхүүжилт олгох үйлчилгээ.
      </Typography>
      <Box
        py={4}
        display={"flex"}
        justifyContent="space-between"
        maxWidth={1200}
        width={900}
        mx="auto"
        minWidth={875}
        my={4}
      >
        <Box
          position="relative"
          border={"#FEC405 2px solid"}
          alignItems={"center"}
          justifyContent="center"
          p={4}
          width={140}
          height={140}
        >
          <h1 className="text-center text-3xl font-semibold">
            18-24 <br /> сар
          </h1>
          <Box
            position={"absolute"}
            backgroundColor={"#f7f7f7"}
            py={1}
            right={"0%"}
            top={"50%"}
            sx={{ transform: "translate(50%, -50%)" }}
            fontSize="14px"
          >
            Зээлийн
            <br /> хугацаа
          </Box>
        </Box>
        <Box
          position="relative"
          border={"#FEC405 2px solid"}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          p={4}
          width={140}
          height={140}
        >
          <h1 className="text-center text-3xl font-semibold">30%</h1>
          <Box
            position={"absolute"}
            backgroundColor={"#f7f7f7"}
            py={1}
            right={"15px"}
            top={"50%"}
            sx={{ transform: "translate(100%, -50%)" }}
            fontSize="14px"
          >
            Урьдчилгаа
            <br />
            хуваан
            <br />
            төлөхгүй
          </Box>
        </Box>
        <Box
          position="relative"
          border={"#FEC405 2px solid"}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          p={4}
          width={140}
          height={140}
        >
          <h1 className="text-center text-3xl font-semibold">20%</h1>
          <Box
            position={"absolute"}
            backgroundColor={"#f7f7f7"}
            py={1}
            right={"15px"}
            top={"50%"}
            sx={{ transform: "translate(100%, -50%)" }}
            fontSize="14px"
          >
            Урьдчилгаа 10%
            <br />
            6 сар хүүгүй
            <br />
            хуваан төлөх
          </Box>
        </Box>
        <Box
          position="relative"
          border={"#FEC405 2px solid"}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          p={4}
          width={140}
          height={140}
        >
          <h1 className="text-center text-3xl font-semibold">₮,$</h1>
          <Box
            position={"absolute"}
            backgroundColor={"#f7f7f7"}
            py={1}
            right={"15px"}
            top={"50%"}
            sx={{ transform: "translate(100%, -50%)" }}
            fontSize="14px"
          >
            Боломжит
            <br />
            валют
          </Box>
        </Box>
      </Box>
      <Link href="/">
        <BootstrapButton variant="contained">
          Дэлгэрэнгүй мэдээлэлтэй танилцах
        </BootstrapButton>
      </Link>
    </Box>
  );
};

export default Condition;
