import React, { useLayoutEffect, useRef } from "react";
import "./navbar.css";
import { gsap, Elastic } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const con = useRef(null);
  useGSAP(() => {
    gsap.from(".text", {
      y: 100,
      duration: 0.5,
      stagger: 0.05,
      ease: Elastic.easeOut.config(0.3, 0.2)
    });
  }, []);
  useGSAP(()=>{
    gsap.from(".circle1, .circle2", {
      y: 1000,
      // duration: 1,
      stagger: 0.05,
      ease: Elastic.easeOut.config(0.2, 0.2),
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 5
      }
    })
  },[]);
  return (
    <>
      <div className="container">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <nav>
          <img src="" />

          <ul className="ul1">
            <li className="navlinks">Home</li>
            <li className="navlinks">Box-Shadow</li>
            <li className="navlinks">Button</li>
            <li className="navlinks">Hover</li>
          </ul>

          <ul>
            <li>
              <button className="btn1">About Us</button>
            </li>
            <li>
              <button className="btn2">Contact</button>
            </li>
          </ul>
        </nav>
        <div ref={con} className="content">
        <div class="context"><div className="text">M</div><div className="text">A</div><div className="text">K</div><div className="text">E</div><div className="text">&nbsp;</div><div className="text">Y</div><div className="text">O</div><div className="text">U</div><div className="text">R</div><div className="text">&nbsp;</div><div className="text">W</div><div className="text">E</div><div className="text">B</div><div className="text">I</div><div className="text">T</div><div className="text">E</div><div className="text">S</div></div>
          <div class="context"><div className="text">L</div><div className="text">O</div><div className="text">O</div><div className="text">K</div><div className="text">&nbsp;</div><div className="text">M</div><div className="text">O</div><div className="text">R</div><div className="text">E</div></div>
          <div class="context"><div className="text" id="red-text">A</div><div className="text" id="red-text">T</div><div className="text" id="red-text">T</div><div className="text" id="red-text">R</div><div className="text" id="red-text">A</div><div className="text" id="red-text">C</div><div className="text" id="red-text">T</div><div className="text" id="red-text">I</div><div className="text" id="red-text">V</div><div className="text" id="red-text">E</div></div>
        </div>
      </div>
      <div className="btn3">
        <button className="for-knowmore-btn">Know More</button>
      </div>
    </>
  );
};

export default Navbar;
