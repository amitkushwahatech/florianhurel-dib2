import React from 'react'
import Header from './header'
import f1 from '../assets/img/film/1.mp4';
import f2 from '../assets/img/film/2.mp4';
import f3 from '../assets/img/film/3.mp4';
import fo1 from '../assets/img/footer/1.svg';
import fo2 from '../assets/img/footer/2-1.svg';
import fo21 from '../assets/img/footer/2.svg';
import fo3 from '../assets/img/footer/3.svg';
import fb from '../assets/img/fb.svg';
import insta from '../assets/img/instagram.svg';
import twitter from '../assets/img/twitter.svg';
import cross from '../assets/img/times.svg';
import left from '../assets/img/left-arrow.svg';
import right from '../assets/img/right-arrow.svg';
import hair1 from '../assets/img/hair/hair1.jpg'
import hair2 from '../assets/img/hair/15.jpg'
import godrej1 from '../assets/img/hair/1.jpg'
import godrej2 from '../assets/img/hair/7.jpg'
import glow1 from '../assets/img/skin/glow1.jpg'
import glow2 from '../assets/img/skin/glow2.jpg'
import glow3 from '../assets/img/skin/glow3.jpg'
const Commercial = () => {
  const [imageArray, setimageArray] = React.useState([])
  let [selectedImage, setSelectedImage] = React.useState(0)
  const [videoArray, setvideoArray] = React.useState([])
  let [selectedVideo, setSelectedVideo] = React.useState(0)

  function importAll(r) {
      return r.keys().map((r));
  }


  const nextImage = () => {
      // debugger
      if (selectedImage < (imageArray.length - 1)) {
          setSelectedImage(selectedImage + 1)

      }
  }

  const playImage = (event, id, index) => {
      document.getElementById('nav').style.display = 'none'

      document.getElementById('modal-image').style.display = 'block'
      document.getElementsByTagName('body')[0].classList.add('tw-overflow-y-hidden')
      setTimeout(() => {
          var img = document.getElementById(id).children;
          let arr = []
          for (let i = 0; i <= img.length - 1; i++) {
              arr.push(`${img[i].src}`)
          }
          setimageArray(arr)
          setSelectedImage(index)
      }, 500);
  }

  const previousImage = () => {
      // debugger
      if (selectedImage !== 0) {
          setSelectedImage(selectedImage - 1)
      }
  }

  const closeModalImage = () => {
      document.getElementById('nav').style.display = 'block'

      document.getElementById('modal-image').style.display = 'none'
      document.getElementsByTagName('body')[0].classList.remove('tw-overflow-y-hidden')
  }
  const play = (event, id, index) => {
    document.getElementById('nav').style.display = 'none'
    document.getElementById('modal').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('tw-overflow-y-hidden')
    setTimeout(() => {
        var img = document.getElementById(id).children;
        let arr = []
        for (let i = 0; i <= img.length - 1; i++) {
            arr.push(`${img[i].getElementsByTagName("source")[0].src}`)
        }
        setvideoArray(arr)
        setSelectedVideo(index)
    }, 500);
}


const nextVideo = () => {
    // debugger
    if (selectedVideo < (videoArray.length - 1)) {
        setSelectedVideo(selectedVideo + 1)

    }
}

const previousVideo = () => {
    // debugger
    if (selectedVideo !== 0) {
        setSelectedVideo(selectedVideo - 1)
    }
}

const closeModal = () => {
    setvideoArray([])
    document.getElementById('nav').style.display = 'block'

    document.getElementById('modal').style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('tw-overflow-y-hidden')
}
  return (
    <>
      <div className='tw-w-full'>
        <Header />

        {/* Commercial */}
        <div className='tw-w-full'>
          <div className='tw-grid tw-mx-10 min-[900px]:tw-mx-40 tw-mb-10 tw-py-8' >
            <div className='tw-columns-1'>
              <div className='tw-font-sans tw-font-bold tw-text-3xl tw-mt-4 tw-ml-8 min-[900px]:tw-mt-8' style={{}}>
                Commercials
              </div>
              <div className='tw-font-sans tw-font-light tw-text-xl tw-mt-1 tw-ml-8 min-[900px]:tw-mt-1'>
              Hair & Care  -- Godrej  --  Glow & Lovely
              </div>
            </div>


            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Hair & Care
                        </div>
                        <div id='hair' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>

                            <video onClick={e => play(e, 'hair', 0)} poster={hair1}>
                                <source src='https://www.youtube.com/embed/eXQJNyLEYqY?autoplay=1' type="video/mp4" />
                            </video>
                            <video onClick={e => play(e, 'hair', 0)} poster={hair2}>
                                <source src='https://www.youtube.com/embed/R58kGs01FBM?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                        Godrej
                        </div>
                        <div id='Godrej' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                        <video onClick={e => play(e, 'Godrej', 0)} poster={godrej1}>
                                <source src='https://www.youtube.com/embed/hKyNjBpuOjQ?autoplay=1' type="video/mp4" />
                            </video>
                            <video onClick={e => play(e, 'Godrej', 0)} poster={godrej2}>
                                <source src='https://www.youtube.com/embed/NBI69E-HGkU?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Glow & Lovely
                        </div>
                        <div id='glow' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'glow', 0)} poster={glow1}>
                                <source src='https://www.youtube.com/embed/LzUDs54BpGs?autoplay=1' type="video/mp4" />
                            </video>
                            <video onClick={e => play(e, 'glow', 0)} poster={glow2}>
                                <source src='https://www.youtube.com/embed/-ZGn04ob4Nk?autoplay=1' type="video/mp4" />
                            </video>
                            <video onClick={e => play(e, 'glow', 0)} poster={glow3}>
                                <source src='https://www.youtube.com/embed/sLSlt7Fx8mU?autoplay=1' type="video/mp4" />
                            </video>
                        </div>
            {/* <div className='view-all tw-mx-auto tw-mt-8' style={{ 'position': 'relative', 'border': '3px solid #fff' }}>
            <span className='tw-font-sans tw-font-bold' style={{ 'position': 'absolute', 'fontSize': '24px', 'padding': '8px 1px 1px 21px', 'color': '#fff' }}>VIEW ALL</span>
          </div> */}
          </div>

        </div>

        {/* footer */}
        <div className='tw-w-full tw-relative' style={{ 'background': 'rgba(229, 229, 229, 0.5)' }}>
        <div className='tw-grid min-[900px]:tw-grid-cols-3 tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-8 mx-auto' >
          <img className='mx-auto my-auto min-[900px]:tw-block tw-hidden' src={fo1} alt='g' ></img>
          <div>
            <div className='columns-1'>
              <img className='mx-auto' src={fo2} alt='g' ></img>
              <img className='mx-auto' src={fo21} alt='g' ></img>
              <div className='tw-grid tw-grid-cols-2 tw-gap-4 tw-mx-40 mt-4 '>
                <img className='mx-auto' onClick={e => window.open('https://www.facebook.com/florianhurelmakeuphair?mibextid=ZbWKwL', '_blank')} src={fb} alt='g' ></img>
                <img className='mx-auto' onClick={e => window.open('https://instagram.com/florianhurel?igshid=YmMyMTA2M2Y', '_blank')} src={insta} alt='g' ></img>
                {/* <img className='mx-auto' src={twitter} alt='g' ></img> */}
              </div>
            </div>
          </div>
          <img className='mx-auto my-auto min-[900px]:tw-block tw-hidden' src={fo3} alt='g' ></img>
        </div>
        <hr className='w-full tw-hidden min-[900px]:tw-block' />
        <div className=' tw-hidden min-[900px]:tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-mt-4 tw-py-4 mx-auto' >
          <div></div>
          <div className='mx-auto'>&#169;Copyrights 2023 by Florian Design by <a href='https://dibizsolution.com' target='_blank'>Dibiz Solution</a></div>
          <div className='mx-auto'>Privacy policy / Cookies policy / Terms of use</div>
        </div>
        <div className=' tw-grid min-[900px]:tw-hidden tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-2 mx-auto' >
          {/* <div></div> */}
          <div className='mx-auto'>&#169;Copyrights 2023 by Florian
          </div>
          <div className='mx-auto tw-text-white tw-mt-[-20px]'>Design by <a href='https://dibizsolution.com' target='_blank'>Dibiz Solution</a></div>
          <div className='mx-auto'>Privacy policy / Cookies policy / Terms of use</div>
        </div>
      </div>
      </div>
      <div id="modal-image" className="tw-fixed tw-hidden tw-z-50 tw-inset-0 tw-bg-gray-900 tw-bg-opacity-60 tw-overflow-y-auto tw-h-full tw-w-full tw-modal">
                <div className="tw-relative tw-mx-auto tw-h-full tw-w-full tw-shadow-xl tw-rounded-md tw-bg-white " id='video-model'>
                    <div className="tw-grid tw-grid-cols-2 gap-4 tw-pt-8 md:tw-mx-24 tw-mx-8">
                        <div className='tw-font-sans tw-font-bold' style={{ 'fontSize': '13.3521px', 'lineHeight': '18px', 'textTransform': 'uppercase' }}>Back to home</div>
                        <div ><img className='tw-float-right' src={cross} onClick={closeModalImage} alt='cross' style={{ 'cursor': 'pointer' }}></img></div>
                    </div>
                    <div className="tw-flex tw-flex-row tw-pt-2 tw-h-[80vh]">
                        <div className="tw-basis-1/12 my-auto">
                            <div className="md:tw-mx-8 tw-mx-2 tw-float-right" onClick={previousImage}>
                                <span className="" aria-hidden="true"><img src={left} alt='dd'></img></span>
                            </div></div>
                        <div className="tw-basis-5/6 mx-auto tw-w-full tw-h-full">
                            <img className='tw-w-full tw-h-full' src={imageArray[selectedImage]} alt='dddd' style={{ 'objectFit': 'contain' }}>
                            </img>

                        </div>
                        <div className="tw-basis-1/12 my-auto">
                            <div className="md:tw-mx-8 tw-mx-2" onClick={nextImage}>
                                <span className="" aria-hidden="true"><img src={right} alt='dd'></img></span>
                            </div>
                        </div>
                    </div>

                    <div className="tw-flex tw-flex-row ">
                        <div className="tw-basis-1/12 my-auto"></div>
                        <div className="tw-basis-5/6">
                            {selectedImage + 1}/{imageArray.length}
                        </div>
                        <div className="tw-basis-1/12 my-auto">
                        </div>
                    </div>

                </div>
            </div>
            <div id="modal" className="tw-fixed tw-hidden tw-z-50 tw-inset-0 tw-bg-gray-900 tw-bg-opacity-60 tw-overflow-y-auto tw-h-full tw-w-full tw-modal">
                <div className="tw-relative tw-mx-auto tw-h-full tw-w-full tw-shadow-xl tw-rounded-md tw-bg-white " id='video-model'>
                    <div className="tw-grid tw-grid-cols-2 gap-4 tw-pt-8 md:tw-mx-24 tw-mx-8">
                        <div className='tw-font-sans tw-font-bold' style={{ 'fontSize': '13.3521px', 'lineHeight': '18px', 'textTransform': 'uppercase' }}>Back to home</div>
                        <div ><img className='tw-float-right' src={cross} onClick={closeModal} alt='cross' style={{ 'cursor': 'pointer' }}></img></div>
                    </div>
                    <div className="tw-flex tw-flex-row tw-pt-2 tw-h-[80vh]">
                        <div className="tw-basis-1/12 my-auto">
                            <div className="md:tw-mx-8 tw-mx-2 tw-float-right" onClick={previousVideo}>
                                <span className="" aria-hidden="true"><img src={left} alt='dd'></img></span>
                            </div></div>
                        <div className="tw-basis-5/6 mx-auto tw-w-full tw-h-full">
                            {/* <video className='tw-w-full tw-h-full' controls ref={videoRef}>
                <source src={videoArray[selectedVideo]} type="video/mp4" />
              </video> */}

                            <iframe id="ytplayer" type="text/html" className='tw-w-full tw-h-full'
                                src={videoArray[selectedVideo]}
                                frameBorder="0" allowFullScreen title="This is a unique title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" />
                        </div>
                        <div className="tw-basis-1/12 my-auto">
                            <div className="md:tw-mx-8 tw-mx-2" onClick={nextVideo}>
                                <span className="" aria-hidden="true"><img src={right} alt='dd'></img></span>
                            </div>
                        </div>
                    </div>

                    <div className="tw-flex tw-flex-row ">
                        <div className="tw-basis-1/12 my-auto"></div>
                        <div className="tw-basis-5/6">
                            {selectedVideo + 1}/{videoArray.length}
                        </div>
                        <div className="tw-basis-1/12 my-auto">
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Commercial