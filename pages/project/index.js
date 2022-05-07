import Navbar from "../../src/components/Navbar";
import ProductDetail from "../../src/components/product/Detail";
import Picture from "../../src/components/product/Picture";
import ProductHeader from "../../src/components/product/Header";
import Footer from "../../src/components/Footer";
import Copyright from "../../src/components/Copyright";
import { useState } from "react";
import { Box } from "@mui/material";
const Product = () => {
  const [start, setStart] = useState(-1);
  return (
    <>
      {start == -1 && (
        <Box>
          <Navbar />
          <ProductHeader />
          <ProductDetail />

          <div className="product_picture" id="splide"></div>
          <Picture start={start} setStart={setStart} />

          <Footer />
          <Copyright />
        </Box>
      )}
      {start > -1 && (
        <Box>
          {/* <div className="product_picture" id="splide"></div> */}
          <Picture start={start} setStart={setStart} />
        </Box>
      )}
    </>
  );
};
export default Product;