import React from 'react'
import Crousel from './crousel';
import Header from './header'
import Bio from './bio'
import BrandWorkWith from './brandWorkWith';
import logo from '../assets/img/logo.svg';

const Wrapper = () => {
    const [percent, setpercent] = React.useState(0)
    const [rotation, setRotation] = React.useState(0);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            let scrollTop = window.scrollY;
            let docHeight = document.body.offsetHeight;
            let winHeight = window.innerHeight;
            let scrollPercent = scrollTop / (docHeight - winHeight);
            let scrollPercentRounded = Math.round(scrollPercent * 100);
            // console.log(scrollPercentRounded);
            setpercent(scrollPercentRounded)
            // percentLabel.innerHTML = scrollPercentRounded;
          });

          const handleScroll = () => {
            const scrollY = window.scrollY;
            const rotation = scrollY / 10; // Change the rotation speed here
            
            setRotation(rotation);
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, [])
    
    return (
        <>
            <Header />
            <Crousel />
            <Bio />
            <BrandWorkWith />
            <div class="footer tw-hidden min-[900px]:tw-block " style={{'zIndex':'999999999'}}>
                <img className='float-right' style={{'float':'right','transform':`rotate(${rotation}deg)`}} src={logo}></img>
                <span style={{'position':'absolute','right':'2%','bottom':'35%', 'color':'#969696', 'fontSize':'22px'}} className="tw-font-sans tw-italic ">{percent}%</span>
                </div>
        </>
    )
}

export default Wrapper