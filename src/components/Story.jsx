import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import RoundedCorners from './RoudedCorners';
import Button from './Button';

const Story = () => {

    const frameRef = useRef(null);

    const handleMouseLeave = () => {
        const element = frameRef.current;

        if (element) {
        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: "power1.out",
            duration: 0.7,
        });
        }
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((yPos - centerY) / centerY) * -20;
        const rotateY = ((xPos - centerX) / centerX) * 20;

        gsap.to(element, {
        duration: 0.3,
        rotateX,
        rotateY,
        transformPerspective: 500,
        ease: "power1.out",
        duration: 0.7,
        
        });
    }

  return (
    <section id='story' className='min-h-dvh w-screen bg-matteBlack text-blue-50'>
        <div className='flex size-full flex-col items-center pt-10 '>
            <p className="font-Berserker text-sm uppercase md:text-[20px]">The Mythic Realms Universe</p>

            <div className='relative size-full'>
            <AnimatedTitle
                title="the story of God of war"
                sectionId="#story"
                containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />
            <div className='story-img-container'>
                <div className='story-img-mask'>
                    <div className='story-img-content'>
                        <img
                            ref={frameRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave} 
                            src='/img/entrance.webp'
                            alt='entrance'
                            className='object-contain'
                        />
                    </div>
                </div>
                <RoundedCorners />
            </div>
            </div>
            <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
            Where worlds collide, stands the Axis of Yggdrasil. 
            Uncover its mysteries and forge your destiny amidst the echoes of gods and legends.
            </p>

            <a href="https://www.playstation.com/en-us/god-of-war/?" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <Button
              id="realm-btn"
              title="discover more"
              containerClass="mt-5"
            />
            </a>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Story