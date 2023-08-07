import React, { useState, useEffect } from "react";
import Swiper from "swiper";
import "../assets/css/vendor/bootstrap.min.css";
import "../assets/css/vendor/fontawesome-5.css";
import "../assets/css/vendor/magnific-popup.css";
import "../assets/css/vendor/plyr.css";
import "../assets/css/vendor/socicon.css";
import "../assets/css/vendor/swiper.min.css";
import "../assets/css/style.css";
import logo from "../assets/images/logo/logo.jpeg";
import sliderImage1 from "../assets/images/slider/slider1.png";
import sliderImage2 from "../assets/images/slider/slider2.png";
import sliderImage3 from "../assets/images/slider/slider3.png";
import { Link } from "react-router-dom";
const Home = () => {
  let swiperInstance;
  useEffect(() => {
    swiperInstance = new Swiper(".swiper-container-h", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      speed: 1000,
    });
  }, []);

  const btnpressnext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };
  // Adding menu bar
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const btnpressprev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };
  return (
    <>
      {/*================= Header One Start =================*/}
      {/*================= Sticky Menu Start Here =================*/}
      <div
        className="main-header js-main-header auto-hide-header full-width menu-center header--sticky"
        data-blur="off"
      >
        <div className="main-header__layout">
          <div className="main-header__inner">
            <div className="main-header__logo">
              <div className="logo-dark">
                <Link to={"/"}>
                  <img src={logo} alt="Most" />
                </Link>
              </div>
              <div className="logo-light">
                <Link to={"/"}>
                  <img src={logo} alt="Most" />
                </Link>
              </div>
            </div>
            <nav
              className="main-header__nav js-main-header__nav main-header__default"
              id="main-header-nav"
              aria-labelledby="primary-menu"
            >
              <ul id="primary-menu" className="navbar-nav">
                <li className="menu-item menu-item-has-children">
                  <Link to={"/"} title="Home">
                    <span>Home</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link to={"/pricing"} title="Pricing">
                    <span>Pricing</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link to={"/adddevice"} title="Add Device">
                    <span>Add Device</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link to={"/aboutus"} title="About Us">
                    <span>About Us</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to={"/contactus"} title="Contact">
                    <span>Contact</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link to={"/signup"} title="Sign Up">
                    <span>Sign Up</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link to={"/login"} title="LogIn">
                    <span>LogIn</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="menuTrigger" />
            <div className="main-header--widgets">
              <div className="ms_theme_mode">
                <div className="ms_tm--inner">
                  <div className="theme-toggle" id="theme-toggle">
                    <input
                      type="checkbox"
                      id="switcher"
                      className="check"
                      defaultChecked=""
                    />
                    <svg
                      className="sun-and-moon"
                      aria-hidden="true"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <mask className="moon" id="moon-mask">
                        <rect
                          x={0}
                          y={0}
                          width="100%"
                          height="100%"
                          fill="white"
                        />
                        <circle cx={24} cy={10} r={6} fill="black" />
                      </mask>
                      <circle
                        className="sun"
                        cx={12}
                        cy={12}
                        r={6}
                        mask="url(#moon-mask)"
                        fill="currentColor"
                      ></circle>
                      <g className="sun-beams" stroke="currentColor">
                        <line x1={12} y1={1} x2={12} y2={3} />
                        <line x1={12} y1={21} x2={12} y2={23} />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1={1} y1={12} x2={3} y2={12} />
                        <line x1={21} y1={12} x2={23} y2={12} />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="header__search-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.57,16.15A9,9,0,1,0,15,17.46h0l6.25,6.25,1.42-1.42Zm-3-.14a7.07,7.07,0,1,1,1.56-1.28A6.88,6.88,0,0,1,13.59,16Z"></path>
                </svg>
              </div>
              <div className="header__search-modal">
                <button className="header__search--close-btn">
                  <svg className="icon icon--sm" viewBox="0 0 24 24">
                    <title>Close modal window</title>
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit={10}
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1={3} y1={3} x2={21} y2={21} />
                      <line x1={21} y1={3} x2={3} y2={21} />
                    </g>
                  </svg>
                </button>
                <div className="header__search--inner">
                  <form
                    role="search"
                    method="get"
                    className="searchform"
                    action="https://theme.madsparrow.me/most/"
                  >
                    <div className="ms-search-widget">
                      <input
                        type="search"
                        placeholder="Search..."
                        defaultValue=""
                        name="s"
                        className="search-field"
                      />
                      <div className="ms-search--btn">
                        <span className="ms-sb--icon">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.57,16.15A9,9,0,1,0,15,17.46h0l6.25,6.25,1.42-1.42Zm-3-.14a7.07,7.07,0,1,1,1.56-1.28A6.88,6.88,0,0,1,13.59,16Z"></path>
                          </svg>
                        </span>
                        <input
                          type="submit"
                          className="search-submit"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <button
              className={`main-header__nav-trigger js-main-header__nav-trigger menu-default ${
                menuOpen ? "menu-open" : ""
              }`}
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="main-header-nav"
            >
              <span>Menu</span>
              <i className="main-header__nav-trigger-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {/*================= Header End Here =================*/}
      <main className="ms-main">
        <div className="banner-horizental">
          <div className="swiper swiper-container-h">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slider-inner" data-swiper-parallax={100}>
                  <img src={sliderImage2} alt="slide_error" />
                  <div className="swiper-content" data-swiper-parallax={2000}>
                    <div className="title-area">
                      {/* title-area */}
                      <p className="tag">OUR VISION</p>
                      <Link to={"#"} className="title">
                        SOC
                      </Link>
                      {/* title area */}
                    </div>
                    <p className="disc">
                      Credibly leverage existing business experiences through
                      <br />
                      magnetic mindshare. Synergistically exploit
                      <br />
                      efficient partnerships world-class applications.
                    </p>

                    <div className="btn-wrap">
                      <a
                        className="btn btn-circle btn--md"
                        role="button"
                        href="#0"
                      >
                        <div className="ms-btn--circle">
                          <div className="circle">
                            <div className="circle-fill" />
                            <svg
                              viewBox="0 0 50 50"
                              xmlns="http://www.w3.org/2000/svg"
                              className="circle-outline"
                            >
                              <circle cx={25} cy={25} r={23} />
                            </svg>
                            <div className="circle-icon">
                              <svg
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon-arrow"
                              >
                                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="ms-btn--label">
                          <div className="ms-btn__text">Take A Look</div>
                          <div className="ms-btn__border" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-inner" data-swiper-parallax={100}>
                  {/*slider image2*/}
                  <img src={sliderImage1} alt="full_screen_image" />
                  <div className="swiper-content" data-swiper-parallax={2000}>
                    <div className="title-area">
                      {/* title-area */}
                      <p className="tag">INSPIRATION</p>
                      <Link to={"#"} className="title">
                        Motion
                      </Link>
                      {/* title area */}
                    </div>
                    <p className="disc">
                      Conveniently formulate progressive users for error-free
                      <br />
                      interfaces. Monotonectally deploy superior
                      <br />
                      relationships without seamless infomediaries.
                    </p>
                    <div className="btn-wrap">
                      <a
                        className="btn btn-circle btn--md"
                        role="button"
                        href="#0"
                      >
                        <div className="ms-btn--circle">
                          <div className="circle">
                            <div className="circle-fill" />
                            <svg
                              viewBox="0 0 50 50"
                              xmlns="http://www.w3.org/2000/svg"
                              className="circle-outline"
                            >
                              <circle cx={25} cy={25} r={23} />
                            </svg>
                            <div className="circle-icon">
                              <svg
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon-arrow"
                              >
                                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="ms-btn--label">
                          <div className="ms-btn__text">See More</div>
                          <div className="ms-btn__border" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-inner" data-swiper-parallax={100}>
                  <img src={sliderImage3} alt="full_screen_image" />
                  <div className="swiper-content" data-swiper-parallax={2000}>
                    <div className="title-area">
                      {/* title-area */}
                      <Link to={"#"} className="title">
                        ENGINE
                      </Link>
                      {/* title area */}
                    </div>
                    <p className="disc">
                      Conveniently formulate progressive users for error-free
                      <br />
                      interfaces. Monotonectally deploy superior
                      <br />
                      relationships without seamless infomediaries.
                    </p>
                    <div className="btn-wrap">
                      <a
                        className="btn btn-circle btn--md"
                        role="button"
                        href="https://theme.madsparrow.me/most/list-style/"
                      >
                        <div className="ms-btn--circle">
                          <div className="circle">
                            <div className="circle-fill" />
                            <svg
                              viewBox="0 0 50 50"
                              xmlns="http://www.w3.org/2000/svg"
                              className="circle-outline"
                            >
                              <circle cx={25} cy={25} r={23} />
                            </svg>
                            <div className="circle-icon">
                              <svg
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon-arrow"
                              >
                                <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="ms-btn--label">
                          <div className="ms-btn__text">Take A Look</div>
                          <div className="ms-btn__border" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-wrapper">
              <div className="swiper-button-next" onClick={btnpressnext}></div>
              <div className="swiper-button-prev" onClick={btnpressprev}></div>
            </div>
          </div>
        </div>
      </main>
      {/*================= Script Start Here =================*/}
      <div className="back-to-top js-back-to-top">
        <div className="ms-btt--inner">
          <svg
            className="ms-btt-i"
            enableBackground="new 0 0 96 96"
            height="96px"
            id="arrow_up"
            version="1.1"
            viewBox="0 0 96 96"
            width="96px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M52,84V21.656l21.457,21.456c1.561,1.562,4.095,1.562,5.656,0.001c1.562-1.562,1.562-4.096,0-5.658L50.829,9.172l0,0  c-0.186-0.186-0.391-0.352-0.609-0.498c-0.101-0.067-0.21-0.114-0.315-0.172c-0.124-0.066-0.242-0.142-0.373-0.195  c-0.135-0.057-0.275-0.089-0.415-0.129c-0.111-0.033-0.216-0.076-0.331-0.099C48.527,8.027,48.264,8,48.001,8l0,0  c-0.003,0-0.006,0.001-0.009,0.001c-0.259,0.001-0.519,0.027-0.774,0.078c-0.12,0.024-0.231,0.069-0.349,0.104  c-0.133,0.039-0.268,0.069-0.397,0.123c-0.139,0.058-0.265,0.136-0.396,0.208c-0.098,0.054-0.198,0.097-0.292,0.159  c-0.221,0.146-0.427,0.314-0.614,0.501L16.889,37.456c-1.562,1.562-1.562,4.095-0.001,5.657c1.562,1.562,4.094,1.562,5.658,0  L44,21.657V84c0,2.209,1.791,4,4,4S52,86.209,52,84z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
