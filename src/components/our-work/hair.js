import React from 'react'
import Header from '../header'
import fo1 from '../../assets/img/footer/1.svg';
import fo2 from '../../assets/img/footer/2-1.svg';
import fo21 from '../../assets/img/footer/2.svg';
import fo3 from '../../assets/img/footer/3.svg';
import fb from '../../assets/img/fb.svg';
import insta from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import cross from '../../assets/img/times.svg';
import left from '../../assets/img/left-arrow.svg';
import right from '../../assets/img/right-arrow.svg';

import nourish from '../../assets/img/campign/nourish.jpg'
import sketchers from '../../assets/img/campign/sketchers.jpg'
import jio from '../../assets/img/campign/jio.jpg'
import melange from '../../assets/img/campign/melange.jpg'
import flipkart from '../../assets/img/campign/flipkart.jpg'
import hair1 from '../../assets/img/hair/hair1.jpg'
import hair2 from '../../assets/img/hair/15.jpg'
import godrej1 from '../../assets/img/hair/1.jpg'
import godrej2 from '../../assets/img/hair/7.jpg'
import dabur1 from '../../assets/img/hair/2.jpg'
import tres1 from '../../assets/img/hair/16.jpg'
import tres2 from '../../assets/img/hair/4.jpg'
import pan1 from '../../assets/img/hair/5.jpg'
import kesh1 from '../../assets/img/hair/6.jpg'
import dove1 from '../../assets/img/hair/8.jpg'
import mama1 from '../../assets/img/hair/9.jpg'
import mama2 from '../../assets/img/hair/10.jpg'
import tiru1 from '../../assets/img/hair/11.jpg'
import para1 from '../../assets/img/hair/12.jpg'
import sch1 from '../../assets/img/hair/13.jpg'
import sch2 from '../../assets/img/hair/14.jpg'
import logo from '../../assets/img/flh.svg';
import banner from '../../assets/img/hair/banner.jpg';


const Hair = () => {
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

    const streak = importAll(require.context('../../assets/img/hair/steak', false, /\.(png|jpe?g|JPG|svg)$/));
    const sch = importAll(require.context('../../assets/img/hair/sch', false, /\.(png|jpe?g|JPG|svg)$/));


    const play = (event, id, index) => {
        document.getElementById('nav').style.display = 'none'
        document.getElementById('modal').style.display = 'block'
        document.getElementsByTagName('body')[0].classList.add('tw-overflow-y-hidden')
        setTimeout(() => {
            var img = document.getElementById(id).getElementsByTagName('video');
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
        <div className='min-[900px]:tw-relative tw-h-auto' style={{ 'background': 'linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)' }}>
            <div className='tw-w-full'>
                <Header />

                {/* Commercial */}
                <div className='tw-w-full backgroungg7 ' style={{ 'background': 'linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)' }}>
                    <div className='tw-hidden min-[900px]:tw-block tw-relative'>
                        <div id="carouselExampleIndicators10" class="carousel slide" data-ride="carousel" data-interval="5000">

                            <div class="carousel-inner">
                                {/* mobile view */}
                                <div class="carousel-item active ">
                                    <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={streak[0]} alt="First slide" />
                                    <div class="carousel-caption" style={{
                                        'fontSize': '44px',
                                        'color': '#fff',
                                        'background': 'rgba(0,0,0,0.6)',
                                        'padding': '2px 0px',
                                        'position': 'absolute',
                                        'left': '0px', 'bottom': '88px', 'width': '33%'
                                    }}>
                                        <h5>Hair Commercial</h5>
                                    </div>
                                </div>
                                {/* <div class="carousel-item ">
                                    <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={streak[1]} alt="Second slide" />
                                    <div class="carousel-caption" style={{
                                        'fontSize': '44px',
                                        'color': '#fff',
                                        'background': 'rgba(0,0,0,0.6)',
                                        'padding': '2px 0px',
                                        'position': 'absolute',
                                        'left': '0px', 'bottom': '88px', 'width': '33%'
                                    }}>
                                        <h5>Hair Commercial</h5>
                                    </div>
                                </div>
                                <div class="carousel-item ">
                                    <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={sch[0]} alt="Third slide" />
                                    <div class="carousel-caption" style={{
                                        'fontSize': '44px',
                                        'color': '#fff',
                                        'background': 'rgba(0,0,0,0.6)',
                                        'padding': '2px 0px',
                                        'position': 'absolute',
                                        'left': '0px', 'bottom': '88px', 'width': '33%'
                                    }}>
                                        <h5>Hair Commercial</h5>
                                    </div>
                                </div> */}
                            </div>

                        </div>
                    </div>
                    <div className='min-[900px]:tw-hidden'>
                        <div id="carouselExampleIndicators10" class="carousel slide" data-ride="carousel" data-interval="5000">

                            <div class="carousel-inner">
                                {/* mobile view */}
                                <div class="carousel-item active ">
                                    <img class="d-block w-100 tw-h-[auto] tw-object-cover" src={banner} alt="First slide" />
                                    <div class="carousel-caption" style={{
                                        'fontSize': '30px',
                                        'color': '#fff',
                                        'background': 'rgba(0,0,0,0.6)',
                                        'padding': '2px 0px',
                                        'position': 'absolute',
                                        'left': '0px', 'bottom': '88px'
                                    }}>
                                        <h5>Hair Commercial</h5>
                                    </div>
                                </div>
                                {/* <div class="carousel-item ">
                                    <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={streak[1]} alt="Second slide" />
                                    <div class="carousel-caption" style={{
                                        'fontSize': '30px',
                                        'color': '#fff',
                                        'background': 'rgba(0,0,0,0.6)',
                                        'padding': '2px 0px',
                                        'position': 'absolute',
                                        'left': '0px', 'bottom': '88px'
                                    }}>
                                        <h5>Hair Commercial</h5>
                                    </div>
                                </div>
                                <div class="carousel-item ">
                                    <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={sch[0]} alt="Third slide" />
                                    <div class="carousel-caption" style={{
                                        'fontSize': '30px',
                                        'color': '#fff',
                                        'background': 'rgba(0,0,0,0.6)',
                                        'padding': '2px 0px',
                                        'position': 'absolute',
                                        'left': '0px', 'bottom': '88px'
                                    }}>
                                        <h5>Hair Commercial</h5>
                                    </div>
                                </div> */}
                            </div>

                        </div>
                    </div>
                    <div className='tw-grid tw-mx-4 md:tw-mx-40 tw-mb-10 tw-pb-8 tw-relative z-10' >
                        <div className='tw-columns-1 tw-pb-4'>
                            {/* <div className='tw-font-sans tw-font-bold tw-text-3xl tw-mt-4 tw-ml-8 md:tw-mt-8' style={{}}>
                                Hair Commercial
                            </div> */}
                            <div className='tw-font-sans tw-font-light tw-text-xl tw-mt-1 tw-ml-8 md:tw-mt-1 tw-text-white' style={{ 'textAlign': 'justify', 'margin': '40px 0px 30px 0px' }}>
                                {/* Hair & Care  --  Godrej  --  Dabur  --  TRESemme  --  Pantene  --  Kash King -- Dove  --  Mamaearth  --  Tirumalaa  --  Parachute  --  Schwarzkopf   --  Streak */}
                                He understands the importance of using high-quality products and techniques to achieve beautiful, healthy-looking hair and works closely with each client to create a look that highlights their natural beauty.
                            </div>
                        </div>


                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                            Hair & Care
                        </div>
                        <div id='hair' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            <div>
                                <video onClick={e => play(e, 'hair', 0)} poster={hair1}>
                                    <source src='https://www.youtube.com/embed/eXQJNyLEYqY?autoplay=1' type="video/mp4" />
                                </video>
                                <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', }}>Shraddha for Hair & care</span>
                            </div>
                            <div className='tw-my-auto'>
                            <video onClick={e => play(e, 'hair', 1)} poster={hair2}>
                                <source src='https://www.youtube.com/embed/R58kGs01FBM?autoplay=1' type="video/mp4" />
                            </video>
                                <span className='mx-auto ellipsImageName' style={{ 'display': 'flex'}}>Amayra for Hair & care</span>
                            </div>

                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                            Godrej
                        </div>
                        <div id='Godrej' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            <div>
                            <video onClick={e => play(e, 'Godrej', 0)} poster={godrej1}>
                                <source src='https://www.youtube.com/embed/hKyNjBpuOjQ?autoplay=1' type="video/mp4" />
                            </video>
                                <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', }}>Anushka for Godrej</span>
                            </div>                            
                            <div>
                            <video onClick={e => play(e, 'Godrej', 1)} poster={godrej2}>
                                <source src='https://www.youtube.com/embed/NBI69E-HGkU?autoplay=1' type="video/mp4" />
                            </video>
                                <span className='mx-auto ellipsImageName' style={{ 'display': 'flex'}}>Silpa for Godrej</span>
                            </div>


                        </div>


                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                        Anushka for Dabur
                        </div>
                        <div id='dabur' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            <div>
                            <video onClick={e => play(e, 'dabur', 0)} poster={dabur1}>
                                <source src='https://www.youtube.com/embed/GbwTDTa3KgA?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}></span> */}
                            </div>

                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                           Alia for TRESemme
                        </div>
                        <div id='tresemme' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            <div>
                            <video onClick={e => play(e, 'tresemme', 0)} poster={tres1}>
                                <source src='https://www.youtube.com/embed/8fGpeQaWKBE?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>TRESemme by Alia</span> */}
                            </div>                            
                            <div>
                            <video onClick={e => play(e, 'tresemme', 1)} poster={tres2}>
                                <source src='https://www.youtube.com/embed/8fGpeQaWKBE?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>TRESemme by Alia</span> */}
                            </div>



                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                        Kiara for Pantene
                        </div>
                        <div id='pantene' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            <div>
                            <video onClick={e => play(e, 'pantene', 0)} poster={pan1}>
                                <source src='https://www.youtube.com/embed/pYUML21X1fM?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Pantene by </span> */}
                            </div>
 
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                        Shilpa for Kesh King
                        </div>
                        <div id='kesh' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1  tw-mb-10 tw-justify-center'>
                            {/* {bazaar.map((e,i) => (
                <img className='mx-auto' onClick={e => playImage(e, 'bazaar', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))} */}
                            <div>
                            <video onClick={e => play(e, 'kesh', 0)} poster={kesh1}>
                                <source src='https://www.youtube.com/embed/mLW1u4ERU6o?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Kesh King by Silpa</span> */}
                            </div>

                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                        Nidhi for Dove
                        </div>
                        <div id='dove' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            {/* {BRIDE.map((e,i) => (
                <img className='mx-auto' onClick={e => playImage(e, 'bride', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))} */}
                            <div>
                            <video onClick={e => play(e, 'dove', 0)} poster={dove1}>
                                <source src='https://www.youtube.com/embed/x5lvN1pSKNE?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Dove by Nidhi</span> */}
                            </div>

                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                        Sara for Mama Earth
                        </div>
                        <div id='mama' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            <div>
                            <video onClick={e => play(e, 'mama', 0)} poster={mama1}>
                                <source src='https://www.youtube.com/embed/PbR98T2peEY?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Mama Earth by Sara</span> */}
                            </div>                            
                            <div>
                            <video onClick={e => play(e, 'mama', 1)} poster={mama2}>
                                <source src='https://www.youtube.com/embed/wso1IbTklTo?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Mama Earth by Sara</span> */}
                            </div>


                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                        Madhuri for Tirumalaa
                        </div>
                        <div id='Tirumalaa' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            {/* {HELLO.map((e,i) => (

                <img className='mx-auto' onClick={e => playImage(e, 'Tirumalaa', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))} */}
                            <div>
                            <video onClick={e => play(e, 'Tirumalaa', 0)} poster={tiru1}>
                                <source src='https://www.youtube.com/embed/-bD4cqf0pzg?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Tirumalaa by Madhuri</span> */}
                            </div>

                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                        Parachute
                        </div>
                        <div id='Parachute' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            <div>
                            <video onClick={e => play(e, 'Parachute', 0)} poster={para1}>
                                <source src='https://www.youtube.com/embed/37ZXneJcYro?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Parachute by Tamanna</span> */}
                            </div>

                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                        Schwarzkopf
                        </div>
                        <div id='Schwarzkopf' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            <div>
                            <video onClick={e => play(e, 'Schwarzkopf', 0)} poster={sch1}>
                                <source src='https://www.youtube.com/embed/cEOJw1OpJWI?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Schwarzkopf by Mira</span> */}
                            </div>                            
                            <div>
                            {/* <video onClick={e => play(e, 'Schwarzkopf', 1)} poster={sch2}>
                                <source src='https://www.youtube.com/embed/AepxyLNoQeI?autoplay=1' type="video/mp4" />
                            </video> */}
                            </div>


                            {/* {sch.map((e,i) => (
                <img className='mx-auto' onClick={e => playImage(e, 'Schwarzkopf', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
              ))} */}
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                           Vaani for Streax
                        </div>
                        <div id='strek' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
                            {streak.map((e, i) => (
                                <img className='mx-auto' onClick={e => playImage(e, 'streak', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin': 'auto' }}></img>
                            ))}
                        </div>


                    </div>

                </div>

                {/* footer */}
                <div className='tw-w-full tw-relative'>
                    <div className='tw-grid min-[900px]:tw-grid-cols-3 tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-8 mx-auto' >
                        <img className='mx-auto my-auto min-[900px]:tw-block tw-hidden' src={fo1} alt='g' ></img>
                        <div>
                            <div className='columns-1'>
                                <img className='mx-auto' src={logo} alt='g' ></img>
                                {/* <img className='mx-auto' src={fo21} alt='g' ></img> */}
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
                        <div className='mx-auto tw-text-white'>&#169;Copyrights 2023 by Florian Design by <a href='https://dibizsolution.com' target='_blank'>Dibiz Solution</a></div>
                        <div className='mx-auto tw-text-white'>Privacy policy / Cookies policy / Terms of use</div>
                    </div>
                    <div className=' tw-grid min-[900px]:tw-hidden tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-2 mx-auto' >
                        {/* <div></div> */}
                        <div className='mx-auto tw-text-white'>&#169;Copyrights 2023 by Florian
                        </div>
                        <div className='mx-auto tw-text-white tw-mt-[-20px]'>Design by <a href='https://dibizsolution.com' target='_blank'>Dibiz Solution</a></div>
                        <div className='mx-auto tw-text-white'>Privacy policy / Cookies policy / Terms of use</div>
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
        </div>
    )
}

export default Hair