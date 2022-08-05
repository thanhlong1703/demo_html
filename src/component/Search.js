import React from 'react'

function Search() {
  return (
    <div>
      <>
  {/* header start */}
  <header className="header-area">
    <div className="header-main-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header-main">
              {/* logo start */}
              <div className="header-element logo">
                <a href="index">
                  <img
                    src="image/logo1.png"
                    alt="logo-image"
                    className="img-fluid"
                  />
                </a>
              </div>
              {/* logo end */}
              {/* search start */}
              <div className="header-element search-wrap">
                <input
                  type="text"
                  name="search"
                  placeholder="Tìm sản phẩm."
                />
                <a href="search" className="search-btn">
                  <i className="fa fa-search" />
                </a>
              </div>
              {/* search end */}
              {/* header-icon start */}
              <div className="header-element right-block-box">
                <ul className="shop-element">
                  <li className="side-wrap nav-toggler">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarContent"
                    >
                      <span className="line" />
                    </button>
                  </li>
                  <li className="side-wrap user-wrap">
                    <div className="acc-desk">
                      <div className="user-icon">
                        <a href="account" className="user-icon-desk">
                          <span>
                            <i className="icon-user" />
                          </span>
                        </a>
                      </div>
                      <div className="user-info">
                        <span className="acc-title">Tài khoản</span>
                        <div className="account-login">
                          <a href="register">Đăng ký</a>
                          <a href="login">Đăng nhập</a>
                        </div>
                      </div>
                    </div>
                    <div className="acc-mob">
                      <a href="account" className="user-icon">
                        <span>
                          <i className="icon-user" />
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="side-wrap wishlist-wrap">
                    <a href="wishlist" className="header-wishlist">
                      <span className="wishlist-icon">
                        <i className="icon-heart" />
                      </span>
                      <span className="wishlist-counter">0</span>
                    </a>
                  </li>
                  <li className="side-wrap cart-wrap">
                    <div className="shopping-widget">
                      <div className="shopping-cart">
                        <a href="javascript:void(0)" className="cart-count">
                          <span className="cart-icon-wrap">
                            <span className="cart-icon">
                              <i className="icon-handbag" />
                            </span>
                            <span id="cart-total" className="bigcounter">
                              5
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* header-icon end */}
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main-menu-area">
                <div className="main-navigation navbar-expand-xl">
                  <div className="box-header menu-close">
                    <button className="close-box" type="button">
                      <i className="ion-close-round" />
                    </button>
                  </div>
                  {/* menu start */}
                  <div className="navbar-collapse" id="navbarContent">
                    <div className="megamenu-content">
                      <div className="mainwrap">
                        <ul className="main-menu">
                          <li className="menu-link parent">
                            <a href="index" className="link-title">
                              <span className="sp-link-title">Trang chủ</span>
                            </a>
                          </li>
                          <li className="menu-link parent">
                            <a href="javascript:void(0)" className="link-title">
                              <span className="sp-link-title">Shop</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <a
                              href="#collapse-mega-menu"
                              data-bs-toggle="collapse"
                              className="link-title link-title-lg"
                            >
                              <span className="sp-link-title">Shop</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul
                              className="dropdown-submenu mega-menu collapse"
                              id="collapse-mega-menu"
                            >
                              <li className="megamenu-li parent">
                                <h2 className="sublink-title">Cà phê</h2>
                                <a
                                  href="#collapse-sub-mega-menu"
                                  data-bs-toggle="collapse"
                                  className="sublink-title sublink-title-lg"
                                >
                                  <span>Cà phê</span>
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul
                                  className="dropdown-supmenu collapse"
                                  id="collapse-sub-mega-menu"
                                >
                                  <li className="supmenu-li">
                                    <a href="product">Cà phê</a>
                                  </li>
                                  <li className="supmenu-li">
                                    <a href="product">Cà phê</a>
                                  </li>
                                  <li className="supmenu-li">
                                    <a href="product">
                                    Cà phê
                                    </a>
                                  </li>
                                  <li className="supmenu-li">
                                    <a href="product">Cà phê</a>
                                  </li>
                                  <li className="supmenu-li">
                                    <a href="product">Cà phê</a>
                                  </li>
                                  <li className="supmenu-li">
                                    <a href="product">Cà phê</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="megamenu-li parent">
                                <h2 className="sublink-title">Trà sữa</h2>
                                <a
                                  href="#collapse-fruits-menu"
                                  data-bs-toggle="collapse"
                                  className="sublink-title sublink-title-lg"
                                >
                                  <span>Trà sữa</span>
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul
                                  className="dropdown-supmenu collapse"
                                  id="collapse-fruits-menu"
                                >
                                  <li className="supmenu-li">
                                    <a href="product">Trà sữa</a>
                                  </li>
                                  <li className="supmenu-li">
                                    <a href="product">Trà sữa</a>
                                  </li>
                                  <li className="supmenu-li">
                                    <a href="product">Trà sữa</a>
                                  </li>
                                  <li className="supmenu-li">
                                    <a href="product">Trà sữa</a>
                                  </li>
                                  <li className="supmenu-li">
                                    <a href="product">Trà sữa</a>
                                  </li>
                                  <li className="supmenu-li">
                                    <a href="product">Trà sữa</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-link parent">
                            <a href="grid-list" className="link-title">
                              <span className="sp-link-title">Danh sách sản phẩm</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <a
                              href="#collapse-banner-menu"
                              data-bs-toggle="collapse"
                              className="link-title link-title-lg"
                            >
                              <span className="sp-link-title">Danh sách sản phẩm</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul
                              className="dropdown-submenu banner-menu collapse"
                              id="collapse-banner-menu"
                            >
                              <li className="menu-banner">
                                <a
                                  href="grid-list"
                                  className="menu-banner-img"
                                >
                                  <img
                                    src="image/menu-banner01.jpg"
                                    alt="menu-image"
                                    className="img-fluid"
                                  />
                                </a>
                                <a
                                  href="grid-list"
                                  className="menu-banner-title"
                                >
                                  <span>Bán chạy</span>
                                </a>
                              </li>
                              <li className="menu-banner">
                                <a
                                  href="grid-list"
                                  className="menu-banner-img"
                                >
                                  <img
                                    src="image/menu-banner02.jpg"
                                    alt="menu-image"
                                    className="img-fluid"
                                  />
                                </a>
                                <a
                                  href="grid-list"
                                  className="menu-banner-title"
                                >
                                  <span>Sản phẩm đặc biệt</span>
                                </a>
                              </li>
                              <li className="menu-banner">
                                <a
                                  href="grid-list"
                                  className="menu-banner-img"
                                >
                                  <img
                                    src="image/menu-banner03.jpg"
                                    alt="mneu image"
                                    className="img-fluid"
                                  />
                                </a>
                                <a
                                  href="grid-list"
                                  className="menu-banner-title"
                                >
                                  <span>Sản phẩm khác</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-link parent">
                            <a href="javascript:void(0)" className="link-title">
                              <span className="sp-link-title">Khác</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <a
                              href="#collapse-page-menu"
                              data-bs-toggle="collapse"
                              className="link-title link-title-lg"
                            >
                              <span className="sp-link-title">Khác</span>
                              <i className="fa fa-angle-down" />
                            </a>
                            <ul
                              className="dropdown-submenu sub-menu collapse"
                              id="collapse-page-menu"
                            >
                              <li className="submenu-li">
                                <a
                                  href="about-us"
                                  className="submenu-link"
                                >
                                  Về chúng tôi
                                </a>
                              </li>
                              <li className="submenu-li">
                                <a
                                  href="javascript:void(0)"
                                  className="g-l-link"
                                >
                                  <span>Tài khoản</span>{" "}
                                  <i className="fa fa-angle-right" />
                                </a>
                                <a
                                  href="#account-menu"
                                  data-bs-toggle="collapse"
                                  className="sub-link"
                                >
                                  <span>Tài khoản</span>{" "}
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul
                                  className="collapse blog-style-1"
                                  id="account-menu"
                                >
                                  <li>
                                    <a
                                      href="order-history"
                                      className="sub-style"
                                    >
                                      <span>Đặt hàng</span>
                                    </a>
                                    <a
                                      href="order-history"
                                      className="blog-sub-style"
                                    >
                                      <span>Đặt hàng</span>
                                    </a>
                                    <a
                                      href="profile"
                                      className="sub-style"
                                    >
                                      <span>Thông tin</span>
                                    </a>
                                    <a
                                      href="profile"
                                      className="blog-sub-style"
                                    >
                                      <span>Thông tin</span>
                                    </a>
                                    <a
                                      href="pro-wishlist"
                                      className="sub-style"
                                    >
                                      <span>Ưa thích</span>
                                    </a>
                                    <a
                                      href="pro-wishlist"
                                      className="blog-sub-style"
                                    >
                                      <span>Ưa thích</span>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="submenu-li">
                                <a
                                  href="billing-info"
                                  className="submenu-link"
                                >
                                  Đơn hàng
                                </a>
                              </li>
                              <li className="submenu-li">
                                <a href="faq%27s" className="submenu-link">
                                  Các câu hỏi thường gặp
                                </a>
                              </li>
                              <li className="submenu-li">
                                <a href="contact" className="submenu-link">
                                  Liên hệ
                                </a>
                              </li>
                              <li className="submenu-li">
                                <a
                                  href="terms-conditions"
                                  className="submenu-link"
                                >
                                  Điều khoản và điều kiện
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-link parent">
                            <a href="blog" className="link-title">
                              <span className="sp-link-title">Blogs</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* menu end */}
                  <div className="img-hotline">
                    <div className="image-line">
                      <a href="javascript:void(0)">
                        <img
                          src="image/icon_contact.png"
                          className="img-fluid"
                          alt="image-icon"
                        />
                      </a>
                    </div>
                    <div className="image-content">
                      <span className="hot-l">Hotline:</span>
                      <span>0123 456 789</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*mini Cart start*/}
    <div className="mini-cart">
      <a href="javascript:void(0)" className="shopping-cart-close">
        <i className="ion-close-round" />
      </a>
      <div className="cart-item-title">
        <p>
          <span className="cart-count-desc">Có </span>
          <span className="cart-count-item bigcounter">4</span>
          <span className="cart-count-desc">sản phẩm</span>
        </p>
      </div>
      <ul className="cart-item-loop">
        <li className="cart-item">
          <div className="cart-img">
            <a href="product">
              <img
                src="image/cart-img.jpg"
                alt="cart-image"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="cart-title">
            <h6>
              <a href="product">Trà vải</a>
            </h6>
            <div className="cart-pro-info">
              <div className="cart-qty-price">
                <span className="quantity">1 x </span>
                <span className="price-box">50.000 <sup><small>đ</small></sup></span>
              </div>
              <div className="delete-item-cart">
                <a href="empty-cart">
                  <i className="icon-trash icons" />
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="cart-item">
          <div className="cart-img">
            <a href="product">
              <img
                src="image/cart-img02.jpg"
                alt="cart-image"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="cart-title">
            <h6>
              <a href="product">Trà sữa</a>
            </h6>
            <div className="cart-pro-info">
              <div className="cart-qty-price">
                <span className="quantity">1 x </span>
                <span className="price-box">50.000 <sup><small>đ</small></sup></span>
              </div>
              <div className="delete-item-cart">
                <a href="empty-cart">
                  <i className="icon-trash icons" />
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="cart-item">
          <div className="cart-img">
            <a href="product">
              <img
                src="image/cart-img03.jpg"
                alt="cart-image"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="cart-title">
            <h6>
              <a href="product">Trà hoa hồng</a>
            </h6>
            <div className="cart-pro-info">
              <div className="cart-qty-price">
                <span className="quantity">1 x </span>
                <span className="price-box">50.000 <sup><small>đ</small></sup></span>
              </div>
              <div className="delete-item-cart">
                <a href="empty-cart">
                  <i className="icon-trash icons" />
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="cart-item">
          <div className="cart-img">
            <a href="product">
              <img
                src="image/cart-img04.jpg"
                alt="cart-image"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="cart-title">
            <h6>
              <a href="product">Latte Trà xanh</a>
            </h6>
            <div className="cart-pro-info">
              <div className="cart-qty-price">
                <span className="quantity">1 x </span>
                <span className="price-box">50.000 <sup><small>đ</small></sup></span>
              </div>
              <div className="delete-item-cart">
                <a href="empty-cart">
                  <i className="icon-trash icons" />
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul className="subtotal-title-area">
        <li className="subtotal-info">
          <div className="subtotal-titles">
            <h6>Tổng cộng: </h6>
            <span className="subtotal-price">200.000 <sup><small>đ</small></sup></span>
          </div>
        </li>
        <li className="mini-cart-btns">
          <div className="cart-btns">
            <a href="cart" className="btn btn-style2">
              Xem giỏ hàng
            </a>
            <a href="checkout" className="btn btn-style2">
              Thanh toán
            </a>
          </div>
        </li>
      </ul>
    </div>
    {/*mini Cart end*/}
  </header>
  {/* header end */}
  {/* search page start */}
  <section className="section-tb-padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="search-title">
            <h3>Kết quả tiềm kiếm "Trà sữa":</h3>
          </div>
          <div className="saerch-input">
            <form>
              <input type="text" name="search" placeholder="Search our store" />
              <a href="search" className="search-btn">
                <i className="fa fa-search" />
              </a>
            </form>
          </div>
          <div className="search-pro-area">
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/1.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/pro-img-03.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                  <span className="search-old-price">
                    <del>50.000 <sup><small>đ</small></sup></del>
                  </span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/2.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/2.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/3.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/3.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                  <span className="search-old-price">
                    <del>50.000 <sup><small>đ</small></sup></del>
                  </span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/4.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/4.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                  <span className="search-old-price">
                    <del>50.000 <sup><small>đ</small></sup></del>
                  </span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/5.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/5.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                  <span className="search-old-price">
                    <del>50.000 <sup><small>đ</small></sup></del>
                  </span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/6.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/6.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/7.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/7.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                  <span className="search-old-price">
                    <del>50.000 <sup><small>đ</small></sup></del>
                  </span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/8.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/8.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/9.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/9.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                  <span className="search-old-price">
                    <del>50.000 <sup><small>đ</small></sup></del>
                  </span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/10.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/10.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                  <span className="search-old-price">
                    <del>50.000 <sup><small>đ</small></sup></del>
                  </span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/11.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/11.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                  <span className="search-old-price">
                    <del>50.000 <sup><small>đ</small></sup></del>
                  </span>
                </span>
              </div>
            </div>
            <div className="search-pro-items">
              <div className="search-img">
                <a href="product">
                  <img
                    src="image/search-image/12.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <img
                    src="image/search-image/hover/12.jpg"
                    className="img-fluid search-hover"
                    alt="image"
                  />
                </a>
                <div className="pro-icn">
                  <a href="wishlist" className="w-c-q-icn">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="cart" className="w-c-q-icn">
                    <i className="fa fa-shopping-bag" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-c-q-icn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
              <div className="search-caption">
                <h4>
                  <a href="product">Trà sữa</a>
                </h4>
                <span className="all-price">
                  <span className="search-new-price">50.000 <sup><small>đ</small></sup></span>
                  <span className="search-old-price">
                    <del>50.000 <sup><small>đ</small></sup></del>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="all-page">
            <div className="page-number style-1">
              <a href="javascript:void(0)" className="active">
                1
              </a>
              <a href="search-2">2</a>
              <a href="search-2">
                <i className="fa fa-angle-double-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* search page end */}
  {/* quick veiw start */}
  <section className="quick-view">
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Product quickview
            </h5>
            <a
              href="javascript:void(0)"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ion-close-round" />
            </a>
          </div>
          <div className="quick-veiw-area">
            <div className="quick-image">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="image-1">
                  <a href="javascript:void(0)" className="long-img">
                    <img
                      src="image/pro-page-image/pro-page-image.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="tab-pane fade show" id="image-2">
                  <a href="javascript:void(0)" className="long-img">
                    <img
                      src="image/pro-page-image/prro-page-image01.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="tab-pane fade show" id="image-3">
                  <a href="javascript:void(0)" className="long-img">
                    <img
                      src="image/pro-page-image/pro-page-image1-1.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="tab-pane fade show" id="image-4">
                  <a href="javascript:void(0)" className="long-img">
                    <img
                      src="image/pro-page-image/pro-page-image1.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="tab-pane fade show" id="image-5">
                  <a href="javascript:void(0)" className="long-img">
                    <img
                      src="image/pro-page-image/pro-page-image2.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="tab-pane fade show" id="image-6">
                  <a href="javascript:void(0)" className="long-img">
                    <img
                      src="image/pro-page-image/pro-page-image2-2.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="tab-pane fade show" id="image-7">
                  <a href="javascript:void(0)" className="long-img">
                    <img
                      src="image/pro-page-image/pro-page-image3.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
                <div className="tab-pane fade show" id="image-8">
                  <a href="javascript:void(0)" className="long-img">
                    <img
                      src="image/pro-page-image/pro-page-image03.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
              <ul className="nav nav-tabs quick-slider owl-carousel owl-theme">
                <li className="nav-item items">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#image-1"
                  >
                    <img
                      src="image/pro-page-image/image1.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="nav-item items">
                  <a className="nav-link" data-bs-toggle="tab" href="#image-2">
                    <img
                      src="image/pro-page-image/image2.jpg"
                      className="img-fluid"
                      alt="iamge"
                    />
                  </a>
                </li>
                <li className="nav-item items">
                  <a className="nav-link" data-bs-toggle="tab" href="#image-3">
                    <img
                      src="image/pro-page-image/image3.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="nav-item items">
                  <a className="nav-link" data-bs-toggle="tab" href="#image-4">
                    <img
                      src="image/pro-page-image/image4.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="nav-item items">
                  <a className="nav-link" data-bs-toggle="tab" href="#image-5">
                    <img
                      src="image/pro-page-image/image5.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="nav-item items">
                  <a className="nav-link" data-bs-toggle="tab" href="#image-6">
                    <img
                      src="image/pro-page-image/image6.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="nav-item items">
                  <a className="nav-link" data-bs-toggle="tab" href="#image-7">
                    <img
                      src="image/pro-page-image/image8.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="nav-item items">
                  <a className="nav-link" data-bs-toggle="tab" href="#image-8">
                    <img
                      src="image/pro-page-image/image7.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="quick-caption">
              <h4>Fresh organic reachter</h4>
              <div className="quick-price">
                <span className="new-price">$350.00 USD</span>
                <span className="old-price">
                  <del>$399.99 USD</del>
                </span>
              </div>
              <div className="quick-rating">
                <i className="fa fa-star c-star" />
                <i className="fa fa-star c-star" />
                <i className="fa fa-star c-star" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
              </div>
              <div className="pro-description">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and
                </p>
              </div>
              <div className="pro-size">
                <label>Size: </label>
                <select>
                  <option>1 ltr</option>
                  <option>3 ltr</option>
                  <option>5 ltr</option>
                </select>
              </div>
              <div className="plus-minus">
                <span>
                  <a href="javascript:void(0)" className="minus-btn text-black">
                    -
                  </a>
                  <input type="text" name="name" defaultValue={1} />
                  <a href="javascript:void(0)" className="plus-btn text-black">
                    +
                  </a>
                </span>
                <a href="cart" className="quick-cart">
                  <i className="fa fa-shopping-bag" />
                </a>
                <a href="wishlist" className="quick-wishlist">
                  <i className="fa fa-heart" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* quick veiw end */}
  {/* footer start */}
  <section className="footer-one section-tb-padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="footer-service section-b-padding">
            <ul className="service-ul">
              <li className="service-li">
                <a href="javascript:void(0)">
                  <i className="fa fa-truck" />
                </a>
                <span>Giao hàng miễn phí</span>
              </li>
              <li className="service-li">
                <a href="javascript:void(0)">
                  <i className="fa fa-rupee" />
                </a>
                <span>Thanh toán khi nhận hàng</span>
              </li>
              <li className="service-li">
                <a href="javascript:void(0)">
                  <i className="fa fa-refresh" />
                </a>
                <span>Miễn phí đổi trả</span>
              </li>
              <li className="service-li">
                <a href="javascript:void(0)">
                  <i className="fa fa-headphones" />
                </a>
                <span>Hỗ trợ trực tuyến</span>
              </li>
            </ul>
          </div>
          <div className="f-logo">
            <ul className="footer-ul">
              <li className="footer-li footer-logo">
                <a href="index">
                  <img className="img-fluid" src="image/logo1.png" alt="" />
                </a>
              </li>
              <li className="footer-li footer-address">
                <ul className="f-ul-li-ul">
                  <li className="footer-icon">
                    <i className="ion-ios-location" />
                  </li>
                  <li className="footer-info">
                    <h6>Địa chỉ</h6>
                    <span>6th floor, RITM Building</span>
                    <span>25, Vũ Ngọc Phan, Láng Hạ, Đống Đa, Hà Nội</span>
                  </li>
                </ul>
              </li>
              <li className="footer-li footer-contact">
                <ul className="f-ul-li-ul">
                  <li className="footer-icon">
                    <i className="ion-ios-telephone" />
                  </li>
                  <li className="footer-info">
                    <h6>Liên hệ</h6>
                    <a href="tel:1-800-222-000">0123 456 789</a>
                    <a href="mailto:demo@demo.com">
                      contact@gmail.com
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer-li footer-address">
                <ul className="f-ul-li-ul">
                  <li className="footer-icon">
                    <i className="ion-ios-help" />
                  </li>
                  <li className="footer-info">
                    <h6>Trợ giúp</h6>
                    <span>Lorem ipsum is simply</span>
                    <span>Dummy the printing</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer-bottom section-t-padding">
            <div className="footer-link" id="footer-accordian">
              <div className="f-link">
                <h2 className="h-footer">Top phân loại</h2>
                <a
                  href="#t-cate"
                  data-bs-toggle="collapse"
                  className="h-footer"
                >
                  <span>Top phân loại</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul
                  className="f-link-ul collapse"
                  id="t-cate"
                  data-bs-parent="#footer-accordian"
                >
                  <li className="f-link-ul-li">
                    <a href="grid-list">Cà phê</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="grid-list">Trà sữa</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="grid-list">Cà phê</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="grid-list">Trà sữa</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="grid-list">Bán chạy</a>
                  </li>
                </ul>
              </div>
              <div className="f-link">
                <h2 className="h-footer">Dịch vụ</h2>
                <a
                  href="#services"
                  data-bs-toggle="collapse"
                  className="h-footer"
                >
                  <span>Dịch vụ</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul
                  className="f-link-ul collapse"
                  id="services"
                  data-bs-parent="#footer-accordian"
                >
                  <li className="f-link-ul-li">
                    <a href="about-us">Về chúng tôi</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="faq%27s">Câu hỏi thường gặp</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="contact">Liên hệ</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="blog-style-1-3-grid">Tin tức</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="sitemap">Bản đồ</a>
                  </li>
                </ul>
              </div>
              <div className="f-link">
                <h2 className="h-footer">Quyền riêng tư &amp; điều khoản</h2>
                <a
                  href="#privacy"
                  data-bs-toggle="collapse"
                  className="h-footer"
                >
                  <span>Quyền riêng tư &amp; khoản</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul
                  className="f-link-ul collapse"
                  id="privacy"
                  data-bs-parent="#footer-accordian"
                >
                  <li className="f-link-ul-li">
                    <a href="payment-policy">Chính sách thanh toán</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="privacy-policy">Chính sách riêng tư</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="return-policy">Chính sách hoàn trả</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="shipping-policy">Chính sách giao hàng</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="terms-conditions">Điều khoản &amp; Điều kiện</a>
                  </li>
                </ul>
              </div>
              <div className="f-link">
                <h2 className="h-footer">Tài khoản</h2>
                <a
                  href="#account"
                  data-bs-toggle="collapse"
                  className="h-footer"
                >
                  <span>Tài khoản</span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul
                  className="f-link-ul collapse"
                  id="account"
                  data-bs-parent="#footer-accordian"
                >
                  <li className="f-link-ul-li">
                    <a href="account">Tài khoản</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="cart">Giỏ hàng</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="tracking">Lịch sử đặt hàng</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="wishlist">Ưa thích</a>
                  </li>
                  <li className="f-link-ul-li">
                    <a href="addresses">Địa chỉ nhận hàng</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* footer end */}
  {/* footer copyright start */}
  <section className="footer-copyright">
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="f-bottom">
            <li className="f-c f-copyright">
              <p>
                Copyright <i className="fa fa-copyright" /> Devmaster Academy
              </p>
            </li>
            <li className="f-c f-social">
              <a href="https://www.whatsapp.com/" className="f-icn-link">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="https://www.facebook.com/" className="f-icn-link">
                <i className="fa fa-facebook-f" />
              </a>
              <a href="https://twitter.com/" className="f-icn-link">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.instagram.com/" className="f-icn-link">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.pinterest.com/" className="f-icn-link">
                <i className="fa fa-pinterest-p" />
              </a>
              <a href="https://www.youtube.com/" className="f-icn-link">
                <i className="fa fa-youtube" />
              </a>
            </li>
            <li className="f-c f-payment">
              <a href="checkout-1">
                <img
                  src="image/payment.png"
                  className="img-fluid"
                  alt="payment image"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* footer copyright end */}
  {/* back to top start */}
  <a href="javascript:void(0)" className="scroll" id="top">
    <span>
      <i className="fa fa-angle-double-up" />
    </span>
  </a>
  {/* back to top end */}
  <div className="mm-fullscreen-bg" />
  {/* jquery */}
  {/* bootstrap */}
  {/* popper */}
  {/* fontawesome */}
  {/* owl carousal */}
  {/* swiper */}
  {/* custom */}
</>

    </div>
  )
}

export default Search
