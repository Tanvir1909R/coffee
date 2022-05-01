
import { MutableRefObject, useRef } from "react";
import {BiUpArrow} from 'react-icons/bi'
import AboutSec from "./components/AboutSec";
import Map from "./components/Map";
import Menu from "./components/Menu";
import NewsEvents from "./components/NewsEvents";
import Reserv from "./components/Reserv";
import SlideSection from "./components/SlideSection";

function App() {
  const barsHandle = useRef() as MutableRefObject<HTMLDivElement>
  const menuHandles = useRef() as MutableRefObject<HTMLDivElement>
  const navSec = useRef() as MutableRefObject<HTMLDivElement>
  const to_top = useRef<HTMLAnchorElement>(null)
  window.addEventListener('scroll',()=>{
    let navBar = navSec.current;
    let toTopBtn = to_top.current
    if(window.innerWidth > 786){
      navBar.classList.toggle('navActive',window.scrollY > 789)
    }
    if(window.scrollY > 789){
      toTopBtn?.classList.add('toTop_active');
    }else{
      toTopBtn?.classList.remove('toTop_active');
    }
  })
  const menuHandle = ()=>{
    let bars = barsHandle.current;
    let menu = menuHandles.current
    bars.classList.toggle('bars_active');
    menu.classList.toggle('menu_active');
  }
  const toTopHandle = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <>
      <a className="to_top" ref={to_top} onClick={toTopHandle}>
        <BiUpArrow />
      </a>
      <SlideSection />
      <section className="navbar" ref={navSec}>
        <div className="nav_wrapper">
          <div className="menu" ref={menuHandles}>
            <a href="/">HOME</a>
            <a href="/">ABOUT</a>
            <a href="/">RESERVATIONS</a>
            <a href="/">MENU</a>
            <a href="/">NEWS</a>
            <a href="/">LOCATIONS</a>
          </div>
            <a href="/" className="logo">
              <img src="./img/logo.png" alt="" />
            </a>
          <div className="bars" onClick={menuHandle} ref={barsHandle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </section>
      <AboutSec />
      <Reserv/>
      <Menu />
      <NewsEvents />
      <Map />
    </>
  );
}

export default App;

