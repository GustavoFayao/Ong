import React, { useEffect, useState, useRef } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import { Button } from './Button';
import { useWindowScroll } from 'react-use';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { NavLink, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Sobre', path: '/' },
  { name: 'Projeto/Atividade', path: '/projeto-atividade' },
  { name: 'Transparência', path: '/transparencia' },
  { name: 'Seja Voluntário', path: '/seja-voluntario' },
  { name: 'Notícias', path: '/noticias' },
  { name: 'Contato', path: '/contato' }
];

export const Navbar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (hash) => {
    if (window.location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useGSAP(() => {
    if (!navContainerRef.current) return;

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
            <img
              src="/img/Logo.png"
              alt="logo"
              className="w-14 h-14 object-contain rounded-lg cursor-pointer"
              onClick={() => navigate('/')}
            />

            <Button
              title="Transforme Vidas"
              to='/doacao'
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 flex items-center justify-center gap-1 hover:bg-blue-100 transition-colors"
             />
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>

          <div className="hidden md:flex gap-6">
            {navItems.map((item) =>
              item.path.startsWith('/#') ? (
                <button
                  key={item.path}
                  onClick={() => scrollToSection(item.path)}
                  className="nav-hover-btn text-violet-50 transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-hover-btn ${isActive ? 'text-violet-50 font-medium' : 'text-violet-50'} transition-colors`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>
        </nav>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 bg-purple-700 w-full p-4 flex flex-col gap-4 md:hidden z-40">
            {navItems.map((item) =>
              item.path.startsWith('/#') ? (
                <button
                  key={item.path}
                  onClick={() => {
                    scrollToSection(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white text-left"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-left"
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>
        )}
      </header>
    </div>
  );
};
