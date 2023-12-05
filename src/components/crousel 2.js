import React from "react";
import image2 from "../assets/img/carousel/2.png";
import image1 from "../assets/img/carousel/1.png";
import image3 from "../assets/img/carousel/3.png";
import giff from "../assets/img/circle.gif";
import cross from "../assets/img/times.svg";
import left from "../assets/img/left-arrow.svg";
import right from "../assets/img/right-arrow.svg";
import logo from "../assets/img/logo.svg";
// import hone from "../assets/img/home.jpeg";
import home2 from "../assets/img/home2.png";
import nome2 from "../assets/img/carousel/2.png";
import mobile from "../assets/img/mobile.jpg";
import mobile2 from "../assets/img/mobile2.png";
import Slider from "react-slick";

const settings2 = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
};
const Crousell = () => {
  let [path, setPath] = React.useState("");
  let [count, setcount] = React.useState(1);
  let [count2, setcount2] = React.useState(1);
  let [gif, setGif] = React.useState(true);
  const [videoArray, setvideoArray] = React.useState("");
  let [selectedVideo, setSelectedVideo] = React.useState(
    "https://player.vimeo.com/video/805016119?h=0fd1008446"
  );

  React.useEffect(() => {
    setPath(image1);
    let interval = setInterval(() => {
      toggle();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    document.querySelectorAll(".fade-out").forEach((e) => {
      e.classList.add("fade-out-active");
    });
    setTimeout(() => {
      document.querySelectorAll(".fade-out").forEach((e) => {
        e.classList.remove("fade-out-active");
      });
    }, 500);
    setTimeout(() => {
      document.querySelectorAll(".zoom-in").forEach((e) => {
        e.classList.add("zoom-in-active");
      });
    }, 500);
    if (count == 2) {
      setGif(false);
    }
    if (count === 1) {
      setGif(true);
    }
  }, [count]);

  const toggle = () => {
    if (count == 1) {
      setPath(image1);
      setcount(count++);
      // setGif(false)
    } else if (count == 2) {
      setPath(image2);
      setcount(count++);
    } else {
      setPath(image3);
      setcount(count--);
      setcount(count--);
    }

    // setcount(count++)
  };

  let [htmlFileString, setHtmlFileString] = React.useState();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`new/index2.html`)).text());
  }
  React.useEffect(() => {
    fetchHtml();
  }, []);

  React.useEffect(() => {
    // console.log(htmlFileString);
    // eslint-disable-next-line no-unused-expressions
    // ['new/js/jquery-1.12.4.min.js','new/js/modernizr-2.6.2.min.js','new/js/bootstrap.min.js','new/js/jquery.waypoints.min.js','new/js/scrollIt.min.js','new/js/imagesloaded.pkgd.min.js','new/js/owl.carousel.min.js','new/js/jquery.magnific-popup.min.js','new/js/smooth-scroll.min.js','new/js/main.js'].forEach(e =>{
    //     const script = document.createElement('script');
    //     script.src = e;
    //     script.async = true;
    //     document.body.appendChild(script);

    // })
    return () => {
      //   document.body.removeChild(script);
    };
  }, []);

  const play = () => {
    document.getElementById("nav").style.display = "none";

    // console.log(event.target.parentElement);
    document.getElementById("modal2").style.display = "block";
    document
      .getElementsByTagName("body")[0]
      .classList.add("tw-overflow-y-hidden");
    setTimeout(() => {
      setvideoArray(selectedVideo);
    }, 200);
  };
  const closeModal = () => {
    setvideoArray("");
    // console.log(videoRef);
    // videoRef.current?.contentWindow.close();
    // setvideoArray([])
    document.getElementById("nav").style.display = "block";

    document.getElementById("modal2").style.display = "none";
    document
      .getElementsByTagName("body")[0]
      .classList.remove("tw-overflow-y-hidden");
  };

  return (
    <div className="crousel-component">
      <div
        className="tw-hidden min-[900px]:tw-grid "
        style={{
          background:
            "linear-gradient(270deg, #4A4A4A 0.59%, #484848 14.03%, #474747 25.44%, #464646 33.68%, #525252 50.81%, #474747 75.54%, #474747 91.27%, #464646 99.17%, #484848 99.17%)",
          height: "85vh",
        }}
      >
        {/* <div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">
  <div class="carousel-inner" style={{'height':'85vh'}}>
    <div class="carousel-item  active" >
      <div className='min-[900px]:tw-grid min-[900px]:tw-grid-cols-3'>
      <div>
            <img style={{
              'height': '85vh',
              'width': '34vw'
            }} src={image1}></img>
          </div>
          <div>
            <img style={{ 'height': '85vh' }} src={image2}></img>
          </div>
          <div>
            <img style={{
              'height': '85vh',
              'width': '34vw'
            }} src={image3}></img>
          </div>

      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 " src={hone} style={{'height':'100vh', 'objectFit':'cover'}} alt="Second slide"/>
    </div>
  </div> */}
        <Slider {...settings2} style={{ width: "100vw" }}>
          <div>
            <div className="min-[900px]:tw-grid min-[900px]:tw-grid-cols-3">
              <div>
                <img
                  style={{
                    height: "85vh",
                    width: "34vw",
                  }}
                  src={image1}
                ></img>
              </div>
              <div>
                <img style={{ height: "85vh" }} src={image2}></img>
              </div>
              <div>
                <img
                  style={{
                    height: "85vh",
                    width: "34vw",
                  }}
                  src={image3}
                ></img>
              </div>
            </div>
          </div>
          {/* <div>
              <div style={{'position':'relative'}}>
              <img class="d-block w-100 " onClick={play} src={home2} style={{ 'height': '100vh', 'objectFit': 'cover' }} alt="Second slide" />
                  <div className='overllay'>
                    <div className='florian'>
                    Florian Hurel
                    </div>
                    <div className='showreel'>
                    SHOWREEL
                    </div>
                  </div>
              </div>
            </div> */}
        </Slider>
        {/* // </div> */}

        {/* <div>         <img src={image3}></img>
</div> */}
      </div>
      <div className="tw-grid min-[900px]:tw-hidden">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide carousel-fade"
          data-ride="carousel"
          data-touch="true"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 "
                src={mobile}
                style={{ objectFit: "contain" }}
                alt="First slide"
              />
            </div>
            {/* <div class="carousel-item">
      <img class="d-block w-100 " onClick={play} src={mobile2} style={{'objectFit':'contain'}} alt="Second slide"/>
    </div> */}
            {/* <div class="carousel-item">
      <img class="d-block w-100 " src={mobile} style={{'height':'100vh', 'objectFit':'contain'}} alt="Third slide"/>
    </div> */}
          </div>
        </div>
      </div>

      <div
        id="modal2"
        className="tw-fixed tw-hidden tw-z-50 tw-inset-0 tw-bg-gray-900 tw-bg-opacity-60 tw-overflow-y-auto tw-h-full tw-w-full tw-modal"
        style={{ zIndex: "999999999999999" }}
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
              <div className="md:tw-mx-8 tw-mx-2 tw-float-right">
                {/* <span className="" aria-hidden="true"><img src={left} alt='dd'></img></span> */}
              </div>
            </div>
            <div className="tw-basis-5/6 mx-auto tw-w-full tw-h-full">
              {/* <video className='tw-w-full tw-h-full' controls ref={videoRef}>
                <source src={videoArray[selectedVideo]} type="video/mp4" />
              </video> */}
              {/* <iframe src="https://player.vimeo.com/video/805016119?h=0fd1008446" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}

              <iframe
                id="ytplayer"
                type="text/html"
                className="tw-w-full tw-h-full"
                src={videoArray}
                frameBorder="0"
                allowFullScreen
                title="This is a unique title"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
              />
            </div>
            <div className="tw-basis-1/12 my-auto">
              <div className="md:tw-mx-8 tw-mx-2">
                {/* <span className="" aria-hidden="true"><img src={right} alt='dd'></img></span> */}
              </div>
            </div>
          </div>

          <div className="tw-flex tw-flex-row ">
            <div className="tw-basis-1/12 my-auto"></div>
            <div className="tw-basis-5/6">
              {/* {selectedVideo + 1}/{videoArray.length} */}
            </div>
            <div className="tw-basis-1/12 my-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crousell;

// <div className="min-[900px]:tw-col-span-2 ">
//                     <div className="tw-grid min-[900px]:tw-grid-cols-4 tw-mt-10 min-[900px]:tw-mt-24" style={{
//                     }}>
//                         <span></span>
//                         {count === 1 && <span className=' fade-out zoom-in tw-font-sans tw-font-bold min-[900px]:tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '50px', lineHeight: '57px', color: '#fff', 'marginTop': '10%' }}>
//                         Makeup Artist
// & Hair Specialist
//                         </span>}
//                             {count === 2 && <span className=' fade-out zoom-in tw-font-sans tw-font-bold min-[900px]:tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '50px', lineHeight: '57px', color: '#fff', 'marginTop': '10%' }}>
//                             Transforming your look, enhancing your beauty
//                         </span>}
//                             {count === 3 && <span className=' fade-out zoom-in tw-font-sans tw-font-bold min-[900px]:tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '50px', lineHeight: '57px', color: '#fff', 'marginTop': '10%' }}>
//                             Transforming your look, enhancing your beauty
//                         </span>}

//                         <span></span>
//                     </div>
//                     <div className="tw-grid min-[900px]:tw-grid-cols-4 min-[900px]:tw-mt-10" style={{
//                     }}>
//                         <span></span>
//                         {count === 1 && <span className=' animated fadeIn  tw-font-sans tw-font-bold tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '42px', lineHeight: '57px', color: '#fff' }}>
//                             -Florian Hurel
//                         </span>}
//                             {count === 2 && <span className=' animated  fadeIn tw-font-sans tw-font-bold tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '42px', lineHeight: '57px', color: '#fff' }}>
//                             -Florian Hurel
//                         </span>}
//                             {count === 3 && <span className=' animated  fadeIn tw-font-sans tw-font-bold tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '42px', lineHeight: '57px', color: '#fff' }}>
//                             -Florian Hurel
//                         </span>}
//                         {/* <span className=' fade-out  tw-font-sans tw-font-bold tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '42px', lineHeight: '57px', color: '#fff' }}>
//                             Florian Hurel
//                         </span> */}
//                         <span></span>
//                     </div>
//                     <div className="tw-grid min-[900px]:tw-grid-cols-4" style={{
//                         padding: '1em',
//                         'marginTop': '10px',
//                         'position':'relative'
//                     }}>
//                         <span></span>
//                         <p className=' tw-font-sans tw-font-light tw-col-span-3 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '18px', lineHeight: '27px', color: '#fff', 'whiteSpace': 'break-spaces', 'textTransform': 'uppercase', width: '90%' }}>
//                             {/* <span className='tw-font-semibold'>BIO</span><span>   <span style={{'position':'relative', 'width':'30px','display':'inline-block'}} className="horizonal-line"> </span>      Brands worked with    <span style={{'position':'relative', 'width':'30px','display':'inline-block'}} className="horizonal-line"> </span>     Business holded   Magazine Covers   <span style={{'position':'relative', 'width':'30px','display':'inline-block'}} className="horizonal-line"> </span>    Commercial</span> */}
//                             {/* <a href="#" class="button">Hover me</a> */}
//                             {/* <button class="custom-btn btn-10">Read Moreh</button> */}

//                             {/* {count === 1 && <span className='animated  fadeIn2'>Neque porro quisquam est</span>}
//                             {count === 2 && <span className='animated  fadeIn2'>Neque porro quisquam est</span>}
//                             {count === 3 && <span className='animated  fadeIn2'>Neque porro quisquam est</span>} */}
//                           </p>
//                             {gif && <img src={giff} style={{
//                                 'height': '100px',
//                                 'position': 'absolute',
//                                 'right': '-5%',
//                                 'zIndex': '999'
//                             }} alt='gif' ></img>
//                             }
//                     </div>
//                 </div>
//                 <div className="animation">
//                     {count === 1 && <div class="outer">
//                         <div class="underlay">
//                             <img src={image1} style={{ 'height': '600px' }} alt="loading logo" />
//                         </div>
//                     </div>}
//                     {count === 2 && <div class="outer">
//                         <div class="underlay">
//                             <img src={image2} onClick={play} style={{ 'height': '600px' }} alt="loading logo" />
//                         </div>
//                     </div>}
//                     {count === 3 && <div class="outer">
//                         <div class="underlay">
//                             <img src={image3} style={{ 'height': '600px' }} alt="loading logo" />
//                         </div>
//                     </div>}

//                 </div>

/// mobile

// {/* <div className='tw-columns-1 '>
//                     <div className='tw-w-full' style={{'background':'#232323',"padding":'20px 1px'}}>
//                         <div className="animation tw-mx-auto tw-mt-2 tw-w-[80vw]" style={{'position':'relative'}} >
//                         {gif && <img src={giff} style={{
//                                 'height': '80px',
//                                 'position': 'absolute',
//                                 'left': '-1%',
//                                 'zIndex': '999',
//                                 'top':'10%'
//                             }} alt='gif'></img>}
//                             {count === 1 && <div className=' outer2 tw-mx-auto' >
//                                 <div class="underlay2 tw-mx-auto">
//                                     <img src={image1} className='tw-mx-auto' style={{ 'height': '300px' }} alt="loading logo" />
//                                 </div>
//                             </div>}
//                             {count === 2 && <div className=' outer2 tw-mx-auto' style={{ 'height': '300px' }}>
//                                 <div class="underlay2">
//                                     <img src={image2} onClick={play} className='tw-mx-auto' style={{ 'height': '300px' }} alt="loading logo" />
//                                 </div>
//                             </div>}
//                             {count === 3 && <div className=' outer2 tw-mx-auto' style={{ 'height': '300px' }}>
//                                 <div class="underlay2">
//                                     <img src={image3} className='tw-mx-auto' style={{ 'height': '300px' }} alt="loading logo" />
//                                 </div>
//                             </div>}

//                         </div>
//                     </div>
//                     <div className='tw-w-full'>
//                         <div className="tw-grid tw-mt-2 tw-mx-10" style={{
//                         }}>
//                             <span></span>
//                             {count === 1 && <span className='fade-out  tw-font-sans tw-font-bold tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '35px', lineHeight: '57px', color: '#000' }}>
//                             Makeup Artist
// & Hair Specialist
//                             </span>}
//                             {count === 2 && <span className='fade-out  tw-font-sans tw-font-bold tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '35px', lineHeight: '57px', color: '#000' }}>
//                                 Transforming your look, enhancing your beauty
//                             </span>}
//                             {count === 3 && <span className='fade-out  tw-font-sans tw-font-bold tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '35px', lineHeight: '57px', color: '#000' }}>
//                                 Transforming your look, enhancing your beauty
//                             </span>}

//                             <span></span>
//                         </div>
//                         <div className="tw-grid tw-mt-2" style={{
//                         }}>
//                             <span></span>

//                             {count === 1 && <span className='animated fadeIn  tw-font-sans tw-font-normal tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '30px', lineHeight: '40px', color: '#000' }}>
//                                 -Florian Hurel
//                             </span>}
//                             {count === 2 && <span className='animated fadeIn  tw-font-sans tw-font-normal tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '30px', lineHeight: '40px', color: '#000' }}>
//                                 -Florian Hurel
//                             </span>}
//                             {count === 3 && <span className=' animated fadeIn  tw-font-sans tw-font-normal tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '30px', lineHeight: '40px', color: '#000' }}>
//                                 -Florian Hurel
//                             </span>}
//                             <span></span>
//                         </div>
//                         {/* <div className="tw-grid tw-mt-2 tw-mx-auto" style={{
//                             'padding': '1px 40px'
//                         }}>
//                             <span></span>
//                             <p className='tw-font-sans tw-font-light tw-text-left' style={{ fontSize: '18px', lineHeight: '27px', color: '#fff', 'whiteSpace': 'break-spaces', 'textTransform': 'uppercase', width: '90%' }}>
//                                 <span className='tw-font-semibold'>BIO</span><span> ---  Brands worked with   ---   Business holded  Magazine Covers   ----  Commercial</span>
//                             </p>
//                         </div> */}
//                     </div>
//                 </div> */}
