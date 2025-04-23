import React, { useEffect, useState, useRef } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import { Button } from './Button';
import { useWindowScroll } from 'react-use';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'; 

const navItems = ['sobre', 'Projeto/Atividade', 'Transparencia', 'Seja Volutário', 'Noticias', 'Contato'];

export const Navbar = () => {
    const navContainerRef = useRef(null);
    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);  
    
    const handlerClick =  (() => {
      href='Local'
    })
    
    useEffect(() => {
      if (currentScrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current.classList.remove("floating-nav");
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
        navContainerRef.current.classList.add("floating-nav");
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
        navContainerRef.current.classList.add("floating-nav");
      }
  
      setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);
  
    useEffect(() => {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }, [isNavVisible]);
    

    return (
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            <div className="flex items-center gap-7">
              <img src="/img/Logo.png" alt="logo" className="w-14 h-14 object-contain rounded-lg" />
  
              <Button
                id="Doacao-button"
                title="Transforme Vidas"
                onClick={handlerClick}
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              />
            </div>
  
            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  };