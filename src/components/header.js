import React from "react";
import logo from "../assets/img/home.svg";
import fb from "../assets/img/fb.svg";
import togg from "../assets/img/togg2.svg";
import insta from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";
import useCollapse from "react-collapsed";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import cross from "../assets/img/times.svg";
import flh from "../assets/img/flh.svg";
import mobile from "../assets/img/mobile.jpg";

const Header = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [navbar, setNavbar] = React.useState(false);
  const [ourWork, setourWork] = React.useState(false);
  const [blog, setblog] = React.useState(false);
  const [campaign, setcampaign] = React.useState(false);
  const [flhIcon, setflhIcon] = React.useState(flh);

  const navigate = useNavigate();
  React.useEffect(() => {
    // if (navbar) {
    // get the element
  }, [navbar]);

  const moveto = (id) => {
    setNavbar(false);
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    } else {
      navigate("/");
      setTimeout(() => {
        let element = document.getElementById(id);
        element.scrollIntoView();
      }, 100);
    }
  };

  React.useEffect(() => {
    // window.addEventListener("scroll", () => {
    //     let scrollTop = window.scrollY;
    //     let docHeight = document.body.offsetHeight;
    //     let winHeight = window.innerHeight;
    //     let scrollPercent = scrollTop / (docHeight - winHeight);
    //     let scrollPercentRounded = Math.round(scrollPercent * 100);
    //     // console.log(scrollPercentRounded);
    //     // setpercent(scrollPercentRounded)
    //     if (scrollPercentRounded < 10) {
    //         document.getElementById('nav').style.position = 'fixed'
    //         document.getElementById('nav').style.background = 'linear-gradient(270deg, #4A4A4A 0.59%, #484848 14.03%, #474747 25.44%, #464646 33.68%, #525252 50.81%, #474747 75.54%, #474747 91.27%, #464646 99.17%, #484848 99.17%)'
    //         document.getElementById('menu').style.color = '#fff'
    //         setflhIcon(flh)

    //     } else {
    //         // debugger
    //         document.getElementById('nav').style.position = 'sticky'
    //         document.getElementById('nav').style.background = 'linear-gradient(270deg, #4A4A4A 0.59%, #484848 14.03%, #474747 25.44%, #464646 33.68%, #525252 50.81%, #474747 75.54%, #474747 91.27%, #464646 99.17%, #484848 99.17%)'
    //         document.getElementById('menu').style.color = '#fff'
    //         setflhIcon(logo)
    //     }
    //     // percentLabel.innerHTML = scrollPercentRounded;
    // });

    return () => {};
  }, []);

  return (
    <header
      id="nav"
      className="overlay"
      style={{
        position: "sticky",
        top: "0",
        left: "0",
        background:
          "linear-gradient(270deg, #4A4A4A 0.59%, #484848 14.03%, #474747 25.44%, #464646 33.68%, #525252 50.81%, #474747 75.54%, #474747 91.27%, #464646 99.17%, #484848 99.17%)",
        width: "100%",
        zIndex: "99999999999999999",
      }}
    >
      <div
        className="tw-hidden min-[900px]:tw-flex min-[900px]:tw-flex-row "
        style={{ height: "60px", margin: "0px 20px" }}
      >
        <div
          className="tw-basis-[30%] tw-my-auto tw-mx-auto tw-font-bold tw-font-sans"
          style={{ fontSize: "20px" }}
        >
          {/* <span style={{ 'cursor': 'pointer', 'color': '#fff' }} id='menu' onClick={e => setNavbar(!navbar)}>MENU</span> */}
          <img
            src={flhIcon}
            onClick={(e) => navigate("/")}
            style={{ cursor: "pointer" }}
            alt="home"
          ></img>
        </div>
        <div
          className="tw-basis-[68%] tw-my-auto"
          style={{ textAlign: "-webkit-center" }}
        >
          {/* <img src={flhIcon} alt='home'></img> */}
        </div>
        <div className="tw-basis-[2%] tw-my-auto">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* <span className='tw-font-sans tw-text-[24px] tw-font-normal tw-text-[#fff]' style={{ 'cursor': 'pointer', 'color': '#fff', 'textTransform':'uppercase' }} id='menu' onClick={e => navigate("/contact")}>contact</span> */}
            {/* <span className='tw-font-sans tw-text-[24px] tw-font-normal tw-text-[#fff]' style={{ 'cursor': 'pointer', 'color': '#fff' }} id='menu' onClick={e => navigate("/celebrity")}>GALLARY</span> */}

            {/* <img src={insta} alt='home' style={{ marginRight: '5px' }}></img>
                        <img src={fb} alt='home' style={{ marginRight: '5px' }}></img>
                        <img src={twitter} alt='home'></img> */}
            {!navbar && (
              <img
                className="tw-float-right"
                style={{ width: "30px", cursor: "pointer" }}
                src={togg}
                onClick={(e) => setNavbar(!navbar)}
                alt="home"
              ></img>
            )}
            {navbar && (
              <img
                className="tw-float-right"
                style={{ cursor: "pointer" }}
                src={cross}
                onClick={(e) => setNavbar(!navbar)}
                alt="home"
              ></img>
            )}
          </div>
        </div>
      </div>
      <div
        className="min-[900px]:tw-hidden tw-flex tw-flex-row "
        style={{ height: "60px", margin: "0px 20px" }}
      >
        {/* <div className='tw-basis-1/3 tw-my-auto tw-mx-auto tw-font-bold tw-font-sans' style={{ 'fontSize': '20px' }} >
                    <span onClick={e => setNavbar(!navbar)}>MENU</span>
                </div> */}
        <div
          className="tw-basis-2/3 tw-my-auto"
          style={{ textAlign: "-webkit-center" }}
        >
          <img
            className="tw-float-left"
            onClick={(e) => navigate("/")}
            style={{ cursor: "pointer" }}
            src={flhIcon}
            alt="home"
          ></img>
        </div>
        <div className="tw-basis-1/3 tw-my-auto">
          {!navbar && (
            <img
              className="tw-float-right"
              style={{ width: "30px", cursor: "pointer" }}
              src={togg}
              onClick={(e) => setNavbar(!navbar)}
              alt="home"
            ></img>
          )}
          {navbar && (
            <img
              className="tw-float-right"
              style={{ cursor: "pointer" }}
              src={cross}
              onClick={(e) => setNavbar(!navbar)}
              alt="home"
            ></img>
          )}
        </div>
      </div>
      {navbar && (
        <>
          <div
            className={`tw-flex-1 tw-justify-self-center overlay-content tw-h-[100vh] min-[900px]:tw-h-auto slide-right  min-[900px]:tw-hidden`}
            style={{ zIndex: "999", position: "relative" }}
          >
            <ul className="tw-items-center tw-justify-center">
              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4 "
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Home{" "}
                </span>
              </li>
              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={(e) => moveto("bio")}
                >
                  About
                </span>
              </li>

              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setourWork(!ourWork)}
                >
                  Projects {ourWork ? <span>-</span> : <span>+</span>}
                </span>
              </li>
              <ul
                className={`tw-items-center tw-justify-center tw-ml-16 ${
                  ourWork ? "tw-block" : "tw-hidden"
                }`}
              >
                <li
                  className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => navigate("/campaigns")}
                  >
                    Campaigns
                  </span>
                </li>
                <li
                  className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => navigate("/celebrity")}
                  >
                    Celebrity appearances
                  </span>
                </li>

                <li
                  className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => navigate("/magzine")}
                  >
                    Magazine covers
                  </span>
                </li>
              </ul>

              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  // onClick={e => setblog(!blog)}
                  onClick={(e) => navigate("/blogs")}
                >
                  Blog
                  {/* {blog ? <span>-</span> : <span>+</span>} */}
                </span>
              </li>
              {/* <ul className={`tw-items-center tw-justify-center tw-ml-16 ${blog ? "tw-block" : "tw-hidden"}`}>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => moveto()}>News coverage</span>
                        </li>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => moveto()}>Blogs</span>
                        </li>
                    </ul> */}

              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setcampaign(!campaign)}
                >
                  Commercials {campaign ? <span>-</span> : <span>+</span>}
                </span>
              </li>
              <ul
                className={`tw-items-center tw-justify-center tw-ml-16 ${
                  campaign ? "tw-block" : "tw-hidden"
                }`}
              >
                <li
                  className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => navigate("/skin")}
                  >
                    Skin Commercials
                  </span>
                </li>

                <li
                  className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => navigate("/hair")}
                  >
                    Hair Commercials
                  </span>
                </li>
              </ul>

              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={(e) => navigate("/contact")}
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
          <div
            className={`tw-flex-1 tw-justify-self-center overlay-content tw-h-[100vh] min-[900px]:tw-h-auto tw-hidden min-[900px]:tw-block`}
            style={{ marginTop: "2.7em" }}
          >
            <ul className="tw-items-center tw-justify-center">
              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4 "
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  Home{" "}
                </span>
              </li>
              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={(e) => moveto("bio")}
                >
                  About
                </span>
              </li>

              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setourWork(!ourWork)}
                >
                  Projects {ourWork ? <span>-</span> : <span>+</span>}
                </span>
              </li>
              <ul
                className={`tw-items-center tw-justify-center tw-ml-16 ${
                  ourWork ? "tw-block" : "tw-hidden"
                }`}
              >
                <li
                  className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => navigate("/campaigns")}
                  >
                    Campaigns
                  </span>
                </li>
                <li
                  className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => navigate("/celebrity")}
                  >
                    Celebrity appearances
                  </span>
                </li>

                <li
                  className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => navigate("/magzine")}
                  >
                    Magazine covers
                  </span>
                </li>
              </ul>

              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  // onClick={e => setblog(!blog)}
                  onClick={(e) => navigate("/blogs")}
                >
                  Blog
                  {/* {blog ? <span>-</span> : <span>+</span>} */}
                </span>
              </li>
              {/* <ul className={`tw-items-center tw-justify-center tw-ml-16 ${blog ? "tw-block" : "tw-hidden"}`}>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => moveto()}>News coverage</span>
                        </li>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => moveto()}>Blogs</span>
                        </li>
                    </ul> */}

              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setcampaign(!campaign)}
                >
                  Commercials {campaign ? <span>-</span> : <span>+</span>}
                </span>
              </li>
              <ul
                className={`tw-items-center tw-justify-center tw-ml-16 ${
                  campaign ? "tw-block" : "tw-hidden"
                }`}
              >
                <li
                  className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => navigate("/skin")}
                  >
                    Skin Commercials
                  </span>
                </li>

                <li
                  className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2"
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={(e) => navigate("/hair")}
                  >
                    Hair Commercials
                  </span>
                </li>
              </ul>

              <li
                className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4"
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: "35px",
                  lineHeight: "35px",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={(e) => navigate("/contact")}
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
