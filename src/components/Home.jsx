import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { TiLocation, TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setMobile] = useState(false);
  const handlerClick =  (() => {
    alert('botao clicado!')
  })
  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath:'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%'
     })
    
    gsap.from('#video-frame', {
      clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start:'center center',
        end: 'bottom center',
        scrub: true,
      }
    })

  },{dependencies: [currentIndex], revertOnUpdate: true})

  useEffect(() => {
    const checkMobile = () => {
      setMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getVideoSrc = (index) => {
    const deviceType = isMobile ? 'mobile' : 'desktop';
    return `videos/mulher-${deviceType}-${index}.mp4`;
  };

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className='relative z-10 h-dvh overflow-hidden rounded-lg bg-blue-75'>
        <video
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          className='absolute left-0 top-0 size-full object-cover object-center'
        />

        <h1 className='special-font hero-heading bottom-5 right-5 z-40 text-blue-75'>
          C<b>a</b>sa
        </h1>

        <div className='absolute left-0 top-0 z-40 size-120'>
          <div className='mt-24 px-5 sm:px-10'>
            <h1 className='special-font hero-heading text-blue-100'>Juntas</h1>            
            <h1 className='special-font hero-heading text-blue-100'>Somos Fortes</h1>
            <h1 className='special-font hero-heading text-blue-100'></h1>
            <p className='mb-10 max-w-2xl text-lg sm:text-xl md:text-2xl font-robert-regular text-blue-100'>
              A casa da mulher de Ribeirão Preto: apoio, proteção e transformação para um futuro livre de violência. 
              Venha conhecer mais sobre nossos trabalhos e ações.
            </p>
            <Button id="local" onclick={handlerClick} title="Venha Conhecer" leftIcon={<TiLocationArrow/>}
            containerClass="bg-yellow-300 flex-center gap-1"/>
          </div>
        </div>
      </div>
    </div>
  );
};
