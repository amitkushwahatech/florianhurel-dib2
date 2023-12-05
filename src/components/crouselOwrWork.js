import { useState, useRef, useEffect, useCallback } from 'react';
import skin from '../assets/img/our-work/skin.jpg';
import hair from '../assets/img/our-work/hair.JPG';
import comm from '../assets/img/our-work/commercial.JPEG';
import a4 from '../assets/img/our-work/4.jpg';
import a2 from '../assets/img/our-work/2.jpg';
import left from '../assets/img/leftw.svg';
import right from '../assets/img/right.svg';
import { useNavigate } from 'react-router-dom';
import jQuery from "jquery";
import Slider from "react-slick";
import Carousel from 'react-spring-3d-carousel';
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { config } from "react-spring";
const settings2 = {

    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: 'center',
    centerPadding: "60px",
    //   centerMode: true,
};
const CarouselOwrWork = () => {

    const [sliderRef, setSliderRef] = useState(null)
    const navigate = useNavigate();
    const rediectHair = useCallback(() => navigate('/hair', { replace: true }), [navigate]);
    const rediectcomm = useCallback(() => navigate('/commercial', { replace: true }), [navigate]);
    const rediectSkin = useCallback(() => navigate('/skin', { replace: true }), [navigate]);
    const rediectCA = useCallback(() => navigate('/celebrity', { replace: true }), [navigate]);
    const rediectCampign = useCallback(() => navigate('/campaigns', { replace: true }), [navigate]);
    const rediectMagine = useCallback(() => navigate('/magzine', { replace: true }), [navigate]);
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
                    initialSlide: 1
                }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
        ]
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
            content: <div><img src={skin} className='img-grayscale item-inner tw-mx-auto' style={{ 'width': '346px', 'height': '500px', 'objectFit': 'cover','border-radius':'20px' }} alt="1" /> <span className="overlay-name">SKIN COMMERCIAL</span> </div>,
            onClick: () => rediectSkin()
        },
        {
            key: 2,
            content: <div><img src={hair} className='img-grayscale item-inner tw-mx-auto' style={{ 'width': '346px', 'height': '500px', 'objectFit': 'cover','border-radius':'20px' }} alt="2" /> <span className="overlay-name">CELEBRITY APPEARANCE</span> </div>,
            onClick: () => rediectCA()

        },
        {
            key: 132,
            content: <div><img src={comm} className='img-grayscale item-inner tw-mx-auto' style={{ 'width': '346px', 'height': '500px', 'objectFit': 'cover','border-radius':'20px' }} alt="3" /> <span className="overlay-name">HAIR COMMERCIAL</span> </div>,
            onClick: () => rediectHair()

        },
        {
            key: 13,
            content: <div><img src={a4} className='img-grayscale item-inner tw-mx-auto' style={{ 'width': '346px', 'height': '500px', 'objectFit': 'cover','border-radius':'20px' }} alt="4" /> <span className="overlay-name">CAMPAIGN</span> </div>,
            onClick: () => rediectCampign()

        },
        {
            key: 41,
            content: <div><img src={a2} className='img-grayscale item-inner tw-mx-auto' style={{ 'width': '346px', 'height': '500px', 'objectFit': 'cover','border-radius':'20px' }} alt="5" /> <span className="overlay-name">MAGZINE COVER</span> </div>,
            onClick: () => rediectMagine()

        },
    ];

    useEffect(() => {
        onChangeInputplus()

    }, [])

    const callback = function (index) {
        if (index === -1 || index === 1) {
            return {
                'opacity': 1,
                'width': '500px',
                'height':'500px',
                'border-radius':'20px',
                'filter': 'brightness(0.5)'
                //             '-webkit-filter': 'grayscale(90%)',
                // '-webkit-transition': '.4s ease-in-out',
                // '-moz-filter': 'grayscale(90%)',
                // '-moz-transition': '.4s ease-in-out',
                // '-o-filter': 'grayscale(90%)',
                // '-o-transition': '.4s ease-in-out',
            }
        } else if (index === 0) {
            return {
                'opacity': 1,
                'border-radius':'20px',
                'filter': 'brightness(1)'

            }
        } else {
            return {
                'opacity': 0,
            }
        }
        console.log("callback", index);
    }
    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
        config: config.gentle
    });

    const onChangeInputplus = (e) => {
        setState({
            'goToSlide': state.goToSlide + 1 || 0
        });
    };

    const onChangeInputminus = (e) => {
        setState({
            'goToSlide': state.goToSlide - 1 || 0
        });
    };

    const testiMonials = [
        {
            name: 'SKIN COMMERCIAL',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: skin,
            onClick: () => rediectSkin()
        },
        {
            name: 'HAIR COMMERCIAL',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: comm,
            onClick: () => rediectHair()
        },
        {
            name: 'CELEBRITY APPEARANCE',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: hair,
            onClick: () => rediectCA()
        },
        {
            name: 'MAGZINE COVER',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: a2,
            onClick: () => rediectMagine()
        },
        {
            name: 'CAMPAIGN',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: a4,
            onClick: () => rediectCampign()
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
    ]

    return (
        <>
            <div className="tw-hidden min-[900px]:tw-flex tw-flex-row tw-my-[10px]">

                <div class="tw-basis-[10%]  my-auto">                    <div className="" onClick={onChangeInputminus} style={{'text-align': '-webkit-center','cursor':'pointer',zIndex: '1000000' }}>
                    <span className="" aria-hidden="true"><img src={left} alt='dd'></img></span>
                </div></div>
                <div class="tw-basis-[75%]  tw-w-[100%] tw-h-[700px] mx-auto">

                    <Carousel slides={slides} goToSlide={state.goToSlide}
                        offsetRadius={state.offsetRadius}
                        enableSwipe='true'
                        showNavigation={state.showNavigation}
                        animationConfig={state.config}
                        offsetFn={callback}
                    />





                </div>
                <div class="tw-basis-[10%]  my-auto">
                    <div className="" onClick={onChangeInputplus} style={{'text-align': '-webkit-center' ,'cursor':'pointer',zIndex: '1000000'}}>
                        <span className="" aria-hidden="true"><img src={right} alt='dd'></img></span>
                    </div>
                </div>

            </div>
            <div className=' min-[900px]:tw-hidden tw-flex tw-flex-row' id="" >
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
                    <Slider {...settings2} style={{ 'width': '99vw', 'margin': 'auto' }}>

                        {
                            testiMonials.length === 0 ?
                                <div class="item">
                                    <div class="shadow-effect">
                                        <img class="img-circle" src={hair} />

                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                                    </div>
                                    <div class="testimonial-name">
                                        <h5>Rajon Rony</h5>
                                        {/* <small>ITALY</small> */}
                                    </div>
                                </div> :
                                testiMonials.map(testiMonialDetail => {
                                    return (

                                        <div class=" gfg tw-mx-auto" >
                                            <img style={{'borderRadius':'20px'}} src={testiMonialDetail.img} alt="" onClick={testiMonialDetail.onClick} />
                                            <h3 class="second-txt">
                                                {testiMonialDetail.name}
                                            </h3>
                                        </div>
                                    )
                                })
                        }

                    </Slider>
                </div>
            </div>
            {/* </div>
            </div> */}

        </>

    );
};

export default CarouselOwrWork;
