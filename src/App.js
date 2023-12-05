import './App.scss';
import Crousel from './components/crousel';
import Header from './components/header'
import Bio from './components/bio'
import BrandWorkWith from './components/brandWorkWith';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from './components/wrapper';
import Blog from './components/blog';
import Commercial from './components/commercial';
import Magzine from './components/our-work/magzine';
import Apperance from './components/our-work/apperence';
import ScrollToTop from './components/scrollToTop';
import Campaigns from './components/our-work/campaign';
import Skin from './components/our-work/skin';
import Hair from './components/our-work/hair';
import Contact from './components/contact';
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        {/* <Route path="/" element={<Wrapper />}> */}
          <Route path='/' element={<Wrapper />} />
          <Route path="blogs" element={<Blog/>} />
          <Route path="commercial" element={<Commercial/>} />
          <Route path="/magzine" element={<Magzine/>} />
          <Route path="/celebrity" element={<Apperance/>} />
          <Route path="/campaigns" element={<Campaigns/>} />
          <Route path="/skin" element={<Skin/>} />
          <Route path="/hair" element={<Hair/>} />
          <Route path="/contact" element={<Contact/>} />
          
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
