

import { MutableRefObject, useRef } from "react";
import AboutSec from "./components/AboutSec";
import Menu from "./components/Menu";
import Reserv from "./components/Reserv";
import SlideSection from "./components/SlideSection";

function App() {
  const barsHandle = useRef() as MutableRefObject<HTMLDivElement>
  const menuHandles = useRef() as MutableRefObject<HTMLDivElement>
  const navSec = useRef() as MutableRefObject<HTMLDivElement>
  window.addEventListener('scroll',()=>{
    let navBar = navSec.current;
    if(window.innerWidth > 786){
      navBar.classList.toggle('navActive',window.scrollY > 789)
    }
  })
  const menuHandle = ()=>{
    let bars = barsHandle.current;
    let menu = menuHandles.current
    bars.classList.toggle('bars_active');
    menu.classList.toggle('menu_active');
  }
  return (
    <>
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
    </>
  );
}

export default App;

