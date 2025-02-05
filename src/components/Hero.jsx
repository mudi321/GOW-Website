import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { FaLocationArrow } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import BentoTilt from './BentoTilt';

gsap.registerPlugin(ScrollTrigger);

// Need to make the mini player responsive to mouse cursor like the orginal

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const currentVideoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVideoClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  const getVideoSource = (index) => `videos/hero-${index}.webm`;

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  


  return (
    <div id='Hero' className='relative h-dvh w-screen overflow-x-hidden bg-bloodRed'>

      {isLoading && (
        <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-gold'>
          <div className='three-body'>
            <div className='three-body__dot'/>
            <div className='three-body__dot'/>
            <div className='three-body__dot'/>
          </div>
        </div>
      )}

        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-light'>
            <div>
                <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                  <div onClick={handleMiniVideoClick} 
                  className='origin-center scale-50 opacity-0 transition-all duration-700 ease-in hover:scale-100 hover:opacity-100'>
                    {/* Mini Player Video */}
                    <video 
                      ref={nextVideoRef}
                      src={getVideoSource((currentIndex % totalVideos) + 1)}
                      loop
                      muted
                      id="current-video"
                      className='size-64 origin-center scale-150 object-cover object-center'
                      onLoadedData={handleVideoLoad}
                    />
                  </div>
                </div>
              {/* Primary video */}
              
              <video 
              
              ref={nextVideoRef}
              src={getVideoSource(currentIndex)}
              loop
              muted
              id="next-video"
              className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
              onLoadedData={handleVideoLoad}
              />
              
              <video
               src={getVideoSource(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
               autoPlay
               loop
               muted
               className='absolute left-0 top-0 size-full object-cover object-center'
               onLoadedData={handleVideoLoad}
              />
            </div>
            {/* <h1 className='special-font hero-heading-top absolute bottom-5 right-5 z-40 text-blue-75'>
              Gaming
            </h1> */}
              
                <h1 className='special-font font-Berserker absolute bottom-5 text-center right-5 z-40 text-white text-2xl hidden sm:block'>
                The path to redemption is not carved by words,<br /> but by the weight of actions borne in battle <br />-Kratos-
                </h1>
                
                
            <div className='absolute left-0 top-0 z-40 size-full'>
              <div className='mt-24 px-5 sm:px-10'>
                <h1 className="special-font hero-heading-top text-bloodRed">
                {/* redefi<b>n</b>e */}
                God Of War
                </h1>
                <p className="font-Berserker text-lightBlue text-xl hidden sm:block">
                Ascend to the Pantheon Layer -
                </p>
                <p className="mb-5 font-Berserker text-lightBlue text-xl">
                Unleash the Power of the Norse Realms
                </p>
                <a href="https://www.youtube.com/watch?v=hfJ4Km46A-0&t=30s" 
                target="_blank" 
                rel="noopener noreferrer">
                  <Button id='watch-trailer' title="Watch Trailer" leftIcon={<FaLocationArrow />}
                  containerClass="bg-gold flex-center gap-1"/>
                </a>
              </div>
              
            </div>
        </div>
          <h1 className='special-font font-Berserker absolute bottom-5 text-center right-5 text-black text-2xl hidden sm:block'>
            The path to redemption is not carved by words,<br /> but by the weight of actions borne in battle <br />-Kratos-
          </h1>
    </div>
  )
}

export default Hero