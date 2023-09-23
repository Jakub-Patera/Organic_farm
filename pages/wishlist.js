import Link from "next/link";
import { useState } from "react";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const WishlistPage = () => {
  const [wishList, setwishList] = useState([
    {
      id: 1,
      title: "Orange Fruits", // "Cart Item 1",
      description: "Cart Item 1", // "Cart Item 1",
      quantity: 1,
      image: "assets/images/widgets/product2.png",
      price: 250,
    },
    {
      id: 2,
      title: "Fresh Broccoli", // "Cart Item  2",
      description: "Cart Item 2", // "Cart Item 2",
      quantity: 1,
      image: "assets/images/widgets/product3.png",
      price: 250,
    },
    {
      id: 3,
      title: "Bread Grains", // "Cart Item 3",
      description: "Cart Item 3", // "Cart Item 3",
      quantity: 1,
      image: "assets/images/widgets/product4.png",
      price: 250,
    },
  ]);
  return (
    <Layout>
      <PageBanner pageName={"Wishlist Page"} />
      <div className="wishlist-area py-130 rpy-100">
        <div className="container">
          <div className="cart-item-wrap wow fadeInUp delay-0-2s">
            {wishList.map((w, i) => (
              <div className="cart-single-item" key={i}>
                <button
                  type="button"
                  className="close"
                  onClick={() =>
                    setwishList(wishList.filter((c) => c.id !== w.id))
                  }
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="cart-img">
                  <img src={w.image} alt="Product Image" />
                </div>
                <h5 className="product-name">{w.title}</h5>
                <span className="product-price">{w.price}</span>
                <strong className="stock">In Stock</strong>
                <Link href="/cart">
                  <a className="theme-btn style-two">Add to Cart</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Wishlist Area End */}
      {/* Client Logo Section Start */}
      <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div>
    </Layout>
  );
};
export default WishlistPage;
