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
import logo from '../../assets/img/flh.svg';

const Magzine = () => {
  const [imageArray, setimageArray] = React.useState([])
  let [selectedImage, setSelectedImage] = React.useState(0)

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
      var img = document.getElementById(id).getElementsByTagName('img');
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

  const images = importAll(require.context('../../assets/img/magine-cover/VOGUE', false, /\.(png|jpe?g|svg)$/));
  const bazaar = importAll(require.context('../../assets/img/magine-cover/BAZAAR', false, /\.(png|jpe?g|svg)$/));
  const BRIDE = importAll(require.context('../../assets/img/magine-cover/BRIDE', false, /\.(png|jpe?g|svg)$/));
  const Cosmopolitan = importAll(require.context('../../assets/img/magine-cover/Cosmopolitan', false, /\.(png|jpe?g|svg)$/));
  const FEMINA = importAll(require.context('../../assets/img/magine-cover/FEMINA', false, /\.(png|jpe?g|svg)$/));
  const FLIMFARE = importAll(require.context('../../assets/img/magine-cover/FILMFARE', false, /\.(png|jpe?g|svg)$/));
  const GRAZIA = importAll(require.context('../../assets/img/magine-cover/GRAZIA', false, /\.(png|jpe?g|svg)$/));
  const HELLO = importAll(require.context('../../assets/img/magine-cover/HELLO', false, /\.(png|jpe?g|svg)$/));
  const WEDDINGVOWS = importAll(require.context('../../assets/img/magine-cover/WEDDINGVOWS', false, /\.(png|jpe?g|svg)$/));
  const elle = importAll(require.context('../../assets/img/magine-cover/elle', false, /\.(png|jpe?g|svg|JPG|JPEG)$/));

  const displayName = (e) =>{
    let name = e.split('/')
    name = name[name.length-1]
    name = name.split(' ')[0]
    return name;
  }
  return (
    <div className='min-[900px]:tw-relative tw-h-auto' style={{ 'background': 'linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)' }}>
      <div className='tw-w-full'>
        <Header />

        {/* Commercial */}
        <div className='tw-w-full backgroungg7' style={{ 'background': 'linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)' }}>
        <div className='tw-hidden min-[900px]:tw-block'>
            <div id="carouselExampleIndicators10" class="carousel slide" data-ride="carousel" data-interval="5000">

              <div class="carousel-inner">
                {/* mobile view */}
                <div class="carousel-item active ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={images[0]} alt="First slide" />
                  <div class="carousel-caption" style={{
                    'fontSize': '44px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.6)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px','width':'33%'
                  }}>
                    <h5>Magazine Cover</h5>
                  </div>
                </div>
                <div class="carousel-item ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={bazaar[0]} alt="Second slide" />
                  <div class="carousel-caption" style={{
                    'fontSize': '44px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.6)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px','width':'33%'
                  }}>
                    <h5>Magazine Cover</h5>
                  </div>
                </div>
                <div class="carousel-item ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={BRIDE[0]} alt="Third slide" />
                   <div class="carousel-caption" style={{
                    'fontSize': '44px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.6)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px','width':'33%'
                  }}>
                    <h5>Magazine Cover</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='min-[900px]:tw-hidden'>
            <div id="carouselExampleIndicators10" class="carousel slide" data-ride="carousel" data-interval="5000">

              <div class="carousel-inner">
                {/* mobile view */}
                <div class="carousel-item active ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={images[0]} alt="First slide" />
                  <div class="carousel-caption" style={{
                    'fontSize': '30px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.9)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px'
                  }}>
                    <h5>Magazine Cover</h5>
                  </div>
                </div>
                <div class="carousel-item ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={bazaar[0]} alt="Second slide" />
                  <div class="carousel-caption" style={{
                    'fontSize': '30px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.9)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px'
                  }}>
                    <h5>Magazine Cover</h5>
                  </div>
                </div>
                <div class="carousel-item ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={BRIDE[0]} alt="Third slide" />
                  <div class="carousel-caption" style={{
                    'fontSize': '30px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.9)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px'
                  }}>
                    <h5>Magazine Cover</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='tw-grid tw-mx-4 md:tw-mx-40 tw-mb-10 tw-pb-8 tw-relative z-10' >
            <div className='tw-columns-1 tw-pb-4'>
              {/* <div className='tw-font-sans tw-font-bold tw-text-3xl tw-mt-4 tw-ml-8 md:tw-mt-8' style={{}}>
                Magazine Cover
              </div> */}
              <div className='tw-font-sans tw-font-light tw-text-xl tw-mt-1 tw-ml-8 md:tw-mt-1 tw-text-white' style={{ 'textAlign': 'justify', 'margin': '40px 0px 30px 0px' }}>
                {/* Vogue  --  Harpers Bazaar -- Bride  --  Hello  --  Grazia  --  Cosmopolitan  --  Femina wedding  --  Flimfare   --  Wedding vows */}
                His talent and versatility as an artist have allowed him to work across different genres, from fashion and beauty to film and television. He has collaborated on a variety of projects, including feature films, music videos, and commercials.
              </div>
            </div>


            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' style={{ 'marginBottom':'18px' }}>
              Vogue
            </div>
            <div id='vogue' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
              {images.map((e,i) => (
                 <div>
                <img className='mx-auto' onClick={e => playImage(e, 'vogue', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                <span className='mx-auto ellipsImageName' style={{'display':'flex','justifyContent':'center'}}>{displayName(e)}</span>
                 </div>   
              ))}
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' style={{  'marginBottom':'18px' }}>
            Harper's Bazaar
            </div>
            <div id='bazaar' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1  tw-mb-10 tw-justify-center'>
              {bazaar.map((e,i) => (
                <div>
                  <img className='mx-auto' onClick={e => playImage(e, 'bazaar', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                  <span className='mx-auto ellipsImageName' style={{'display':'flex','justifyContent':'center'}}>{displayName(e)}</span>
                </div>
              ))}
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' style={{ 'marginBottom':'18px' }}>
              ELLE
            </div>
            <div id='elle' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
              {elle.map((e,i) => (
                 <div>
                <img className='mx-auto' onClick={e => playImage(e, 'elle', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                <span className='mx-auto ellipsImageName' style={{'display':'flex','justifyContent':'center'}}>{displayName(e)}</span>
                 </div>   
              ))}
            </div>


            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' style={{ 'marginBottom':'18px' }}>
             Grazia
            </div>
            <div id='gazia' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
              {GRAZIA.map((e,i) => (
                <div>
                  <img className='mx-auto' onClick={e => playImage(e, 'gazia', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                  <span className='mx-auto ellipsImageName' style={{'display':'flex','justifyContent':'center'}}>{displayName(e)}</span>
                </div>
              ))}
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' style={{ 'marginBottom':'18px' }}>
              Cosmopolitan
            </div>
            <div id='cos' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
              {Cosmopolitan.map((e,i) => (
                <div>
                  <img className='mx-auto' onClick={e => playImage(e, 'cos', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                  <span className='mx-auto ellipsImageName' style={{'display':'flex','justifyContent':'center'}}>{displayName(e)}</span>
                </div>
              ))}
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' style={{ 'marginBottom':'18px' }}>
              Hello
            </div>
            <div id='hello' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
              {HELLO.map((e,i) => (
                <div>
                  <img className='mx-auto' onClick={e => playImage(e, 'hello', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                  <span className='mx-auto ellipsImageName' style={{'display':'flex','justifyContent':'center'}}>{displayName(e)}</span>
                </div>
              ))}
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' style={{ 'marginBottom':'18px' }}>
              Femina wedding
            </div>
            <div id='femina' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
              {FEMINA.map((e,i) => (
                <div>
                  <img className='mx-auto' onClick={e => playImage(e, 'femina', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                  <span className='mx-auto ellipsImageName' style={{'display':'flex','justifyContent':'center'}}>{displayName(e)}</span>
                </div>
              ))}
            </div>


            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' style={{ 'marginBottom':'18px' }}>
              Brides
            </div>
            <div id='bride' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
              {BRIDE.map((e,i) => (
                <div>
                  <img className='mx-auto' onClick={e => playImage(e, 'bride', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                  <span className='mx-auto ellipsImageName' style={{'display':'flex','justifyContent':'center'}}>{displayName(e)}</span>
                </div>
              ))}
            </div>









            {/* <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' style={{ 'marginBottom':'18px' }}>
              Flimfare
            </div>
            <div id='filmfare' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
              {FLIMFARE.map((e,i) => (
                <div>
                  <img className='mx-auto' onClick={e => playImage(e, 'filmfare', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                  <span className='mx-auto ellipsImageName' style={{'display':'flex','justifyContent':'center'}}>{displayName(e)}</span>
                </div>
              ))}
            </div> */}

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' style={{ 'marginBottom':'18px' }}>
              Wedding vows
            </div>
            <div id='vows' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>
              {WEDDINGVOWS.map((e,i) => (
                <div>
                  <img className='mx-auto' onClick={e => playImage(e, 'vows', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                  <span className='mx-auto ellipsImageName' style={{'display':'flex','justifyContent':'center'}}>{displayName(e)}</span>
                </div>
              ))}
            </div>
            {/* <div className='view-all tw-mx-auto tw-mt-8' style={{ 'position': 'relative', 'border': '3px solid #fff' }}>
            <span className='tw-font-sans tw-font-bold' style={{ 'position': 'absolute', 'fontSize': '24px', 'padding': '8px 1px 1px 21px', 'color': '#fff' }}>VIEW ALL</span>
          </div> */}
          </div>

        </div>

        {/* footer */}
        <div className='tw-w-full tw-relative' >
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
    </div>
  )
}

export default Magzine