import { useState, useRef, useEffect, useCallback } from "react";
import skin from "../assets/img/our-work/skin.jpg";
import hair from "../assets/img/our-work/hair.JPG";
import comm from "../assets/img/our-work/commercial.JPEG";
import left from "../assets/img/leftw.svg";
import right from "../assets/img/right.svg";
import { useNavigate } from "react-router-dom";
import jQuery from "jquery";
import Slider from "react-slick";
import Carousel from "react-spring-3d-carousel";
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { config } from "react-spring";
import a1 from "../assets/img/apperance/1.JPG";
import a2 from "../assets/img/apperance/2.JPG";
import a3 from "../assets/img/apperance/5.jpg";
import a4 from "../assets/img/apperance/4.JPG";
const settings2 = {
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  className: "center",
  centerPadding: "60px",
  //   centerMode: true,
};
const CarouselApp = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const navigate = useNavigate();
  const rediectHair = useCallback(
    () => navigate("/magzine", { replace: true }),
    [navigate]
  );
  const rediectcomm = useCallback(
    () => navigate("/magzine", { replace: true }),
    [navigate]
  );
  const rediectSkin = useCallback(
    () => navigate("/magzine", { replace: true }),
    [navigate]
  );
  const rediectCA = useCallback(
    () => navigate("/celebrity", { replace: true }),
    [navigate]
  );
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerPadding: "0px",
    centerMode: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
  };

  const options = {
    loop: true,
    mouseDrag: false,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: false,
    touchDrag: false,
    freeDrag: false,
    pullDrag: false,
    // autoplayTimeout: 8500,
    // smartSpeed: 450,
    nav: false,
    // responsive: {
    //     0: {
    //         items: 1
    //     },
    //     // 600: {
    //     //     items: 2
    //     // },
    //     900: {
    //         items: 3
    //     }
    // }
  };
  const slides = [
    {
      key: 1,
      content: (
        <img
          src={a1}
          className="img-grayscale item-inner"
          style={{
            width: "346px",
            height: "500px",
            objectFit: "cover",
            "border-radius": "20px",
          }}
          alt="1"
        />
      ),
      // onClick: () => rediectSkin()
    },
    // {
    //     key: 2,
    //     content: <img src={a2} className='img-grayscale item-inner' style={{ 'width': '346px', 'height': '500px', 'objectFit': 'cover','border-radius':'20px' }} alt="2" />,
    //     // onClick: () => rediectcomm()

    // },
    {
      key: 132,
      content: (
        <img
          src={a3}
          className="img-grayscale item-inner"
          style={{
            width: "346px",
            height: "500px",
            objectFit: "cover",
            "border-radius": "20px",
          }}
          alt="3"
        />
      ),
      // onClick: () => rediectcomm()
    },
    {
      key: 13,
      content: (
        <img
          src={a4}
          className="img-grayscale item-inner"
          style={{
            width: "346px",
            height: "500px",
            objectFit: "cover",
            "border-radius": "20px",
          }}
          alt="4"
        />
      ),
      // onClick: () => rediectCA()
    },
    {
      key: 41,
      content: (
        <img
          src={a1}
          className="img-grayscale item-inner"
          style={{
            width: "346px",
            height: "500px",
            objectFit: "cover",
            "border-radius": "20px",
          }}
          alt="5"
        />
      ),
      // onClick: () => rediectSkin()
    },
    // {
    //     key: 531,
    //     content: <img src={a2} className='img-grayscale item-inner' style={{ 'width': '346px', 'height': '500px', 'objectFit': 'cover','border-radius':'20px' }} alt="6" />,
    //     onClick: () => rediectSkin()

    // },
    // {
    //   key: 3221,
    //   content: (
    //     <img
    //       src={a3}
    //       className="img-grayscale item-inner"
    //       style={{
    //         width: "346px",
    //         height: "500px",
    //         objectFit: "cover",
    //         "border-radius": "20px",
    //       }}
    //       alt="7"
    //     />
    //   ),
    //   // onClick: () => rediectSkin()
    // },
    {
      key: 111,
      content: (
        <img
          src={a4}
          className="img-grayscale item-inner"
          style={{
            width: "346px",
            height: "500px",
            objectFit: "cover",
            "border-radius": "20px",
          }}
          alt="8"
        />
      ),
      // onClick: () => rediectSkin()
    },
    {
      key: 5231,
      content: (
        <img
          src={a3}
          className="img-grayscale item-inner"
          style={{
            width: "346px",
            height: "500px",
            objectFit: "cover",
            "border-radius": "20px",
          }}
          alt="6"
        />
      ),
      // onClick: () => rediectSkin()
    },
  ];
  useEffect(() => {
    onChangeInputplus();
  }, []);

  const callback = function (index) {
    if (index === -1 || index === 1) {
      return {
        // 'opacity': 0.5,
        opacity: 1,
        width: "500px",
        height: "500px",
        "border-radius": "20px",
        filter: "brightness(0.5)",
        //             '-webkit-filter': 'grayscale(90%)',
        // '-webkit-transition': '.4s ease-in-out',
        // '-moz-filter': 'grayscale(90%)',
        // '-moz-transition': '.4s ease-in-out',
        // '-o-filter': 'grayscale(90%)',
        // '-o-transition': '.4s ease-in-out',
      };
    } else if (index === 0) {
      return {
        opacity: 1,
        "border-radius": "20px",
        filter: "brightness(1)",
      };
    } else {
      return {
        opacity: 0,
      };
    }
    console.log("callback", index);
  };
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  });

  const onChangeInputplus = (e) => {
    setState({
      goToSlide: state.goToSlide + 1 || 0,
    });
  };

  const onChangeInputminus = (e) => {
    setState({
      goToSlide: state.goToSlide - 1 || 0,
    });
  };

  const testiMonials = [
    {
      name: "Skin Commercial",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: a1,
    },
    {
      name: "Campaigns",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: a2,
    },
    {
      name: "Hair Commercial",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: a3,
    },
    // {
    //     name: '',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //     address: 'USA',
    //     img: hair
    // },
    // {
    //     name: 'Kevin Canlas',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //     address: 'USA',
    //     img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
    // },
  ];

  return (
    <>
      <div className="tw-hidden min-[900px]:tw-flex tw-flex-row tw-mt-[110px]">
        <div class="tw-basis-[5%] min-[900px]:tw-basis-1/12 my-auto">
          {" "}
          <div
            className=""
            onClick={onChangeInputminus}
            style={{
              "text-align": "-webkit-center",
              cursor: "pointer",
              zIndex: "100000",
            }}
          >
            <span className="" aria-hidden="true">
              <img src={left} alt="dd"></img>
            </span>
          </div>
        </div>
        <div class="tw-basis-[90%] min-[900px]:tw-basis-5/6 tw-w-[100%] tw-h-[600px] mx-auto">
          <Carousel
            slides={slides}
            goToSlide={state.goToSlide}
            offsetRadius={state.offsetRadius}
            enableSwipe="true"
            showNavigation={state.showNavigation}
            animationConfig={state.config}
            offsetFn={callback}
          />
        </div>
        <div class="tw-basis-[5%] min-[900px]:tw-basis-1/12 my-auto">
          <div
            className=""
            onClick={onChangeInputplus}
            style={{
              "text-align": "-webkit-center",
              cursor: "pointer",
              zIndex: "100000",
            }}
          >
            <span className="" aria-hidden="true">
              <img src={right} alt="dd"></img>
            </span>
          </div>
        </div>
      </div>
      <div className=" min-[900px]:tw-hidden tw-flex tw-flex-row" id="">
        {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                <img className="img-fluid activeImage tw-object-contain" src={comm} alt="Image 2" />
                                <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                <img className="img-fluid activeImage tw-object-contain" src={skin} alt="Image 2" />
                                <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                <img className="img-fluid activeImage tw-object-contain" onClick={rediectHair} src={hair} alt="Image 2" />
                                <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                </div> */}
        {/* <div className="row">
                    <div className="col-md-12"> */}
        <div class="tw-basis-[100%]">
          <Slider {...settings2} style={{ width: "95vw", margin: "auto" }}>
            {testiMonials.length === 0 ? (
              <div class="item">
                <div class="shadow-effect">
                  <img class="img-circle" src={hair} />

                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                </div>
                <div class="testimonial-name">
                  <h5>Rajon Rony</h5>
                  {/* <small>ITALY</small> */}
                </div>
              </div>
            ) : (
              testiMonials.map((testiMonialDetail) => {
                return (
                  <div class=" gfg tw-mx-4">
                    <img src={testiMonialDetail.img} alt="" />
                    <h3 class="second-txt">{testiMonialDetail.name}</h3>
                  </div>
                );
              })
            )}
          </Slider>
        </div>
      </div>
      {/* </div>
            </div> */}
    </>
  );
};

export default CarouselApp;
