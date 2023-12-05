import React from "react";
// import home from '../assets/img/home.jpeg';
import left from "../assets/img/left-arrow.svg";
import right from "../assets/img/right-arrow.svg";
import cross from "../assets/img/times.svg";
import brand1 from "../assets/img/brand/bazar.svg";
import brand2 from "../assets/img/brand/famina.png";
import brand3 from "../assets/img/brand/grazia.png";
import brand4 from "../assets/img/brand/vogue.svg";
import OwlCarousel from "react-owl-carousel";
const Bio = () => {
  const [videoArray, setvideoArray] = React.useState([]);
  let [selectedVideo, setSelectedVideo] = React.useState(0);

  const play = (event, id, index) => {
    console.log(event.target.parentElement);
    document.getElementById("nav").style.display = "none";
    document.getElementById("modal-vi").style.display = "block";
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
    }, 500);
  };

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

  const closeModal = () => {
    document.getElementById("nav").style.display = "block";
    setvideoArray([]);
    document.getElementById("modal-vi").style.display = "none";
    document
      .getElementsByTagName("body")[0]
      .classList.remove("tw-overflow-y-hidden");
  };

  return (
    <>
      <div
        id="bio"
        className="tw-hidden min-[900px]:tw-block"
        style={{
          background: "#222222",
          position: "relative",
          zIndex: "9",
          marginTop: "-1px",
        }}
      >
        <div className="tw-grid tw-mx-8 min-[900px]:tw-mx-36 tw-pt-12 tw-pb-20">
          <div className="tw-columns-1 ">
            {/* <div id='home' className='min-[900px]:tw-hidden' style={{'marginBottom':'15px'}}>
          <video onClick={e => play(e, 'home', 0)} poster={home}>
            <source src='https://player.vimeo.com/video/805016119?h=0fd1008446' type="video/mp4" />
          </video>
        </div> */}
            <div
              className="tw-font-sans tw-text-[96px] tw-font-normal "
              style={{
                marginBottom: "15px",
                textTransform: "uppercase",
                color: "#fff",
                opacity: "0.17",
                position: "absolute",
                top: "-70px",
              }}
            >
              Bio
            </div>
            <div className="tw-font-sans tw-mx-8 tw-font-normal min-[900px]:tw-text-[24px] tw-leading-[150%] tw-text-lg tw-text-[#DEDEDE;]">
              <p>
                Florian Hurel is a renowned hair and makeup artist with over a
                decade of experience in the beauty industry. He is known for his
                exceptional skills in creating flawless and natural-looking
                makeup, and his ability to enhance a person's beauty without
                overpowering their features.
              </p>
              <p>
                Florian began his career in Paris, where he honed his skills
                working with some of the most prestigious names in the fashion
                industry. He has since established himself as a go-to artist for
                high-end editorial shoots, advertising campaigns, and red carpet
                events.
              </p>
              <p>
                Florian's unique approach to makeup artistry is deeply rooted in
                his love for nature and his belief that beauty should always
                come from within. He understands that every person is unique,
                and strives to create looks that reflect their individuality and
                enhance their natural beauty.
              </p>
              Whether it's for a photo shoot, a wedding, or a special event,
              Florian's clients know they can count on him to deliver
              exceptional results every time.
            </div>
            {/* <br/>
            <div className='tw-font-sans tw-font-normal min-[900px]:tw-text-2xl tw-text-lg'>
            Florian is also a part of Bollywood blockbuster hit Movies such as The Sky is Pink (Priyanka Chopra), Zero (Katrina Kaif), and Fanne Khan (Aishwarya Rai Bachchan), and serving as a key advisor and a Hair specialist to clients such as Henkel, Unilever, Marico, Dabur, and Bajaj, etc.
            </div> */}
            {/* <section id="about" class="about clear " data-scroll-index="1">
          <div class="container">
            <div class="row">
              <div class="col-md-8 offset-md-2 text-center">
                <div class="title"> <span>About Us</span>
                  <h2>Florian Hurel</h2>
                </div>
                <p>Florian Hurel is a renowned hair and makeup artist with over a decade of experience in the beauty industry. He is known for his exceptional skills in creating flawless and natural-looking makeup, and his ability to enhance a person's beauty without overpowering their features.</p>
                <p>Florian began his career in Paris, where he honed his skills working with some of the most prestigious names in the fashion industry. He has since established himself as a go-to artist for high-end editorial shoots, advertising campaigns, and red carpet events.</p>
                <p>Florian's unique approach to makeup artistry is deeply rooted in his love for nature and his belief that beauty should always come from within. He understands that every person is unique, and strives to create looks that reflect their individuality and enhance their natural beauty.</p>
                <p class="">Whether it's for a photo shoot, a wedding, or a special event, Florian's clients know they can count on him to deliver exceptional results every time.</p>
              </div>
            </div>
          </div>
        </section> */}
          </div>
        </div>

        <div
          id="modal-vi"
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
      </div>
      <div
        id="bio"
        className="tw-block min-[900px]:tw-hidden tw-py-[50px]"
        style={{
          background: "#222222",
          position: "relative",
          zIndex: "9",
          marginTop: "-10px",
        }}
      >
        <div className="tw-grid tw-mx-8 min-[900px]:tw-mx-36 tw-pt-12 tw-pb-20 border-florian tw-pt-[10px]">
          <div className="tw-columns-1">
            {/* <div id='home' className='min-[900px]:tw-hidden' style={{'marginBottom':'15px'}}>
          <video onClick={e => play(e, 'home', 0)} poster={home}>
            <source src='https://player.vimeo.com/video/805016119?h=0fd1008446' type="video/mp4" />
          </video>
        </div> */}
            <div
              className="tw-font-sans tw-text-[96px] tw-font-normal "
              style={{
                marginBottom: "15px",
                textTransform: "uppercase",
                color: "#fff",
                opacity: "1",
                position: "absolute",
                top: "-30px",
                background: "#222",
              }}
            >
              {" "}
              <span style={{ opacity: "0.17" }}>Bio</span>
            </div>
            <div className="tw-font-sans tw-mx-8 tw-font-normal min-[900px]:tw-text-[18px] tw-leading-[150%] tw-text-lg tw-text-[#DEDEDE;] tw-pt-[60px]">
              <p>
                Florian Hurel is a renowned hair and makeup artist with over a
                decade of experience in the beauty industry. He is known for his
                exceptional skills in creating flawless and natural-looking
                makeup, and his ability to enhance a person's beauty without
                overpowering their features.
              </p>
              <p>
                Florian began his career in Paris, where he honed his skills
                working with some of the most prestigious names in the fashion
                industry. He has since established himself as a go-to artist for
                high-end editorial shoots, advertising campaigns, and red carpet
                events.
              </p>
              <p>
                Florian's unique approach to makeup artistry is deeply rooted in
                his love for nature and his belief that beauty should always
                come from within. He understands that every person is unique,
                and strives to create looks that reflect their individuality and
                enhance their natural beauty.
              </p>
              Whether it's for a photo shoot, a wedding, or a special event,
              Florian's clients know they can count on him to deliver
              exceptional results every time.
            </div>
            {/* <br/>
            <div className='tw-font-sans tw-font-normal min-[900px]:tw-text-2xl tw-text-lg'>
            Florian is also a part of Bollywood blockbuster hit Movies such as The Sky is Pink (Priyanka Chopra), Zero (Katrina Kaif), and Fanne Khan (Aishwarya Rai Bachchan), and serving as a key advisor and a Hair specialist to clients such as Henkel, Unilever, Marico, Dabur, and Bajaj, etc.
            </div> */}
            {/* <section id="about" class="about clear " data-scroll-index="1">
          <div class="container">
            <div class="row">
              <div class="col-md-8 offset-md-2 text-center">
                <div class="title"> <span>About Us</span>
                  <h2>Florian Hurel</h2>
                </div>
                <p>Florian Hurel is a renowned hair and makeup artist with over a decade of experience in the beauty industry. He is known for his exceptional skills in creating flawless and natural-looking makeup, and his ability to enhance a person's beauty without overpowering their features.</p>
                <p>Florian began his career in Paris, where he honed his skills working with some of the most prestigious names in the fashion industry. He has since established himself as a go-to artist for high-end editorial shoots, advertising campaigns, and red carpet events.</p>
                <p>Florian's unique approach to makeup artistry is deeply rooted in his love for nature and his belief that beauty should always come from within. He understands that every person is unique, and strives to create looks that reflect their individuality and enhance their natural beauty.</p>
                <p class="">Whether it's for a photo shoot, a wedding, or a special event, Florian's clients know they can count on him to deliver exceptional results every time.</p>
              </div>
            </div>
          </div>
        </section> */}
          </div>
        </div>

        <div
          id="modal-vi"
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
      </div>
    </>
  );
};

export default Bio;
