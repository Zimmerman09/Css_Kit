import React, { useLayoutEffect, useRef } from "react";
import "./landingpage.css";
import { gsap, Elastic } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";


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
      stagger: 0.05,
      ease: Elastic.easeOut.config(0.2, 0.2),
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 5
      }
    })
  },[]);
  useGSAP(()=>{
    gsap.to(".circle3",{
      x: 1100,
      rotate:"360",
      duration:3,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".service_page",
        start:"top centre",
        pin:"true",
        scrub:"true",
        markers:"true",
        toggleActions:"restart pause reverse pause"
        
      }
    })
  },[])
  useGSAP(()=>{
    gsap.to(".circle4",{
      x: -1100,
      y:300,
      rotate:"360",
      duration:3,
      scrollTrigger: {
        trigger: ".service_page",
        start:"top centre",
        pin:"true",
        scrub:"true",
        markers:"true",
        toggleActions:"restart pause reverse pause"
        
      }
    })
  },[])
  useGSAP(()=>{
    gsap.to(".circle5",{
       width:200,
      height: 200, 
      duration:3,
      scrollTrigger: {
        trigger: ".about_page",
        start:"top centre",
        pin:"true",
        scrub:"true",
        markers:"true",
        toggleActions:"restart pause reverse pause"
        
      }
    })
  },[])
  useGSAP(()=>{
    gsap.to(".circle6",{
       width:400,
      height:400, 
      opacity:0.2,
      duration:3,
      scrollTrigger: {
        trigger: ".about_page",
        start:"top centre",
        pin:"true",
        scrub:"true",
        markers:"true",
        toggleActions:"restart pause reverse pause"
        
      }
    })
  },[])
  useGSAP(()=>{
    gsap.to(".circle7",{
       width:400,
      height:400, 
      duration:3,
      scrollTrigger: {
        trigger: ".contact_page",
        start:"top centre",
        pin:"true",
        scrub:"true",
        markers:"true",
        toggleActions:"restart pause reverse pause"
        
      }
    })
  },[])
  useGSAP(()=>{
    gsap.to(".circle8",{
       width:400,
       borderRadius:"none",
      height:400, 
      opacity:0.2,
      duration:3,
      scrollTrigger: {
        trigger: ".about_page",
        start:"top centre",
        pin:"true",
        scrub:"true",
        markers:"true",
        toggleActions:"restart pause reverse pause"
        
      }
    })
  },[])
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
          <hr/>
        <div ref={con} className="content">
        <div class="context"><div className="text">M</div><div className="text">A</div><div className="text">K</div><div className="text">E</div><div className="text">&nbsp;</div><div className="text">Y</div><div className="text">O</div><div className="text">U</div><div className="text">R</div><div className="text">&nbsp;</div><div className="text">W</div><div className="text">E</div><div className="text">B</div><div className="text">I</div><div className="text">T</div><div className="text">E</div><div className="text">S</div></div>
          <div class="context"><div className="text">L</div><div className="text">O</div><div className="text">O</div><div className="text">K</div><div className="text">&nbsp;</div><div className="text">M</div><div className="text">O</div><div className="text">R</div><div className="text">E</div></div>
          <div class="context"><div className="text" id="red-text">A</div><div className="text" id="red-text">T</div><div className="text" id="red-text">T</div><div className="text" id="red-text">R</div><div className="text" id="red-text">A</div><div className="text" id="red-text">C</div><div className="text" id="red-text">T</div><div className="text" id="red-text">I</div><div className="text" id="red-text">V</div><div className="text" id="red-text">E</div></div>
        </div>
      <div className="text2">
        <span >
      &#123;
        </span>
        <p>
    Scroll down <br/>to know more
        </p>
    <span >
      &#125;
        </span>
      </div>
      </div>

      <div className="service_page">
        <div className="text3">
          SERVICES THAT WE HAVE
        </div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="rows">
        <div className="service">
            <h3>Box-Shadow</h3>
            <p>Get The Best test series for jee advanced consisting of questions from previous year papers and different prominant books.</p>
            <br/>
            <button>Click Here</button>
        </div>
        <div className="service">
            <h3>Button Design</h3>
            <p>Get The Best test series for jee advanced consisting of questions from previous year papers and different prominant books.</p>
            <br/>
            <button>Click Here</button>
        </div>
        <div className="service">
            <h3>Hover Effects</h3>
            <p>Get The Best test series for jee advanced consisting of questions from previous year papers and different prominant books.</p>
            <br/>
            <button>Click Here</button>
        </div>
    </div>
      </div>
      <div className="about_page">
        <div className="text4">
         <h1>ABOUT US</h1> 
         <p>
         WE ARE A TEAM OF PASSONATE WEB DEVELOPERS FROM INDIA CURRENTLY <br/>
         PURSUING BTECH FROM NITS
         </p>
        </div>
        <div className="partition">
          <div className="circle5"></div>
          <div className="circle6"></div>

          <div className="person1">
            <h2>
            person1
            </h2>
            <h6>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis consequuntur quod aspernatur aut veritatis, non sapiente, nesciunt deserunt aliquid vero expedita quidem culpa dignissimos voluptatem ad animi provident iste. Similique?
            </h6>
            <div className="links">
              <div><IoLogoInstagram/><span>https://www.instagram.com/shubhamsinha803/</span></div>
              <div><FaLinkedin/><span>https://www.linkedin.com/in/shubham-kumar-sinha-137a68257/</span></div>
              <div><FaFacebookF/><span>https://www.linkedin.com/in/shubham-kumar-sinha-137a68257/</span></div>
            </div>
           
            
          </div>
          <div className="line">

          </div>
          <div className="person2">
            <h2>
              Perosn 2
            </h2>
            <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis consequuntur quod aspernatur aut veritatis, non sapiente, nesciunt deserunt aliquid vero expedita quidem culpa dignissimos voluptatem ad animi provident iste. Similique?
            </h6>
            <div className="links">
              
              <div><IoLogoInstagram/><span>https://www.linkedin.com/in/shubham-kumar-sinha-137a68257/</span></div>
              <div><FaLinkedin/><span>https://www.linkedin.com/in/shubham-kumar-sinha-137a68257/</span></div>
              <div><FaFacebookF/><span>https://www.linkedin.com/in/shubham-kumar-sinha-137a68257/</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_page">
        <div className="text5">
          <h2>
          CONTACT US
          </h2>
          <p>
            CONTACT US BY FILLING THE FORM BELOW!!
          </p>
        </div>
        <div className="circle7">Hii</div>
        <div className="circle8"></div>

        <div className="form">
          <div className="forms">
          
              <input type="text"  placeholder="Name:"/>
              <input type="email"  placeholder="E-Mail:"/>
              <textarea placeholder="Comment:"/>

              <div className="buttons">
                <button>Clear</button>
                <button>Submit</button>
              </div>
            
      
          </div>
        </div>


      </div>
    </>
  );
};

export default Navbar;
