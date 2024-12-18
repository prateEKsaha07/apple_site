import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { heroVideo,smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }
  useEffect(() =>{
    window.addEventListener("resize", handleVideoSrcSet)

    return () => {
      window.removeEventListener("resize",handleVideoSrcSet)
    }
  },[])

  useGSAP(() =>{
    gsap.to("#hero", {
      opacity: 1,       
      delay: 1.5,        //making a delay in animation of 1.5 sec after reload
    })
    gsap.to("#cta ", {
      opacity:1,
      y: -50,
      delay: 2,
    })
  },[]);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
      <p id ="hero" className="hero-title">iphone 15 pro</p>
      <div className="md:10/12 w-9/12">
      <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      </div>
      </div>
      <div className="flex flex-col items-center opacity-0  translate-y-20  " id="cta" >
        <a href="#highlights" className="btn">buy</a>
        <p className="font-normal text-xl">from $199/month or $999</p>
      </div>
      </section>
 
  )
}

export default Hero