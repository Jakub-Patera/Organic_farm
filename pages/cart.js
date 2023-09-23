import Link from "next/link";
import { useEffect, useState } from "react";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const CartPage = () => {
  const [cartData, setCartData] = useState([
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

  // total price
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [vat, setVat] = useState(15);
  let shipping = 10;
  useEffect(() => {
    setSubTotal(subTotal_());
    setVat(Number((subTotal_() * 15) / 100).toFixed(2));
    setTotalPrice(
      (Number(subTotal_()) + Number(vat) + Number(shipping)).toFixed(2)
    );
    localStorage.setItem(
      "munfirm",
      JSON.stringify({ subTotal, totalPrice, shipping, vat, cartData })
    );
  });

  const subTotal_ = () => {
    return cartData
      .map((item) => item.price * item.quantity)
      .reduce((prev, next) => prev + next, 0)
      .toFixed(2);
  };

  const updateQuantity = (item, type) => {
    let findCartItem = cartData.find((cart, i) => i === item);
    findCartItem.quantity =
      type == "-"
        ? findCartItem.quantity === 1
          ? 1
          : findCartItem.quantity - 1
        : findCartItem.quantity + 1;
    setCartData([...cartData]);
  };

  return (
    <Layout>
      <PageBanner pageName={"Cart Page"} />
      <div className="cart-area py-130 rpy-100">
        <div className="container">
          <div className="cart-item-wrap mb-35 wow fadeInUp delay-0-2s">
            {cartData.map((cart, i) => (
              <div className="cart-single-item" key={i}>
                <button
                  type="button"
                  className="close"
                  onClick={() =>
                    setCartData(cartData.filter((c) => c.id !== cart.id))
                  }
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="cart-img">
                  <img src={cart.image} alt="Product Image" />
                </div>
                <h5 className="product-name">{cart.title}</h5>
                <span className="product-price">{cart.price}</span>
                <div className="quantity-input">
                  <button
                    className="quantity-down"
                    onClick={() => updateQuantity(i, "-")}
                  >
                    -
                  </button>
                  <input
                    className="quantity"
                    type="text"
                    defaultValue={cart.quantity}
                    value={cart.quantity}
                    name="quantity"
                  />
                  <button
                    className="quantity-up"
                    onClick={() => updateQuantity(i, "+")}
                  >
                    +
                  </button>
                </div>
                <span className="product-total-price">
                  {cart.quantity * cart.price}
                </span>
              </div>
            ))}
          </div>
          <div className="row text-center text-lg-left align-items-center wow fadeInUp delay-0-2s">
            <div className="col-lg-6">
              <div className="discount-wrapper rmb-30">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="d-sm-flex justify-content-center justify-content-lg-start"
                >
                  <input type="text" placeholder="Coupon Code" required="" />
                  <button className="theme-btn flex-none" type="submit">
                    apply Coupon <i className="fas fa-angle-double-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="update-shopping text-lg-right">
                <Link href="/shop-grid">
                  <a className="theme-btn style-two">
                    shopping <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="/shop-grid">
                  <a className="theme-btn">
                    update cart <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="payment-cart-total pt-25 wow fadeInUp delay-0-2s">
            <div className="row justify-content-end">
              <div className="col-lg-5">
                <div className="shoping-cart-total mt-45">
                  <h4 className="form-title m-25">Cart Totals</h4>
                  <table>
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td className="sub-total-price">{subTotal}</td>
                      </tr>
                      <tr>
                        <td>Shipping Fee</td>
                        <td className="shipping-price">
                          {shipping.toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <td>Vat</td>
                        <td>${vat}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <strong className="total-price">
                            {(Number(totalPrice) + Number(shipping)).toFixed(2)}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link href="/checkout">
                    <a className="theme-btn style-two mt-25 w-100">
                      Proceed to checkout
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart Area End */}
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
export default CartPage;
