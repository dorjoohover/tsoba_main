import Title from "./Title";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightAlt, AccountBalance, DateRange, House, PriceCheck } from "@mui/icons-material";
import { Box, Grid, Typography,  } from "@mui/material";

const InternalLoan = () => {
  return (
    <Box sx={{ maxWidth: "1300px", margin: "90px auto", padding: '10px' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mb={8}
      >
        <Title
          subtitle={"Зээлийн мэдээлэл"}
          title={"Дотоодод оршин суугаа харилцагчдад"}
        />
        <Box sx={{ width: "50%", display: "block", textAlign: "end" }}>
          <Link href={"/loans/internal"}>
            <a className="px-12 py-6 text-white font-semibold uppercase whitespace-nowrap bg_color inline tracking-widest items-center request_btn">
              Дэлгэрэнгүй
              <ArrowRightAlt sx={{ marginLeft: "1rem" }} />
            </a>
          </Link>
        </Box>
      </Box>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid item xs={2} sm={4} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
            p={4}
            minHeight={320}
          >
            <AccountBalance
              sx={{
                fontSize: "120px",
                background: "#fec405",
                fill: "#fff",
                borderRadius: "100%",
                padding: "20px",
              }}
            />
            <Typography variant="h5" fontWeight={600} my={3}>
              10 - 12%
            </Typography>
            <Typography variant="p" textAlign={"center"}>
              Зээлийн хүү
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
            p={4}
            minHeight={320}
          >
            <DateRange
              sx={{
                fontSize: "120px",
                background: "#fec405",
                fill: "#fff",
                borderRadius: "100%",
                padding: "20px",
              }}
            />
            <Typography variant="h5" fontWeight={600} my={3}>
              18 - 24 сар
            </Typography>
            <Typography variant="p" textAlign={"center"}>
              Зээлийн хугацаа
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
            p={4}
            minHeight={320}
          >
            <House
              sx={{
                fontSize: "120px",
                background: "#fec405",
                fill: "#fff",
                borderRadius: "100%",
                padding: "20px",
              }}
            />
            <Typography variant="h5" fontWeight={600} my={3}>
              30%
            </Typography>
            <Typography variant="p" textAlign={"center"}>
              Хуваан төлөхгүй
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
            p={4}
            minHeight={320}
          >
            <PriceCheck
              sx={{
                fontSize: "120px",
                background: "#fec405",
                fill: "#fff",
                borderRadius: "100%",
                padding: "20px",
              }}
            />
            <Typography variant="h5" fontWeight={600} my={3}>
              ₮ төгрөг
            </Typography>
            <Typography variant="p" textAlign={"center"}>
              Боломжит валют
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InternalLoan;
