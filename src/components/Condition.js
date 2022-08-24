import HeaderTitle from "./Header_title";
import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Title from "./Title";
import InternalLoan from "./Loan_2";
import Loans from "./Loan";
import {
  ArrowRightAlt,
  AccountBalance,
  DateRange,
  House,
  PriceCheck,
} from "@mui/icons-material";
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
    </Box>
  );
};

export default Condition;
