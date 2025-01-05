import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'

const ImageClip = ({src, clipClass}) => (
  <div className={clipClass}>
    <img src={src}/>
  </div>
)

const Contact = () => {
  return (
    <div id='contact' className=' min-h-96 w-screen'>
      <div className='relative bg-matteBlack py-24 text-blue-50 sm:overflow-hidden'>
        <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
        <ImageClip
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClip
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClip
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClip
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-Berserker text-[20px] uppercase">
            Contact the Creator
          </p>

          <AnimatedTitle
            title="Let's forge the <br />next age of myth <br />and legend together."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <a href="https://www.linkedin.com/in/muditha-kalansooriya-845b9a314" 
            target="_blank" 
            rel="noopener noreferrer"
            >
          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact