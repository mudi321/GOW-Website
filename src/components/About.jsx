import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
          });
    })

  return (
    <div id='about' className='min-h-screen w-screen pointer-events-none'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='text-sm font-Berserker uppercase md:text-[20px]'>
                Welcome to God of War
            </h2>

            <AnimatedTitle title="Embark on the Greatest Mythic Journey Ever Told"
            containerClass="mt-5 !text-black text-center"/>
            

            <div className='about-subtext'>
                <p>Game of the year 2018</p>
                <p>Valhalla binds every warrior across realms and legends.</p>
            </div>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'>
                <img src="img/about.webp"
                alt="Background"
                className='absolute left-0 top-0 size-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default About