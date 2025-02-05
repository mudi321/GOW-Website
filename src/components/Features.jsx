import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"

//CardTilt
const BentoTilt = ({children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;
        
        const {left, top, width, height} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 7; // Tilt angle control
        const tiltY = (relativeX - 0.5) * -7;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) 
        scale3d(0.95, 0.95, 0.95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle}}>
            {children}
        </div>
    )
}

const BentoCard = ({src, title, description, isComingSoon }) => {
    return (
        <div className="relative size-full">
            <video 
            src={src} 
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-White">
                <div>
                    <h1 className="bento-title special-font text-lightBlue">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base font-circular-web">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
  return (
    <section id="About" className='bg-matteBlack'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-Berserker text-lg text-blue-50'>
                    Step into the Realm of Gods and Legends.
                </p>
                <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                    Immerse yourself in a vast and ever-evolving mythos where epic tales, 
                    legendary battles, and divine realms converge into an unforgettable journey 
                    through the Norse cosmos.
                </p>
            </div>

            <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <a href="https://www.playstation.com/en-us/games/god-of-war/pc/" 
                target="_blank" 
                rel="noopener noreferrer">
                    <BentoCard
                        src="videos/t1.webm"
                        title={<>GOD OF WAR ON PC</>}
                        description="Kratos and Atreus' 2018 adventure is now available on Steam and Epic Games Store with a range of optimizations for PC players."
                        isComingSoon
                    />
                </a>
            </BentoTilt>

            <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
                <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <a href="https://www.playstation.com/en-us/games/god-of-war/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <BentoCard
                            src="videos/feature-2.webm"
                            title={<>Evolution of Kratos</>}
                            description="Core developers of God of War Ragnarok delve into the journey of shaping Kratos, the stoic warrior, into a multifaceted father and battle-hardened legend, embodying strength and vulnerability."
                        />
                    </a>
                </BentoTilt>
                <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                    <a href="https://www.playstation.com/en-us/god-of-war/#behindthescenes?" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <BentoCard 
                            src="videos/feature-3.webm"
                            title={<>Behind the scenes</>}
                            description="Learn more about the making of God of War Ragnarök and God of War 2018 from the creators at Santa Monica Studio."
                        />
                    </a>
                </BentoTilt>
                <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                    <a href="https://www.playstation.com/en-us/god-of-war/?" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <BentoCard 
                            src="videos/GOWRG_RevealTrailer_Thor.mp4"
                            title={<>Community</>}
                            description="Join the community and share God of War artwork, cosplay and much more."
                        />
                    </a>
                </BentoTilt>

                <BentoTilt className="bento-tilt_2">
                <a href="https://www.playstation.com/en-us/god-of-war/?" 
                target="_blank" 
                rel="noopener noreferrer">
                    <BentoCard 
                        src="videos/GOWRG_RevealTrailer_Vista.mp4"
                        title={<>Explore more</>} 
                    />
                    </a> 
                </BentoTilt>

                <BentoTilt className="bento-tilt_2">
                <a href="https://www.playstation.com/en-us/god-of-war/?" 
                target="_blank" 
                rel="noopener noreferrer">
                    <video
                        src="videos/GOWRG_RevealTrailer_Logo.mp4"
                        loop
                        muted
                        autoPlay
                        className="size-full object-cover object-center"
                    />
                </a>
                </BentoTilt>              
            </div>
        </div>
    </section>
  )
}

export default Features