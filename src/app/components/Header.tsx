import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="header border-no">
      <div className="header-middle sticky-header fix-top sticky-content">
        <div className="container-fluid">
          <div className="header-left">
            <a href="#" className="mobile-menu-toggle">
              <i className="d-icon-bars2"></i>
            </a>
            <a href="#" className="logo">
              <img
                src="images/demos/demo7/logo.jpg"
                alt="logo"
                width="70"
                height="43"
              />
            </a>
            {/* <!-- End of Logo --> */}
          </div>
          <div className="header-center">
            <nav className="main-nav ml-0 mr-0">
              <ul className="menu">
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                  <div className="megamenu">
                    <div className="row">
                      <div className="col-6 col-sm-4 col-md-3 col-lg-4">
                        <h4 className="menu-title">Categories</h4>
                        <ul>
                          <li>
                            <a href="#">Mudgar</a>
                          </li>
                          <li>
                            <a href="#">Indian Club</a>
                          </li>
                          <li>
                            <a href="#">Persian Meels</a>
                          </li>
                          <li>
                            <a href="#">Sumtola</a>
                          </li>
                          <li>
                            <a href="#">
                              Gada<span className="tip tip-hot">Hot</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">Shena Pushups Board</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- End of Megamenu --> */}
                    </div>
                  </div>
                </li>
                {/* <!-- End of Dropdown --> */}

                <li>
                  <a href="#">About Us</a>
                </li>

                <li>
                  <a href="#">Testimonial</a>
                </li>

                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
            {/* <!-- End of Divider --> */}
          </div>
          <div className="header-right">
            <div className="header-search hs-toggle">
              <a href="#" className="search-toggle">
                <i className="d-icon-search"></i>
              </a>
              <form action="#" className="input-wrapper">
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  autoComplete="off"
                  placeholder="Search your keyword..."
                  required
                />
                <button className="btn btn-search" type="submit">
                  <i className="d-icon-search"></i>
                </button>
              </form>
            </div>
            {/* <!-- End of Header Search --> */}
            <a
              className="login-link"
              href="ajax/login.html"
              data-toggle="login-modal"
            >
              <i className="d-icon-user"></i>
            </a>

            <a href="#" className="wishlist mr-4 d-lg-show">
              <i className="d-icon-heart"></i>
            </a>

            <div className="dropdown cart-dropdown type2 mr-0 mr-lg-2">
              <a href="cart.html" className="cart-toggle link">
                <i className="d-icon-bag">
                  <span className="cart-count">2</span>
                </i>
              </a>
              {/* <!-- End Cart Toggle --> */}
              <div className="dropdown-box">
                <div className="products scrollable">
                  <div className="product product-cart">
                    <figure className="product-media">
                      <a href="demo7-product.html">
                        <img
                          src="images/cart/product-1.jpg"
                          alt="product"
                          width="80"
                          height="88"
                        />
                      </a>
                      <button className="btn btn-link btn-close">
                        <i className="fas fa-times"></i>
                        <span className="sr-only">Close</span>
                      </button>
                    </figure>
                    <div className="product-detail">
                      <a href="demo7-product.html" className="product-name">
                        Riode White Trends
                      </a>
                      <div className="price-box">
                        <span className="product-quantity">1</span>
                        <span className="product-price">$21.00</span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Cart Product --> */}
                  <div className="product product-cart">
                    <figure className="product-media">
                      <a href="demo7-product.html">
                        <img
                          src="images/cart/product-2.jpg"
                          alt="product"
                          width="80"
                          height="88"
                        />
                      </a>
                      <button className="btn btn-link btn-close">
                        <i className="fas fa-times"></i>
                        <span className="sr-only">Close</span>
                      </button>
                    </figure>
                    <div className="product-detail">
                      <a href="demo7-product.html" className="product-name">
                        Dark Blue Women’s Leomora Hat
                      </a>
                      <div className="price-box">
                        <span className="product-quantity">1</span>
                        <span className="product-price">$118.00</span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Cart Product --> */}
                </div>
                {/* <!-- End of Products  --> */}
                <div className="cart-total">
                  <label>Subtotal:</label>
                  <span className="price">$139.00</span>
                </div>
                {/* <!-- End of Cart Total --> */}
                <div className="cart-action">
                  <a href="cart.html" className="btn btn-dark btn-link">
                    View Cart
                  </a>
                  <a href="checkout.html" className="btn btn-dark">
                    <span>Go To Checkout</span>
                  </a>
                </div>
                {/* <!-- End of Cart Action --> */}
              </div>
              {/* <!-- End Dropdown Box --> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- MobileMenu --> */}
      <div className="mobile-menu-wrapper">
        <div className="mobile-menu-overlay"></div>
        {/* <!-- End of Overlay --> */}
        <a className="mobile-menu-close" href="#">
          <i className="d-icon-times"></i>
        </a>
        {/* <!-- End of CloseButton --> */}
        <div className="mobile-menu-container scrollable">
          <form action="#" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              placeholder="Search your keyword..."
              required
            />
            <button className="btn btn-search" type="submit">
              <i className="d-icon-search"></i>
            </button>
          </form>
          {/* <!-- End of Search Form --> */}
          <ul className="mobile-menu mmenu-anim">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
              <ul>
                <li>
                  <a href="#"> Categories </a>
                  <ul>
                    <li>
                      <a href="#">Mudgar</a>
                    </li>
                    <li>
                      <a href="#">Indian Club</a>
                    </li>
                    <li>
                      <a href="#">Persian Meels</a>
                    </li>
                    <li>
                      <a href="#">Sumtola</a>
                    </li>
                    <li>
                      <a href="#">
                        Gada<span className="tip tip-hot">Hot</span>
                      </a>
                    </li>

                    <li>
                      <a href="#">Shena Pushups Board</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>

            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          {/* <!-- End of MobileMenu --> */}
        </div>
      </div>
    </header>
  );
}
export default Header;
