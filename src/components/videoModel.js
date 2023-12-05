import React from 'react'
import cross from '../assets/img/times.svg';
import left from '../assets/img/left-arrow.svg';
import right from '../assets/img/right-arrow.svg';
import { createPortal } from 'react-dom';

const VideoModel = ({videoArray,index, isOpen , onClose}) => {
  let [selectedVideo, setSelectedVideo] = React.useState(index)
  const videoRef = React.useRef();

  const nextVideo = () => {
    // debugger
    if (selectedVideo <(videoArray.length-1)) {
      setSelectedVideo(selectedVideo + 1)
      
    }
  }

  React.useEffect(() => {
    console.log('ggggggggggggggggggggggggg');
    return () => {
        videoRef.current?.pause();
    }
  }, [])
  

  const previousVideo = () => {
    // debugger
    if (selectedVideo !== 0 ) {
      setSelectedVideo(selectedVideo - 1)
    }
  } 

  if (!isOpen) return null;

  return createPortal(
    <div id="modal" class="tw-fixed tw-hidden tw-z-50 tw-inset-0 tw-bg-gray-900 tw-bg-opacity-60 tw-overflow-y-auto tw-h-full tw-w-full tw-modal">
    <div class="tw-relative tw-mx-auto tw-h-full tw-w-full tw-shadow-xl tw-rounded-md tw-bg-white " id='video-model'>
    <div class="tw-grid tw-grid-cols-2 gap-4 tw-pt-8 tw-mx-24">
      <div className='tw-font-sans tw-font-bold' style={{'fontSize': '13.3521px','lineHeight': '18px','textTransform': 'uppercase'}}>Back to home</div>
      <div ><img className='tw-float-right' src={cross} onClick={onClose} alt='cross' style={{'cursor':'pointer'}}></img></div>
    </div>
      <div className="tw-flex tw-flex-row tw-pt-2 tw-h-[80vh]">
        <div class="tw-basis-1/12 my-auto">                    
        <div className="tw-mx-8 tw-float-right" onClick={previousVideo}>
          <span className="" aria-hidden="true"><img src={left} alt='dd'></img></span>
        </div></div>
        <div class="tw-basis-5/6 mx-auto tw-w-full tw-h-full">
          <video className='tw-w-full tw-h-full' controls ref={videoRef}>
            <source src={videoArray[selectedVideo]} type="video/mp4" />
          </video>

        </div>
        <div class="tw-basis-1/12 my-auto">
          <div className="tw-mx-8" onClick={nextVideo}>
            <span className="" aria-hidden="true"><img src={right} alt='dd'></img></span>
          </div>
        </div>
      </div>

      <div className="tw-flex tw-flex-row ">
        <div class="tw-basis-1/12 my-auto"></div>
        <div class="tw-basis-5/6">
          {selectedVideo+1}/{videoArray.length}
        </div>
        <div class="tw-basis-1/12 my-auto">
        </div>
      </div>

    </div>
  </div>,document.getElementById('portal')
  )
}

export default VideoModel