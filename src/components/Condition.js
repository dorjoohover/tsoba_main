import HeaderTitle from "./Header_title";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
const BootstrapButton = styled(Button)({
  borderRadius: 0,
  backgroundColor: "#FEC405",
  margin: "0 20px",
  "&:hover": {
    backgroundColor: "#FEC405",
    borderColor: "#FEC405",
  },
});
const Condition = () => {
  return (
    <Box
      backgroundColor={"#D3D3D330"}
      py={"90px"}
      className="condition-header-size"
    >
      <HeaderTitle
        first_text={"ЗАХИАЛАГЧИД САНАЛ БОЛГОХ"}
        last_text={"НӨХЦӨЛ"}
        sx={{
          fontSize: {
            xs: "1.15rem",
          },
        }}
      />
      <Typography
        className="p-size-ext"
        variant="body1"
        fontFamily={'"Montserrat", sans-serif'}
        my={2}
        textAlign="center"
        maxWidth={700}
        mx="auto"
        sx={{
          fontSize: {
            lg: "1rem",
            md: "1rem",
            sm: "1rem",
            xs: "0.813rem",
          },
        }}
      >
        Зээлийн шийдвэрийг 24 цагт гаргаж байгаа нь Монголдоо анхдагч үл хөдлөх
        хөрөнгийн санхүүжилт олгох үйлчилгээ.
      </Typography>
      <Box
        py={4}
        display={"flex"}
        justifyContent="space-between"
        maxWidth={1200}
        mx="auto"
        my={4}
        sx={{
          display: {
            lg: "flex",
            md: "grid",
            sm: "grid",
            xs: "grid",
          },
          gridTemplateColumns: {
            lg: "none",
            md: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            xs: "repeat(2, 1fr)",
          },
          gridGap: {
            lg: "none",
            md: "30px",
            sm: "30px",
            xs: "30px",
          },
          minWidth: {
            lg: "875px",
            md: "875px",
            sm: "auto",
            xs: "auto",
          },
          width: {
            lg: "900px",
            md: "900px",
            sm: "auto",
            xs: "auto",
          },
          paddingRight: {
            lg: "auto",
            md: "auto",
            sm: "30px",
            xs: "30px",
          },
        }}
      >
        <Box
          position="relative"
          border={"#FEC405 2px solid"}
          alignItems={"center"}
          justifyContent="center"
          sx={{
            padding: {
              lg: 4,
              md: 4,
              sm: 4,
              xs: 1.25,
            },
            width: {
              lg: "140px",
              md: "140px",
              sm: "140px",
              xs: "100px",
            },
            height: {
              lg: "140px",
              md: "140px",
              sm: "140px",
              xs: "100px",
            },
          }}
          mx="auto"
        >
          <h1 className="text-center text-3xl font-semibold condition_text">
            18-24 <br /> сар
          </h1>
          <Box
            position={"absolute"}
            backgroundColor={"#f7f7f7"}
            py={1}
            right={"15px"}
            top={"50%"}
            fontSize="14px"
            sx={{
              transform: "translate(100%, -50%)",
              fontSize: {
                lg: "14px",
                md: "14px",
                sm: "14px",
                xs: "10px",
              },
            }}
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
          sx={{
            padding: {
              lg: 4,
              md: 4,
              sm: 4,
              xs: 1.25,
            },
            width: {
              lg: "140px",
              md: "140px",
              sm: "140px",
              xs: "100px",
            },
            height: {
              lg: "140px",
              md: "140px",
              sm: "140px",
              xs: "100px",
            },
          }}
          mx="auto"
        >
          <h1 className="text-center text-3xl font-semibold condition_text">
            30%
          </h1>
          <Box
            position={"absolute"}
            backgroundColor={"#f7f7f7"}
            py={1}
            right={"15px"}
            top={"50%"}
            sx={{
              transform: "translate(100%, -50%)",
              fontSize: {
                lg: "14px",
                md: "14px",
                sm: "14px",
                xs: "10px",
              },
            }}
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
          mx="auto"
          sx={{
            padding: {
              lg: 4,
              md: 4,
              sm: 4,
              xs: 1.25,
            },
            width: {
              lg: "140px",
              md: "140px",
              sm: "140px",
              xs: "100px",
            },
            height: {
              lg: "140px",
              md: "140px",
              sm: "140px",
              xs: "100px",
            },
          }}
        >
          <h1 className="text-center text-3xl font-semibold condition_text">
            20%
          </h1>
          <Box
            position={"absolute"}
            backgroundColor={"#f7f7f7"}
            py={1}
            right={"15px"}
            top={"50%"}
            sx={{
              transform: "translate(100%, -50%)",
              fontSize: {
                lg: "14px",
                md: "14px",
                sm: "14px",
                xs: "10px",
              },
            }}
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
          sx={{
            padding: {
              lg: 4,
              md: 4,
              sm: 4,
              xs: 1.25,
            },
            width: {
              lg: "140px",
              md: "140px",
              sm: "140px",
              xs: "100px",
            },
            height: {
              lg: "140px",
              md: "140px",
              sm: "140px",
              xs: "100px",
            },
          }}
          mx="auto"
        >
          <h1 className="text-center text-3xl font-semibold condition_text">
            ₮,$
          </h1>
          <Box
            position={"absolute"}
            backgroundColor={"#f7f7f7"}
            py={1}
            right={"15px"}
            top={"50%"}
            sx={{
              transform: "translate(100%, -50%)",
              fontSize: {
                lg: "14px",
                md: "14px",
                sm: "14px",
                xs: "10px",
              },
            }}
            fontSize="14px"
          >
            Боломжит
            <br />
            валют
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        {/* <Link href="/loans/internal">
					<BootstrapButton
						variant="contained"
						className="full-width"
					>
						Дотоод дахь харилцагч
					</BootstrapButton>
				</Link> */}
        <Link href="/loans/external">
          <BootstrapButton variant="contained" className="full-width">
            Гадаад дахь харилцагч
          </BootstrapButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Condition;
