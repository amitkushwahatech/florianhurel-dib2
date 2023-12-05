import React from "react";
import brand1 from "../assets/img/brand/bazar.svg";
import brand2 from "../assets/img/brand/famina.png";
import brand3 from "../assets/img/brand/grazia.png";
import brand4 from "../assets/img/brand/vogue.svg";
import brand6 from "../assets/img/brand/elle.png";
import brand5 from "../assets/img/brand/bazar.png";
import logo from "../assets/img/home.svg";
import a1 from "../assets/img/apperance/1.JPG";
import a2 from "../assets/img/apperance/2.JPG";
import a3 from "../assets/img/apperance/5.jpg";
import a4 from "../assets/img/apperance/4.JPG";
import f1 from "../assets/img/film/1.mp4";
import f2 from "../assets/img/film/2.mp4";
import f3 from "../assets/img/film/3.mp4";
import t1 from "../assets/img/film/1.jpg";
import t2 from "../assets/img/film/2.jpg";
import t3 from "../assets/img/film/3.jpg";
import fo1 from "../assets/img/footer/1.svg";
import fo2 from "../assets/img/footer/2-1.svg";
import fo21 from "../assets/img/footer/2.svg";
import fo3 from "../assets/img/footer/3.svg";
import fb from "../assets/img/fb.svg";
import cross from "../assets/img/times.svg";
import insta from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";
import CarouselOwrWork from "./crouselOwrWork";
import left from "../assets/img/left-arrow.svg";
import right from "../assets/img/right-arrow.svg";
import leftw from "../assets/img/leftw.svg";
import rightw from "../assets/img/right.svg";
import dash from "../assets/img/dash.svg";
import quote from "../assets/img/quote.png";
import flh from "../assets/img/flh.svg";
import flhAcademy from "../assets/img/flhAcademy.svg";
import { Outlet, Link } from "react-router-dom";
import VideoModel from "./videoModel";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import salonspa from "../assets/img/SALONSPA.png";
import hairCouture from "../assets/img/HairCouture.svg";
import $ from "jquery";
import b1 from "../assets/img/blog/1.webp";
import b2 from "../assets/img/blog/2.webp";
import b3 from "../assets/img/blog/3.jpg";
import b5 from "../assets/img/blog/5.jpg";
import b6 from "../assets/img/blog/6.jpg";
import b7 from "../assets/img/blog/7.png";
// import home from "../assets/img/home.jpeg";
import florian from "../assets/img/florian.svg";
import line from "../assets/img/lines.svg";
import CarouselApp from "./crouselApp";
import fff from "../assets/img/fff.svg";
//commercial import
import flh1 from "../assets/img/flh.svg";

const BrandWorkWith = () => {
  const [videoArray, setvideoArray] = React.useState([]);
  const [imageArray, setimageArray] = React.useState([]);
  let [selectedVideo, setSelectedVideo] = React.useState(0);
  let [selectedImage, setSelectedImage] = React.useState(0);
  let [isOpen, setIsOpen] = React.useState(false);
  const videoRef = React.useRef();
  const navigate = useNavigate();

  const play = (event, id, index) => {
    console.log(event.target.parentElement);
    document.getElementById("nav").style.display = "none";
    document.getElementById("modal").style.display = "block";
    document
      .getElementsByTagName("body")[0]
      .classList.add("tw-overflow-y-hidden");
    setTimeout(() => {
      var img = document.getElementById(id).children;
      let arr = [];
      for (let i = 0; i <= img.length - 1; i++) {
        arr.push(`${img[i].getElementsByTagName("source")[0].src}`);
      }
      setvideoArray(arr);
      setSelectedVideo(index);
      setIsOpen(true);
    }, 500);
  };

  const playImage = (event, id, index) => {
    document.getElementById("nav").style.display = "none";
    document.getElementById("modal-image").style.display = "block";
    document
      .getElementsByTagName("body")[0]
      .classList.add("tw-overflow-y-hidden");
    setTimeout(() => {
      var img = document.getElementById(id).getElementsByTagName("img");
      let arr = [];
      for (let i = 0; i <= img.length - 1; i++) {
        arr.push(`${img[i].src}`);
      }
      setimageArray(arr);
      setSelectedImage(index);
    }, 500);
  };

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    // setSelectedVideo(videoArray[0])
    console.log(videoArray[selectedVideo], selectedVideo, isOpen);
    // videoRef.current?.load();
    return () => {
      // videoRef.current?.pause();
    };
  }, [videoArray, selectedVideo, isOpen]);

  const nextVideo = () => {
    // debugger
    if (selectedVideo < videoArray.length - 1) {
      setSelectedVideo(selectedVideo + 1);
    }
  };

  const previousVideo = () => {
    // debugger
    if (selectedVideo !== 0) {
      setSelectedVideo(selectedVideo - 1);
    }
  };

  const nextImage = () => {
    if (selectedImage < imageArray.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const previousImage = () => {
    if (selectedImage !== 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const closeModal = () => {
    document.getElementById("nav").style.display = "block";
    setvideoArray([]);
    document.getElementById("modal").style.display = "none";
    document
      .getElementsByTagName("body")[0]
      .classList.remove("tw-overflow-y-hidden");
  };

  const closeModalImage = () => {
    document.getElementById("nav").style.display = "block";
    document.getElementById("modal-image").style.display = "none";
    document
      .getElementsByTagName("body")[0]
      .classList.remove("tw-overflow-y-hidden");
  };
  React.useEffect(() => {
    $(function () {
      $(".btn-6")
        .on("mouseenter", function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find("span").css({ top: relY, left: relX });
        })
        .on("mouseout", function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find("span").css({ top: relY, left: relX });
        });
    });
    // $('#carouselExampleIndicators1').carousel({
    //   interval: 3000,
    //   cycle: true
    // });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    arrows: false,
  };
  const settings4 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    arrows: false,
  };
  const settings2 = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  function importAll(r) {
    return r.keys().map(r);
  }

  const commercial = importAll(
    require.context("../assets/img/commercial", false, /\.(png|jpe?g|JPG|svg)$/)
  );
  return (
    <>
      <div className="brandWorkWith min-[900px]:tw-h-[300px] tw-h-auto" id="ss">
        <div className="tw-grid tw-mx-2 min-[900px]:tw-mx-36">
          <div className="tw-columns-1">
            <div
              className=" min-[900px]:tw-text-[48px] tw-text-[25px] tw-mt-4 min-[900px]:tw-mt-[30px] min-[900px]:tw-leading-[60px] tw-leading-[30px] tw-italic tw-text-[#fff] "
              style={{
                textTransform: "uppercase",
                textAlign: "right",
                opacity: "0.3",
              }}
            >
              Publications Worked With
            </div>
          </div>
          <div className="tw-hidden min-[900px]:tw-grid tw-grid-cols-2 min-[900px]:tw-grid-cols-5 tw-gap-4 tw-my-[45px] ">
            <img
              src={brand1}
              alt="d"
              style={{ margin: "auto", height: "39px" }}
            ></img>
            <img
              src={brand2}
              alt="d"
              style={{ margin: "auto", height: "40px" }}
            ></img>
            <img
              src={brand3}
              alt="d"
              style={{ margin: "auto", height: "38px" }}
            ></img>
            <img
              src={brand4}
              alt="d"
              style={{ margin: "auto", height: "36px" }}
            ></img>
            <img
              src={brand6}
              alt="d"
              style={{ margin: "auto", height: "36px" }}
            ></img>
          </div>
          <div className="min-[900px]:tw-hidden tw-w-full tw-gap-4 tw-my-12 ">
            <Slider {...settings} style={{ width: "95vw" }}>
              <div>
                <img
                  src={brand1}
                  className="border-img"
                  alt="d"
                  style={{ margin: "auto", width: "70%" }}
                ></img>
              </div>
              <div>
                <img
                  src={brand2}
                  alt="d"
                  className="border-img"
                  style={{ margin: "auto", width: "70%" }}
                ></img>
              </div>
              <div>
                <img
                  src={brand3}
                  alt="d"
                  className="border-img"
                  style={{ margin: "auto", width: "70%" }}
                ></img>
              </div>
              <div>
                <img
                  src={brand4}
                  alt="d"
                  className="border-img"
                  style={{ margin: "auto", width: "70%" }}
                ></img>
              </div>
              <div>
                <img
                  src={brand6}
                  alt="d"
                  className="border-img"
                  style={{ margin: "auto", width: "60%", height: "50px" }}
                ></img>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div
        className=""
        style={{
          background:
            "linear-gradient(180deg, #3E3E3E 0%, #212121 50%,  #3E3E3E 100%)",
        }}
      >
        {/* <div id='home' className='tw-my-auto'>
        <video onClick={e => play(e, 'home', 0)} poster={home}>
            <source src='https://player.vimeo.com/video/805016119?h=0fd1008446' type="video/mp4" />
          </video>
          </div> */}
        <div className="tw-hidden min-[900px]:tw-grid tw-grid-cols-1 tw-h-[285px] min-[900px]:tw-h-auto tw-mx-8 min-[900px]:tw-mx-[75px] tw-py-[50px]">
          <div className="tw-w-[100%] tw-p-4  border-florian">
            {/* <div className="vertical-line tw-mx-8"></div> */}
            <p className="min-[900px]:tw-text-[32px]  tw-text-[#dedede] tw-leading-[44px] tw-font-sans tw-font-normal tw-mb-11">
              Florian has been an educator for the longest time with a total
              international experience of 17 + years making him A Global
              Ambassador for Hair Giants
            </p>
            <div>
              <img style={{ float: "right" }} src={florian}></img>
            </div>
          </div>
        </div>

        {/* business holded */}
        <div className="tw-hidden min-[900px]:tw-block tw-w-full ">
          <div className="tw-grid tw-mx-10 min-[900px]:tw-mx-[75px] tw-py-8">
            <div className="tw-columns-1">
              <div
                className="tw-font-sans tw-font-normal tw-text-[96px] tw-leading-[121px] tw-mt-4 min-[900px]:tw-mt-8 tw-text-[#fff]"
                style={{ textTransform: "uppercase", opacity: "0.17" }}
              >
                Business
              </div>
            </div>
            {/* <div className='tw-columns-1 tw-mx-auto'>
            <div className='tw-font-sans tw-font-normal  tw-mt-1 min-[900px]:tw-mt-2 tw-text-black min-[900px]:tw-text-white' style={{ 'textTransform': 'uppercase', 'fontSize': '142px', 'lineHeight': '142px' }}>
              <img style={{ 'transform': 'rotate(180deg)', 'margin': '28px 0px' }} src={quote}></img>
            </div>
          </div> */}
            <div className="tw-columns-1">
              <p
                className="tw-font-sans tw-font-normal min-[900px]:tw-text-[26px] tw-leading-[35px]  tw-mt-1 tw-text-center min-[900px]:tw-mt-2 tw-text-[#fff] min-[900px]:tw-text-[#fff]"
                style={{}}
              >
                {/* <span className='quotes'>"</span> */}
                {/* Speaking of his International Experience of so many years, Florian himself has developed a Method of his own which he passes out to young, experienced and aspiring artists through his educational platform “Florian Hurel Academy” as a entrepreneur, Florian holds on to business within the education and fitness sectors of the Industry owning Florian Hurel Academy and FloFitBox Mumbai. */}
                Speaking of his international experience over many years,
                Florian himself has developed a method of his own, which he
                passes on to young, enthusiastic, and aspiring artists through
                his educational platform, “Florian Hurel Academy.” As an
                entrepreneur, Florian holds onto businesses within the education
                and fitness sectors of the industry, owning Florian Hurel
                Academy and FloFitBox Mumbai.
              </p>
            </div>
            <div className="tw-grid tw-grid-cols-4 tw-gap-2 tw-my-[45px]">
              <a
                href="https://florianhurelacademy.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="mx-auto my-auto tw-h-[45px]"
                  src={flhAcademy}
                  alt="g"
                ></img>
              </a>
              <a href="#" rel="noreferrer" target="_blank">
                <img
                  className="mx-auto my-auto tw-h-[21px]"
                  src={flh}
                  alt="g"
                ></img>
              </a>
              <a href="https://flofitbox.com/" rel="noreferrer" target="_blank">
                <img
                  className="mx-auto my-auto tw-h-[56px]"
                  src={fo3}
                  alt="g"
                ></img>
              </a>
              <a
                href="https://florianhurelhaircouture.com"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="mx-auto my-auto tw-h-[50px]"
                  src={hairCouture}
                  alt="g"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='tw-hidden min-[900px]:tw-block tw-w-full our-work' >
        <div className='tw-grid tw-mx-10 min-[900px]:tw-mx-48  tw-py-8' >
          <div className='tw-columns-1'>
            <div className='tw-font-sans tw-font-bold tw-text-2xl tw-mt-4 min-[900px]:tw-mt-8 tw-text-white underline-small' style={{ 'textTransform': 'uppercase' }}>
              Business holded
            </div>
          </div>
          <div className='tw-columns-1 tw-mx-auto'>
            <div className='tw-font-sans tw-font-normal  tw-mt-1 min-[900px]:tw-mt-2 tw-text-black min-[900px]:tw-text-white' style={{ 'textTransform': 'uppercase', 'fontSize': '142px', 'lineHeight': '142px' }}>
              <img style={{ 'transform': 'rotate(180deg)', 'margin': '28px 0px' }} src={quote}></img>
            </div>
          </div>
          <div className='tw-columns-1'>
            <p className='tw-font-sans tw-font-normal min-[900px]:tw-text-[20px] tw-text-lg  tw-mt-1 tw-text-center min-[900px]:tw-mt-2 tw-text-black min-[900px]:tw-text-white' style={{ 'textTransform': 'lowercase' }}>
              Speaking of his many years of international experience, Florian himself has developed a system that he shares with aspiring young, seasoned, and established artists through his educational platform, "FLORIAN HUREL ACADEMY," which he runs as an entrepreneur. FLORIAN CONTINUES TO DO BUSINESS IN THE EDUCATION AND FITNESS SECTORS OF THE INDUSTRY AND OWNS FLORIAN HUREL ACADEMY AND FLOFITBOX MUMBAI
            </p>
          </div>
          <div className='tw-grid tw-grid-cols-4 tw-gap-2 tw-my-[45px]' >
            <a href='https://florianhurelacademy.com/' rel="noreferrer" target='_blank'><img className='mx-auto my-auto' src={flhAcademy} alt='g' ></img></a>
            <a href='#' rel="noreferrer" target='_blank'><img className='mx-auto my-auto' src={flh} alt='g' ></img></a>
            <a href='https://flofitbox.com/' rel="noreferrer" target='_blank'><img className='mx-auto my-auto' src={fo3} alt='g' ></img></a>
            <a href='#' rel="noreferrer" target='_blank'><img className='mx-auto my-auto' src={salonspa} alt='g' ></img></a>
          </div>
        </div>

      </div> */}

      {/* Projects */}
      <div
        className=" tw-hidden min-[900px]:tw-block"
        style={{
          background: `linear-gradient(180deg, #3E3E3E 20.02%, #1A1919 73.58%)`,
          backgroundColor:
            "linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)",
        }}
      >
        <div
          className="tw-pt-[30px] tw-hidden min-[900px]:tw-block backgroungg"
          style={{
            backgroundSize: "cover",
            backgroundColor:
              "linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)",
            zIndex: "2",
            position: "relative",
          }}
        >
          <div className="tw-grid tw-mx-0 min-[900px]:tw-mx-16 tw-pt-10 min-[900px]:tw-h-auto ">
            <div className="border-florian" style={{ zIndex: "0" }}>
              <div className="row tw-pb-[20px] w-full ">
                {/* <div className='tw-font-sans tw-font-bold tw-text-2xl underline-small tw-mx-10 min-[900px]:tw-mx-0' style={{ 'marginBottom': '15px', 'textTransform': 'uppercase' }}>Projects</div> */}
                <div className="col-md-12 p-0">
                  <div
                    class=""
                    style={{
                      float: "right",
                      marginTop: "-70px",
                      background:
                        "linear-gradient(180deg, #3E3E3E 3.02%, #3e3e3e 73.58%)",
                      padding: "3px 12px",
                      marginRight: "-6px",
                      zIndex: "1",
                    }}
                  >
                    <div class=" tw-mx-4 ">
                      <span
                        className="tw-font-sans tw-italic tw-font-normal tw-text-[96px] tw-text-[#fff]"
                        style={{ opacity: "0.17" }}
                      >
                        Projects
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 p-0">
                  <CarouselOwrWork />
                </div>
                {/* <div className='view-all tw-mx-auto tw-mt-8' style={{ 'position': 'relative', 'border': '2px solid #000' }}>
            <span className='tw-font-sans tw-font-semibold' style={{ 'position': 'absolute', 'fontSize': '24px', 'padding': '8px 1px 1px 21px' }}>VIEW ALL</span>
          </div> */}
                {/* <div class="mx-auto col-md-12 p-0 tw-mt-[20px]">
            <div class="wrap">
              <a class="btn-7 " onClick={() => navigate("/campaigns")}>VIEW ALL<span style={{'color':'#fff'}}>VIEW ALL</span></a>
            </div>
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="tw-pt-[30px] min-[900px]:tw-hidden tw-block"
        style={{
          background: `linear-gradient(180deg, #1A1919 20.02%, #3e3e3e 73.58%)`,
          backgroundColor:
            "linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)",
        }}
      >
        <div
          className="tw-pt-[30px] min-[900px]:tw-hidden tw-block backgroungg3"
          style={{
            backgroundSize: "cover",
            backgroundColor:
              "linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)",
            zIndex: "2",
            position: "relative",
          }}
        >
          <div className="tw-grid tw-mx-0 min-[900px]:tw-mx-16 tw-pt-4 min-[900px]:tw-h-auto ">
            <div className="tw-columns-1 w-full ">
              {/* <div className='tw-font-sans tw-font-bold tw-text-2xl underline-small tw-mx-10 min-[900px]:tw-mx-0' style={{ 'marginBottom': '15px', 'textTransform': 'uppercase' }}>our work</div> */}
              <div class="" style={{}}>
                <div class=" tw-mx-4 ">
                  <span
                    className="tw-font-sans tw-italic tw-font-normal tw-text-[48px] tw-text-[#fff]"
                    style={{ opacity: "0.17", float: "right" }}
                  >
                    Projects
                  </span>
                </div>
              </div>
              <div className="tw-mt-[60px]">
                <CarouselOwrWork />
              </div>
              {/* <div className='view-all tw-mx-auto tw-mt-8' style={{ 'position': 'relative', 'border': '2px solid #000' }}>
            <span className='tw-font-sans tw-font-semibold' style={{ 'position': 'absolute', 'fontSize': '24px', 'padding': '8px 1px 1px 21px' }}>VIEW ALL</span>
          </div> */}
              {/* <div class="mx-auto tw-mt-[20px]">
            <div class="wrap">
              <a class="btn-7 " onClick={() => navigate("/campaigns")}>VIEW ALL<span style={{'color':'#fff'}}>VIEW ALL</span></a>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className="tw-block min-[900px]:tw-hidden tw-w-full"
        style={{
          background:
            "linear-gradient(180deg, #3E3E3E 0%, #3E3E3E 50%, #212121 100%)",
          marginTop: "-1px",
        }}
      >
        <div className="tw-grid tw-mx-4 min-[900px]:tw-mx-48   tw-py-[50px]">
          <div className="border-florian">
            <div className="">
              <p
                className="tw-font-sans tw-font-normal tw-w-[70%] tw-italic tw-text-[48px] tw-mt-[-40px] min-[900px]:tw-mt-8 tw-text-white "
                style={{ textTransform: "uppercase", background: "#3E3E3E" }}
              >
                <span style={{ opacity: "0.17" }}>Business</span>
              </p>
            </div>
            <div className="tw-columns-1 tw-mx-2">
              <p
                className="tw-font-sans tw-font-[300] min-[900px]:tw-text-2xl tw-italic tw-text-[20px]  tw-mt-1 tw-text-center min-[900px]:tw-mt-2 tw-text-white"
                style={{ textAlign: "left" }}
              >
                {/* <span className='quotes'>"</span> */}
                {/* Speaking of his many years of international experience, Florian himself has developed a system that he shares with aspiring young, seasoned, and established artists through his educational platform, "FLORIAN HUREL ACADEMY," which he runs as an entrepreneur. FLORIAN CONTINUES TO DO BUSINESS IN THE EDUCATION AND FITNESS SECTORS OF THE INDUSTRY AND OWNS FLORIAN HUREL ACADEMY AND FLOFITBOX MUMBAI */}
                {/* Speaking of his International Experience of so many years, Florian himself has developed a Method of his own which he passes out to young, experienced and aspiring artists through his educational platform “Florian Hurel Academy” as a entrepreneur, Florian holds on to business within the education and fitness sectors of the Industry owning Florian Hurel Academy and FloFitBox Mumbai. */}
                Speaking of his international experience over many years,
                Florian himself has developed a method of his own, which he
                passes on to young, enthusiastic, and aspiring artists through
                his educational platform, “Florian Hurel Academy.” As an
                entrepreneur, Florian holds onto businesses within the education
                and fitness sectors of the industry, owning Florian Hurel
                Academy and FloFitBox Mumbai.
              </p>
            </div>

            <div className="tw-grid tw-my-[45px]">
              <Slider {...settings4} style={{ width: "90vw" }}>
                <div>
                  <a
                    href="https://florianhurelacademy.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="mx-auto my-auto"
                      style={{ margin: "auto", width: "70%" }}
                      src={flhAcademy}
                      alt="g"
                    ></img>
                  </a>
                </div>
                <div>
                  <a href="#" rel="noreferrer" target="_blank">
                    <img
                      className="mx-auto my-auto"
                      src={flh}
                      style={{ margin: "auto", width: "70%" }}
                      alt="g"
                    ></img>
                  </a>
                </div>
                <div>
                  <a
                    href="https://flofitbox.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="mx-auto my-auto"
                      style={{ margin: "auto", width: "70%" }}
                      src={fo3}
                      alt="g"
                    ></img>
                  </a>
                </div>
                <div>
                  <a
                    href="https://florianhurelhaircouture.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      className="mx-auto my-auto"
                      src={hairCouture}
                      style={{ margin: "auto", width: "70%" }}
                      alt="g"
                    ></img>
                  </a>
                </div>
              </Slider>
            </div>
            <div style={{ position: "relative" }}>
              <img className="asdfg" src={fff}></img>
            </div>
          </div>
        </div>

        <div className="tw-block min-[900px]:tw-hidden tw-w-full">
          <div className="backgroungg4" style={{ position: "relative" }}>
            <div className="tw-grid tw-mx-2 min-[900px]:tw-mx-40">
              <div className="tw-columns-1">
                <div
                  className="tw-font-sans tw-font-normal tw-text-[48px] tw-mt-4 tw-text-white "
                  style={{
                    color: "#fff",
                    textTransform: "uppercase",
                    opacity: "0.26",
                    float: "right",
                  }}
                >
                  Direction
                </div>
              </div>
              <div
                id=""
                className="tw-flex tw-flex-row tw-gap-3 tw-mx-2 min-[900px]:tw-mx-48 tw-my-10 mx-auto"
                style={{ marginTop: "20px" }}
              >
                <div class="tw-basis-[100%]">
                  <Slider
                    {...settings2}
                    style={{ width: "95vw", margin: "auto" }}
                  >
                    <div>
                      <video onClick={(e) => play(e, "video1", 0)} poster={t1}>
                        <source
                          src="https://www.youtube.com/embed/V3v-hYQC_D8?autoplay=1"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div>
                      <video onClick={(e) => play(e, "video1", 1)} poster={t2}>
                        <source
                          src="https://www.youtube.com/embed/mXkdtM86REY?autoplay=1"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div>
                      <video onClick={(e) => play(e, "video1", 2)} poster={t3}>
                        <source
                          src="https://www.youtube.com/embed/7VNpvlF4xCw?autoplay=1"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="tw-columns-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* film */}
      <div
        className="tw-hidden min-[900px]:tw-block "
        style={{ background: "#1A1A1A" }}
      >
        <div
          className="backgroungg2 tw-h-auto"
          style={{ position: "relative" }}
        >
          <div
            className="tw-grid tw-mx-10 md:tw-mx-16 tw-pt-16 "
            style={{ position: "relative", zIndex: "999999" }}
          >
            <div className="tw-columns-1">
              <div
                className="tw-font-sans tw-font-normal tw-italic tw-text-[96px] tw-leading-[80px] tw-mt-4 md:tw-mt-8 "
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  opacity: "0.5",
                }}
              >
                Direction
              </div>
            </div>
            <div
              id="video1"
              className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8  tw-mx-8 md:tw-mx-48 tw-mb-10 mx-auto"
            >
              <video onClick={(e) => play(e, "video1", 0)} poster={t1}>
                <source
                  src="https://www.youtube.com/embed/V3v-hYQC_D8?autoplay=1"
                  type="video/mp4"
                />
              </video>
              <video onClick={(e) => play(e, "video1", 1)} poster={t2}>
                <source
                  src="https://www.youtube.com/embed/mXkdtM86REY?autoplay=1"
                  type="video/mp4"
                />
              </video>
              <video onClick={(e) => play(e, "video1", 2)} poster={t3}>
                <source
                  src="https://www.youtube.com/embed/7VNpvlF4xCw?autoplay=1"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="row">
              {/* <div class="mx-auto">
              <div class="wrap">
                <a class="btn-7" href="#">VIEW ALL<span></span></a>
              </div>
            </div> */}
              <div className="col-md-12">
                <div
                  className="tw-font-sans tw-font-normal tw-italic tw-text-[96px] tw-text-white min-[900px]:tw-text-white"
                  style={{
                    textTransform: "uppercase",
                    opacity: "0.17",
                    textAlign: "end",
                  }}
                >
                  Appearance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div
        className="tw-bg-[#232323] min-[900px]:tw-bg-[linear-gradient(180deg, #1A1A1A 0%, #545454 100%)] tw-h-auto min-[900px]:tw-mt-[0px] tw-pt-[1px]"
        style={{ background: "rgba(26, 26, 26, 0.78)" }}
      >
        <div className="tw-grid tw-mx-2 min-[900px]:tw-mx-16  tw-py-4 ">
          <div className="row m-0 ">
            <div
              className=" tw-block min-[900px]:tw-hidden tw-font-sans tw-font-normal tw-italic tw-text-[46px] tw-text-white min-[900px]:tw-text-white"
              style={{
                marginBottom: "15px",
                textTransform: "uppercase",
                opacity: "0.17",
                float: "right",
              }}
            >
              Appearance
            </div>

            <div
              id="image1"
              className="tw-hidden min-[900px]:tw-block col-md-12 p-0"
            >
              {/* <img className='mx-auto' onClick={e => playImage(e, 'image1', 0)} src={a1} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              <img className='mx-auto' onClick={e => playImage(e, 'image1', 1)} src={a2} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              <img className='mx-auto' onClick={e => playImage(e, 'image1', 2)} src={a3} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              <img className='mx-auto' onClick={e => playImage(e, 'image1', 3)} src={a4} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img> */}
              <CarouselApp />
            </div>
            <div className="tw-block min-[900px]:tw-hidden col-md-12 p-0">
              <div
                id=""
                className="tw-flex tw-flex-row tw-gap-3 tw-mx-8  min-[900px]:tw-mx-48 mx-auto"
              >
                {/* <div class="tw-basis-[8%] m-auto">
                  <a href="#carouselExampleIndicators1" role="button" data-slide="prev">
                    <img src={leftw} alt='dd'></img>

                  </a>
                </div> */}
                <div class="tw-basis-[100%]">
                  <Slider
                    {...settings2}
                    style={{ width: "95vw", margin: "auto" }}
                  >
                    <div>
                      <div
                        className="tw-basis-full min-[900px]:tw-basis-1/3"
                        style={{ position: "relative" }}
                      >
                        <img
                          style={{ borderRadius: "20px" }}
                          className="tw-w-[100%] tw-h-[400px] mx-auto tw-object-cover"
                          src={a1}
                          alt="Image 2"
                        />
                      </div>
                    </div>
                    {/* <div>
                <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                          // <img style={{'borderRadius':'20px'}} className="tw-w-[100%] tw-h-[400px] mx-auto tw-object-cover" src={a2} alt="Image 2" />
                        </div>
                </div> */}
                    <div>
                      <div
                        className="tw-basis-full min-[900px]:tw-basis-1/3"
                        style={{ position: "relative" }}
                      >
                        //{" "}
                        <img
                          style={{ borderRadius: "20px" }}
                          className="tw-w-[100%] tw-h-[400px] mx-auto  tw-object-cover"
                          src={a3}
                          alt="Image 2"
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="tw-basis-full min-[900px]:tw-basis-1/3"
                        style={{ position: "relative" }}
                      >
                        <img
                          style={{ borderRadius: "20px" }}
                          className="tw-w-[100%] tw-h-[400px] mx-auto tw-object-cover"
                          src={a4}
                          alt="Image 2"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
                {/* <div class="tw-basis-[8%] m-auto">
                  <a href="#carouselExampleIndicators1" role="button" data-slide="next">
                    <img src={rightw} alt='dd'></img>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div class="tw-hidden min-[900px]:tw-block mx-auto">
                <div class="wrap" style={{ marginTop: "50px" }}>
                  <a class="btn-7" onClick={() => navigate("/celebrity")}>
                    VIEW ALL<span></span>
                  </a>
                </div>
              </div>
              <div class="tw-block min-[900px]:tw-hidden mx-auto">
                <div class="wrap">
                  <a
                    href="/celebrity"
                    class="btn-7"
                    onClick={() => navigate("/celebrity")}
                  >
                    VIEW ALL<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial */}
      </div>

      <div
        className="min-[900px]:tw-hidden tw-block"
        style={{
          background: "linear-gradient(0deg, #484646 0%, #1a1a1a 100%)",
          marginTop: "-1px",
        }}
      >
        <div className="backgroungg5 " style={{ position: "relative" }}>
          <div
            className="tw-grid min-[900px]:tw-hidden tw-px-4 tw-py-4"
            style={{}}
          >
            <div className="tw-columns-1 ">
              <div
                className="tw-font-sans tw-font-normal tw-italic tw-text-[46px] tw-text-white"
                style={{
                  marginBottom: "15px",
                  float: "right",
                  opacity: "0.26",
                }}
              >
                Commercial
              </div>
              <div className="tw-flex tw-flex-row min-[900px]:tw-hidden tw-mt-[65px]">
                <div class="tw-basis-[100%]">
                  <Slider
                    {...settings2}
                    style={{ width: "92vw", margin: "auto" }}
                  >
                    <div>
                      <video
                        className="tw-w-[100%] tw-h-[200px] mx-auto"
                        onClick={(e) => play(e, "video2", 0)}
                        poster={commercial[0]}
                      >
                        <source
                          src="https://www.youtube.com/embed/eXQJNyLEYqY?autoplay=1"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div>
                      <video
                        className="tw-w-[100%] tw-h-[200px] mx-auto"
                        onClick={(e) => play(e, "video2", 1)}
                        poster={commercial[1]}
                      >
                        <source
                          src="https://www.youtube.com/embed/R58kGs01FBM?autoplay=1"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div>
                      <video
                        className="tw-w-[100%] tw-h-[200px] mx-auto"
                        onClick={(e) => play(e, "video2", 2)}
                        poster={commercial[2]}
                      >
                        <source
                          src="https://www.youtube.com/embed/hKyNjBpuOjQ?autoplay=1"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div>
                      <video
                        className="tw-w-[100%] tw-h-[200px] mx-auto"
                        onClick={(e) => play(e, "video2", 3)}
                        poster={commercial[3]}
                      >
                        <source
                          src="https://www.youtube.com/embed/aZWl4QY-LOA?autoplay=1"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div>
                      <video
                        className="tw-w-[100%] tw-h-[200px] mx-auto"
                        onClick={(e) => play(e, "video2", 2)}
                        poster={commercial[6]}
                      >
                        <source
                          src="https://www.youtube.com/embed/EEXXcqRUquo?autoplay=1"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div>
                      <video
                        className="tw-w-[100%] tw-h-[200px] mx-auto"
                        onClick={(e) => play(e, "video2", 7)}
                        poster={commercial[7]}
                      >
                        <source
                          src="https://www.youtube.com/embed/sLSlt7Fx8mU?autoplay=1"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </Slider>
                </div>
              </div>
              <div class="mx-auto tw-mt-8">
                <div class="wrap">
                  <a class="btn-7" onClick={() => navigate("/hair")}>
                    VIEW ALL<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="tw-grid min-[900px]:tw-mx-10 tw-mx-2 min-[900px]:tw-mx-16 min-[900px]:tw-mb-10 tw-pt-4">
            <div className="tw-columns-1 ">
              <div
                className="tw-font-sans tw-font-normal tw-italic min-[900px]:tw-text-[96px] tw-text-[36px] min-[900px]:tw-leading-[121px] tw-leading-[45px] tw-text-white min-[900px]:tw-text-white "
                style={{
                  marginBottom: "15px",
                  opacity: "0.17",
                  float: "right",
                  textAlign: "end",
                  textTransform: "uppercase",
                }}
              >
                Newsletter & <br /> awards
              </div>
              <div className="tw-hidden min-[900px]:tw-grid min-[900px]:tw-grid-cols-3 tw-grid-cols-1 tw-gap-2  tw-mx-8 min-[900px]:tw-mx-16 min-[900px]:tw-mt-[275px] tw-my-10 mx-auto">
                <div
                  className="card"
                  style={{ background: "rgba(248, 248, 248, 0.2)" }}
                >
                  <img
                    className="mx-auto my-3"
                    src={b5}
                    alt="g"
                    style={{
                      width: "90%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  ></img>

                  <div className="card-body">
                    <p className="card-text tw-font-sans tw-font-normal">
                      Florian Hurel Opens Premium Salon, 'Florian Hurel Hair
                      Couture - A Heaven of Luxury'
                    </p>
                    <a
                      href="https://www.business-standard.com/content/press-releases-ani/florian-hurel-opens-premium-salon-florian-hurel-hair-couture-a-heaven-of-luxury-123080900293_1.html"
                      className="tw-float-right"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="mx-auto my-3"
                    src={b6}
                    alt="g"
                    style={{
                      width: "90%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  ></img>

                  <div className="card-body">
                    <p className="card-text tw-font-sans tw-font-normal">
                      Ace Hair stylist and makeup artist Florian Hurel on his
                      association with new brand in India
                    </p>
                    <a
                      href="https://urbanasian.com/featured/2023/08/ace-hair-stylist-and-makeup-artist-florian-hurel-on-his-association-with-new-brand-in-india/"
                      className="tw-float-right"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="mx-auto my-3"
                    src={b7}
                    alt="g"
                    style={{
                      width: "90%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  ></img>

                  <div className="card-body">
                    <p className="card-text tw-font-sans tw-font-normal">
                      Florian Hurel: The best award to me is my team’s success
                    </p>
                    <a
                      href="https://www.globalcosmeticsnews.com/redken-debuts-in-indian-market/"
                      className="tw-float-right "
                      rel="noreferrer"
                      target="_blank"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="tw-flex tw-flex-row tw-gap-3 min-[900px]:tw-hidden tw-mx-2 min-[900px]:tw-mx-48 tw-my-10 mx-auto tw-mt-[130px]">
                <div class="tw-basis-[100%]">
                  <Slider
                    {...settings2}
                    style={{ width: "95vw", margin: "auto" }}
                  >
                    <div>
                      <div className="card mx-auto tw-h-[100px]">
                        <img
                          className="mx-auto my-3"
                          src={b5}
                          alt="g"
                          style={{
                            width: "90%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        ></img>

                        <div className="card-body tw-h-[200px]">
                          <p className="card-text tw-font-sans tw-font-normal">
                            Florian Hurel Opens Premium Salon, 'Florian Hurel
                            Hair Couture - A Heaven of Luxury'
                          </p>
                          <a
                            href="https://www.business-standard.com/content/press-releases-ani/florian-hurel-opens-premium-salon-florian-hurel-hair-couture-a-heaven-of-luxury-123080900293_1.html"
                            className="tw-float-right"
                            rel="noreferrer"
                            target="_blank"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card mx-auto tw-h-[100px]">
                        <img
                          className="mx-auto my-3"
                          src={b6}
                          alt="g"
                          style={{
                            width: "90%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        ></img>

                        <div className="card-body tw-h-[200px]">
                          <p className="card-text tw-font-sans tw-font-normal">
                            Ace Hair stylist and makeup artist Florian Hurel on
                            his association with new brand in India
                          </p>
                          <a
                            href="https://urbanasian.com/featured/2023/08/ace-hair-stylist-and-makeup-artist-florian-hurel-on-his-association-with-new-brand-in-india/"
                            className="tw-float-right"
                            rel="noreferrer"
                            target="_blank"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card mx-auto tw-h-[100px]">
                        <img
                          className="mx-auto my-3"
                          src={b7}
                          alt="g"
                          style={{
                            width: "90%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        ></img>

                        <div className="card-body tw-h-[200px]">
                          <p className="card-text tw-font-sans tw-font-normal">
                            Florian Hurel: The best award to me is my team’s
                            success
                          </p>
                          <a
                            href="https://www.globalcosmeticsnews.com/redken-debuts-in-indian-market/"
                            className="tw-float-right "
                            rel="noreferrer"
                            target="_blank"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>

                {/* </div> */}
                {/* <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
          </a> */}
                {/* </div> */}
              </div>
              <div class="tw-hidden min-[900px]:tw-block mx-auto">
                <div class="wrap">
                  <a class="btn-6" onClick={() => navigate("/blogs")}>
                    VIEW ALL<span></span>
                  </a>
                </div>
              </div>
              <div class="tw-block min-[900px]:tw-hidden mx-auto">
                <div class="wrap">
                  <a
                    href="/blogs"
                    class="btn-7"
                    onClick={() => navigate("/blogs")}
                  >
                    VIEW ALL<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="tw-w-full tw-relative">
            <div className="tw-grid min-[900px]:tw-grid-cols-3 tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-8 mx-auto">
              <img
                className="mx-auto my-auto min-[900px]:tw-block tw-hidden"
                src={fo1}
                alt="g"
              ></img>
              <div>
                <div className="columns-1">
                  <img className="mx-auto" src={flh1} alt="g"></img>
                  {/* <img className='mx-auto' src={fo21} alt='g' ></img> */}
                  <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mx-40 mt-4 ">
                    <img
                      className="mx-auto"
                      onClick={(e) =>
                        window.open(
                          "https://www.facebook.com/florianhurelmakeuphair?mibextid=ZbWKwL",
                          "_blank"
                        )
                      }
                      src={fb}
                      alt="g"
                    ></img>
                    <img
                      className="mx-auto"
                      onClick={(e) =>
                        window.open(
                          "https://instagram.com/florianhurel?igshid=YmMyMTA2M2Y",
                          "_blank"
                        )
                      }
                      src={insta}
                      alt="g"
                    ></img>
                    {/* <img className='mx-auto' src={twitter} alt='g' ></img> */}
                  </div>
                </div>
              </div>
              <img
                className="mx-auto my-auto min-[900px]:tw-block tw-hidden"
                src={fo3}
                alt="g"
              ></img>
            </div>
            <hr className="w-full tw-hidden min-[900px]:tw-block" />
            <div className=" tw-hidden min-[900px]:tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-mt-4 tw-py-4 mx-auto">
              <div></div>
              <div className="mx-auto tw-text-[#fff]">
                &#169;Copyrights 2023
              </div>
              <div className="mx-auto tw-text-[#fff]">
                Privacy policy / Cookies policy / Terms of use
              </div>
            </div>
            <div className=" tw-grid min-[900px]:tw-hidden tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-2 mx-auto">
              {/* <div></div> */}
              <div className="mx-auto tw-text-white">
                &#169;Copyrights 2023 by Florian
              </div>
              <div className="mx-auto tw-text-white tw-mt-[-20px]">
                Design by{" "}
                <a href="https://dibizsolution.com" target="_blank">
                  Dibiz Solution
                </a>
              </div>
              <div className="mx-auto tw-text-white">
                Privacy policy / Cookies policy / Terms of use
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter and awards */}
      <div
        className="tw-bg-[#232323] tw-hidden min-[900px]:tw-block min-[900px]:tw-bg-[linear-gradient(0deg, #1A1A1A 0%, #545454 100%)] tw-h-auto min-[900px]:tw-mt-[0px]"
        style={{
          background: "linear-gradient(0deg, #1A1A1A 0%, #545454 100%)",
        }}
      >
        <div className="tw-hidden min-[900px]:tw-block tw-w-full tw-pb-4">
          <div className="tw-grid tw-mx-10 md:tw-mx-16 tw-mb-10 tw-pb-8">
            <div className="tw-columns-1">
              <div
                className="tw-font-sans tw-font-normal tw-italic tw-text-[96px] tw-leading-[121px] tw-mb-4"
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  opacity: "0.17",
                }}
              >
                Commercial
              </div>
            </div>
            <div
              id="video2"
              className="tw-grid md:tw-grid-cols-4 tw-grid-cols-1 tw-gap-8  tw-mx-8 md:tw-mx-48 tw-my-10 mx-auto"
            >
              <video
                onClick={(e) => play(e, "video2", 0)}
                poster={commercial[0]}
              >
                <source
                  src="https://www.youtube.com/embed/eXQJNyLEYqY?autoplay=1"
                  type="video/mp4"
                />
              </video>
              <video
                onClick={(e) => play(e, "video2", 1)}
                poster={commercial[1]}
              >
                <source
                  src="https://www.youtube.com/embed/R58kGs01FBM?autoplay=1"
                  type="video/mp4"
                />
              </video>
              <video
                onClick={(e) => play(e, "video2", 2)}
                poster={commercial[2]}
              >
                <source
                  src="https://www.youtube.com/embed/hKyNjBpuOjQ?autoplay=1"
                  type="video/mp4"
                />
              </video>
              <video
                onClick={(e) => play(e, "video2", 3)}
                poster={commercial[3]}
              >
                <source
                  src="https://www.youtube.com/embed/aZWl4QY-LOA?autoplay=1"
                  type="video/mp4"
                />
              </video>
              <video
                onClick={(e) => play(e, "video2", 4)}
                poster={commercial[4]}
              >
                <source
                  src="https://www.youtube.com/embed/PbR98T2peEY?autoplay=1"
                  type="video/mp4"
                />
              </video>
              <video
                onClick={(e) => play(e, "video2", 5)}
                poster={commercial[5]}
              >
                <source
                  src="https://www.youtube.com/embed/x5lvN1pSKNE?autoplay=1"
                  type="video/mp4"
                />
              </video>
              <video
                onClick={(e) => play(e, "video2", 6)}
                poster={commercial[6]}
              >
                <source
                  src="https://www.youtube.com/embed/EEXXcqRUquo?autoplay=1"
                  type="video/mp4"
                />
              </video>
              <video
                onClick={(e) => play(e, "video2", 7)}
                poster={commercial[7]}
              >
                <source
                  src="https://www.youtube.com/embed/sLSlt7Fx8mU?autoplay=1"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="tw-columns-1 tw-w-full">
              <div class="mx-auto">
                <div class="wrap">
                  <a
                    href="/hair"
                    class="btn-7"
                    onClick={() => navigate("/hair")}
                  >
                    VIEW ALL<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="backgroungg2 " style={{ position: "relative" }}>
          <div className="tw-grid min-[900px]:tw-mx-10 tw-mx-2 min-[900px]:tw-mx-16 min-[900px]:tw-mb-10 tw-pt-4">
            <div className="tw-columns-1 ">
              <div
                className="tw-font-sans tw-font-normal tw-italic min-[900px]:tw-text-[96px] tw-text-[36px] min-[900px]:tw-leading-[121px] tw-leading-[45px] tw-text-white min-[900px]:tw-text-white"
                style={{
                  marginBottom: "15px",
                  opacity: "0.17",
                  float: "right",
                  textAlign: "end",
                  textTransform: "uppercase",
                }}
              >
                Newsletter & <br /> awards
              </div>
              <div className="tw-hidden min-[900px]:tw-grid min-[900px]:tw-grid-cols-3 tw-grid-cols-1 tw-gap-2  tw-mx-8 min-[900px]:tw-mx-16 min-[900px]:tw-mt-[275px] tw-my-10 mx-auto">
                <div className="card">
                  <img
                    className="mx-auto my-3"
                    src={b5}
                    alt="g"
                    style={{
                      width: "90%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  ></img>

                  <div className="card-body">
                    <p className="card-text tw-font-sans tw-font-normal">
                      Florian Hurel Opens Premium Salon, 'Florian Hurel Hair
                      Couture - A Heaven of Luxury'
                    </p>
                    <a
                      href="https://www.business-standard.com/content/press-releases-ani/florian-hurel-opens-premium-salon-florian-hurel-hair-couture-a-heaven-of-luxury-123080900293_1.html"
                      className="tw-float-right"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="mx-auto my-3"
                    src={b6}
                    alt="g"
                    style={{
                      width: "90%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  ></img>

                  <div className="card-body">
                    <p className="card-text tw-font-sans tw-font-normal">
                      Ace Hair stylist and makeup artist Florian Hurel on his
                      association with new brand in India
                    </p>
                    <a
                      href="https://urbanasian.com/featured/2023/08/ace-hair-stylist-and-makeup-artist-florian-hurel-on-his-association-with-new-brand-in-india/"
                      className="tw-float-right"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="card">
                  <img
                    className="mx-auto my-3"
                    src={b7}
                    alt="g"
                    style={{
                      width: "90%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  ></img>

                  <div className="card-body">
                    <p className="card-text tw-font-sans tw-font-normal">
                      Florian Hurel: The best award to me is my team’s success
                    </p>
                    <a
                      href="https://www.globalcosmeticsnews.com/redken-debuts-in-indian-market/"
                      className="tw-float-right "
                      rel="noreferrer"
                      target="_blank"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="tw-flex tw-flex-row tw-gap-3 min-[900px]:tw-hidden tw-mx-2 min-[900px]:tw-mx-48 tw-my-10 mx-auto tw-mt-[130px]">
                <div class="tw-basis-[100%]">
                  <Slider
                    {...settings2}
                    style={{ width: "95vw", margin: "auto" }}
                  >
                    <div>
                      <div className="card mx-auto tw-h-[100px]">
                        <img
                          className="mx-auto my-3"
                          src={b5}
                          alt="g"
                          style={{
                            width: "90%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        ></img>

                        <div className="card-body tw-h-[200px]">
                          <p className="card-text tw-font-sans tw-font-normal">
                            Florian Hurel Opens Premium Salon, 'Florian Hurel
                            Hair Couture - A Heaven of Luxury'
                          </p>
                          <a
                            href="https://www.business-standard.com/content/press-releases-ani/florian-hurel-opens-premium-salon-florian-hurel-hair-couture-a-heaven-of-luxury-123080900293_1.html"
                            className="tw-float-right"
                            rel="noreferrer"
                            target="_blank"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card mx-auto tw-h-[100px]">
                        <img
                          className="mx-auto my-3"
                          src={b6}
                          alt="g"
                          style={{
                            width: "90%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        ></img>

                        <div className="card-body tw-h-[200px]">
                          <p className="card-text tw-font-sans tw-font-normal">
                            Ace Hair stylist and makeup artist Florian Hurel on
                            his association with new brand in India
                          </p>
                          <a
                            href="https://urbanasian.com/featured/2023/08/ace-hair-stylist-and-makeup-artist-florian-hurel-on-his-association-with-new-brand-in-india/"
                            className="tw-float-right"
                            rel="noreferrer"
                            target="_blank"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card mx-auto tw-h-[100px]">
                        <img
                          className="mx-auto my-3"
                          src={b7}
                          alt="g"
                          style={{
                            width: "90%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        ></img>

                        <div className="card-body tw-h-[200px]">
                          <p className="card-text tw-font-sans tw-font-normal">
                            Florian Hurel: The best award to me is my team’s
                            success
                          </p>
                          <a
                            href="https://www.globalcosmeticsnews.com/redken-debuts-in-indian-market/"
                            className="tw-float-right "
                            rel="noreferrer"
                            target="_blank"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>

                {/* </div> */}
                {/* <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a> */}
                {/* </div> */}
              </div>
              <div class="tw-hidden min-[900px]:tw-block mx-auto">
                <div class="wrap">
                  <a class="btn-7" onClick={() => navigate("/blogs")}>
                    VIEW ALL<span></span>
                  </a>
                </div>
              </div>
              <div class="tw-block min-[900px]:tw-hidden mx-auto">
                <div class="wrap">
                  <a
                    href="/blogs"
                    class="btn-7"
                    onClick={() => navigate("/blogs")}
                  >
                    VIEW ALL<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="tw-w-full tw-relative">
            <div className="tw-grid min-[900px]:tw-grid-cols-3 tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-8 mx-auto">
              <img
                className="mx-auto my-auto min-[900px]:tw-block tw-hidden"
                src={fo1}
                alt="g"
              ></img>
              <div>
                <div className="columns-1">
                  <img className="mx-auto" src={flh1} alt="g"></img>
                  {/* <img className='mx-auto' src={fo21} alt='g' ></img> */}
                  <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mx-40 mt-4 ">
                    <img
                      className="mx-auto"
                      onClick={(e) =>
                        window.open(
                          "https://www.facebook.com/florianhurelmakeuphair?mibextid=ZbWKwL",
                          "_blank"
                        )
                      }
                      src={fb}
                      alt="g"
                    ></img>
                    <img
                      className="mx-auto"
                      onClick={(e) =>
                        window.open(
                          "https://instagram.com/florianhurel?igshid=YmMyMTA2M2Y",
                          "_blank"
                        )
                      }
                      src={insta}
                      alt="g"
                    ></img>
                    {/* <img className='mx-auto' src={twitter} alt='g' ></img> */}
                  </div>
                </div>
              </div>
              <img
                className="mx-auto my-auto min-[900px]:tw-block tw-hidden"
                src={fo3}
                alt="g"
              ></img>
            </div>
            <hr className="w-full tw-hidden min-[900px]:tw-block" />
            <div className=" tw-hidden min-[900px]:tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-mt-4 tw-py-4 mx-auto">
              <div></div>
              <div className="mx-auto tw-text-[#fff]">
                &#169;Copyrights 2023 by Florian Design by{" "}
                <a href="https://dibizsolution.com" target="_blank">
                  Dibiz Solution
                </a>
              </div>
              <div className="mx-auto tw-text-[#fff]">
                Privacy policy / Cookies policy / Terms of use
              </div>
            </div>
            <div className=" tw-grid min-[900px]:tw-hidden tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-2 mx-auto">
              {/* <div></div> */}
              <div className="mx-auto tw-text-white">&#169;Copyrights 2023</div>
              <div className="mx-auto tw-text-white">
                Privacy policy / Cookies policy / Terms of use
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <div
        id="modal"
        className="tw-fixed tw-hidden tw-z-50 tw-inset-0 tw-bg-gray-900 tw-bg-opacity-60 tw-overflow-y-auto tw-h-full tw-w-full tw-modal"
      >
        <div
          className="tw-relative tw-mx-auto tw-h-full tw-w-full tw-shadow-xl tw-rounded-md tw-bg-white "
          id="video-model"
        >
          <div className="tw-grid tw-grid-cols-2 gap-4 tw-pt-8 md:tw-mx-24 tw-mx-8">
            <div
              className="tw-font-sans tw-font-bold"
              style={{
                fontSize: "13.3521px",
                lineHeight: "18px",
                textTransform: "uppercase",
              }}
            >
              Back to home
            </div>
            <div>
              <img
                className="tw-float-right"
                src={cross}
                onClick={closeModal}
                alt="cross"
                style={{ cursor: "pointer" }}
              ></img>
            </div>
          </div>
          <div className="tw-flex tw-flex-row tw-pt-2 tw-h-[80vh]">
            <div className="tw-basis-1/12 my-auto">
              <div
                className="md:tw-mx-8 tw-mx-2 tw-float-right"
                onClick={previousVideo}
              >
                <span className="" aria-hidden="true">
                  <img src={left} alt="dd"></img>
                </span>
              </div>
            </div>
            <div className="tw-basis-5/6 mx-auto tw-w-full tw-h-full">
              {/* <video className='tw-w-full tw-h-full' controls ref={videoRef}>
                <source src={videoArray[selectedVideo]} type="video/mp4" />
              </video> */}

              <iframe
                id="ytplayer"
                type="text/html"
                ref={videoRef}
                className="tw-w-full tw-h-full"
                src={videoArray[selectedVideo]}
                frameBorder="0"
                allowFullScreen
                title="This is a unique title"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
              />
            </div>
            <div className="tw-basis-1/12 my-auto">
              <div className="md:tw-mx-8 tw-mx-2" onClick={nextVideo}>
                <span className="" aria-hidden="true">
                  <img src={right} alt="dd"></img>
                </span>
              </div>
            </div>
          </div>

          <div className="tw-flex tw-flex-row ">
            <div className="tw-basis-1/12 my-auto"></div>
            <div className="tw-basis-5/6">
              {selectedVideo + 1}/{videoArray.length}
            </div>
            <div className="tw-basis-1/12 my-auto"></div>
          </div>
        </div>
      </div>

      <div
        id="modal-image"
        className="tw-fixed tw-hidden tw-z-50 tw-inset-0 tw-bg-gray-900 tw-bg-opacity-60 tw-overflow-y-auto tw-h-full tw-w-full tw-modal"
      >
        <div
          className="tw-relative tw-mx-auto tw-h-full tw-w-full tw-shadow-xl tw-rounded-md tw-bg-white "
          id="video-model"
        >
          <div className="tw-grid tw-grid-cols-2 gap-4 tw-pt-8 md:tw-mx-24 tw-mx-8">
            <div
              className="tw-font-sans tw-font-bold"
              style={{
                fontSize: "13.3521px",
                lineHeight: "18px",
                textTransform: "uppercase",
              }}
            >
              Back to home
            </div>
            <div>
              <img
                className="tw-float-right"
                src={cross}
                onClick={closeModalImage}
                alt="cross"
                style={{ cursor: "pointer" }}
              ></img>
            </div>
          </div>
          <div className="tw-flex tw-flex-row tw-pt-2 tw-h-[80vh]">
            <div className="tw-basis-1/12 my-auto">
              <div
                className="md:tw-mx-8 tw-mx-2 tw-float-right"
                onClick={previousImage}
              >
                <span className="" aria-hidden="true">
                  <img src={left} alt="dd"></img>
                </span>
              </div>
            </div>
            <div className="tw-basis-5/6 mx-auto tw-w-full tw-h-full">
              <img
                className="tw-w-full tw-h-full"
                src={imageArray[selectedImage]}
                alt="dddd"
                style={{ objectFit: "contain" }}
              ></img>
            </div>
            <div className="tw-basis-1/12 my-auto">
              <div className="md:tw-mx-8 tw-mx-2" onClick={nextImage}>
                <span className="" aria-hidden="true">
                  <img src={right} alt="dd"></img>
                </span>
              </div>
            </div>
          </div>

          <div className="tw-flex tw-flex-row ">
            <div className="tw-basis-1/12 my-auto"></div>
            <div className="tw-basis-5/6">
              {selectedImage + 1}/{imageArray.length}
            </div>
            <div className="tw-basis-1/12 my-auto"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandWorkWith;
