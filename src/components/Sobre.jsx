import { useGSAP } from '@gsap/react';
import { useState, useEffect } from 'react'; // Corrigido: useEffect adicionado
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { AnimatedTitle } from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

export const Sobre = () => {
  const [isMobile, setMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Adicionado: estado para controlar o índice da imagem

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  }, []); 

  useEffect(() => {
    const checkMobile = () => {
      setMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getImagemSrc = (index) => {
    const deviceType = isMobile ? 'mobile' : 'desktop';
    return `/img/background-${deviceType}-${index}.png`; 
  };

  return (
    <div id="sobre" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 px-6 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase md:text-base">
          Bem Vinda!
        </p>
        <div className="about-subtext mt-4">
          <p className="text-lg font-medium">
            Nós, da Casa da Mulher, estamos na luta pelos direitos das mulheres
          </p>
          <p className="text-gray-500 text-base mt-2">
            Acreditamos que toda mulher merece acolhimento, respeito e ser tratada com dignidade — sempre
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image overflow-hidden w-full h-full">
          <img
            src={getImagemSrc(currentImageIndex)}             
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};