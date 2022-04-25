import Navbar from "../../src/components/Navbar";
import ProductDetail from "../../src/components/product/Detail";
import Picture from "../../src/components/product/Picture";
import ProductHeader from "../../src/components/product/Header";
import Footer from "../../src/components/Footer";
import Copyright from "../../src/components/Copyright";
const Product = () => {
  return (
    <div>
      <Navbar color={"white"} />
      <ProductHeader />
      <ProductDetail />
      <div className="product_picture"></div>
      <Picture />
      <Footer />
      <Copyright />
    </div>
  );
};
export default Product;
